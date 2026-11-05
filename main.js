// 1 passo - captura o formulario no html 

const formulario= document.getElementById("formulario")


formulario.addEventListener("submit",function(event){
    
    event.preventDefault()

    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const telefone = document.getElementById("telefone").value
    const cargo = document.getElementById("cargo").value
    const mensagem = document.getElementById("mensagem").value

if(telefone.trim() === ""){
    alert("Digite seu nome")
    return
}


const textowhatsapp =
`
Ola! gostaria de me candidatar a essa vaga
Nome:${nome}
e-mail:${email}
telefone:${telefone}
cargo:${cargo}
Obervações:${mensagem}
`

const mensagemCodificada = encodeURIComponent(textowhatsapp)

const numerowhatsapp = 5511960689078

const link = "https://wa.me/" + numerowhatsapp + "?text=" + mensagemCodificada

window.location.href = link






})
