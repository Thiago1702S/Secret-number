let numeroSecreto;
let tentativas;

const inputChute = document.getElementById('chute');
const botaoChutar = document.getElementById('botaoChutar');
const botaoReiniciar = document.getElementById('botaoReiniciar');
const mensagem = document.getElementById('mensagem');
const textoTentativas = document.getElementById('tentativas');

function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    tentativas = 0;

    mensagem.textContent = 'Faça sua primeira tentativa.';
    textoTentativas.textContent = 'Tentativas: 0';

    inputChute.value = '';
    inputChute.disabled = false;
    botaoChutar.disabled = false;

    botaoReiniciar.classList.add('oculto');

    inputChute.focus();
}

function verificarChute() {
    const valorDigitado = inputChute.value.trim();

    // Campo vazio
    if (valorDigitado === '') {
        mensagem.textContent = 'Digite um número entre 1 e 10.';
        return;
    }

    const chute = Number(valorDigitado);

    // Valor inválido
    if (!Number.isInteger(chute) || chute < 1 || chute > 10) {
        mensagem.textContent = 'Valor inválido. Digite um número inteiro entre 1 e 10.';
        inputChute.value = '';
        inputChute.focus();
        return;
    }

    tentativas++;
    textoTentativas.textContent = `Tentativas: ${tentativas}`;

    if (chute === numeroSecreto) {
        const palavraTentativa = tentativas === 1 ? 'tentativa' : 'tentativas';

        mensagem.textContent =
            `Você acertou! O número secreto era ${numeroSecreto}. Você precisou de ${tentativas} ${palavraTentativa}.`;

        inputChute.disabled = true;
        botaoChutar.disabled = true;

        botaoReiniciar.classList.remove('oculto');

        return;
    }

    if (chute > numeroSecreto) {
        mensagem.textContent = 'O número secreto é menor.';
    } else {
        mensagem.textContent = 'O número secreto é maior.';
    }

    inputChute.value = '';
    inputChute.focus();
}

botaoChutar.addEventListener('click', verificarChute);

inputChute.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        verificarChute();
    }
});

botaoReiniciar.addEventListener('click', iniciarJogo);

iniciarJogo();
