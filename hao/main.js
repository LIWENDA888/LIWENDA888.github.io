document.addEventListener('DOMContentLoaded', () => {
    const { SEARCH_ENGINES, HEADER_LINKS, QUICK_LINKS, CATEGORIES } = window.AppConfig;
    
    let state = {
        isDark: localStorage.getItem('theme') === 'dark',
        glassMode: localStorage.getItem('glassMode') === 'true',
        activeEngine: SEARCH_ENGINES[0],
        activeCategoryId: CATEGORIES[0].id,
        activeSubCategoryIds: {},
        isProgrammaticScroll: false
    };

    CATEGORIES.forEach(cat => {
        if(cat.subCategories && cat.subCategories.length > 0) {
            state.activeSubCategoryIds[cat.id] = cat.subCategories[0].id;
        }
    });

    const renderHeaderLinks = () => {
        const container = document.getElementById('header-links');
        container.innerHTML = HEADER_LINKS.map(link => `
            <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
               class="whitespace-nowrap text-[14px] font-medium text-gray-600/90 dark:text-gray-400 px-3 py-1.5 rounded-lg hover:bg-black/5 hover:text-[#FF8C19] transition-all dark:hover:bg-white/10 dark:hover:text-[#FF8C19]">
               ${link.title}
            </a>
        `).join('');
    };

    const renderQuickLinks = () => {
        const container = document.getElementById('quick-links');
        container.innerHTML = QUICK_LINKS.map(link => `
            <a href="${link.url}" target="_blank" rel="noopener noreferrer"
               class="group relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-2.5 text-sm font-medium text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:bg-white hover:text-[#FF8C19] hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-[#FF8C19] dark:hover:border-gray-600">
               <span class="relative z-10">${link.title}</span>
            </a>
        `).join('');
    };

    const renderEngineSwitcher = () => {
        const container = document.getElementById('engine-switcher');
        container.innerHTML = SEARCH_ENGINES.map(engine => {
            const isActive = state.activeEngine.name === engine.name;
            return `
            <button type="button" data-name="${engine.name}" 
                class="engine-btn relative pb-2 font-medium transition-all duration-300 ${isActive ? 'text-gray-900 dark:text-white scale-105' : 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300'}">
                ${engine.name}
                ${isActive ? '<span class="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full bg-[#FF8C19] shadow-[0_0_10px_rgba(255,140,25,0.8)] transition-all"></span>' : ''}
            </button>`;
        }).join('');

        container.querySelectorAll('.engine-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const name = btn.getAttribute('data-name');
                state.activeEngine = SEARCH_ENGINES.find(e => e.name === name);
                renderEngineSwitcher();
                updateSearchPlaceholder();
            });
        });
    };

    const updateSearchPlaceholder = () => {
        document.getElementById('search-input').placeholder = state.activeEngine.placeholder;
    };

    const renderSidebarLinks = (containerId, isMobile = false) => {
        const container = document.getElementById(containerId);
        container.innerHTML = CATEGORIES.map(cat => {
            const isActive = state.activeCategoryId === cat.id;
            return `
            <a href="#category-${cat.id}" data-id="${cat.id}"
                class="sidebar-link group cursor-pointer relative flex w-full items-center gap-3.5 rounded-xl px-4 py-3.5 text-left text-[15px] font-medium transition-all duration-300 ${
                    isActive 
                    ? 'bg-[#FF8C19] text-white shadow-md' 
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100'
                }">
                <i data-lucide="${cat.icon}" class="h-5 w-5 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}"></i>
                <span class="tracking-wide">${cat.name}</span>
            </a>`;
        }).join('');
        lucide.createIcons();
        container.querySelectorAll('.sidebar-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const id = link.getAttribute('data-id');
                scrollToCategory(id);
                if(isMobile) toggleMobileMenu(false);
            });
        });
    };

    const renderContent = () => {
        const container = document.getElementById('content-area');
        container.innerHTML = CATEGORIES.map(cat => `
            <section id="category-${cat.id}" class="animate-fade-in group/section">
                <div class="panel-container p-8 rounded-3xl transition-all duration-500">
                    <div class="mb-6 flex flex-col items-start gap-4 md:flex-row md:items-center flex-wrap pl-2 border-b border-gray-100 pb-4 dark:border-gray-800">
                        <div class="flex items-center gap-3">
                             <div class="p-2 rounded-lg bg-orange-50 dark:bg-gray-800 text-[#FF8C19]">
                                <i data-lucide="${cat.icon}" class="w-6 h-6"></i>
                             </div>
                             <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 tracking-tight">${cat.name}</h2>
                        </div>
                        <span class="hidden h-5 w-px bg-gray-300 dark:bg-gray-700 md:block mx-2"></span>
                        <div class="flex flex-wrap w-full md:w-auto gap-2" id="tabs-${cat.id}"></div>
                    </div>
                    <div id="grid-${cat.id}" class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6"></div>
                </div>
            </section>
        `).join('');

        CATEGORIES.forEach(cat => {
            renderSubCategoryTabs(cat);
            renderCards(cat);
        });
        lucide.createIcons();
    };

    // 二级分类按钮渲染 (已更新为全圆角+毛玻璃)
    const renderSubCategoryTabs = (cat) => {
        const container = document.getElementById(`tabs-${cat.id}`);
        const activeSubId = state.activeSubCategoryIds[cat.id];
        
        container.innerHTML = cat.subCategories.map(sub => {
            const isActive = sub.id === activeSubId;
            return `
            <button type="button" data-main="${cat.id}" data-sub="${sub.id}"
                class="subcat-btn relative whitespace-nowrap rounded-full px-6 py-2.5 text-[15px] font-semibold transition-all duration-300 ease-out border backdrop-blur-sm ${
                    isActive
                    ? 'border-[#FF8C19] bg-[#FF8C19] text-white shadow-sm'
                    : 'border-white/40 bg-white/40 text-gray-500 hover:bg-white/80 hover:text-gray-700 dark:bg-white/5 dark:text-gray-400 dark:border-white/10 dark:hover:bg-white/10'
                }">
                ${sub.name}
            </button>`;
        }).join('');

        container.querySelectorAll('.subcat-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                state.activeSubCategoryIds[btn.getAttribute('data-main')] = btn.getAttribute('data-sub');
                renderSubCategoryTabs(cat);
                renderCards(cat);
            });
        });
    };

    // 卡片渲染 (已精简视觉效果)
    const renderCards = (cat) => {
        const container = document.getElementById(`grid-${cat.id}`);
        const activeSubId = state.activeSubCategoryIds[cat.id];
        const activeSub = cat.subCategories.find(sub => sub.id === activeSubId);
        
        if (!activeSub) return;
        const { gradient, character } = activeSub.iconConfig || { gradient: 'from-blue-400 to-cyan-400', character: 'S' };

        container.innerHTML = activeSub.sites.map(site => `
            <a href="${site.url}" target="_blank" rel="noopener noreferrer"
               class="site-card group relative flex h-full flex-row items-start gap-4 overflow-hidden rounded-2xl p-5 transition-all duration-300">
                <div class="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-md text-white font-bold text-sm leading-none select-none ring-1 ring-black/5 dark:ring-white/10">
                    ${character}
                </div>
                <div class="relative min-w-0 flex-1 pt-0.5">
                    <h3 class="truncate text-[16px] font-bold text-gray-800 dark:text-gray-100 mb-1">${site.title}</h3>
                    <p class="line-clamp-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">${site.description}</p>
                </div>
            </a>
        `).join('');
    };

    // --- Actions ---
    const scrollToCategory = (id) => {
        state.activeCategoryId = id;
        state.isProgrammaticScroll = true;
        updateSidebarUI();
        const el = document.getElementById(`category-${id}`);
        if (el) {
            window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 110, behavior: "smooth" });
            setTimeout(() => { state.isProgrammaticScroll = false; }, 1200);
        }
    };

    const updateSidebarUI = () => {
        renderSidebarLinks('desktop-nav-links');
        renderSidebarLinks('mobile-nav-links', true);
    };

    window.addEventListener('scroll', () => {
        if (state.isProgrammaticScroll) return;
        let newActiveId = CATEGORIES[0].id;
        for (const cat of CATEGORIES) {
            const el = document.getElementById(`category-${cat.id}`);
            if (el && el.getBoundingClientRect().top <= 200) newActiveId = cat.id; else break;
        }
        if (newActiveId !== state.activeCategoryId) {
            state.activeCategoryId = newActiveId;
            updateSidebarUI();
        }
    });

    const toggleTheme = () => { state.isDark = !state.isDark; localStorage.setItem('theme', state.isDark ? 'dark' : 'light'); applyTheme(); };
    const applyTheme = () => { document.documentElement.classList.toggle('dark', state.isDark); };
    
    const toggleGlassMode = () => { state.glassMode = !state.glassMode; localStorage.setItem('glassMode', state.glassMode); applyGlassMode(); };
    const applyGlassMode = () => {
        document.body.classList.toggle('enable-glass', state.glassMode);
        document.getElementById('glass-icon-off').classList.toggle('hidden', state.glassMode);
        document.getElementById('glass-icon-on').classList.toggle('hidden', !state.glassMode);
    };

    const animateCount = () => {
        const els = [document.getElementById('site-count'), document.getElementById('mobile-site-count')];
        const total = CATEGORIES.reduce((acc, cat) => acc + (cat.subCategories ? cat.subCategories.reduce((s, sub) => s + (sub.sites ? sub.sites.length : 0), 0) : 0), 0);
        let start = 0;
        const timer = setInterval(() => {
            start += Math.ceil(total / 125);
            if (start >= total) { els.forEach(el => el && (el.textContent = total)); clearInterval(timer); } 
            else els.forEach(el => el && (el.textContent = start));
        }, 16);
    };

    document.getElementById('desktop-logo').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('glass-toggle').addEventListener('click', toggleGlassMode);
    
    document.getElementById('search-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const query = document.getElementById('search-input').value;
        if (query.trim()) window.open(`${state.activeEngine.url}${encodeURIComponent(query)}`, '_blank');
    });

    const toggleMobileMenu = (show) => {
        document.getElementById('mobile-sidebar').classList.toggle('translate-x-[-100%]', !show);
        document.getElementById('mobile-sidebar-overlay').classList.toggle('hidden', !show);
    };
    document.getElementById('mobile-menu-btn').addEventListener('click', () => toggleMobileMenu(true));
    document.getElementById('mobile-sidebar-overlay').addEventListener('click', () => toggleMobileMenu(false));

    const modal = document.getElementById('about-modal');
    document.getElementById('about-btn').addEventListener('click', () => modal.classList.add('open'));
    document.getElementById('close-about').addEventListener('click', () => modal.classList.remove('open'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });

    applyTheme();
    applyGlassMode();
    renderHeaderLinks();
    renderQuickLinks();
    renderEngineSwitcher();
    updateSidebarUI();
    renderContent();
    animateCount();
    lucide.createIcons();
});