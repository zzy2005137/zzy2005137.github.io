属性值以及他们如何配合工作

### flex

vh, vw

### background-image/size/position/repeat

### transition

transition: [transition-property] [transition-duration] [transition-timing-function] [transition-delay];

eg:transition: background-color 0.7s ease-in-out //将要变化的对象为 background-color， 变换持续时间 0.7s 变化函数(即效果)为渐进渐出

    [transiton-timing-function]:  每个都有对应的曲线
    ease
    linear
    ease-in
    ease-out
    ease-in-out
    step-start
    step-end

### position

- static (default)
- relative
- absotlute
- fixed
- sticky

1. understand the normal page flow
2. static : normal flow
3. relative : allow you to add `top`, `left`, `right`, `bottom`
4. ## absolute & relative 配合使用
   parent box 只要不是 static, absolute box 就可以在其内部移动位置
5. fixed : out of the flow, 固定在相对整个页面的某个位置
6. sticky： 正常情况下和 relative 一样，滚动后变成 fixed 效果

### opacity

0~1; //透明度，1=solid

### media

@media [media-type] ([media-feature]) {
/_ Styles! _/
}

@media screen (max-width:80px) and (min-width: 50px){
body{
background-color: blue;
}
}

### .panel:nth-of-type()

The `:nth-of-type` selector allows you select one or more elements based on their source order, according to a formula.

.class_name li:nth-of-type(odd) {
background: lightsteelblue;
}

## javascript

variables
data type
function
