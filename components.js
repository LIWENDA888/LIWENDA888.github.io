/**
 * ==============================================================================
 * 🔴 全局配置区
 * ==============================================================================
 */

const SITE_CONFIG = {
    header: {
        logo: "https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251218/mAPB/logo.svg",
        favicon: "https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/AR9P/ico.ico",
    },

    menu: [
        { name: '首页', path: 'index.html', id: 'index' },
        { name: '字体产品', path: 'fonts.html', id: 'fonts' },
        { name: '授权定制', path: 'licensing.html', id: 'licensing' },
        { name: '帮助中心', path: 'docs.html', id: 'docs' }
    ],

    footer: {
        socialTitle: "关注我们",
        socials: [
            { name: 'Douyin', link: 'https://www.douyin.com/user/MS4wLjABAAAAHS3xXmx-djagMBtv5pfJpJ_awJuC5Du8SnXDC8AYPI4Wr4lQpJllFxZDUEOCpZ8k', icon: 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/25Zm/834X834/1-04.png/webp' },
            { name: 'Red',    link: 'https://www.xiaohongshu.com/user/profile/678f47130000000007000eaa', icon: 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/MyKf/834X834/1-05.png/webp' },
            { name: 'Zcool',  link: 'https://www.zcool.com.cn/u/15462186', icon: 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/6st1/834X834/1-06.png/webp' },
            { name: 'Bili',  link: 'https://space.bilibili.com/339715446', icon: 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/JzPh/834X834/1-07.png/webp' },
            { name: 'Weibo',  link: 'https://weibo.com/u/7931697572', icon: 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/Lm8A/834X834/1-08.png/webp' },
            { name: 'Youtube',  link: 'https://www.youtube.com/@zizaotop', icon: 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/WxmZ/200X200/1-09.png/webp' },
        ],
        qrcodes: [
            { title: '微信公众号', desc: '关注最新动态', image: 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251218/ZcSq/251X251/iwg.webp/webp' },
            { title: '添加微信', desc: '在线咨询客服', image: 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251218/Hd0f/251X251/iwx.webp/webp' }
        ],
        copyright: "© 2026 ZIZAO.TOP. 自在造字. All rights reserved.",
        icp: [
            { name: "鄂ICP备2026xxxx号-1", path: "https://beian.miit.gov.cn/" },
            { name: "鄂公网安备 xxxxxxxxxxxxxx号", path: "https://beian.mps.gov.cn/", icon: "https://www.beian.gov.cn/img/new/gongan.png" }
        ],
        recommendTitle: "推荐链接", 
        bottomLinks: [ 
            { name: "阿里云", path: "https://www.aliyun.com/" },
            { name: "Github", path: "https://github.com" },
            { name: "图床小镇", path: "https://imgbed.cn" },
            { name: "Cloudflare", path: "https://www.cloudflare.com/zh-cn/" }
        ]
    }
};

/**
 * ==============================================================================
 * ⚙️ 渲染引擎
 * ==============================================================================
 */

// 1. 桌面端导航渲染
const renderDesktopNav = () => {
    return SITE_CONFIG.menu.map(item => `
        <a href="${item.path}" class="nav-link group flex items-center gap-3 py-2.5 px-5 rounded-xl hover:bg-gray-100/60 dark:hover:bg-white/5 transition-all duration-300" data-page="${item.id}">
            <div class="nav-dot size-1.5 rounded-full bg-gray-300 dark:bg-neutral-800 group-hover:bg-black dark:group-hover:bg-white transition-all duration-300"></div>
            <span class="nav-text text-[13px] font-medium text-gray-500 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white group-hover:font-bold transition-all duration-300">
                ${item.name}
            </span>
        </a>
    `).join('');
};

// 识别并高亮当前页面
const highlightActiveNav = () => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    let currentPage = '';

    // 精准识别逻辑
    if (path === '/' || path.endsWith('/') || path.includes('index.html')) {
        currentPage = 'index';
    } else if (path.includes('fonts')) {
        currentPage = 'fonts';
    } else if (path.includes('licensing')) {
        currentPage = 'licensing';
    } else if (path.includes('docs')) {
        currentPage = 'docs';
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        const pageId = link.getAttribute('data-page');
        const dot = link.querySelector('.nav-dot');
        const text = link.querySelector('.nav-text');

        if (pageId === currentPage && currentPage !== '') {
            if(text) {
                text.classList.remove('text-gray-500', 'dark:text-neutral-500', 'font-medium');
                text.classList.add('text-black', 'dark:text-white', 'font-bold');
            }
            if(dot) {
                dot.classList.remove('bg-gray-300', 'dark:bg-neutral-800');
                dot.classList.add('bg-black', 'dark:bg-white');
            }
        }
    });
};

// 2. 手机端导航渲染
const renderMobileNav = () => {
    return SITE_CONFIG.menu.map(item => `
        <a href="${item.path}" class="mobile-nav-item flex items-center justify-between py-6 border-b border-gray-100 dark:border-neutral-900 active:bg-gray-50 dark:active:bg-neutral-900 transition-colors" style="opacity: 0">
            <span class="text-2xl font-black tracking-tighter">${item.name}</span>
            <svg class="w-5 h-5 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
        </a>
    `).join('');
};

// 3. 底部栏 - 二维码卡片渲染
const renderFooterQRs = () => {
    return `
    <div class="flex flex-col sm:flex-row gap-4">
        ${SITE_CONFIG.footer.qrcodes.map(qr => `
            <div class="group flex items-center gap-5 p-5 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 transition-all hover:bg-gray-100 dark:hover:bg-neutral-800 w-full sm:w-auto">
                <div class="size-20 shrink-0 bg-white p-1.5 rounded-xl shadow-sm border border-black/5 flex items-center justify-center">
                    <img src="${qr.image}" alt="${qr.title}" class="size-full object-cover">
                </div>
                <div class="min-w-[100px]">
                    <h4 class="text-sm font-bold text-black dark:text-white mb-1">${qr.title}</h4>
                    <p class="text-[11px] text-gray-400 dark:text-neutral-500 uppercase tracking-wider">${qr.desc}</p>
                </div>
            </div>
        `).join('')}
    </div>`;
};

const SHARED_NAV_HTML = `
<div class="mx-auto flex h-20 max-w-[1800px] items-center justify-between px-6 lg:px-12 relative z-[110]">
    <a href="index.html" class="flex items-center gap-2 z-[110]"><img src="${SITE_CONFIG.header.logo}" alt="Logo" class="nav-logo h-7 w-auto object-contain"></a>
    
    <div class="hidden items-center gap-1 md:flex h-full">
        ${renderDesktopNav()}
        <div class="mx-4 h-4 w-px bg-gray-100 dark:bg-neutral-900"></div>
        <button onclick="toggleTheme()" class="theme-toggle group flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all text-gray-400 hover:text-black dark:hover:text-white">
            <svg class="icon-sun w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            <svg class="icon-moon w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        </button>
    </div>

    <button id="mobile-menu-btn" onclick="toggleMenu()" class="relative z-[110] flex size-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900 md:hidden transition-transform active:scale-90">
        <div class="flex flex-col gap-[4px]">
            <span class="h-[2px] w-5 rounded-full bg-black transition-all duration-300 dark:bg-white" id="hamburger-top"></span>
            <span class="h-[2px] w-3 rounded-full bg-black transition-all duration-300 dark:bg-white ml-auto" id="hamburger-bot"></span>
        </div>
    </button>
</div>

<div id="mobile-menu" class="fixed inset-0 z-[100] bg-white dark:bg-neutral-950 transition-all duration-500 opacity-0 pointer-events-none translate-y-4 md:hidden flex flex-col h-[100dvh]">
    <div class="flex-1 flex flex-col px-8 pt-28 pb-12 overflow-y-auto no-scrollbar">
        <nav class="flex flex-col">${renderMobileNav()}</nav>
    </div>
</div>
`;

const SHARED_FOOTER_HTML = `
<div class="mx-auto max-w-[1800px] px-6 lg:px-12">
    <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-8">
        <div class="max-w-xs shrink-0">
             <div class="mb-6">
                <h2 class="text-lg font-black uppercase tracking-widest text-black dark:text-white">${SITE_CONFIG.footer.socialTitle}</h2>
             </div>
             <div class="flex flex-wrap gap-3">
                ${SITE_CONFIG.footer.socials.map(s => `
                    <a href="${s.link}" target="_blank" class="group block size-10 overflow-hidden rounded-xl bg-gray-100 dark:bg-neutral-900 hover:scale-105 transition-transform duration-300">
                        <img src="${s.icon}" class="size-full object-cover transition-all duration-300" alt="${s.name}">
                    </a>
                `).join('')}
             </div>
        </div>
        <div class="shrink-0">
             ${renderFooterQRs()}
        </div>
    </div>
    <div class="mt-20 border-t border-gray-100 pt-8 dark:border-neutral-900 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div class="flex flex-col gap-2">
            <p class="text-[10px] font-medium uppercase tracking-widest text-gray-400">${SITE_CONFIG.footer.copyright}</p>
            <div class="flex flex-wrap items-center gap-2.5">
                ${SITE_CONFIG.footer.icp.map(link => `
                    <a href="${link.path}" target="_blank" class="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-widest text-gray-400 hover:text-black dark:hover:text-white transition-colors w-fit">
                        ${link.icon ? `<img src="${link.icon}" class="w-3.5 h-3.5 object-contain" alt="备案图标">` : ''}
                        ${link.name}
                    </a>
                `).join('<span class="text-gray-200 dark:text-neutral-800 text-[10px] font-medium">|</span>')}
            </div>
        </div>
        <div class="flex flex-col gap-2 md:items-end mt-6 md:mt-0">
            <p class="text-[10px] font-medium uppercase tracking-widest text-gray-400">${SITE_CONFIG.footer.recommendTitle}</p>
            <div class="flex flex-wrap gap-6 text-[10px] font-medium uppercase tracking-widest text-gray-400">
                ${SITE_CONFIG.footer.bottomLinks.map(link => `<a href="${link.path}" target="_blank" class="hover:text-black dark:hover:text-white transition-colors">${link.name}</a>`).join('')}
            </div>
        </div>
    </div>
</div>
`;

// 初始化渲染
document.addEventListener('DOMContentLoaded', () => {
    const navPlaceholder = document.getElementById('nav-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    if (navPlaceholder) navPlaceholder.innerHTML = SHARED_NAV_HTML;
    if (footerPlaceholder) footerPlaceholder.innerHTML = SHARED_FOOTER_HTML;
    
    // 延迟一点执行高亮，确保 DOM 已经渲染完毕
    setTimeout(highlightActiveNav, 100);

    // 设置 Favicon
    let link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    link.rel = 'icon'; 
    link.href = SITE_CONFIG.header.favicon;
    document.head.appendChild(link);
    
    // 主题图标同步 (增加防错)
    const isDark = document.documentElement.classList.contains('dark');
    if (typeof updateIcons === 'function') {
        updateIcons(isDark);
    }
});