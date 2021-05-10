
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const idsingin = document.getElementById("id-singin");

senha.addEventListener("keyup", salvarSessionSenha)
email.addEventListener("keyup", salvarSessionEmail);

email.addEventListener("click", preencher);

function salvarSessionEmail(){
    localStorage.setItem('email', email.value);
}

function salvarSessionSenha(){
    localStorage.setItem('senha', senha.value);
}

function preencher(){
    if(localStorage.email && localStorage.senha){
        email.value = localStorage.email;
        senha.value = localStorage.senha;
    }
}