/*
* @Author: Administrator
* @Date:   2017-02-14 22:40:16
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-14 23:30:57
*/

function animate(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag=true;
		for(var k in json){
			if(k =='opacity'){
				var target = json[k]*100;
				var leader =Math.round(getStyle(obj,k)*100)||100;
			}else{
				var target = json[k];
				var leader = parseInt(getStyle(obj,k))||0;
			}

			var step = (target-leader)/10;
			step = step >0 ? Math.ceil(step) : Math.floor(step);
			leader=leader+step;
			if(k =="opacity"){
				obj.style[k] = leader / 100;
				obj.style.filter = "alpha(opacity="+leader+")"
			}else if(k =="zIndex"){
				obj.style.zIndex = target;
			}
			else{
				obj.style[k] = leader+'px';

			}

			if(leader !=target){
				flag=false;
			}
		}
		if(flag){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	},30)
}
	function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return window.getComputedStyle(obj,null)[attr];
		}
	}
