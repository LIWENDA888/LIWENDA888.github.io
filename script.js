
/**
 * TYPEFOUNDRY STUDIO - CORE LOGIC
 * 此文件仅包含交互逻辑（夜间模式、菜单、图片查看器等）。
 * 不包含任何产品数据。
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    highlightCurrentPage();
    setupAccordion(); // For Licensing page
    setupAboutScrollSpy(); // For About page
    setupGlobalImageViewer(); // For Product page
});

// ================= 1. 主题切换 (Theme Logic) =================

function initTheme() {
    const isDark = localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    applyTheme(isDark);
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateIcons(isDark);
}

function applyTheme(isDark) {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    updateIcons(isDark);
}

function updateIcons(isDark) {
    // 延迟一点执行以确保 DOM 已加载
    setTimeout(() => {
        const sunIcons = document.querySelectorAll('.icon-sun');
        const moonIcons = document.querySelectorAll('.icon-moon');
        sunIcons.forEach(icon => icon.style.display = isDark ? 'block' : 'none');
        moonIcons.forEach(icon => icon.style.display = isDark ? 'none' : 'block');
        
        const logos = document.querySelectorAll('.nav-logo');
        logos.forEach(logo => logo.style.filter = isDark ? 'invert(1)' : 'none');
    }, 50);
}

// ================= 2. 导航栏交互 (Navigation) =================

function highlightCurrentPage() {
    setTimeout(() => {
        const path = window.location.pathname;
        let page = 'home';
        if (path.includes('all-products')) page = 'products';
        else if (path.includes('licensing')) page = 'licensing';
        else if (path.includes('about')) page = 'about';
        
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.dataset.page === page) {
                link.classList.remove('text-gray-500', 'dark:text-neutral-500');
                link.classList.add('text-black', 'dark:text-white');
            }
        });
    }, 100);
}

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

// ================= 3. 辅助功能函数 (Helpers) =================

// 用于生成 Bento 卡片的 HTML (供首页和全部产品页调用)
function createBentoCard(item) {
    const href = item.link || '#';
    return `
        <a href="${href}" target="_blank" class="group relative isolate overflow-hidden rounded-2xl bg-gray-200 dark:bg-neutral-800 ${item.colSpan || 'md:col-span-1'} ${item.rowSpan || 'md:row-span-1'} min-h-[300px] lg:min-h-[360px] transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] block">
            <div class="absolute inset-0 size-full overflow-hidden rounded-2xl">
                <img src="${item.imageUrl}" alt="${item.title}" class="size-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>
            </div>
            <div class="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <div class="flex items-end justify-between">
                    <div class="transform transition-transform duration-300 group-hover:-translate-y-2">
                        <span class="mb-2 block text-xs font-medium uppercase tracking-widest text-white/80 backdrop-blur-sm">${item.subtitle}</span>
                        <h3 class="text-2xl font-bold text-white md:text-4xl">${item.title}</h3>
                    </div>
                    <div class="flex size-12 -translate-x-4 translate-y-4 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div>
                </div>
            </div>
        </a>
    `;
}

// ================= 4. 图片查看器 (Product Page Image Viewer) =================

function setupGlobalImageViewer() {
    const container = document.getElementById('image-viewer-container');
    const img = document.getElementById('p-image');
    const slider = document.getElementById('zoom-slider');
    const hint = document.getElementById('zoom-hint');
    const toggleBtn = document.getElementById('img-toggle-btn');
    
    if (!container || !img || !slider) return; // 只有在产品页才执行

    let zoom = 1;
    let pan = { x: 0, y: 0 };
    let startPan = { x: 0, y: 0 };
    let isDragging = false;
    let viewMode = 'light';

    // 获取深色模式图片 (通过 HTML 属性 data-dark-src 读取)
    const lightSrc = img.src;
    const darkSrc = img.getAttribute('data-dark-src');

    // 如果没有深色图，隐藏切换按钮
    if (!darkSrc && toggleBtn) {
        toggleBtn.style.display = 'none';
    }

    // 1. 缩放逻辑
    slider.addEventListener('input', (e) => {
        zoom = parseFloat(e.target.value);
        if (zoom === 1) pan = { x: 0, y: 0 }; // 重置平移
        updateTransform();
        hint.textContent = zoom > 1 ? '拖拽查看细节' : '使用滑杆放大';
        container.style.cursor = zoom > 1 ? 'grab' : 'default';
    });

    // 2. 拖拽逻辑
    const constrainPan = (x, y, currentZoom) => {
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        const maxOverflowX = (width * currentZoom - width) / 2;
        const maxOverflowY = (height * currentZoom - height) / 2;
        if (currentZoom <= 1) return { x: 0, y: 0 };
        return {
            x: Math.min(Math.max(x, -maxOverflowX), maxOverflowX),
            y: Math.min(Math.max(y, -maxOverflowY), maxOverflowY)
        };
    };

    container.addEventListener('mousedown', (e) => {
        if (zoom > 1) {
            isDragging = true;
            startPan = { x: e.clientX - pan.x, y: e.clientY - pan.y };
            container.style.cursor = 'grabbing';
        }
    });

    window.addEventListener('mousemove', (e) => {
        if (isDragging && zoom > 1) {
            e.preventDefault();
            const rawX = e.clientX - startPan.x;
            const rawY = e.clientY - startPan.y;
            pan = constrainPan(rawX, rawY, zoom);
            updateTransform();
        }
    });

    window.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            container.style.cursor = zoom > 1 ? 'grab' : 'default';
        }
    });

    function updateTransform() {
        img.style.transform = `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`;
    }

    // 3. 背景切换逻辑
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            viewMode = viewMode === 'light' ? 'dark' : 'light';
            // 切换图片源
            if (darkSrc) {
                img.src = viewMode === 'light' ? lightSrc : darkSrc;
            }
            // 切换容器背景色
            container.style.backgroundColor = viewMode === 'light' ? '#f9fafb' : '#0f0f0f';
        });
    }
}

// 弹窗控制
function openDownloadModal() { document.getElementById('download-modal').classList.remove('hidden'); }
function closeDownloadModal() { document.getElementById('download-modal').classList.add('hidden'); }


// ================= 5. 其他页面逻辑 =================

// 授权页手风琴
function setupAccordion() {
    document.querySelectorAll('.accordion-btn').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.accordion-icon');
            const isOpen = content.classList.contains('grid-rows-[1fr]');
            
            // 关闭所有
            document.querySelectorAll('.accordion-content').forEach(c => { 
                c.classList.remove('grid-rows-[1fr]'); 
                c.classList.add('grid-rows-[0fr]'); 
            });
            document.querySelectorAll('.accordion-icon').forEach(i => i.classList.remove('rotate-45'));
            
            // 打开当前
            if (!isOpen) { 
                content.classList.remove('grid-rows-[0fr]'); 
                content.classList.add('grid-rows-[1fr]'); 
                icon.classList.add('rotate-45'); 
            }
        });
    });
}

// 关于我们页侧边栏高亮
function setupAboutScrollSpy() {
    if (!window.location.pathname.includes('about.html')) return;
    
    const sections = ['studio', 'philosophy', 'copyright', 'contact'];
    const navItems = document.querySelectorAll('.about-nav-btn');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(id => { 
            const el = document.getElementById(id); 
            if (el && window.scrollY >= (el.offsetTop - 300)) current = id; 
        });
        
        navItems.forEach(btn => {
            btn.classList.remove('border-black', 'text-black', 'dark:border-white', 'dark:text-white', 'bg-gray-50', 'dark:bg-white/5');
            btn.classList.add('border-transparent', 'text-gray-400');
            
            if (btn.getAttribute('href') === '#' + current) {
                btn.classList.add('border-black', 'text-black', 'dark:border-white', 'dark:text-white', 'bg-gray-50', 'dark:bg-white/5');
                btn.classList.remove('border-transparent', 'text-gray-400');
            }
        });
    });
}
