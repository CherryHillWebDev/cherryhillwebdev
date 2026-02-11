function animateElements(){
    animateFlowers();
    animateBauhaus();
}

function animateFlowers() {
    const flowersToAnimate = document.querySelectorAll('.service-hero-flor');
    const options = {
        rootMargin: '0px',
        threshold: 1.0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        })
    }, options
    );

    flowersToAnimate.forEach(flower => {
        observer.observe(flower);
    })
}

function animateBauhaus() {
    const svgHolder = document.querySelector('.shape-holder');
    const shapesToAnimate = document.querySelectorAll('.shape');
    const triangle = document.querySelector('#triangle');
    const trianglePaths = triangle.querySelectorAll('.path')

    const options = {
        
        threshold: 1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                shapesToAnimate.forEach(shape => {
                    shape.classList.add('animate');
                });

                trianglePaths.forEach((shape, i) => {
                    shape.classList.add(`shape-triangle-${i + 1}`)
                });
            }
        })
    }, options
    );

    observer.observe(svgHolder);
}

document.addEventListener('DOMContentLoaded', animateElements())