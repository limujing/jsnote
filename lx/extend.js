// 把p中可枚举的属性复制到o中并返回o，如果o和p中有同名属性，则覆盖o中的属性
function extend(o, p) {
	for (var prop in p) {
		o[prop] = p[prop];
	}
	return o;
}
//将p中的可枚举的属性复制到o中，如果o和p中有同名属性，o中的属性不受影响，返回o（这个函数不处理getter和setter以及复制属性）
function merge(o, p) {
	for (var prop in p) {
		if (!o.hasOwnProperty(prop)) continue;
		o[prop] = p[prop];
	}
	return o;
}
//如果o中的属性在p中没有同名属性，则删除o中的这个属性，返回o
function restrict(o, p) {
	for (var prop in o) {
		if (!(prop in p)) delete o[prop];
	}
	return o;
}
// 如果o中的属性在p中存在同名属性，则从o中删除这个属性，返回o
function subtract(o, p) {
	for (var prop in p) {
		delete o[prop];
	}
	return o;
}
// 返回一个新对象，这个新对象同时拥有p和o中属性，如果o和p有重名属性 使用p中的属性
function union(o, p) {
	return extend(extend({}, o), p);
}
//返回一个同时拥有o和p属性的新对象，忽略p中的属性
function intersection(o, p) {
	return restrict(extend({}, o), p);
}
//返回一个数组这个数组包含的是o中可枚举的自有属性的名字
function keys(o) {
	var a = [];
	if ((typeof o) !== "object") throw new TypeError("参数必须是对象");
	if (Object.keys) Object.keys(o);
	for (var prop in o) {
		if (o.hasOwnProperty(prop)) a.push(prop);
	}
	return a;
}