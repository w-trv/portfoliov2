document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. GESTION DU MENU MOBILE ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Ouvrir/Fermer le menu
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
    }

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if(hamburger) hamburger.classList.remove('toggle');
        });
    });

    // --- 2. ANIMATIONS AU SCROLL (Intersection Observer) ---
    
    // Options : l'animation se déclenche quand 15% de l'élément est visible
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    // Création de l'observateur
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si l'élément entre dans l'écran
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // On arrête d'observer une fois animé (joue une seule fois)
            }
        });
    }, observerOptions);

    // Liste des éléments à animer
    const elementsToAnimate = document.querySelectorAll(
        '.hero-text, .hero-img-container, .section-title, .skill-item, .project-card, .badge-card, .hobby-box, .contact-card'
    );

    // On ajoute la classe de base .reveal et on lance l'observation
    elementsToAnimate.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});
