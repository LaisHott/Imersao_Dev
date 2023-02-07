var real = document.querySelector("#val");
var valorEmDolar = document.querySelector("#dolar");
var valorEmEuro = document.querySelector("#euro");
var valorEmBtc = document.querySelector("#btc");

function currencyConverter() {
  var dolar = parseFloat(real.value) * 5.32;
  valorEmDolar.value = dolar.toFixed(2);

  var euro = parseFloat(real.value) * 5.56;
  valorEmEuro.value = euro.toFixed(2);

  var btc = parseFloat(real.value) * 117.797;
  valorEmBtc.value = btc.toFixed(2); 
}

const converterBotton = document.querySelector("button");
converterBotton.onclick = currencyConverter;


//<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-aluraflix.svg" class="page-logo" alt="">
//<img src="https://caelum-online-public.s3.amazonaws.com/assets-imersaodev/Convers%C3%A3o+1.png" class="moedas">