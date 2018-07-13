var guanggao=document.getElementsByClassName("guanggao")[0];
var	guanggaoGuanli=document.getElementsByClassName("guanggao-guanli")[0];
var guanggaoTrue=true,
	userTrue=true;
var userMe=document.getElementsByClassName("user-me")[0];
var	userGuanli=document.getElementsByClassName("user-guanli")[0];
guanggao.onclick=function(){	//
	if (guanggaoTrue) {
		guanggaoGuanli.style.display='none'
		guanggaoTrue=false;
	}else{
		guanggaoGuanli.style.display='block'
		guanggaoTrue=true;
	}
}
userMe.onclick=function(){
	if (userTrue) {
		userGuanli.style.display='none'
		userTrue=false;
	}else{
		userGuanli.style.display='block'
		userTrue=true;
	}
}



var date1 = document.getElementById("date1");
var date1num='';
date1.onchange=function(){
	date1num=this.value;
}

var date2 = document.getElementById("date2");
var date2num='';
date2.onchange=function(){
	date2num=this.value;
}


var chaxun = document.getElementById("chaxun");
var newText='';
var textTittle = document.getElementsByClassName("text-tittle")[0].getElementsByTagName('tbody')[0];
chaxun.onclick=function(){
	var arr=[];
	if (date1num==""||date2num=='') {
		alert("请选择查询时间")
	}
	textTittle.innerHTML =`<tr>
							<td></td>
							<td>推广人</td>
							<td>IP</td>
							<td>赚取NAC</td>
							<td>浏览时间</td>
						</tr>`;
	var xhr = new XMLHttpRequest();
	xhr.open("get","index.json",true)
	xhr.onload=function(){
		if (this.status==200) {
			var text = JSON.parse(this.responseText);
			for(var i=0;i<text.length;i++){
				if (text[i].date>=date1num&&text[i].date<=date2num) {
					arr.push(text[i]);
				}
			}
			for(var i = 0;i<arr.length;i++){
				var a=i+1;
				newText = `<tr><td>`+a+`</td><td>`+arr[i].name+`</td><td>`+arr[i].IP+`</td><td>`+arr[i].NAC+`</td><td>`+arr[i].date+`</td></tr>`
				textTittle.innerHTML+=newText;
			}
		}
	}
	xhr.send()
}

var reset=document.getElementById("reset");
reset.onclick=function(){
	date1.value="";
	date1num='';
	date2.value="";
	date2num='';
	textTittle.innerHTML =`<tr>
							<td></td>
							<td>推广人</td>
							<td>IP</td>
							<td>赚取NAC</td>
							<td>浏览时间</td>
						</tr>`;
}