let heart = document.querySelectorAll('.fav__fa');
let hotelsBlock = document.querySelectorAll('.hotels__block');
let block = document.querySelectorAll('.block');
const hotels = document.querySelectorAll(".hotel__img");

for (let i = 0; i < heart.length; i++) {

    heart[i].addEventListener('click', (event) => {
        event.target.style.color = 'white';
        block[i].className = 'none';
    })

}

hotels.forEach(hotel => {
    hotel.addEventListener("click", (e) => {
        if (e.target.classList.contains("hotel1")) {
            window.location.href = "../../hotel/hotel3/hotel3.html";
        } else if(e.target.classList.contains("hotel2")) {
            window.location.href = "../../hotel/hotel4/hotel4.html";
        } else if (e.target.classList.contains("hotel3")) {
            window.location.href = "../../hotel/hotel1/hotel.html";
        } else if (e.target.classList.contains("hotel4")) {
            window.location.href = "../../hotel/hotel2/hotel2.html";
        }
    });
});
