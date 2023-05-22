const nombre = document.getElementById("name")
const email = document.getElementById("email")
const consulta = document.getElementById("consulta")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let regExnombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
    let regExEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
    let entrar = false
    parrafo.innerHTML = ""
   if(nombre.value.length <2){
     warnings += 'El nombre no es valido <br>'
      entrar = true
   }
   if(!regExEmail.test(email.value)){
       warnings += 'El email no es valido <br>'
       entrar = true
    }

   if(consulta.value.length <5){
    warnings += 'La consulta debe superar los 5 caracteres <br>'
    entrar = true
   }
   if(entrar){
       parrafo.innerHTML = warnings
   }else{
       parrafo.innerHTMl = "Enviado"
   }
})

const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response =  await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        this.reset()
    alert('Formulario enviado')
    }
}
