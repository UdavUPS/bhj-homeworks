let holes = [];
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

for (let i = 0; i < 10; i++) {
    holes[i] = document.getElementById("hole" + i);
}

function reloding () {
    dead.innerHTML = 0;
    lost.innerHTML = 0;
}

function checing (n) {
    if (holes[n].className.includes('hole_has-mole')) {
        dead.innerHTML++; 
    } else {
        lost.innerHTML++; 
    }
    if (dead.innerHTML == 10) {
        setTimeout(() => {
            alert("Победа!");
            reloding();
        }, 200);
        
    }
    if (lost.innerHTML == 5) {
        setTimeout(() => {
            alert("Увы, Вы проиграли");
            reloding();
        }, 200);
    }
}

holes[1].onclick = () => checing(1);
holes[2].onclick = () => checing(2);
holes[3].onclick = () => checing(3);
holes[4].onclick = () => checing(4);
holes[5].onclick = () => checing(5);
holes[6].onclick = () => checing(6);
holes[7].onclick = () => checing(7);
holes[8].onclick = () => checing(8);
holes[9].onclick = () => checing(9);