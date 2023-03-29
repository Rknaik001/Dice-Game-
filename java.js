function load() {
    window.location.reload()
}
// function light() {
//     document.querySelector("body").style.backgroundColor = "#D8D8D8";
//     document.querySelector("#att").style.color = "black";
//     document.querySelector("#ack").style.color = "black";
// }

let target= document.querySelector("body")
let theme= localStorage.getItem("theme")
if (theme != null){
    target.classList.toggle("dark");
}

function nightmode(){
    let theme =localStorage.getItem("theme");
    if (theme!= null) {
        localStorage.removeItem("theme");
    } else {
        localStorage.setItem("theme" , "light");
    }
    target.classList.toggle("dark")
}





// function dom(){
//     var Number1= Math.ceil(Math.random()*6)
//     var dicename="dice" +Number1+".png"
//     document.querySelector('#run').innerHTML=dicename;
// }

// first player img

var Number1= Math.floor((Math.random()*6)+1);
var dicename= "dice" + Number1 + ".png";

var rand= "images/" + dicename;

var image1 = document.querySelectorAll("img")[0]

image1.setAttribute('src' , rand)


// var Number1 = Math.ceil(Math.random() * 6);
// var dicename = "dice" + Number1 + ".png";

// var randimgsrc = "images/" + dicename;

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute('src', randimgsrc);


// second player image

var Number2 = Math.ceil(Math.random() * 6);
var dicenamea = "dice" + Number2 + ".png";
var randimg = "images/" + dicenamea;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute('src', randimg);

// win or  loss


if (Number1 > Number2) {
    document.querySelector("#run").innerHTML = "Player 1 wins"
}

else if (Number1 < Number2) {
    document.querySelector("#run").innerHTML = "Player 2 wins"
}
else {
    document.querySelector("#run").innerHTML = "Draw"
}

