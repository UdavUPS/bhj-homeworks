let timeShow = document.getElementById('timer');
let time = document.getElementById('timer').innerHTML;

let intervalId = setInterval(() => {
    if (time > 0) {
        time--;
        //console.log(time);
        timeShow.innerHTML = time;
    } else {
        clearInterval(intervalId);
        timeShow.innerHTML = time;
        alert('Вы победили в конкурсе');
    }
}, 1000);