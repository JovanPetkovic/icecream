var $ = require('jquery');
$(function(){
	var videoScroll = {
		init: function(){
			this.cacheDom();
			this.parallax();
		},
		cacheDom: function(){
			this.$parallaxDiv1 = $($('.parallax-div')[4]);
			this.$parallaxDiv2 = $($('.parallax-div')[5]);
		},
		parallax: function(){
			var self = this;
			var wHeight = $(window).height();
			var videoScroll = $('.video').offset().top;
			$(window).on('scroll',function(){
				var wScroll = $(window).scrollTop();
				window.requestAnimationFrame(function(){
					if((wScroll+wHeight-videoScroll>0)&&(wScroll+wHeight-videoScroll<380)){
						self.loveParallax((wScroll+wHeight-videoScroll).toFixed(2));
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
	var videoPlay = {
		init: function(){
			this.cacheDom();
			this.play();
		},
		cacheDom: function(){
			this.$btnVideo1 = $($('.video1').find('button'));
			this.$btnVideo2 = $($('.video2').find('button'));
			this.$btnVideo3 = $($('.video3').find('button'));
			this.$video1 = $('.wideo1');
			this.$video2 = $('.wideo2');
			this.$video3 = $('.wideo3');
			this.$exit = $('.exitbtn');
			this.$videoBox = $('.videobox');
			this.$videoBox.hide();
		},
		play: function(){
			var self = this;
			this.$btnVideo1.on('click', function(){
				self.$videoBox.show(500);
				self.$video1.show(500);
				self.$video1.get(0).play();
				self.$exit.on('click',function(){
					console.log('clicked')
					self.$videoBox.hide(500);
					self.$video1.hide(500);
					self.$video1.get(0).pause();
				})
			})
			this.$btnVideo2.on('click', function(){
				self.$videoBox.show(500);
				self.$video2.show(500);
				self.$video2.get(0).play();
				self.$exit.on('click',function(){
					self.$videoBox.hide(500);
					self.$video2.hide(500);
					self.$video2.get(0).pause();
				})
			})
			this.$btnVideo3.on('click', function(){
				self.$videoBox.show(500);
				self.$video3.show(500);
				self.$video3.get(0).play();
				self.$exit.on('click',function(){
					self.$videoBox.hide(500);
					self.$video3.hide(500);
					self.$video3.get(0).pause();
				})
			})
		}
	}
	videoPlay.init();
	videoScroll.init();
})