/**
 * APP_DATA: 全局数据对象
 */
const APP_DATA = {
    navData: {
        logoHtml: '<a href="index.html" class="navbar-logo"><img src="https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251101/abRh/500X180/logo.png/webp" alt="Logo"></a>',
        menuItems: [
            { name: '首页', link: 'index.html', dropdown: null },
            { 
                name: '字体产品', 
                link: 'fonts.html', 
                dropdown: null // 移除下拉菜单，直接跳转
            },
            { name: '字体授权', link: 'license.html', dropdown: null },
            { name: '定制服务', link: 'custom-font.html', dropdown: null },
            { 
                name: '关于我们',
                link: 'us.html', 
                dropdown: [
                    { name: '授权问题', link: 'us.html#auth_faq' },
                    { name: '用户协议', link: 'us.html#service_agreement' },
                    { name: '建议反馈', link: 'us.html#font_feedback' }
                    // 移除了底部分割线选项
                ]
            },
        ],
        actionButton: {
            text: '获取字体授权',
            link: 'license.html',
            target: '_self', 
            rel: ''
        }
    },
    footerData: {
        copyright: '&copy; 2025 ZIZAO.TOP. 自在造字. All rights reserved.'
    }
};

/**
 * 智能路径处理函数
 * 检测当前页面是否在 fonts/ 子目录下，并修正链接路径
 */
function resolvePath(targetLink) {
    // 简单判断：如果当前 URL 包含 '/fonts/'，说明我们在子目录下 (例如 fonts/qidiansans.html)
    const isInFontsDir = window.location.pathname.includes('/fonts/');
    
    if (isInFontsDir) {
        // 如果目标链接是指向 fonts 文件夹内部的文件 (例如 fonts/qidiansans.html)
        if (targetLink.startsWith('fonts/')) {
            return targetLink.replace('fonts/', ''); // 去掉前缀，变成同级引用
        } 
        // 如果是锚点链接 (#开头) 或 绝对链接 (http开头)，保持不变
        else if (targetLink.startsWith('#') || targetLink.startsWith('http')) {
            return targetLink;
        }
        // 否则，目标是根目录文件 (如 index.html)，需要加 ../
        else {
            return '../' + targetLink;
        }
    } else {
        // 如果我们在根目录，直接返回原始链接
        return targetLink;
    }
}

/**
 * 渲染导航栏
 */
function renderNavbar() {
    const navbar = document.querySelector('#navbar');
    if (!navbar || !APP_DATA.navData) return;

    const data = APP_DATA.navData;
    
    // 处理 Logo 链接
    const logoLink = resolvePath('index.html');
    let html = `<a href="${logoLink}" class="navbar-logo"><img src="https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251101/abRh/500X180/logo.png/webp" alt="Logo"></a>`;

    html += `<button class="menu-toggle"><span class="menu-toggle-icon"></span></button>`;

    let menuHtml = '<ul class="navbar-menu">';
    data.menuItems.forEach(item => {
        let dropdownHtml = '';
        if (item.dropdown && item.dropdown.length > 0) {
            dropdownHtml = '<ul class="dropdown">';
            item.dropdown.forEach(ddItem => {
                const isSeparator = ddItem.separator ? ' style="border-top: 1px solid #f5f5f5; padding-top: 8px; margin-top: 8px;"' : '';
                // 处理下拉菜单链接
                const ddLink = resolvePath(ddItem.link);
                dropdownHtml += `<li${isSeparator}><a href="${ddLink}" class="dropdown-link">${ddItem.name}</a></li>`;
            });
            dropdownHtml += '</ul>';
        }
        
        // 处理主菜单链接
        const itemLink = resolvePath(item.link);
        const linkContent = `<a href="${itemLink}" class="menu-link">${item.name}</a>`;
        menuHtml += `<li class="menu-item">${linkContent}${dropdownHtml}</li>`;
    });
    menuHtml += '</ul>';
    html += menuHtml;

    if (data.actionButton) {
        const actionLink = resolvePath(data.actionButton.link);
        const targetAttr = data.actionButton.target ? `target="${data.actionButton.target}"` : '';
        const relAttr = data.actionButton.rel ? `rel="${data.actionButton.rel}"` : '';
        html += `<div class="navbar-actions"><a href="${actionLink}" class="btn-primary" ${targetAttr} ${relAttr}><span>${data.actionButton.text}</span></a></div>`;
    }
    
    navbar.innerHTML = html;
}

/**
 * 渲染底部
 */
function renderFooter() {
    const footer = document.querySelector('#footer');
    if (!footer || !APP_DATA.footerData) return;
    footer.innerHTML = APP_DATA.footerData.copyright;
}

