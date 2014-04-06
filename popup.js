$(document).ready( function () {
	$('#siteEntryForm').submit( function (e) {
		e.preventDefault();
		var url = $("input[name=siteUrl]").val();
		$('.sitelist').append('<div class="site"><span id="linkX"><a href='+url+'>'+url+'</a><img src=' + chrome.extension.getURL('x.png') + '></span></div>');
		$('a').mouseenter(function() {
			$('#linkX img').show();
		})
		$('a').mouseleave(function() {
			$('#linkX img').hide();
		})
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


