document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // 1. CURSOR PERSONALIZADO
    // =========================================
    const cursorDot  = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');

    if (cursorDot && cursorRing) {
        let mouseX = 0, mouseY = 0;
        let ringX  = 0, ringY  = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top  = mouseY + 'px';
        });

        function animateCursor() {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            cursorRing.style.left = ringX + 'px';
            cursorRing.style.top  = ringY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        const interactives = document.querySelectorAll('a, button, .project-card, .skill-category');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorRing.style.transform = 'translate(-50%, -50%) scale(1.8)';
                cursorRing.style.borderColor = 'rgba(0, 210, 255, 0.8)';
            });
            el.addEventListener('mouseleave', () => {
                cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorRing.style.borderColor = 'rgba(0, 210, 255, 0.5)';
            });
        });
    }

    // =========================================
    // 2. NAVBAR — scroll y menú móvil
    // =========================================
    const navbar     = document.getElementById('navbar');
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks   = document.getElementById('nav-links');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    });

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            menuToggle.classList.toggle('active', isOpen);
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });

        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }

    // =========================================
    // 3. ACTIVE NAV LINK on scroll
    // =========================================
    const sections   = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a.nav-link');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navAnchors.forEach(a => {
                    a.classList.toggle('active-link', a.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => sectionObserver.observe(s));

    // =========================================
    // 4. SKILL BARS ANIMATION
    // =========================================
    const skillFills = document.querySelectorAll('.skill-fill');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill  = entry.target;
                const width = fill.getAttribute('data-width');
                fill.style.width = width + '%';
                skillObserver.unobserve(fill);
            }
        });
    }, { threshold: 0.3 });

    skillFills.forEach(fill => skillObserver.observe(fill));

    // =========================================
    // 5. SCROLL REVEAL
    // =========================================
    const revealElements = document.querySelectorAll(
        '.about-card-digital, .project-card, .exp-item, .skill-category'
    );

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity   = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, i * 80);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.style.opacity    = '0';
        el.style.transform  = 'translateY(30px)';
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        revealObserver.observe(el);
    });

    // =========================================
    // 6. PARTICLES.JS
    // =========================================
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 55, density: { enable: true, value_area: 900 } },
                color: { value: '#00d2ff' },
                shape: { type: 'circle' },
                opacity: { value: 0.25, random: true, anim: { enable: true, speed: 0.8, opacity_min: 0.05, sync: false } },
                size: { value: 2.5, random: true },
                line_linked: { enable: true, distance: 140, color: '#00d2ff', opacity: 0.08, width: 1 },
                move: { enable: true, speed: 0.8, direction: 'none', random: true, out_mode: 'out' }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: false }, resize: true },
                modes: { grab: { distance: 160, line_linked: { opacity: 0.25 } } }
            },
            retina_detect: true
        });
    }

    // =========================================
    // 7. SMOOTH SCROLL
    // =========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

});