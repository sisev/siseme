// patch for: /SISEWeb/pub/studentstatus/studentBalanceAction.do
;(function(siseme) {

  siseme.func('allbuttondisabled', function(source) {
    return source.replace(/document\.forms\((.+?)\)/ig, 'document.forms[$1]')
  })

})(window.siseme)
