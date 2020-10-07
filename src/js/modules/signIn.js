let signInForm = document.getElementById("signIn")
let btnSignIn = document.getElementById("connexion");
let btnSignUp = document.getElementById("signUpBtn");
let eyeShow = document.getElementById("eyeShow");
let eyeHide = document.getElementById("eyeHide");;
let mdpInput = eyeShow.previousElementSibling;

let signUpForm = document.getElementById("signUp")
let btnSignUp2 = document.getElementById("signInBtn");

let cross1 = signInForm.firstElementChild.firstElementChild.firstElementChild;
let cross2 = signUpForm.firstElementChild.firstElementChild.firstElementChild;

let inputMdp1 = cross2.nextElementSibling.nextElementSibling.nextElementSibling;
let inputMdp2 = inputMdp1.nextElementSibling;

cross1.addEventListener("click", exit);
cross2.addEventListener("click", exit);
function exit() {
    signInForm.toggleAttribute("hidden", true);
    signUpForm.toggleAttribute("hidden", true);
}
document.addEventListener("keydown", keyExit);
function keyExit(e) {
    if (e.key == "Escape") {
        exit();
    }
}

let showSignIn = false;
let showSingUp = false;
// Connexion
btnSignIn.addEventListener("click", signIn);
function signIn() {
    signInForm.toggleAttribute("hidden", false);
}
// Inscription show
btnSignUp.addEventListener("click", signUp);
function signUp() {
    signInForm.toggleAttribute("hidden", true);
    signUpForm.toggleAttribute("hidden", false);
}
// Connexion show
btnSignUp2.addEventListener("click", toSignIn);
function toSignIn() {
    signUpForm.toggleAttribute("hidden", true);
    signInForm.toggleAttribute("hidden", false);
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
signUpForm.addEventListener("submit", match);
function match(e) {
    if (inputMdp1.value != inputMdp2.value) {
        e.preventDefault();
        alert("Les mots de passe ne correspondent pas")
    }
    else {
        alert("Tu t'es inscrit à Emporium")
    }
}