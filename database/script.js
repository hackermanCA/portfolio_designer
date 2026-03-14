// Sélection des éléments
            const menuBurger = document.getElementById('menuBurger');
            const menu = document.getElementById('menu');

            // Affichage ou masquage du menu au clic
            menuBurger.addEventListener('click', () => {
                menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
            });

            // Cacher le menu si on clique en dehors
            document.addEventListener('click', (event) => {
                if (!menu.contains(event.target) && !menuBurger.contains(event.target)) {
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