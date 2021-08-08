
=========================


1. js 
    - classes
    - localstorage
    - array methods
2. work flow


=========================
addition

- bootstrap crash course


## depart

### alert pop out 

bootstrap class : "alert alert-success"

let div = document.createElement("div")
container.insertBefore(div, another_div)

setTimeout(() => document.querySelector('.alert').remove(), 2000)


### array methods (not all)

- add / remove 
    push 
    pop
    splice 

- iterate
    forEach(item, index)

- search 
    find()         
    findIndex()


### localStorage 

// both key and value must be strings.
//If were any other type, like a number, or an object, it gets converted to string automatically

- setItem(key, value)
- getItem(key) 
- removeItem(key) 
- clear() – delete everything.

- JSON.stringify()
- JSON.parse()


### add and show localStorage

- document.addEventListener("DOMContentLoaded", UI.display())

### class 

- static methods