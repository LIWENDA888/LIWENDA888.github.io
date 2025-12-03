

/**
 * TYPEFOUNDRY STUDIO - SHARED COMPONENTS
 * Note: Uses root-relative paths (e.g., "/fonts.html") to support nested folders.
 * Ensure you are running this on a local server (e.g., Live Server) for best results.
 */

// 1. Top Navigation
const SHARED_NAV_HTML = `
<div class="mx-auto flex h-20 max-w-[1800px] items-center justify-between px-6 lg:px-12 relative z-[110]">
    <!-- Logo -->
    <a href="https://www.zizao.top" class="flex items-center gap-2 hover:opacity-80 transition-opacity z-[110]">
        <img src="https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/BOEv/249X79/logo.png/webp" alt="Logo" class="nav-logo h-7 w-auto object-contain">
    </a>

    <!-- Desktop Menu (Pure Flat Links) -->
    <div class="hidden items-center gap-8 md:flex h-full">
        <a href="https://www.zizao.top/fonts" class="text-xs uppercase tracking-widest text-gray-500 hover:text-black dark:text-neutral-500 dark:hover:text-white nav-link transition-colors" data-page="products">字体产品</a>
        <a href="https://www.zizao.top/licensing" class="text-xs uppercase tracking-widest text-gray-500 hover:text-black dark:text-neutral-500 dark:hover:text-white nav-link transition-colors" data-page="licensing">授权定制</a>
        <a href="https://zzfonts.taobao.com" target="_blank" class="text-xs uppercase tracking-widest text-gray-500 hover:text-black dark:text-neutral-500 dark:hover:text-white transition-colors">获取版权</a>
        <a href="https://www.zizao.top/about" class="text-xs uppercase tracking-widest text-gray-500 hover:text-black dark:text-neutral-500 dark:hover:text-white nav-link transition-colors" data-page="about">关于我们</a>
        
        <div class="h-4 w-px bg-gray-200 dark:bg-neutral-800"></div>
        
        <!-- Theme Toggle Desktop -->
        <button onclick="toggleTheme()" class="theme-toggle group flex size-8 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all">
            <svg class="icon-sun w-4 h-4 text-gray-400 dark:text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            <svg class="icon-moon w-4 h-4 text-gray-400 dark:text-neutral-500 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        </button>
    </div>

    <!-- Mobile Menu Toggle -->
    <button id="mobile-menu-btn" onclick="toggleMenu()" class="relative z-[110] flex flex-col justify-center gap-[6px] p-2 md:hidden group">
        <span class="h-[2px] w-6 rounded-full bg-black transition-transform duration-300 dark:bg-white origin-center" id="hamburger-top"></span>
        <span class="h-[2px] w-6 rounded-full bg-black transition-opacity duration-300 dark:bg-white" id="hamburger-mid"></span>
        <span class="h-[2px] w-6 rounded-full bg-black transition-transform duration-300 dark:bg-white origin-center" id="hamburger-bot"></span>
    </button>
</div>

<!-- Mobile Menu Overlay -->
<div id="mobile-menu" class="fixed inset-0 z-[100] bg-white dark:bg-neutral-950 transition-all duration-500 opacity-0 pointer-events-none translate-y-4 md:hidden flex flex-col h-[100dvh]">
    
    <div class="flex-1 flex flex-col px-6 pt-28 pb-8 overflow-y-auto no-scrollbar justify-between">
        <nav class="flex flex-col gap-2">
            <!-- Home -->
            <a href="https://www.zizao.top" class="mobile-nav-item mobile-nav-link flex items-center justify-between py-4 border-b border-gray-100 dark:border-neutral-900" style="opacity: 0">
                <span class="text-2xl font-medium tracking-tight">首页</span>
                <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Home</span>
            </a>
            
            <!-- Fonts -->
            <a href="https://www.zizao.top/fonts" class="mobile-nav-item mobile-nav-link flex items-center justify-between py-4 border-b border-gray-100 dark:border-neutral-900" style="opacity: 0">
                <span class="text-2xl font-medium tracking-tight">字体产品</span>
                <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Fonts</span>
            </a>

            <!-- Licensing -->
            <a href="https://www.zizao.top/licensing" class="mobile-nav-item mobile-nav-link flex items-center justify-between py-4 border-b border-gray-100 dark:border-neutral-900" style="opacity: 0">
                <span class="text-2xl font-medium tracking-tight">授权定制</span>
                <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Licensing</span>
            </a>

            <!-- Shop -->
            <a href="https://zzfonts.taobao.com" target="_blank" class="mobile-nav-item flex items-center justify-between py-4 border-b border-gray-100 dark:border-neutral-900" style="opacity: 0">
                <span class="text-2xl font-medium tracking-tight">商店</span>
                <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Shop</span>
            </a>

            <!-- About -->
            <a href="https://www.zizao.top/about" class="mobile-nav-item mobile-nav-link flex items-center justify-between py-4 border-b border-gray-100 dark:border-neutral-900" style="opacity: 0">
                <span class="text-2xl font-medium tracking-tight">关于我们</span>
                <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">About</span>
            </a>
        </nav>
        
        <div class="mt-8 mobile-nav-item" style="opacity: 0">
             <p class="text-[10px] font-bold uppercase tracking-widest text-gray-300 dark:text-neutral-700">© 2025 ZizaoType Studio.</p>
        </div>
    </div>
</div>
`;

