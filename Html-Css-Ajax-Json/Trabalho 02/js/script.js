/** 


function mostrarConteudo(){

}

function buscarConversa(){
    for(let i= 0; i <listaElementos.length; i++){
        $("#grupo").append( "")


    }
    
}

**/
 //Aqui a lista Hard Coded
 let listaElementos = [
    {nome: "Coelce, atendimento", id: "1", conversa:"Essa mensagem aqui","lastMessage":"Minha filha ta me levando a pagode mesmo é","pathToPhoto":"img/user.png"},
    {nome: "Dona Neide", id: "22", conversa:"Essa mensagem aqui","lastMessage":"Eu era uma atriz de novela","pathToPhoto":"img/user.png"},
    {nome: "Evangélicas", id: "32", conversa:"Essa mensagem aqui","lastMessage":"Almdeidinha: Amém irmãos","pathToPhoto":"img/user.png"},
   
    
];

function createChildren( object ) 
{
    let struct = `<div id="${object.id}" class="contato">
                        <img class="miniaturaContato" src="${object.pathToPhoto}">
                        <span class="nomeMiniaturaContato">${object.nome}</span>
                        <span class="ultimaMensagemMiniaturaContato">${object.lastMessage}</span>
                    </div>`;
    return struct;
}

function mountViewContacts()
{
    let elem = $("#navmain");
    $.each( listaElementos, function(  key, object ){
        let newObject = createChildren(object);
        elem.append( newObject )
    });
}


mountViewContacts();


//percorre a lista e adiciona a tag <li> pra cada elemento da lista usando a função append do Jquery

for(let i=0; i < listaElementos.length; i++){
    $("#grupos").append(
        "<li id="+listaElementos[i].id+">"+listaElementos[i].nome+"</li>"
    );

    //pega o elemento da lista que foi adicionado usando o id dele e coloca o evento de click
    $("#"+listaElementos[i].id).on("click", function(){
        //se o cara clicar no item da lista, ele vai mudar o nome do header
        $("#header").html(listaElementos[i].nome);
    });
}

