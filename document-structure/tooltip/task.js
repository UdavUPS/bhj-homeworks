const elems = document.querySelectorAll('.has-tooltip');
let tooltip = document.createElement ('div');

tooltip.classList.add('tooltip');

for (let i = 0; i < elems.length; i++) {
    elems[i].addEventListener('click', (event) => {
        event.preventDefault();
        if (elems[i].nextElementSibling === tooltip) {
            elems[i].nextElementSibling.remove();
        } else {
            tooltip.innerHTML = elems[i].title;
            tooltip.style.left = elems[i].getBoundingClientRect().left + 'px';
            tooltip.style.top = elems[i].getBoundingClientRect().top + 20 + 'px';
            elems[i].insertAdjacentElement('afterEnd', tooltip);
            tooltip.classList.add('tooltip_active');
        }
    });
}