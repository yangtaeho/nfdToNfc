var Triple = function(first, second, third) {
	var _first;
	var _second;
	var _third;
	
	if (first) {
		_first = first;
	}
	if (second) {
		_second = second;
	}
	if (third) {
		_third = third;
	}
	
	this.getFirst = function() {
		return _first;
	};
	this.setFirst = function(v) {
		_first = v;
	};
	this.getSecond = function() {
		return _second;
	};
	this.setSecond = function(v) {
		_second = v;
	};
	this.getThird = function() {
		return _third;
	};
	this.setThird = function(v) {
		_third = v;
	};
	return this;
};
var convertStringToWindow = function(str){
	var WINDOW_UNICODE_TYPE = 'NFC';
	
	var delim;
	if (0 <= str.indexOf('\r\n')) {
		delim = '\r\n';
	} else if (0 <= str.indexOf('\n')) {
		delim = '\n';
	} else {
		delim = '';
	}
	
	var convert = function(v) {
		return v.normalize(WINDOW_UNICODE_TYPE);
	}
	if (delim == '') {
		return new Triple(convert(str), str, '');
	} else {
		var olds = str.split(delim);
		var news = olds.reduce(function(res, v) {
			res.push(convert(v));
			return res;
		}, []);
		return new Triple(news, olds, delim);
	}
};
