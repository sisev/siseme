;(function() {

  function apply(name) {
    var sdk = document.createElement('script')
    sdk.src = chrome.extension.getURL('patch.js')
    document.body.appendChild(sdk)

    var patch = document.createElement('script')
    patch.src = chrome.extension.getURL('patches/' + name + '.js')
    document.body.appendChild(patch)
  }

  var patches = {
      '/sise/': 'login'
    , '/sise/login.jsp': 'login'
    , '/SISEWeb/pub/studentstatus/studentBalanceAction.do': 'studentBalanceAction'
    , '/SISEWeb/pub/repair/studentRepairAppAction.do': 'studentRepairAppAction'
  }

  var match = patches[location.pathname]
  if (match) apply(match)

  console.log(location.pathname + (match ? '[patched]' : ''))

})()
