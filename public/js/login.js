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
	window.location.href = "/personal";
}

function signup(e)
{
	window.location.href = "/personal";
}
