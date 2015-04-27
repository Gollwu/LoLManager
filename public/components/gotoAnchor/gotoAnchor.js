/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
     /* goto anchor */
    var $root = $('html, body');
	function gotoAnchor(theid,elementClick){
		var href = theid;
        var st = $(window).scrollTop();
        window.location.hash = href;
        $(window).scrollTop(st);
	    scrolltoanchor = true;
	    var headerHeight = $('.navbar-fixed-top').outerHeight();
	    if(scrolltoanchor == true){
		    $root.animate({
		        scrollTop: $(href).offset().top-headerHeight
		    }, 500);
	    }
	    return false;
	}
    $('.scroll').click(function(e) {
    	e.preventDefault();
	    gotoAnchor($(this).attr('href'),$(this).attr('id'));
	});
});
