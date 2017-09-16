var $ = require('jquery');
$(function(){
	var softdivScroll = {
		init: function(){
			this.cacheDom();
			this.parallax();
		},
		cacheDom: function(){
			this.$parallaxDiv1 = $($('.parallax-div')[2]);
			this.$parallaxDiv2 = $($('.parallax-div')[3]);
		},
		parallax: function(){
			var self = this;
			var wHeight = $(window).height();
			var softScroll = $('.soft').offset().top;
			$(window).on('scroll',function(){
				var wScroll = $(window).scrollTop();
				window.requestAnimationFrame(function(){
					if((wScroll+wHeight-softScroll>0)&&(wScroll+wHeight-softScroll<380)){
						self.loveParallax((wScroll+wHeight-softScroll).toFixed(2));
					}
				})
			})
		},
		loveParallax: function(wScroll){
			this.$parallaxDiv1.css({
				'width': wScroll +'px'
			})
			this.$parallaxDiv2.css({
				'width': wScroll +'px'
			})
		}
	}
	softdivScroll.init();
})