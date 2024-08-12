document.addEventListener('DOMContentLoaded', function(){
    const img = document.querySelector('#img-avatar');
    const name = document.querySelector('#name');
    const login = document.querySelector('#login');
    const repositorio = document.querySelector('#repositorio');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const link = document.querySelector('#link');

    
    fetch('https://api.github.com/users/RayraCMota')
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(json){
        name.innerText = json.name;
        login.innerText = json.login;
        seguindo.innerText = json.following;
        seguidores.innerText = json.followers;
        repositorio.innerText = json.public_repos;
        img.src = json.avatar_url;
        link.href = json.html_url;
    })


    .catch(function(erro) {
        alert("ocorreu um erro ao carregar as informações. Tente novamente mais tarde!")
    })
    .finally(function(){
        console.log("seu requerimento foi efetuado com sucesso!")
    })

    
})
    
