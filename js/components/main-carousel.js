/* const btnLeft = window.document.querySelector(".button-arrow.-left");
const btnRight = window.document.querySelector(".button-arrow.-right");
const elements = window.document.querySelector(".elements");
let pixels = 0;

btnRight.addEventListener("click", function() {

    pixels += 300;

    elements.style = `transform: translateX(${pixels}px)`;

    if (pixels >= 1500) {
        pixels = -300;
    }
});

btnLeft.addEventListener("click", function() {

    pixels -= 300;

    elements.style = `transform: translateX(${pixels}px)`;

    if (pixels <= -1500) {
        pixels = 300;
    }
}); */