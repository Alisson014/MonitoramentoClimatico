var bgs = ['/img/bg01.jpg',
    '/img/bg02.jpg',
    '/img/bg03.png',
    '/img/bg04.jpg',
    '/img/bg05.jpg'
];
const bg1 = document.getElementById('imgBg1');
const bg2 = document.getElementById('imgBg2');
var index = 0;
var bg2On = false;

setInterval(() => {
    if(bg2On){
        bg2.classList.remove("hide");
        bg2.src = bgs[index];
    } else{
        bg2.classList.add("hide");
        bg1.src = bgs[index];
    }

    index ++;
    bg2On = !bg2On;

    if (index == bgs.length -1){
        index = 0;
    }
}, 5000);
