const reveals = Array.from(document.querySelectorAll('.reveal'));
const winHeight = window.screen.height;


document.addEventListener('scroll', () => {
    for (let i=0; i<reveals.length; i++) {
        let top = reveals[i].getBoundingClientRect().top;
        if (top > 0 && top < winHeight) {
            reveals[i].classList.add ('reveal_active');
        } else {
            reveals[i].classList.remove ('reveal_active');
        }
    }
});