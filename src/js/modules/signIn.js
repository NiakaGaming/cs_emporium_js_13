let signInForm = document.getElementById("signIn")
let btnSignIn = document.getElementById("connexion");
let btnsignUp = document.getElementById("signUp");
let eyeShow = document.getElementById("eyeShow");
let eyeHide = document.getElementById("eyeHide");;
let mdpInput = eyeShow.previousElementSibling;

// document.getElementsByTagName("body")[0].addEventListener("click", () => {
//     signInForm.toggleAttribute("hidden", true);
// })

// Connexion
btnSignIn.addEventListener("click", signIn);
function signIn() {
    signInForm.toggleAttribute("hidden", false);
}
// Inscription
btnsignUp.addEventListener("click", signUp);
function signUp() {
    signInForm.toggleAttribute("hidden", true);
}

// hide/show icon
signInForm.addEventListener("click", showHide);
function showHide(e) {
    if (e.target.classList.contains("fa-eye")) {
        e.path[1].toggleAttribute("hidden");
        e.path[1].nextElementSibling.toggleAttribute("hidden");
        mdpInput.type = "text"
    }
    else if (e.target.classList.contains("fa-eye-slash")) {
        e.path[1].toggleAttribute("hidden");
        e.path[1].previousElementSibling.toggleAttribute("hidden");
        mdpInput.type = "password"
    }
}
