# Java Script数组与对象
### 数组Array
indexOf
与String类似，Array可以通过indexOf()来搜索一个指定的元素的位置：
> * `var arr = [10, 20, '30', 'xyz'];`
* `arr.indexOf(10); // 元素10的索引为0`
* `arr.indexOf(20); // 元素20的索引为1`
* `arr.indexOf(30); // 元素30没有找到，返回-1`
* `arr.indexOf('30'); // 元素'30'的索引为2`
#### 对于多维数组
* 如果数组的某个元素又是一个Array，则可以形成多维数组，例如：
`var arr = [[1, 2, 3], [400, 500, 600], '-'];`
* 上述Array包含3个元素，其中头两个元素本身也是Array。
`var x = arr[1].indexOf(500);//x=1`  
* 注意数组用的是`[]`而函数用的是`()`

> #### 减少 JavaScript 对性能的影响有以下几种方法：
* 将所有的`<script>`标签放到页面底部，也就是`</body>`闭合标签之前，这能确保在脚本执行前页面已经完成了渲染。
* 尽可能地合并脚本。页面中的`<script>`标签越少，加载也就越快，响应也越迅速。无论是外链脚本还是内嵌脚本都是如此。
* 采用无阻塞下载 JavaScript 脚本的方法：
* 使用`<script>`标签的 defer 属性（仅适用于 IE 和 Firefox 3.5 以上版本）；
* 使用动态创建的`<script>`元素来下载并执行代码；
* 使用 XHR 对象下载 JavaScript 代码并注入页面中。 

* JavaScript 中数字开头的属性不能跟在点号后面；必须在方括号中使用。比如说，如果你有一个名为 ‘3d’ 的属性，它只能通过方括号的形式进行访问。 换言之访问合法的属性名可以用"."或者"[ ]",但是访问非法的属性只能用"[ ]"
### 对象Object
#### 遍历
for..in..循环集合本身的元素以及后来添加的元素（如var a=['a','b','c'];var a.name='d'; 此时使用for..in..会遍历到a.name属性）
for..of.. 只循环集合本身的元素
Array.forEach(function(element,index,array){
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    alert(element); });

JavaScript中基本类型的传值都是值传递（传值by value）[值传递、引用传递、共享传递](https://segmentfault.com/a/1190000005794070)
> #### 按共享传递 call by sharing
准确的说，JS中的基本类型按值传递，对象类型按共享传递的(call by sharing，也叫按对象传递、按对象共享传递)。最早由Barbara Liskov. 在1974年的GLU语言中提出。该求值策略被用于Python、Java、Ruby、JS等多种语言。
该策略的重点是：调用函数传参时，函数接受对象实参引用的副本(既不是按值传递的对象副本，也不是按引用传递的隐式引用)。 它和按引用传递的不同在于：在共享传递中对函数形参的赋值，不会影响实参的值。如下面例子中，不可以通过修改形参o的值，来修改obj的值。


#### [JavaScript 深拷贝和浅拷贝](http://www.jb51.net/article/91906.htm)
> #### 深拷贝复制对象代码如下：
* `function cloneObject(src){ `
* `if(typeof(src) != 'object') return src; `
* `if(src == null) return src;` 
* `var myNewObj = new Object();` 
* `for(var i in src) `
* `myNewObj[i] = cloneObject(src[i]); `
* `return myNewObj; } `

