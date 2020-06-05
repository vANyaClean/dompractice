const link = document.querySelector('a');
link.textContent = "PIDARAS";
link.href = "http://pleshka.com/";
link.target = "_blank";

const sect  = document.querySelector('section');
const para =  document.createElement('p');
para.textContent = "xuilo";
sect.appendChild(para);

//for(i = 1;i<10;i++){
//const paragraphs = document.createElement('p');
//paragraphs.textContent = i + "some text";
//sect.appendChild(paragraphs);
//};

para.classList.add("formated");

const clock = document.querySelector('.clock');
const showClock = () => clock.innerText = (new Date()).toLocaleTimeString();
setInterval(showClock, 1000);
$('.clickme').click(()=>$('img').toggle(3000))

const linkPara = document.querySelector('p');
sect.appendChild(linkPara.cloneNode(true));
linkPara.remove()

const display = document.querySelector('.display')


document.querySelectorAll('.digits button')
    .forEach(button => button.addEventListener("click", digitPressed))

function digitPressed(ev){
display.value += ev.target.innerText

};


document.querySelectorAll('.opers button')
    .forEach(button => button.addEventListener("click", operPressed))

function operPressed(ev){
display.value += ev.target.innerText

};
document.querySelector('.eq').addEventListener("click", calculate)


function calculate(){

    display.value =eval(display.value);
} 