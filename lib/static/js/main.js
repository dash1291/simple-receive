$(document).ready(function() {
	var percentIndicator = $('#percent');
	$('form').ajaxForm({
		beforeSend: function() {
			percentIndicator.html('Sending...');
		},
		uploadProgress: function(event, position, total, percentComplete) {
			percentIndicator.html('Sending... ' + percentComplete + '% complete.');
		},
		complete: function(xhr) {
			var response = xhr.responseText();
			if (responseText == 'done') {
				percentIndicator.html('Send complete.');
			} else {
				percentIndicator.html('An error occurred while sending.');
			}
		}
	});
});