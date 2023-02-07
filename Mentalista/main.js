let numeroAleatorio = Math.floor(Math.random()*1000)+1;
let tentativasRestantes = 5;

setTimeout(function(){
  while (tentativasRestantes > 0) {
    let chute = prompt(`Advinhe um número entre 1 e 1000. Você tem ${tentativasRestantes} tentativas`);
  
    if (chute == numeroAleatorio){
      alert(`Você acertou o número em ${6 - tentativasRestantes} tentativas! Parabéns!`);
      break;
    }else if (chute < numeroAleatorio){
      alert("O número secreto é maior")
    }else{
      alert("O número secreto é menor")
    }
    tentativasRestantes--;
  }
  
  if(tentativasRestantes === 0){
    alert(`Você perdeu. O número correto era ${numeroAleatorio}.`);
  }
},400); 
setTimeout();
