//如果是pc端浏览器自动跳转到pc/index.html
//如果是苹果安卓手机自动跳转mobile/index.html

var userAgent = navigator.userAgent.toLowerCase();

if (userAgent.indexOf('android') != -1 
	|| userAgent.indexOf('iphone') != -1 
	|| userAgent.indexOf('ipad') != -1) {

	location.href = '../mobile/index.html';
}