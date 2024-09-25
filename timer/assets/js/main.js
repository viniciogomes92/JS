
/* Essa função a data ZERO do ES6 que é 00:00:00, formata ela pro formato desejado
e a retorna para manipularmos */
function getTimeFromSeconds (segundos){
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
  })
};

//Aqui puxamos os elementos HTML que iremos manipular para os objetos de mesmo nome
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

//Aqui iniciamos as variáveis que iremos utilizar no decorrer do programa
relogio.innerHTML = '00:00:00'
let segundos = 0;
let timer;

//Essa unção tem como objetivo startar nosso timer
function iniciaRelogio(){
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = getTimeFromSeconds(segundos);
  }, 1000);
}

//Aqui usamos o addEventListener para receber o click de qualquer objeto do documento (HTML)
document.addEventListener('click', function(e){
  
  //A const Elemen é criada para receber o elemento clicado no documento
  const elemen = e.target;  


  /* Nos blocos IF verificamos qual elemento foi clicado através da propriedade 
  classList.contains, dependendo de qual seja o elemento, ele executará o que 
  estiver no bloco */
  if (elemen.classList.contains('iniciar')){
    /* Aqui ele remove a classe PAUSADO do nosso timer o que remove a cor vermelha
    além disso zera o intervalo do nosso timer e reinicia nossa contagem através
    da função iniciaRelogio */
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
  }

  if (elemen.classList.contains('pausar')){
    clearInterval(timer);
    relogio.classList.add('pausado')
  }

  if (elemen.classList.contains('zerar')){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    segundos = 0;
    relogio.classList.remove('pausado');
  }
})