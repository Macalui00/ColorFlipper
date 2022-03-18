const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const title = document.getElementById("title");

btn.addEventListener('click', function(){
    let colorRGBA = "rgba(" + getRandomNumber() + "," + getRandomNumber() + "," + getRandomNumber() + ")";
    
    color.textContent = colorRGBA;    
    title.style.color = colorRGBA;
    document.body.style.backgroundColor = colorRGBA;
});

function getRandomNumber(){
    return Math.floor(Math.random()*256);
}