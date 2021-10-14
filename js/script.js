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

//Prima si seleziona l'elemento html su js per poter aggiungere html con create o con inner
//poi creo il ciclo per prendere ogni singolo elemento dell'array
//creo un tag da inserire nell'html in cui sto lavorando
//inserisco il tag

const imageSelected = document.querySelector(".selected-image-container");
const imagesContainer = document.querySelector(".images-slide-container");

let imgCurrent = 4;

for (let i = 0; i < immagini.length; i++) {
    let imgSelected = immagini[i];
    const tagImg = `<img class="single-image" src="${imgSelected}" alt="immagine #${i + 1}">`;
    imagesContainer.innerHTML += tagImg;

    let classeDaUsare = "";
    if (i === imgSelected) {
        classeDaUsare = "active";
    }

}
const selectedThumb = document.querySelectorAll(".single-image");
console.log(selectedThumb);

selectedThumb[imgCurrent].classList.add("active");
const upArrow = document.getElementById("up-arrow");
// console.log(upArrow);
upArrow.addEventListener("click", function () {
    selectedThumb[imgCurrent].classList.remove("active");
    imgCurrent--;
    selectedThumb[imgCurrent].classList.add("active");
});

