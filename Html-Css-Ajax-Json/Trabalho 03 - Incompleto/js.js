function postthis(){
    let xml = new XMLHttpRequest();
    let url = "https://rem-rest-api.herokuapp.com/api/users";
    xml.onreadystatechange = function(){
        if(xml.readyState == 4)
        console.log("pronto")
    }

    xml.open("POST",url, true);
    xml.setRequestHeader("Content-type,aplication/json")
    
    let user={
        nome:"Marcelo",
        Senha: 1234
    }

    xml.send(JSON.stringify)
}