// patch for: /SISEWeb/pub/repair/studentRepairAppAction.do
;(function(siseme) {

  siseme.func('buttonDisabled', function(source) {
    return 'function buttonDisabled() {}'
  })

})(window.siseme)
