let i = 0;
let txt = '  Hi. i\'m Hanan Mohammed  ,  24 years old , living in cairo-Egypt , graduated from faculty of computer and information technology ,computer Science department >>graduated on 2017 ';

let speed =80;
 function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } 

  } 
//***************************************************************************************************
let x=0;
  let time =1000 ;
  let img =[x];
  img[0]='imges/Acc.PNG';
  img[1]='imges/portfolio1.png';
  img[2]='imges/portfolio2.png';
  img[3]='imges/portfolio3.png';
  img[4]='imges/portfolio4.png';
  function changeImg(){
    document.slide.src=img[x];
    if(x<img.length-1){
      x++;
    }else{
     x=0;
    }
    setTimeout("changeImg()",time);
  }
 window.onload = changeImg;
$(document).ready(function(){
  $(".bracket1 , .bracket2").on("mouseover" ,function(){
    $(this).css( {width:"80px" , height:"80px" , opacity : "0.6"})
  });
  $(".bracket1 ,.bracket2").on("mouseleave" ,function(){
    $(this).css( {width:"80px" , height:"80px" , opacity : "0.8"})
  });
  
$(".bracket1").on("click",function(){
  $("#slide").fadeOut(600).fadeIn(700);
})
$(".bracket2").on("click",function(){
  $("#slide").fadeOut(500).fadeIn(600);
})

});
 /********************************************************************************************* */
 