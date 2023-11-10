const xhr = new XMLHttpRequest();
const loader = document.querySelector('.loader');
const items = document.getElementById('items');

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
            elementCreate (masXHR[elem].CharCode, Math.round(masXHR[elem].Value), 'руб.');
        })
    }
})

function elementCreate (codeValue, valueValue, currencyValue) {
    let rootElement = document.createElement ('div');
    rootElement.classList.add('item');

    let codeElement = document.createElement ('div');
    codeElement.classList.add('item__code');
    codeElement.innerHTML = codeValue;
    rootElement.appendChild(codeElement);

    let valueElement = document.createElement ('div');
    valueElement.classList.add('item__value');
    valueElement.innerHTML = valueValue;
    rootElement.appendChild(valueElement);

    let currencyElement = document.createElement ('div');
    currencyElement.classList.add('item__currency');
    currencyElement.innerHTML = currencyValue;
    rootElement.appendChild(currencyElement);

    items.appendChild(rootElement);
}