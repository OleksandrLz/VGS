$(function() {

	$('.btn').click(function(){
		$(this).toggleClass('btn-active');
	})
	
	$('.employee-menu-wrapper').click(function(){
		$(this).find('.employee-add-menu').slideToggle('employee-menu-hidden');
	})
	
	$('[data-toggle="popover"]').popover()

});
