const inputElement = document.getElementById('nova_tarefa');
const mensagemElement = document.getElementById('mensagem');
const listaTarefas = document.getElementById('lista_tarefas');
const contadorElement = document.getElementById('mensagem_saudacao');

function adicionarTarefa(){
    

    let tarefa = inputElement.value;
    let mensagem, cor;
    let contador = listaTarefas.children.length;
    
    if (tarefaValida(tarefa)){
        let novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefa;
        listaTarefas.appendChild(novaTarefa);

        let botao_limpar = document.createElement('button');
        botao_limpar.textContent = 'Limpar';
        

        botao_limpar.onclick = function() {
            listaTarefas.innerHTML = '';
            contadorElement.textContent = 'Adicione Tarefas!';
            mensagemElement.textContent = '';
            botao_limpar.remove();
            contador = 0;
        }

        if (contador < 1){
            document.querySelector('.container').appendChild(botao_limpar);
        }
        

        contador++;

        mensagem = "Adicionado com sucesso!";
        cor = 'green';
    }
    else{
        mensagem = "Por favor, digite uma tarefa antes de adicionar!";
        cor = 'red';
    }
    
    inputElement.value = ''; 
    inputElement.focus();
    mensagemElement.textContent = mensagem;
    mensagemElement.style.color = cor;
    contadorElement.textContent = `Tarefas adicionadas: ${contador}`;
}
function tarefaValida(tarefa){
    return tarefa.trim().length >= 5;
}