// 状态管理
const State = {
    searchTerm: '',
    activeChar: null,
    searchMode: 'similar', 
    data: [],
    stats: {},
    hotListPage: 0 // 0-indexed
};

const HOT_PAGE_SIZE = 36; // 3, 4, 6 columns compatible

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    State.data = window.AppLibrary.parseData();
    State.stats = window.AppLibrary.calculateStats(State.data);
    
    animateValue("header-stat-groups", 0, State.stats.totalGroups, 1500);
    animateValue("header-stat-relations", 0, State.stats.totalRelations, 2000);

    lucide.createIcons();
    
    // URL 直达逻辑优化
    const urlParams = new URLSearchParams(window.location.search);
    const q = urlParams.get('q');
    const mode = urlParams.get('mode');

    if (mode && (mode === 'similar' || mode === 'radical')) {
        setSearchMode(mode, false);
    } else {
        setSearchMode('similar', false);
    }

    if (q) {
        // 立即调整布局，避免动画跳变
        adjustLayoutForSearch(true);
        handleSearch(q, false);
    } else {
        renderContent();
    }
    
    const mainInput = document.getElementById('main-search-input');
    mainInput.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') triggerSearch();
    });
    
    mainInput.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        const clearBtn = document.getElementById('main-clear-btn');
        if(clearBtn) clearBtn.style.display = val ? 'block' : 'none';
    });

    const clearBtn = document.getElementById('main-clear-btn');
    if(clearBtn) clearBtn.onclick = () => resetApp();

    window.addEventListener('popstate', () => {
        const params = new URLSearchParams(window.location.search);
        const popQ = params.get('q') || '';
        const popMode = params.get('mode') || 'similar';
        State.searchMode = popMode;
        updateTabStyles();
        
        if(popQ) adjustLayoutForSearch(true);
        else adjustLayoutForSearch(false);
        
        handleSearch(popQ, false); 
    });
});

// ==================== 主题控制 ====================
function initTheme() {
    const btn = document.getElementById('theme-toggle-btn');
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        if(btn) btn.title = "切换到日间模式";
    } else {
        document.documentElement.classList.remove('dark');
        if(btn) btn.title = "切换到深色模式";
    }
}

function toggleTheme() {
    const html = document.documentElement;
    const btn = document.getElementById('theme-toggle-btn');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.theme = 'light';
        if(btn) btn.title = "切换到深色模式";
    } else {
        html.classList.add('dark');
        localStorage.theme = 'dark';
        if(btn) btn.title = "切换到日间模式";
    }
    lucide.createIcons();
}

// ==================== 逻辑控制 ====================

function triggerSearch() {
    const input = document.getElementById('main-search-input');
    handleSearch(input.value);
}

function handleSearch(value, updateUrl = true) {
    const val = value.trim();
    State.searchTerm = val;
    State.activeChar = val ? val.charAt(0) : null;
    
    const input = document.getElementById('main-search-input');
    if (input.value !== val) input.value = val;
    
    const clearBtn = document.getElementById('main-clear-btn');
    if(clearBtn) clearBtn.style.display = val ? 'block' : 'none';

    adjustLayoutForSearch(!!State.activeChar);

    if (updateUrl) {
        updateURLState();
    }

    renderContent();
}

function resetApp() {
    handleSearch('');
}

function handleRandom() {
    const keys = Object.keys(State.stats.frequencyMap);
    if (keys.length > 0) {
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        handleSearch(randomKey);
    }
}

function setSearchMode(mode, updateUrl = true) {
    State.searchMode = mode;
    updateTabStyles();
    if (updateUrl) updateURLState();
    if (State.activeChar) renderContent();
}

