# 页面设计 ： HTML & CSS



## Overview

页面设计我只用到了HTML与CSS。我希望我我写的文档能够帮助我理解关于这些技术，一些最基本的、最核心的概念，以及它们之间的关系。以此让我对前端设计有更好的理解，对主干的东西能够有所把握。

所以以下内容将会被涵盖到：

+ 什么是HTML与CSS，它们的作用与关系
+ 如何使用HTML与CSS设计网页

## What is

打开浏览器，输入网址，就能够进入到某个网站的主页。网站提供内容，或是其他服务。这是用户的角度。

换个角度看，整个过程是如何工作的呢？首先这是一个交互的过程，交互的双方是浏览器(`browser`)与服务器(`server`)，双方在物理上可以存在于世界上任何一个角落，只要能联网。浏览器发送请求(`request`)，服务器响应请求(`response`)，并传输请求的文件，浏览器接收到文件之后解读并显示到屏幕上。而这个文件，主要就是由HTML, CSS，JS 写成的网页。在打开的每一个网页里，都可以F12查看源代码；也可以自己写一个HTML文件，然后用浏览器打开。

对于内容显示，我们每天所阅读到的内容，都是有一定结构的。就像报纸文章一样，有标题，副标题，段落和图片。这里的结构是为内容而服务的。除此之外，不同的字体，行间距，页面留白，排版也会有不同的阅读体验。这些则称为样式设计。

结构设计由HTML负责，样式设计由CSS负责，二者各有分工，同时相互合作。此外，网页区别于书本等纸质材料最大的特点是交互性，它能够根据用户的动作，而选择干什么，而这种动态交互的功能，则用JavaScript实现。三者都可以说是一种语言，但HTML 与 CSS 并不是严格意义上的编程语言，只能算是一种标记语言。

## HTML

> HTML describe the structure of pages using elements



### Element, Tag and Attribute

代码结构：

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



### Form



### 



## CSS

























[Introduction](https://zzy2005137.github.io/Booklist/introduction.html)

[View : html and css ](https://zzy2005137.github.io/Booklist/View.html)

[Controller :   Go  http package ](https://zzy2005137.github.io/Booklist/Controller.html)

[Model : database](https://zzy2005137.github.io/Booklist/Model.html) 



