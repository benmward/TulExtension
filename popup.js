$(document).ready( function () {
	$('#button').click( function () {
		var url = $("input[name=siteUrl]").val();
		$('.sitelist').append("<div class='site'>"+url+"</div><br>");
	});
	$(document).bind('keypress',pressed);
});

$(document).on('click','.site', function () {
	$(this).remove();
});

function pressed(e)
{
    var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
    if(key == 13) {
        e.preventDefault();
	var url = $("input[name=siteUrl]").val();
	$('.sitelist').append("<div class='site'>"+url+"</div><br>");
    }
}
