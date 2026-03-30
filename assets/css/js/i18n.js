/* ============================================================
   i18n - Internationalization System (EN, FR, ES)
   ============================================================ */

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.publications': 'Publications',
    'nav.cv': 'CV',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',

    'hero.title': 'Slim Zéférino S.',
    'hero.subtitle': 'Biostatisticien Clinique — Data Scientist — PhD Candidate',
    'hero.tagline': 'Integrating Statistical Rigor with Machine Learning Innovation for Healthcare & Development Data',
    'hero.cta.portfolio': 'View Portfolio',
    'hero.cta.contact': 'Get in Touch',
    'hero.stat1': '4+',
    'hero.stat1.label': 'Years Experience',
    'hero.stat2': '3+',
    'hero.stat2.label': 'Publications',
    'hero.stat3': '6+',
    'hero.stat3.label': 'Certifications',
    'hero.stat4': '10+',
    'hero.stat4.label': 'Projects',

    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Research, Consulting & Engineering Projects',
    'portfolio.filter.all': 'All',
    'portfolio.filter.research': 'Research',
    'portfolio.filter.consulting': 'Consulting',
    'portfolio.filter.engineering': 'Engineering',
    'portfolio.filter.publications': 'Publications',

    'publications.title': 'Publications & Articles',
    'publications.subtitle': 'Peer-reviewed Research & Technical Articles',
    'publications.status.published': 'Published',
    'publications.status.inprogress': 'In Progress',
    'publications.status.workshop': 'Workshop',

    'cv.title': 'Curriculum Vitae',
    'cv.subtitle': 'Education & Professional Experience',
    'cv.education': 'Education',
    'cv.experience': 'Professional Experience',
    'cv.skills': 'Skills & Expertise',

    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Let\'s connect and explore collaboration opportunities',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'Error sending message. Please try again.',

    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Common questions about my work and collaboration',

    'footer.sitemap': 'Sitemap',
    'footer.connect': 'Connect',
    'footer.projects': 'Projects',
    'footer.articles': 'Articles',
    'footer.skills': 'Skills',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow',
    'footer.linkedin': 'LinkedIn',
    'footer.github': 'GitHub',
    'footer.scholar': 'Google Scholar',
    'footer.credits': 'Designed & Built by Slim Zéférino S. AGBAHOUNGBA | Data Science Portfolio',
    'footer.year': new Date().getFullYear(),

    'theme.dark': 'Dark',
    'theme.light': 'Light',
  },

  fr: {
    'nav.home': 'Accueil',
    'nav.portfolio': 'Portefeuille',
    'nav.publications': 'Publications',
    'nav.cv': 'CV',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',

    'hero.title': 'Slim Zéférino S.',
    'hero.subtitle': 'Biostatisticien Clinique — Data Scientist — Doctorant IA',
    'hero.tagline': 'Intégrer la rigueur statistique à l\'innovation en apprentissage automatique pour les données de santé et développement',
    'hero.cta.portfolio': 'Voir le portefeuille',
    'hero.cta.contact': 'Me contacter',
    'hero.stat1': '4+',
    'hero.stat1.label': 'Années d\'expérience',
    'hero.stat2': '3+',
    'hero.stat2.label': 'Publications',
    'hero.stat3': '6+',
    'hero.stat3.label': 'Certifications',
    'hero.stat4': '10+',
    'hero.stat4.label': 'Projets',

    'portfolio.title': 'Portefeuille',
    'portfolio.subtitle': 'Projets de Recherche, Consulting & Ingénierie',
    'portfolio.filter.all': 'Tous',
    'portfolio.filter.research': 'Recherche',
    'portfolio.filter.consulting': 'Consulting',
    'portfolio.filter.engineering': 'Ingénierie',
    'portfolio.filter.publications': 'Publications',

    'publications.title': 'Publications & Articles',
    'publications.subtitle': 'Recherches révisées par les pairs & Articles techniques',
    'publications.status.published': 'Publiée',
    'publications.status.inprogress': 'En cours',
    'publications.status.workshop': 'Atelier',

    'cv.title': 'Curriculum Vitae',
    'cv.subtitle': 'Éducation & Expérience Professionnelle',
    'cv.education': 'Éducation',
    'cv.experience': 'Expérience Professionnelle',
    'cv.skills': 'Compétences & Expertise',

    'contact.title': 'Me Contacter',
    'contact.subtitle': 'Connectons-nous et explorons les opportunités de collaboration',
    'contact.email': 'E-mail',
    'contact.location': 'Localisation',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.form.name': 'Votre Nom',
    'contact.form.email': 'Votre E-mail',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le message',
    'contact.form.sending': 'Envoi...',
    'contact.form.success': 'Message envoyé avec succès!',
    'contact.form.error': 'Erreur lors de l\'envoi. Veuillez réessayer.',

    'faq.title': 'Questions Fréquemment Posées',
    'faq.subtitle': 'Questions communes sur mon travail et la collaboration',

    'footer.sitemap': 'Plan du site',
    'footer.connect': 'Connecter',
    'footer.projects': 'Projets',
    'footer.articles': 'Articles',
    'footer.skills': 'Compétences',
    'footer.contact': 'Contact',
    'footer.follow': 'Me suivre',
    'footer.linkedin': 'LinkedIn',
    'footer.github': 'GitHub',
    'footer.scholar': 'Google Scholar',
    'footer.credits': 'Conçu & Construit par Slim Zéférino S. AGBAHOUNGBA | Portefeuille Data Science',
    'footer.year': new Date().getFullYear(),

    'theme.dark': 'Sombre',
    'theme.light': 'Clair',
  },

  es: {
    'nav.home': 'Inicio',
    'nav.portfolio': 'Portafolio',
    'nav.publications': 'Publicaciones',
    'nav.cv': 'CV',
    'nav.contact': 'Contacto',
    'nav.faq': 'Preguntas frecuentes',

    'hero.title': 'Slim Zéférino S.',
    'hero.subtitle': 'Bioestadístico Clínico — Científico de Datos — Candidato a Doctorado',
    'hero.tagline': 'Integración del rigor estadístico con la innovación en aprendizaje automático para datos de salud y desarrollo',
    'hero.cta.portfolio': 'Ver portafolio',
    'hero.cta.contact': 'Ponte en contacto',
    'hero.stat1': '4+',
    'hero.stat1.label': 'Años de experiencia',
    'hero.stat2': '3+',
    'hero.stat2.label': 'Publicaciones',
    'hero.stat3': '6+',
    'hero.stat3.label': 'Certificaciones',
    'hero.stat4': '10+',
    'hero.stat4.label': 'Proyectos',

    'portfolio.title': 'Portafolio',
    'portfolio.subtitle': 'Proyectos de Investigación, Consultoría e Ingeniería',
    'portfolio.filter.all': 'Todos',
    'portfolio.filter.research': 'Investigación',
    'portfolio.filter.consulting': 'Consultoría',
    'portfolio.filter.engineering': 'Ingeniería',
    'portfolio.filter.publications': 'Publicaciones',

    'publications.title': 'Publicaciones & Artículos',
    'publications.subtitle': 'Investigación revisada por pares & Artículos técnicos',
    'publications.status.published': 'Publicado',
    'publications.status.inprogress': 'En progreso',
    'publications.status.workshop': 'Taller',

    'cv.title': 'Currículum Vitae',
    'cv.subtitle': 'Educación & Experiencia Profesional',
    'cv.education': 'Educación',
    'cv.experience': 'Experiencia Profesional',
    'cv.skills': 'Habilidades & Experiencia',

    'contact.title': 'Ponte en Contacto',
    'contact.subtitle': 'Conectémonos y exploremos oportunidades de colaboración',
    'contact.email': 'Correo electrónico',
    'contact.location': 'Ubicación',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.form.name': 'Tu Nombre',
    'contact.form.email': 'Tu Correo Electrónico',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': '¡Mensaje enviado exitosamente!',
    'contact.form.error': 'Error al enviar el mensaje. Por favor, inténtelo de nuevo.',

    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Preguntas comunes sobre mi trabajo y colaboración',

    'footer.sitemap': 'Mapa del sitio',
    'footer.connect': 'Conectar',
    'footer.projects': 'Proyectos',
    'footer.articles': 'Artículos',
    'footer.skills': 'Habilidades',
    'footer.contact': 'Contacto',
    'footer.follow': 'Sígueme',
    'footer.linkedin': 'LinkedIn',
    'footer.github': 'GitHub',
    'footer.scholar': 'Google Scholar',
    'footer.credits': 'Diseñado y Construido por Slim Zéférino S. AGBAHOUNGBA | Portafolio de Ciencia de Datos',
    'footer.year': new Date().getFullYear(),

    'theme.dark': 'Oscuro',
    'theme.light': 'Claro',
  },
};

class I18n {
  constructor() {
    this.currentLang = localStorage.getItem('lang') || 'en';
    this.setLanguage(this.currentLang);
  }

  setLanguage(lang) {
    if (translations[lang]) {
      this.currentLang = lang;
      localStorage.setItem('lang', lang);
      this.updateDOM();
      document.documentElement.lang = lang;
    }
  }

  translate(key) {
    const keys = key.split('.');
    let value = translations[this.currentLang];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value || key;
  }

  updateDOM() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = this.translate(key);
      } else {
        el.textContent = this.translate(key);
      }
    });

    const attrElements = document.querySelectorAll('[data-i18n-attr]');
    attrElements.forEach(el => {
      const attrData = el.getAttribute('data-i18n-attr');
      const attrs = attrData.split(',');
      attrs.forEach(attr => {
        const [attrName, key] = attr.split(':');
        el.setAttribute(attrName.trim(), this.translate(key.trim()));
      });
    });
  }
}

// Initialize i18n globally
const i18n = new I18n();
