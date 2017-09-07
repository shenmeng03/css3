(function (doc, win) {
	var clientWidth
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            clientWidth= docEl.clientWidth;
            if (!clientWidth) return;
			if(document.getElementById('game-hbimg')){
				setHeight(clientWidth / 1080);
    		}
	        docEl.style.fontSize =100*(clientWidth / 1080)+ 'px';
        };
    // Abort if browser does not support addEventListener
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
	
})(document,window);
