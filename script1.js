/*====================================================
            CAROUSEL DES MARQUES
====================================================*/

const brandList = document.querySelector(".brand-list");
const brandBoxes = document.querySelectorAll(".brand-box");
const btnNext = document.querySelector(".brand-right");
const btnPrev = document.querySelector(".brand-left");

let currentPosition = 0;

/*==================================
        Nombre d'éléments visibles
===================================*/

function getVisibleItems() {

    if (window.innerWidth <= 576) {

        return 1;

    }

    if (window.innerWidth <= 768) {

        return 2;

    }

    if (window.innerWidth <= 992) {

        return 4;

    }

    return 6;

}

/*==================================
        Largeur d'un élément
===================================*/

function getItemWidth() {

    const gap = 20;

    return brandBoxes[0].offsetWidth + gap;

}

/*==================================
        Déplacement
===================================*/

function moveCarousel() {

    brandList.style.transform =
        `translateX(-${currentPosition * getItemWidth()}px)`;

}

/*==================================
        Bouton suivant
===================================*/

btnNext.addEventListener("click", () => {

    const maxPosition =
        brandBoxes.length - getVisibleItems();

    if (currentPosition < maxPosition) {

        currentPosition++;

        moveCarousel();

    }

});

/*==================================
        Bouton précédent
===================================*/

btnPrev.addEventListener("click", () => {

    if (currentPosition > 0) {

        currentPosition--;

        moveCarousel();

    }

});

/*==================================
        Responsive
===================================*/

window.addEventListener("resize", () => {

    const maxPosition =
        brandBoxes.length - getVisibleItems();

    if (currentPosition > maxPosition) {

        currentPosition = maxPosition;

    }

    if (currentPosition < 0) {

        currentPosition = 0;

    }

    moveCarousel();

});