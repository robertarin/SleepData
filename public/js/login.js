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
	var email = $("#emailField").val();
	var password = $("#passwordField").val();

	if(email != "a" || password != "a")
	{
		$("#loginfailure").show();
		$("#emailField").val("");
		$("#passwordField").val("");
	}
	else
		window.location.href = "/personal";
}

function signup(e)
{
	window.location.href = "/personal";
}

$(function(){
    $("[data-hide]").on("click", function(){
        $(this).closest("." + $(this).attr("data-hide")).hide();
    });
});
