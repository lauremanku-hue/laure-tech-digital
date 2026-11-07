// =====================================================================
//  CONTENU DE LA PAGE – c'est le SEUL fichier à modifier pour la mettre à jour.
//  Sur GitHub : ouvrez ce fichier, cliquez sur l'icône crayon, modifiez,
//  puis « Commit changes ». Une à deux minutes plus tard, le bouton
//  « Actualiser » de la page affiche les changements.
//  Ne touchez pas au mot « var » au début de chaque bloc.
// =====================================================================

var SITE = {
  nom: "Laure_Tech digital",
  slogan: "Tech Innovation Hub",
  titre: "Sites web, applications et identité visuelle pour votre activité",
  accroche: "Laure_Tech digital conçoit des solutions numériques sur mesure pour les entreprises et les particuliers au Cameroun.",
  // Trois points forts affichés sous le titre (supprimez un bloc pour l'enlever)
  atouts: [
    { titre: "Devis gratuit", texte: "Pour les sites web et les applications." },
    { titre: "100 % sur mesure", texte: "Chaque solution est adaptée à votre activité." },
    { titre: "Support et formation", texte: "Un accompagnement pour bien prendre en main votre outil." }
  ],
  introServices: "Du site web au logo, choisissez la solution qui correspond à votre besoin.",
  contactTexte: "Pour un devis, une question ou un renseignement, écrivez-nous sur WhatsApp ou retrouvez-nous sur nos réseaux."
};

// Section « À propos ». Ajoutez votre photo plus tard : déposez-la dans le dossier
// « images » et écrivez son chemin dans « photo » (ex. "images/laure.jpg").
var APROPOS = {
  titre: "À propos",
  texte: [
    "Laure_Tech digital est le Tech Innovation Hub de Laure, développeuse full-stack au Cameroun.",
    "Nous transformons les idées des entreprises et des particuliers en sites web, applications et identités visuelles claires, rapides et faciles à utiliser."
  ],
  photo: "",
  etapesTitre: "Comment nous travaillons",
  etapes: [
    { titre: "Vous nous écrivez", texte: "Décrivez votre besoin sur WhatsApp, en quelques mots." },
    { titre: "Nous vous proposons", texte: "Une solution adaptée à votre activité, avec un devis." },
    { titre: "Nous réalisons et vous formons", texte: "Mise en ligne, puis accompagnement pour bien utiliser votre outil." }
  ]
};

// Laissez un champ vide ("") pour masquer le réseau correspondant sur la page.
var CONTACT = {
  // Numéro avec l'indicatif du pays (237), sans + ni espaces.
  whatsapp: "237659867487",
  // Message d'accueil déjà écrit dans la section Contact.
  messageWhatsapp: "Bonjour, je souhaite en savoir plus sur vos services.",

  // Facebook : lien COMPLET copié dans la barre d'adresse de votre page.
  facebook: "https://www.facebook.com/profile.php?id=61560969538617",

  // Instagram et TikTok : seulement le nom d'utilisateur, sans @
  instagram: "",
  tiktok: "",

  // Google : « googleAvis » ouvre le formulaire pour laisser un avis.
  // « googleProfil » : le lien de partage de votre fiche Google (Maps), pour afficher vos réalisations.
  googleAvis: "https://g.page/r/CYj2oFGq7zVwEBM/review",
  googleProfil: "https://share.google/vc2kCXpTGKDKmSlSw"
};

// Section « Avis clients » : invite les clients satisfaits à laisser leur avis
// (Google, WhatsApp) et peut afficher de vrais témoignages.
var AVIS = {
  titre: "Avis clients",
  texte: "Vous avez travaillé avec nous et vous êtes satisfait ? Laissez-nous votre avis : il aide d'autres clients à nous faire confiance.",
  // Message écrit d'avance quand le client choisit de donner son avis par WhatsApp.
  messageWhatsapp: "Bonjour, je souhaite donner mon avis sur vos services. Service : ... Mon avis : ...",
  // Témoignages affichés sur la page. N'ajoutez que de VRAIS avis, avec l'accord du client.
  // Pour en ajouter, retirez les « // » devant le bloc et remplacez les textes, puis copiez-le pour chaque avis.
  titreTemoignages: "Ils nous ont fait confiance",
  temoignages: [
    // { nom: "Prénom N.", service: "Site web", texte: "Écrivez ici l'avis du client." }
  ]
};

// Une entrée par service = une diapositive. Pour en ajouter, copiez un bloc { ... } et collez-le à la suite.
// « image »   : grande image LARGE et BASSE affichée dans la diapositive (format paysage, environ 2:1,
//               par exemple 1200 x 550 px). Vous pouvez y mettre une vraie photo.
//               Sans image, une illustration aux couleurs du site s'affiche.
// « affiche » : votre affiche complète (facultatif). Un clic sur l'image ou sur « Agrandir l'affiche »
//               l'ouvre en grand, pour lire nettement les écritures.
// « icone »   : illustration utilisée s'il n'y a pas d'image : "web", "app", "logo" ou "os".
// « bouton »  : texte du bouton WhatsApp du service.
var SERVICES = [
  {
    titre: "Sites web professionnels",
    description: "Vitrine, boutique en ligne ou application : un design moderne, adapté au mobile.",
    image: "images/vue-sites-web.jpg",
    icone: "web",
    affiche: "images/site-web-pro.jpg",
    bouton: "Devis gratuit"
  },
  {
    titre: "Applications et logiciels sur mesure",
    description: "Web, mobile (Android et iOS) et logiciels de gestion, avec support et formation.",
    image: "images/vue-applications.jpg",
    icone: "app",
    affiche: "images/applications-sur-mesure.jpg",
    bouton: "Devis gratuit"
  },
  {
    titre: "Logo et identité visuelle",
    description: "À partir de 5 000 FCFA : 3 propositions, modifiables jusqu'à votre satisfaction, livrées en 24 h.",
    image: "images/vue-logo.jpg",
    icone: "logo",
    affiche: "images/logo-identite-visuelle.jpg",
    bouton: "Créer mon logo"
  },
  {
    titre: "Installation de systèmes d'exploitation",
    description: "Installation simple ou en dual boot : deux systèmes sur le même ordinateur, au choix à chaque démarrage.",
    image: "",
    icone: "os",
    affiche: "",
    bouton: "Demander l'installation"
  }
];

// Défilement automatique des solutions
// auto : true pour défiler seul, false pour désactiver. secondes : temps passé sur chaque diapositive.
var DEFILEMENT = {
  auto: true,
  secondes: 4
};
