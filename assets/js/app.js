// ===========preloader==========

const preloader = document.getElementById("preloader");

setTimeout(() => {
    preloader.classList.add("d-none")
    preloader.classList.add("overflow-hidden")
}, 2000)

let closeeye = document.getElementById("close-eye");
let openeye = document.getElementById("open-eye");
let password = document.getElementById("password");

// ==============password-hide=========
openeye.addEventListener("click", function () {
    if (password.value.length <= 0) {
        openeye.classlist.add("d-none")
        openeye.classlist.remove("d-block")
        closeeye.classList.remove("d-none")
        closeeye.classList.add("d-block")
    }
});
closeeye.addEventListener("click", function () {

    if (password.value.length < 1, password.type == "password") {
        password.setAttribute("type", "text");
        closeeye.classList.add("d-none");
        openeye.classList.add("d-block");
        closeeye.classList.remove("d-block");
        openeye.classList.remove("d-none");
    } else if (password.value.length > 1, password.type == "text") {
        password.setAttribute("type", "password");
        closeeye.classList.add("d-block");
        openeye.classList.add("d-none");
        closeeye.classList.remove("d-none");
        openeye.classList.remove("d-block");

    }
});
openeye.addEventListener("click", function () {
    if (password.value.length < 1, password.type == "password") {
        password.setAttribute("type", "text");
        closeeye.classList.add("d-none");
        openeye.classList.add("d-block");
        closeeye.classList.remove("d-block");
        openeye.classList.remove("d-none");
    } else if (password.value.length > 1, password.type == "text") {
        password.setAttribute("type", "password");
        closeeye.classList.add("d-block");
        openeye.classList.add("d-none");
        closeeye.classList.remove("d-none");
        openeye.classList.remove("d-block");
    }
});
