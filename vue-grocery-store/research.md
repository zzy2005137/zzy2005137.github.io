## 调研阶段

这个阶段花费我不少精力，因为之前也没系统的学过js，很多东西听困惑。对前端的发展情况也不熟悉。前后三天左右都在补一些基础概念和工具，但好在没有拖太久。由于这个项目也是边学边做的过程，重点关注js以及功能的实现。

所以调研阶段也可以说是扫盲阶段，主要内容如下：

- 了解前端发展历史
- ES6 module 
- npm， nodejs
- 打包工具 eg：webpack
- web component 



在前期学习了HTML, CSS 和 JS 的一些基础后，我虽然能写出简单的网页，但是发现，现代Web应用绝不是这么干的。这些虽然是最基础的东西，但远远不够。

这篇blog介绍了现代前端开发的一个工作流，相关概念以及会用到的工具

[A modern front-end web development workflow]([A modern front-end web development workflow (auroraweb.ca)](https://auroraweb.ca/blog/a-modern-front-end-web-development-workflow))

其中一个重要的概念就是，JS 原本是只能运行在浏览器上的语言，后来随着NodeJS的出现，以及JS自身的不断发展（从以下历史可以看出）server-side JS 开始发展壮大起来，如模块化编程等。使其更加的开发友好，向一门完备的标准编程语言的方向发展。

因此，现代的前端开发更多的是用 `sever-side js` 实现的（其特点之一就是有很多包的引用，依赖等），**这样的js代码并不能直接在浏览器运行**，所以类似 webpack 这样的打包工具应运而生。它们最主要的功能是将 server side 的代码编译转换成浏览器能够运行的 browser js 。对开发者来说更加友好。

### js 历史一览

- ES1 1997.
- ES2 1998.
- ES3 1999. The longest standing version of early JS.
- ES4 Never finalized.
- ES5 2009. Added JSON, strict mode, functional array methods, and more.
- **ES6 2015.** Added classes, promises, arrow functions, let/const, and much more. （**the biggest update to the language ever**）
- ES7, ES8, ES9, ESNext. Modern updates now being released annually.



- nodejs 2009
- framwork 2010 开始出现，Angular , backbone. 2015 React



- Jquery 可以了解一下。是用更简洁的代码实现操作DOM, 事件监听以及AJAX请求等。

  

### 现代前端开发技术栈

可以看出来，前端涉及的技术种类繁多，看起来眼花缭乱。但仔细想想，针对入门来说，首先编程语言的话就一门，没得选 —JavaScript。其次就是熟练掌握一门框架，注意触类旁通。同时训练网页布局设计等。其他的东西可以多了解，再用到的时候再pick up

HTML, CSS，JS 

JS 进阶  

framework  eg:vue



### 部分笔记

#### web component

> Web Components — a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.

从 `component` 的角度看网页布局，整个界面不再是一个整体，而是一个个独立的，可复用的组件。

每个组件有独立的样式与功能，组件之间相互独立。这既解决了代码的复用性，也降低了耦合度。

为实现基于组件化的开发，需要用到 `web component` 技术，或者说是 JS 提供的一组API， 用来创建自定义的 HTML `element` 。其主要包含三个部分：

- custom elements
- shadow DOM
- HTML templates

custom elements APIs 用来定义自定义元素以及它们的行为

shadow DOM APIs 使自定义元素保持相互的独立性，使其功能与样式都是私有的。

HTML template 用来定义可复用的html模板

基本流程是定义一个 JS 类，并用自定义元素的名字注册。定义私有的功能与样式，设置参数传递等。之后便可像一般html element 一样使用