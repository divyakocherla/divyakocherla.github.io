// Example: scroll animation
const animateElements = document.querySelectorAll('.animate');

window.addEventListener('scroll', () => {
    animateElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100) {
            el.style.animationPlayState = 'running';
        }
    });
});
