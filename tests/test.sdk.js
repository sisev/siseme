describe('patch sdk', function() {

  it('should be ok', function() {
    expect(window.siseme).to.be.exist
  })

  describe('.func()', function() {

    it('should be ok', function() {
      expect(window.siseme.func).to.be.a('function')
    })

    it('should modify a specified function in global', function() {
      window.__global_case__ = function() {
        return 'before modify'
      }

      window.siseme.func('__global_case__', function(source) {
        return source.replace('before modify', 'modified')
      })

      expect(window.__global_case__).to.be.a('function')
      expect(window.__global_case__()).equal('modified')

      window.__global_case__ = undefined
    })

    it('should not make new function if not exist', function() {
      window.siseme.func('__not_exist_func__', function(source) {
        return 'function() { return 1 }'
      })

      expect(window.__not_exist_func__).to.not.exist
    })

  })

  describe('.script()', function() {

    it('should be ok', function() {
      expect(window.siseme.script).to.be.a('function')
    })

    it('should call `fn` only if `script` exists', function() {
      var shouldBeCalled = false
        , shouldNotBeCalled = false

      window.siseme.script('/node_modules/mocha/mocha.js', function() {
        shouldBeCalled = true
      })

      window.siseme.script('/a/script/not/exist.js', function() {
        shouldNotBeCalled = true
      })

      expect(shouldBeCalled).equal(true)
      expect(shouldNotBeCalled).equal(false)
    })

  })

})