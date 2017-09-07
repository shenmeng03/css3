//单击事件 tap
var swiped=false;
var WSP={};
//滑动事件swipe
WSP.swipe=function(ele){
	var isTouchMove, startTx, startTy;
	var ele=ele||document;
	ele.addEventListener('touchstart',function(e) {
		var touches = e.touches[0];
		startTx = touches.clientX;
		startTy = touches.clientY;
		isTouchMove = false;
	},
	false);
	ele.addEventListener('touchmove',function(e) {
		isTouchMove = true;
		e.preventDefault();
	},
	false);
	ele.addEventListener('touchend',function(e) {
		if (!isTouchMove) {
			return;
		}
		var touches = e.changedTouches[0],
		endTx = touches.clientX,
		endTy = touches.clientY,
		distanceX = startTx - endTx,
		distanceY = startTy - endTy,
		isSwipe = false;
		if (Math.abs(distanceX) >= Math.abs(distanceY)) {
			if (distanceX > 20) {
				//console.log('fire swipe left event');
				isSwipe = true;
			} else if (distanceX < -20) {
				//console.log('fire swipe right event');
				isSwipe = true;
			}
		} else {
			if (distanceY > 20) {
				//console.log('fire swipe up event');
				//console.log(window.isEnd);
				if(!swiped){
					game();
					drop();
				}
				isSwipe = true;
			} else if (distanceY < -20) {
				//console.log('fire swipe down event');
				isSwipe = true;
			}
		}
		if (isSwipe) {
			//console.log('fire swipe event');
		}
	},
	false);
}
var shuqian,score_text=0,hb_num=0;;
function game(){	
	swiped=true;
	score=((Math.random())*(1-0.1)+0.1).toFixed(2);
	hb_num++;	
	var score_show="+"+score+"元";
	var score_c=document.getElementById('score');
	var score_obj=document.getElementById('game-score');
	score_obj.innerHTML=score_show;
	score_text=parseFloat(score_c.innerHTML)+parseFloat(score);
	score_c.innerHTML=score_text.toFixed(2);
	if(score>=0.25){
		if(score_obj.className!="game-score"){
			score_obj.className='game-score';	
			document.getElementById('baoji1').className='xiaoguo7';	
			document.getElementById('baoji2').className='xiaoguo8';	
			
		}
	}else{
		score_obj.className='game-score1';
		document.getElementById('baoji1').className='xiaoguo9';	
		document.getElementById('baoji2').className='xiaoguo10';	
	}
	shuqian=setInterval(hb_show,10);
	setTimeout(function(){score_obj.style.display='block';},50);
	document.getElementById('baoji1').style.display="block";
	document.getElementById('baoji2').style.display="block";
	setTimeout(hidden,500);
	function hidden(){
		document.getElementById('baoji1').style.display="none";
		document.getElementById('baoji2').style.display="none";
		score_obj.style.display='none';
	}
}
var hb_height,hb_top;
function setHeight(size){
	var hb_con=document.getElementById('game-hb-con');
	var hbimg=document.getElementById('game-hbimg');
	var set=hbimg.style.top;
	window.hb_top=parseInt(set.substring(0,set.length-2))*size;
	hbimg.style.top=window.hb_top+'px';
	window.hb_height=590*size*1.5;
}
function hb_show(){
	var hb_con=document.getElementById('game-hb-con');
	var hbimg=document.getElementById('game-hbimg');
	var my_hb="<img src='images/hongbao.png' class='game-hbimg' id='game-hbimg'>";
	var hb_top1=hbimg.style.top.substring(0,hbimg.style.top.length-2);
	hbimg.style.top=parseInt(hb_top1)-50+"px";
	hbimg.style.opacity=1;
	var aa=parseInt(hbimg.style.top.substring(0,hbimg.style.top.length-2));	
	if(aa<-parseInt(window.hb_height)){
		clearInterval(shuqian);
		swiped=false;
		hb_con.removeChild(hbimg);
		var add_img=document.createElement('img');
		add_img.src="images/hongbao.png";
		add_img.className="game-hbimg";
		add_img.setAttribute('id','game-hbimg');
		add_img.style.top=window.hb_top+"px";
		hb_con.appendChild(add_img);		
	}
}

function drop(){//掉落效果
	var father=document.getElementById('game-con1');
	for(var i=1;i<7;i++){
		var myDiv=document.createElement("div");
		myDiv.className="xiaoguo"+i;
		document.getElementsByTagName("body")[0].appendChild(myDiv);
	}
	setTimeout(clear,1000)
}
function clear(){//清除添加图片	
	for(var i=1;i<7;i++){
		var myDiv=document.getElementsByClassName("xiaoguo"+i)[0];
		document.getElementsByTagName("body")[0].removeChild(myDiv);
	}
}

function end_show(){//游戏结束的弹窗
	document.getElementById('game_pop_bg').style.display="block";
	document.getElementById('game-pop-con').style.display="block";
	document.getElementById('game-show1').style.display="block";
	document.getElementById('recoed').innerHTML="本次成绩："+hb_num+"个红包，共"+score_text.toFixed(2)+"元"
}

function hidden(){//弹窗隐藏
	document.getElementById('game_pop_bg').style.display="none";
	document.getElementById('game-pop-con').style.display="none";
	document.getElementById('game-show1').style.display="none";
}