function updateTabStyles() {
    document.querySelectorAll('.search-tab').forEach(btn => {
        const isTarget = btn.dataset.mode === State.searchMode;
        const dot = btn.querySelector('.tab-dot');
        if (isTarget) {
            btn.classList.add('active', 'text-slate-900', 'dark:text-white');
            btn.classList.remove('text-slate-400', 'dark:text-slate-500');
            if(dot) dot.classList.remove('scale-0');
        } else {
            btn.classList.remove('active', 'text-slate-900', 'dark:text-white');
            btn.classList.add('text-slate-400', 'dark:text-slate-500');
            if(dot) dot.classList.add('scale-0');
        }
    });
}

function updateURLState() {
    const url = new URL(window.location);
    if (State.activeChar) {
        url.searchParams.set('q', State.activeChar);
    } else {
        url.searchParams.delete('q');
    }
    url.searchParams.set('mode', State.searchMode);
    window.history.pushState({}, '', url);
}

function adjustLayoutForSearch(isSearching) {
    const logo = document.getElementById('main-logo');
    const container = document.getElementById('search-container');
    
    if (isSearching) {
        logo.classList.replace('h-14', 'h-9');
        logo.classList.add('mb-6');
        logo.classList.remove('mb-10');
        container.classList.remove('mt-16', 'mb-8');
        container.classList.add('mt-6', 'mb-6');
    } else {
        logo.classList.replace('h-9', 'h-14');
        logo.classList.remove('mb-6');
        logo.classList.add('mb-10');
        container.classList.add('mt-16', 'mb-8');
        container.classList.remove('mt-6', 'mb-6');
    }
}

function copyToClipboard(char) {
    navigator.clipboard.writeText(char).then(() => {
        const toast = document.getElementById('toast');
        const msg = document.getElementById('toast-message');
        msg.textContent = `${char} 已复制`;
        toast.classList.remove('opacity-0', 'translate-y-8', 'scale-95', 'pointer-events-none');
        setTimeout(() => {
            toast.classList.add('opacity-0', 'translate-y-8', 'scale-95', 'pointer-events-none');
        }, 2000);
    });
}

function openZdic(e, char) {
    e.stopPropagation();
    window.open(`https://www.zdic.net/hans/${char}`, '_blank');
}

function changeHotPage(delta) {
    const maxPages = Math.ceil(Object.keys(State.stats.frequencyMap).length / HOT_PAGE_SIZE);
    const newPage = State.hotListPage + delta;
    
    if (newPage >= 0 && newPage < maxPages) {
        State.hotListPage = newPage;
        renderContent(); // Re-render dashboard
    }
}

// ---------------- 模态框逻辑 ----------------

function showHeatSources(e, char) {
    e.stopPropagation();
    
    const parents = State.data.filter(d => d.similars.includes(char) || d.radicals.includes(char));
    const heat = State.stats.frequencyMap[char] || 0;

    document.getElementById('modal-char-icon').textContent = char;
    document.getElementById('modal-heat-val').textContent = heat;
    
    const listEl = document.getElementById('modal-source-list');
    listEl.innerHTML = parents.map(p => `
        <div onclick="closeHeatModal(); handleSearch('${p.key}')" class="flex flex-col items-center justify-center aspect-square bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5 hover:bg-orange-50 dark:hover:bg-orange-500/20 hover:border-orange-200 dark:hover:border-orange-500/30 cursor-pointer transition-colors group">
            <span class="text-xl font-serif font-bold text-slate-700 dark:text-slate-200 group-hover:text-orange-600 dark:group-hover:text-orange-400">${p.key}</span>
        </div>
    `).join('');

    const modal = document.getElementById('heat-source-modal');
    const backdrop = modal.querySelector('.modal-backdrop');
    const content = modal.querySelector('.modal-content');
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    requestAnimationFrame(() => {
        backdrop.classList.remove('opacity-0');
        content.classList.remove('opacity-0', 'scale-95');
        content.classList.add('opacity-100', 'scale-100');
    });
}

function closeHeatModal() {
    const modal = document.getElementById('heat-source-modal');
    const backdrop = modal.querySelector('.modal-backdrop');
    const content = modal.querySelector('.modal-content');

    backdrop.classList.add('opacity-0');
    content.classList.remove('opacity-100', 'scale-100');
    content.classList.add('opacity-0', 'scale-95');

    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }, 300);
}

