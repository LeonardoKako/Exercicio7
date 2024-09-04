const form = document.querySelector('.form')

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    AddLinha()
})
let linhas = ''
function AddLinha() {
    let nome = document.querySelector('.nome')
    let telefone = document.querySelector('.telefone')
    let tbody = document.querySelector('.tbody')
    

    let linha = '<tr>'
    linha += `<td>${nome.value}</td>`
    linha += `<td class="border-left">${telefone.value}</td>`
    linha += '<tr>'
    linhas += linha

    tbody.innerHTML = linhas

    nome.value = ''
    telefone.value = ''
}