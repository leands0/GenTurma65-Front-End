let nome = document.getElementById("nome_char");
let qualidade = document.querySelector("#qualidade");

function aviso(){
    if(nome.value.toLowerCase() == "shikamaru" && qualidade.value.toLowerCase() == "não" || "nao")
        {alert("Acertou, Shikamaru é o melhor personagem e Naruto é ruim.")
        }
        else{
            alert("Errou, o melhor personagem é o Shikamaru e Naruto não é bom!")
        }
    
}