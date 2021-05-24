# Model : database

> 为了永久存储数据，在项目中添加数据库部分。且根据MVC设计的原则，`model`包需要完全独立

## 连接数据库

Go连接数据库需要两个包，一个是内置的`sql`包，另一个是所用数据库的驱动包，驱动包采用匿名import的方法。`*sql.DB`类型负责完成具体的对数据库的操作。初始化方法如下：

```go
func (m *BooklistModel) Init()  {
	
    //1.指定数据库（err只检查语法）
	db, err := sql.Open("mysql",
		"root:1230@tcp(localhost:3306)/booklist")
	if err != nil {
		log.Fatal(err)
	}
	
    //2.尝试连接
	err = db.Ping()
	if err != nil {
		// do something here
		fmt.Println("booklist数据库连接失败")
	} else {
		fmt.Println("booklist数据库连接成功")
	}

	m.DB = db
}
```



## 添加与修改数据

### QUERY

用`db.Query`，必须有一个`rows`对象接收返回的结果，且手动关闭连接

步骤如下：

+ 创建与数据库字段对应的变量
+ `rows, err := db.Query`
+ 调用`rows.Scan`给变量赋值

### INSERT，UPDATE，DELETE

用`db.Exec`，可以不指定接收对象，连接会自动关闭



## 代码结构

同样采用面向对象的写法，在`model`包中定义`BooklistModel`结构体，每一个具体操作数据库的功能函数作为其方法。逻辑如下

```go
type BooklistModel struct {
	DB *sql.DB
}

func (m *BooklistModel) Init()  {}

func (m *BooklistModel) QueryBooks() []BookInfo{}

func (m *BooklistModel) AddBook(BookName, FinishedTime, Comments string) {}

```



由于在`controller`中需要调用操作数据库的函数，而`handler`函数要实现接口又不能增加接受变量，因此将`BooklistMode`作为`Controller`结构体的一个成员变量。在主函数中初始化并赋值

``` go
type Controller struct {
	M		model.BooklistModel
	Init     bool
}
```



## 参考

 [GO DATABASE/SQL TUTORIAL](http://go-database-sql.org/index.html) 

[ATE IN GOLANG AND MYSQL DATABASE](https://learningprogramming.net/golang/golang-and-mysql/date-in-golang-and-mysql-database/) 面向对象















[Introduction](https://zzy2005137.github.io/Booklist/introduction.html)

[View : html and css ](https://zzy2005137.github.io/Booklist/View.html)

[Controller :   Go  http package ](https://zzy2005137.github.io/Booklist/Controller.html)

[Model : database](https://zzy2005137.github.io/Booklist/Model.html) 

