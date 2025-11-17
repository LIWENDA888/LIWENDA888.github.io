/**
 * APP_DATA: 全局数据对象，用于存储导航栏和底部栏的动态内容。
 * 该文件中的数据将在 index.html 的内部 <script> 标签中被调用。
 */
const APP_DATA = {
    navData: {
        // Logo HTML 
        logoHtml: '<a href="#" class="navbar-logo"><img src="https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251101/abRh/500X180/logo.png/webp" alt="Logo"></a>',
        
        // 导航菜单项
        menuItems: [
            { name: '首页', link: '#', dropdown: null },
            { 
                name: '字体产品', 
                link: '#', 
                dropdown: [
                    { name: '字造起点黑', link: '#' },
                    // 分隔符和查看全部
                    { name: '查看全部产品', link: '#', separator: true } 
                ]
            },
            { 
                name: '字体授权', 
                link: '#', 
                dropdown: [
                    { name: '画廊展示', link: '#' },
                    { name: '设计师访谈', link: '#', separator: true }
                ]
            },
            { 
                name: '定制服务', 
                link: '#', 
                dropdown: [
                    { name: '画廊展示', link: '#' },
                    { name: '设计师访谈', link: '#', separator: true }
                ]
            },
            { name: '关于我们', link: '#', dropdown: null },
        ],
        
        // 右侧操作按钮
        actionButton: {
            text: '获取字体授权',
            link: '#',
            target: '_blank', 
            rel: 'noopener noreferrer'
        }
    },

    // 底部栏数据
    footerData: {
        copyright: '&copy; 2025 ZIZAO.TOP. 自在造字. All rights reserved.'
    }
};