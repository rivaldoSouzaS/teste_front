$(document).ready(function () {
  $(".mavbar__hamburguer").click(function () {
    $(this).toggleClass("mavbar__hamburguer--active");
    $(".mavbar__menu").toggleClass("mavbar__hamburguer--active");
  });
  let usuario = document.getElementById("email-user");
  if (usuario !== null) {
    usuario.innerText = localStorage.email;
  }
});

const botaoFiltroStorm = document.getElementById("filtroStorm");
botaoFiltroStorm.addEventListener("click", filtroTempestade);
const botaoFiltroAntMan = document.getElementById("filtroAnt-man");
botaoFiltroAntMan.addEventListener("click", filtroAntMan);
const botaoFiltroXMan = document.getElementById("filtro-x-man");
botaoFiltroXMan.addEventListener("click", filtroXMan);
const botaoFiltroSpiderMan = document.getElementById("filtro-spider-man");
botaoFiltroSpiderMan.addEventListener("click", filtroSpiderMan);

var ano = document.getElementById("ano");
var dataAtual = new Date();
ano.innerHTML = dataAtual.getFullYear();

const timesTamp2 = "16204780189";
const chavePublica2 = "fc22d4692e33c4b4c30dfade2a7e05d6";
const minhaHash2 = "97cf9a53387da93cbd52f11cbfa9d176";
let json;

fetch(
  "http://gateway.marvel.com/v1/public/comics?ts=" +
    timesTamp2 +
    "&apikey=" +
    chavePublica2 +
    "&hash=" +
    minhaHash2
)
  .then((resposta) => {
    return resposta.json();
  })
  .then((respostaJson) => {
    json = respostaJson;

    //console.log(respostaJson);
    let arrayIds = [];

    for (let index = 0; index <= respostaJson.data.count - 1; index++) {
      if (respostaJson.data.results[index].id !== undefined) {
        arrayIds.push(respostaJson.data.results[index].id);
      }
    }

    id = arrayIds[Math.floor(Math.random() * arrayIds.length)];

    filtroPersonagem(id);
  });

function filtroPersonagem(idPersonagem) {
  for (let index = 0; index <= json.data.count - 1; index++) {
    if (json.data.results[index].id === idPersonagem) {
      const urlImagem = json.data.results[index].thumbnail.path + ".jpg";

      const divCard = document.createElement("div");
      const imagem = document.createElement("img");

      imagem.src = urlImagem;
      divCard.appendChild(imagem);
      meuCartaoPrincipal = document.getElementById("cartao-principal");
      var item = document.getElementById("div-cartao-principal");
      meuCartaoPrincipal.innerHTML = "";
      meuCartaoPrincipal.appendChild(divCard);
      imagem.classList.add("imagens-principal");
      divCard.classList.add("div-cartao-principal");
    }
  }
}

function filtroTempestade() {
  filtroPersonagem(3627);
}

function filtroAntMan() {
  filtroPersonagem(428);
}

function filtroXMan() {
  filtroPersonagem(1332);
}

function filtroSpiderMan() {
  filtroPersonagem(1886);
}
