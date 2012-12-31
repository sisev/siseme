// patch for: /SISEWeb/pub/repair/studentRepairAppAction.do
;(function() {

  function patchFunc(func, fn) {
    if (window[func])
      window[func] = eval('(' + fn(window[func].toString()) + ')')
  }

  patchFunc('allbuttondisabled', function(source) {
    return source.replace(/document\.forms\((.+?)\)/ig, 'document.forms[$1]')
  })

  patchFunc('buttonDisabled', function(source) {
    return 'function buttonDisabled() {}'
  })

  document.form1 = document.getElementById('form1')

})()
