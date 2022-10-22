let hours = document.querySelector('.h');
let minutes = document.querySelector('.m');
let seconds = document.querySelector('.s');


setInterval(() => {
    let time = new Date;
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    h = checkZero(h);
    m = checkZero(m);
    s = checkZero(s);

    document.querySelector('.hours').innerHTML = h;
    document.querySelector('.minutes').innerHTML = m;
    document.querySelector('.seconds').innerHTML = s;

    seconds.style.transform = 'rotate(' + (((s / 60) * 360) + 360) + 'deg)';
    minutes.style.transform = 'rotate(' + ((m / 60 ) * 360) + 'deg)';
    hours.style.transform = 'rotate(' + ((h / 12) * 360) + 'deg)';
    
}, 1000);

function checkZero(i) {
    if(i < 10) { i = '0' + i}
    return i;
}
