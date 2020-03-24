$(function() {
$(document).ready(function(){
	$('.contenu-acc').hide();
	$('.titre-acc').click(function() {
		if ($(this).next('.contenu-acc:visible').length !=0) {
			$(this).next('.contenu-acc').slideUp();
			$(this).removeClass('active-acc');
		}
		else {
			$('.contenu-acc').slideUp();
			$('.titre-acc').removeClass('active-acc');
			$(this).next('.contenu-acc').slideDown();
			$(this).addClass('active-acc');
		}

	});

});




        $('#icon-menu').on('click', function(){
            $('.meny').toggleClass('expand');
        });
        
       $('#icon-menu').on('click', function(){
            $('#icon-menu').toggleClass('trigger');
        });
        


		
		
	var img = $('.img-thumbnail'), large = $('#large');

	$(img).each(function(){
		$(this).on('click', function(e){
			e.preventDefault();
			var src = $(this).attr('src');
			$(large).attr('src', src);
			$(large).parent().attr('href', src);
		});
	});	


});