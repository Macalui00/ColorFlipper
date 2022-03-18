const colors = ["red", "blue", "yellow", "white", "black", "green", "purple", "pink", "orange", "silver", "fuchsia", "maroon", "cyan", "lime"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const title = document.getElementById("title");

btn.addEventListener('click', function(){
    // Obtener un numero random entre 0 y 2
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    title.style.color = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}