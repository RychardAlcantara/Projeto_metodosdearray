let livros = []
const endPontDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosAPI()


async function getBuscarLivrosAPI() {
    const res = await fetch(endPontDaApi)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLIvros(livrosComDesconto)
}

