// Array com os filmes a serem exibidos.
let filmes = [
    {
        "nome": "Attack on Titan",
        "cover": "https://i.imgur.com/NqLkiRr.png",
        "autor": "Hajime Isayama",
        "publicacao": "2013"
    },
    {
        "nome": "Jujutsu Kaisen",
        "cover": "https://i.imgur.com/DEePWfz.png",
        "autor": "Gege Akutami",
        "publicacao": "2020"
    },
    {
        "nome": "Steins;Gate",
        "cover": "https://i.imgur.com/DAr61MB.png",
        "autor": "Hayashi Naotaka",
        "publicacao": "2011"
    },
    {
        "nome": "My Hero Academia",
        "cover": "https://i.imgur.com/4OfUyxO.png",
        "autor": "Kōhei Horikoshi",
        "publicacao": "2016"
    },
    {
        "nome": "Your Name",
        "cover": "https://i.imgur.com/JsS9KzU.png",
        "autor": "Makoto Shinkai",
        "publicacao": "2016"
    },
    {
        "nome": "Your Lie in April",
        "cover": "https://i.imgur.com/7kRxDtq.png",
        "autor": "Naoshi Arakawa",
        "publicacao": "2015"
    },
    {
        "nome": "Naruto Shippuden",
        "cover": "https://i.imgur.com/q3MtVEA.png",
        "autor": "Masashi Kishimoto",
        "publicacao": "2007"
    },
    {
        "nome": "Erased",
        "cover": "https://i.imgur.com/U8Lnqdp.png",
        "autor": "Kei Sanbe",
        "publicacao": "2016"
    },
    {
        "nome": "I want to eat your pancreas",
        "cover": "https://i.imgur.com/ckc2h2k.png",
        "autor": "Yoru Sumino",
        "publicacao": "2018"
    },
    {
        "nome": "Dr. Stone",
        "cover": "https://i.imgur.com/xbJsU6N.png",
        "autor": "Riichiro Inagaki",
        "publicacao": "2016"
    }
]

// Mostrar os animes na tela
setTimeout(function() {
    // Definir a div de destino dos filmes
    let div = document.querySelector('.movies')

    // Adicionar os filmes no Array definido anteriormente
    for (var i = 0 ; i < filmes.length ; i++) {
        div.innerHTML += `<div class="movie"><img src="${filmes[i].cover}" title="${filmes[i].nome}"></a></div>`
    }
}, 1);