/*ecran cgmt*/
document.addEventListener('DOMContentLoaded', function() {
  if (sessionStorage.getItem('loaderPlayed')) { /*verifier si le nav est deja passe par la page*/
    document.getElementById('loader').style.display = 'none'; /*si oui, on affiche direct le cv*/
    document.querySelector('.wrap').style.display = 'block'; /*et on saute l'anim*/
    return;
  }

  const text = "ELBAZ Sofiane";  /*txt ecran ch*/
  const typewriter = document.getElementById('typewriter');  /*pou que le texte s'crit solo*/
  let i = 0; 

  function type() {  /*une lettre a la fois*/
    if (i < text.length) {
      typewriter.textContent += text.charAt(i++);
      setTimeout(type, 120);  /*si tous le texte n'est pas encore crit, on rappelle la fonction et 120 c le tmp entre 2lettre*/
    } else {
      typewriter.style.borderRight = "none"; /*quand le texte est fini, on enlve le curseur*/
      typewriter.style.transform = "scale(1.1)"; /*agrandir le texte pr l'effet clique*/
      setTimeout(() => {
        typewriter.style.transform = "scale(1)"; /*remettre a la taille normale*/
        setTimeout(() => { /*ptit delai*/
          document.getElementById('loader').style.display = 'none'; /*enlever l'anim*/
          document.querySelector('.wrap').style.display = 'block';  /*afficher le cv*/
          sessionStorage.setItem('loaderPlayed', 'true'); /*mettre a jour la session pr pas rejouer l'anim*/
        }, 400);
      }, 120); 
    } 
  }
  type(); 
});


/* Pour le changement de couleur */



(function() { 
  const toggle = document.getElementById('theme-toggle');  /*defini le bouton*/
  if (!toggle) return; /*si pas btn r faire*/

  const storageKey = 'preferredTheme';  /*pr save le theme a la fermeture*/

  function applyTheme(theme) { /*mettre le theme*/
    document.body.classList.toggle('dark-theme', theme === 'dark'); 
    const icon = toggle.querySelector('.icon');
    if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';  /*changer l'icone*/
  }

  const saved = localStorage.getItem(storageKey);  /*recup le theme si il existe*/ 
  applyTheme(saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));  /*sinn celui du sys*/

  toggle.addEventListener('click', () => { /*quand on clique btn*/
    const newTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark'; /*inverser le theme*/
    applyTheme(newTheme); 
    localStorage.setItem(storageKey, newTheme); /*save le theme*/
  });
})();


/*traduire*/

