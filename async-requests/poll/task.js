const xhr = new XMLHttpRequest();
const pollTitle = document.querySelector('.poll__title');
const buttonField = document.querySelector('.poll__answers');


xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let parsXHR = JSON.parse(xhr.responseText);
        let answers = parsXHR.data.answers;
        //console.log(parsXHR);
        //console.log(answers);
        questionShow (parsXHR.data.title);
        for (variable of answers) {
            //console.log(variable);
            ansButs(variable);
        };
    }
})

buttonField.addEventListener('click', () => {
    alert('Спасибо, ваш голос засчитан!');
})

function questionShow (question) {
    pollTitle.innerHTML = question;
}

function ansButs(title) {
    let ansElement = document.createElement ('button');
    ansElement.classList.add('poll__answer');
    ansElement.innerHTML = title;
    buttonField.appendChild(ansElement);
}