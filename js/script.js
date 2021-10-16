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

const paragrafo = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];



const immagineSinistra = document.getElementById("immagine-sinistra");
const immaginiDestra = document.getElementById("immagini-destra");
const testoSinistra = document.getElementById("contenitore-testo");

let indiceImmagine = 0;

for (let i = 0; i < immagini.length; i++) {
    const immagineCorrente = immagini[i];

    let classDaUsare = "";
    if (i === indiceImmagine) {
        classDaUsare = "active";
    }
    const tagImg = `<img class="${classDaUsare}" src="${immagineCorrente}" alt="immagine #${i}">`;
    immagineSinistra.innerHTML += tagImg;
    immaginiDestra.innerHTML += tagImg;
}

let indiceTitle = 0;

for (let t = 0; t < title.length; t++) {
    const titleCorrente = title[t];
    let classeTitle = "";
    if (t === indiceTitle) {
        classeTitle = "active";
    }

    const tagTitle = `<p class="${classeTitle}">${titleCorrente}</p>`;
    testoSinistra.innerHTML += tagTitle;
}

let indiceParagrafo = 0;
for (let ts = 0; ts < paragrafo.length; ts++) {
    const paragrafoCorrente = paragrafo[ts];
    let classeDelParagrafo = "";
    if (ts === indiceParagrafo) {
        classeDelParagrafo = "active";
    }
    const tagParagrafo = `<p class="${classeDelParagrafo}">${paragrafoCorrente}</p>`;
    testoSinistra.innerHTML += tagParagrafo;

}

// 6 Prendiamo i pulsanti su e giu
const frecciaSu = document.querySelector(".freccia-su");
const frecciaGiu = document.querySelector(".freccia-giu");

frecciaSu.addEventListener("click", function () {

    const immagineDiDefault = immagineSinistra.querySelector(".active");
    const immagineDiDefaultDestra = immaginiDestra.querySelector(".active");
    const testiDiDefault = testoSinistra.querySelector(".active");
    immagineDiDefault.classList.remove("active");
    immagineDiDefaultDestra.classList.remove("active");
    testiDiDefault.classList.remove("active");

    indiceImmagine--;

    if (indiceImmagine < 0) {
        indiceImmagine = immagini.length - 1;
    }

    const imgArrayFinto = immagineSinistra.querySelectorAll("img");
    const imgArrayFintoDestra = immaginiDestra.querySelectorAll("img");

    const nuovaImgActive = imgArrayFinto[indiceImmagine];
    const nuovaImgActiveDestra = imgArrayFintoDestra[indiceImmagine];
    nuovaImgActive.classList.add("active");
    nuovaImgActiveDestra.classList.add("active");
});

frecciaGiu.addEventListener("click", function () {
    const immagineDiDefault = immagineSinistra.querySelector(".active");
    const immagineDiDefaultDestra = immaginiDestra.querySelector(".active");
    immagineDiDefault.classList.remove("active");
    immagineDiDefaultDestra.classList.remove("active");
    indiceImmagine++;

    if (indiceImmagine > immagini.length - 1) {
        indiceImmagine = 0;
    }

    const imgArrayFinto = immagineSinistra.querySelectorAll("img");
    const imgArrayFintoDestra = immaginiDestra.querySelectorAll("img");

    const nuovaImgActive = imgArrayFinto[indiceImmagine];
    const nuovaImgActiveDestra = imgArrayFintoDestra[indiceImmagine];

    nuovaImgActive.classList.add("active");
    nuovaImgActiveDestra.classList.add("active");

});
