$(".hover1:first").hover(function(){		//head栏内容显示隐藏
	$('.head_1_ul1_div2').toggle()
})
$(".hover1:eq(2)").hover(function(){
	$(".head_1_ul1_ul:eq(0)").toggle()
})

$(".hover1:eq(3)").hover(function(){
	$(".head_1_ul1_ul:eq(1)").toggle()
})

$(".hover1:eq(4)").hover(function(){
	$(".head_1_ul1_ul:eq(2)").toggle()
})

$(".hover1:eq(5)").hover(function(){
	$(".head_1_ul1_ul:eq(3)").toggle()
})

$(".hover1:eq(6)").hover(function(){
	$("#wangzhandaohang").toggle()
})


$(".find_finds_ul li").hover(function(){		//logo栏内容显示
	if (!$(this).hasClass("find_finds_ul_click")) {
		$(this).css("background","#ffeee5")
	}	
},function(){
	if (!$(this).hasClass("find_finds_ul_click")) {
		$(this).css("background","none")
	}
})

$('.find_finds_ul li').click(function(){
	$(".find_finds_ul li").removeClass("find_finds_ul_click");
	$(".find_finds_ul li").css("background","none")
	if (!$(this).hasClass("find_finds_ul_click")) {
		$(this).addClass("find_finds_ul_click")
		$(this).css("background-image","linear-gradient(to right,#ff9000 0,#ff5000 100%")
	}
})



$("#erweima>a:eq(0)").click(function(){
	$('#erweima').css("display","none")
})

$("#main_left li").hover(function(){
	$(this).children("a,span").css("color","#f40")
	var index1=0;
	for(var i=0;i<16;i++){
		$("#main_left li")[i].index1=i;
	}
	$("#main_left div[data-index]").css('display','none')
	$("#main_left div[data-index]")[this.index1].style.display='block'
},function(){
	$(this).children("a,span").css("color","#666666")
	$("#main_left div[data-index]").css('display','none')
})

$("#main_left div[data-index]").hover(function(){
	$(this).css('display',"block")
},function(){
	$(this).css('display',"none")
})



$(".main_center_bnner1_ul1").hover(function(){
	$(".btn_left, .btn_right").css("display","block")
},function(){
	$(".btn_left, .btn_right").css("display","none")
})
$(".btn_left, .btn_right").hover(function(){
	$(".btn_left, .btn_right").css({"opacity":"0.7","display":"block"});
},function(){
	$(".btn_left, .btn_right").css({"opacity":"0.3","display":"none"});
})

$(".main_center_bnner1_ul2").hover(function(){
	$(".btn_left2, .btn_right2").css("display","block")
},function(){
	$(".btn_left2, .btn_right2").css("display","none")
})
$(".btn_left2, .btn_right2").hover(function(){
	$(".btn_left2, .btn_right2").css({"opacity":"0.7","display":"block"});
},function(){
	$(".btn_left2, .btn_right2").css({"opacity":"0.3","display":"none"});
})

var timer1,
	timer2,
	timer3,
	a=-20,
	timer4,
	timer5,
	timer6,
	b=-20,
	num=0,
	num2=0;
function change(){
	$(".main_center_bnner1_ul1")[0].style.left=parseInt($(".main_center_bnner1_ul1")[0].style.left)+a+'px';
	if (parseInt($(".main_center_bnner1_ul1")[0].style.left)%520==0) {
		clear();
		timer2=setTimeout(begin,4000)
	}
	if (parseInt($(".main_center_bnner1_ul1")[0].style.left)==(-2600)) {
		$(".main_center_bnner1_ul1")[0].style.left=0+'px';
	}
}
function begin(){
	clear();
	a=-20;
	timer1=setInterval(change,10)
}
function clear(){
	clearInterval(timer1)
	clearTimeout(timer2)
	clearInterval(timer3)
}
$(".btn_left").click(function(){
	clear();
	if (parseInt($(".main_center_bnner1_ul1")[0].style.left)==0) {
		$(".main_center_bnner1_ul1")[0].style.left=(-2600)+'px';
	}
	a=+20;
	timer3=setInterval(change,10)
})
$(".btn_right").click(begin)
begin()


function change2(){
	$(".main_center_bnner1_ul2")[0].style.left=parseInt($(".main_center_bnner1_ul2")[0].style.left)+b+'px'
	if (parseInt($(".main_center_bnner1_ul2")[0].style.left)%520==0) {
		clear2();
		timer5=setTimeout(bengin2,5000)
	}
	if (parseInt($(".main_center_bnner1_ul2")[0].style.left)==(-3120)) {
		$(".main_center_bnner1_ul2")[0].style.left=0+"px";
	}
}
function bengin2(){
	clear2();
	b=-20;
	if (parseInt($(".main_center_bnner1_ul2")[0].style.left)%520==0) {
		num2++;	
	}
	if (num2==6) {
		num2=0;
	}
	$(".main_center_div span").text(num2+1)

	for(var i=0;i<6;i++){
		$(".caihonglan li")[i].style.backgroundColor="#ff1648";
	}
	$(".caihonglan li")[num2].style.backgroundColor="#000000";

	timer4=setInterval(change2,10)
}
function clear2(){
	clearInterval(timer4)
	clearTimeout(timer5)
	clearInterval(timer6)
}

$(".btn_left2").click(function(){
	clear2();
	if (parseInt($(".main_center_bnner1_ul2")[0].style.left)==0) {
		$(".main_center_bnner1_ul2")[0].style.left=(-3120)+"px";
	}

	b=20;
	if (parseInt($(".main_center_bnner1_ul2")[0].style.left)%520==0) {
		num2--;	
	}
	if (num2==-1) {
		num2=5;
	}
	$(".main_center_div span").text(num2+1)

	for(var i=0;i<6;i++){
		$(".caihonglan li")[i].style.backgroundColor="#ff1648";
	}
	$(".caihonglan li")[num2].style.backgroundColor="#000000";

	timer6=setInterval(change2,10);
})
$(".btn_right2").click(bengin2)
bengin2()

var num=1;
$(window).scroll(function(){
	if( $(window).scrollTop() >=447){
		$(".toTOP").css({"position":"fixed","left":"1280px","top":"75px"})
	}else{
		$(".toTOP").css({"position":"absolute","left":"300px","top":"290px"})
	}
	if ($(window).scrollTop() >=148) {
		$(".fixedTop").css("display","block")
	}else{
		$(".fixedTop").css("display","none");
	}
})
