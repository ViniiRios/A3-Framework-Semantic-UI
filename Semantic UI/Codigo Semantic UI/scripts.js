// Exibir aba selecionada
function mostrarAba(abaId) {
    const abas = document.querySelectorAll('.ui.tab');
    abas.forEach(aba => aba.classList.remove('active'));
    document.getElementById(abaId).classList.add('active');
}

// Ajusta o tamanho do texto dentro dos limites
function ajustarTexto(acao) {
    const texto = document.getElementById('texto-exemplo');
    const tamanhoAtual = parseInt(window.getComputedStyle(texto).fontSize);
    const novoTamanho = acao === '+' ? tamanhoAtual + 2 : tamanhoAtual - 2;

    if (novoTamanho >= 12 && novoTamanho <= 32) {
        texto.style.fontSize = `${novoTamanho}px`;
    } else {
        alert('O tamanho do texto está no limite permitido.');
    }
}

// Ajusta o tamanho do ícone dentro dos limites
function ajustarIcone(acao) {
    const icone = document.getElementById('icone-exemplo');
    const larguraAtual = parseInt(window.getComputedStyle(icone).width);
    const novaLargura = acao === '+' ? larguraAtual + 10 : larguraAtual - 10;

    if (novaLargura >= 50 && novaLargura <= 200) {
        icone.style.width = `${novaLargura}px`;
    } else {
        alert('O tamanho do ícone está no limite permitido.');
    }
}