var jogador1 = {
  nome: "Mario",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};
var jogador2 = {
  nome: "Luiggi",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var listaJogadores = [jogador1, jogador2];
var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();
function exibirNaTela() {
  var resultado = ""; 
  for (var i = 0; i<listaJogadores.length;i++){
    resultado += `
    <tr>
      <td>${listaJogadores[i].nome}</td>
      <td>${listaJogadores[i].vitoria}</td>
      <td>${listaJogadores[i].empate}</td>
      <td>${listaJogadores[i].derrota}</td>
      <td>${listaJogadores[i].pontos}</td>
      <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
      <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
      <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
    </tr>
    `;
  }
  elementoTabela.innerHTML = resultado
}

function adicionarVitoria(jogador) {
   listaJogadores[jogador].vitoria++
   listaJogadores[jogador].pontos++
   exibirNaTela();
}

function adicionarEmpate(jogador) {
  for (var i in listaJogadores) {
   listaJogadores[i].empate++;
   listaJogadores[i].pontos++;
   exibirNaTela(); 
  }
}

function adicionarDerrota(jogador) {
   listaJogadores[jogador].derrota++;
   exibirNaTela(); 
  
}

function zerarPontos(jogador) {
  for (var i in listaJogadores) {
    listaJogadores[i].vitorias = 0;
    listaJogadores[i].empates = 0;
    listaJogadores[i].derrotas = 0;
    listaJogadores[i].pontos = 0;
  }
  exibirNaTela();
}
  
  
function adicionarJogador() {
  var nomeJogador = prompt("Insira o nome do jogador que irá participar do campeonato")
  // Cria um novo jogador com o nome informados
  var novoJogador = {
    nome: nomeJogador,
    pontos: 0,
    vitoria: 0,
    empate: 0,
    derrota: 0,
  }
  listaJogadores.push(novoJogador);
  exibirNaTela();
}

function removerJogador() {
  var nome = prompt("Qual o nome do jogador que deseja eliminar?")
  var posicao = -1 // Posição -1 por padrão
  // Verifica se o jogador está na lista de Jogadores
  for (var i in listaJogadores) {
    if (nome == listaJogadores[i].nome) {
      posicao = i
    }
  }
  // Se for encontrado o nome da lista de jogadores (diferente de -1)
  if (posicao != -1) {
    listaJogadores.splice(posicao, 1) // Exclui o jogador da lista
    // Zera a tabela pois saiu um jogador
    // zerarPontos()
    // Atualiza a tela sem o jogador
    exibirNaTela()
  }
  else {
    alert("O jogador informado não foi encontrado na lista de jogadores!")
  }
}
