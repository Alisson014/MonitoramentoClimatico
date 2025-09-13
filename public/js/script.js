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


setInterval( async () => {
    const response = await fetch("https://monitoramento-climatico-henna.vercel.app/clima/get");
    const jsonResponse = await response.json();

    const temp = document.getElementById('temp');
    const temps = ['temp1', 'temp2', 'temp3', 'temp4'].map(id => document.getElementById(id));
    
    const humid = document.getElementById('humid');
    const humids = ['humid1', 'humid2', 'humid3', 'humid4'].map(id => document.getElementById(id));
    
            
    if(jsonResponse.data.length){
        temp.innerHTML = jsonResponse.data[jsonResponse.data.length -1].temperature + "°C";
        humid.innerHTML = jsonResponse.data[jsonResponse.data.length -1].humidity + "% de Umidade";

        const reversedData = [...jsonResponse.data].reverse().slice(1);

        reversedData.forEach((element, index) => {
            temps[index].innerHTML = element.temperature + "°C";
            humids[index].innerHTML = element.humidity +"% de Umidade";
        });
    }
}, 5000);