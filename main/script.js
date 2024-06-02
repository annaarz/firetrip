const hotels = document.querySelectorAll(".hotel");

hotels.forEach(hotel => {
    hotel.addEventListener("click", (e) => {
        if (e.target.classList.contains("hotel11")) {
            window.location.href = "https://annaarz.github.io/firetrip/hotel/hotel6/hotel6.html";
        } else if(e.target.classList.contains("hotel22")) {
            window.location.href = "https://annaarz.github.io/firetrip/hotel/hotel1/hotel.html";
        }
    });
});
