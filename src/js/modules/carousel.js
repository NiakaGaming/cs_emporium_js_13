let btnS = document.getElementsByClassName("btnCarousel")[0];
let arrBtnS = Array.from(btnS.children);
let carousel1 = document.getElementById("carousel1");
let carousel2 = document.getElementById("carousel2");
let carousel3 = document.getElementById("carousel3");
let carousel4 = document.getElementById("carousel4");

btnS.addEventListener("click", carousel);
function carousel(e) {
    if (e.target.nodeName == "BUTTON") {
        if (e.target == arrBtnS[0]) {
            hideCarousel();
            removeClass();
            move(carousel4, carousel1);
        }
        else if (e.target == arrBtnS[1]) {
            hideCarousel();
            removeClass();
            move(carousel1, carousel2);
        }
        else if (e.target == arrBtnS[2]) {
            hideCarousel();
            removeClass();
            move(carousel2, carousel3);
        }
        else if (e.target == arrBtnS[3]) {
            hideCarousel();
            removeClass();
            move(carousel3, carousel4);
        }
    }
}
function hideCarousel() {
    carousel1.toggleAttribute("hidden", true);
    carousel2.toggleAttribute("hidden", true);
    carousel3.toggleAttribute("hidden", true);
    carousel4.toggleAttribute("hidden", true);
}
function removeClass() {
    // carousel1
    carousel1.classList.remove("right");
    carousel1.classList.remove("left");
    // carousel2
    carousel2.classList.remove("right");
    carousel2.classList.remove("left");
    // carousel3
    carousel3.classList.remove("right");
    carousel3.classList.remove("left");
    // carousel4
    carousel4.classList.remove("right");
    carousel4.classList.remove("left");
}
function move(carou1, carou2) {
    carou1.classList.add("left");
    carou2.classList.add("right");
    carou1.toggleAttribute("hidden", false);
    carou2.toggleAttribute("hidden", false);
    setTimeout(() => {
        carou1.toggleAttribute("hidden", true);
        removeClass();
    }, 1000);
}


// i++ => slide left
// i-- => slide right

// Move auto
// setInterval(() => {

// }, 1000);
