document.addEventListener('DOMContentLoaded', () => {
    const { SEARCH_ENGINES, HEADER_LINKS, QUICK_LINKS, CATEGORIES } = window.AppConfig;
    
    // 状态管理
    let state = {
        isDark: localStorage.getItem('theme') === 'dark',
        activeEngine: SEARCH_ENGINES[0],
        activeCategoryId: CATEGORIES[0].id,
        activeSubCategoryIds: {}, // { 'A': 'A1', 'B': 'B1' ... }
        isProgrammaticScroll: false
    };

    // 初始化默认子分类
    CATEGORIES.forEach(cat => {
        if(cat.subCategories.length > 0) {
            state.activeSubCategoryIds[cat.id] = cat.subCategories[0].id;
        }
    });

    // --- 渲染函数 ---

    // 1. 渲染顶部链接
    const renderHeaderLinks = () => {
        const container = document.getElementById('header-links');
        container.innerHTML = HEADER_LINKS.map(link => `
            <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
               class="whitespace-nowrap text-[15px] font-medium text-gray-500 dark:text-gray-400 transition-colors hover:text-[#FF8C19] dark:hover:text-[#FF8C19]">
               ${link.title}
            </a>
        `).join('');
    };

    // 2. 渲染快捷链接
    const renderQuickLinks = () => {
        const container = document.getElementById('quick-links');
        container.innerHTML = QUICK_LINKS.map(link => `
            <a href="${link.url}" target="_blank" rel="noopener noreferrer"
               class="group rounded-xl border border-white/40 bg-white/40 px-5 py-2.5 text-sm font-medium text-gray-600 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/70 hover:text-[#FF8C19] hover:shadow-lg dark:border-white/5 dark:bg-gray-800/30 dark:text-gray-400 dark:hover:bg-gray-700/60 dark:hover:text-[#FF8C19]">
               ${link.title}
            </a>
        `).join('');
    };

    // 3. 渲染搜索引擎切换
    const renderEngineSwitcher = () => {
        const container = document.getElementById('engine-switcher');
        container.innerHTML = SEARCH_ENGINES.map(engine => {
            const isActive = state.activeEngine.name === engine.name;
            return `
            <button type="button" data-name="${engine.name}" 
                class="engine-btn relative pb-2 font-medium transition-colors duration-300 ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300'}">
                ${engine.name}
                ${isActive ? '<span class="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-[#FF8C19] shadow-[0_0_8px_rgba(255,140,25,0.8)] transition-all"></span>' : ''}
            </button>`;
        }).join('');

        // 绑定点击事件
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

    // 4. 渲染侧边栏 (桌面和移动端复用逻辑，但渲染到不同容器)
    const renderSidebarLinks = (containerId, isMobile = false) => {
        const container = document.getElementById(containerId);
        container.innerHTML = CATEGORIES.map(cat => {
            const isActive = state.activeCategoryId === cat.id;
            return `
            <a href="#category-${cat.id}" data-id="${cat.id}"
                class="sidebar-link cursor-pointer relative flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left text-[15px] font-medium transition-all duration-300 hover:no-underline ${
                    isActive 
                    ? 'bg-[#FF8C19] text-white shadow-[0_8px_20px_-6px_rgba(255,140,25,0.4)] scale-[1.02]' 
                    : 'text-gray-500 hover:bg-white/60 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700/40 dark:hover:text-gray-100 hover:pl-6'
                }">
                <i data-lucide="${cat.icon}" class="h-5 w-5 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}"></i>
                ${cat.name}
            </a>`;
        }).join('');

        // 重新初始化图标
        lucide.createIcons();

        // 绑定点击事件
        container.querySelectorAll('.sidebar-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const id = link.getAttribute('data-id');
                handleCategoryClick(id);
                if(isMobile) toggleMobileMenu(false);
            });
        });
    };

    // 5. 渲染卡片区域
    const renderContent = () => {
        const container = document.getElementById('content-area');
        container.innerHTML = CATEGORIES.map(cat => `
            <section id="category-${cat.id}" class="animate-fade-in group/section scroll-mt-32">
                <!-- 标题行 -->
                <div class="sticky top-0 z-10 mb-6 bg-[#F5F5F7]/90 py-4 backdrop-blur-xl dark:bg-[#000000]/90 lg:static lg:bg-transparent lg:p-0 lg:backdrop-filter-none transition-all pl-3">
                    <div class="flex flex-col items-start gap-4 md:flex-row md:items-center flex-wrap">
                        <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100 whitespace-nowrap tracking-tight">${cat.name}</h2>
                        <span class="hidden h-6 w-px bg-gray-300/50 dark:bg-gray-700/50 md:block mx-2"></span>
                        <div class="flex flex-wrap w-full md:w-auto gap-3" id="tabs-${cat.id}">
                            <!-- 子分类 Tabs 由 JS 填充 -->
                        </div>
                    </div>
                </div>
                <!-- 卡片 Grid -->
                <div id="grid-${cat.id}" class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">
                    <!-- 卡片由 JS 填充 -->
                </div>
            </section>
        `).join('');

        // 填充子分类和卡片
        CATEGORIES.forEach(cat => {
            renderSubCategoryTabs(cat);
            renderCards(cat);
        });
    };

    const renderSubCategoryTabs = (cat) => {
        const container = document.getElementById(`tabs-${cat.id}`);
        const activeSubId = state.activeSubCategoryIds[cat.id];
        
        container.innerHTML = cat.subCategories.map(sub => {
            const isActive = sub.id === activeSubId;
            return `
            <button type="button" data-main="${cat.id}" data-sub="${sub.id}"
                class="subcat-btn relative whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-out border ${
                    isActive
                    ? 'border-[#FF8C19] bg-[#FF8C19] text-white shadow-[0_4px_14px_0_rgba(255,140,25,0.39)] hover:bg-[#e67e17] hover:scale-105'
                    : 'border-transparent bg-white/50 text-gray-600 hover:bg-white/80 hover:border-white/40 hover:scale-105 hover:shadow-sm dark:bg-gray-800/40 dark:text-gray-400 dark:hover:bg-gray-700/60 dark:hover:border-white/10'
                }">
                ${sub.name}
            </button>`;
        }).join('');

        // 绑定Tab点击
        container.querySelectorAll('.subcat-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const mainId = btn.getAttribute('data-main');
                const subId = btn.getAttribute('data-sub');
                state.activeSubCategoryIds[mainId] = subId;
                renderSubCategoryTabs(cat); // 重绘 Tabs
                renderCards(cat); // 重绘卡片
            });
        });
    };

    const renderCards = (cat) => {
        const container = document.getElementById(`grid-${cat.id}`);
        const activeSubId = state.activeSubCategoryIds[cat.id];
        const activeSub = cat.subCategories.find(sub => sub.id === activeSubId);
        
        if (!activeSub) return;

        const { gradient, character } = activeSub.iconConfig || { gradient: 'from-blue-400 to-cyan-400', character: 'Site' };

        container.innerHTML = activeSub.sites.map(site => `
            <a href="${site.url}" target="_blank" rel="noopener noreferrer"
               class="group relative flex h-full flex-row items-start gap-4 overflow-hidden rounded-2xl border border-white/50 bg-white/60 p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/80 hover:bg-white/80 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] dark:border-white/10 dark:bg-gray-800/40 dark:shadow-none dark:hover:bg-gray-700/50 dark:hover:border-white/20">
                
                <div class="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-white/5"></div>

                <div class="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-sm text-white font-bold text-base leading-none select-none ring-1 ring-black/5 dark:ring-white/10">
                    ${character}
                </div>

                <div class="relative min-w-0 flex-1">
                    <div class="mb-1 flex items-center justify-between">
                        <h3 class="truncate text-[17px] font-semibold text-gray-900 transition-colors group-hover:text-[#FF8C19] dark:text-gray-100 dark:group-hover:text-[#FF8C19]">
                            ${site.title}
                        </h3>
                    </div>
                    <p class="line-clamp-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                        ${site.description}
                    </p>
                </div>
            </a>
        `).join('');
    };

    // --- 交互逻辑 ---

    // 1. 滚动到分类
    const handleCategoryClick = (id) => {
        state.activeCategoryId = id;
        state.isProgrammaticScroll = true;
        updateSidebarUI();

        const el = document.getElementById(`category-${id}`);
        if (el) {
            const headerOffset = 100;
            const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            setTimeout(() => {
                state.isProgrammaticScroll = false;
            }, 1200);
        }
    };

    // 2. 更新侧边栏高亮 UI
    const updateSidebarUI = () => {
        // 桌面
        renderSidebarLinks('desktop-nav-links');
        // 移动端
        renderSidebarLinks('mobile-nav-links', true);
    };

    // 3. 滚动监听 (Spy)
    window.addEventListener('scroll', () => {
        if (state.isProgrammaticScroll) return;

        const offset = 150;
        let newActiveId = CATEGORIES[0].id;

        for (const cat of CATEGORIES) {
            const el = document.getElementById(`category-${cat.id}`);
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= offset) {
                    newActiveId = cat.id;
                } else {
                    break;
                }
            }
        }

        if (newActiveId !== state.activeCategoryId) {
            state.activeCategoryId = newActiveId;
            updateSidebarUI();
        }
    });

    // 4. 主题切换
    const toggleTheme = () => {
        state.isDark = !state.isDark;
        localStorage.setItem('theme', state.isDark ? 'dark' : 'light');
        applyTheme();
    };

    const applyTheme = () => {
        if (state.isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // 重新渲染头部按钮图标
        // 由于我们用Lucide图标，这里简单处理显示隐藏逻辑
        // 实际上面HTML已经通过CSS类处理了图标显示
    };

    // 5. 搜索功能
    document.getElementById('search-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const query = document.getElementById('search-input').value;
        if (!query.trim()) return;
        window.open(`${state.activeEngine.url}${encodeURIComponent(query)}`, '_blank');
    });

    // 6. 关于弹窗
    const modal = document.getElementById('about-modal');
    const openModal = () => modal.classList.add('open', '!block', '!opacity-100');
    const closeModal = () => modal.classList.remove('open', '!block', '!opacity-100');

    document.getElementById('about-btn').addEventListener('click', openModal);
    document.getElementById('close-about').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // 7. 移动端菜单
    const mobileSidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('mobile-sidebar-overlay');
    const toggleMobileMenu = (show) => {
        if (show) {
            mobileSidebar.classList.remove('translate-x-[-100%]');
            mobileSidebar.classList.add('translate-x-0');
            overlay.classList.remove('hidden');
        } else {
            mobileSidebar.classList.add('translate-x-[-100%]');
            mobileSidebar.classList.remove('translate-x-0');
            overlay.classList.add('hidden');
        }
    };
    document.getElementById('mobile-menu-btn').addEventListener('click', () => toggleMobileMenu(true));
    overlay.addEventListener('click', () => toggleMobileMenu(false));

    // 8. 数字动画
    const animateCount = () => {
        const el = document.getElementById('site-count');
        const total = CATEGORIES.reduce((acc, cat) => acc + cat.subCategories.reduce((s, sub) => s + sub.sites.length, 0), 0);
        let start = 0;
        const duration = 2000;
        const increment = Math.ceil(total / (duration / 16));
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= total) {
                el.textContent = total;
                clearInterval(timer);
            } else {
                el.textContent = start;
            }
        }, 16);
    };

    // --- 初始化执行 ---
    applyTheme();
    renderHeaderLinks();
    renderQuickLinks();
    renderEngineSwitcher();
    updateSidebarUI();
    renderContent();
    animateCount();
    
    // 初始化 Lucide 图标
    lucide.createIcons();

    // 绑定主题按钮
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});