// patch for: /SISEWeb/pub/repair/studentRepairAppAction.do
;(function(siseme) {

  siseme.func('allbuttondisabled', function(source) {
    return source.replace(/document\.forms\((.+?)\)/ig, 'document.forms[$1]')
  })

  siseme.func('buttonDisabled', function(source) {
    return 'function buttonDisabled() {}'
  })

  document.form1 = document.getElementById('form1')

})(window.siseme)
