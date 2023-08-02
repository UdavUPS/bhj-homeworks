const tabs = Array.from(document.querySelectorAll('.tab'));
const contents = Array.from(document.querySelectorAll('.tab__content'));



function tabClear() {
    for (let i=0; i<tabs.length; i++) {
        if (tabs[i].classList.contains('tab_active')) {
            tabs[i].classList.remove('tab_active');
            contents[i].classList.remove('tab__content_active');
        }
    }
}



for (let i=0; i<tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
        tabClear();
        tabs[i].classList.add('tab_active');
        contents[i].classList.add('tab__content_active');
    })
}


/* for (let i=0; i<tabs.length; i++) {
    tabs[i].onclick = () => {
        tabClear();
        tabs[i].classList.add('tab_active');
        contents[i].classList.add('tab__content_active');
    };
} */