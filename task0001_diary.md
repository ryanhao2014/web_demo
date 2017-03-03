# CSS

* text-indent
> The text-indent property specifies the indentation of the first line in a text-block.

* text-transform
> The text-transform property controls the capitalization of text.

* text-decoration
> The text-decoration property specifies the decoration added to text.

* text-align
> The text-align property is used to set the horizontal alignment of a text.
A text can be left or right aligned, centered, or justified.

* word-spacing
> The word-spacing property increases or decreases the white space between words.

* white-sapce
> white-space: normal|nowrap|pre|pre-li#ne|pre-wrap|initial|inherit;  

## 6.1


* position

> position: static|absolute|fixed|relative|initial|inherit;

### position 属性值的含义：
 
* static
元素框正常生成。块级元素生成一个矩形框，作为文档流的一部分，行内元素则会创建一个或多个行框，置于其父元素中。
* relative
元素框偏移某个距离。元素仍保持其未定位前的形状，它原本所占的空间仍保留。
* absolute
元素框从文档流完全删除，并相对于其包含块定位。包含块可能是文档中的另一个元素或者是初始包含块。元素原先在正常文档流中所占的空间会关闭，就好像元素原来不存在一样。元素定位后生成一个块级框，而不论原来它在正常流中生成何种类型的框。
* fixed
元素框的表现类似于将 position 设置为 absolute，不过其包含块是视窗本身。
提示：相对定位实际上被看作普通流定位模型的一部分，因为元素的位置相对于它在普通流中的位置。
 
