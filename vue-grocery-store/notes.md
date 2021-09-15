# vue-grocery-store

## 前期准备

### 建议开发步骤

在[How to build a web app: A beginner's guide (2021)]([How to build a web app: A beginner's guide (2021) (budibase.com)](https://www.budibase.com/blog/how-to-make-a-web-app/))这篇博客里，介绍了如何设计并开发一款Web App。作者将过程分为四个阶段，十二个步骤，分别是：

**Ideation stage**

1. Source an idea

2. Market research

3. Define functionality

**Design stage**

4. Sketch your web app

5. Plan your workflow

6. Wireframe the UI

7. Seek early validation

**Development stage**

8. Architect your database

9. Develop your frontend

10. Build your backend

**Launch stage**

11. Host your web app
12. Deploy your web app



这个过程非常合理，前期的构思与设计阶段也跟我之前在《设计思维》这门课中，老师所讲的东西非常契合。应用软件也是产品，自然要经历一个从无到有的过程。但任何设计都不可能诞生即完美，都是要经过反复迭代更新，才能不断完善。应用软件更是如此。

在自己实际写应用的过程中，我也深刻体会到了：千万别在一开始就追求完美，也别一开始就期待应用有太多的功能。而是应该花最短的时间，实现基础功能之后，再想办法去完善。前期需求越复杂，实现的周期越长，完成的热情的可能性越低。总之实现再说，多次迭代才是正道。

### 个人开发步骤

由于是个人开发，所以我将步骤简化。我也并没有严格按照步骤来，更多的是我在回顾这篇Guide的时候，发现自己在开发过程中所作的事情可以纳入到某一个步骤中，这也是一个循环反馈的东西。



**构思设计阶段**

1. 寻找idea
2. 定义基本功能 （功能越focus越好，没必要也别想一开始就做全能选手）

3. 用户界面草图

**调研阶段**

4. 匹配需求与方法，选择合适的工具
5. 定义工作流程

**开发阶段**

6. 前端开发
7. 后端实现

**部署阶段**

8. 部署应用





## 构思设计阶段

写这个应用的想法来源于我妈，所以她或将成为我学习开发道路上的第一个用户。

应用的基本功能：

- 展示商品列表
- 分类功能
- 管理员登陆
- 管理员能对商品进行增删改查



界面设计我简单在纸上画了草图，主要界面有三个：

- 主页   —— 展示商品
- 登陆界面  —— 管理员登陆
- 商品添加页面  —— 添加新的商品



在最终完成版本1.0.0中，由于时间等一些原因，更新商品和分类展示的功能还没有实现。



## 调研阶段

由于之前没系统的学过js，很多东西挺困惑。对前端的发展情况也不熟悉。前后三天左右都在补一些基础概念，但好在没有拖太久。

主要包含简单的 js 发展历史，打包工具，npm，以及web component的了解



[扫盲阶段笔记](https://zzy2005137.github.io/vue-grocery-store/research.html)



### 匹配需求和方法，选择合适的工具

前端：vue， element plus 

后端： firebase ，后由于国内用不了改成 leancloud 

部署： rander.com



由于预期的功能简单，只需要能够展示和添加商品，因此对后端的要求仅仅只需要能够存数据就行。之前了解到像 `firebase` 这样的后端云服务，能够提供云函数，数据库，用户认证授权等方便且实用的功能。对于想要快速实现简单应用，把idea变为现实的开发者来说，这样的选择再好不过。

但是由于 `firebase` 在国内用不了，于是我便查找类似的能用的云服务，可供选择的有 `leancloud`, `bmob`, 七牛云等。leancloud 看着最友好，他用的好像也是七牛云的云存储。但是这些后端云服务有个问题，但凡涉及到文件存储，必须绑定一个已经备案的域名。这是法律规定，比较严格，以防你干坏事。

域名备案是个麻烦且费时的过程，恰好同学有，直接借来先用。后面再慢慢备案我自己的域名。



因为想尝试 组件化的开发 ，于是就选择使用 `element plus` ，是 `element UI` 针对vue3 的一个升级版本。上手容易，根据官网提供的文档很方便的安装并使用。用已有的组件去实现界面排布是一件十分高效的事情，但前提是要对组件库本身比较熟悉。这一点我还没能做到，以至于在设计界面的时候，不知道有什么组件可以用，可以达到我想要的效果。



前期走了不少弯路，包括想用 `vueisotope` 实现filter动画效果，但是没注意到不支持vue3版本。以及好不容易搞懂了`firebase`如何使用却发现国内用不了，都浪费了很多时间，很崩溃。

**所以，经验教训是**：在确定想使用的工具之后，先快速尝试能不能用。先用最简单的例子，把整个流程走一遍，如果顺畅，再考虑其他的细节。如果不行，就换。快速尝试并且判断适不适合，不要浪费过多的时间



### 项目启动，制定工作流程

在启动vue项目，并第一次部署到rander上之后，准备工作就算做完了。为了明确任务，我边开发边给自己制定 `check list` , 确保不会跑偏，时刻关注重点。是个不错的方法。

checklist 1.0 

- 实现基本的页面布局
  - 熟悉 element UI 
  - 布局设计：导航栏，商品列表
  - 商品卡片样式
  - filter 动画效果 –》**vue自带的过渡动画**
- 测试后端存储服务
  - 基本数据的增删改查
  - 包含文件上传的数据对象如何实现
- 实现商品的增删改查
  - 商品添加页面
  - 功能实现
- 添加用户登陆功能
  - 用户登陆界面
  - leancloud用户管理功能测试
  - 不同用户显示不同内容（操作权限）



## 开发阶段

这次的开发过程不像之前的视频教程，能够一步步地教你怎么做。更多的是要靠自己看文档，查资料，根据需要去尝试如何使用相应的工具。

通过看官方文档来学习是一个必备的技能，有的官方文档写得很好很全面，vue就是优秀典范。但有的就比较垃圾，逻辑比较乱，像leancloud，我找了半天才知道怎么关联对象与文件。该解释的也没有着重解释，有点主次部分的感觉。这个时候就需要 一、细心 二、耐心 三、多找找例子，或者其他渠道的资料

这一部分可以分为几个小的专题笔记，再加上遇到的问题汇总

element ui 

leancloud 

vue animation 

vue form

### element plus

首先是 element plus 的使用，这一部分并不难。根据官网给的文档，只需要再项目的main.js中引入并初始化即可。官网的组件库也给出了丰富的例子，根据需要选择合适的例子代码，复制粘贴修改即可。

关于布局，可以使用 element plus 提供的布局方法，也可以直接写css。



### vue animation 

[有待补充]()

element plus 也有内置的动画效果



### vue form

v-model 实现双向绑定，存储表单填的数据

file类型或者其他非基本类型的数据，data中的初始值可设为 `null`

[有待补充]()



### leancloud-storage

[笔记详情](https://zzy2005137.github.io/vue-grocery-store/leancloud.html)



## 部署应用

依旧选择rander.com，简单方便，关联github自动在push的时候更新



## summary

本次应用的逻辑很简单，但真正实现起来，动手写还是会遇到各种各样的问题

JS 的基本功不行，用起来也是捉襟见肘。同时vue也不熟练，二者都需要加强

element ui 这回算是初步接触，可以通过另外的项目加以练习，熟练掌握后开发其他应用会高效很多




