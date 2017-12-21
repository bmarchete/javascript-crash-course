/**
 * Author: Gabriel Coelho Soares
 * Name of Project: Pokedex
 * Date: 17-12-13
 */

/**
 * Variables already knowns
 */
 let buttonSearch = document.querySelector('#confirmSearch');
 let dataContainer = document.querySelector('#inputDataHere');
 

/**
 * Button Click Event
 */

 buttonSearch.addEventListener('click', ()=>{
    
    // Limpa qualquer coisa que estiver no container
    dataContainer.innerHTML = '';


    axios.get(`https://api.chucknorris.io/jokes/random`)
    .then(joke => {
        //console.log(response.data.value);

        const image = document.createElement('img');
        image.src = joke.data.icon_url;
        image.className = 'text-center img-fluid';
        image.style.width = '200px';
        image.style.height = '200px';


        const rukidding = document.createElement('h2');
        rukidding.innerHTML = joke.data.value;

        dataContainer.appendChild(image);
        dataContainer.appendChild(rukidding);
        // dataContainer.appendChild(image);
        
    })
    .catch(error => {
    })
 });