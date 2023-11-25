const modal = document.querySelector('.modal');
let stat = localStorage.getItem('stat');


if (!stat) {
    modal.classList.add("modal_active");

}

modal.addEventListener('click', ()=>{
    modal.classList.remove("modal_active");
    localStorage.setItem('stat', true);
})

