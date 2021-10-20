const foto = [
    'img/01.JPG',
    'img/02.JPG',
    'img/03.JPG',
    'img/04.JPG',
    'img/05.JPG',
];

const titolo = [
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

const containerSinistra = document.getElementById("container-sx");
const containerDestra = document.getElementById("container-dx");

let indiceFoto = 0;

for (let f = 0; f < foto.length; f++) {
    const fotoSingola = foto[f];
    const titoloSingolo = titolo[f];
    const paragrafoSingolo = paragrafo[f];

    let classeActive = "";
    let classeActiveSx = "";

    if (f === indiceFoto) {
        classeActive = "active";
        classeActiveSx = "active";
    }
    const tagFoto = `<img class="${classeActive}" src="${fotoSingola}"></img>`;

    const tagFotoSx = `<div id="img-text-container" class="${classeActiveSx}">
                        <img src="${fotoSingola}">
                        <div id="container-text" class="position-absolute">
                        <h1>${titoloSingolo}</h1>
                        <p>${paragrafoSingolo}</p>
                        </div>
                        </div>`;

    containerSinistra.innerHTML += tagFotoSx;
    containerDestra.innerHTML += tagFoto;
}

const frecciaSu = document.getElementById("freccia-su");
const frecciaGiu = document.getElementById("freccia-giu");

frecciaSu.addEventListener("click", function () {
    const immagineDiDefault = containerSinistra.querySelector(".active");
    const immagineDiDefaultDestra = containerDestra.querySelector(".active");

    immagineDiDefault.classList.remove("active");
    immagineDiDefaultDestra.classList.remove("active");
    indiceFoto--;
    if (indiceFoto < 0) {
        indiceFoto = foto.length - 1;
    }
    const imgArrayFinto = containerSinistra.querySelectorAll("#img-text-container");
    const imgArrayFintoDestra = containerDestra.querySelectorAll("img");

    const nuovaImgActive = imgArrayFinto[indiceFoto];
    const nuovaImgActiveDestra = imgArrayFintoDestra[indiceFoto];

    nuovaImgActive.classList.add("active");
    nuovaImgActiveDestra.classList.add("active");
});

frecciaGiu.addEventListener("click", function () {
    const immagineDiDefault = containerSinistra.querySelector(".active");
    const immagineDiDefaultDestra = containerDestra.querySelector(".active");

    immagineDiDefault.classList.remove("active");
    immagineDiDefaultDestra.classList.remove("active");

    indiceFoto++;
    if (indiceFoto > foto.length - 1) {
        indiceFoto = 0;
    }
    const imgArrayFinto = containerSinistra.querySelectorAll("#img-text-container");
    const imgArrayFintoDestra = containerDestra.querySelectorAll("img");

    const nuovaImgActive = imgArrayFinto[indiceFoto];
    const nuovaImgActiveDestra = imgArrayFintoDestra[indiceFoto];

    nuovaImgActive.classList.add("active");
    nuovaImgActiveDestra.classList.add("active");

});
