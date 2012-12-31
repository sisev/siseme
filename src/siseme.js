;(function() {

  function apply(name) {
    var script = document.createElement('script')
    script.src = chrome.extension.getURL('patches/' + name + '.js')
    document.body.appendChild(script)
  }

  var patches = {
      '/sise/login.jsp': 'login'
    , '/SISEWeb/pub/studentstatus/studentBalanceAction.do': 'studentBalanceAction'
    , '/SISEWeb/pub/repair/studentRepairAppAction.do': 'studentRepairAppAction'
  }

  console.log(location.pathname)

  if (patches[location.pathname]) apply(patches[location.pathname])

})()
