;(function() {

  var patches = {
      '/sise/': 'login'
    , '/sise/login.jsp': 'login'
    , '/SISEWeb/pub/repair/studentRepairAppAction.do': 'studentRepairAppAction'
  }

  function insertScript(path) {
    var script = document.createElement('script')
    script.src = chrome.extension.getURL(path)
    document.body.appendChild(script)
  }

  function apply(name) {
    var sdk = document.createElement('script')
    sdk.src = chrome.extension.getURL('patch.js')
    document.body.appendChild(sdk)

    var patch = document.createElement('script')
    patch.src = chrome.extension.getURL('patches/' + name + '.js')
    document.body.appendChild(patch)
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
