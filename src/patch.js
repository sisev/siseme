!(function (exports) {

  var siseme = exports.siseme = {}

  var scripts = [].slice.call(document.scripts).map(function(el) {
    return (0 === el.src.indexOf(location.origin))
         ? el.src.substr(location.origin.length)
         : el.src
  })

  siseme.func = function(fn, patch) {
    if (window[fn])
      window[fn] = eval('(' + patch(window[fn].toString()) + ')')
  }

  siseme.script = function(script, fn) {
    if (-1 !== scripts.indexOf(script)) fn()
  }

})(window)
