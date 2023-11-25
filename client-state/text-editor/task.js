const textComponent = document.getElementById('editor');

textComponent.value = localStorage.getItem('savedText');

textComponent.addEventListener('change', ()=>{
    localStorage.setItem('savedText', textComponent.value);
})
