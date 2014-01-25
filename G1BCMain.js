//////////////////////////////////////
////// GOOPER1 BUILDING CREATOR //////
//////////////////////////////////////
          //  MAIN JS FILE  //
         // LICENCE: GPL 2 //
        ////////////////////
		
function loadScript(src) { // $.getScript doesn't work for me
	script = document.createElement('script');
	script.src = src;
	
	document.getElementById('body').appendChild(script);
}
        
$(document).ready(function() {
  
  // Check if we are running under Node.js
  window.ON_NODEJS = (typeof window === 'undefined') ? true : false;
  
  // Load G1BC JS files
  loadScript('G1BCFiles/js/panelsystem.js');
  loadScript('G1BCFiles/js/canvaswork.js');
  
  window.onload = function() {
	  changePanel();
  }
});