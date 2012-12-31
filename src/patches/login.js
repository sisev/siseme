// patch for: /sise/login.jsp
;(function(siseme) {

  siseme.func('loginwithpwd', function(source) {
    return source.replace(/document\.forms\((.+?)\)/ig, 'document.forms[$1]')
  })

})(window.siseme)
