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

* 背景红色宽度960px的`<div>`在浏览器居中
`margin:0 auto;`
