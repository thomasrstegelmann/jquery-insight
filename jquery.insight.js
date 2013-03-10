$.fn.extend({
    inSight: function (senstitivity) {  		
		var senstitivity = senstitivity || 0,
			viewportTop = $(window).scrollTop() - senstitivity,
			viewportBottom = ($(window).height() + $(window).scrollTop() + senstitivity),
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( ($(this[i]).offset().top <  viewportBottom) && ($(this[i]).offset().top + $(this[i]).height() > viewportTop) ) {
				return true;
			}
		}		
	
    return false;
  }
});
