# vue-todo-app notes

- 项目介绍

  最终效果，功能实现

- 项目来源

- 界面实现

  - html and css 
  - 困难点

- vue （重点）

  framework 整体逻辑

  深入component： property，data flow, event handling

- 总结



## 项目介绍

为熟悉vue框架基本功能，使用vue实现简易的todo-app，具有添加、删除、修改状态，筛选显示条目的功能

界面效果如图所示

tools ：html, css, js, vue-cli

editor : vs-code 

deploy : render.com

[live demo](https://vue-todo-qb20.onrender.com/)

<img src="C:\Users\Gamma\AppData\Roaming\Typora\typora-user-images\image-20210821101532507.png" alt="image-20210821101532507" style="zoom:50%;" />



## 项目来源

b站@峰华端工程师

[Vue 3.0 实战，开发基于 Composition API 的 Todo Web App]([[完整版]Vue 3.0 实战，开发基于 Composition API 的 Todo Web App_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1wy4y1k7Lr))

[github源码](https://github.com/zxuqian/vuejs-examples)

不过我没有用composition API, composition API 是vue3新出的，相当于是option API的优化版本，主要优点在于提高代码的可读性，解决逻辑复用的问题。

二者的使用并不矛盾，由于我一开始先接触option API，且还不熟悉，就先用它写了。等后期再学习composition API的用法。



### 主要步骤

@峰华端工程师 给的视频非常简短，但明确列出了项目从idea到最终实现的几个关键步骤，非常具有指导意义。

- 寻找项目灵感
- 创建 vue 项目
- 编写 html 结构
- 编写 css 样式
- 抽离组件
- 处理事件与数据
- 总结 



## 项目灵感

github trending, explore

dribbble - 设计师网站

codePen 



## 界面实现

> html 和 css， 写的时候才知道自己有多菜



### HTML

#### 分析结构（很重要）

``` html
<container>
    <h1> Welcome Message </h1>
    <div class="todo-add"></div>
    <div class = "todo-filters"></div>
    <div class="todo-list">
        <div class="todo-item"> content </div>
    </div>
</container>
```



### CSS

#### search bar 的效果

[Simple Search Bar (codepen.io)](https://codepen.io/huange/pen/rbqsD)

用一个`container`包含`input`和`icon`，`flex`布局，`input`宽度100%，`icon` position设为absolute调整位置

``` html
<div class="search">
     <input type="text" class="searchTerm" placeholder="What are you looking for?">
     <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
     </button>
</div>
```

``` css
.search{
    position: relative;
    display:flex;
}
.searchTerm{
    width:100%;
}
.searchButton{
    position: absolute;
    right:0;
    top: 50%;
    transform:translate(0,-50%)
}
```



#### custom checkbox (有点复杂)

**Step 1: Hide** the input element.

**Step 2:** Add an extra **span** element and apply your custom style by creating a class.

**Step 3:** Use ::before or ::after pseudo element

[Costumizing CheckBox with pure CSS. (codepen.io)](https://codepen.io/BrahmaUI/pen/WgOGQz)



# Vue

### vue app的起点

vue app 是由一个个组件构建起来的，用根组件(`root component`)作为参数创建一个vue app，app创建之后需要挂载到DOM元素中，而根组件就作为渲染的起点。

使用逻辑如下

``` js
const RootComponent = {
  /* options */
}
const app = Vue.createApp(RootComponent)
const vm = app.mount('#app')
```

把大象装进冰箱总共分为几步？

- root component
- create app
- mount the app into `<div id="app"></div>`

> 当使用vue-cli时，创建项目后这些会自动生成，components 会单独放到一个文件夹，使用方式转变为模块化的 import / export



### Single File Component (更成熟的组件组织方法)

SFC (aka `.vue` 文件 )，就是一个 `component`， 文件结构包含三个部分：

- template
- script
- style

它将对`component`的全部定义，整合到一个文件中。通过自动的预编译，生成标准的 `js module` ，也就是说能够作为模块 `import` 到其他文件中。



``` javascript
import MyComponent from './MyComponent.vue'

export default {
  components: {
    MyComponent
  }
}
```



### Component Properties

目前用到的有 `data`  `method`  `computed`  `props` 

所有定义的`property` 在该`component` 的`template` 中都能够访问

``` js
export default {
  name: "AddTodo",
  props:['data']
  data() {
    return { }
  },
  methods: {},
  computed:{}.
}
```



#### data 

`data` 是一个函数，返回一个对象，包含要用到的数据。所有数据都是`responsive` 的，也就是说一旦数据更新，模板中的显示结果也会更新

#### methods

`methods` 值为一个对象，包含要定义的多个函数

#### computed

`computed` 值为一个对象，包含多个函数。当需要根据原始数据进行判断或计算之后，才显示相应内容时，用到`computed`。将处理过程放在特定函数里，返回最终结果。其精髓在于数据之间的依赖关系，当有数据发生变化时，`computed` 才会执行，并且自动完成更新。

**注意**：与`method`相比，虽然能达到相同的效果，`computed` 运用缓存机制，只在数据发生变化时更新，避免不必要的重复计算。而如果用`method`， 每一次访问都要执行一次函数。当数据较大时会影响性能。



`computed` 应用举例

- **组合数据后输出**

  典型的，如 `return firstName + lastName` 或是将`form` 的输入结果组合后输出显示

- **根据用户的选择，显示相应的内容**

  在`Intro to Vue3` 课程中，根据鼠标移动到绿色还是蓝色图标上，显示对应的图片、库存、价格....

  logic ：

  	- 在`data` 中定义一个`currentSelected` 
  	- 当鼠标移动到对应颜色图标时，更新`currentSelected` 
  	- 把图片，价格等换成`computed` ，返回当前选中的图片、价格

- **筛选数组**

  - `data` 中定义筛选条件。简单的如`boolean` 类型的变量，复杂的如字符数组
  - 在`computed` 方法中，根据筛选条件，利用`array.filter`方法返回筛选后的数组
  - 在`template` 的`v-for`循环中，对`computed`变量进行循环

  

#### props

`props` 的值是一个数组或是对象(当指定具体数据类型时)。用于从`parent` 到`child` `component` 的数据**单向传递**。由于数据传递是单向的，所以**不要**试图在子组件中修改`props` 的值

``` js
props: ['title', 'likes', 'isPublished', 'commentIds', 'author']

props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // or any other constructor
}

```



### Component lifecycle hooks

`lifecycle hooks` 是`component` 在初始化过程中会执行的一些**函数**，如`beforeCreate`, `created` , `mounted` 等，可自定义相关步骤，如在`created` 时，通过API获取第三方数据

### 

### Event handling 

#### component 内部的event监听

syntax : `@event = "function_name"`

#### 监听 child component 的event

child: `@event = "$emit('my_event_name', parameters)"`

parent: `@my_event_name= "function_name"`



### class binding 

可用于改变样式，如当某个`div`被选中，则显示选中效果。

[VueJS - Click to select an item in a loop (codepen.io)](https://codepen.io/pensbymichiel/pen/VWzxPW)



### Provide / inject (解决多层component的data传递问题)

[provide / inject](https://v3.vuejs.org/guide/component-provide-inject.html#working-with-reactivity)

但是默认不是reactive的，需要设置。 涉及composition api





## Summary

html和css需要加强

对vue的整体逻辑和核心基础功能有更深的理解，但还有需要学习的地方如composition api, provide / inject 等，将通过更多的项目实例学习

整理vue知识点之后，对项目再重新写一遍，把不合理的地方改掉

