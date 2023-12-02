const form = document.getElementById('signin__form');
const btn = document.querySelector('.btn');
/* let FormD = new FormData(form); */
const welcomeWindow = document.getElementById('welcome');
const userName = document.getElementById('user_id');
let userId;
let userStatus;

function saveStatus (userStatus, userId) {
    if (userStatus) {
        localStorage.setItem('user_Id', userId);
        userName.innerHTML = userId;
        welcomeWindow.classList.add('welcome_active');
    }
  }



form.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    let FormD = new FormData(document.forms.signin__form);
    xhr.send(FormD);


    let psrsXHR = JSON.parse(xhr.responseText);
    saveStatus (psrsXHR.success, psrsXHR.user_id);




    console.log(xhr);
    console.log(xhr.responseText);
    //saveStatus (userStatus, userId);


    /* saveStatus (userStatus, userId);
    //let parsXHR = JSON.parse(xhr);
    userId = xhr.response;    ;
    console.log(userId); */
  });




 /* btn.addEventListener('click', (e)=>{
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    FormD.append('login', document.querySelector('.login').value);
    FormD.append('password', document.querySelector('.password').value); 
    xhr.send(FormD);
     let FormD = new FormData(form);
})  */