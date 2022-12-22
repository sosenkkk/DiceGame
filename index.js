var p1= Math.ceil(6*Math.random());
var p2= Math.ceil(6*Math.random());
var d1= "images/dice"+p1+".png";
var d2= "images/dice"+p2+".png";

var img1=document.querySelector(".img1");
img1.setAttribute("src", d1);

var img2=document.querySelector(".img2");
img2.setAttribute("src", d2);

if(p1>p2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(p2>p1)
    document.querySelector("h1").innerHTML="Player 2 wins";
else{
    document.querySelector("h1").innerHTML="Draw";
}