// 2. Footer
const SHARED_FOOTER_HTML = `
<div class="mx-auto max-w-[1800px] px-6 lg:px-12">
    <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
        <!-- Social -->
        <div class="flex-1">
             <h3 class="mb-8 text-xs font-bold uppercase tracking-widest text-gray-400">了解更多</h3>
             <div class="flex flex-wrap gap-4">
                 <a href="https://www.douyin.com/user/MS4wLjABAAAAHS3xXmx-djagMBtv5pfJpJ_awJuC5Du8SnXDC8AYPI4Wr4lQpJllFxZDUEOCpZ8k" target="_blank" class="group block size-12 overflow-hidden rounded-xl transition-transform hover:scale-110">
                    <img src="https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/25Zm/834X834/1-04.png/webp" alt="Douyin" class="size-full object-cover">
                 </a>
                 <a href="https://www.xiaohongshu.com/user/profile/678f47130000000007000eaa" target="_blank" class="group block size-12 overflow-hidden rounded-xl transition-transform hover:scale-110">
                    <img src="https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/MyKf/834X834/1-05.png/webp" alt="Red" class="size-full object-cover">
                 </a>
                 <a href="https://www.zcool.com.cn/u/15462186" target="_blank" class="group block size-12 overflow-hidden rounded-xl transition-transform hover:scale-110">
                    <img src="https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/6st1/834X834/1-06.png/webp" alt="ZCool" class="size-full object-cover">
                 </a>
                 <a href="https://space.bilibili.com/339715446" target="_blank" class="group block size-12 overflow-hidden rounded-xl transition-transform hover:scale-110">
                    <img src="https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/JzPh/834X834/1-07.png/webp" alt="Bili" class="size-full object-cover">
                 </a>
                 <a href="https://weibo.com/u/7931697572" target="_blank" class="group block size-12 overflow-hidden rounded-xl transition-transform hover:scale-110">
                    <img src="https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/Lm8A/834X834/1-08.png/webp" alt="Weibo" class="size-full object-cover">
                 </a>
                 <a href="https://www.youtube.com/@zizaotop" target="_blank" class="group block size-12 overflow-hidden rounded-xl transition-transform hover:scale-110">
                    <img src="https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/WxmZ/200X200/1-09.png/webp" alt="Youtube" class="size-full object-cover">
                 </a>
             </div>
        </div>

        <!-- QR Codes -->
        <div class="flex flex-col sm:flex-row gap-6">
             <div class="flex items-center gap-4 rounded-xl bg-gray-50 p-4 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
                <div class="size-20 overflow-hidden rounded-lg bg-white shadow-sm dark:bg-neutral-800">
                  <img src="https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/4dAf/251X251/iwg.webp/webp" class="size-full object-cover">
                </div>
                <div class="flex flex-col gap-1">
                  <span class="text-sm font-bold text-gray-900 dark:text-white">公众号</span>
                  <span class="text-xs text-gray-500">关注最新动态</span>
                </div>
             </div>
             <div class="flex items-center gap-4 rounded-xl bg-gray-50 p-4 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
                <div class="size-20 overflow-hidden rounded-lg bg-white shadow-sm dark:bg-neutral-800">
                  <img src="https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/HGRq/251X251/iwx.webp/webp" class="size-full object-cover">
                </div>
                <div class="flex flex-col gap-1">
                  <span class="text-sm font-bold text-gray-900 dark:text-white">添加微信</span>
                  <span class="text-xs text-gray-500">扫码咨询客服</span>
                </div>
             </div>
        </div>
    </div>

    <!-- Copyright -->
    <div class="mt-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-gray-100 pt-8 dark:border-neutral-900">
        <div class="flex flex-col gap-4">
            <p class="text-xs text-gray-400">© 2025 ZIZAO.TOP. 自在造字. All rights reserved.</p>
            <div class="flex gap-4 text-[10px] uppercase tracking-widest text-gray-400">
                <a href="https://www.zizao.top//docs.html?section=copyright" class="hover:text-black dark:hover:text-white transition-colors">版权说明</a>
                <a href="https://www.zizao.top//docs.html?section=licensing" class="hover:text-black dark:hover:text-white transition-colors">授权说明</a>
                <a href="https://www.zizao.top//docs.html?section=terms" class="hover:text-black dark:hover:text-white transition-colors">使用条款</a>
                <a href="https://www.zizao.top//docs.html?section=faq" class="hover:text-black dark:hover:text-white transition-colors">FAQ</a>
            </div>
        </div>
        <div class="flex flex-col items-start md:items-end gap-2">
            <span class="text-[10px] font-bold uppercase tracking-widest text-gray-300 dark:text-neutral-700">友情链接</span>
            <div class="flex flex-wrap gap-6 text-xs text-gray-500 dark:text-neutral-500">
              <a href="https://github.com/" target="_blank" class="hover:text-black dark:hover:text-white transition-colors">Github</a>
              <a href="https://imgbed.cn" target="_blank" class="hover:text-black dark:hover:text-white transition-colors">图床小镇</a>
              <a href="https://www.cloudflare.com/zh-cn/" target="_blank" class="hover:text-black dark:hover:text-white transition-colors">Cloudflare</a>
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
    injectFavicon();
    
    // Re-initialize theme icons for the mobile menu which is injected dynamically
    const isDark = document.documentElement.classList.contains('dark');
    updateIcons(isDark);
});

function injectFavicon() {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251101/8hkj/ico.ico';
}