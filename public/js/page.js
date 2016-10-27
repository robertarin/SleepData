'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#subBtn").click(subBtnClick);
}

function subBtnClick(e)
{
	e.preventDefault();

	var nameField = $("#nameField");
	var name = nameField.val();
	nameField.val("");

	var timeField = $("#timeField");
	var time = timeField.val();
	timeField.val("");

	var alarms = $("#alarms");
	alarms.append("<li><p>"+name+": "+time+"</p><label class='switch'><input type='checkbox'><div class='slider'></div></label></li>");

}