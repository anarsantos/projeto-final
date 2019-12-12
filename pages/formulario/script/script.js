const nome = document.getElementById("cNome")
const email = document.getElementById("cEmail")
const pessoa = document.getElementById("cPessoa")
const disciplina = document.getElementById("cDisciplina")
const senha = document.getElementById("cSenha")
const confirmar = document.getElementById("cConfirmar")



function Enviar() {
    if (nome.value=='' || email.value=='' || pessoa.value=='' || disciplina.value=='' || senha.value=='') {
        alert("Preencha todos os dados")
    }else {
        alert("Cadastro enviado com sucesso!")
        nome.value = ''
        email.value = ''
        pessoa.value = ''
        disciplina.value = ''
        senha.value = ''
    }
    
}

