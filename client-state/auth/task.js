const form = document.getElementById('signin__form');
const btn = document.querySelector('.btn');
/* let FormD = new FormData(form); */


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    let FormD = new FormData(document.forms.signin__form);
/*     FormD.append('login', document.forms.login.value);
    FormD.append('password', document.forms.password.value); */
    xhr.send(FormD);
  });


 /* btn.addEventListener('click', (e)=>{
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    FormD.append('login', document.querySelector('.login').value);
    FormD.append('password', document.querySelector('.password').value); 
    xhr.send(FormD);
     let FormD = new FormData(form);
})  */