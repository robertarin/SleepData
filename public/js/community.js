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
	$("#submitGlobal").click(submitGlobal);
	$("#submitCase").click(submitCase);
}

function submitGlobal() {
	$("#answerGlobal").val("");
	$("#commentsGlobal").val("");
	$("#alertGlobal").show();
	//$("#submitGlobal").hide();
}
function submitCase() {
	var caseRadio = $('#caseRadio input:radio:checked').val();
	console.log(caseRadio);
	$("#commentsCase").val("");
	$("#alertCase").show();
	//$("#alertCase").hide();
}