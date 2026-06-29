/* ========================================
   VERS EN LUMIÈRE - Scripts Globaux
   ======================================== */

// Toggle navigation mobile
function toggleNav() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Fermer le menu mobile en cliquant sur un lien
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navLinksContainer = document.getElementById('navLinks');
            if (navLinksContainer) {
                navLinksContainer.classList.remove('active');
            }
        });
    });
});

// Animation au scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observer les éléments avec la classe .animate-on-scroll
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Effet de parallaxe subtil sur les éléments
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Animation du curseur personnalisé (optionnel)
function initCustomCursor() {
    // Désactivé par défaut pour ne pas interférer avec l'expérience utilisateur
    // Peut être activé en ajoutant la classe .custom-cursor au body
    if (document.body.classList.contains('custom-cursor')) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor-dot';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid rgba(255, 214, 231, 0.5);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            mix-blend-mode: difference;
        `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });

        document.addEventListener('mousedown', () => {
            cursor.style.transform = 'scale(0.8)';
        });

        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'scale(1)';
        });
    }
}

// Effet de vague sur les boutons
function initButtonWave() {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.setProperty('--mouse-x', `${x}px`);
            this.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// Animation de compteur
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * easeProgress);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// Affichage des messages d'erreur à l'utilisateur
function showErrorMessage(message) {
    const error = document.createElement('div');
    error.style.cssText = `
        position: fixed; top: 20px; right: 20px; background: rgba(255, 69, 69, 0.9);
        color: white; padding: 1rem 2rem; border-radius: 50px; z-index: 1000;
        animation: slideIn 0.5s ease-out;
    `;
    error.textContent = '⚠️ ' + message;
    document.body.appendChild(error);

    setTimeout(() => error.remove(), 4000);
}

// Sauvegarde dans localStorage (utilisée par les pages)
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (e) {
        showErrorMessage('Erreur de sauvegarde des données');
        return false;
    }
}

// Chargement depuis localStorage
function loadFromLocalStorage(key, defaultValue = null) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
        showErrorMessage('Erreur de chargement des données');
        return defaultValue;
    }
}

// Fonction utilitaire : debounce
function debounce(func, wait) {
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

// Fonction utilitaire : throttle
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Détection de la préférence de mouvement réduit
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Initialisation globale
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser les animations si l'utilisateur n'a pas de préférence de mouvement réduit
    if (!prefersReducedMotion()) {
        initScrollAnimations();
        initParallax();
        initButtonWave();
    }
    
    // Initialiser le curseur personnalisé (désactivé par défaut)
    // initCustomCursor();
    
    // Ajouter la classe loaded au body pour les animations d'entrée
    document.body.classList.add('loaded');
    
    // Gestion du scroll de la navbar
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', throttle(() => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(26, 11, 46, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(26, 11, 46, 0.8)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    }, 100));
});

// Gestion des erreurs globales
window.addEventListener('error', function(e) {
    console.error('Erreur globale:', e.error,);
    showErrorMessage('Une erreur s\'est produite. Veuillez rafraîchir la page.');
});

// Gestion des rejets de promesses non traités
window.addEventListener('unhandledrejection', function(e) {
    console.error('prommesse rejetee', e.reason);
    showErrorMessage('Une erreur s\'est produite. Veuillez rafraîchir la page.');
});

