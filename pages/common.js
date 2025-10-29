// ----------------------------------------------------
// 公共数据源 (仅包含数据)
// openInNewTab: true  是新标签页打开
// ----------------------------------------------------

const navData = [
    { label: '首页', url: 'https://www.zizao.top', openInNewTab: false },

    { label: '产品', url: 'https://www.zizao.top/fonts', openInNewTab: false },
    
    { label: '授权', url: 'https://www.zizao.top/fonts/auth', openInNewTab: false },

    { label: '工具', url: '#', hasDropdown: true, subMenu: [
        { label: '设计导航', url: 'https://www.zizao.top/hao', openInNewTab: true },
        { label: '字造超引', url: 'https://www.zizao.top/tools/chaoyin', openInNewTab: true },
        { label: '搜书法风格', url: 'https://www.zizao.top/tools/shufa', openInNewTab: true },
        { label: '文本编辑', url: 'https://www.zizao.top/tools/txt', openInNewTab: true },
        { label: '文本对比', url: 'https://www.zizao.top/tools/duibi', openInNewTab: true },
        { label: '拼音转汉字', url: 'https://www.zizao.top/tools/pinyin', openInNewTab: true },
        { label: '文本去重', url: 'https://www.zizao.top/tools/quchong', openInNewTab: true }
    ]},

    { label: '关于', url: 'https://www.zizao.top/fonts/about', openInNewTab: false }
];

const footerLinks = [
    { label: '隐私政策', url: '#' },
    { label: '服务条款', url: '#' }
];

const siteConfig = {
    homeUrl: 'https://www.zizao.top',
    logoUrl: 'https://tc-new.z.wiki/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251005/FhEy/249X79/logo.png/webp',
    copyrightText: '© 2025 ZIZAO.TOP. 保留所有权利.'
};