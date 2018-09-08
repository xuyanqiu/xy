/*
 * 文档就绪开始
 */

$(function() {
	
	//获得回到顶部按钮
	var topcontrol = $('#topcontrol');
	
	//获得导航条对象
	var nav = $('.nav-wrap');
	
	//获得导航条相对于网页原点的垂直位置
	var navPos = nav.offset().top;
	
	//获得导航条的高度
	var navHeight = nav.outerHeight();
	
	//滚动条事件
	$(window).scroll(function() {
		
		//获得滚动条的位置
		var sTop = $(window).scrollTop();
		//判断滚动条位置，动态显示隐藏 回到顶部的按钮
		if (sTop >= 200) {
			//淡入
			topcontrol.fadeIn('normal');
		} else {
			//淡出
			topcontrol.fadeOut('normal');
		}
		
		//自动给导航条加fixed样式
		if (sTop >= navPos) {
			if ( !nav.hasClass('fix')) {
				nav.addClass('fix');
				$('.banner').css('margin-bottom',navHeight);//占位
			}
		} else {
			if ( nav.hasClass('fix')) {
				nav.removeClass('fix');
				$('.banner').css('margin-bottom',0);//占位
			}
		}
			
		//判断是否进入了海量正版免费下的区域
		var introPos = {
			start: $('#post-intro').offset().top - navHeight,
			end: $('#post-intro').offset().top + $('#post-intro').outerHeight() - navHeight
		}
		
		if (sTop >= introPos.start && sTop < introPos.end) {
			
			$('.post-intro').addClass('active');
		} else {
			
			$('.post-intro').removeClass('active');
		}	
		
		//判断是否进入了无需苹果账号区域
		var usagePos = {
			start: $('#post-usage').offset().top - navHeight,
			end: $('#post-usage').offset().top + $('#post-usage').outerHeight() - navHeight
		}
		
		if (sTop >= usagePos.start && sTop < usagePos.end) {
			
			$('.post-usage').addClass('active');
		} else {
			
			$('.post-usage').removeClass('active');
		}
		
		//判断是否进入了手机瘦身
		var choicePos = {
			start: $('#choiceness').offset().top - navHeight,
			end: $('#choiceness').offset().top + $('#choiceness').outerHeight() - navHeight
		}
		
		if (sTop >= usagePos.start && sTop < usagePos.end) {
			
			$('.choiceness').addClass('active');
		} else {
			
			$('.choiceness').removeClass('active');
		}
	});
	
	
	//回到顶部按钮单击
	topcontrol.click(function() {
		
		$('html,body').animate({
			
			scrollTop:0
		},1000);
		
	});
	
	//网页内部锚点链接跳转
	$('.nav-wrap a').click(function() {
		
		//获得对应区域相对于网页原点的位置
		var top = $(this.hash).offset().top - navHeight + 7;
		//动画过渡到锚点链接
		$('html,body').animate({
			scrollTop:top
		},1000);
	});
	
});
