
 $(document).ready(function(){

$(".p").mouseenter(function(){
        
$( this ).css( 'color' , 'green' );
});

});

 $(document).ready(function(){

$(".p").mouseleave(function(){
        
$( this ).css( 'color' , 'black' );
});

});


  $(document).ready(function(){

$(".play").mouseenter(function(){
        
$( this ).css( 'background-color' , 'rgba(255, 255, 255, .5)' );
});

});

  $(document).ready(function(){

$(".play").mouseleave(function(){
        
$( this ).css( 'background-color' , 'rgba(255, 255, 255, .5)');
});

});


var a=0;
  $(document).ready(function(){
  $('.d').click(function(){
   $( this ).css( 'background-color' , 'green' );
   a++;
 $("#skor").html(a);
    
  });
});
  




  $(document).ready(function(){
  $(".yanlıs").click(function(){
   $(this).css( 'background-color' , 'red' );
     
  });
});






  $(document).ready(function(){
  $(".yanlıs,.d").click(function(){
  var btn = $(".d");
  btn.prop("disabled", true); 
   $( ".d").css( 'background-color' , 'green' );
     
  });
});


