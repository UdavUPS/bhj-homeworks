const xhr = new XMLHttpRequest();
const loader = document.querySelector('.loader');
const item = document.querySelector('.item');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);
xhr.send();

xhr.addEventListener ('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
        let parsXHR = JSON.parse(xhr.responseText);
        let masXHR = parsXHR.response.Valute;
        let masVal = [];
        for (variable in masXHR) {
            masVal.push(variable);
        };
        masVal.forEach((elem) => {
            elementCreate (masXHR[elem].CharCode, masXHR[elem].Value, 'руб.');
        })
    }
})

function elementCreate (codeValue, valueValue, currencyValue) {
    let codeElement = document.createElement ('div');
    codeElement.classList.add('item__code');
    codeElement.innerHTML = codeValue;
    item.appendChild(codeElement);

    let valueElement = document.createElement ('div');
    valueElement.classList.add('item__value');
    valueElement.innerHTML = valueValue;
    item.appendChild(valueElement);

    let currencyElement = document.createElement ('div');
    currencyElement.classList.add('item__currency');
    currencyElement.innerHTML = currencyValue;
    item.appendChild(currencyElement);
}