// ----------------------------------------------------
// 公共数据源 (仅包含数据)
// openInNewTab: true  是新标签页打开
// ----------------------------------------------------

const navData = [
    { label: '首页', url: 'https://www.zizao.top', openInNewTab: false },

    { label: '产品', url: 'https://www.zizao.top/fonts', openInNewTab: false },
    
    { label: '导航', url: 'https://www.zizao.top/hao', openInNewTab: true },

    { label: '资源', url: 'https://www.zizao.top/bao', openInNewTab: false },

    { label: '工具', url: '#', hasDropdown: true, subMenu: [
        { label: '形近字查询', url: 'https://www.zizao.top/tools/chaoyin', openInNewTab: false },
        { label: '搜书法风格', url: 'https://www.zizao.top/tools/shufa', openInNewTab: false },
        { label: '在线TXT文本编辑', url: 'https://www.zizao.top/tools/txt', openInNewTab: false },
        { label: '汉字转拼音', url: 'https://www.zizao.top/tools/pinyin', openInNewTab: false },
        { label: '文本差异对比', url: 'https://www.zizao.top/tools/duibi', openInNewTab: false }
    ]},

    { label: '关于', url: '#', hasDropdown: true, subMenu: [
        { label: '关于我们', url: 'https://www.zizao.top/us.html#about', openInNewTab: false },
        { label: '版权声明', url: 'https://www.zizao.top/us.html#copyright', openInNewTab: false },
        { label: '建议反馈', url: 'https://www.zizao.top/us.html#feedback', openInNewTab: false },
        { label: '联系我们', url: 'https://www.zizao.top/us.html#contact', openInNewTab: false }
    ]},
];

const footerLinks = [
    { label: '版权声明', url: 'https://www.zizao.top/us.html#copyright' },
    { label: '联系我们', url: 'https://www.zizao.top/us.html#contact' }
];

const siteConfig = {
    homeUrl: 'https://www.zizao.top',
    logoUrl: 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251101/abRh/500X180/logo.png/webp',
    copyrightText: '© 2025 ZIZAO.TOP. 保留所有权利.'
};