const translations = {  /*tous les txt en fr et en*/
  en: {
    page_title: "Sofiane ELBAZ — CV", /* le bleu c pr l'id et apres c les txt*/
    name: "ELBAZ Sofiane",
    subtitle: "Student · Looking for an apprenticeship for BTS SIO",
    about_title: "About me",
    about_text: "Currently looking for an apprenticeship to complete a BTS SIO. I am motivated and ready to gain professional experience.",
    see_more: "Read more",
    see_less: "Show less",
    experiences_title: "Experiences",
    exp1_title: "IT Technician — IZK Conseils",
    exp1_date: "06/2025 − 08/2025",
    exp1_desc: "Assembly of computer equipment, workstation installation, maintenance, troubleshooting and user support.",
    exp2_title: "Delivery Driver — Burddy",
    exp2_date: "05/2025 − Present",
    exp2_desc: "Deliveries/pickups, van loading, customer relations and package management, time management, route planning, order preparation.",
    exp3_title: "Versatile Employee — QUOTA",
    exp3_date: "10/2024 − 05/2025",
    exp3_desc: "Order taking (phone/in-person), delivery, cooking, dishwashing, front-of-house service.",
    exp4_title: "Production Operator — ELIS",
    exp4_date: "07/2024 − 09/2024",
    exp4_desc: "Receiving and sorting items, quality control, machine operation, packaging, quality control.",
    formations_title: "Education",
    form1_title: "BTS SIO",
    form1_date: "2025/2027 - Courbevoie (Planned)",
    form2_title: "BTS CIEL, Electronics & Networks",
    form2_date: "2024/2025 - Argenteuil (1st year only)",
    form3_title: "STMG Baccalaureate, Management-Finance",
    form3_date: "06/2024 - Colombes (Obtained)",
    objectifs_title: "Goals",
    objectif_short: "Short term: Find an apprenticeship to complete a BTS SIO and learn in a company.",
    objectif_long: "Long term: Continue studies with a Bachelor's then a Master's degree and then join the workforce.",
    competences_title: "Skills",
    skill_sys: "Systems",
    skill_install: "Hardware installation",
    skill_maintenance: "Maintenance",
    skill_support: "User support",
    logiciels_title: "Software / Tools",
    atouts_title: "Strengths",
    atout1: "Friendly",
    atout2: "Motivated",
    atout3: "Calm",
    atout4: "Organized",
    atout5: "Team player",
    atout6: "Autonomous",
    atout7: "Curious",
    atout8: "Punctual",
    atout9: "Versatile",
    langues_title: "Languages",
    lang1: "English",
    lang2: "Spanish",
    lang3: "Arabic",
    contact_title: "Contact",
    email_label: "📧Email:",
    phone_label: "📞Phone:",
    download_cv: "🔗 Download my CV",
    footer: "©2025 Sofiane ELBAZ - All rights reserved.",
    proj1_title: "Online CV Website - HTML/CSS/JS - Personal Project",
    proj1_desc: "Development of a responsive online CV with HTML, CSS, and JavaScript (dark mode + multilingual).",
    proj2_title: "Movie API website - HTML/CSS/JS - Personal project",
    proj2_desc: "Creation of a website that uses an API to automatically collect information about a movie.",
    proj4_title: "Discord API Movie BOT - PYTHON - Personal project",
    proj4_desc: "I created a Discord bot in Python that uses an API to provide information about movies.",
    proj5_title: "Blackjack game - C - School project",
    proj5_desc: "I designed a Blackjack game in C, integrating features such as bet management, dice distribution, and game rules. ",
    proj3_title: "Order-taking application - PYTHON - Personal project",
    proj3_desc: "Development of a Python application for taking orders in a restaurant.",
    btn_details: "🔍 Details",
    btn_visit: "🌍 Visit",
    footer2: "Website created by myself."
  }, 
  fr: {
    page_title: "Sofiane ELBAZ — CV",
    name: "ELBAZ Sofiane",
    subtitle: "Étudiant · En recherche d'alternance pour BTS SIO",
    about_title: "À propos de moi",
    about_text: "Actuellement à la recherche d'une alternance pour effectuer un BTS SIO. Je suis motivé et prêt à acquérir de l'expérience professionnelle.",
    see_more: "En savoir plus",
    see_less: "Voir moins",
    experiences_title: "Expériences",
    exp1_title: "Technicien informatique — IZK Conseils",
    exp1_date: "06/2025 − 08/2025",
    exp1_desc: "Montage d'équipements informatiques, installation de postes, maintenance, dépannage et support utilisateur.",
    exp2_title: "Chauffeur livreur VL — Burddy",
    exp2_date: "05/2025 − Actuellement",
    exp2_desc: "Livraisons/récupération, chargement d'une camionnette, relation client et gestion des colis, gestion du temps, organisation de tournées, préparation de commandes.",
    exp3_title: "Employé polyvalent — QUOTA",
    exp3_date: "10/2024 − 05/2025",
    exp3_desc: "Prise de commandes (téléphone/présentiel), livraison, cuisine, plonge, service en salle.",
    exp4_title: "Opérateur de production — ELIS",
    exp4_date: "07/2024 − 09/2024",
    exp4_desc: "Réception et tri des articles, contrôle qualité, utilisation de machine, conditionnement, contrôle qualité.",
    formations_title: "Formations",
    form1_title: "BTS SIO",
    form1_date: "2025/2027 - Courbevoie (Envisagé)",
    form2_title: "BTS CIEL, Électronique et réseaux",
    form2_date: "2024/2025 - Argenteuil (1re année uniquement)",
    form3_title: "BAC STMG, Gestion-Finances",
    form3_date: "06/2024 - Colombes 92 (Obtenu)",
    objectifs_title: "Objectifs",
    objectif_short: "Court terme : Trouver une alternance afin de réaliser un BTS SIO et apprendre en entreprise.",
    objectif_long: "Long terme : Poursuivre mes études via une licence puis un master pour enfin intégrer le monde du travail.",
    competences_title: "Compétences",
    skill_sys: "Systèmes",
    skill_install: "Installation matériel",
    skill_maintenance: "Maintenance",
    skill_support: "Support utilisateur",
    logiciels_title: "Logiciel / Bureautique",
    atouts_title: "Atouts",
    atout1: "Souriant",
    atout2: "Motivé",
    atout3: "Calme",
    atout4: "Organisé",
    atout5: "Travail d'équipe",
    atout6: "Autonome",
    atout7: "Curieux",
    atout8: "Ponctuel",
    atout9: "Polyvalent",
    langues_title: "Langues",
    lang1: "Anglais",
    lang2: "Espagnol",
    lang3: "Arabe",
    contact_title: "Contact",
    email_label: "📧 Email :",
    phone_label: "📞 Téléphone :",
    download_cv: "🔗 Télécharger mon CV",
    footer: "©2025 Sofiane ELBAZ - Tous droits réservés.",
    proj1_title: "Site CV en ligne - HTML/CSS/JS - Projet personnel",
    proj1_desc: " Développement d’un CV en ligne responsive avec HTML, CSS et JavaScript (dark mode + multilingue).",
    proj2_title: "Site API Film - HTML/CSS/JS - Projet personnel",
    proj2_desc: "Création d’un site qui utilise une API pour récolter automatiquement des informations sur un film.",
    proj4_title: "BOT Discord API Film - PYTHON - Projet personnel",
    proj4_desc: "j'ai créé un bot Discord en Python qui utilise une API pour fournir des informations sur les films.",
    proj5_title: "Jeu de black jack - C - Projet scolaire",
    proj5_desc: "j'ai concu un jeu de Black Jack en C, intégrant des fonctionnalités telles que la gestion des mises, la distribution des dés, et les règles du jeu.",
    proj3_title: "Application de prise de commande - PYTHON - Projet personnel",
    proj3_desc: "Développement d’une application en Python pour effectuer une prise de commande dans un restaurant.",
    btn_details: "🔍 Détails",
    btn_visit: "🌍 Visiter",
    footer2: "Site réalisé par mes soins."
  }
};

