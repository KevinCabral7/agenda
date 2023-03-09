const formContato = document.getElementById('form-contato')
let linhas = ''
formContato.addEventListener('submit', function(e){
    e.preventDefault()
    
    adicionaLinha()
    atualizaTabela()


function adicionaLinha(){
    let nomeContato = document.getElementById('nome-contato')
    let numeroContato = document.getElementById('numero-contato')
    let linha = '<tr>'
    linha += `<td>${nomeContato.value}</td>`
    linha += `<td>${numeroContato.value}</td>`
    linha += '</tr>'

    linhas += linha

    nomeContato.value =''
    numeroContato.value =''
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

})