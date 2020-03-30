// Requisição Geral do Elemento
$.ajax({
    type: "POST",
    url: "https://jsonplaceholder.typicode.com",
    data:{
        user:"Joao",
        senha: "1234",
        success: function(data){

        }

    }
})

let user = {
    nome = "Joao",
    senha = "A",
}