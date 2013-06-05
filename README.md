[SISEme](https://chrome.google.com/webstore/detail/siseme/npiceomhacgepmjpbjaigilkaedhcejc) [![Build Status](https://travis-ci.org/xingrz/siseme.png)](https://travis-ci.org/xingrz/siseme)
==========

修复[华软学院信息管理系统](http://class.sise.com.cn:7001/sise)中的 JavaScript 错误，让它能在 Chrome/Chromium 中使用。

----------

## 安装

登录 [Chrome Web Store](https://chrome.google.com/webstore/detail/siseme/npiceomhacgepmjpbjaigilkaedhcejc) 点击 **添加至CHROME** 即可完成安装。


## 当前已修复模块

- 登录
- 学生交费历史
- 网上报修
- 选课


## 如何制作补丁

**SISEme** 采用两种策略匹配需要修补的页面（这里假设您已经有一定的 JavaScript 基础）。

### 针对特定页面的修复

此策略用于对特定页面中的问题进行修复。

因不同权限的人在系统中可访问的模块不一样，所以难免有所遗漏。您可以按照下面的方法自行制作补丁：

1. 在`patches`目录中新建一个已`.js`扩展名结尾的补丁。推荐为每一个页面建立一个主文件名相同的文件。
2. 在`siseme.js`中增加补丁规则，一个 URL 对应一个补丁名（不用包括补丁的扩展名）。URL 可通过访问系统时检查调试台中本扩展的输出得到。
3. 编写补丁的代码，可参考 `studentRepairAppAction` 这枚补丁的代码进行修改。扩展提供了一个 `siseme.func` 辅助方法，第一个参数是需要修补的函数名（需要是全局中的），第二个参数是一个回调函数，回传入该函数的源代码字符串，修补后返回即可。
4. 访问对应的页面测试补丁，可观察控制台中该页面的 URL 末尾是否有`[patched]`字样已判断规则是否生效。

### 针对脚本修复

此策略适用于修复被大量页面调用的脚本中的错误，能够避免针对逐个页面修复同样问题的重复劳动。

`patches` 目录中的 `_general.js` 会被插入到每一个页面中：

```js
// 如果页面调用了特定JS则调用回调
siseme.script('/SISEWeb/js/public.js', function() {
  // 修补函数
  siseme.func('allbuttondisabled', function(source) {
    return source.replace(/document\.forms\((.+?)\)/ig, 'document.forms[$1]')
  })
})
```


假如您制作了补丁，强烈建议发一个 [Pull Request](https://help.github.com/articles/fork-a-repo) 给本项目，让更多人受惠 ^_^


## 作者

- [XiNGRZ](https://github.com/xingrz)


## 代码贡献者

Ordered by date of first contribution. [Auto-generated](https://github.com/xingrz/node-contributors) on Wed, 02 Jan 2013 14:55:22 GMT.

- [XiNGRZ](https://github.com/xingrz)


## 协议

**SISEme** is available under the terms of **MIT License**.
