let clickerCounter = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');


function CookClick () {
    clickerCounter.innerHTML++;
    if (clickerCounter.innerHTML % 2 == 0) {
        cookie.width = cookie.width + 20;
        cookie.height = cookie.height + 20;
    } else {
        cookie.width = cookie.width - 20;
        cookie.height = cookie.height - 20;
    }
}

cookie.onclick = CookClick;