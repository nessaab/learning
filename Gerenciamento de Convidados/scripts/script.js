// Variável global para armazenar a lista de convidados
let listaConvidados = []

// Adicionando um convidado à lista
function adicionarConvidado(nome) {
    if (!nome.trim()) { // 
        console.log("Nome inválido.")
        return
    }
    listaConvidados.push(nome); // Adicionando o convidado a lista
    console.log(`${nome} foi adicionado à lista.`);
}

// Função para remover um convidado da lista
function removerConvidado(nome) {
    const index = listaConvidados.indexOf(nome)
    if (index === -1) { //utilizado para encontrar o índice do primeiro elemento que corresponda ao valor passado como argumento, o valor que está sendo procurado é a variável nomeAntigo indexOf() retorna o índice (posição) do primeiro elemento correspondente. O índice começa do valor 0, ou seja, a primeira posição da lista
        console.log(`${nome} não encontrado na lista.`) // condiçao caso a posiçao seja -1
        return
    }
    listaConvidados.splice(index, 1); // remove o index e o proximo elemento da lista
   console.log(`${nome} foi removido da lista.`)
}


// Função para editar o nome de um convidado
function editarConvidado(nomeAntigo, nomeNovo) {
    if (!nomeNovo.trim()) {
        console.log("Nome inválido.");
        return
    }

    const index = listaConvidados.indexOf(nomeAntigo);
    if (index === -1) {  
        console.log(`${nomeAntigo} não encontrado na lista.`)
        return
    }
    listaConvidados[index] = nomeNovo
    console.log(`${nomeAntigo} foi substituído por ${nomeNovo}.`)
}

// Função para exibir todos os convidados
function exibirConvidados() {
    if (listaConvidados.length === 0) { //checando se a lista está vazia
        console.log("A lista de convidados está vazia.")
        return
    }
    console.log("Lista de Convidados:");
    listaConvidados.forEach((convidado, index) => { // pega o index e icrementa
        console.log(`${index + 1}. ${convidado}`) // para iterar sobre cada elemento da lista
    });
}

// Função para contar o número total de convidados
function contarConvidados() {
    console.log(`Total de convidados: ${listaConvidados.length}`)
}

// Função para limpar a lista de convidados
function limparLista() {
    listaConvidados = []; // listaConvidados é uma variável (presumivelmente já declarada anteriormente no código) e está sendo redefinida como um array vazio ([]).
    console.log("A lista foi limpa.")
}

// Função para ordenar a lista de convidados
function ordenarConvidados() {
    listaConvidados.sort()
    console.log("A lista de convidados foi ordenada.")
}

adicionarConvidado(" ")
adicionarConvidado("Maria")
adicionarConvidado("Henrique")
adicionarConvidado("Vanessa")
adicionarConvidado("Fernanda")

exibirConvidados()

contarConvidados()

removerConvidado("Henrique")
exibirConvidados()

editarConvidado("Maria", "Ana")
exibirConvidados()

ordenarConvidados()
exibirConvidados()

limparLista()
exibirConvidados()
