
let red = document.querySelector('#red');
let orange = document.querySelector('#orange');
let yellow = document.querySelector('#yellow');
let green = document.querySelector('#green');
let blue = document.querySelector('#blue');
let purple = document.querySelector('#purple');

let positionRed = red.getBoundingClientRect().top; // Connaître la position en hauteur d'un élément
let positionOrange = orange.getBoundingClientRect().top;
let positionYellox = yellow.getBoundingClientRect().top;
let positionGreen = green.getBoundingClientRect().top;
let positionBlue = blue.getBoundingClientRect().top;
let positionPurple = purple.getBoundingClientRect().top;





console.log(positionRed);
console.log(positionOrange);
console.log(positionYellox);
console.log(positionGreen);
console.log(positionBlue);
console.log(positionPurple);



function selectSectionTop(e){
        console.log(e);
        if(e.id === "red"){
            return document.getElementById('orange');
        }else if(e.id === "orange"){
            return document.getElementById('yellow');
        }else if(e.id === "yellow"){
            return document.getElementById('green');
        }else if(e.id === "green"){
            return document.getElementById('blue');
        }else if(e.id === "blue"){
            return document.getElementById('purple');
        }else {
            return e;
        }
    }
    
function selectSectionBot(e){
        console.log(e);
        if(e.id === "purple"){
            return document.getElementById('blue');
        }else if(e.id === "blue"){
            return document.getElementById('green');
        }else if(e.id === "green"){
            return document.getElementById('yellow');
        }else if(e.id === "yellow"){
            return document.getElementById('orange');
        }else if(e.id === "orange"){
            return document.getElementById('red');
        }else {
            return e;
        }
}

window.addEventListener("DOMContentLoaded", function(event){
    
    let section = document.querySelectorAll("body > main > section");
    
    for(let i = 0; i < section.length; i++){
        
        section[i].addEventListener("wheel", function(event){
            
            
            let currentScrollPosition = document.documentElement.scrollTop; // Connaître la position actuel du scroll
            console.log(currentScrollPosition);
            if(event.deltaY > 0) // je vais vers le bas
            {
                let sectionToGo = selectSectionTop(event.target);
                console.log(sectionToGo);
                let positionToGo = currentScrollPosition + sectionToGo.getBoundingClientRect().top;
                scroll(0, positionToGo);
                console.log(positionToGo);
            }
            else if(event.deltaY < 0) // je vais vers le haut
            {
                let sectionToGo = selectSectionBot(event.target);
                console.log(sectionToGo);
                let positionToGo = currentScrollPosition + sectionToGo.getBoundingClientRect().top;
                scroll(0, positionToGo);
                console.log(positionToGo);
            }
        })
    };
});