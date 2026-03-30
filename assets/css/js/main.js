/* ============================================================
   Main JavaScript - Theme Management, Navigation, UI Interactions
   ============================================================ */

class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'dark';
    this.initTheme();
    this.setupThemeToggle();
  }

  initTheme() {
    if (this.theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }

  setupThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => this.toggle());
      this.updateToggleIcon();
    }
  }

  toggle() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', this.theme);
    this.initTheme();
    this.updateToggleIcon();
  }

  updateToggleIcon() {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.innerHTML = this.theme === 'dark' ? 
        '<i class="fas fa-sun"></i>' : 
        '<i class="fas fa-moon"></i>';
    }
  }
}

class Navigation {
  constructor() {
    this.menu = document.querySelector('.nav-menu');
    this.toggle = document.querySelector('.menu-toggle');
    this.links = document.querySelectorAll('.nav-link');
    this.setupMobileMenu();
    this.setupActiveLink();
  }

  setupMobileMenu() {
    if (this.toggle) {
      this.toggle.addEventListener('click', () => this.toggleMenu());
    }
    this.links.forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });
  }

  toggleMenu() {
    if (this.menu) {
      this.menu.classList.toggle('active');
    }
  }

  closeMenu() {
    if (this.menu) {
      this.menu.classList.remove('active');
    }
  }

  setupActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    this.links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }
}

class LanguageSwitcher {
  constructor() {
    this.setupLanguageSwitcher();
  }

  setupLanguageSwitcher() {
    const langOptions = document.querySelectorAll('.lang-option');
    const langDropdown = document.querySelector('.lang-dropdown');
    const langButton = document.querySelector('.lang-button');

    if (langButton) {
      langButton.addEventListener('click', (e) => {
        e.stopPropagation();
        if (langDropdown) {
          langDropdown.classList.toggle('active');
        }
      });
    }

    langOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = option.getAttribute('data-lang');
        i18n.setLanguage(lang);
        
        langOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        
        if (langDropdown) {
          langDropdown.classList.remove('active');
        }
      });
    });

    document.addEventListener('click', () => {
      if (langDropdown) {
        langDropdown.classList.remove('active');
      }
    });
  }
}

class PortfolioFilter {
  constructor() {
    this.filters = document.querySelectorAll('.filter-btn');
    this.cards = document.querySelectorAll('.project-card');
    this.setupFilters();
  }

  setupFilters() {
    this.filters.forEach(filter => {
      filter.addEventListener('click', () => this.applyFilter(filter));
    });
  }

  applyFilter(filter) {
    const category = filter.getAttribute('data-filter');
    
    this.filters.forEach(f => f.classList.remove('active'));
    filter.classList.add('active');

    this.cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (category === 'all' || cardCategory === category) {
        card.style.display = 'block';
        card.classList.add('fade-in');
      } else {
        card.style.display = 'none';
      }
    });
  }
}

class FAQ {
  constructor() {
    this.items = document.querySelectorAll('.faq-item');
    this.setupFAQ();
  }

  setupFAQ() {
    this.items.forEach(item => {
      const header = item.querySelector('.faq-header');
      if (header) {
        header.addEventListener('click', () => this.toggleItem(item));
      }
    });
  }

  toggleItem(item) {
    const isActive = item.classList.contains('active');
    
    this.items.forEach(i => i.classList.remove('active'));
    
    if (!isActive) {
      item.classList.add('active');
    }
  }
}

class AnimateCounters {
  constructor() {
    this.setupCounterAnimation();
  }

  setupCounterAnimation() {
    const counterElements = document.querySelectorAll('.stat-number');
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    counterElements.forEach(element => observer.observe(element));
  }

  animateCounter(element) {
    const finalValue = parseInt(element.textContent);
    const duration = 2000;
    const steps = 60;
    const increment = finalValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= finalValue) {
        element.textContent = finalValue + '+';
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + '+';
      }
    }, duration / steps);
  }
}

class ContactForm {
  constructor() {
    this.form = document.getElementById('contact-form');
    this.setupForm();
  }

  setupForm() {
    if (this.form) {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const submitBtn = this.form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.textContent = i18n.translate('contact.form.sending');

    const formData = new FormData(this.form);
    
    fetch(this.form.getAttribute('action'), {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        this.form.reset();
        this.showMessage(i18n.translate('contact.form.success'), 'success');
      } else {
        this.showMessage(i18n.translate('contact.form.error'), 'error');
      }
    })
    .catch(error => {
      this.showMessage(i18n.translate('contact.form.error'), 'error');
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    });
  }

  showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
      padding: 12px 16px;
      border-radius: 8px;
      margin-bottom: 16px;
      background: ${type === 'success' ? '#00cec9' : '#ff6b9d'};
      color: white;
      font-weight: 500;
    `;
    
    this.form.insertBefore(messageDiv, this.form.firstChild);
    
    setTimeout(() => messageDiv.remove(), 4000);
  }
}

class ScrollAnimations {
  constructor() {
    this.setupScrollAnimations();
  }

  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.card, .project-card, .article-card').forEach(el => {
      observer.observe(el);
    });
  }
}

class ParticleBackground {
  constructor() {
    this.setupParticles();
  }

  setupParticles() {
    const container = document.querySelector('.particles');
    if (!container) return;

    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-duration: ${3 + Math.random() * 5}s;
        animation-delay: ${Math.random() * 2}s;
      `;
      container.appendChild(particle);
    }
  }
}

class GithubStats {
  constructor() {
    this.setupGithubStats();
  }

  setupGithubStats() {
    const statsContainer = document.getElementById('github-stats');
    if (!statsContainer) return;

    fetch('https://api.github.com/users/slimagb')
      .then(response => response.json())
      .then(data => {
        if (data.public_repos) {
          const repos = document.createElement('div');
          repos.className = 'github-stat';
          repos.innerHTML = `
            <strong>${data.public_repos}</strong>
            <span>Public Repositories</span>
          `;
          statsContainer.appendChild(repos);
        }
      })
      .catch(error => console.log('GitHub API unavailable'));
  }
}

class PageTransitions {
  constructor() {
    this.setupPageTransitions();
  }

  setupPageTransitions() {
    const links = document.querySelectorAll('a[href*=".html"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href.startsWith('http') && !href.includes('#')) {
          document.body.style.opacity = '0';
          setTimeout(() => {
            window.location.href = href;
          }, 300);
        }
      });
    });

    window.addEventListener('pageshow', () => {
      document.body.style.opacity = '1';
    });
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
  new Navigation();
  new LanguageSwitcher();
  new PortfolioFilter();
  new FAQ();
  new AnimateCounters();
  new ContactForm();
  new ScrollAnimations();
  new ParticleBackground();
  new GithubStats();
  new PageTransitions();
  
  // Update i18n elements after initialization
  if (i18n) {
    i18n.updateDOM();
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
