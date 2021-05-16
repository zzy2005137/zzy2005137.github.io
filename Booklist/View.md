# 页面设计 ： HTML & CSS



## Overview

页面设计我只用到了HTML与CSS。我希望我我写的文档能讲清楚一些最基本的、最核心的概念，以及它们之间的关系。

所以以下内容将会被涵盖到：

+ 什么是HTML与CSS，它们的作用与关系

+ 如何使用HTML与CSS设计简单的网页

  

## What is

打开浏览器，输入网址，就能够进入到某个网站的主页。网站提供内容，或是其他服务。这是用户的角度。

换个角度看，整个过程是如何工作的呢？首先这是一个交互的过程，交互的双方是浏览器(`browser`)与服务器(`server`)，双方在物理上可以存在于世界上任何一个角落，只要能联网。浏览器发送请求(`request`)，服务器响应请求(`response`)，并传输请求的文件，浏览器接收到文件之后解读并显示到屏幕上。而这个文件，主要就是由HTML, CSS，JS 写成的网页。在打开的每一个网页里，都可以F12查看源代码；也可以自己写一个HTML文件，然后用浏览器打开。

对于内容显示，我们每天所阅读到的内容，都是有一定结构的。就像报纸文章一样，有标题，副标题，段落和图片。这里的结构是为内容而服务的。除此之外，不同的字体，行间距，页面留白，排版也会有不同的阅读体验。这些则称为样式设计。

结构设计由HTML负责，样式设计由CSS负责，二者各有分工，同时相互合作。此外，网页区别于书本等纸质材料最大的特点是交互性，它能够根据用户的动作，而选择干什么，而这种动态交互的功能，则用JavaScript实现。三者都可以说是一种语言，但HTML 与 CSS 并不是严格意义上的编程语言，只能算是一种标记语言。



## HTML

> HTML describe the structure of pages using elements



### Element, Tag and Attribute

+ html代码结构：

``` html
<!DOCTYPE html>
<html>
    <head>
        <title>Title Name</title>
        ...
    </head>
    
    <body>
        <h1>Headline</h1>
        ...
    </body>
</html>
```



HTML全称HyperText Mark up Language, HT 指的是超链接，ML说明这是一种标记语言，由一个个标签组成。

HTML中最最基本的单元是`element` , `element` 由 `opening tag` 、 `content`、 `closing tag` 和 `attribute` 组成。理解了element一切都好说，结构设计就好比给指定的内容打上对应的标签`tag` ，告诉浏览器这是什么。

有些标签为开放标签，如`<br>` 。 属性是可选的，用来指定一些附加信息。

```html
<p lang="en-us">Paragraph in English</p>
```





### 常用的Tags

``` html
<h1>标题</h1>

<p>段落</p>

<a href="url">链接</a>

<img href="url">图片

<div>占据一个block空间，与css一起使用实现布局设计</div>
```





### Table

我的Booklist毫无疑问要显示一条条图书的信息，所以需要用到 `table`相关的标签

+ 基本结构

```html
<!--table的结构-->
<table>
    <thead>
       <tr>
        <th>Name</th>
         <th>Age</th>
       </tr>
	</thead>
    
    <tbody>
    	<tr>
        <td>Peter</td>
        <td>18</td>
		 </tr>
    </tbody>
    
    <tfoot></tfoot>
</table>
```

可以看出，`table`的层级结构十分明显，`<table>`之后紧跟着`<thead>`和`<tbody>`, 用以区分表头和数据。

每一行的数据都必须包含在一个`<tr>`里。`th, td` 则是存放数据的最终单元`cell`



+ Attribute

``` html
用于合并单元格
<td colspan="4">This</td>
<td rowspan="3">Little</td>
```



+ 样式设计

```css
table{
   border-collapse: collapse; // 边界重叠
   width: 100%
}

td, th{
   border: 1px solid #ccc;
	padding:10px;
   text-align: left;
}

//选中行高亮
tr:hover{
    background-color:
}

//阴影
table{
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}


```





### Form

表单用于提交数据，用户填写的数据被打包到`request`中，交给服务器处理。

Booklist要添加新的图书信息时，需要用到表单。

+ 结构

```html
<form action="add" method="post">
    //action为add，当点击提交时，url会追加/add, 然后在golang中指定动作
    <lable for="bookname">BookName</lable><br>
    <input id="bookname" type="text" name="BookName"><br>
    <input type="subumit" value="Submit">
</form>

```

+ input类型

text, text area , password, radio button , check box , drop down list box , submit

+ lable 与 id

`lable`用来将提示内容和input绑定在一起，通过指定 `attribute` 的 `for = “id_name”`实现。

效果是扩大点击选中的范围，点击提示内容时也能选中input



## CSS

> CSS 核心思想，每个`element`都住在一个BOX里，选中BOX，然后指定样式。



### Box Model !!

<img src="img\box.png" alt="box" style="zoom: 67%;" />



### Selector

```css
.class_name{
    background-color: green;
}

#id_name{
    
}

.class_name p{
    
}

td,
th{
    
}
```



### 优先级

**inline > internal > external**



### Layout  版面布局

<img src="img\layout.png" alt="layout" style="zoom:80%;" />



与`float`相比，`flex`和`grid` **模块**是实现页面布局更好的选择。参考[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)



#### FLEX

Flex 是一个模块，而不是一个单独的property，所以涉及的内容较多。使用时主要注意：

+ FlexBox 分为 `Flex Container` 和 `Flex Item` 两个角色
+ 对于 `Flex container` ，注意 `main axis` 与 `cross axis` 的概念  主轴与交叉轴
+ 对于 `Flex Item`，注意 `flex-grow`， `flex-shrink`,  `flex-basis` 的使用



以制作一个简单的导航栏为例

``` html
<body>
    <ul >
         <li class="box1"><a href="#">HOME</a></li>
         <li class="box2"><a href="#">LINK1</a></li>
         <li class="box3"><a href="#">LINK2</a></li>
         <li class="box4"><a href="#">LINK3</a></li>
    </ul>
</body>
```



+ 修改列表`list`和链接`a`的样式

``` css
ul {
   list-style: none;
   padding:0;
   margin: 0; 
}

ul li a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    display: block;
    padding: 18px 20px;
}
```

+ 将 `ul`变成 flex container

```css
ul {
    display: flex;
    background-color:thistle;

    flex-flow: row nowrap;
    justify-content: flex-end;  // 右对齐
}
```

+ 把HOME移到最左边显示 （应该有更好的方法）

```css
.box1{
    flex-grow: 1;
}
```

![flex](img\flex.png)



## Simplify

页面设计主要用到：

html的 table 和 form

css 的基于box模型，调整间距，背景颜色，以及导航栏简单布局



















[Introduction](https://zzy2005137.github.io/Booklist/introduction.html)

[View : html and css ](https://zzy2005137.github.io/Booklist/View.html)

[Controller :   Go  http package ](https://zzy2005137.github.io/Booklist/Controller.html)

[Model : database](https://zzy2005137.github.io/Booklist/Model.html) 



