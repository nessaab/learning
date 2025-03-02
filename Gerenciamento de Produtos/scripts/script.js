// Variável global para armazenar a lista de convidados
let estoque = []

// Adicionando um produto ao estoque
function adicionarProduto(produto) {
    if (!produto.trim()) { 
        console.log("Nome inválido.")
        return
    }
    if (estoque.includes(produto)) {
        console.log(`${produto} - Este produto ja existe no estoque.`)
    } else {
        estoque.push(produto); // Adicionando o produto ao estoque
        console.log(`${produto} - foi adicionado ao estoque.`)

    }

}

function removerProduto(produto){
    const index = estoque.indexOf(produto)
    if (index === -1) { //utilizado para encontrar o índice do primeiro elemento que corresponda ao valor passado como argumento, o valor que está sendo procurado é a variável nomeAntigo indexOf() retorna o índice (posição) do primeiro elemento correspondente. O índice começa do valor 0, ou seja, a primeira posição da lista
        console.log(`${produto} produto não encontrado no estoque.`) // condiçao caso a posiçao seja -1
        return
    }
    estoque.splice(index, 1); // remove o index e o proximo elemento da lista
   console.log(`${produto} - produto removido do estoque.`)
}

function buscarProdutosPorTrecho(trecho){
    const produtosEncontrados = estoque.filter(produto => produto.includes(trecho))
    if (produtosEncontrados.length > 0) {
        console.log(`Produtos encontrados com o trecho "${trecho}":`, produtosEncontrados)
    } else {
        console.log(`Nenhum produto encontrado com o trecho "${trecho}".`)
    }
}

function listarProdutosOrdenados(){
    const produtosOrdenados = estoque.sort()
    console.log("Produtos ordenados em ordem alfábetica", produtosOrdenados)
}

adicionarProduto("Amaciante")
adicionarProduto("Sabao")
adicionarProduto("Bombril")
adicionarProduto("Alcool")
adicionarProduto("Detergente")
adicionarProduto("Veja")
adicionarProduto("Sabao")
adicionarProduto("Sabonete em barra")

removerProduto("Vanish")

buscarProdutosPorTrecho("Sab")

listarProdutosOrdenados ()