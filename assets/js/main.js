/* ==========================================================================
   SLIM AGBAHOUNGBA — Main JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ===== NAV SCROLL =====
    const nav = document.getElementById('navbar');
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', () => {
        if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
        if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    });

    // ===== ACTIVE NAV LINK (highlight current page) =====
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // ===== MOBILE MENU =====
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            const icon = menuToggle.querySelector('i');
            icon.className = navLinks.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
        });
        document.querySelectorAll('.nav-links a').forEach(a => {
            a.addEventListener('click', () => {
                navLinks.classList.remove('open');
                menuToggle.querySelector('i').className = 'fas fa-bars';
            });
        });
    }

    // ===== SCROLL REVEAL =====
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ===== SCROLL TO TOP =====
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== COUNTER ANIMATION =====
    const counters = document.querySelectorAll('[data-count]');
    if (counters.length) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.count);
                    const suffix = el.dataset.suffix || '';
                    let current = 0;
                    const increment = Math.ceil(target / 40);
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        el.textContent = current + suffix;
                    }, 30);
                    counterObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        counters.forEach(c => counterObserver.observe(c));
    }

    // ===== FAQ ACCORDION =====
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            const wasOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
            if (!wasOpen) item.classList.add('open');
        });
    });

    // ===== WORKS FILTER =====
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            document.querySelectorAll('.work-card').forEach(card => {
                const match = filter === 'all' || card.dataset.type === filter;
                card.style.display = match ? '' : 'none';
                if (match) {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    requestAnimationFrame(() => {
                        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    });
                }
            });
        });
    });

    // ===== MAGNETIC HOVER on buttons =====
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translateY(-3px) translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });

    // ===== TYPING EFFECT for hero =====
    const typingEl = document.getElementById('typingText');
    if (typingEl) {
        const texts = JSON.parse(typingEl.dataset.texts || '[]');
        let textIndex = 0, charIndex = 0, isDeleting = false;
        function type() {
            if (!texts.length) return;
            const current = texts[textIndex];
            typingEl.textContent = current.substring(0, charIndex);
            if (!isDeleting && charIndex === current.length) {
                setTimeout(() => { isDeleting = true; type(); }, 2000);
                return;
            }
            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
            charIndex += isDeleting ? -1 : 1;
            setTimeout(type, isDeleting ? 30 : 60);
        }
        setTimeout(type, 1000);
    }
});