[position property in Chinese](http://www.w3school.com.cn/css/css_positioning.asp).
 
> position: static|absolute|fixed|relative|initial|inherit;

* static	
Default value. Elements render in order, as they appear in the document flow.
* absolute	
The element is positioned relative to its first positioned (not static) ancestor element.
* fixed	
The element is positioned relative to the browser window.
* relative	
The element is positioned relative to its normal position, so "left:20px" adds 20 pixels to the element's LEFT position.
* initial	
Sets this property to its default value. Read about initial.
* inherit	
Inherits this property from its parent element. Read about inherit.	

[position property](https://www.w3schools.com/cssref/pr_class_position.asp).

* 实现背景红色宽度960px的`<div>`在浏览器居中

`<body style="text-algin:center;">`以及在子`<div>`块中设置`margin:0 auto;`此种情况下为左右居中
`{width: 960px;height: 60px;position: absolute;left:50%;top:50%;margin-left: -480px;margin-top: -30px;}`其中`margin-left` 和`margin-top`的数值应该为width和height的一半。

* 不用border属性，纯css+div制作圆角矩形
> 原理是用8个高度、宽度很小的div块放在上下四角，并且这些div块相互并列，在最外面还有一个div块作为边框包含住这些小的div块，这些小的div块呈白色,其他背景、边框呈黑色，这样看起来矩形的四角就好像圆了。

不是很理解这个方法但是试着做了下。用绝对定位在4个角各放了一个矩形一个方形。代码如下：
> css` .white-box{background-color: white;height: 2px;position: absolute;}
.black-box{background-color: black;height: 60px;width: 600px;margin: 0 auto;}`
html` <div class="black-box">
	    	<div class="white-box" style="width:4px;"></div>
	    	<div class="white-box" style="width:2px;margin-top:2px;"></div>
	    	<div class="white-box" style="width:4px;margin-left:596px;"></div>
	    	<div class="white-box" style="width:2px;margin-top:2px;margin-left:598px;"></div>
	    	<div class="white-box" style="width:2px;margin-top:56px;"></div>
	    	<div class="white-box" style="width:4px;margin-top:58px;"></div>
	    	<div class="white-box" style="width:2px;margin:56px 0 2px 598px;"></div>
	    	<div class="white-box" style="width:4px;margin:58px 0 0 596px;;"></div>
	    </div>`
     
#### clear property清除浮动效果 `clear:left|right|both|none` 以及`.clearfix{overflow:auto;}`
[清除浮动clear和闭合浮动的区别](http://www.iyunlu.com/demo/enclosing-float-and-clearing-float/index.html)
> #### 为何要闭合浮动？
CSS中的定位机制：普通流，浮动，绝对定位 （其中"position:fixed" 是 "position:absolute" 的一个子类）。
使用:after 伪元素
需要注意的是 :after是伪元素（Pseudo-Element），不是伪类（某些CSS手册里面称之为“伪对象”），很多闭合浮动大全之类的文章都称之为伪类，不过csser要严谨一点，这是一种态度。
由于IE6-7不支持:after，使用 zoom:1触发 hasLayout。
 该方法源自于: [How To Clear Floats Without Structural Markup](http://www.positioniseverything.net/easyclearing.html)
原文全部代码如下:
`<style type="text/css">  .clearfix:after {  content: "."; display: block; height: 0; clear: both; visibility: hidden;  }   .clearfix {display: inline-block;}  /* for IE/Mac */   </style> <!--[if IE]> <style type="text/css"> .clearfix {zoom: 1;/* triggers hasLayout */  display: block;/* resets display for IE/Win */} </style>  <![endif]-->`
鉴于 IE/Mac的市场占有率极低,我们直接忽略掉,最后精简的代码如下:
`.clearfix:after {content:"."; display:block; height:0; visibility:hidden; clear:both; }
.clearfix { *zoom:1; }`
优点：结构和语义化完全正确,代码量居中
缺点：复用方式不当会造成代码量增加

#### [浮动详解（float）](http://www.iyunlu.com/view/css-xhtml/55.html)

#### [BFC（Block Formatting Context）](http://www.cnblogs.com/pigtail/archive/2013/01/23/2871627.html)直译为“块级格式化范围”
了解grid flexbox
> #### 如何产生BFC：当一个HTML元素满足下面条件的任何一点，都可以产生Block Formatting Context：
* float的值不为none。
* overflow的值不为visible。
* display的值为table-cell, table-caption, inline-block中的任何一个。
* position的值不为relative和static。

## Question
 * 1.对header设置css样式时 `.header{}`不起作用
 * 2.不清楚float属性在`ul`以及`li`中的适当使用
 * 3.在设置好ul 以及li 属性后，发现ul产生的无序列表无法被header contain。即无序列表浮动在外。 即闭合浮动问题。
 * 4.task_0001 index页，页面中content内容3个div块并列居中（浮动）效果实现较差以及费时间较长。
 * 5.footer浮动在content内容之上
 * 6.index页面很多部分在加入position:absolute后会变的一团糟。
 * 7.为什么页面中的各块没有按照顺序朝下排列？而是互相浮动在上方。
 
## Solution
* 1.在`<header>`中引入`<header class="header">`，css样式出现
* 2.只在li 属性中设置float 属性。
* 3. 解决方法1：为headr 设置weight 属性。 解决方法2：根据所需高度在浮动末尾加上相应数量的<br>。解决方法3：在浮动末尾加上一个清除浮动的div块 如`<div style="clear:both;></div>` 
解决方法4：  *推荐* 使用after伪元素 `.clearfix:after{content: ".";display: block;height: 0;clear:both;visibility:hidden;}
.clearfix { *zoom:1; }` 用一个`<div class="clearfix">`去contain浮动的范围。
* 4.方法1：直接在第一个div块中设置margin-left数值 之后其他2个div块按顺序浮动即可。 方法2：（能否让3个块自动居中呢？）
* 5.需要设置margin-top属性（？）
* 6.待解决（new一个页面进行不同的尝试来了解其详细属性。）
> * absolute
元素框从文档流完全删除，并相对于其包含块定位。包含块可能是文档中的另一个元素或者是初始包含块。元素原先在正常文档流中所占的空间会关闭，就好像元素原来不存在一样。元素定位后生成一个块级框，而不论原来它在正常流中生成何种类型的框。

* 7.待解决

#### something need to know
<!DOCTYPE> 声明不是 HTML 标签；它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令。
> 注释：<!DOCTYPE> 声明没有结束标签。
提示：<!DOCTYPE> 声明对大小写不敏感。
提示：请使用 W3C 的验证器来检查您是否编写了有效的 HTML / XHTML 文档！
#### HTML 5
`<!DOCTYPE html>`

