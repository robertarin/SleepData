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
	if(name.length == 0){
		name = "New Alarm";
	}
	var hm = time.split(":");
	var hrs = parseInt(hm[0],10);
	var min = parseInt(hm[1],10);
	if(!(hrs >= 0 && hrs < 24)){
		hrs = 0;
	}
	if(!(min >= 0 && min < 60)){
		min = 0;
	}
	if(min<10){
		min = "0"+min;
	}
	if(hrs > 12){
		time = ""+(hrs-12)+":"+min+"pm";
	}else if(hrs == 12){
		time = ""+hrs+":"+min+"pm";
	}else if(hrs == 0){
		time = "12:"+min+"am";
	}else{
		time = ""+hrs+":"+min+"am";
	}

	var newAlarmHtml =
	"<tr><td>"+name+"</td><td>"+time+"</td><td><label class=\"switch\"><input type=\"checkbox\" checked><div class=\"slider\"></div></label></td></tr>";

	$("#alarmTable").append(newAlarmHtml);

}
