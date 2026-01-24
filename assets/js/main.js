document.addEventListener('DOMContentLoaded', () => {
    
    // --- GESTION DE LA LANGUE ---
    const langBtn = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('lang') || 'fr'; 

    const translations = {
        fr: {
            nav_home: "Accueil",
            nav_skills: "Compétences",
            nav_projects: "Projets (SAE)",
            nav_hobbies: "Hobbies",
            nav_contact: "Me Contacter",
            
            hero_badge: "BUT Réseaux & Télécoms parcours Cybersécurité",
            hero_subtitle: "Étudiant BUT2 R&T parcours Cybersécurité <br><span class='highlight'>à l'IUT de La Rochelle</span>.",
            hero_desc: "Mon projet professionnel consiste à devenir Expert en Cyberdéfense. Je souhaite avoir un travail qui me permette de voyager. Mes compétences en CTF me donnent une certaine aisance technique.",
            btn_sae: "Voir mes SAE",
            btn_cv: "Mon CV",
            
            stat_ctf: "Niveau CTF",
            stat_eng: "Anglais (Cambridge)",
            stat_ccna: "Validé (3 en cours)",
            
            skills_title: "Mes Compétences 🛠️",
            cat_net: "Réseaux & Système",
            cat_dev: "Développement",
            skill_cisco: "Réseaux Cisco (CCNA 2 validé)",
            skill_linux: "Linux / Serveurs (DNS, DHCP, Web)",
            skill_hack: "Hacking (CTF)",
            skill_py: "Python (Data)",
            skill_sql: "SQL / Bases de données",
            lvl_adv: "Avancé",
            lvl_int: "Intermédiaire",
            
            cert_title: "Certifications Officielles",
            cert_sub: "Badges vérifiés par Cisco Networking Academy",
            stat_verif: "Vérifié",
            stat_pend: "En cours",
            btn_credly: "Voir mon profil complet sur Credly",
            
            proj_title: "Projets Universitaires (SAEs) 🎓",
            tag_perso: "Personnel",
            desc_ctf: "Je fais des défis pratiques de hacking que l'on appelle \"CTF\". Le but consiste à pirater une machine en partant d'une application web vulnérable fictive. Je suis actuellement niveau LEGEND et me situe à la 20k ème place (Top 2%).",
            link_thm: "Voir mon profil TryHackMe",
            
            // TITRES ET TAGS FRANÇAIS
            tag_204: "SAE 2.04", tit_204: "Projet intégratif", desc_204: "Projet d’équipe (3 personnes) pour concevoir une infrastructure réseau sécurisée pour la NBA (scénario fictif), en appliquant des configurations sur switches, routeurs et serveurs DNS/DHCP/Web.",
            tag_203: "SAE 2.03", tit_203: "Solution informatique", desc_203: "Conception d’une base de données SQL sur les incidents en cybersécurité des 10 dernières années, avec un diagramme UML pour structurer les liens entre classes.",
            tag_202: "SAE 2.02", tit_202: "Mesures physiques", desc_202: "Réalisation en binôme de mesures sur des systèmes de transmission pour évaluer la qualité des signaux, avec analyse et présentation des résultats via cartographie radio et hypsogramme.",
            tag_201: "SAE 2.01", tit_201: "Réseaux locaux", desc_201: "Obtention de la certification CCNA1, axée sur les bases des réseaux locaux et la configuration des équipements actifs.",
            tag_105: "SAE 1.05", tit_105: "Traiter des données", desc_105: "J’ai approfondi Python pour traiter des données (dataset : Top 500 des businessmen). Objectif : formater des données et réaliser des analyses complexes.",
            tag_104: "SAE 1.04", tit_104: "Présence en ligne", desc_104: "J’ai découvert HTML et CSS pour créer un site de portfolio, hébergé sur les serveurs de l’IUT en respectant les normes W3C.",
            tag_103: "SAE 1.03", tit_103: "Transmission", desc_103: "L’objectif était de réaliser des mesures pour caractériser les supports de transmission utilisés dans notre département d'IUT (cuivre, fibre, coaxial).",
            tag_102: "SAE 1.02", tit_102: "Initiation Réseaux", desc_102: "Conception d'une petite infrastructure réseau pour le festival du Printemps de Bourges dans un contexte fictif. Application des configs de base aux switches.",
            tag_101: "SAE 1.01", tit_101: "Hygiène informatique", desc_101: "Cette première SAE s'est présentée sous forme ludique : création de scénarios fictifs sur l'hygiène informatique pour faire deviner des méthodes d'attaques.",
            
            // TAGS
            tag_infra: "Infra", tag_sig: "Signaux", tag_mes: "Mesures", tag_cab: "Câblage", tag_phys: "Physique", tag_sens: "Sensibilisation", tag_scen: "Scénarios",

            hobby_title: "Hobbies",
            hob_vid_t: "Montage Vidéo",
            hob_vid_d: "5 ans d'expérience YouTube. Montage pour influenceurs et réalisation d'un court-métrage sur la sécurité informatique.",
            link_vid: "Voir la vidéo",
            
            hob_mao_d: "Utilisation très régulière pour la création de prods (instrumentales) et le beatmaking. Maîtrise des paramètres audios pour une comptabilité sonore sur tous les appareils.",
            
            hob_piano_t: "Piano",
            hob_piano_d: "Pratique régulière pour la créativité et la discipline.",
            
            hob_soc_t: "Relationnel",
            hob_soc_d: "Je n'ai aucun mal à faire de nouvelles rencontres et à avoir un bon feeling avec les gens. J'aime le travail d'équipe.",
            
            contact_t: "Me Contacter 📞",
            contact_d: "Étudiant motivé par les défis techniques, n'hésitez pas à me contacter pour échanger.",
            footer: "© 2026 William TROUVÉ — Portfolio Étudiant"
        },
        en: {
            nav_home: "Home",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_hobbies: "Hobbies",
            nav_contact: "Contact Me",
            
            // CORRECTIONS ACADÉMIQUES ICI
            hero_badge: "Bachelor's Degree in Networks & Cybersecurity",
            hero_subtitle: "2nd Year Undergraduate Student <br><span class='highlight'>University Institute of Technology (IUT)</span>.",
            hero_desc: "My professional goal is to become a Cyberdefense Expert. I want a job that allows me to travel internationally. My CTF skills give me a strong technical adaptability.",
            btn_sae: "View Projects",
            btn_cv: "My Resume",
            
            stat_ctf: "CTF Level",
            stat_eng: "English (Cambridge)",
            stat_ccna: "Validated (3 pending)",
            
            skills_title: "My Skills 🛠️",
            cat_net: "Networks & Systems",
            cat_dev: "Development",
            skill_cisco: "Cisco Networks (CCNA 2 validated)",
            skill_linux: "Linux / Servers (DNS, DHCP, Web)",
            skill_hack: "Hacking (CTF)",
            skill_py: "Python (Data)",
            skill_sql: "SQL / Databases",
            lvl_adv: "Advanced",
            lvl_int: "Intermediate",
            
            cert_title: "Official Certifications",
            cert_sub: "Badges verified by Cisco Networking Academy",
            stat_verif: "Verified",
            stat_pend: "In Progress",
            btn_credly: "View full Credly profile",
            
            // CHANGEMENT DE "SAE" en "ACADEMIC PROJECT"
            proj_title: "Academic Projects 🎓",
            tag_perso: "Personal",
            desc_ctf: "I participate in practical hacking challenges called 'CTF'. The goal is to hack a machine starting from a fictional vulnerable web application. I am currently LEGEND level and ranked around 20k (Top 2%).",
            link_thm: "View my TryHackMe profile",
            
            tag_204: "Project #4", tit_204: "Integrative Project", desc_204: "Team project (3 people) to design a secure network infrastructure for the NBA (fictional scenario), applying configurations on switches, routers, and DNS/DHCP/Web servers.",
            tag_203: "Project #3", tit_203: "IT Solution", desc_203: "Design of a SQL database on cybersecurity incidents from the last 10 years, along with a UML diagram to structure the relationships between classes.",
            tag_202: "Project #2", tit_202: "Physical Measurements", desc_202: "Measurements performed in pairs on transmission systems to evaluate signal quality, including analysis and presentation of results via radio mapping and hypsogram.",
            tag_201: "Project #1", tit_201: "Local Networks", desc_201: "Preparation and validation of CCNA1 certification, focusing on local network basics and active equipment configuration.",
            
            tag_105: "Data", tit_105: "Data Processing", desc_105: "Deepened my Python skills to process data (dataset: Top 500 businessmen). Objective: format data and perform complex analyses.",
            tag_104: "Web", tit_104: "Online Presence", desc_104: "Discovered HTML and CSS to create a portfolio website, hosted on the university servers while respecting W3C standards.",
            tag_103: "Telecom", tit_103: "Transmission", desc_103: "The objective was to perform measurements to characterize the transmission media used in our department (copper, fiber, coaxial).",
            tag_102: "Network", tit_102: "Network Basics", desc_102: "Design of a small network infrastructure for the Printemps de Bourges festival in a fictional context. Applying basic configurations to switches.",
            tag_101: "Security", tit_101: "IT Hygiene", desc_101: "This first project was presented in a playful form: creating fictional scenarios regarding IT hygiene to help others identify attack methods.",
            
            // TRADUCTION DES TAGS
            tag_infra: "Infra", tag_sig: "Signals", tag_mes: "Measurements", tag_cab: "Cabling", tag_phys: "Physics", tag_sens: "Awareness", tag_scen: "Scenarios",

            hobby_title: "Hobbies",
            hob_vid_t: "Video Editing",
            hob_vid_d: "5 years of YouTube experience. Editing for influencers and directing a short film on computer security.",
            link_vid: "Watch the video",
            
            hob_mao_d: "Regular use for creating instrumentals (beats) and beatmaking. Mastery of audio settings for sound compatibility across all devices.",
            
            hob_piano_t: "Piano",
            hob_piano_d: "Regular practice for creativity and discipline.",
            
            // REFORMULATION PROFESSIONNELLE
            hob_soc_t: "Interpersonal Skills",
            hob_soc_d: "I easily connect with new people and enjoy building positive professional relationships. Teamwork is where I thrive.",
            
            contact_t: "Contact Me 📞",
            contact_d: "Motivated student ready for technical challenges, feel free to contact me.",
            footer: "© 2026 William TROUVÉ — Student Portfolio"
        }
    };

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        if (langBtn) {
            langBtn.innerHTML = lang === 'fr' ? '🇺🇸 EN' : '🇫🇷 FR';
        }
        
        localStorage.setItem('lang', lang);
        currentLang = lang;
    }

    updateLanguage(currentLang);

    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = currentLang === 'fr' ? 'en' : 'fr';
            updateLanguage(newLang);
        });
    }

    // --- CODE EXISTANT (Menu & Animations) ---
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

    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
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
