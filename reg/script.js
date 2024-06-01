document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('.email-input');
    const passwordInput1 = document.querySelector('.password-input1');
    const passwordInput2 = document.querySelector('.password-input2');
    const submitBtn = document.querySelector('.submit-btn');
    const modalWindow = document.querySelector(".modal-window");
    const modal = document.querySelector(".modal");

    let users = [];

    if (localStorage.users) {
        users = JSON.parse(localStorage.getItem('users')) || [];
    }

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let enteredEmail = emailInput.value;
        let enteredPassword1 = passwordInput1.value;
        let enteredPassword2 = passwordInput2.value;

        if (!enteredEmail) {
            showModal('Email не был введен');
            return;
        }

        if (!enteredPassword1 || !enteredPassword2) {
            modalWindow.style.height = "30px";
            modalWindow.style.paddingTop = "15px";
            showModal('Пароль не был введен');
            return;
        }

        if (enteredPassword1 !== enteredPassword2) {
            modalWindow.style.height = "35px";
            modalWindow.style.paddingTop = "15px";
            showModal('Пароли не совпадают');
            return;
        }
        

        const existingUser = users.find(user => user.email === enteredEmail);
        if (existingUser) {
            modalWindow.style.paddingTop = "0px";
            showModal('Пользователь с таким email уже зарегистрирован');
            return;
        }

        const newUser = {
            email: enteredEmail,
            password: enteredPassword1
        };

        users.push(newUser);
        console.log('Регистрация прошла успешно. Новый пользователь добавлен:', newUser);
        window.location.href = "../reg-code/reg-code.html";
        localStorage.users = JSON.stringify(users);
    });

    function showModal(message) {
        const heading = document.createElement("h1");
        heading.textContent = message;
        modalWindow.innerHTML = ""; 
        modalWindow.appendChild(heading);
        modal.style.display = "block";

        setTimeout(function(){ 
            modal.style.display = "none";
        }, 3000);
    }
});




