
var pics = [
    "Cat pics/sweet kitten.jpg",
    "Cat pics/high five kitten.jpg",
    "Cat pics/kitten in a box.jpg",
    "Cat pics/oh boy kitten.jpg",
    "Cat pics/shmaloopth kitten.jpg",
    "Cat pics/sleepy kitty.jpg"
];

var btn = document.querySelector("button");
var img = document.querySelector("img")
var counter = 1;

btn.addEventListener("click",function(){
    if(counter === 6){
        counter = 0;
    }
    (img.src) = pics[counter]
    counter = counter + 1;
});