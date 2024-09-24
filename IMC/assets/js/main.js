function calculaIMC (){
  //Puxo as TAG's HTML de classe form e resultado para os objetos de mesmo nome
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');
  
  //Faço o envio do Form com a função sendForm
  function sendForm(event){
    event.preventDefault();

    //Trago os dados dos inputs contidos no objeto form
    const nome = form.querySelector('.inputNome');
    const sobrenome = form.querySelector('.inputSobrenome');
    const peso = form.querySelector('.inputPeso');
    const altura = form.querySelector('.inputAltura');

    //Verifico se os campos estão vazios
    if (!nome.value || !sobrenome.value || !peso.value || !altura.value){
      resultado.innerHTML = `<p class="msgErro">Por favor, preencha todos os campos corretamente.</p>`;
      return;
    }

    //Crio o objeto pessoa para armazenar os dados oriundos do form do usuário
    const pessoaIMC = ({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: Number(peso.value),
      altura: Number(altura.value)
    });

    let imc;

    /* Verifico se a altura informada é um número, caso não seja retorno uma msg de erro
    e caso seja verifico ainda se a altura informada é um número real ou inteiro para tratar o valor da forma correta.*/
    if (!pessoaIMC.altura === true) {
      resultado.innerHTML = `<p class="msgErro">Por favor, preencha todos os campos corretamente.</p>`;
      return;
    } else if (Number.isInteger(pessoaIMC.altura) === true){
      pessoaIMC.altura = pessoaIMC.altura / 100;
      imc = pessoaIMC.peso / (pessoaIMC.altura * pessoaIMC.altura);
    } else {
      imc = pessoaIMC.peso / (pessoaIMC.altura * pessoaIMC.altura);  
    }


    //Aqui verifico o valor do IMC para ver em qual faixa ele se encaixa e retornar a informação ao usuário através do objeto resultado que é uma DIV HTML
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
  
  //Aqui aguardamos o evento submit do HTML para executar a função sendForm
  form.addEventListener('submit', sendForm);
}

calculaIMC();