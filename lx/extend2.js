
//给原型添加属性
function keys(o){
	var a=[];
	if((typeof o)!=="object") throw new TypeError("参数必须是对象");
	if(Object.keys) Object.keys(o);
	for(var prop in o){
		if(o.hasOwnProperty(prop)) a.push(prop);
	}
	return a;
}
Object.defineProperty(Object.prototype,"extend",{
	writable:true,
	enumerable:false,
	configurable:true,
	value:function(o){
		var name=keys(o);
		for(var i=0;i<name.length;i++){
			if(name[i] in this) continue;
			var desc=Object.getOwnPropertyDescriptor(o,name[i]);
			Object.defineProperty(this,name[i],desc);
		}
	}
});
