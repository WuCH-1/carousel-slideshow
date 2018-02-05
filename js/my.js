/*
* @Author: Administrator
* @Date:   2017-02-14 22:40:16
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-14 23:27:46
*/

window.onload = function(){
	var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var arrow = document.getElementById("arrow");
    var lis = slide.children[0].children;
    var json=[
        {   //  1
            width: 400,
            top: 20,
            left: 50,
            opacity: 0.2,
            zindex: 2
        },
        {  // 2
            width: 600,
            top: 70,
            left: 0,
            opacity: 0.8,
            z: 3
        },
        {   // 3
            width: 800,
            top: 100,
            left: 200,
            opacity: 1,
            z: 4
        },
        {  // 4
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            z: 3
        },
        {   //5
            width: 400,
            top: 20,
            left: 750,
            opacity: 0.2,
            z: 2
        }
    ];

    	function assign(){
		for(var i=0;i<lis.length;i++){
			animate(lis[i],{
				width:json[i].width,
				top:json[i].top,
				left:json[i].left,
				opacity:json[i].opacity,
				zIndex:json[i].z
			},function(){
				flag=true;
				});
		}

	}



    wrap.onmouseover = function(){
    	animate(arrow,{opacity:1});
    }
    wrap.onmouseout = function () {
    	animate(arrow, {opacity: 0});
    }

    arrow.children[0].onclick = function(){
    	if(flag){
    		json.unshift(json.pop());
    		assign();
    		flag = false;
    	}
    }

    arrow.children[1].onclick = function(){
    	if(flag){
    		json.push(json.shift());
    		assign();
    		flag=false;
    	}
    }

    assign();
	var flag=true;
}



