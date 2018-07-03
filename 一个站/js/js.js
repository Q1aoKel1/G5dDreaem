window.onload=function(){
	(function(){
		var find=document.getElementsByName("find");
		for(var i=0;i<find.length;i++){
			find[i].onclick=function(){
				this.value='';
			}
			find[i].onblur=function(){
				if (this.value=='') {
					this.value="Search website"
				}
			}
		}	
	}());

	var banner=(function(){
		var ul =document.getElementById("door_main");
		var left=document.getElementsByClassName("door_btn");
		var timer1,
			timer2,
			timer3,
			a=-20;
		changeImg()
		function changeImg(){
			clear();
			a=-20;
			if (parseInt(ul.style.left)==(-660)) {
				ul.style.left=0+"px";
			}
			timer1=setInterval(time,50)
		}

		function time(){
			ul.style.left=parseInt(ul.style.left)+a+'px';
			if (parseInt(ul.style.left)%220==0) {
				clear()
				timer2=setTimeout(changeImg,3000);
			}
		}

		function clear(){
			clearInterval(timer1)
			clearInterval(timer2)
			clearInterval(timer3)
		}

		left[0].onclick=function(){
			clear();
			a=20;
			if (parseInt(ul.style.left)==0) {
				ul.style.left=(-660)+'px';
			}
			timer3=setInterval(time,50)
		}
		left[1].onclick=changeImg;
	}());
}
