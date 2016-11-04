'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#submitAlert").hide();
	$("#postCommunity").click(postCommunity);

}

function postCommunity() {
	$("#comment").val("");
	$("#comment2").val("");
	$("#submitAlert").show();
}