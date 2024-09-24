//Função que Executa a chamada do nosso calendário
function callDataHora(){
  //Puxamos a TAG HTML de classe calendario para o objeto horaWeb
  const horaWeb = document.querySelector(".calendario");

  //Função que executa o envio da data e hora pro HTML
  function sendDataHora(){
    //Objeto do tipo date criado com o nome de data
    const data = new Date();


    //Função que adiciona um Zero a Esquerda do número caso seja menor que 10
    function zeroAEsquerda (num){
      return num >= 10 ? num : `0${num}`;
    }

    //Função que usa Switch/Case para transformar o dia da semana(númeral de 0 a 6) em palavra por extenso
    function diaDaSemana(){
      const diaSemana = data.getDay();
      let diaExtenso;

      switch (diaSemana) {
        case 0:
          diaExtenso = "Domingo";
          break;
        case 1:
          diaExtenso = "Segunda-Feira";
          break;
        case 2:
          diaExtenso = "Terça-Feira";
          break;
        case 3:
          diaExtenso = "Quarta-Feira";
          break;
        case 4:
          diaExtenso = "Quinta-Feira";
          break;
        case 5:
          diaExtenso = "Sexta-Feira";
          break;
        case 6:
          diaExtenso = "Sábado";
          break;
        default:
          break;    
      }
      return diaExtenso;
    };

    //Função que retorna um objeto chamado dataCompleta com as propriedades .dia, .mes, .ano
    function dataAbreviada(){
      const dia = zeroAEsquerda(data.getDate());
      const mes = zeroAEsquerda(data.getMonth() + 1);
      const ano = data.getFullYear();
      const dataCompleta = {
        dataAbreviada: `${dia}/${mes}/${ano}`,
        dia: dia,
        mes: mes, 
        ano: ano      
      } 
      return [dataCompleta.dataAbreviada, dataCompleta.dia, dataCompleta.mes, dataCompleta.ano];
    }

    //Função que pega o mês(numeral de 0 a 11) e retorna ele escrito por extenso
    function mesExtenso(){
      const mes = data.getMonth();
      let mesExtenso = "";

      switch (mes) {
        case 0:
          mesExtenso = "Janeiro";
          break;
        case 1:
          mesExtenso = "Fevereiro";
          break;
        case 2:
          mesExtenso = "Março";
          break;
        case 3:
          mesExtenso = "Abril";
          break;
        case 4:
          mesExtenso = "Maio";
          break;
        case 5:
          mesExtenso = "Junho";
          break;
        case 6:
          mesExtenso = "Julho";
          break;
        case 7:
          mesExtenso = "Agosto";
          break;
        case 8:
          mesExtenso = "Setembro";
          break;
        case 9:
          mesExtenso = "Outubro";
          break;
        case 10:
          mesExtenso = "Novembro";
          break;
        case 11:
          mesExtenso = "Dezembro";
          break;
        default:
          break;    
      }
      return mesExtenso;
    }

    /* Função que pega a TAG HTML de classe "hora" e joga no objeto horaHTML, 
    cria um objeto do tipo date chamado horaAtual e retorna para o HTML a hora 
    completa. */
    function hora(){
      const horaHTML = document.querySelector('.hora');
      const horaAtual = new Date();
      const hora = zeroAEsquerda(horaAtual.getHours());
      const min = zeroAEsquerda(horaAtual.getMinutes());
      const sec = zeroAEsquerda(horaAtual.getSeconds());
      horaHTML.innerHTML = `<strong>Horário de Brasília (GMT-3):</strong> ${hora}:${min}:${sec}`
    }

    const dataCompleta = dataAbreviada();

    horaWeb.innerHTML = `<p><strong>${diaDaSemana()}</strong>, ${dataCompleta[1]} de <strong>${mesExtenso()}</strong> de ${dataCompleta[3]}</p>`;
    setInterval(hora, 1000); // Atualiza a cada segundo
    hora(); // Chama a função hora para exibir o tempo atual imediatamente

  }
  
  horaWeb.addEventListener("load", sendDataHora());
}
//chamada da função
callDataHora();