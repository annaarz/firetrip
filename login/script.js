const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const submitBtn = document.querySelector('.submit-btn');
const modal = document.querySelector('.modal');
const modalWindow = document.querySelector('.modal-window');

let users = [];

if (localStorage.users) {
    users = JSON.parse(localStorage.getItem('users')) || [];
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let enteredEmail = emailInput.value;
    let enteredPassword = passwordInput.value;

    if (!enteredEmail) {
        showModal('Email не был введен');
        return;
    }

    if (!enteredPassword) {
        showModal('Пароль не был введен');
        return;
    }

    const foundUser = users.find(user => user.email === enteredEmail && user.password === enteredPassword);
    if (foundUser) {
        window.location.href = "https://annaarz.github.io/firetrip/login-code/login-code.html";
    } else {
        showModal('Неверный email или пароль');
    }
});

function showModal(message) {
    const heading = document.createElement("h1");
    heading.textContent = message;
    modalWindow.innerHTML = ""; 
    modalWindow.appendChild(heading);
    modal.classList.add('active');

    setTimeout(function(){ 
        modal.classList.remove('active');
    }, 3000);
}
