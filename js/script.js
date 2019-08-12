$(function()
{
	$('.top-nav, #myTopnav').click(function()
	{
		$('#myTopnav').toggleClass('responsive');
	})
	$(document).click(function(event)
{
	if($(event.target).closest(".top-nav").
		length ) return;
		$('#myTopnav').removeClass(' responsive');
	event.stopPropagation();
});
		})
