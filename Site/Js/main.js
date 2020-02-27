 // Criando slide

 var intervalo = 5000;
 function slideIndex(){
     document.getElementById("slide1").src = "Img/Pretax.jpg";
     setTimeout("slideIndex1()", intervalo);
 }
 function slideIndex1(){
    document.getElementById("slide1").src = "Img/walala.jpg";
    setTimeout("slideIndex2()", intervalo);
}
function slideIndex2(){
    document.getElementById("slide1").src = "Img/tran.jpg";
    setTimeout("slideIndex1()", intervalo);
}