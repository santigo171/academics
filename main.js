const username_input = document.getElementById("username");
const password_input = document.getElementById("password");
const summit = document.getElementById("form-summit");

const error_div = document.getElementById("error");
const errorMessage_p = document.createElement("p");

function showErrorMessage() {
    error_div.style.opacity = '1';
    setTimeout(() => {error_div.style.opacity = '0'}, 4000);
    setTimeout(() => {errorMessage_p.remove()}, 4500);
}

summit.addEventListener('click', () => {
    if (username_input.value == "" || password_input.value == "") {
        errorMessage_p.innerHTML = 'Por favor ingrese su usuario y contraseña.';
    } else {
        window.location.href = './';
    }
    error_div.appendChild(errorMessage_p);
    showErrorMessage();
})

// Toggle Mode button
const toggleMode_div = document.getElementById("toggle-mode");
const styleSheet_link = document.getElementById("dark-stylesheet");
let currentPageMode = 'light';

toggleMode_div.addEventListener('click', () => {
    if (currentPageMode == 'light') {
        styleSheet_link.setAttribute('href', './css/dark-login.css');
        currentPageMode = 'dark'
    } else {
        styleSheet_link.setAttribute('href', '');
        currentPageMode = 'light'
    }
});