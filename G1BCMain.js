//////////////////////////////////////
////// GOOPER1 BUILDING CREATOR //////
//////////////////////////////////////
          //  MAIN JS FILE  //
         // LICENCE: GPL 2 //
        ////////////////////
        
$(document).ready(function() {
  
  // Check if we are running under Node.js
  window.ON_NODEJS = (typeof window === 'undefined') ? true : false;
  
  // Load G1BC JS files
  $.getScript('G1BCFiles/js/panelsystem.js');
  
  
});