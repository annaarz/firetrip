const hotels = document.querySelectorAll(".hotel__img");
const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 100;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

document.getElementById("open-modal").addEventListener("click",function(){
    document.getElementById("mymodal").classList.add("open")
})

document.getElementById("close").addEventListener("click",function(){
    document.getElementById("mymodal").classList.remove("open")
})

hotels.forEach(hotel => {
    hotel.addEventListener("click", (e) => {
        if (e.target.classList.contains("hotel1")) {
            window.location.href = "https://annaarz.github.io/firetrip/hotel/hotel1/hotel.html";
        } else if(e.target.classList.contains("hotel2")) {
            window.location.href = "https://annaarz.github.io/firetrip/hotel/hotel4/hotel4.html";
        } else if (e.target.classList.contains("hotel3")) {
            window.location.href = "https://annaarz.github.io/firetrip/hotel/hotel3/hotel3.html";
        }
    });
});


