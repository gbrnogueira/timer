const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

const relogio = document.querySelector('.relogio');

let horasDisplay = document.querySelector('#horas');
let minutosDisplay = document.querySelector('#minutos');
let segundosDisplay = document.querySelector('#segundos');

let horas = 0;
let minutos = 0;
let segundos = 0;

let counter;

iniciar.addEventListener('click', function (event) { // Minhas funções  
    
    relogio.style.color = 'black'
    counter = setInterval(() => {

        segundosDisplay.innerHTML = segundos >= 10 ? segundos++ : `0${segundos++}`;

        if (segundos > 59) {
            segundos = 0;
            
            minutos++
            minutosDisplay.innerHTML = minutos >= 10 ? minutos : `0${minutos}`;                   
        }

        if (minutos > 59) {
            minutos = 0;
            
            horas++;
            horasDisplay.innerHTML = horas >= 10 ? horas : `0${horas}`;                
        }   
    }, 1000)  
});

pausar.addEventListener('click', function (event) {
    
    clearInterval(counter);
    relogio.style.color = 'red';
});

zerar.addEventListener('click', function (event) {

    relogio.style.color = 'black';
    clearInterval(counter);
    horas = 0;
    minutos = 0;
    segundos = 0;
    
    horasDisplay.innerHTML = '00';
    minutosDisplay.innerHTML = '00';
    segundosDisplay.innerHTML = '00';
});
















