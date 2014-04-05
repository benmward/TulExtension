$(document).ready( function () {
	$('#siteEntryForm').submit( function (e) {
		e.preventDefault();
		var url = $("input[name=siteUrl]").val();
		$('.sitelist').append('<div class="site"><a href='+url+'>'+url+'</a><img src=' + chrome.extension.getURL('x.png') + '></div>');
	//$('span').on('mouseenter', function () {
	//	$('.site img').show();
	//}).on('mouseleave', function () {
	//	$('.site img').hide();
	});
});

$('body').on('click', 'a', function(){
     chrome.tabs.create({url: $(this).attr('href')});
     return false;
});


