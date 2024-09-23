function calculaIMC (){
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');
  
  function sendForm(event){
    event.preventDefault();

    const nome = form.querySelector('.inputNome');
    const sobrenome = form.querySelector('.inputSobrenome');
    const peso = form.querySelector('.inputPeso');
    const altura = form.querySelector('.inputAltura');

    if (!nome.value || !sobrenome.value || !peso.value || !altura.value){
      resultado.innerHTML = `<p class="msgErro">Por favor, preencha todos os campos corretamente.</p>`;
      return;
    }

    const pessoaIMC = ({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: parseFloat(peso.value),
      altura: parseFloat(altura.value) / 100
    });
    
    const imc = pessoaIMC.peso / (pessoaIMC.altura * pessoaIMC.altura);


    if (imc.toFixed(1) < 18.5){
      resultado.innerHTML = `<p>${pessoaIMC.nome} ${pessoaIMC.sobrenome}, seu IMC é ${imc.toFixed(1)} e, portanto, você está abaixo do peso.</p>`;
    } else if ( imc.toFixed(1) >= 18,5 && imc.toFixed(1) <= 24.9 ){
      resultado.innerHTML = `<p>${pessoaIMC.nome} ${pessoaIMC.sobrenome}, seu IMC é ${imc.toFixed(1)} e, portanto, você está com peso normal.</p>`;
    } else if ( imc.toFixed(1) >= 25 && imc.toFixed(1) <= 29.9 ){
      resultado.innerHTML = `<p>${pessoaIMC.nome} ${pessoaIMC.sobrenome}, seu IMC é ${imc.toFixed(1)} e, portanto, você está com sobrepeso.</p>`;
    } else if ( imc.toFixed(1) >= 30 && imc.toFixed(1) <= 34.9 ){
      resultado.innerHTML = `<p>${pessoaIMC.nome} ${pessoaIMC.sobrenome}, seu IMC é ${imc.toFixed(1)} e, portanto, você está com Obesidade Grau 1.</p>`;
    } else if ( imc.toFixed(1) >= 35 && imc.toFixed(1) <= 39.9 ){
      resultado.innerHTML = `<p>${pessoaIMC.nome} ${pessoaIMC.sobrenome}, seu IMC é ${imc.toFixed(1)} e, portanto, você está com Obesidade Grau 2.</p>`;
    } else if ( imc.toFixed(1) >= 40) {
      resultado.innerHTML = `<p>${pessoaIMC.nome} ${pessoaIMC.sobrenome}, seu IMC é ${imc.toFixed(1)} e, portanto, você está com Obesidade Grau 3.</p>`;
    }
  }
  form.addEventListener('submit', sendForm);
}

calculaIMC();