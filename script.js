let hours = document.querySelector('.h');
let minutes = document.querySelector('.m');
let seconds = document.querySelector('.s');


setInterval(() => {
    let time = new Date();

    let s = time.getSeconds();
    let sDegree = (((s / 60) * 360) + 360)
    seconds.style.transform = `rotate(${sDegree}deg)`;

    let m = time.getMinutes();
    let mDegree = (((m / 60) * 360) + 360);
    minutes.style.transform = `rotate(${mDegree}deg)`;

    let h = time.getHours();
    let hDegree = (((h / 12) * 360) + 360);
    hours.style.transform = `rotate(${hDegree}deg)`;
    
}, 1000);

