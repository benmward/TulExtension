$(document).ready( function () {

	var getAllTabs = function() {
		var allTabs = new Array();
		
		chrome.tabs.query({}, function (tabs) {
			for(i = 0; i < tabs.length ; i++)
			{
				var dup = $.inArray(tabs[i].url, allTabs) > -1;
				if(!(dup)){
					allTabs.push(tabs[i].url);
				}
			}
			
			for(i = 0; i < allTabs.length - 1; i++)
			{
				var shorten = new RegExp(".+\\.[a-z]{2,6}.+\\/$","g");
				var notchrome = new RegExp("^chrome.+$","g");
				var url = (allTabs[i]);
				if(!(notchrome.test(url))){
					if(shorten.test(url)){
						url = (allTabs[i]).substring(0,(allTabs[i]).length - 1);
					}
					$('#sitelist').append('<div class="site"><span class="linkX">'+'<a href='+url+'>'+url+'</a>'+'<img id="del" src=' + chrome.extension.getURL('x.png') + '></span></div>');
				}
			}
			$('.site img').hide();
		$('.site').mouseenter(function() {
			$('.linkX img').show();
		})
		$('.site').mouseleave(function() {
			$('.linkX img').hide();
		})
		$('.linkX img').click(function() {
			$(this).parent().remove();
		});
		});
		
		
		return allTabs;
	};
	var temp = getAllTabs();
	for(i = 0; i < temp.length; i++)
	{
		alert(i + " " + temp.windowId);
	}

	$('#siteEntryForm').submit( function (e) {
		e.preventDefault();
		var url = $("input[name=siteUrl]").val();
		url = urlFix(url);
		$('#sitelist').append('<div class="site"><span class="linkX"><a href='+url+'>'+url+'</a><img id="del" src=' + chrome.extension.getURL('x.png') + '></span></div>');
		$('.site img').hide();
		$('.site').mouseenter(function() {
			$('.linkX img').show();
		})
		$('.site').mouseleave(function() {
			$('.linkX img').hide();
		})
		$('.linkX img').click(function() {
			$(this).parent().remove();
		});
		$('.site').draggable();
	});
	
	var urlFix = function(url) {
		var both = new RegExp("^https?:\\/\\/www\\.[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$","g");
		var http = new RegExp("^https?:\\/\\/[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$","g");
		var www = new RegExp("^(https?:\\/\\/)?www\\.[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$","g");
		var valid = new RegExp(".+\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/?$","g");
		if(!valid.test(url)) {
			alert("Invalid URL!");	return "";	}
		else if (http.test(url))
			return url;
		else if (!www.test(url))
			return "http://www."+url;
		else if (!both.test(url))
			return "http://"+url;
		else return url;
	};
	
	
});

$('body').on('click', 'a', function(){
     chrome.tabs.create({url: $(this).attr('href')});
     return false;
});
