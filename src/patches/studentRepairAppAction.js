// patch for: /SISEWeb/pub/repair/studentRepairAppAction.do
;(function(siseme) {

  siseme.func('buttonDisabled', function(source) {
    // 太难搞了
    return 'function buttonDisabled() {}'
  })

})(window.siseme)
