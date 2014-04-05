$(document).ready( function () {
	$('#button').click( function () {
		var url = $("input[name=siteUrl]").val();
		$('.sitelist').append("<div class='site'>"+url+"</div><br>");
	});
});

$(document).on('click','.site', function () {
	$(this).remove();
});
