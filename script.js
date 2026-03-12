/**
 * TYPEFOUNDRY STUDIO - CORE LOGIC
 * Optimized & De-duplicated
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initScrollLogic(); 
    highlightCurrentPage();
    setupAccordion(); 
    setupAboutScrollSpy(); 
    setupGlobalImageViewer();
    injectBackToTop(); 
    
    // Grid Page Specific
    if (document.getElementById('products-grid')) {
        initProductGrid(); 
    }
    
    // Index Page Specific
    initHeroCarousel();
});

// ================= 1. Theme Logic =================
function initTheme() {
    const isDark = localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    applyTheme(isDark);
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateIcons(isDark);
    
    // Sync Image Viewer if exists
    const img = document.getElementById('p-image');
    if (img && img.dataset.darkSrc) {
        // Reset src based on new theme if user hasn't manually toggled it
        const lightSrc = img.src.includes(img.dataset.darkSrc) ? img.dataset.darkSrc : img.src; // Fallback logic
    }
}

function applyTheme(isDark) {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    updateIcons(isDark);
}

function updateIcons(isDark) {
    setTimeout(() => {
        const sunIcons = document.querySelectorAll('.icon-sun');
        const moonIcons = document.querySelectorAll('.icon-moon');
        sunIcons.forEach(icon => icon.style.display = isDark ? 'block' : 'none');
        moonIcons.forEach(icon => icon.style.display = isDark ? 'none' : 'block');
        
        const logos = document.querySelectorAll('.nav-logo');
        logos.forEach(logo => {
            logo.style.filter = isDark ? 'brightness(0) invert(1)' : 'none';
        });
    }, 50);
}

// ================= 2. Scroll & Nav Logic =================
function injectBackToTop() {
    if (document.getElementById('back-to-top')) return;
    const btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.className = 'back-to-top flex size-12 items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 cursor-pointer shadow-2xl transition-all duration-300';
    btn.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>';
    btn.onclick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    document.body.appendChild(btn);
}

function initScrollLogic() {
    let lastScrollY = window.scrollY;
    const nav = document.getElementById('nav-placeholder');
    const filterBar = document.getElementById('filter-bar'); 

    if(nav) nav.classList.add('nav-transition');

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const backToTop = document.getElementById('back-to-top');
        
        if (nav) {
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                nav.classList.add('nav-hidden');
                nav.classList.remove('nav-visible');
                if (filterBar) {
                    filterBar.classList.remove('top-20');
                    filterBar.classList.add('top-0');
                }
            } else {
                nav.classList.remove('nav-hidden');
                nav.classList.add('nav-visible');
                if (filterBar) {
                    filterBar.classList.remove('top-0');
                    filterBar.classList.add('top-20');
                }
            }
        }

        if (backToTop) {
            if (currentScrollY > 300) backToTop.classList.add('visible');
            else backToTop.classList.remove('visible');
        }
        lastScrollY = currentScrollY;
    });
}

function highlightCurrentPage() {
    setTimeout(() => {
        const path = window.location.pathname; 
        let page = '';
        
        if (path === '/' || path.endsWith('/index.html') || path.endsWith('/')) {
            page = 'home';
        } else if (path.includes('fonts')) {
            page = 'fonts';
        } else if (path.includes('licensing')) {
            page = 'licensing';
        } else if (path.includes('docs')) {
            page = 'docs';
        }

        document.querySelectorAll('.nav-link').forEach(link => {
            const isProductsBtn = link.textContent.trim().includes('字体产品');
            link.classList.remove('text-black', 'dark:text-white', 'opacity-100', 'font-bold');
            link.classList.add('text-gray-500', 'dark:text-neutral-500');

            if ((link.dataset.page === page) || (page === 'products' && isProductsBtn)) {
                link.classList.remove('text-gray-500', 'dark:text-neutral-500');
                link.classList.add('text-black', 'dark:text-white', 'opacity-100', 'font-bold');
            }
        });
    }, 100);
}

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const top = document.getElementById('hamburger-top');
    const mid = document.getElementById('hamburger-mid'); // Might not exist in some designs
    const bot = document.getElementById('hamburger-bot');
    
    if (!menu) return;
    
    const isOpen = menu.classList.contains('is-open');
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    if (!isOpen) {
        menu.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
        menu.classList.add('is-open', 'opacity-100', 'pointer-events-auto', 'translate-y-0');
        document.body.style.overflow = 'hidden'; 
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        if(top && bot) {
            top.classList.add('rotate-45', 'translate-y-[8px]');
            if(mid) mid.classList.add('opacity-0');
            bot.classList.add('-rotate-45', '-translate-y-[8px]');
        }

        const items = document.querySelectorAll('.mobile-nav-item');
        items.forEach((item, idx) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100 + (idx * 60));
        });
    } else {
        menu.classList.remove('is-open', 'opacity-100', 'pointer-events-auto', 'translate-y-0');
        menu.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
        document.body.style.overflow = ''; 
        document.body.style.paddingRight = '';

        if(top && bot) {
            top.classList.remove('rotate-45', 'translate-y-[8px]');
            if(mid) mid.classList.remove('opacity-0');
            bot.classList.remove('-rotate-45', '-translate-y-[8px]');
        }
        
        const items = document.querySelectorAll('.mobile-nav-item');
        items.forEach((item) => { item.style.transition = 'none'; });
    }
}

// ================= 3. Image Viewer (Optimized) =================
function setupGlobalImageViewer() {
    const container = document.getElementById('image-viewer-container');
    const img = document.getElementById('p-image');
    const slider = document.getElementById('zoom-slider');
    const toggleBtn = document.getElementById('img-toggle-btn');
    
    if (!container || !img) return;

    // Handle Dark Mode image source initially
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark && img.dataset.darkSrc) img.src = img.dataset.darkSrc;

    let zoom = 1;
    let pan = { x: 0, y: 0 };
    let startPan = { x: 0, y: 0 };
    let isDragging = false;
    let initialPinchDistance = null;
    let initialZoom = 1;
    let lastTouchPos = { x: 0, y: 0 };

    // Toggle Variables
    const originalSrc = img.src.includes(img.dataset.darkSrc) && img.dataset.darkSrc ? 
                        (isDark ? (img.getAttribute('src') !== img.getAttribute('data-dark-src') ? img.src : img.src) : img.src) 
                        : img.src; 
    // Simplified Toggle Logic
    const lightSrc = img.getAttribute('src'); 
    const darkSrc = img.getAttribute('data-dark-src');
    let isToggled = false; 

    function updateTransform() {
        zoom = Math.min(Math.max(1, zoom), 3);
        
        if (zoom <= 1) {
            pan = { x: 0, y: 0 }; 
        } else {
            const width = container.offsetWidth;
            const height = container.offsetHeight;
            const maxOverflowX = (width * zoom - width) / 2;
            const maxOverflowY = (height * zoom - height) / 2;
            pan.x = Math.min(Math.max(pan.x, -maxOverflowX), maxOverflowX);
            pan.y = Math.min(Math.max(pan.y, -maxOverflowY), maxOverflowY);
        }
        img.style.transform = `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`;
        if (slider) slider.value = zoom;
        container.style.cursor = zoom > 1 ? 'grab' : 'default';
    }

    if (slider) {
        slider.addEventListener('mousedown', (e) => e.stopPropagation());
        slider.addEventListener('touchstart', (e) => e.stopPropagation());
        slider.addEventListener('input', (e) => {
            zoom = parseFloat(e.target.value);
            updateTransform();
        });
    }

    container.addEventListener('mousedown', (e) => {
        if (zoom > 1) {
            isDragging = true;
            startPan = { x: e.clientX - pan.x, y: e.clientY - pan.y };
            container.style.cursor = 'grabbing';
            e.preventDefault(); 
        }
    });

    window.addEventListener('mousemove', (e) => {
        if (isDragging && zoom > 1) {
            e.preventDefault();
            pan.x = e.clientX - startPan.x;
            pan.y = e.clientY - startPan.y;
            updateTransform();
        }
    });

    window.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            container.style.cursor = zoom > 1 ? 'grab' : 'default';
        }
    });
    
    container.addEventListener('mouseleave', () => { isDragging = false; });

    // Touch Support
    container.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) {
            e.preventDefault(); 
            initialPinchDistance = Math.hypot(
                e.touches[0].pageX - e.touches[1].pageX,
                e.touches[0].pageY - e.touches[1].pageY
            );
            initialZoom = zoom;
        } else if (e.touches.length === 1 && zoom > 1) {
            lastTouchPos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
    }, { passive: false });

    container.addEventListener('touchmove', (e) => {
        if (e.touches.length === 2 && initialPinchDistance) {
            e.preventDefault();
            const currentDistance = Math.hypot(
                e.touches[0].pageX - e.touches[1].pageX,
                e.touches[0].pageY - e.touches[1].pageY
            );
            zoom = initialZoom * (currentDistance / initialPinchDistance);
            updateTransform();
        } else if (e.touches.length === 1 && zoom > 1) {
            e.preventDefault();
            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            pan.x += currentX - lastTouchPos.x;
            pan.y += currentY - lastTouchPos.y;
            lastTouchPos = { x: currentX, y: currentY };
            updateTransform();
        }
    }, { passive: false });

    container.addEventListener('touchend', (e) => {
        if (e.touches.length < 2) initialPinchDistance = null;
    });

    // Toggle Background/Image logic
    if (toggleBtn) {
        if (!darkSrc) toggleBtn.style.display = 'none';
        
        toggleBtn.addEventListener('click', () => {
            isToggled = !isToggled;
            
            if (isToggled) {
                container.style.backgroundColor = '#0f0f0f';
                if(darkSrc) img.src = darkSrc;
                toggleBtn.classList.add('bg-white', 'text-black');
                toggleBtn.classList.remove('bg-black', 'text-white');
            } else {
                container.style.backgroundColor = '#f3f4f6'; // gray-100
                img.src = "https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/zTEv/6803X1701/123-02.jpg/webp"; 
                toggleBtn.classList.add('bg-black', 'text-white');
                toggleBtn.classList.remove('bg-white', 'text-black');
            }
        });
    }
}

// ================= 4. Utils =================
function openDownloadModal() { document.getElementById('download-modal')?.classList.remove('hidden'); }
function closeDownloadModal() { document.getElementById('download-modal')?.classList.add('hidden'); }

function setupAccordion() {
    document.querySelectorAll('.accordion-btn').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.accordion-icon');
            const isOpen = content.classList.contains('accordion-open');
            
            document.querySelectorAll('.accordion-content').forEach(c => { 
                c.classList.remove('accordion-open'); 
                c.classList.add('accordion-closed'); 
            });
            document.querySelectorAll('.accordion-icon').forEach(i => i.classList.remove('rotate-45'));
            
            if (!isOpen) { 
                content.classList.remove('accordion-closed'); 
                content.classList.add('accordion-open'); 
                icon.classList.add('rotate-45'); 
            }
        });
    });
}

function setupAboutScrollSpy() {
    if (!window.location.pathname.includes('about')) return;
    
    const sections = ['vision', 'business', 'philosophy', 'clients', 'contact'];
    const navItems = document.querySelectorAll('.about-nav-btn');
    
    const onScroll = () => {
        let current = '';
        const scrollPosition = window.scrollY;
        
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
            current = sections[sections.length - 1];
        } else {
            sections.forEach(id => { 
                const el = document.getElementById(id); 
                if (el && scrollPosition >= (el.offsetTop - 400)) {
                    current = id; 
                }
            });
        }
        
        navItems.forEach(btn => {
            btn.classList.remove('text-black', 'dark:text-white', 'opacity-100');
            btn.classList.add('text-gray-400', 'font-medium');
            if (btn.getAttribute('href') === '#' + current) {
                btn.classList.add('text-black', 'dark:text-white', 'opacity-100');
                btn.classList.remove('text-gray-400');
            }
        });
    };
    window.addEventListener('scroll', onScroll);
    onScroll(); 
}

// ================= 5. Hero Carousel =================
let currentSlide = 0;
let slideInterval;
const totalSlides = 3; 

function initHeroCarousel() {
    const container = document.getElementById('hero-carousel');
    if (!container) return;
    
    startSlideTimer();
    container.addEventListener('mouseenter', stopSlideTimer);
    container.addEventListener('mouseleave', startSlideTimer);

    // --- Mobile Swipe Logic Start ---
    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50; // Threshold

    container.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopSlideTimer(); // Pause auto-slide on touch
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startSlideTimer(); // Resume auto-slide
    }, { passive: true });

    function handleSwipe() {
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > minSwipeDistance) {
            if (swipeDistance < 0) {
                // Swiped Left -> Next Slide
                nextHeroSlide();
            } else {
                // Swiped Right -> Prev Slide
                prevHeroSlide();
            }
        }
    }
    // --- Mobile Swipe Logic End ---
}

function switchHeroSlide(index, event) {
    if (event) { event.stopPropagation(); event.preventDefault(); }

    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;
    currentSlide = index;

    slides.forEach((slide, i) => {
        const img = slide.querySelector('.slide-img');
        if (i === currentSlide) {
            slide.classList.remove('opacity-0', 'z-10');
            slide.classList.add('opacity-100', 'z-20');
            if(img) {
                img.style.transition = 'none';
                img.style.transform = 'scale(1)';
                setTimeout(() => {
                    img.style.transition = 'transform 8s linear';
                    img.style.transform = 'scale(1.1)';
                }, 50);
            }
        } else {
            slide.classList.remove('opacity-100', 'z-20');
            slide.classList.add('opacity-0', 'z-10');
            if(img) img.style.transform = 'scale(1)';
        }
    });

    dots.forEach((dot, i) => {
        if (i === currentSlide) {
            dot.classList.remove('opacity-40', 'w-1.5');
            dot.classList.add('opacity-100', 'w-6');
        } else {
            dot.classList.remove('opacity-100', 'w-6');
            dot.classList.add('opacity-40', 'w-1.5');
        }
    });
}

function nextHeroSlide(event) { 
    if (event) { event.stopPropagation(); }
    switchHeroSlide(currentSlide + 1); 
}

function prevHeroSlide(event) {
    if (event) { event.stopPropagation(); }
    switchHeroSlide(currentSlide - 1);
}

function startSlideTimer() { stopSlideTimer(); slideInterval = setInterval(() => nextHeroSlide(), 5000); }
function stopSlideTimer() { if (slideInterval) clearInterval(slideInterval); }