// portfolio.js

// GESTION DU FORMULAIRE DE CONTACT
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Récupération des valeurs
      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const message = form.querySelector('textarea').value.trim();

      if (!name || !email || !message) {
        messageBox.textContent = "Veuillez remplir tous les champs.";
        messageBox.style.color = "red";
        return;
      }

      // Simulation d'envoi (remplacer par appel API réelle si besoin)
      setTimeout(() => {
        messageBox.textContent = "Merci pour votre message. Je vous répondrai bientôt !";
        messageBox.style.color = "green";
        form.reset();
      }, 1000);
    });
  }
});

// INTERACTION BOUTONS (effets hover ou clic)
document.querySelectorAll(".btn, .btn-outline, .btn-projet").forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.05)";
    btn.style.transition = "0.3s ease";
  });

  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
  });
});

// SCROLL DOUX POUR LES ANCRES (si menu ou liens internes)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ROTATION D’IMAGES - SECTION BIENVENUE 
// Change automatiquement l’image d’accueil toutes les 4 secondes

const imagesBienvenue = [
  "img/Compétence.png",
  "img/ampoul.png",
  "img/Ecodesign.png"
];
let indexBienvenue = 0;
const heroImage = document.getElementById("heroImage");

if (heroImage) {
  setInterval(() => {
    indexBienvenue = (indexBienvenue + 1) % imagesBienvenue.length;
    heroImage.src = imagesBienvenue[indexBienvenue];
  }, 4000);
}

// ROTATION D’IMAGES - SECTION À PROPOS 
// Change automatiquement la photo de profil dans la section À propos toutes les 4 secondes

const imagesProfil = [
  "img/MethoH.jpg",
  "img/Metho.jpg",
  "img/Method.jpg"
];
let indexProfil = 0;
const profilePic = document.querySelector(".about-image img.hero");

if (profilePic) {
  setInterval(() => {
    indexProfil = (indexProfil + 1) % imagesProfil.length;
    profilePic.src = imagesProfil[indexProfil];
  }, 4000);
}
