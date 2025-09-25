const navToggle = document.querySelector('#navToggle');
const navMenu = document.querySelector('#navMenu');

// functions

//nav
function toggleNavMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

function closeNavMenu() {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
}

function closeNavMenuOnClickOutside(e) {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        closeNavMenu();
    }
}

// event listeners
if (navToggle && navMenu) {
    navToggle.addEventListener('click', toggleNavMenu);

    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeNavMenu);
    });

    document.addEventListener('click', closeNavMenuOnClickOutside);
}

