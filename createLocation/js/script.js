$(document).ready(function(){

  // $.ajax();  <<< CORE METHOD
  // $('').load();
  // $.get();
  // $.post();
  // $.getScript();
  // $.getJSON();


  $('a').on('click', function(){
    //e.preventDefault();
    getLocation();

  });

  function getLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(loc){
        var latlng = loc.coords.latitude + ',' + loc.coords.longitude;
        getCity(latlng);
      });
    }
  }

 
  function getCity(latlngInput){
    // Using the core $.ajax() method
    $.ajax({
        url: 'https://maps.googleapis.com/maps/api/geocode/json',

        //type: "GET",

	data: {
	  'latlng': latlngInput
	},

        dataType : 'json',
     
        success: function(r) {
	  console.log(r);
          $('.content').text(r.results[1].formatted_address);
        },
     
        error: function( error ) {
          console.log('the page was NOT loaded', error);
        },
     
        complete: function( xhr, status ) {
          console.log("The request is complete!");
        }
    });    
  }

});
