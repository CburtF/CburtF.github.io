$(document).ready(function() {
			
			$('#contentDiv').height(parseInt($("#section-homeContent").css('height'),10));

			setInterval(function(){
			    var $current = $('.current').animate({top: 0},500).delay(500).animate({top: 0},500).animate({top:-25},500).removeClass('current');
			    
			    if($current.next('li').length > 0) {
			    		$current.next('li').css('top','25px');
			        $current.next('li').addClass('current');
			    } else {
			    		$current.siblings('li:eq(0)').css('top','25px');
			        $current.siblings('li:eq(0)').addClass('current');
			    }
			}, 2000);
			

			$('#headerList').on('click', 'li', function(){
				console.log($(this).text());

				var sectionId = '#section-' + $(this).attr('id');

				if(!$(this).hasClass('active')) {

					$('.sectionNav').removeClass('active');
					$(this).addClass('active');
					$('.sectionNav').removeClass('active');
					$(this).addClass('active');
					var sectionId = '#section-' + $(this).attr('id');
					var $sectionIdName = $(sectionId);

					$('#contentDiv div.sectionsContent').animate({
						left: -2000
					});
					//console.log(sectionId);
					console.log($('#contentDiv').height());
					$('#contentDiv').height(parseInt($sectionIdName.css('height'),10));
					console.log($('#contentDiv').height());
					$sectionIdName.animate({left: 0},500);

					

				}

				if(sectionId !== '#section-workExperience') {
					console.log("true");
					$('.workContent').addClass('collapse');
					$(".workDivider").show();

				}
			});

			$('#lernMore').click(function() {
				$('#contentDiv div.sectionsContent').animate({
					left: -2000
				});
				//console.log(sectionId);
				console.log($('#contentDiv').height());
				$('#contentDiv').height(parseInt($('#section-moreInfoDiv').css('height'),10));
				console.log($('#contentDiv').height());
				$('#section-moreInfoDiv').animate({left: 0},500);
			});

			$('#headerList').on('click', 'a', function(){
				 $('.navbar-collapse').collapse('hide');
			});

			$('#accentureButton').click(function(){
				
				$('#accentureExp').toggleClass("collapse");
				console.log($('#contentDiv').height());
				$('#contentDiv').height(parseInt($('#section-workExperience').css('height'),10)*1.2);
				console.log($('#contentDiv').height());
				$("#work1").toggle();

			
			});

			

			$("#sfsuButton").click(function() {
				$('#sfsu').toggleClass("collapse");
				console.log($('#contentDiv').height());
				$('#contentDiv').height(parseInt($('#section-workExperience').css('height'),10)*1.2);
				console.log($('#contentDiv').height());
				$("#work2").toggle();
				
			});

			$("#educationButton").click(function() {
				$('#education').toggleClass("collapse");
				console.log($('#contentDiv').height());
				$('#contentDiv').height(parseInt($('#section-workExperience').css('height'),10));
				console.log($('#contentDiv').height());

			});
			

			$('.projectDiv').on('mouseenter',function() {
						$(this).closest('.projectDiv').find('.projectSummary').slideDown();
					});

					$('.projectDiv').on('mouseleave',function() {
						$(this).closest('.projectDiv').find('.projectSummary').slideUp();
			});

		



		});



$(function () {
		  		$('[data-toggle="tooltip"]').tooltip()
			})