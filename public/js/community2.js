'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
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

	$("input:radio").prop('checked', false);
    $("input:radio").closest("label").removeClass("active");

	$("#commentsCase").val("");
	$("#alertCase").show();
	//$("#alertCase").hide();
}


$(function(){
    $("[data-hide]").on("click", function(){
        $(this).closest("." + $(this).attr("data-hide")).hide();
    });
});