/*langue btn et drp*/


let currentLang = 'fr'; /*langue pr defaut fr*/
const langToggle = document.getElementById('lang-toggle'); /*recup l btn*/

if (langToggle) { 
  langToggle.classList.add(currentLang); /*si ill existe on lui donne la class act*/
  langToggle.addEventListener('click', () => { /*quand clique on invsr*/
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    langToggle.classList.toggle('fr', currentLang === 'fr');
    langToggle.classList.toggle('en', currentLang === 'en');
    langToggle.title = currentLang === 'fr' ? 'Changer langue' : 'Change language'; 
    updateTexts();
  });
}

/*spé pour le lire plus*/


(function() {
  const link = document.getElementById("toggle-link"); /*recup le btn*/
  const moreText = document.getElementById("more-text"); /*recup le txt caché*/
  if (!link || !moreText) return; /*si pas btn r faire*/

  const fullTextMap = { /*txt complet en fr et en*/
    fr: " Après avoir effectué une première année en BTS CIEL, je me suis rendu compte que cette formation ne correspondait pas du tout à mes attentes. C’est pourquoi j’ai décidé de me réorienter. Suite à de nombreuses recherches et grâce aux conseils de certains amis ainsi que de mes professeurs, j’ai choisi de m’orienter vers un BTS SIO. En effet, je pense que ce BTS me conviendrait parfaitement et je suis prêt à m’y investir à 100 %.",
    en: " After completing my first year in BTS CIEL, I realized that this program did not match my expectations. That is why I decided to change paths. After much research and with advice from friends and teachers, I chose to pursue a BTS SIO. I believe this program suits me perfectly, and I am ready to commit myself fully."
  };

  let expanded = false; /*etat du txt (caché ou visible)*/

  function setLinkLabel() {
    link.textContent = expanded ? translations[currentLang].see_less : translations[currentLang].see_more; /*changer le txt du btn selon l'etat*/
  }
 
  link.addEventListener('click', (e) => {  /*qd click btn*/
    e.preventDefault(); 
    expanded = !expanded; /*inverser l'etat*/
    if (expanded) { 
      moreText.style.display = "inline"; /*afficher le txt*/
      moreText.textContent = fullTextMap[currentLang]; /*mettre le txt selon la langue*/
    } else {
      moreText.style.display = "none"; /*cacher le txt*/
    }
    setLinkLabel(); /*mettre a jour le txt du btn*/
  });

  window.updateReadMore = function(lang) { /*fonction pr mettre a jour le txt si changement de langue*/
    moreText.style.display = expanded ? 'inline' : 'none';  
    if (expanded) moreText.textContent = fullTextMap[lang];  
    setLinkLabel(); 
  };

  setLinkLabel(); 
})();

/* pr anim douce txt*/ 

function updateTexts() { 
  document.querySelectorAll('[data-i18n]').forEach(el => { 
    if (el.id === 'toggle-link' || el.id === 'more-text') return;
    const key = el.getAttribute('data-i18n');  /*recup la clef*/
    const value = translations[currentLang][key]; /*recup le txt selon la langue*/
    if (value !== undefined) { 
      el.classList.add('fade-out'); /*ajouter la class pr l'anim*/
      setTimeout(() => { /*delai pr l'anim*/
        el.textContent = value; /*mettre a jour le txt*/
        el.classList.remove('fade-out');  
        el.classList.add('fade-in');  
        setTimeout(() => el.classList.remove('fade-in'), 300); /*enlever la class apres l'anim*/
      }, 200);
    }
  });

  document.title = translations[currentLang].page_title; /*mettre a jour le titre de la page*/
  if (typeof window.updateReadMore === 'function') window.updateReadMore(currentLang);  /*mettre a jour le txt lire plus si besoin*/
  document.documentElement.lang = currentLang; /*mettre a jour l'attribut lang de la page*/ 
}


/*Initialisation */
document.addEventListener('DOMContentLoaded', () => { 
  if (langToggle) { /*si le btn existe*/
    langToggle.classList.add(currentLang); /*ajouter la class pr la langue courante*/
    langToggle.title = currentLang === 'fr' ? 'Changer langue' : 'Change language'; /*mettre a jour le title*/
  }
  if (typeof window.updateReadMore === 'function') window.updateReadMore(currentLang); 
  updateTexts();
});

