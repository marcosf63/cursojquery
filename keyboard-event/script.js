$(document).ready(function($){

  $('button').on('click', function(){
    $(this).text('Eu fui clicado!');
  });

  $('body').on('keypress', function(e){
    console.log("Tecla pressionada", e);
    console.log(e.keyCode);
  });

});
