let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeEl = gameClicado.querySelector('.dashboard__item__name');
    let nome = nomeEl ? nomeEl.textContent.trim() : 'este jogo';

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (!confirm(`Você tem certeza que deseja devolver o jogo ${nome}?`)) {
            return;
        }
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--;
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        jogosAlugados++;
    }

}

