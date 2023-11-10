const xhr = new XMLHttpRequest();
const progress = document.getElementById( 'progress' );
const but = document.getElementById( 'send' );
const form = document.getElementById( 'form' );
const formData = new FormData(form);

xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);


xhr.onprogress = () => {
    //e.preventDefault;
    progress.value = xhr.readyState;
  };

  but.addEventListener('click', (e) => {
    e.preventDefault;
    xhr.send(formData);
  })



/* form.addEventListener('submit', (e) => {
    e.preventDefault;
    progress.value = xhr.readyState;

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            
        }
    })

    //xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);


    const formData = new FormData(form);
    xhr.send(formData);
})
 */

//xhr.send(formData);

/* formData.append("userfile", 333);

xhr.addEventListener('readystatechange', () => {
    progress.value = xhr.readyState;
    xhr.send(formData);
}) */



/* but.addEventListener('click', () => {
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