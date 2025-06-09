const toggle = document.getElementById('hamburger-bar-js');
const navLinks = document.getElementById('nav-links-js');

toggle.addEventListener('click', () => {
 navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
