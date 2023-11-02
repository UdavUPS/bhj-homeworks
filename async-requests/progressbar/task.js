const xhr = new XMLHttpRequest();
const progress = document.getElementById( 'progress' );
const but = document.getElementById( 'send' );
const form = document.getElementById( 'form' );
const formData = new FormData(form);

xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

//formData.append("userfile", fileInputElement.files[0]);

xhr.addEventListener('readystatechange', () => {
    progress.value = xhr.readyState;
})



but.addEventListener('click', () => {
    xhr.send(formData);
})









/* xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/upload', true);
xhr.send();

//progress.value = 0.7;

xhr.addEventListener('readystatechange', () => {
    progress.value = xhr.readyState;
})

but.addEventListener('click', () => {
    //xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);
    xhr.send();
    progress.value = xhr.readyState;
}) */