const email = document.getElementById("email");
const senha = document.getElementById("senha");
const idsingin = document.getElementById("id-singin");

var ano = document.getElementById("ano");
var dataAtual = new Date();
ano.innerHTML = dataAtual.getFullYear();

senha.addEventListener("keyup", salvarLocalSenha);
email.addEventListener("keyup", salvarLocalEmail);

email.addEventListener("click", preencher);
idsingin.addEventListener("click", salvarSession);

function salvarLocalEmail() {
  localStorage.setItem("email", email.value);
}

function salvarLocalSenha() {
  localStorage.setItem("senha", senha.value);
}

function preencher() {
  if (localStorage.email && localStorage.senha) {
    email.value = localStorage.email;
    senha.value = localStorage.senha;
  }
}

function salvarSession() {
  sessionStorage.setItem("email", email.value);
  sessionStorage.setItem("senha", senha.value);
}
