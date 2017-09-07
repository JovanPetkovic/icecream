var $ = require('jquery');
$(function(){
	var content = {
		init: function(){
			this.cacheDom();
			this.parallax();
		},
		cacheDom: function(){
			this.$content = $('.content');
			this.$header = $('.header');
		},
		parallax: function(){
			$(window).on('scroll',function(){
				var self = this
				var wHeight = $(window).scrollTop();
				var move = (50 + wHeight/6).toFixed(2);
				if(wHeight>0){
					this.$header.addClass('scroll-header');
				}
				else{
					this.$header.removeClass('scroll-header');
				}
				if(move<131){
					window.requestAnimationFrame(function(){
						self.$content.css({
							'top' : move + '%',
							'opacity' : 1-(wHeight/400).toFixed(2)
						});
					});
				}
			}.bind(this))
		}
	}
	content.init();
})