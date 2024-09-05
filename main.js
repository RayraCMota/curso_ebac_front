const alunos = ['Carlos'];


const avaliacao = alunos.map(function(itemAtual){
    itemAtual = {
        nome: itemAtual,
        nota : 6
    }
    return itemAtual;
})

avaliacao.push({
    nome: 'Gustavo',
    nota: 5
})

avaliacao.push({
    nome :'Rayra',
    nota: 8
})

avaliacao.push({
    nome: 'Diego',
    nota: 4
})
console.log(avaliacao)

const alunosAprovados = avaliacao.filter(function(item){
    return item.nota >= 6
})

console.log(alunosAprovados)