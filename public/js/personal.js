'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#newBtn").click(newBtn);
}

function newBtn(e) {

	var name = $("#alarmName").val();
	var time = $("#alarmTime").val();

	var newAlarmHtml = "<p>"+name+": "+time+"</p> <input type='checkbox' checked data-toggle='toggle'>";
	
	$("#alarms").append(newAlarmHtml);

}
