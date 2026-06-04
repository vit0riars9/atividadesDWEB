const escolha = document.getElementById("estudante");
const dadosEstudante = document.getElementById("dadosEstudante");
const senha = document.getElementById("senha");
const mensagemSenha = document.getElementById("mensagemSenha");
const estadoSenha = document.getElementById("estadoSenha");

escolha.addEventListener('change', toggleDadosEstudante);
senha.addEventListener('input', validarSenha);
estadoSenha.addEventListener('click', toggleSenha);

function toggleDadosEstudante() {
    if (escolha.checked) {
        dadosEstudante.style.display = 'block';
    } else {
        dadosEstudante.style.display = 'none';
    }
}

function validarSenha() {
    const senhaValor = senha.value;
   
    if (senhaValor === '') {
        mensagemSenha.innerHTML = '';
        senha.style.borderColor = '';
        senha.style.outline='';
    } else{
        if (senhaValor.length < 8) {
            mensagemSenha.innerHTML = 'A senha deve conter pelo menos 8 caracteres.';
            mensagemSenha.style.color = 'red';
            senha.style.borderColor = 'red';
            senha.style.outline='none';
        } else {
            mensagemSenha.innerHTML = 'senha válida.';
            mensagemSenha.style.color = 'green';    
            senha.style.borderColor = 'green';
            senha.style.outline='none';
        }

    }
}

function toggleSenha() {
    if (senha.type === "password") {
        senha.type = "text";
        estadoSenha.textContent = "ocultar";
    } else {
        senha.type = "password";
        estadoSenha.textContent = "mostrar";
    }
}



