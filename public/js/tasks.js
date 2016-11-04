'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

$(document).on('input change', '#tempRange', function() {
      $('#tempDisplay').html( $(this).val() );
});
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
}
