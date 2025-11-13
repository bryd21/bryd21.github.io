// ===================================
// MOBILE MENU TOGGLE
// ===================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const body = document.body;

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            body.style.overflow = '';
        });
    });
}

// ===================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href !== '#' && href.length > 1) {
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===================================
// NAVBAR ENHANCEMENT ON SCROLL
// ===================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
    
    lastScroll = currentScroll;
});

// ===================================
// COUNTER ANIMATION FOR STATS
// ===================================
const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Observe stats for counter animation
const observeStats = () => {
    const stats = document.querySelectorAll('.stat-number');
    
    if (stats.length === 0) return;
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => statsObserver.observe(stat));
};

// Initialize stats animation
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeStats);
} else {
    observeStats();
}

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elements to animate on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll(`
        .program-card, 
        .philosophy-box, 
        .testimonial-box, 
        .feature-box,
        .contact-card,
        .credential-card
    `);
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(el);
    });
};

// Initialize animations
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateOnScroll);
} else {
    animateOnScroll();
}

// ===================================
// SCROLL TO TOP BUTTON
// ===================================
const createScrollTopButton = () => {
    const scrollTopButton = document.createElement('button');
    scrollTopButton.innerHTML = '↑';
    scrollTopButton.className = 'scroll-to-top';
    scrollTopButton.setAttribute('aria-label', 'Scroll to top');
    
    scrollTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(46, 125, 50, 0.3);
    `;
    
    document.body.appendChild(scrollTopButton);
    
    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollTopButton.style.opacity = '1';
            scrollTopButton.style.visibility = 'visible';
        } else {
            scrollTopButton.style.opacity = '0';
            scrollTopButton.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effects
    scrollTopButton.addEventListener('mouseenter', () => {
        scrollTopButton.style.transform = 'translateY(-3px) scale(1.05)';
        scrollTopButton.style.boxShadow = '0 6px 20px rgba(46, 125, 50, 0.4)';
    });
    
    scrollTopButton.addEventListener('mouseleave', () => {
        scrollTopButton.style.transform = 'translateY(0) scale(1)';
        scrollTopButton.style.boxShadow = '0 4px 12px rgba(46, 125, 50, 0.3)';
    });
};

// Create scroll to top button
createScrollTopButton();

// ===================================
// ACTIVE NAV LINK HIGHLIGHTING
// ===================================
const highlightActiveSection = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
            if (href === `#${current}` || 
                (current === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    });
};

highlightActiveSection();

// ===================================
// IMAGE LAZY LOADING FALLBACK
// ===================================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===================================
// FORM HANDLING
// ===================================
const handleForms = () => {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ff4444';
                    input.style.background = 'rgba(255, 68, 68, 0.05)';
                } else {
                    input.style.borderColor = '';
                    input.style.background = '';
                }
            });
            
            if (isValid) {
                // Show success message
                const successMsg = document.createElement('div');
                successMsg.textContent = 'Thank you! We will get back to you soon.';
                successMsg.style.cssText = `
                    background: #2E7D32;
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 8px;
                    margin-top: 1rem;
                    text-align: center;
                    animation: fadeInUp 0.5s ease;
                `;
                form.appendChild(successMsg);
                
                // Reset form
                form.reset();
                
                // Remove message after 5 seconds
                setTimeout(() => {
                    successMsg.style.opacity = '0';
                    setTimeout(() => successMsg.remove(), 300);
                }, 5000);
            }
        });
        
        // Real-time validation
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    input.style.borderColor = '#ff4444';
                    input.style.background = 'rgba(255, 68, 68, 0.05)';
                } else {
                    input.style.borderColor = '';
                    input.style.background = '';
                }
            });
            
            input.addEventListener('focus', () => {
                input.style.borderColor = '#4CAF50';
                input.style.background = '';
            });
        });
    });
};

handleForms();

// ===================================
// PARALLAX EFFECT FOR HERO
// ===================================
const heroParallax = () => {
    const hero = document.querySelector('.hero');
    
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
};

heroParallax();

// ===================================
// FEATURE CARD TILT EFFECT
// ===================================
const addTiltEffect = () => {
    const cards = document.querySelectorAll('.program-card, .testimonial-box, .philosophy-box');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
};

// Add tilt effect on desktop only
if (window.innerWidth > 768) {
    addTiltEffect();
}

// ===================================
// PRELOADER (Optional)
// ===================================
const hidePreloader = () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 300);
            }, 500);
        });
    }
};

hidePreloader();

// ===================================
// RESPONSIVE UTILITIES
// ===================================
let windowWidth = window.innerWidth;

window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    
    // Re-initialize certain features on resize
    if ((windowWidth <= 768 && newWidth > 768) || (windowWidth > 768 && newWidth <= 768)) {
        // Reset mobile menu
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            body.style.overflow = '';
        }
        
        // Re-add tilt effect for desktop
        if (newWidth > 768) {
            addTiltEffect();
        }
    }
    
    windowWidth = newWidth;
});

// ===================================
// CONSOLE WELCOME MESSAGE
// ===================================
console.log(
    '%c🎾 Welcome to Modu Tennis! ',
    'background: #2E7D32; color: white; font-size: 16px; padding: 10px 20px; font-weight: bold; border-radius: 8px;'
);
console.log(
    '%cLooking to elevate your tennis game? Get in touch with us!',
    'font-size: 12px; color: #666; margin-top: 10px;'
);

// ===================================
// PAGE VISIBILITY API
// ===================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('User left the page');
    } else {
        console.log('User returned to the page');
    }
});

// ===================================
// KEYBOARD NAVIGATION SUPPORT
// ===================================
document.addEventListener('keydown', (e) => {
    // ESC key to close mobile menu
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        body.style.overflow = '';
    }
});

// ===================================
// TOUCH DEVICE DETECTION
// ===================================
const isTouchDevice = () => {
    return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
};

if (isTouchDevice()) {
    document.body.classList.add('touch-device');
} else {
    document.body.classList.add('no-touch');
}

// ===================================
// PERFORMANCE MONITORING
// ===================================
if ('PerformanceObserver' in window) {
    const perfObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            console.log('Performance entry:', entry);
        }
    });
    
    try {
        perfObserver.observe({ entryTypes: ['navigation', 'paint'] });
    } catch (e) {
        console.log('Performance observer not supported');
    }
}

// ===================================
// ACCESSIBILITY ENHANCEMENTS
// ===================================
const enhanceAccessibility = () => {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: #2E7D32;
        color: white;
        padding: 8px 16px;
        text-decoration: none;
        z-index: 10000;
        border-radius: 0 0 8px 0;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content id if not exists
    const mainContent = document.querySelector('main') || document.querySelector('.hero');
    if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
    }
};

enhanceAccessibility();

// ===================================
// ERROR HANDLING
// ===================================
window.addEventListener('error', (e) => {
    console.error('Global error caught:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// ===================================
// INITIALIZATION COMPLETE
// ===================================
console.log('%c✓ Website initialized successfully', 'color: #4CAF50; font-weight: bold;');
