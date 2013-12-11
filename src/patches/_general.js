// general patch (maily for /SISEWeb/js/public.js)
!(function (siseme) {

  siseme.script('/SISEWeb/js/public.js', function() {
    siseme.func('allbuttondisabled', function(source) {
      return source.replace(/document\.forms\((.+?)\)/ig, 'document.forms[$1]')
    })

    document.form1 = document.form1
                  || document.getElementById('form1')
  })

})(window.siseme)
