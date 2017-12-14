let busca = document.querySelector('#busca');
let artist = document.querySelector('#artist');
let song = document.querySelector('#song');
let lyrics = document.querySelector('#lyrics');
let table = document.querySelector('#table');

busca.addEventListener('click', getMusic);

function getMusic(){

    axios.get(`https://api.lyrics.ovh/v1/${artist.value}/${song.value}`)
    .then(function (response) {
        console.log(response);
        //lyrics.innerHTML = response.data.lyrics.replace(/\n/g, "<br />");;
        
        let song = response.data.lyrics.split('\n');

        song.forEach(element => {
            let tr = `<tr><td>${element}</td></tr>`

            table.innerHTML += tr;

        });
        console.log(song);
        

      
    })
    .catch(function (error) {
        lyrics.innerHTML = 'Nenhuma música encontrada'
    });


}


