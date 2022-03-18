const colores = ["LightCoral", "Salmon", "DarkSalmon", "LightSalmon", "Crimson", "IndianRed", "FireBrick", "DarkRed", "LightPink", "HotPink", "DeepPink", "MediumVioletRed", "PaleVioletRed", "Coral", "Tomato", "OrangeRed", "DarkOrange", "Gold", "LightYellow", "Khaki", "DarkGreen", "Violet", "MediumOrchid", 
"Plum", "MediumPurple", "BlueViolet", "DarkViolet", "DarkOrchid", "DarkMagenta", "Indigo", "SlateBlue", "DarkSlateBlue", "GreenYellow", "Chartreuse", "LawnGreen", "LimeGreen", "PaleGreen", "LightGreen", "MediumSpringGreen", "SpringGreen", "ForestGreen", "YellowGreen", "DarkCyan"
, "LightCyan", "Aquamarine", "Turquoise", "DarkTurquoise", "SteelBlue", "LightBlue", "SkyBlue", "DeepSkyBlue", "DodgerBlue", "RoyalBlue", "MediumBlue", "DarkBlue", "Navy", "MidnightBlue", "Chocolate", "Brown", "Sienna", "DarkGray", "DimGray", "LightSlateGray", "DarkSlateGray"]

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const title = document.getElementById("title");

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colores[randomNumber];
    color.textContent = colores[randomNumber];
    title.style.color = colores[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random()*colores.length);
}