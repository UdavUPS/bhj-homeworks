const cart = document.querySelector('.cart__products');
const product = Array.from(document.querySelectorAll('.product'));



function addToCart(dataId, img, productCount) {
    let product = document.createElement ('div');
    product.classList.add('cart__product');
    product.setAttribute('data-id', dataId);

    let imgT = document.createElement ('img');
    imgT.classList.add('cart__product-image');
    imgT.setAttribute('src', img);
    product.appendChild(imgT);

    let countT = document.createElement ('div');
    countT.classList.add('cart__product-count');
    countT.innerHTML = productCount;
    product.appendChild(countT);

    cart.appendChild(product);
}

//product[0].children[2].children[0].children[1].children[1].innerHTML = 20;

/* function correctValue(productNum, value) {
    product[productNum].children[2].children[0].children[1].children[1].innerHTML = value;
} */

for (let i=0; i<product.length; i++) {
    product[i].children[2].children[0].children[1].children[0].addEventListener('click', () => {
        if (product[i].children[2].children[0].children[1].children[1].innerHTML >= 1) {
            product[i].children[2].children[0].children[1].children[1].innerHTML--;
        }
    })
}

for (let i=0; i<product.length; i++) {
    product[i].children[2].children[0].children[1].children[2].addEventListener('click', () => {
        product[i].children[2].children[0].children[1].children[1].innerHTML++;
    })
}

for (let i = 0; i < product.length; i++) {
    product[i].children[2].children[0].children[2].addEventListener('click', () => {
        if (cart.children.length > 0) {
            for (let j = 0; j < cart.children.length; j++) {
                if (cart.children[j].getAttribute('data-id') == product[i].getAttribute('data-id')){
                    cart.children[j].children[1].innerHTML = parseInt(cart.children[j].children[1].innerHTML) + parseInt(product[i].children[2].children[0].children[1].children[1].innerHTML);
                } else {
                    let dataId = product[i].getAttribute('data-id');
                    let img = product[i].children[1].getAttribute('src');
                    let productCount = product[i].children[2].children[0].children[1].children[1].innerHTML;
                    addToCart(dataId, img, productCount)
                }
            }
        } else {
            let dataId = product[i].getAttribute('data-id');
            let img = product[i].children[1].getAttribute('src');
            let productCount = product[i].children[2].children[0].children[1].children[1].innerHTML;
            addToCart(dataId, img, productCount)
        }
        






/*         let dataId = product[i].getAttribute('data-id');
        let img = product[i].children[1].getAttribute('src');
        let productCount = product[i].children[2].children[0].children[1].children[1].innerHTML;
        addToCart(dataId, img, productCount) */
    })
}