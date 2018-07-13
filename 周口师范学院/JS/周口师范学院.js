window.onload=function(){
	weibo();
	banner();

	function weibo(){
		var ul=document.getElementById("ul2");
		var li=ul.getElementsByTagName("li");

		for(var i=0;i<li.length;i++){
			li[i].onmouseover=function(){
				this.children[0].firstElementChild.style.display="inline-block";
			}
			li[i].onmouseout=function(){
				this.children[0].firstElementChild.style.display="none";
			}
		}
	}

	function banner(){
		var left=document.getElementById('left');
		var right=document.getElementById('right');
		var ul=document.getElementById("main-image1_ul1");
		var ul2=document.getElementById('main-image1_bottom2_ul');
		var a2=ul2.getElementsByTagName('a');
		var img=document.getElementById('main-image1_ul1').children;
		var a=-50,
			timer1,
			timer2,
			timer3,
			num=0;
		changeImg();

		function changeImg(){
			a=-50;
			clear();
			if (parseInt(ul.style.left)==(-5000)) {
				ul.style.left=0+'px';
			}
			
			if (parseInt(ul.style.left)%1000==0) {
				num++;
			}
			if (num==5) {
				num=0;
			}
			for (var i = 0; i < a2.length; i++) {
				a2[i].className=''
			}
			a2[num].className="focusDiv"
			timer1=setInterval(time,20);

			
		}

		function time(){
			ul.style.left=parseInt(ul.style.left)+a+'px';
			
			if (parseInt(ul.style.left)%1000==0) {
				clear();
				timer2=setTimeout(changeImg,5000)
			}
		}

		function clear(){
			clearInterval(timer1)
			clearTimeout(timer2)
			clearInterval(timer3)
			clearTimeout(timer4)
		}

		left.onclick=function(){
			clear();
			if(parseInt(ul.style.left)==0){
				ul.style.left=(-5000)+'px';
			}
			a=50;
			if (parseInt(ul.style.left)%1000==0) {
				num--;
			}
			if (num==(-1)) {
				num=4;
			}
			for (var i = 0; i < a2.length; i++) {
				a2[i].className=''
			}
			a2[num].className="focusDiv"
			timer3=setInterval(time,20)
		}
		right.onclick=changeImg;
		var timer4;
		for (var i = 0; i < img.length; i++) {
			img[i].onmouseover=function(){
				ul.style.left=Math.floor(parseInt(ul.style.left)/1000)*1000+'px'
				clear()
			};
			img[i].onmouseout=function(){

				timer4 = setTimeout(changeImg,5000)
			};

			
		}
	}

	function move(){
		var move =document.getElementById("move");
		var close = move.getElementsByTagName('div')[0];
		var time,
			x=1,
			y=1;
		var clientWidth=document.body.clientWidth;
		var clientHeight=document.body.clientHeight;
		function moveDiv(){
			move.style.left=parseInt(move.style.left)+x+"px";
			move.style.top=parseInt(move.style.top)+y+"px";				
			if (parseInt(move.style.left)>=(clientWidth-270)) {
				x=-1;
			}
			if (parseInt(move.style.left)==0){
				x=1;
			}
			if (parseInt(move.style.top)>=(clientHeight-100)){
				y=-1;
			}
			if (parseInt(move.style.top)==0){
				y=1;
			}
		}

		time=setInterval(moveDiv,10)
		move.onmouseover=function(){
			clearInterval(time);
		}
		move.onmouseout=function(){
			time=setInterval(moveDiv,10)
		}
		close.onclick=function(){
			move.remove();
		}
	}
	move()
}
