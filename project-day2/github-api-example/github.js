let info = document.querySelector('#info');
let busca = document.querySelector('#busca');
let usuario = document.querySelector('#usuario');

busca.addEventListener('click', getUser);

function getUser(){

    info.innerHTML = '';

    axios.get(`https://api.github.com/users/${usuario.value}`)
    .then(function (response) {
        console.log(response);
        
        const nome = document.createElement('p');
        nome.innerHTML = response.data.name;
       
        const avatar = document.createElement('img');
        avatar.style.width = '200px';
        avatar.style.height = '200px';
        avatar.src = response.data.avatar_url;

        const localizacao = document.createElement('p');
        localizacao.innerHTML = `Mora em: ${response.data.location || 'Não informado'}` ;
        
        const bio = document.createElement('p');
        bio.innerHTML = `Biografia: ${response.data.bio || 'Não informado'}`;

        info.appendChild(nome);
        info.appendChild(avatar);
        info.appendChild(localizacao);
        info.appendChild(bio);




    })
    .catch(function (error) {
      console.log(error);

      const err = document.createElement('p');
      err.innerHTML = 'Nenhum dado foi encontrado'
      info.appendChild(err);
      
    });


}


