;(function(exports) {

  var siseme = exports.siseme = {}

  siseme.func = function(fn, patch) {
    if (window[fn])
      window[fn] = eval('(' + patch(window[fn].toString()) + ')')
  }

})(window)
