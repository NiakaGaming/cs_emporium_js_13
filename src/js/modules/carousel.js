let btnS = document.getElementsByClassName("btnCarousel")[0];
let arrBtnS = Array.from(btnS.children);
let carousel1 = document.getElementById("carousel1");
let carousel2 = document.getElementById("carousel2");
// carousel2.classList.add("base");

btnS.addEventListener("click", carousel);
function carousel(e) {
    if (e.target.nodeName == "BUTTON") {
        if (e.target == arrBtnS[0]) {
            hideCarousel();
            carousel1.toggleAttribute("hidden", false);
            carousel1.classList.add("left");
            carousel2.classList.remove("right");
        }
        else if (e.target == arrBtnS[1]) {
            carousel1.classList.add("right");
            carousel2.classList.add("left");
            // hideCarousel();
            carousel2.toggleAttribute("hidden", false);
            setTimeout(() => {
                carousel1.toggleAttribute("hidden", true);
            }, 1000);
        }
        else if (e.target == arrBtnS[2]) {
            hideCarousel();
        }
        else if (e.target == arrBtnS[3]) {
            hideCarousel();
        }
    }
}
function hideCarousel() {
    carousel1.toggleAttribute("hidden", true);
    carousel2.toggleAttribute("hidden", true);
}


// i++ => slide left
// i-- => slide right

// Move auto
// setInterval(() => {

// }, 1000);