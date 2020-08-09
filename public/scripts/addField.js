// Procurar o botao
document.querySelector("#add-time")
.addEventListener('click', cloneField)
// quando clicar no botao

// executar uma acao
function cloneField() {
    //duplicar  campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean :true ou false
    
    // limpar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    fields[0].value = ""
    fields[1].value = ""

   //colocar na pagina: onde??
   document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
