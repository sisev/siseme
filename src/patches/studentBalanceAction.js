// patch for: /SISEWeb/pub/studentstatus/studentBalanceAction.do
;(function() {

  function patchFunc(func, fn) {
    if (window[func])
      window[func] = eval('(' + fn(window[func].toString()) + ')')
  }

  patchFunc('allbuttondisabled', function(source) {
    return source.replace(/document\.forms\((.+?)\)/ig, 'document.forms[$1]')
  })

})()
