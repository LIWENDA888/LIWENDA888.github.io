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
        { type: 'link', name: '字体产品', path: 'https://www.zizao.top/fonts', id: 'fonts' },
        { type: 'link', name: '授权定制', path: 'https://www.zizao.top/licensing', id: 'licensing' },
        { type: 'link', name: '帮助中心', path: 'https://www.zizao.top/docs', id: 'docs' },
        {
            type: 'dropdown', 
            name: '设计工具', 
             //   layout: 'grid',    默认为竖布局，加这行横向布局
            items: [
                { title: '设计导航', path: 'https://hao.zizao.top', tag: 'hao', desc: '设计师的灵感百宝库' },
                { title: '字符工具', path: 'https://tools.zizao.top', tag: 'Tools', desc: 'web端多文本编辑器' }, 
            ]
        }
    ],

    footer: {
        socialTitle: "关注我们",
        socials: [
            { name: 'Douyin', link: 'https://www.douyin.com/user/MS4wLjABAAAAHS3xXmx-djagMBtv5pfJpJ_awJuC5Du8SnXDC8AYPI4Wr4lQpJllFxZDUEOCpZ8k', icon: 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/25Zm/834X834/1-04.png/webp' },
            { name: 'Red',    link: 'https://www.xiaohongshu.com/user/profile/678f47130000000007000eaa', icon: 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/MyKf/834X834/1-05.png/webp' },
            { name: 'Zcool',  link: 'ttps://www.zcool.com.cn/u/15462186', icon: 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/6st1/834X834/1-06.png/webp' },
            { name: 'Bili',  link: 'https://space.bilibili.com/339715446', icon: 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/JzPh/834X834/1-07.png/webp' },
            { name: 'Weibo',  link: 'https://weibo.com/u/7931697572', icon: 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/Lm8A/834X834/1-08.png/webp' },
            { name: 'Youtube',  link: 'ttps://www.youtube.com/@zizaotop', icon: 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/WxmZ/200X200/1-09.png/webp' },
        ],
        // 二维码配置
        qrcodes: [
            { 
                title: '微信公众号', 
                desc: '关注最新动态', 
                image: 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251218/ZcSq/251X251/iwg.webp/webp' 
            },
            { 
                title: '添加微信', 
                desc: '在线咨询客服', 
                image: 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251218/Hd0f/251X251/iwx.webp/webp' 
            }
        ],
        // 底部版权区配置
        copyright: "© 2026 ZIZAO.TOP. 自在造字. All rights reserved.",
        icp: 
            { name: "使用条款", path: "https://www.zizao.top/docs.html?section=terms" },
        
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

// 1. 桌面端导航渲染 (混合布局逻辑)
const renderDesktopNav = () => {
    return SITE_CONFIG.menu.map(item => {
        if (item.type === 'dropdown') {
            const listItems = item.items.map(sub => `
                <a href="${sub.path}" target="_blank" class="group/item flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200">
                    <div class="flex items-center justify-center">
                        <div class="size-1.5 rounded-full bg-gray-200 dark:bg-neutral-700 group-hover/item:bg-black dark:group-hover/item:bg-white group-hover/item:scale-125 transition-all duration-300"></div>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 mb-0.5">
                            <span class="text-[13px] font-bold text-gray-900 dark:text-gray-200 group-hover/item:text-black dark:group-hover/item:text-white transition-colors">
                                ${sub.title}
                            </span>
                            ${sub.tag ? `<span class="text-[9px] font-mono font-bold uppercase tracking-wider text-gray-400 border border-gray-100 dark:border-neutral-700 rounded px-1 py-px group-hover/item:border-gray-300 dark:group-hover/item:border-neutral-500 transition-colors">${sub.tag}</span>` : ''}
                        </div>
                        <p class="text-[11px] text-gray-400 dark:text-neutral-500 line-clamp-1 group-hover/item:text-gray-500 dark:group-hover/item:text-neutral-400 transition-colors">
                            ${sub.desc}
                        </p>
                    </div>
                    <div class="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                        <svg class="w-4 h-4 text-gray-300 dark:text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </div>
                </a>
            `).join('');

            // ✨ 逻辑判断：是网格(双列)还是竖向(单列)？
            const isGrid = item.layout === 'grid';
            
            // 根据布局类型设置样式
            // 宽度：双列 540px，单列 260px
            const widthClass = isGrid ? 'w-[540px]' : 'w-[260px]';
            // 排版：双列 grid，单列 flex-col
            const layoutClass = isGrid ? 'grid grid-cols-2 gap-2' : 'flex flex-col gap-1';

            return `
            <div class="group relative h-full flex items-center">
                <button class="text-xs uppercase tracking-widest font-bold text-gray-500 hover:text-black dark:text-neutral-400 dark:hover:text-white nav-link transition-colors flex items-center gap-1.5 h-full px-2">
                    ${item.name}
                    <svg class="w-2.5 h-2.5 opacity-50 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div class="absolute top-full left-1/2 -translate-x-1/2 pt-2 ${widthClass} opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50 origin-top">
                    <div class="bg-white/95 dark:bg-[#0f0f0f]/95 backdrop-blur-xl rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-2xl overflow-hidden ring-1 ring-black/5">
                        <div class="p-2">
                            <div class="${layoutClass}">${listItems}</div>
                        </div>
                    </div>
                </div>
            </div>`;
        }
        return `<a href="${item.path}" class="text-xs uppercase tracking-widest font-bold text-gray-500 hover:text-black dark:text-neutral-400 dark:hover:text-white nav-link h-full flex items-center px-2" data-page="${item.id || ''}">${item.name}</a>`;
    }).join('');
};

// 2. 手机端导航渲染
const renderMobileNav = () => {
    return SITE_CONFIG.menu.map((item, index) => {
        if (item.type === 'dropdown') {
            const subItems = item.items.map(sub => `
                <a href="${sub.path}" target="_blank" class="flex items-center justify-between py-4 border-b border-gray-50 dark:border-neutral-900/50 text-sm font-bold text-gray-400 active:text-black dark:active:text-white">
                    <span>${sub.title}</span>
                    <span class="text-[9px] font-mono opacity-50">${sub.tag || ''}</span>
                </a>
            `).join('');
            
            return `
            <div class="mobile-nav-item mb-4" style="opacity: 0">
                <button onclick="toggleMobileDropdown(this)" class="flex items-center justify-between w-full py-5 border-b border-gray-100 dark:border-neutral-900 group">
                    <span class="text-2xl font-black tracking-tighter">${item.name}</span>
                    <svg class="w-5 h-5 text-gray-300 transition-transform duration-300 dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div class="mobile-dropdown-content hidden flex flex-col pl-2">
                    ${subItems}
                </div>
            </div>`;
        }
        return `
        <a href="${item.path}" class="mobile-nav-item flex items-center justify-between py-6 border-b border-gray-100 dark:border-neutral-900 active:bg-gray-50 dark:active:bg-neutral-900 transition-colors" style="opacity: 0">
            <span class="text-2xl font-black tracking-tighter">${item.name}</span>
            <svg class="w-5 h-5 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>`;
    }).join('');
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

window.toggleMobileDropdown = (btn) => {
    const content = btn.nextElementSibling;
    const arrow = btn.querySelector('.dropdown-arrow');
    const isHidden = content.classList.contains('hidden');
    if (isHidden) {
        content.classList.remove('hidden');
        arrow.classList.add('rotate-180');
    } else {
        content.classList.add('hidden');
        arrow.classList.remove('rotate-180');
    }
};

const SHARED_NAV_HTML = `
<div class="mx-auto flex h-20 max-w-[1800px] items-center justify-between px-6 lg:px-12 relative z-[110]">
    <a href="/" class="flex items-center gap-2 z-[110]"><img src="${SITE_CONFIG.header.logo}" alt="Logo" class="nav-logo h-7 w-auto object-contain"></a>
    <div class="hidden items-center gap-5 md:flex h-full">
        ${renderDesktopNav()}
        <div class="h-4 w-px bg-gray-200 dark:bg-neutral-800"></div>
        <button onclick="toggleTheme()" class="theme-toggle group flex size-8 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all text-gray-500 hover:text-black dark:text-neutral-400 dark:hover:text-white">
            <svg class="icon-sun w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            <svg class="icon-moon w-4 h-4 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
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

// 优化后的底部 HTML
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
            <p class="text-[10px] font-bold uppercase tracking-widest text-gray-400">${SITE_CONFIG.footer.copyright}</p>
            <a href="${SITE_CONFIG.footer.icp.path}" target="_blank" class="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black dark:hover:text-white transition-colors w-fit">
                ${SITE_CONFIG.footer.icp.name}
            </a>
        </div>

        <div class="flex flex-col gap-2 md:items-end">
            <p class="text-[10px] font-bold uppercase tracking-widest text-gray-400">${SITE_CONFIG.footer.recommendTitle}</p>
            <div class="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                ${SITE_CONFIG.footer.bottomLinks.map(link => `<a href="${link.path}" target="_blank" class="hover:text-black dark:hover:text-white transition-colors">${link.name}</a>`).join('')}
            </div>
        </div>

    </div>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
    const navPlaceholder = document.getElementById('nav-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (navPlaceholder) navPlaceholder.innerHTML = SHARED_NAV_HTML;
    if (footerPlaceholder) footerPlaceholder.innerHTML = SHARED_FOOTER_HTML;
    
    let link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    link.rel = 'icon'; link.href = SITE_CONFIG.header.favicon;
    document.head.appendChild(link);
    
    const isDark = document.documentElement.classList.contains('dark');
    updateIcons(isDark);
});