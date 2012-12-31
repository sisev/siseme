// patch for: /sise/login.jsp
;(function() {

  function patchFunc(func, fn) {
    if (window[func])
      window[func] = eval('(' + fn(window[func].toString()) + ')')
  }

  patchFunc('loginwithpwd', function(source) {
    return source.replace(/document\.forms\((.+?)\)/ig, 'document.forms[$1]')
  })

})()
