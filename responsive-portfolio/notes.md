# Project Summary

掌握HTML与CSS的基本或者说核心用法，必须**理解并熟练使用**

> 每一个都很重要，熟练了也就能处理日常百分之七八十的问题了

### HTML

div

form

table

list

### CSS

box model

display

position

flex

grid



## Delveloping notes

### reusability

想要实现页面设计，首先要观察整体，找出样式重复的元素、布局、主题颜色等

主题颜色可定义全局变量，重复的样式用统一的 `class` 定义，方便复用

`variable` 

``` css

//定义
:root {
  --main-bg-color: brown;
	--ligit-one: #f1f1f1;
}

//使用
.class_name{
	background-color: var(--main-bg-color);
}

```

`general style` 

要善于观察，整体上 `my-portfolio` 是由一个个类似的 `section` 构成的，每一个 `section-header` 长得都一样。其中也有一些重复的元素样式，如 `button` , `grid-2` , `grid-3` , `text` 。将它们当作是全局的样式命名是一种很好的做法。



## display, position 与 ::before / ::after

### display

值： `inline`  `block`  `inline-block`   `none`     以及   `flex`  `grid`

每一个HTML元素，其默认的 `display` 值，要么是 `inline` , 要么是 `block`

`inline` 元素只占据它所需要的宽度，且 `height` `width` `z-index` 对其不起作用

`block` 元素占据一整行的空间， `block` 可指定 `height` `width` `z-index`



### position

值 ： `static` (default) `relative`  `absolute`      `sticky` `fixed`

默认的 `work flow` 总是从上到下，从左到右。也就是position 的值为 `static` 时的情况

`relative` ： 元素依旧占据默认位置，但可以用 `top` `bottom` `left` `right` 移动其位置

`absolute` ： 元素跳出正常的 `work flow` ，不占据原有的空间。可以用 `top` `bottom` `left` `right` 移动其位置。

**注意：**

1. 若没有 `position` 为非 `static` 的元素作为 parent 元素，则 `absolute` 元素相对位置是相对整个 document 的

   所以常将 `absolute` 元素的 `parent` 元素的 `position` 值设为 `relative`

2. 当 `inline` 元素设置为`absolute` 后， `height` `width` `z-index`  对其适用

   

### ::before ，::after  以及它们与position的关系

`::before` 与 `::after` 用于在元素之前或之后插入内容

1. `content` 的值可以是 `string` 、 `attr(attribute_name)` 或者图片、引号等，也可以为空，但必须有

2. 插入的内容依旧在元素内部，且默认为 `inline` 元素。可根据需要改变 `display` 的值

3. 与 `absolute` 连用，将被插入元素的 `position` 改为 `relative` 便可指定插入元素的相对位置

   ```css
   .element{
   	position:relative;
   }
   .element::after{
   	content:"";
   	position:absolute;
   	bottom:0;
   	left:50%;
   	transform: translateX(-50%)
   }
   ```



### z-index

只作用于 `position` 非static 和 `flexbox` 的情况

数值越大，显示越上层



### swiper.js ( slide 效果)

https://swiperjs.com/





## 学习资源

### flex

视频： b站 [CodingStartup起码课](https://space.bilibili.com/451368848)

文档： [CSS Tricks _ A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

游戏/练习： [Flex Box Adventure game practice](https://codingfantasy.com/games/flexboxadventure)



### grid

视频：视频： b站 [CodingStartup起码课](https://space.bilibili.com/451368848)

文档：[CSS Tricks _ A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

游戏/练习：[CSS grid garden](https://cssgridgarden.com/)



其他的直接youtube或者google