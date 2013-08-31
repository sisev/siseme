;(function() {

  var patches = {
    , '/SISEWeb/pub/repair/studentRepairAppAction.do': 'studentRepairAppAction'
    , '/sise/module/select_class/studentselectteam_main.jsp': 'studentselectteam_main'
  }

  function insertScript(path) {
    var script = document.createElement('script')
    script.src = chrome.extension.getURL(path)
    document.body.appendChild(script)
  }

  // insert patch sdk
  insertScript('patch.js')

  // insert general patch
  insertScript('patches/_general.js')

  // insert specified patch
  var match = patches[location.pathname]
  if (match) insertScript('patches/' + match + '.js')

  console.log(location.pathname + (match ? '[patched]' : ''))

})()
