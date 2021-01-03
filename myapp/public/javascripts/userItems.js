$(document).ready(function() {
	$("[id^=removeDialog]").hide();
	$("button").click(function() {
		
		var id = $(this).attr('id');
		console.log(id);
		// get the number of the dialog id
		var length = "removeBtn".length;
		console.log("LENGTH: " + length);
		var num = id.substring(length);
		console.log("NUM: " + num);

		$("[id^=removeDialog]").dialog({
			autoOpen: false
		});
		$("#removeDialog" + num).dialog("open");

		$("#noButton").click(function() {
			$("#removeDialog" + num).dialog("close");
		});
		$("[id^=yesButton]").click(function() {

			var image = $("#fileNo" + num);
			var name = image.attr('name');
			if (name === undefined) {
				return;
			}
			console.log("Sending " + name);
			$.ajax({
				type: 'POST',
				cache: false,
				contentType: 'application/json',//'multipart/form-data',
				processData: false,
				url: '/removeItem',
				data: JSON.stringify({
					fileName: image.attr('name')
				}),
				success: function(data) {
					$("#removeDialog" + num).dialog("close");
					$("#itemDiv" + num).remove();
				}, 
				error: function(req, status, error) {
					console.log("##### ERORR #####: ", error);
				}});
			});
	});
});