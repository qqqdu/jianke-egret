var keydown_event = (function(){
	var arr = {},
		arr2 = {},
		direct = [37,38,39,40],
		onoff = null;
	
	return function(code,callback,callback2,callback3){
		if(!arr[code]){  //只能为一个按键绑定一个事件
			arr[code] = [callback,true];
			arr2[code] = [callback2,true,callback3];
		}
		else
			return false;
		if(onoff)
			return false;
			document.addEventListener("keydown",function(ev){
				var keyCode = ev.keyCode; //按键
				if(!arr[keyCode])
					return;
				if(!arr[keyCode][1])
					return false;
				arr[keyCode][1] = false;
				arr[keyCode][0]&&arr[keyCode][0](keyCode);
			},true);
			document.addEventListener("keyup",function(ev){
				var keyCode = ev.keyCode; //按键
				if(!arr[keyCode])
					return;
				arr[keyCode][1] = true;
				arr2[keyCode][2]&&arr2[keyCode][2](keyCode); //自身事件
				for(var i  =0;i<4;i++){
					if(!arr[direct[i]][1])
						return false;
				}	
		
				arr2[keyCode][0]&&arr2[keyCode][0](keyCode); //按键共同事件
			})	
		onoff = true;
	}	
})();