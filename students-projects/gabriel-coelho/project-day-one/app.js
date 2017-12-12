/**
 * Author: Gabriel Coelho Soares
 * Project Name: Manipulação de DOM
 * Date: 17-12-12
 */

 /**
  * Snippet to change the Placeholder. @TODO - add more slots on Array
  */
  // Cria o array com as strings para por no placeholder
 let placeholderArray = [
     'eg. Parar de Fumar',
     'eg. Emagrecer',
     'eg. Ficar Rico',
     'eg. Viajar para Disney'
 ];

 // pega uma posição aleatória
 let randomPlaceHolder = placeholderArray[Math.floor(Math.random() * placeholderArray.length)];
 
 // seleciona o input
 let inputPlaceHolder = document.querySelector('#resolucaoText');

 // Altera, a partir do DOM, o placeholder com a posição aleatória do array.
 inputPlaceHolder.setAttribute('placeholder', `${randomPlaceHolder}`);

/**
 * Adding the item list
 */

 // Seleciona as chaves filhas do DOM (botões e a lista) 
 let addItemButton = document.querySelector('#botaoAdd');
 let removeItemButton = document.querySelector('#botaoRemove');
 let listaOL = document.querySelector('#listaDOM');

 //Variável "global" para adicionar novas metas - @TODO resetar a variável para sempre deixar em ordem
 var globalListItem = 0;

 //Evento de click no botão de adicionar meta
 addItemButton.addEventListener('click', function(){
    // Ao adicionar, acrescentamos +1 a variavel global !important: Ela que acusará as identificações para remoção de meta
    globalListItem++;

    // Seleciona o input e guarda em outra variável o valor do mesmo.
    let inputQuery = document.querySelector('#resolucaoText');
    let itemListValue = inputQuery.value;

    // Para testes, foi executado o console.log para testes
    // console.log(itemListValue);

    // Criamos o elemento LI
    let itemList = document.createElement(`LI`);

    // Adicionamos o valor para ele
    itemList.innerHTML = `${itemListValue} {${globalListItem}}`;

    // Adicionamos o atributo id com a variável global !important: é imprescindível que o id comece com letras
    itemList.setAttribute('id', `id${globalListItem}`);
    
    // Adiciona uma chave filha (LI) no DOM dentro da Lista (OL)
    listaOL.appendChild(itemList);

    inputQuery.setAttribute('value', ' ');
 });

/**
 * Removing a item
 */

 removeItemButton.addEventListener('click', function(){
    // Assim como na função de adicionar, nós selecionamos o input
    let inputQuery = document.querySelector('#resolucaoText');

    /*
        Neste caso, tudo o que vem do input é texto (string). 
        Sendo assim, nós precisamos alterar o value de string para int.
        Usamos então a função do proprio JS -- parseInt() --
        A função isANumber é explicada mais abaixo
    */
    let removeIndex = parseInt(isANumber(inputQuery.value));

    // Console.log para testes - verificando se o tipo da variável realmente se tornou int
    //console.log(typeof removeIndex);

    //Verificação para somente executar a remoção caso o que estiver no input seja número
    if(typeof removeIndex != 'number'){
        alert('Digite apenas o <strong>número</strong> da meta');
    }else{

        if(confirm(`Você tem certeza que deseja excluir o item ${removeIndex}?`) == true){
            let itemListRemove = document.querySelector(`#id${removeIndex}`);
            // console.log(itemListRemove);
            listaOL.removeChild(itemListRemove);
        }
    }
    inputQuery.setAttribute('value', ' ');
 })

 /**
  * isANumber is a function only for removeButton.
  * @param {*it's the text in the input} number 
  */

 //Esta função divide qualquer texto que estiver no input e passado como o parâmetro number.
 //Assim, dividido, podemos tirar qualquer caracter que nao seja numero. 
 function isANumber(number){
    // a função split do JS divide em um array a string.
    numberSplitted = number.split("");
    console.log(numberSplitted);

    //a Variável stringNumber será a variável final. criada para armazenar o conteúdo final dos números
    let stringNumber = '';

    //Percorrerá o array da string
    for(let i = 0; i < numberSplitted.length; i++){
        //verificará de 0 a 9 tudo o que for número
        for(let j = 0; j < 10; j++){

            if(numberSplitted[i] == j){
                //sendo um número, armazenamos na variável a ser retornada
                stringNumber += numberSplitted[i];
                //saimos deste for, para rodar a nova posição do array
                j = 10;
            }
            else{
                //Printa no console que não é um número. Se for, está no aguardo para ser checado - only for devs
                console.log(`${numberSplitted[i]} is not a number. if it is, probably is awaiting to be counted`);
            }

        }

    }

    //console.log(stringNumber);

    //Retorna a variável para utilizar o parseInt();
    return stringNumber;
 }