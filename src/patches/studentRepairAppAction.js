// patch for: /SISEWeb/pub/repair/studentRepairAppAction.do
;(function(siseme) {

  siseme.func('buttonDisabled', function(source) {
    return 'function buttonDisabled() {}'
  })

  document.form1 = document.getElementById('form1')

})(window.siseme)
