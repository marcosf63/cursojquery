$(document).ready(function(){
  $('.append').on('click', function(){
    $('.select').append('HELLO THIS IS APPEND');
  });

   $('.prepend').on('click', function(){
    $('.select').prepend($('.target'));
  });

 $('.appendTo').on('click', function(){
     $('.select').appendTo('.target');
   });

    $('.prependTo').on('click', function(){
     $('.select').prependTo($('.target'));
  });

  $('.before').on('click', function(){
     $('.select').before($('.target'));
   });

   

  $('.clone').on('click', function(){
     $('.select').clone($('.target')).appendTo('.header');
  });



});