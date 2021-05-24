# Controller :   Go  HTTP Server

> controller包用于响应请求，进行逻辑处理

## HTTP Server 的作用

用Go实现Web应用主要用到其内置的`net/http`包，能够轻松实现 `HTTP Server` 的功能。`HTTP Server` 的主要作用包括：

+ Process dynamic requests
+ Serving static assets
+ Accept connections

参考[Go Web Examples](https://gowebexamples.com/)



### Process dynamic requests

`HTTP Server` 的主要功能之一就是处理来自浏览器的动态请求，响应机制为一个`url`对应一个响应函数。在Go中每一个响应函数称为`handler`，形式如下：

``` Go
func (w http.ResponseWriter, r *http.Request)
```

其中 `http.Request` 类型中包含从浏览器传过来的数据。在每一个`handler`中编写具体的逻辑

在主函数中通过`http.HandleFunc`方法注册`handler`函数，将`url`路径与响应函数绑定起来。

```go
http.HandleFunc("/",Hello)

 func Hello(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "Welcome to my website!")
}
```



### Serving static assets

通常将一些静态的文件如`CSS`，`js`和图片，存放在同一个文件夹中。然后生成一个`FileServer`类型用于统一路由。这样`html`中的一些静态文件路径，就可以直接都从指定的路径开始写。

Go生成`FileServer`的方法：

```go
fs := http.FileServer(http.Dir("static/"))
http.Handle("/static/", http.StripPrefix("/static/", fs))
```



### Accept connections

就是监听请求

``` go
http.ListenAndServe(":80", nil)
```





## 代码结构

`booklist`项目采用面向对象的方法写`controller`，即定义一个`Controller` 结构体，每一个`hanler`函数作为它的一个方法。逻辑如下



``` go
// booklist/controller/handlers.go
type Controller struct {
	M		model.BooklistModel
	Init     bool
}

func (c *Controller) ShowView(w http.ResponseWriter, r *http.Request, tmpl string, data interface{}) {}

func (c *Controller) Welcome(w http.ResponseWriter, r *http.Request,) {}

func (c *Controller) AddBookView(w http.ResponseWriter, r *http.Request){}

func (c *Controller) AddBook(w http.ResponseWriter, r *http.Request){}

```



``` go
//  booklist/main.go
func main() {
    
	//创建controller实例
	controller := controller.Controller{}
	m := model.BooklistModel{}
	m.Init()
	controller.M = m


	//创建服务器实例，指定静态文件所在路径
	fs := http.FileServer(http.Dir("static/"))
	http.Handle("/static/",http.StripPrefix("/static/", fs))

	http.HandleFunc("/", controller.Welcome)
	http.HandleFunc("/add.html", controller.AddBookView)
	http.HandleFunc("/add", controller.AddBook)

	//启动，监听
	http.ListenAndServe(":8080",nil)


}

```



## Handler中的数据处理

handler需要干两件事：

+ 读取并处理来自浏览器请求中的数据
+ 生成`Template`实例，并传入数据



逻辑如下，`ShowView` 方法负责统一生成`Tempate`，其他方法负责处理具体数据。

以`AddBook`为例，分为三步

+ 接收数据
+ 调用model结构体的方法添加信息到数据库
+ 调用ShowView方法，生成并呈现页面

``` go
func (c *Controller) AddBook(w http.ResponseWriter, r *http.Request) {
	//1.接收数据
	BookName := r.FormValue("BookName")
	FinishedTime := r.FormValue("FinishedTime")
	Comments := r.FormValue("Comments")
	flag := false

	//2.追加数据
	if BookName != "" {
		flag = true
		c.M.AddBook(BookName, FinishedTime, Comments)

		//3.传入结构体
		c.ShowView(w, r, "add.html", struct {
			Flag  bool
		}{
			flag,
		})
	}else {
		c.ShowView(w, r, "add.html", nil)
	}

}

```



`Template`实例在融合数据时，传入的必须是一个结构体

```go
err = resultTemplate.Execute(w, data) //data is a struct
```







[Introduction](https://zzy2005137.github.io/Booklist/introduction.html)

[View : html and css ](https://zzy2005137.github.io/Booklist/View.html)

[Controller :   Go  http package ](https://zzy2005137.github.io/Booklist/Controller.html)

[Model : database](https://zzy2005137.github.io/Booklist/Model.html) 

