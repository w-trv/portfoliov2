document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. CONFIGURATION DU SWITCH LANGUE ---
    const langBtn = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('lang') || 'fr'; // Se souvient de la langue

    // Dictionnaire des traductions
    const translations = {
        fr: {
            nav_home: "Accueil",
            nav_skills: "Compétences",
            nav_projects: "Projets (SAE)",
            nav_hobbies: "Loisirs",
            nav_contact: "Me Contacter",
            
            hero_badge: "BUT Réseaux & Télécoms",
            hero_subtitle: "Étudiant BUT2 R&T parcours Cybersécurité <br><span class='highlight'>à l'IUT de La Rochelle</span>.",
            hero_desc: "Mon projet professionnel consiste à devenir Expert en Cyberdéfense. Je souhaite avoir un travail qui me permet de voyager au maximum (notamment aux États-Unis). Mes compétences en CTF me permettent d'avoir une certaine aisance technique.",
            btn_projects: "Voir mes SAE",
            btn_cv: "Mon CV",
            
            stat_ctf: "Niveau CTF",
            stat_english: "Anglais (Cambridge)",
            stat_ccna: "Validé (3 en cours)",
            
            skills_title: "Mes Compétences 🛠️",
            cat_network: "Réseaux & Système",
            cat_dev: "Développement",
            skill_cisco: "Réseaux Cisco (CCNA 2 validé)",
            skill_linux: "Linux / Serveurs (DNS, DHCP, Web)",
            skill_hacking: "Hacking (CTF)",
            skill_python: "Python (Data)",
            skill_sql: "SQL / Bases de données",
            level_advanced: "Avancé",
            level_intermediate: "Intermédiaire",
            
            certif_title: "Certifications Officielles",
            certif_subtitle: "Badges vérifiés par Cisco Networking Academy",
            status_verified: "Vérifié",
            status_pending: "En cours",
            btn_credly: "Voir mon profil complet sur Credly",
            
            projects_title: "Projets Universitaires (SAEs) 🎓",
            tag_personal: "Personnel",
            
            desc_ctf: "Je fais des défis pratiques de hacking que l'on appelle 'CTF'. Le but consiste à pirater une machine en partant d'une application web vulnérable fictive. Je suis actuellement niveau 13.",
            link_tryhackme: "Voir mon profil TryHackMe",
            
            title_sae204: "Projet intégratif",
            desc_sae204: "Projet d’équipe (3 personnes) pour concevoir une infrastructure réseau sécurisée pour la NBA (scénario fictif), en appliquant des configurations sur switches, routeurs et serveurs DNS/DHCP/Web.",
            
            title_sae203: "Solution informatique",
            desc_sae203: "Conception d’une base de données SQL sur les incidents en cybersécurité des 10 dernières années, avec un diagramme UML pour structurer les liens entre classes.",
            
            title_sae202: "Mesures physiques",
            desc_sae202: "Réalisation en binôme de mesures sur des systèmes de transmission pour évaluer la qualité des signaux, avec analyse et présentation des résultats via cartographie radio et hypsogramme.",
            
            title_sae201: "Réseaux locaux",
            desc_sae201: "Obtention de la certification CCNA1, axée sur les bases des réseaux locaux et la configuration des équipements actifs.",
            
            title_sae105: "Traiter des données",
            desc_sae105: "J’ai approfondi Python pour traiter des données (dataset : Top 500 des businessmen). Objectif : formater des données et réaliser des analyses complexes.",
            
            title_sae104: "Présence en ligne",
            desc_sae104: "J’ai découvert HTML et CSS pour créer un site de portfolio, hébergé sur les serveurs de l’IUT en respectant les normes W3C.",
            
            title_sae103: "Transmission",
            desc_sae103: "L’objectif était de réaliser des mesures pour caractériser les supports de transmission utilisés dans notre département d'IUT (cuivre, fibre, coaxial).",
            
            title_sae102: "Initiation Réseaux",
            desc_sae102: "Conception d'une petite infrastructure réseau pour le festival du Printemps de Bourges dans un contexte fictif. Application des configs de base aux switches.",
            
            title_sae101: "Hygiène informatique",
            desc_sae101: "Cette première SAE s'est présentée sous forme ludique : création de scénarios fictifs sur l'hygiène informatique pour faire deviner des méthodes d'attaques.",
            
            hobbies_title: "Autres Compétences 🎹",
            hobby_video_title: "Montage Vidéo",
            hobby_video_desc: "5 ans d'expérience YouTube. Montage pour influenceurs et réalisation d'un court-métrage sur la sécurité informatique.",
            link_video: "Voir la vidéo",
            
            hobby_mao_desc: "Utilisation très régulière pour la création de prods (instrumentales) et le beatmaking. Maîtrise du workflow audio.",
            
            hobby_piano_title: "Piano",
            hobby_piano_desc: "Pratique régulière pour la créativité et la discipline.",
            
            hobby_social_title: "Relationnel",
            hobby_social_desc: "Je n'ai aucun mal à faire de nouvelles rencontres et à avoir un bon feeling avec les gens. J'aime le travail d'équipe.",
            
            contact_title: "Me Contacter 📞",
            contact_desc: "Étudiant motivé par les défis techniques, n'hésitez pas à me contacter pour échanger.",
            footer_text: "© 2026 William TROUVÉ — Portfolio Étudiant"
        },
        en: {
            nav_home: "Home",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_hobbies: "Hobbies",
            nav_contact: "Contact Me",
            
            hero_badge: "Networking & Telecoms Student",
            hero_subtitle: "2nd Year Student in Cybersecurity Track <br><span class='highlight'>at IUT La Rochelle</span>.",
            hero_desc: "My professional goal is to become a Cyberdefense Expert. I am looking for a job that allows me to travel as much as possible (especially in the US). My CTF skills provide me with strong technical fluency.",
            btn_projects: "View Projects",
            btn_cv: "My Resume",
            
            stat_ctf: "CTF Level",
            stat_english: "English (Cambridge)",
            stat_ccna: "Validated (3 pending)",
            
            skills_title: "My Skills 🛠️",
            cat_network: "Networks & Systems",
            cat_dev: "Development",
            skill_cisco: "Cisco Networks (CCNA 2 validated)",
            skill_linux: "Linux / Servers (DNS, DHCP, Web)",
            skill_hacking: "Hacking (CTF)",
            skill_python: "Python (Data)",
            skill_sql: "SQL / Databases",
            level_advanced: "Advanced",
            level_intermediate: "Intermediate",
            
            certif_title: "Official Certifications",
            certif_subtitle: "Badges verified by Cisco Networking Academy",
            status_verified: "Verified",
            status_pending: "In Progress",
            btn_credly: "View full Credly profile",
            
            projects_title: "University Projects (SAEs) 🎓",
            tag_personal: "Personal",
            
            desc_ctf: "I participate in practical hacking challenges called 'CTF'. The goal is to hack a machine starting from a fictional vulnerable web application. I am currently level 13.",
            link_tryhackme: "View my TryHackMe profile",
            
            title_sae204: "Integrative Project",
            desc_sae204: "Team project (3 people) to design a secure network infrastructure for the NBA (fictional scenario), applying configurations on switches, routers, and DNS/DHCP/Web servers.",
            
            title_sae203: "IT Solution",
            desc_sae203: "Design of a SQL database on cybersecurity incidents from the last 10 years, along with a UML diagram to structure the relationships between classes.",
            
            title_sae202: "Physical Measurements",
            desc_sae202: "Measurements performed in pairs on transmission systems to evaluate signal quality, including analysis and presentation of results via radio mapping and hypsogram.",
            
            title_sae201: "Local Networks",
            desc_sae201: "Preparation and validation of CCNA1 certification, focusing on local network basics and active equipment configuration.",
            
            title_sae105: "Data Processing",
            desc_sae105: "Deepened my Python skills to process data (dataset: Top 500 businessmen). Objective: format data and perform complex analyses.",
            
            title_sae104: "Online Presence",
            desc_sae104: "Discovered HTML and CSS to create a portfolio website, hosted on the university servers while respecting W3C standards.",
            
            title_sae103: "Transmission",
            desc_sae103: "The objective was to perform measurements to characterize the transmission media used in our department (copper, fiber, coaxial).",
            
            title_sae102: "Network Basics",
            desc_sae102: "Design of a small network infrastructure for the Printemps de Bourges festival in a fictional context. Applying basic configurations to switches.",
            
            title_sae101: "IT Hygiene",
            desc_sae101: "This first SAE was presented in a playful form: creating fictional scenarios regarding IT hygiene to help others identify attack methods.",
            
            hobbies_title: "Other Skills 🎹",
            hobby_video_title: "Video Editing",
            hobby_video_desc: "5 years of YouTube experience. Editing for influencers and directing a short film on computer security.",
            link_video: "Watch the video",
            
            hobby_mao_desc: "Regular use for creating instrumentals (beatmaking). Mastery of audio parameters for sound compatibility.",
            
            hobby_piano_title: "Piano",
            hobby_piano_desc: "Regular practice for creativity and discipline.",
            
            hobby_social_title: "Social Skills",
            hobby_social_desc: "I have no trouble meeting new people and having a good feeling with them. I enjoy teamwork.",
            
            contact_title: "Contact Me 📞",
            contact_desc: "Motivated student ready for technical challenges, feel free to contact me.",
            footer_text: "© 2026 William TROUVÉ — Student Portfolio"
        }
    };

    function updateLanguage(lang) {
        // Mettre à jour tous les éléments avec l'attribut data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                // Utiliser innerHTML pour garder les balises comme <br> ou <span>
                el.innerHTML = translations[lang][key];
            }
        });

        // Mettre à jour le bouton
        if (langBtn) {
            langBtn.innerHTML = lang === 'fr' ? '🇺🇸 EN' : '🇫🇷 FR';
        }
        
        localStorage.setItem('lang', lang);
        currentLang = lang;
    }

    // Initialiser la langue
    updateLanguage(currentLang);

    // Event Listener sur le bouton
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = currentLang === 'fr' ? 'en' : 'fr';
            updateLanguage(newLang);
        });
    }

    // --- 2. GESTION DU MENU MOBILE (CODE EXISTANT) ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if(hamburger) hamburger.classList.remove('toggle');
        });
    });

    // --- 3. ANIMATIONS SCROLL (CODE EXISTANT) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll(
        '.hero-text, .hero-img-container, .section-title, .skill-item, .project-card, .badge-card, .hobby-box, .contact-card'
    );

    elementsToAnimate.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});
