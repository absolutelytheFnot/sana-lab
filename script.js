// ===== PARALLAX SCROLLING =====
function initParallax() {
    const parallaxBg = document.querySelector('.parallax-bg');

    if (parallaxBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            parallaxBg.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
    }

    // Parallax for mega words
    const megaWords = document.querySelectorAll('.mega-word');
    megaWords.forEach((word, index) => {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const speed = parseFloat(word.getAttribute('data-scroll-speed')) || 0.5;
            const rate = scrolled * speed * 0.1;
            word.style.transform = `translateY(${rate}px)`;
        });
    });
}

// ===== SMOOTH SCROLL FOR NAVIGATION =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== SCROLL-TRIGGERED FADE-IN ANIMATIONS =====
function initScrollAnimations() {
    const faders = document.querySelectorAll('.fade-in-section');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('is-visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
}

// ===== FORM HANDLING =====
function initFormHandling() {
    const collaborateForm = document.getElementById('collaborateForm');

    if (collaborateForm) {
        collaborateForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                organization: document.getElementById('organization').value,
                building: document.getElementById('building').value,
                help: document.getElementById('help').value,
                contact: document.getElementById('contact').value
            };

            // Log data (replace with actual API call)
            console.log('Form submitted:', formData);

            // Show success message with better UI
            const button = collaborateForm.querySelector('button[type="submit"]');
            const originalText = button.textContent;

            button.textContent = 'Message Sent! ✓';
            button.style.background = 'linear-gradient(135deg, #4a8f5e, #2d5a3d)';

            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
                collaborateForm.reset();
            }, 3000);
        });
    }
}

// ===== CTA BUTTON INTERACTIONS =====
function initCTAButtons() {
    const ctaButtons = document.querySelectorAll('.cta-buttons .cta-button');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const formType = this.getAttribute('data-form');
            const formContainer = document.querySelector('.contact-form-container');

            if (formContainer) {
                // Smooth scroll to form
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = formContainer.offsetTop - navHeight - 50;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Pre-fill help field based on button clicked
                setTimeout(() => {
                    const helpField = document.getElementById('help');
                    if (helpField && formType) {
                        const helpTexts = {
                            'partnerships': 'I\'m interested in exploring strategic partnerships with Sana Growth...',
                            'advisory': 'I\'d like to discuss advisory services or speaking engagement opportunities...',
                            'prototype': 'I have an idea I\'d like to prototype with your team...'
                        };
                        helpField.value = helpTexts[formType] || '';
                        helpField.focus();

                        // Add glow effect to form
                        formContainer.style.boxShadow = '0 30px 100px rgba(201, 126, 78, 0.4), inset 0 0 100px rgba(201, 126, 78, 0.1)';
                        setTimeout(() => {
                            formContainer.style.boxShadow = '';
                        }, 2000);
                    }
                }, 800);
            }
        });
    });
}

// ===== CURSOR-FOLLOWING EFFECTS (subtle) =====
function initCursorEffects() {
    const floatingShapes = document.querySelectorAll('.floating-shape');

    if (floatingShapes.length > 0 && window.innerWidth > 1024) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            floatingShapes.forEach((shape, index) => {
                const speed = (index + 1) * 20;
                const xMove = (x - 0.5) * speed;
                const yMove = (y - 0.5) * speed;

                shape.style.transform = `translate(${xMove}px, ${yMove}px)`;
            });
        });
    }
}

// ===== NAVIGATION ACTIVE STATE =====
function initNavActiveState() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPos = window.pageYOffset + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== ADD DYNAMIC SHADOWS TO SCROLLED CONTENT =====
function initScrollShadows() {
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.8)';
        } else {
            nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        }
    });
}

// ===== IMAGE LAZY LOADING ENHANCEMENT =====
function enhanceImageLoading() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '0';
            setTimeout(() => {
                this.style.transition = 'opacity 0.6s ease';
                this.style.opacity = '1';
            }, 100);
        });
    });
}

// ===== PERFORMANCE OPTIMIZATION: Throttle scroll events =====
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== INITIALIZE ALL FUNCTIONS =====
document.addEventListener('DOMContentLoaded', function() {
    // Core functionality
    initSmoothScroll();
    initScrollAnimations();
    initFormHandling();
    initCTAButtons();
    initNavActiveState();

    // Visual enhancements
    initParallax();
    initScrollShadows();

    // Conditional features (only on larger screens)
    if (window.innerWidth > 1024) {
        initCursorEffects();
    }

    // Image optimization
    enhanceImageLoading();

    // Add loaded class to body for CSS transitions
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// ===== HANDLE WINDOW RESIZE =====
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Re-calculate positions on resize
        initScrollAnimations();
    }, 250);
});

// ===== PERFORMANCE: Reduce animations when tab is not visible =====
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.body.style.animationPlayState = 'paused';
    } else {
        document.body.style.animationPlayState = 'running';
    }
});
