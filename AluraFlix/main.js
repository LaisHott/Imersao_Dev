var listaTitulosFavoritos = ['The green Arrow',
                                'Breakfast at Tiffany',
                                'Star Wars: The force awakens',
                                'Top Gun'];
var listaFilmesFavoritos = ['https://upload.wikimedia.org/wikipedia/en/9/9c/Arrow_season_8.jpg',
                            'https://i.pinimg.com/564x/0c/e0/25/0ce0254696262a034fcec18fade6744c.jpg',
                            'https://img.elo7.com.br/product/original/2C25D05/big-poster-filme-star-wars-o-despertar-da-forca-tam-90x60-cm-poster-star-wars.jpg',
                            'https://jovemnerd.com.br/wp-content/uploads/2022/03/TGM_INTL_DGTL_KEY_ART_T_CRUISE_STANDING_JET_IMAX_BRA_6edc322a8fe34c1405eab878937ef053c2881573-760x1126.jpg'];
var listaTrailersFilmesFavoritos = ['https://www.youtube.com/watch?v=znTLzRJimeY&ab_channel=RottenTomatoesClassicTrailers',
                                    'https://www.youtube.com/watch?v=IZBHRwsUaDk',
                                    'https://www.youtube.com/watch?v=4r0287tUEgk',
                                    'https://www.youtube.com/watch?v=qSqVVswa420'];

var listaInicial = document.getElementById('listaFilmes')
for(i=0; i < listaFilmesFavoritos.length ; i++){
    listaInicial.innerHTML += `<a href=" ${listaTrailersFilmesFavoritos[i]} " target="blank"><img src=" ${listaFilmesFavoritos[i]} ">${listaTitulosFavoritos[i]}</a>`;
}  


function adicionarFilme(){
  var nomeFilmeFavorito = document.getElementById('nomefilme').value;
  var filmeFavorito = document.getElementById('filme').value;
  var trailerFilmeFavorito = document.getElementById('trailer').value;
  
    if((filmeFavorito.endsWith('jpg') ) || (filmeFavorito.endsWith('jpeg') ) || (filmeFavorito.endsWith('png') ) || (filmeFavorito.endsWith('svg') )){
      
      document.getElementById('mensagemDeErro').innerHTML = '';
      listaTitulosFavoritos.push(nomeFilmeFavorito)
      listaFilmesFavoritos.push(filmeFavorito);
      listaTrailersFilmesFavoritos.push(trailerFilmeFavorito);
      
      limpaCampos();
      recarregarFilmes();
      
    } else {
      
      document.getElementById('mensagemDeErro').innerHTML = 'Endereço de imagem inválido, tente novamente';
      limpaCampos();
      
    }
  }

function recarregarFilmes(){
 
  var elementoListaFilmes = document.getElementById('listaFilmes');
  elementoListaFilmes.innerHTML = '';
  for(i=0; i < listaFilmesFavoritos.length ; i++){
    elementoListaFilmes.innerHTML += `<a href=" ${listaTrailersFilmesFavoritos[i]} " target="blank"><img src=" ${listaFilmesFavoritos[i]} ">${listaTitulosFavoritos[i]}</a>`;
  }
}

function limpaCampos(){
  document.getElementById('nomefilme').value = '';
  document.getElementById('filme').value = '';
  document.getElementById('trailer').value = '';
}

function removerFilme(){
    var nomeFilme = document.getElementById('nomefilme').value;
    var posicao = listaTitulosFavoritos.indexOf(nomeFilme)
    var elementoListaFilmes = document.getElementById('listaFilmes');
    if (posicao == -1) {
      alert("O filme não foi encontrado");
    } else {
      listaTitulosFavoritos.splice(posicao, 1)
      listaFilmesFavoritos.splice(posicao, 1)
      listaTrailersFilmesFavoritos.splice(posicao, 1)
      document.getElementById('nomefilme').value = "";

      elementoListaFilmes.innerHTML = "";
      for(i=0; i < listaFilmesFavoritos.length ; i++){
      elementoListaFilmes.innerHTML += `<a href=" ${listaTrailersFilmesFavoritos[i]} " target="blank"><img src=" ${listaFilmesFavoritos[i]} ">${listaTitulosFavoritos[i]}</a>`;
    }
  }
}