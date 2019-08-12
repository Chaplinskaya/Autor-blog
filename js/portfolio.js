	$(function()
{
	$(document).ready(function() 
	{
		$( ".button_portfolio" ).click(function() {
		$( ".gallery" ).show();
		$( ".gallery__show-photo" ).show();
		$( ".gallery__hide-photo" ).show( 1000 );
		$(this).hide();
		$(".close_button").show();
		});
				         
		$( ".close_button" ).click(function() 
		{
			$( ".gallery__show-photo").show( 1000 );
			$(".gallery__hide-photo").hide( 1000 );
			$( ".button_portfolio" ).show();
			$(".close_button").hide();
		});
	});
	})			
