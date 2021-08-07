# DOM Manipulation Basics

> “CRUD”elements

## create and add element

``` js
const body = document.body
const div = document.createElement('div')
div.innerHTML="<h2>hello1</h2>"
//div.innerText="<h2>hello2</h2>"  直接输出“”内的内容，不会解析成为html
body.append(div)
//or body.appendChild(div)
```

## get element and modify 

### get

``` javascript
document.querySelector("css_selector")    //returns the first element for the given CSS selector.
document.querySelectorAll("css_selector")  //returns all elements matching the given CSS selector.

//getElementBy*  
document.getElementById("id_name")
document.getElementsByClassName("class_name")
```



### modify

``` js
const hello3 = document.querySelector("#hello3")

//modify attibute
hello3.getAttribute('id')
hello3.setAttribute('id','test') 

//modify class
hello3.classList.add('show')
hello3.classList.remove('show')
hello3.classList.toggle('show') // 有就remove，没有就add
```

## remove element from DOM

``` js
hello3.remove()
```



