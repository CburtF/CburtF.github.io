$(document).ready(function() {

	$('#headerList li').click(function(){

		if(!$(this).hasClass('current')) {
			console.log("here")

			$('.sectionNav').removeClass('current');
			$(this).addClass('current');
			var sectionId = '#section-' + $(this).attr('id');
			var $sectionIdName = $(sectionId);

			console.log(sectionId);

			$('#content > div.sectionsContent').animate({
				left: -2000
			});

			$('#content').height(parseInt($sectionIdName.css('height'),10));

			$sectionIdName.animate({
				left: parseInt($sectionIdName.css('left'),10) == 0 ? -$sectionIdName.outerWidth() : 0
			});


		}


	});


});