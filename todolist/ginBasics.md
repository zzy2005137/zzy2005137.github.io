# gin framework basics



``` 
模板的使用
参数获取
GORM 使用
SQL语句复习
```

### 启动

``` go
func main(){
    r := gin.Default()
    r.GET("/", func(c *gin.Context){
        c.JSON(http.StatusOK, gin.H{"message":"hello"})
    })
    r.Run(":8080")
}
```

### 使用模板——输出

1. 定义
2. **解析**
3. **渲染**        

``` go
func main(){
    r := gin.Default()
    r.Static("/static", "static")  //映射静态文件所在目录（"html文件里的地址","实际的目录地址"）
    r.LoadHTMLGlob("template/*")	//模板解析  Load
    
    r.GET("/", func(c *gin.Context){
        c.JSON(http.StatusOK, gin.H{"message":"hello"})    //JSON渲染
    })
    
    r.GET("/index", func(c *gin.Context){
        c.HTML(http.StatusOK,"index.html", data)    //HTML渲染
    })
    
    r.Run(":8080")
}
```

### 参数获取——输入

+ `query params` 

  指的是URL中`?`后面携带的参数，例如：`/user/search?username=小王子&address=沙河`

+ `path params`

  请求的参数通过URL路径传递，例如：`/user/search/小王子/沙河`

  

+ `form params`

  前端通过表单提交的数据，注：此时数据在请求的`body`里

+ `json params`

  前端通过`JSON`提交数据，注：此时数据也在请求的`body`里



``` go
//获取方法如下
func main() {
	r := gin.Default()   
   //query params
	r.GET("/user", func(c *gin.Context) {
		username := c.DefaultQuery("username", "小王子")
       fmt.Printf("username: %s\n", username)
	})
    //path params
    r.GET("/user/:age", func(c *gin.Context) {
        age := c.Param("age")
        fmt.Printf("age: %s\n", age)
    })
    
    //form params
    r.POST("/user",func(c *gin.Context){
        id := c.PostForm("id")
        fmt.Printf("id: %s\n", username)
    })
    
    //json params
    r.POST("/user",func(c *gin.Context){
        data, _ := c.GetRawData()    //获取json 格式的 rawdata
        
        var m map[string]interface{}	//定义map变量或结构体接收json数据	
        
        /*var m struct {
			Name    string	`json:"name"`
 			Message string	`json:"message"`
        }*/
        
        _ = json.Unmarshl(data, &m)		//反序列化
        fmt.Printf("data: %s\n", data)
    })
    
    r.Run(":8080")
}
```

### 参数绑定 ！ 

`c.ShouldBind()` 自动判断请求类型，接收数据

``` go
type User struct {
	Name    string `json:"name" form:"name"`
	Message string `json:"message" form:"message"`
	Id      string `json:"id" form:"id"`
}

func main() {
	router := gin.Default()
	router.POST("/shouldbind", func(c *gin.Context) {
		var u User	//定义结构体变量接收数据
		if err := c.ShouldBind(&u); err != nil { // 不管是form,queryString,还是json，都自动判断接收
			fmt.Println(err.Error())
		} else {
			fmt.Println(u)
			fmt.Println("===============")
			fmt.Println(u.Message)
		}
	})
	router.Run(":8080")
}
```

解析顺序：

`ShouldBind`会按照下面的顺序解析请求中的数据完成绑定：

1. 如果是 `GET` 请求，只使用 `Form` 绑定引擎（`query`）。
2. 如果是 `POST` 请求，首先检查 `content-type` 是否为 `JSON` 或 `XML`，然后再使用 `Form`（`form-data`）。

### 路由组

用来划分逻辑，使代码更清晰

``` go
func main() {
	r := gin.Default()
   //request  /user/index
	userGroup := r.Group("/user")
	{
		userGroup.GET("/index", func(c *gin.Context) {...})
		userGroup.GET("/login", func(c *gin.Context) {...})
		userGroup.POST("/login", func(c *gin.Context) {...})

	}
	shopGroup := r.Group("/shop")
	{
		shopGroup.GET("/index", func(c *gin.Context) {...})
		shopGroup.GET("/cart", func(c *gin.Context) {...})
		shopGroup.POST("/checkout", func(c *gin.Context) {...})
	}
	r.Run()
}
```









