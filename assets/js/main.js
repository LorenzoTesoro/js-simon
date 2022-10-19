/* Consegna:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// 1. Visualizzare in pagina 5 numeri casuali - mathRandom()
    // 1.1. Funzione per restituire n. casuali in un range(min, max)
    // 1.2 while loop - finchè la lunghezza dell'array è < 5, cicla. Ottenuti i numeri, stampali a schermo
    /* get n random numbers */

    const ulElement = document.querySelector("ul"); // seleziono elemento della dom in cui stampare i n.

    function getNRandomNumbers (min, max){

        function getRandomNumbers(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
          }
        const randomNumbers = [];

        const n = 5; // change this to set while condition

        while(randomNumbers.length < n){
            const number = getRandomNumbers(1,100); // genero n casuale
            randomNumbers.push(number); // pusho il numero nell'array
            ulElement.innerHTML += `<li>${number}</li>`; // stampo a schermo
        }
    }

    getNRandomNumbers(1,100);

// 2. Timer di 30 secondi, dopodichè i numeri scompaiono - setTimeout()
    // 2.1 - Classe css d-none
    // 2.2 - dopo 30s applichi la classe a ul
    const hideUlElement = function(){
        ulElement.classList.add("d_none");
    }
    setTimeout(hideUlElement, 3000);

// 3. L'utente deve inserire i numeri che ha visto - prompt() * 5
    // 3.1 - creo una funzione per stampare i 5 prompt
    // 3.2 - setto un TimeOut 1s dopo la fine di quello precedente

    function promptGenerator(){
    
    const prompts = [];
    const n = 5

        while(prompts.length < n){
            const singlePrompt = Number(prompt("Inserisci un numero")) // genero un prompt
            prompts.push(singlePrompt); // pusho il numero nell'array
        }

    }

    setTimeout(promptGenerator, 4000);

// 4. Confronto tra numeri comparsi a schermo e numeri inseriti dall'utente - if() e ciclo for
