'use strict';
var counter1 = 0;
var counter2 = 0;


// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("a.thumbnail").click(dataClick);
}

function dataClick(e) {
	e.preventDefault();
	var containingData = $(this).closest(".data");

	var id = containingData.attr('id')

	var addition = $(containingData).find(".addition");

	if(id == "yourData")
	{
		if(counter1 == 0)
		{
			counter1 = 1;
			if(addition.length == 0)
			{
				$(containingData).append("<div class='addition'></div>");
				addition.hide();
				$(containingData).find(".addition").append("<img src='images/pie.jpg' alt='graph image' class='img'>");
			}
			addition.fadeIn();
		}
		else{
			counter1 = 0;
			addition.fadeOut();
		}
	}
	else
	{
		if(counter2 == 0)
		{
			addition.hide();
			counter2 = 1;
			if(addition.length == 0)
			{
				$(containingData).append("<div class='addition'><img src='images/pie.jpg' alt='graph image' class='img'></div>");
			}
			addition.fadeIn();
		}
		else{
			counter2 = 0;
			addition.fadeOut();
		}
	}
		
		

}