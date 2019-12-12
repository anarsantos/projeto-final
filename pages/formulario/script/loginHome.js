const inputEmail = document.getElementById("input-email")
const inputSenha = document.getElementById("input-senha")
const btn = document.getElementById('btn')

btn.addEventListener("click", function(){
    if(inputEmail.value == '' || inputSenha.value == ''){
        alert("Precisa preencher todos os campos!")
    }else {
        alert("Login realizado com sucesso!")
        inputEmail.value = ''
        inputSenha.value = ''
    }
})