function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    if(!obj) return;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// ==================== 渲染逻辑 (UI) ====================

function renderContent() {
    const container = document.getElementById('content-area');
    
    if (!State.activeChar) {
        renderDashboard(container);
        return;
    }

    const asParent = State.data.find(d => d.key === State.activeChar);
    const asChildSim = State.data.filter(d => d.similars.includes(State.activeChar));
    const asChildRad = State.data.filter(d => d.radicals.includes(State.activeChar));

    let html = '';
    let hasResults = false;
    const mode = State.searchMode;

    if (mode === 'similar') {
        if (asParent && asParent.similars.length > 0) {
            hasResults = true;
            html += generateSectionHtml(State.activeChar, '形近字', '近似/朋友', 'text-teal-900 dark:text-teal-100', 'bg-teal-100/50 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200', asParent.similars);
        }
        if (asChildSim.length > 0) {
            hasResults = true;
            html += `<div class="mt-12 opacity-0 animate-fade-in" style="animation-delay: 0.1s; animation-fill-mode: forwards;">
                <h3 class="text-xs font-bold text-slate-400 dark:text-slate-500 mb-6 pl-2 flex items-center gap-2 uppercase tracking-widest opacity-60">
                    <i data-lucide="git-merge" width="12"></i> 反向索引
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${generateParentGroupHtml('出现在以下组中', 'text-teal-600 dark:text-teal-400', asChildSim)}
                </div></div>`;
        }
    }

    if (mode === 'radical') {
        if (asParent && asParent.radicals.length > 0) {
            hasResults = true;
            html += generateSectionHtml(State.activeChar, '同部首/族亲', '家人/子女', 'text-indigo-900 dark:text-indigo-100', 'bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200', asParent.radicals);
        }
        if (asChildRad.length > 0) {
            hasResults = true;
            html += `<div class="mt-12 opacity-0 animate-fade-in" style="animation-delay: 0.1s; animation-fill-mode: forwards;">
                <h3 class="text-xs font-bold text-slate-400 dark:text-slate-500 mb-6 pl-2 flex items-center gap-2 uppercase tracking-widest opacity-60">
                    <i data-lucide="git-merge" width="12"></i> 反向索引
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${generateParentGroupHtml('出现在以下组中', 'text-indigo-600 dark:text-indigo-400', asChildRad)}
                </div></div>`;
        }
    }

    if (!hasResults) {
        const modeName = mode === 'similar' ? '形近字' : '部首';
        html = `
            <div class="text-center py-28 bg-white/60 dark:bg-[#111111]/60 backdrop-blur-xl rounded-[2rem] border border-white/50 dark:border-white/5 mt-8 shadow-sm">
                <div class="w-20 h-20 bg-slate-100/50 dark:bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i data-lucide="search-x" class="text-slate-300 dark:text-slate-600" width="32"></i>
                </div>
                <h3 class="text-xl font-bold text-slate-700 dark:text-slate-300">暂无"${State.activeChar}"的${modeName}数据</h3>
                <p class="text-slate-400 dark:text-slate-500 mt-2 text-sm font-medium">请尝试切换分类或搜索其他汉字</p>
            </div>
        `;
    }

    container.innerHTML = html;
    lucide.createIcons();
}

