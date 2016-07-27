$(document).ready(function(){
    $('.btn-info').on('click', function(event) {        
         $('.toggle-left').fadeToggle('slow');
    });
    $('.btn-danger').on('click', function(event) {        
         $('.toggle-mid').fadeToggle('slow');
    });
    $('.btn-yellow').on('click', function(event) {        
           $(".toggle-right").fadeToggle('slow');
    });
});

