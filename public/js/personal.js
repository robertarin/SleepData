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

	var newAlarmHtml = "<p>"+name+": "+time+"</p> <label class='switch'><input type='checkbox'><div class='slider'></div></label>";
	
	$("#alarms").append(newAlarmHtml);

}
