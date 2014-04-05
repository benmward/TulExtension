$(document).ready( function () {
	$('#siteEntryForm').submit( function (e) {
		e.preventDefault();
		var url = $("input[name=siteUrl]").val();
		$('.sitelist').append("<div class='site'>"+url+"<img src='" + chrome.extension.getURL('x.png') + "'></div><br>");
	//$('span').on('mouseenter', function () {
	//	$('.site img').show();
	//}).on('mouseleave', function () {
	//	$('.site img').hide();
	});
});

$(document).on('click','.site', function () {
	$(this).remove();
});


