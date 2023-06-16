var btn = document.querySelector('.categorias')
var functions = document.querySelector('.functions')

var burguer = document.querySelector('.burguer')
var close = document.querySelector('.close')

btn.addEventListener('click', function() {

    if(functions.style.display === 'block') {
    functions.style.display = 'none';
    } else {
        functions.style.display = 'block';
    }

    if(feminino.style.display === 'block') {
    feminino.style.display = 'none';
    }
});



var feminino = window.document.querySelector('.feminino')
var n4 = window.document.querySelector
('.n4')
var fem = window.document.querySelector('.fem')

n4.addEventListener('mouseenter', entrar)
feminino.addEventListener('mouseout', sair)

function entrar() {
    feminino.style.display = 'block'
    
}

function sair() {
    feminino.style.display = 'block'

}