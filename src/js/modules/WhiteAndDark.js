let btnwhite = document.querySelectorAll("div")[3];
let btndark = document.querySelectorAll("div")[4];
let navbar = document.getElementById("nav");
let navbtn = navbar.getElementsByTagName("button");
let sct2 = document.getElementsByTagName("section")[1];
let sct4 = document.getElementsByTagName("section")[3];
let psct2 = sct2.getElementsByTagName("p");
let h3sct2 = sct2.getElementsByTagName("h3")[0];
let psct4 = sct4.getElementsByTagName("p");
let h3sct4 = sct4.getElementsByTagName("h3")[0];

let btncarou = document.getElementsByClassName("btnCaroussel")[0].children;
let sct5 = document.getElementsByTagName("section")[4];
let divSct5 = sct5.getElementsByTagName("div");
let titre = document.getElementsByTagName("h1")[0];
let bdy = document.body;


console.log(btnwhite);
console.log(btndark);
console.log(navbar);
console.log(navbtn);
console.log(sct2);
console.log(btncarou);
console.log(h3sct2);
console.log(h3sct4);


let tabnavbtn = Array.from(navbtn);
let tabpsct2 = Array.from(psct2);
let tabpsct4 = Array.from(psct4);
let tabBtnCarou = Array.from(btncarou);
let tabSct5 = Array.from(divSct5);
btndark.addEventListener("click",()=>{
    titre.className="darkModeColor"
    h3sct2.style.color="white"
    h3sct4.style.color="white"
    bdy.className="darkModeBg"
    navbar.className="darkModeBgColor1Border"
    tabnavbtn.forEach(element => {
        console.log(element);
        element.className="darkModeBgColor"
    });
    tabpsct2.forEach(element => {
        element.className="darkModeColor"
    });
    tabpsct4.forEach(element => {
        element.className="darkModeColor"
    });
    tabBtnCarou.forEach(element => {
        element.className="darkModeBgColorBorder"
    });
    tabSct5.forEach(element => {
        element.className="darkModeBgColorBlack"
    });
})
btnwhite.addEventListener("click",()=>{
    titre.classList.remove("darkModeColor")
    h3sct2.style.color="#2d2f32"
    h3sct4.style.color="#2d2f32"
    
    bdy.classList.remove("darkModeBg")
    navbar.classList.remove("darkModeBgColor1Border")
    tabnavbtn.forEach(element => {
        element.classList.remove("darkModeBgColor")
    });
    tabpsct2.forEach(element => {
        element.classList.remove("darkModeColor")
    });
    tabpsct4.forEach(element => {
        element.classList.remove("darkModeColor")
    });
    tabBtnCarou.forEach(element => {
        element.classList.remove("darkModeBgColorBorder")
    });
    tabSct5.forEach(element => {
        element.classList.remove("darkModeBgColorBlack")
    });
})

