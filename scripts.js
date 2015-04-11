for (var i=0; i<guardianHeroinData.length; i++) {
	var rowData = guardianHeroinData[i];
	
	var $template = $('<div class="quoteContainer">'+
						'<div class="mainQuote">'+rowData.mainQuote+'</div>'+
						'<div class="readMore">Read More >></div>'+
						'<div class="moreInfo">'+
							'<div class="wholeQuote">'+rowData.wholeQuote+'</div>'+
							'<div class="source">'+rowData.source+'</div>'+
							'<div class="yearsClean">'+rowData.yearsClean+'</div>'+
							'<div class="location">'+rowData.location+'</div>'+
						'</div>'+
					'</div>');
	$('#dataContainer').append($template);
		
	$template.find(".readMore").on("click", toggleContent);
		
}

		function toggleContent(e) {
			var $quoteContainer = $(e.target).parent();
			
			if ($quoteContainer.hasClass('expanded')) { 
				
				//I'm checking to see if a class is there, quoteContainer has class. expanded (you can see content), so remove content
				
				$quoteContainer.removeClass('expanded');
				
			} else { 
				
				// quoteContainer does not have class expanded (you can't see content), so show content
				
				$quoteContainer.addClass('expanded');
				
				
			}
		}
		


