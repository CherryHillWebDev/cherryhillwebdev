const header = document.querySelector('.header');

document.addEventListener("scroll", styleHeader);

function styleHeader() {
    if (window.pageYOffset > 40) {
        header.classList.add('fixed');
    }
    else {
        header.classList.remove('fixed');
    }
}