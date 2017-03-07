# Java Script
> #### 减少 JavaScript 对性能的影响有以下几种方法：
* 将所有的`<script>`标签放到页面底部，也就是`</body>`闭合标签之前，这能确保在脚本执行前页面已经完成了渲染。
* 尽可能地合并脚本。页面中的`<script>`标签越少，加载也就越快，响应也越迅速。无论是外链脚本还是内嵌脚本都是如此。
* 采用无阻塞下载 JavaScript 脚本的方法：
* 使用`<script>`标签的 defer 属性（仅适用于 IE 和 Firefox 3.5 以上版本）；
* 使用动态创建的`<script>`元素来下载并执行代码；
* 使用 XHR 对象下载 JavaScript 代码并注入页面中。 

* JavaScript 中数字开头的属性不能跟在点号后面；必须在方括号中使用。比如说，如果你有一个名为 ‘3d’ 的属性，它只能通过方括号的形式进行访问。 换言之访问合法的属性名可以用"."或者"[ ]",但是访问非法的属性只能用"[ ]"