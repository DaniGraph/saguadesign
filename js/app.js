// Portfolio Daniel Sagua | Interactivity

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');

    // ── Hamburger Menu ──────────────────────────────────────
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');

    function openMobileNav() {
        hamburgerBtn.classList.add('open');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        mobileNavOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileNav() {
        hamburgerBtn.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        mobileNavOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (hamburgerBtn && mobileNavOverlay) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.contains('open') ? closeMobileNav() : openMobileNav();
        });

        // Close when clicking a link inside the mobile nav
        mobileNavOverlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileNav);
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMobileNav();
        });
    }

    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Check if it's an internal link to current page
            if (href.startsWith('#') || (href.includes('index.html#') && window.location.pathname.includes('index.html'))) {
                const targetId = href.split('#')[1];
                const target = document.getElementById(targetId);
                
                if (target) {
                    e.preventDefault();
                    // Header height offset (reduced to 60px to stop further down)
                    const offset = 60;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = target.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Global Liquid Background Effect
    let liquidBg = document.getElementById('liquid-bg');
    if (!liquidBg) {
        // Auto-inject to pages that don't have it (Portfolio, Projects)
        liquidBg = document.createElement('div');
        liquidBg.id = 'liquid-bg';
        liquidBg.className = 'hero-liquid-bg';
        document.body.prepend(liquidBg); // Add behind everything
    } else {
        // Enforce moving it to body level for fixed positioning to work perfectly
        document.body.prepend(liquidBg);
    }
    
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    let currentX = mouseX;
    let currentY = mouseY;

    document.addEventListener('mousemove', (e) => {
        // Fixed positioning uses clientX/Y
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Determine if mouse is over a hero section to make it larger
        const heroSection = document.getElementById('hero') || document.getElementById('portfolio-hero') || document.querySelector('.case-hero');
        let inHero = false;
        
        if (heroSection) {
            const rect = heroSection.getBoundingClientRect();
            if (e.clientX >= rect.left && e.clientX <= rect.right && 
                e.clientY >= rect.top && e.clientY <= rect.bottom) {
                inHero = true;
            }
        }
        
        if (inHero) {
            liquidBg.classList.add('large');
        } else {
            liquidBg.classList.remove('large');
        }

        // Dynamically detect proximity to any text element
        const textElements = document.querySelectorAll('h1, h2, h3, h4, p, a, span, button');
        let isNearText = false;

        for (let i = 0; i < textElements.length; i++) {
            const rect = textElements[i].getBoundingClientRect();
            // Check if cursor is within 100px radius of the text's bounding box
            if (mouseX >= rect.left - 100 && mouseX <= rect.right + 100 &&
                mouseY >= rect.top - 100 && mouseY <= rect.bottom + 100) {
                isNearText = true;
                break;
            }
        }

        if (isNearText) {
            liquidBg.classList.add('active-text');
        } else {
            liquidBg.classList.remove('active-text');
        }
    });

    function animateLiquid() {
        // Smooth trailing effect (Lerp)
        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;
        
        liquidBg.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
        requestAnimationFrame(animateLiquid);
    }
    
    animateLiquid();

    // Scroll Reveal Observer
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-item').forEach(el => {
        observer.observe(el);
    });
});

// Accordion Logic for Skills Section
window.toggleAccordion = function(element) {
    // Close other accordions
    const allAccordions = document.querySelectorAll('.skill-accordion');
    allAccordions.forEach(acc => {
        if (acc !== element && acc.classList.contains('active')) {
            acc.classList.remove('active');
            acc.querySelector('.accordion-content').style.maxHeight = null;
        }
    });

    // Toggle clicked accordion
    element.classList.toggle('active');
    const content = element.querySelector('.accordion-content');
    
    if (element.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
    } else {
        content.style.maxHeight = null;
    }
}

// Toast Notification Function
function showToast(message) {
    let toast = document.querySelector('.toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.innerHTML = `
            <div class="toast-icon">✓</div>
            <div class="toast-message"></div>
        `;
        document.body.appendChild(toast);
    }
    
    toast.querySelector('.toast-message').textContent = message;
    setTimeout(() => toast.classList.add('active'), 100);
    setTimeout(() => toast.classList.remove('active'), 4000);
}

// Global Form Interceptor
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            const btn = form.querySelector('button[type="submit"]');
            const originalHTML = btn.innerHTML;

            // If form has a real action URL (contact form → formsubmit.co), 
            // just show loading state and let the native submit happen
            if (form.action && form.action.includes('formsubmit.co')) {
                btn.innerHTML = '<span>Transmitiendo...</span>';
                btn.style.opacity = '0.7';
                btn.disabled = true;
                // Native submit proceeds (no preventDefault)
                return;
            }

            // For other forms: fake response with toast
            e.preventDefault();
            btn.innerHTML = '<span>Transmitiendo...</span>';
            btn.style.opacity = '0.7';
            btn.disabled = true;
            
            setTimeout(() => {
                showToast('Conexión establecida. Mensaje enviado con éxito.');
                form.reset();
                btn.innerHTML = originalHTML;
                btn.style.opacity = '1';
                btn.disabled = false;
            }, 1500);
        });
    });
});


// Universal Spotlight Effect for highlighted text
document.addEventListener('DOMContentLoaded', () => {
    const spotlightElements = document.querySelectorAll('.spotlight-text');
    
    if (spotlightElements.length > 0) {
        window.addEventListener('mousemove', (e) => {
            spotlightElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                el.style.setProperty('--mouse-x', `${x}px`);
                el.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    }
});


// Portfolio Filter Logic
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card, .showcase-item, .showcase-wide-item');

    if (filterButtons.length > 0) {
        // Function to apply filter
        const applyFilter = (filter) => {
            // Update active button
            filterButtons.forEach(btn => {
                if (btn.getAttribute('data-filter') === filter) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });

            // Filter cards
            portfolioCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.classList.add('active'); // Ensure reveal observer triggers
                    }, 10);
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('active');
                }
            });
        };

        // Handle button clicks
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                applyFilter(filter);
            });
        });

        // Check for URL parameters on load
        const urlParams = new URLSearchParams(window.location.search);
        const filterParam = urlParams.get('filter');

        if (filterParam) {
            // Normalize parameter if needed (branding, social-media, web-design, diagramacion)
            applyFilter(filterParam);
        }
    }
});
