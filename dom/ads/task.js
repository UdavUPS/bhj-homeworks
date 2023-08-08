const rotators = Array.from(document.querySelectorAll('.rotator__case'));
let i = 1;


setInterval(()=> {
    if (i < rotators.length) {
        rotators[i-1].classList.remove('rotator__case_active');
        rotators[i].classList.add('rotator__case_active');
        i++;
    } else {
        rotators[i-1].classList.remove('rotator__case_active');
        rotators[0].classList.add('rotator__case_active');
        i = 1;
    }
}, 1000)
