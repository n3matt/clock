let hours = document.querySelector('.h');
let minutes = document.querySelector('.m');
let seconds = document.querySelector('.s');

let hour = document.querySelector('.hours');
let minute = document.querySelector('.minutes');
let second = document.querySelector('.seconds');


setInterval(() => {
    let time = new Date();

    let s = time.getSeconds();
    let sDegree = (((s / 60) * 360) + 360)
    seconds.style.transform = `rotate(${sDegree}deg)`;
    second.innerHTML = checkZero(s);

    let m = time.getMinutes();
    let mDegree = (((m / 60) * 360) + 360);
    minutes.style.transform = `rotate(${mDegree}deg)`;
    minute.innerHTML = checkZero(m);

    let h = time.getHours();
    let hDegree = (((h / 12) * 360) + 360);
    hours.style.transform = `rotate(${hDegree}deg)`;
    hour.innerHTML = checkZero(h);
    
}, 1000);



function checkZero(i) {
    if (i < 10) {
        i = `0${i}`;
       
    }
    return i;
}

checkZero();