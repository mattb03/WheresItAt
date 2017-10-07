$(document).ready(function() {

});

/* copy of profilePage.js
var profPage = 

$(document).ready(function() {
	console.log("listening on front end....");
	
	$("#submitBtn").click(function() {
			var course = $("#courseTaken").val();
			var comment = $("#commentBox").val();
			alert(course);
			alert(comment);
		// with prototype a function call looks like this
		// q1Bulk.prototype.filterQ1BulkTable();
		$.when( $.post("/submitComment", {name: course, location: location})).then(
			function (data, textStatus, jqXHR) {
				// success 
				console.log("rtuend from /submitComment route");
			},
			function(e) {
				// error
				throw e;
			}
		)
	});
	$("#commentBox").change(function() {
	  console.log("EZ PZ ");
	});  


  
});
*/