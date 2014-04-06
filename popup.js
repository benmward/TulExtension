$(document).ready( function () {
	$('#siteEntryForm').submit( function (e) {
		e.preventDefault();
		var url = $("input[name=siteUrl]").val();
		if(urlFix(url))
		{
			url = urlFix(url);
			$('.sitelist').append('<div class="site"><span id="linkX"><a href='+url+'>   '+url+'   </a><img src=' + chrome.extension.getURL('x.png') + '></span></div>');
			$('.site img').hide();
			$('.site').mouseenter(function() {
				$('#linkX img').show();
			})
			$('.site').mouseleave(function() {
				$('#linkX img').hide();
			})
		}
	//$('span').on('mouseenter', function () {
	//	$('.site img').show();
	//}).on('mouseleave', function () {
	//	$('.site img').hide();
	});
	
	var urlFix = function(url) {
		var http = new RegExp("^https?:\\/\\/www\\.[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$","g");
		var www = new RegExp("^(https?:\\/\\/)?www\\.[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$","g");
		var valid = new RegExp(".+\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$","g");
		if(!valid.test(url))
		{
			alert("Invalid URL!");
			return "";
		}
		else if (!www.test(url))
			return "http://www."+url;
		else if (!http.test(url))
			return "http://"+url;
		else return url;
	};
	
	
	$('.img2').click(function() {
		chrome.tabs.create({url: "popup.html"});
		
	});
});

$('body').on('click', 'a', function(){
     chrome.tabs.create({url: $(this).attr('href')});
     return false;
});


