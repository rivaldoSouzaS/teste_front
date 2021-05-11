$(document).ready(function(){
  
    $(".hamburguer").click(function(){
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
    });
});

var ano = document.getElementById("ano");
var dataAtual = new Date();
ano.innerHTML = dataAtual.getFullYear();

const buscarHerois = document.getElementById("buscarHerois");
buscarHerois.addEventListener("keyup", salverSession);
buscarHerois.addEventListener("click", verificarSession);

const botaoSearch = document.getElementById("botao-search");
botaoSearch.addEventListener("click", buscarHeroisFiltro);

function salverSession(){
    sessionStorage.search = buscarHerois.value;
}

function verificarSession(){
    if(sessionStorage.search){
        buscarHerois.value = sessionStorage.search;
    }
}

const timesTamp = '16204780189';
const chavePublica = 'fc22d4692e33c4b4c30dfade2a7e05d6';
const minhaHash = '97cf9a53387da93cbd52f11cbfa9d176';
let jsonSearch;

fetch('http://gateway.marvel.com/v1/public/comics?ts='+timesTamp+'&apikey='+chavePublica+'&hash='+minhaHash
).then((resposta) => {
    return resposta.json();
}).then((respostaJson)=> {
    jsonSearch = respostaJson;

    //console.log(respostaJson);

    for (let index = 0; index <= respostaJson.data.count - 1; index++) {
        
        if(respostaJson.data.results[index].title !== undefined){

            const url = respostaJson.data.results[index].thumbnail.path+'.jpg';
            const texto = respostaJson.data.results[index].title;
            
            mostarCartao(url, texto);
        
        }
        
    }
    
});
//vamos trabalhar 
function mostarCartao(urlImagem, textoDesc){

    const divCard = document.createElement("div");
    const divImagem = document.createElement("div");
    const divDesc = document.createElement("div");
    
    const texto = document.createElement("text");
    const imagem = document.createElement("img");

    imagem.src = urlImagem;
    texto.textContent = textoDesc;

    divImagem.appendChild(imagem);
    divDesc.appendChild(texto);

    divCard.appendChild(divImagem)
    divCard.appendChild(divDesc);

    document.getElementById("container-mostrar-busca").appendChild(divCard);

    divCard.classList.add("div-car-herois");
    divImagem.classList.add("div-imagens");
    divDesc.classList.add("div-texto");
}

function buscarHeroisFiltro(){
    document.getElementById("container-mostrar-busca").innerHTML = "";
    let desc = document.getElementById("buscarHerois").value;

    for (let index = 0; index < jsonSearch.data.count -1; index++) {
        
        if(jsonSearch.data.results[index].title.toUpperCase().search(desc.toUpperCase()) > -1){
            const url = jsonSearch.data.results[index].thumbnail.path+'.jpg';
            const texto = jsonSearch.data.results[index].title;
            mostarCartao(url, texto);
        }
      
    }

}