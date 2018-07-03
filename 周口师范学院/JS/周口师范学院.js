window.onload=function(){
	input();
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
		var a=-50,
			timer1,
			timer2,
			timer3,
			num=0;
		setTimeout(changeImg,3000);

		function changeImg(){
			a=-50;
			clear();
			if (parseInt(ul.style.left)==(-5000)) {
				ul.style.left=0+'px';
			}
			for(var i=0;i<a2.length;i++){
				a2[i].style="";
			}
			if (parseInt(ul.style.left)%1000==0) {
				num++;
			}
			if (num==5) {
				num=0;
			}
			a2[num].style="border: 1px #F2C43B solid;"
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
		}



		left.onclick=function(){
			clear();
			if(parseInt(ul.style.left)==0){
				ul.style.left=(-5000)+'px';
			}
			a=50;
			for(var i=0;i<a2.length;i++){
				a2[i].style="";
			}
			if (parseInt(ul.style.left)%1000==0) {
				num--;
			}
			if (num==(-1)) {
				num=4;
			}
			a2[num].style="border: 1px #F2C43B solid;"
			timer3=setInterval(time,20)
		}
		right.onclick=changeImg;
	}
}