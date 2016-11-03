'use strict';

var clicked = 0;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#loginButton").click(login);
	$("#signupButton").click(signup);
}

function login(e)
{	
	if(clicked == 0){
		$("#loginAlert").show();
	}
	else{
		$("#loginAlert").hide();
		$("#signupAlert").hide();
		$("#clickedAlert").show();
	}

	clicked = 1;
}

function signup(e)
{
	if(clicked == 0){
		$("#signupAlert").show();
	}	
	else{
		$("#loginAlert").hide();
		$("#signupAlert").hide();
		$("#clickedAlert").show();
	}

	clicked = 1;
}
