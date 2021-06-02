function pagina_de_cadastro(form){
    form.nome.value = form.nome.value.toLowerCase()
    form.senha.value = form.senha.value.toLowerCase()




    
}






function index(form){

form.nome.value = form.nome.value.toLowerCase()
form.senha.value = form.senha.value.toLowerCase()

if (form.nome.value == "allyson" && form.senha.value == "senha123" || form.nome.value == "allysoant3" && form.senha.value == "senha12345" || form.nome.value == "all3" && form.senha.value == "senha12" || form.nome.value == "allysonant" && form.senha.value == "senha54321")
{
    location = "pagina_de_acesso.html"
}
else {
    form.nome.value !== form.nome.value
    form.senha.value !== form.senha.value
    alert("dados incorretos")
}
}