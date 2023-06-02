// contador inicial
var count = 0

//seleciona o valor do botão
const value = document.getElementById('value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList
        if(styles.contains('subtrai')) {
            count--
        }
        else if(styles.contains('soma')) {
            count++
        } else {
            count = 0
        }

        if(count > 0){
            value.style.color = "#34A853"
        }
        else if(count < 0){
            value.style.color = "#EA4335"
        } else {
            value.style.color = "#333"
        }

        value.textContent = count
    })
})