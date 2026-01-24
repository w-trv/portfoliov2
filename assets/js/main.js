document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Burger
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Fermer le menu au clic sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 2. Reveal on Scroll (Animation d'apparition)
    const observerOptions = {
        threshold: 0.15, // Déclenche quand 15% de l'élément est visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Ne joue qu'une fois
            }
        });
    }, observerOptions);

    // Ajoute la classe .reveal aux éléments à animer
    const elementsToReveal = document.querySelectorAll('.section-title, .project-card, .skill-item, .hero-text, .profile-blob');
    
    elementsToReveal.forEach(el => {
        el.classList.add('reveal'); // Classe CSS de base (cachée)
        observer.observe(el);
    });
});