function renderDashboard(container) {
    const allHotChars = Object.entries(State.stats.frequencyMap).sort((a, b) => b[1] - a[1]);
    const totalItems = allHotChars.length;
    const totalPages = Math.ceil(totalItems / HOT_PAGE_SIZE);
    
    // 分页切片
    const startIdx = State.hotListPage * HOT_PAGE_SIZE;
    const endIdx = startIdx + HOT_PAGE_SIZE;
    const displayChars = allHotChars.slice(startIdx, endIdx);

    // 翻页按钮是否禁用
    const prevDisabled = State.hotListPage === 0;
    const nextDisabled = State.hotListPage >= totalPages - 1;

    container.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
            <!-- 热力榜 (Glass + Grid Layout) -->
            <div class="lg:col-span-2 bg-white/60 dark:bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-white/60 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none relative overflow-hidden group">
                <!-- Decorative Gradient -->
                <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-100/40 to-transparent dark:from-orange-900/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                
                <div class="flex items-center justify-between mb-8 relative z-10">
                    <h3 class="font-bold text-lg text-slate-800 dark:text-slate-200 flex items-center gap-3">
                        <div class="p-2 bg-white dark:bg-slate-700 rounded-xl shadow-sm border border-slate-100 dark:border-slate-600">
                            <i data-lucide="trending-up" width="18" class="text-orange-500"></i>
                        </div>
                        <span>高频热字榜</span>
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 ml-2">Page ${State.hotListPage + 1}/${totalPages}</span>
                    </h3>
                    
                    <!-- Pagination Controls -->
                    <div class="flex items-center gap-2">
                        <button onclick="changeHotPage(-1)" class="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all" ${prevDisabled ? 'disabled' : ''}>
                            <i data-lucide="chevron-left" width="16"></i>
                        </button>
                        <button onclick="changeHotPage(1)" class="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all" ${nextDisabled ? 'disabled' : ''}>
                            <i data-lucide="chevron-right" width="16"></i>
                        </button>
                    </div>
                </div>

                <!-- Strict Grid Layout for Hot Cards -->
                <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 relative z-10">
                    ${displayChars.map(([char, heat]) => `
                        <div onclick="handleSearch('${char}')" class="group/card cursor-pointer bg-white/80 dark:bg-[#1a1a1a]/80 hover:bg-white dark:hover:bg-[#222] rounded-xl border border-white dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between px-3 py-2.5 hover:-translate-y-0.5 active:scale-95 active:shadow-none">
                            <span class="font-serif text-lg font-bold text-slate-700 dark:text-slate-200 leading-none group-hover/card:text-teal-700 dark:group-hover/card:text-teal-400 transition-colors">${char}</span>
                            
                            <!-- Heat Badge (Clickable for Modal) -->
                            <div onclick="showHeatSources(event, '${char}')" class="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-500 px-1.5 py-0.5 rounded-md flex items-center gap-0.5 hover:bg-orange-100 dark:hover:bg-orange-900/30 hover:text-orange-600 dark:hover:text-orange-400 transition-colors cursor-pointer" title="点击查看热力溯源">
                                <i data-lucide="flame" width="10" class="fill-orange-400 text-orange-400 dark:text-orange-500 dark:fill-orange-500"></i>
                                ${heat}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- 说明区 (Glass) -->
            <div class="bg-white/60 dark:bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-white/60 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none flex flex-col relative h-full">
                <h3 class="font-bold text-lg mb-8 flex items-center gap-3 text-slate-800 dark:text-slate-200">
                    <div class="p-2 bg-white dark:bg-slate-700 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                         <i data-lucide="book-open" width="18" class="text-slate-500 dark:text-slate-400"></i>
                    </div>
                    使用说明
                </h3>
                <ul class="space-y-6 text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1 list-none pl-1">
                    <li class="flex items-start gap-4">
                        <span class="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-2 shrink-0"></span>
                        <span>在上方搜索框输入单个汉字。</span>
                    </li>
                    <li class="flex items-start gap-4">
                        <span class="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-2 shrink-0"></span>
                        <span>点击热榜 <i data-lucide="flame" width="10" class="inline"></i> 数字查看出现位置。</span>
                    </li>
                    <li class="flex items-start gap-4">
                        <span class="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-2 shrink-0"></span>
                        <span>悬浮卡片可复制，右上角图标跳转汉典。</span>
                    </li>
                </ul>
            </div>
        </div>
    `;
    lucide.createIcons();
}

function generateSectionHtml(activeChar, title, subTitle, titleColor, badgeClass, chars) {
    return `
        <div class="bg-white/70 dark:bg-[#111111]/70 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] dark:shadow-none border border-white/60 dark:border-white/5 mb-8">
            <div class="flex items-center gap-6 mb-10 pb-8 border-b border-slate-100/80 dark:border-slate-800">
                <div class="w-20 h-20 rounded-[1.2rem] bg-white dark:bg-[#1a1a1a] border border-slate-100 dark:border-white/5 flex items-center justify-center font-serif font-bold text-5xl text-slate-800 dark:text-white shadow-[0_8px_16px_-4px_rgba(0,0,0,0.05)] dark:shadow-none">
                    ${activeChar}
                </div>
                <div class="flex flex-col">
                    <h3 class="text-2xl font-bold ${titleColor} tracking-tight mb-2">
                        ${title}
                    </h3>
                    <span class="text-[11px] font-bold tracking-wider ${badgeClass} px-3 py-1 rounded-full w-fit uppercase">
                        ${subTitle}
                    </span>
                </div>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-5">
                ${chars.map(c => generateCardHtml(c)).join('')}
            </div>
        </div>
    `;
}

function generateParentGroupHtml(title, colorClass, groups) {
    return `
        <div class="bg-white/40 dark:bg-[#111111]/40 backdrop-blur-md rounded-[1.5rem] p-8 border border-white/50 dark:border-white/5 shadow-sm dark:shadow-none">
            <h4 class="text-[10px] font-bold ${colorClass} mb-6 uppercase tracking-widest bg-white/80 dark:bg-[#1a1a1a] px-3 py-1.5 rounded-lg w-fit shadow-sm dark:shadow-none">${title}</h4>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                ${groups.map(g => generateCardHtml(g.key, true)).join('')}
            </div>
        </div>
    `;
}

// 高级感卡片设计
function generateCardHtml(char, isSmall = false) {
    const heat = State.stats.frequencyMap[char] || 0;
    
    const sizeClass = isSmall ? "text-3xl" : "text-5xl";
    const heightClass = isSmall ? "h-28" : "h-36";
    
    return `
        <div 
            onclick="copyToClipboard('${char}')"
            class="group relative flex flex-col items-center justify-center bg-white/80 dark:bg-[#161616] backdrop-blur-sm rounded-2xl ${heightClass} shadow-[0_4px_12px_rgba(0,0,0,0.02)] dark:shadow-none border border-white/80 dark:border-white/5 hover:border-blue-100 dark:hover:border-slate-700 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.08)] dark:hover:shadow-none hover:-translate-y-1 transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) cursor-pointer select-none overflow-hidden"
        >
            <!-- 汉典链接 -->
            <button onclick="openZdic(event, '${char}')" class="absolute top-2.5 right-2.5 p-1.5 text-slate-300 dark:text-slate-700 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-300 z-20" title="汉典">
                <i data-lucide="external-link" width="14"></i>
            </button>
            
            <!-- 主字符 -->
            <div class="${sizeClass} font-serif font-medium text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white group-hover:scale-110 transition-all duration-500 z-10 mb-2">
                ${char}
            </div>

            <!-- 底部热力值 (小火苗) -->
            <div class="absolute bottom-3 flex items-center gap-1 opacity-80 group-hover:opacity-0 transition-opacity duration-300">
                <i data-lucide="flame" width="12" class="fill-orange-400 text-orange-400 dark:text-orange-500 dark:fill-orange-500"></i>
                <span class="text-[10px] font-bold text-slate-400 dark:text-slate-600 font-sans">${heat}</span>
            </div>
            
            <!-- 悬停提示 -->
            <div class="absolute bottom-0 left-0 right-0 h-9 bg-slate-900/5 dark:bg-white/5 backdrop-blur-[2px] border-t border-slate-100 dark:border-white/5 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-30">
                <span class="text-[10px] font-bold text-slate-600 dark:text-slate-400 tracking-wide">点击复制</span>
            </div>
        </div>
    `;
}