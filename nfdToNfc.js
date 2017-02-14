var convertStringToWindow = function(str){
  var WINDOW_UNICODE_TYPE = 'NFC';
  str = str.normalize(WINDOW_UNICODE_TYPE);
  return str;
};
convertStringToWindow('맥에서 쓴 한글');