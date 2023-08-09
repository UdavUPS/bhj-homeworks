const fontSizeElem = Array.from(document.querySelectorAll('.font-size'));
const book = document.getElementById('book');


for (let i=0; i<fontSizeElem.length; i++) {
    fontSizeElem[i].addEventListener('click', (e) => {
        e.preventDefault();
        for (elem of fontSizeElem) {
            elem.classList.remove('font-size_active');
        };
        fontSizeElem[i].classList.add('font-size_active');
        if (book.classList.contains('font-size_small')) {
            book.classList.remove('font-size_small');
        }
        if (book.classList.contains('font-size_big')) {
            book.classList.remove('font-size_big');
        }
        if (fontSizeElem[i].classList.contains('font-size_small')) {
            book.classList.add('font-size_small');
        }
        if (fontSizeElem[i].classList.contains('font-size_big')) {
            book.classList.add('font-size_big');
        }
    })
}