/**
 * 初始化移动端菜单 (增加二级菜单点击展开逻辑)
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.navbar-menu');
    
    // 主菜单切换
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }

    // 二级菜单手风琴逻辑 - 点击链接展开/收起
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        // 检查是否有下拉菜单
        if (item.querySelector('.dropdown')) {
            const link = item.querySelector('.menu-link');
            if (link) {
                link.addEventListener('click', (e) => {
                    // 匹配CSS中的断点 1024px
                    if (window.innerWidth <= 1024) {
                        e.preventDefault(); // 阻止链接跳转
                        item.classList.toggle('mobile-active'); // 切换展开状态
                    }
                });
            }
        }
    });
}

/**
 * 导航栏滚动显隐 & 回到顶部按钮逻辑 & 客服安静模式
 */
function initScrollInteraction() {
    const navbar = document.querySelector('.navbar');
    const contactWidget = document.querySelector('.contact-widget'); // 获取客服挂件
    let lastScrollTop = 0;
    const scrollThreshold = 100; // 滚动超过这个距离才开始隐藏
    
    // 创建回到顶部按钮 (使用 SVG 图标)
    const backToTopBtn = document.createElement('div');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.title = '回到顶部';
    backToTopBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>';
    document.body.appendChild(backToTopBtn);

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // 导航栏逻辑
        if (navbar) {
            if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
                navbar.classList.add('navbar-hidden');
            } else {
                navbar.classList.remove('navbar-hidden');
            }
        }

        // 回到顶部按钮逻辑
        if (scrollTop > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }

        // 客服挂件安静模式逻辑
        if (contactWidget) {
            if (scrollTop > 100) {
                contactWidget.classList.add('quiet');
            } else {
                contactWidget.classList.remove('quiet');
            }
        }

        lastScrollTop = Math.max(0, scrollTop); // 防止负值
    });
}

/**
 * 全局联系客服挂件
 */
function initContactWidget() {
    // 注入HTML，增加提示气泡
    const widgetHtml = `
        <div class="contact-widget" title="联系我们">
            <span class="contact-tip">有问题点这里联系哟~</span>
            <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
        </div>
        <div class="contact-modal">
            <div class="contact-modal-content">
                <button class="close-contact-modal">&times;</button>
                <div class="qr-item">
                    <img src="https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251117/Q2Wg/4167X1667/8.png/webp" alt="添加微信">
                    <p>添加微信好友</p>
                </div>
                <div class="qr-item">
                    <img src="https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251117/0y1B/4167X1667/9.png/webp" alt="关注公众号">
                    <p>关注公众号</p>
                </div>
            </div>
        </div>
    `;
    const div = document.createElement('div');
    div.innerHTML = widgetHtml;
    document.body.appendChild(div);

    const btn = document.querySelector('.contact-widget');
    const modal = document.querySelector('.contact-modal');
    const closeBtn = document.querySelector('.close-contact-modal');

    if (btn && modal) {
        btn.addEventListener('click', () => modal.classList.add('active'));
        
        const close = () => modal.classList.remove('active');
        if (closeBtn) closeBtn.addEventListener('click', close);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) close();
        });
    }
}


/**
 * 首页轮播图逻辑 (纯点击切换，无拖拽)
 */
function initHeroCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const dotsContainer = document.querySelector('.carousel-dots');
    const prevBtn = document.querySelector('.carousel-arrow.prev');
    const nextBtn = document.querySelector('.carousel-arrow.next');
    
    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    // 生成指示器
    if (dotsContainer) {
        slides.forEach((_, idx) => {
            const dot = document.createElement('div');
            dot.className = `dot ${idx === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                currentIndex = idx;
                updatePosition();
            });
            dotsContainer.appendChild(dot);
        });
    }

    const dots = document.querySelectorAll('.dot');

    function updateDots() {
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
    }

    function setPositionByIndex() {
        const currentTranslate = currentIndex * -track.offsetWidth;
        track.style.transform = `translateX(${currentTranslate}px)`;
        updateDots();
    }

    function updatePosition() {
         track.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
         setPositionByIndex();
    }

    // 箭头控制
    if (prevBtn) prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
        updatePosition();
    });
    if (nextBtn) nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        updatePosition();
    });

    // 窗口大小改变时重置位置
    window.addEventListener('resize', () => {
        track.style.transition = 'none';
        setPositionByIndex();
    });
}


// 自动初始化
document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderFooter();
    initMobileMenu();
    initContactWidget(); // 初始化全局客服挂件
    initScrollInteraction(); // 初始化滚动交互（包含客服挂件安静逻辑）
    initHeroCarousel(); 
});