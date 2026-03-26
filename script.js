// Sélection des éléments
const menuBurger = document.getElementById('menuBurger');
const menu = document.getElementById('menu');

// Affichage ou masquage du menu au clic
if (menuBurger) {
  menuBurger.addEventListener('click', () => {
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
    }
  });
}

// Cacher le menu si on clique en dehors
document.addEventListener('click', (event) => {
  if (menu && menuBurger && !menu.contains(event.target) && !menuBurger.contains(event.target)) {
    menu.style.display = 'none';
  }
});

// Animation des barres de compétences
window.onload = () => {
  const bars = document.querySelectorAll('.progress');
  bars.forEach(bar => {
    let width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });
};

// Gestion de l'envoi du formulaire vers WhatsApp
function sendToWhatsApp() {
  // Récupération des valeurs du formulaire
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Vérification que tous les champs sont remplis
  if (!name || !email || !subject || !message) {
    alert('Veuillez remplir tous les champs.');
    return;
  }

  // Construction du message WhatsApp
  const whatsappMessage = `Nom: ${name}\nEmail: ${email}\nSujet: ${subject}\nMessage: ${message}`;

  // Numéro WhatsApp (sans + et espaces)
  const phoneNumber = '243997129549';

  // URL WhatsApp
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Redirection vers WhatsApp
  window.location.href = whatsappURL;
}
