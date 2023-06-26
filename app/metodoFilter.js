const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))


function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? 
    filtrarDisponibilidade() : filtrarPorCategoria(categoria)
    
    exibirLIvros(livrosFiltrados)
    if(categoria == 'disponivel') {
        const valorTotal = calcValorTotalLivrosDisponiveis(livrosFiltrados)

        exibirValorTotalNaTela(valorTotal)
    }
    

}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalNaTela(valorTotal) {
    elementoValorTotalDisponivel.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}
