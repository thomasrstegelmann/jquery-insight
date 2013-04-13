$.fn.extend({
	inSight: function (senstitivity) {  		
		var w = $(window),
		s = senstitivity || 0,
		viewportTop = w.scrollTop() - s,
		viewportBottom = (w.height() + w.scrollTop() + s),
		viewportLeft = w.scrollLeft() - s,
		viewportRight = (w.width() + w.scrollLeft() + s),				
		i = 0,
		l = this.length;
		for ( ; i < l; i++ ) {
			var e = $(this[i]);
			if ( (e.offset().top <  viewportBottom) && (e.offset().top + e.height() > viewportTop) && (e.offset().left <  viewportRight) && (e.offset().left + e.width() > viewportLeft) && (e.css('display') != 'none')  && (e.css('visibility') != 'hidden') && (e.css('opacity') != '0') ) {
				return true; 
			}
		}		

		return false;
	}
});
