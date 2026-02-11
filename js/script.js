//Header animation
document.addEventListener("scroll", styleHeader);

function styleHeader() {
    const header = document.querySelector('.header');
    if (window.pageYOffset > 40) {
        header.classList.add('fixed');
    }
    else {
        header.classList.remove('fixed');
    }
}

//-------Header mobile styling----------

//Hamburger script
document.querySelector('.hamburger').addEventListener('click', (e) => {
    const isActive = e.currentTarget.classList.contains('active');

    e.currentTarget.classList.toggle('active', !isActive);
    e.currentTarget.classList.toggle('inactive', isActive);
    e.currentTarget.setAttribute('aria-expanded', String(!isActive));

    document.querySelector('.header').classList.toggle('active');
});

//Dropdown menu 
const mobileMenu = document.querySelector('.mobile-nav')

//The Anonymous function:
//1. Closes all lists if you're not clicking anything, and just exits out if you're just clicking inside the list
//2. If you clicked a trigger, it stores that triggers dropdown menu and a boolean for the active class in variables
//3. Closes all lists, but if the list you clicked was not open when you clicked it, immediately opens the list
mobileMenu.addEventListener('click', (e) => {
    const trigger = e.target.closest('.dropdown-click');
    const isClickingInside = e.target.closest('.mobile-dropdown')

    if(!trigger && !isClickingInside ) {
        closeAllLists();
        return;
    } else if (!trigger && isClickingInside) {
        return;
    }

    const dropdown = trigger.closest('.mobile-dropdown-link').querySelector('.mobile-dropdown');
    const isOpen = dropdown.classList.contains('active');

    closeAllLists();
    if(!isOpen) {
        dropdown.classList.add('active');
    }
});

function closeAllLists() {
    const allDropdowns = mobileMenu.querySelectorAll('.mobile-dropdown');
    allDropdowns.forEach(menu => {
        menu.classList.remove('active');
    });
}

//Footer copyright year
document.addEventListener('DOMContentLoaded', () => {
    const text = new Date;
    document.querySelector('.copyright-year').innerHTML = text.getFullYear();
})