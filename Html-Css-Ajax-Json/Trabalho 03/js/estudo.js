function criarpost(comment){
    // Gerando div mãe
    
    // Gerando Div P
    let post = $("<div></div>").addClass("post").append("<p></p>").text(comment);
    // Adicionando a lista de class no post
    // Adicionando a lista de class no comment

    
    // Aplicando no código
    $(".container").append(post);

}


criarpost(".formulario");