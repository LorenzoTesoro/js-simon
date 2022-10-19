// 1. Visualizzare in pagina 5 numeri casuali - mathRandom()
    // 1.1. Funzione per restituire n. casuali in un range(min, max)
    // 1.2 while loop - finchè la lunghezza dell'array è < 5, cicla. Ottenuti i numeri, stampali a schermo
    /* get n random numbers */

    const ulElement = document.querySelector("ul"); // seleziono elemento della dom in cui stampare i n.

    /* generate n random numbers from min to max */
    function getNRandomNumbers (from, to){

        function getRandomNumbers(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
          }
        const NumbersList = [];
        const n = 5; // change this to set while condition

        while(NumbersList.length < n){
            const number = getRandomNumbers(from,to); // genero n casuale
            NumbersList.push(number); // pusho il numero nell'array
            ulElement.innerHTML += `<li>${number}</li>`; // stampo a schermo
        }
        return NumbersList
    }

    const randomNumbers = getNRandomNumbers(1,100);

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

    setTimeout( function(){
        const prompts = []; 
        // ciclo fino a 5 per generare i 5 prompt che salvo nell'array
        const n = 5 // n. massimo tentativi
        let counter = 0; // n. indovinati
        while(prompts.length < n){
            const singlePrompt = Number(prompt("Inserisci un numero")) // genero un prompt
            prompts.push(singlePrompt); // pusho il numero nell'array
        }
 
        setTimeout(function (){
        // ciclo all'interno dei numeri random e li confronto con i valori inseriti dall'utente
        for(let i = 0; i < randomNumbers.length; i++){
                const randomNumber = randomNumbers[i];
                for(let i = 0; i < prompts.length; i++){
                    const userNumber = prompts[i];
                    if(randomNumber == userNumber){
                        document.querySelector(".result > ul").innerHTML += `<li>${randomNumber}</li>`;
                        counter++
                    }
                }
        }
            document.querySelector("h2").innerHTML = `Numeri individuati: ${counter} su ${n}`;
        }, 1000);
        
    }, 4000);  

    


