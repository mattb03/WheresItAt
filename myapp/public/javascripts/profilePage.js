

$(document).ready(function() {

	// validate file selected and item name entered
	$("form").submit(function() {
		var filename = $("#itemPicture").val();
		var itemname = $("#itemName").val();
		var description = $("#itemDescription").val();
		if (filename.length < 1 ||
			itemname.length < 1) {
			alert("No value entered");
			return false;
		}
	});
});