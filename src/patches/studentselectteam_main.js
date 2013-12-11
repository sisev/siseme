// patch for: /sise/module/select_class/studentselectteam_main.jsp
!(function (siseme) {

  siseme.func('delclass', function(source) {
    return source.replace(/document\.forms\((.+?)\)/ig, 'document.forms[$1]')
  })

  siseme.func('delclass2', function(source) {
    return source.replace(/document\.forms\((.+?)\)/ig, 'document.forms[$1]')
  })

  siseme.func('saveclass', function(source) {
    return source.replace(/document\.forms\((.+?)\)/ig, 'document.forms[$1]')
  })

  siseme.func('ParentClick', function(source) {
    return source.replace(/document\.forms\((.+?)\)/ig, 'document.forms[$1]')
  })

})(window.siseme)
