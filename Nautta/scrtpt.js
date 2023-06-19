var btn = document.querySelector('.categorias')
var functions = document.querySelector('.functions')

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

btn.addEventListener('click', function() {

    if(beleza.style.display === 'block') {
    beleza.style.display = 'none';
    }
});



var beleza = window.document.querySelector('.beleza')
var infantil = window.document.querySelector('.infantil')
var masculino = window.document.querySelector('.masculino')
var feminino = window.document.querySelector('.feminino')
var esporte = window.document.querySelector('.esporte')

var n1 = window.document.querySelector('.n1') 
var n2 = window.document.querySelector('.n2')
var n3 = window.document.querySelector('.n3')
var n4 = window.document.querySelector('.n4')
var n5 = window.document.querySelector('.n5')

n1.addEventListener('mouseenter', entrar1)
n2.addEventListener('mouseenter', entrar2)
n3.addEventListener('mouseenter', entrar3)
n4.addEventListener('mouseenter', entrar4)
n5.addEventListener('mouseenter', entrar5)

beleza.addEventListener('mouseout', sair)
infantil.addEventListener('mouseout', sair)
masculino.addEventListener('mouseout', sair)
feminino.addEventListener('mouseout', sair)
esporte.addEventListener('mouseout', sair)

function entrar1() {
    beleza.style.display = 'block'

}

function entrar2() {
    infantl.style.display = 'block'
}

function entrar3() {
    masculino.style.display = 'block'
}

function entrar4() {
    feminino.style.display = 'block'
}

function entrar5() {
    esporte.style.display = 'block'
}