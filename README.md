[SISEme](https://chrome.google.com/webstore/detail/siseme/npiceomhacgepmjpbjaigilkaedhcejc)
==========

修复[华软学院信息管理系统](http://class.sise.com.cn:7001/sise)中的 JavaScript 错误，让它能在 Chrome/Chromium 中使用。

----------

## 安装

登录 [Chrome Web Store](https://chrome.google.com/webstore/detail/siseme/npiceomhacgepmjpbjaigilkaedhcejc) 点击 **添加至CHROME** 即可完成安装。


## 当前已修复模块

- 登录
- 学生交费历史
- 网上报修


## 如何制作补丁

**SISEme** 目前采取针对特定页面逐一修补的方式修复兼容问题，因此难免有漏网的页面未被修复。您可以采取以下方式自行制作补丁：（这里假设您已经有一定的 JavaScript 基础）

1. 在`patches`目录中新建一个已`.js`扩展名结尾的补丁。推荐为每一个页面建立一个主文件名相同的文件。
2. 在`siseme.js`中增加补丁规则，一个 URL 对应一个补丁名（不用包括补丁的扩展名）。URL 可通过访问系统时检查调试台中本扩展的输出得到。
3. 编写补丁的代码，可参考 `studentRepairAppAction` 这枚补丁的代码进行修改。扩展提供了一个 `siseme.func` 辅助方法，第一个参数是需要修补的函数名（需要是全局中的），第二个参数是一个回调函数，回传入该函数的源代码字符串，修补后返回即可。
4. 访问对应的页面测试补丁，可观察控制台中该页面的 URL 末尾是否有`[patched]`字样已判断规则是否生效。
5. 可选但强烈建议的，把您制作的补丁发一个 [Pull Request](https://help.github.com/articles/fork-a-repo) 给本项目，让更多人受惠 ^_^

PS：小编也有做针对选课页面的补丁，但现在没机会测试了，等下学期的选课吧 T_T


## 作者

- [XiNGRZ](https://github.com/xingrz)


## 代码贡献者

Ordered by date of first contribution. [Auto-generated](https://github.com/xingrz/node-contributors) on Wed, 02 Jan 2013 14:55:22 GMT.

- [XiNGRZ](https://github.com/xingrz)


## 协议

**SISEme** is available under the terms of **MIT License**.
