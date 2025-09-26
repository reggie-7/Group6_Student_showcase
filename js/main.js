console.log("JavaScript File is linked");

const navToggle = document.querySelector('#navToggle');
const navMenu = document.querySelector('#navMenu');


function toggleNavMenu() {
    console.log("toggle nav function called");
    navMenu.classList.toggle('running');
    navToggle.classList.toggle('running');
    console.log("Navigation menu toggled - running state:", navMenu.classList.contains('running'));
}

function closeNavMenu() {
    console.log("close nav function called");
    navMenu.classList.remove('running');
    navToggle.classList.remove('running');
    console.log("Navigation menu closed");
}

function closeNavMenuOnClickOutside(e) {
    console.log("click outside nav function called");
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        console.log("clicked outside of nav");
        closeNavMenu();
    } else {
        console.log("clicked inside nav, menu stays open");
    }
}

// event listeners
if (navToggle && navMenu) {
    console.log("nav elements found ");
    
    navToggle.addEventListener('click', toggleNavMenu);
    console.log("toggle button event listener added");

    const navLinks = navMenu.querySelectorAll('a');
    console.log("found", navLinks.length, "nav links");
    
    navLinks.forEach(link => {
        link.addEventListener('click', closeNavMenu);
    });
    console.log("nav link event listeners added");

    document.addEventListener('click', closeNavMenuOnClickOutside);
    console.log("document click event listener added");
    
} else {
    console.log("nav elements not found");
}