function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const menuLinks = document.querySelector('.menu-links');
    menuIcon.classList.toggle('active');
    menuLinks.classList.toggle('active');
}
