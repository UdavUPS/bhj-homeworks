const dropdownList = document.querySelector ('.dropdown__list');
const but = document.querySelector ('.dropdown__value');
const links = document.querySelectorAll('.dropdown__link');
const linkNams = Array.from(links);

function chooseTitle(n) {
    for (let i = 0; i < linkNams.length; i++) {
        if (i == n) {
            but.innerHTML = linkNams[i].innerHTML;
        }
    }

}

function listActive() {
    if(dropdownList.className.includes('dropdown__list_active')) {
        dropdownList.classList.remove ('dropdown__list_active');
    } else {
        dropdownList.classList.add('dropdown__list_active');
    }
}


but.addEventListener('click', listActive);

for (let i = 0; i < linkNams.length; i++) {
    linkNams[i].addEventListener('click', () => chooseTitle(i));
}
