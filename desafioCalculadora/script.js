const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const operacaoButtons = document.querySelectorAll('.operator');
const limparButton = document.getElementById('limpar');

limparButton.addEventListener('click', () => {
    display.value = '0';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const valor = button.dataset.value;
        if (valor !== undefined) {
            if (display.value === '0') {
                display.value = valor;
            } else {
                display.value += valor;
            }
        }
    });
});

document.getElementById('calcular').addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Erro';
    }
});