
let home = document.getElementById('#home');
let red = document.getElementById('#red');
let orange = document.getElementById('#orange');
let yellow = document.getElementById('yellow');
let green = document.getElementById('#green');
let blue = document.getElementById('#blue');
let purple = document.getElementById('#purple');

let positionRed = red.getBoundingClientRect().top; // Connaître la position en hauteur d'un élément
let positionOrange = orange.getBoundingClientRect().top;
let positionYellox = yellow.getBoundingClientRect().top;
let postiionGreen = green.getBoundingClientRect().top;
let positionBlue = blue.getBoundingClientRect().top;
let positionPurple = purple.getBoundingClientRect().top;

let currentScrollPosition = document.documentElement.scrollTop; // Connaître la position actuel du scroll





// let positionToGo = 150;

// scroll(0, positionToGo);

function scrollTop (e){
    
    if (e.id === "red"){
        return orange;
        if(e.id === "orange"){
    }
    
}





window.addEventListener("DOMContentLoaded", function(event){
    
    currentScrollPosition.addEventListener("wheel", function(event){

        if(event.deltaY > 0) // je vais vers le bas
        {
            
        }
        else if(event.deltaY < 0) // je vais vers le haut
        {
        
        }
    });
});