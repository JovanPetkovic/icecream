var $ = require('jquery');
$(function(){
	var scrollEvents = {
		init: function(){
			this.cacheDom();
			this.parallax();
		},
		cacheDom: function(){
			this.$parallaxDiv1 = $($('.parallax-div')[0]);
			this.$parallaxDiv2 = $($('.parallax-div')[1]);
			this.$icecream = $('.ice-cream').find('img');
			this.$heart = $('.heart').find('img');
		},
		parallax: function(){
			var self = this;
			var wHeight = $(window).height();
			var loveScroll = $('.love').offset().top;
			$(window).on('scroll',function(){
				var wScroll = $(window).scrollTop();
				window.requestAnimationFrame(function(){
					if(wScroll<380){
						self.loveParallax(wScroll.toFixed(2));
					}
					if(wScroll+wHeight>=loveScroll){
						self.heartParallax((wScroll/20).toFixed(2));
						self.icecreamParallax((wScroll/20).toFixed(2));
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
		},
		heartParallax: function(wScroll){
			var percent = 60 - wScroll
			this.$heart.css({
				'top': percent + '%'
			})
		},
		icecreamParallax: function(wScroll){
			var percent = 70 - wScroll
			this.$icecream.css({
				'top': percent + '%'
			})
		}
	}
	scrollEvents.init();
})