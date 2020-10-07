let btnS = document.getElementsByClassName("btnCarousel")[0];
let arrBtnS = Array.from(btnS.children);
let carousel1 = document.getElementById("carousel1");
let carousel2 = document.getElementById("carousel2");
let carousel3 = document.getElementById("carousel3");
let carousel4 = document.getElementById("carousel4");
// carousel2.classList.add("base");

btnS.addEventListener("click", carousel);
function carousel(e) {
    if (e.target.nodeName == "BUTTON") {
        if (e.target == arrBtnS[0]) {
            hideCarousel();
            removeClass();
            carousel4.classList.add("left");
            carousel1.classList.add("right");
            carousel4.toggleAttribute("hidden", false);
            carousel1.toggleAttribute("hidden", false);
            setTimeout(() => {
                carousel4.toggleAttribute("hidden", true);
            }, 1000);
        }
        else if (e.target == arrBtnS[1]) {
            hideCarousel();
            removeClass();
            carousel2.classList.add("right");
            carousel1.classList.add("left");
            carousel2.toggleAttribute("hidden", false);
            carousel1.toggleAttribute("hidden", false);
            setTimeout(() => {
                carousel1.toggleAttribute("hidden", true);
            }, 1000);
        }
        else if (e.target == arrBtnS[2]) {
            hideCarousel();
            removeClass();
            carousel3.classList.add("right");
            carousel2.classList.add("left");
            carousel3.toggleAttribute("hidden", false);
            carousel2.toggleAttribute("hidden", false);
            setTimeout(() => {
                carousel2.toggleAttribute("hidden", true);
            }, 1000);
        }
        else if (e.target == arrBtnS[3]) {
            hideCarousel();
            removeClass();
            carousel4.classList.add("right");
            carousel3.classList.add("left");
            carousel4.toggleAttribute("hidden", false);
            carousel3.toggleAttribute("hidden", false);
            setTimeout(() => {
                carousel3.toggleAttribute("hidden", true);
            }, 1000);
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


// i++ => slide left
// i-- => slide right

// Move auto
// setInterval(() => {

// }, 1000);
