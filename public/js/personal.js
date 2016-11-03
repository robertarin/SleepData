'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#newAlarmBtn").click(newAlarmBtn);
}

function newAlarmBtn(e) {

	e.preventDefault();

	var name = $("#nameInput").val();
	var time = $("#timeInput").val();

	var newAlarmHtml = "<li><p>"+name+": "+time+"</p><input type='checkbox' checked></li>";
	
	$("#alarms").append(newAlarmHtml);

}
