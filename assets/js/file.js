//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
function cambiaTitolo() {
    let newTitolo = document.getElementById ('titoloSito')
    newTitolo.innerText = 'Nuovo titolo'
}

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function coloreBg() {
    let newColor = document.getElementById ('cambiamoBack')
    newColor.style.backgroundColor = 'red' ;
}

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
function nuovoIndirizzo() {
    let newAddress = document.getElementById ('cambiamoIndirizzo')
    newAddress.innerText = 'Via delle Vie Bologna(BO)'
}

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

function aggiungiClasse() {
    let links = document.querySelectorAll('a');
    links.forEach(link => {
        link.classList.add('amazon-profile');
    })
}

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

function toggleImmagini() {
    immaginiVisibili = document.querySelectorAll('img')
    immaginiVisibili.forEach(img => {
        img.classList.toggle('visibilita');
    })
}


// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata







