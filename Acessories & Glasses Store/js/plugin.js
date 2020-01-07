$(document).ready(function(){
    $(".bracket1,.bracket2").on("mouseover" ,function(){
      $(this).css( {width:"100px" , height:"100px" , opacity : "0.8"})
    });
    $(".bracket1,.bracket2").on("mouseleave" ,function(){
      $(this).css( {width:"80px" , height:"80px" , opacity : "1"})
    });
    
  $(".bracket1").on("click",function(){
    $("#slide").fadeOut(1000).fadeIn(700);
  })
  $(".bracket2").on("click",function(){
    $("#slide").fadeOut(1000).fadeIn(700);
  });
  /*********************************************/


  $("#drop").on("click" , function(){
   
    $("#head").css({height : "250px"});
    $("#header").fadeToggle(2000);
}) ;


  });