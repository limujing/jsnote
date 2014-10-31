function inherit(prototypeObj) {
	if (prototypeObj == null) {throw new TypeError();};
	if (Object.create) return Object.create(prototypeObj);
	var t=typeof prototypeObj;
	if (t!=="object"&&t!=="function") throw TypeError();
	function f () {};
	f.prototyoe=prototypeObj;
	return new f();
}