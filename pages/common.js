/**
 * APP_DATA: 全局数据对象，用于存储导航栏和底部栏的动态内容。
 * 该文件中的数据将在 index.html 的内部 <script> 标签中被调用。
 */
const APP_DATA = {
    navData: {
        // Logo HTML 
        logoHtml: '<a href="https://www.zizao.top" class="navbar-logo"><img src="https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251101/abRh/500X180/logo.png/webp" alt="Logo"></a>',
        
        // 导航菜单项
        menuItems: [
            { name: '首页', link: '#', dropdown: null },
            { 
                name: '字体产品', 
                dropdown: [
                    { name: '字造起点黑', link: 'https://www.zizao.top/fonts/qidiansans' },
                    // 分隔符和查看全部
                    { name: '查看全部产品', link: 'https://www.zizao.top/fonts', separator: true } 
                ]
            },
            { name: '字体授权', link: 'https://www.zizao.top/license', dropdown: null },
            { name: '定制服务', link: 'https://www.zizao.top/custom-font', dropdown: null },
            { 
                name: '关于我们', 
                dropdown: [
                    { name: '授权问题', link: 'https://www.zizao.top/us' },
                    { name: '版权声明', link: 'https://www.zizao.top/us' },
                    { name: '建议反馈', link: 'https://www.zizao.top/us' },
                    { name: '联系我们', link: 'https://www.zizao.top/us' },
                    // 分隔符和查看全部
                    { name: '关于我们', link: 'https://www.zizao.top/us', separator: true } 
                ]
            },
        ],
        
        // 右侧操作按钮
        actionButton: {
            text: '获取字体授权',
            link: 'https://zzfonts.taobao.com',
            target: '_blank', 
            rel: 'noopener noreferrer'
        }
    },

    // 底部栏数据
    footerData: {
        copyright: '&copy; 2025 ZIZAO.TOP. 自在造字. All rights reserved.'
    }
};