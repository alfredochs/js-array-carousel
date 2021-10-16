const immagini = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];


// 1. Devo prendere l'elemento in cui devo lavorare
const immagineSinistra = document.getElementById("immagine-sinistra");
const immaginiDestra = document.getElementById("immagini-destra");
// 11 Dichiariamo l'indice che vogliamo indicare per poter 
// usarlo anche dopo il ciclo for
let indiceImmagine = 0;
// 2.Creare ciclo for per far scorrere l'array delle immagini
for (let i = 0; i < immagini.length; i++) {
    // 2.1 Ad ogni ciclo devo prendere un'immagine dopo l'altra
    const immagineCorrente = immagini[i];
    // 3.1 Creo il tag Img
    // 4.1 Inserisco la classe active per togliere l'opacita
    // creata col css
    // 4.2 la inserisco nella prima immagine dichiarandola 
    // se effettivamente l img con indice 0 cioè la prima

    // 5 per fare il ciclo dell'img devo prima dichiarare una
    // variabile per poter usarla anche dopol 'if
    // altrimenti mi funziona solo dentro il ciclo
    // la dichiaro con let perchè il suo valore dopo il ciclo
    // sarà un altro
    // 5.1 Do un valore vuoto perchè dopo l'if cambierà il suo valore
    let classDaUsare = "";
    if (i === indiceImmagine) {
        classDaUsare = "active";
        // 5.2 poi inserisco questa classe nella stringa che va 
        // al DOM
        // 5.3 Questo è soltanto per mettere l'immagine di default
        // cioè l'img con indice 0
    }
    const tagImg = `<img class="${classDaUsare}" src="${immagineCorrente}" alt="immagine #${i}">`;
    // 3.2Inserire nel DOM il tagImg 
    immagineSinistra.innerHTML += tagImg;
    // qui sotto inserisco le stesse immagini su un altro contenitore
    immaginiDestra.innerHTML += tagImg;
}
// 4 una volta inserite le immagini devo nasconderle 
// 4 e mostrare solo una di default cioè la prima 
// ****************************************

// 6 Prendiamo i pulsanti su e giu
const frecciaSu = document.querySelector(".freccia-su");
const frecciaGiu = document.querySelector(".freccia-giu");
// 7 per ogni freccia creiamo un evento
frecciaSu.addEventListener("click", function () {
    // 8 prendiamo l'immagine da cui vogliamo partire ovvero
    // quella di default che abbiamo aggiunto la classe active
    const immagineDiDefault = document.querySelector(".active");
    //9 dopo aver selezionato l'immagine togliamo la 
    // classe active visto che vogliamo nascondere l'immagine
    immagineDiDefault.classList.remove("active");
    // 10 Ora bisogna indicare qual'è l'elemento precedente 
    // o successivo con cui dobbiamo andare a lavorare,
    //  non possiamo prendere l'elemto i del ciclo precedente
    //  perchè un elemento dentro un ciclo non può uscire 
    // del ciclo a meno che lo dichiariamo prima
    // Quindi si va sul ciclo a cambiare l'indice da cui vogliamo partire

    //12 avendo già rimosso la classe active,
    //  ora dobbiamo selezione l'elemento in questo caso
    //   "precedente" sul quale dobbiamo lavorare

    indiceImmagine--;
    // 13 adesso devo trovare l'img che corrisponde 
    // all'indice che ho appena decrementato

    // 17
    if (indiceImmagine < 0) {
        indiceImmagine = immagini.length - 1;
    }
    console.log(indiceImmagine);


    // ***************************************
    // const nuovaImgActive = immagineSinistra.querySelector(`img:nth-child(${indiceImmagine + 1})`);
    // // metto il +1 perchè l'indice parte da 0 incece nth child parte da 1
    // nuovaImgActive.classList.add("active");
    // ***************************************

    // 13 utilizzo il querySelectoAll 
    // (dentro il contenitore delle mie immagini)
    // per "creare o copiare"
    //  un nuovo "array" contenenti tutte le immagini 
    //  dell'array iniziale
    // 14 una volta creata la costante per indicare l'array finto
    const imgArrayFinto = immagineSinistra.querySelectorAll("img");
    // 15 prendiamo gli elementi all'interno di questo array 
    // che si selezionano con[]
    const nuovaImgActive = imgArrayFinto[indiceImmagine];
    // 16 e a questa nuovaImgActive andiamo ad applicare la classe active
    nuovaImgActive.classList.add("active");
});

// In questa sezione lo stesso solo che aumentando l'indice con ++
frecciaGiu.addEventListener("click", function () {
    const immagineDiDefault = document.querySelector(".active");
    immagineDiDefault.classList.remove("active");
    indiceImmagine++;
    // 17 se il nuvo indice è maggiore dell'ultimo elemento
    //  dell'array rappresentato con nomearray.lenght
    //  (-1 aggiungo meno uno perche la lunghezza parte da 1)
    // sovvrascriviamo l'indice dell'immagine

    if (indiceImmagine > immagini.length - 1) {
        indiceImmagine = 0;
    }
    console.log(indiceImmagine);


    const imgArrayFinto = immagineSinistra.querySelectorAll("img");
    const nuovaImgActive = imgArrayFinto[indiceImmagine];
    nuovaImgActive.classList.add("active");

});



/*
Prendere il contenitore di destra
prendere ogni singola  immagine in base all'index e aggiungere la classe active
*/