function callDataHora(){
  const horaWeb = document.querySelector(".calendario");

  function sendDataHora(){
    const data = new Date();

    function zeroAEsquerda (num){
      return num >= 10 ? num : `0${num}`;
    }

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
      return (diaExtenso);
    };

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
      return (dataCompleta);
    }

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
      return(mesExtenso);
    }

    function hora(){
      const horaHTML = document.querySelector('.hora');
      const horaAtual = new Date();
      const hora = zeroAEsquerda(horaAtual.getHours());
      const min = zeroAEsquerda(horaAtual.getMinutes());
      const sec = zeroAEsquerda(horaAtual.getSeconds());
      horaHTML.innerHTML = `<strong>Horário de Brasília (GMT-3):</strong> ${hora}:${min}:${sec}`
      console.log(`${hora}:${min}:${sec}`);
    }

    const dataCompleta = dataAbreviada();

    horaWeb.innerHTML = `<p><strong>${diaDaSemana()}</strong>, ${dataCompleta.dia} de <strong>${mesExtenso()}</strong> de ${dataCompleta.ano}</p>`;
    setInterval(hora, 1000); // Atualiza a cada segundo
    hora(); // Chama a função hora para exibir o tempo atual imediatamente

  }
  
  horaWeb.addEventListener("load", sendDataHora());
}
callDataHora();