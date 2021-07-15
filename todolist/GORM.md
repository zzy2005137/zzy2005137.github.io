# GORM

## About docs

> 尝试通过阅读文档学习

1. 注意版本
2. 若水三千，只取一瓢饮
3. 要理清逻辑



[GORM 2.0 发布说明 ](https://gorm.io/zh_CN/docs/v2_release_note.html)

## GORM basics (2.0)

### 步骤

- 定义模型
- 连接数据库
- 迁移 （把结构体和数据表对应起来）

``` go
//模型定义
type Product struct {
  ID	int
  Code  string
  Price uint
}

func main(){
    //连接数据库
    dsn := "root:root1234@tcp(127.0.0.1:13306)/db3?charset=utf8mb4&parseTime=True&loc=Local"
    db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
    
	 //自动迁移
	 db.AutoMigrate(&Product{})
}
```

### 创建

> 注意：gorm v2 版本才支持批量创建    
>
> 导包的**地址**改变

`db.Create()`

``` go
import(
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)
//单条创建
u1 := UserInfo{
		Name:   "yiliang",
		Gender: "男",
		Hobby:  "make money",
}	
db.Create(&u1)


//批量创建
var u2 = []UserInfo{
		{Name: "zzy1", Gender: "boy", Hobby: "study"},
		{Name: "zzy2", Gender: "boy", Hobby: "make money"},
}
db.Create(&u2)

```

### 查询

查询单条数据 `First`, `Take` , `Last` 

更多的，用`Find` 。可以接受struct和slice

``` go
//单条查询
//获取id=13的单条数据，存到u中
u := UserInfo{}
db.Find(&u, 13) //内联条件
fmt.Println(u)

//批量查询
//获取name=zzy开头的多条数据
users := []UserInfo{}
db.Where("name like ?", "zzy%").Find(&users)   //
fmt.Println(users)

db.Where("name IN ?", []string{"jinzhu", "jinzhu2"}).Find(&users)
// SELECT * FROM users WHERE name IN ('jinzhu','jinzhu 2');

```

[更多查询例子 | GORM](https://gorm.io/zh_CN/docs/query.html#inline_conditions)

### 更新

`db.Save`   逻辑： 查找，修改，保存

``` go
//单条记录更新
db.First(&user)  //先查询，绑定数据

user.Name = "jinzhu 2"  //修改
user.Age = 100

db.Save(&user) //save
```

更新整列详见docx



### 删除

`db.Delete()`

如果指定的值不包括主属性，那么 GORM 会执行批量删除，它将删除所有匹配的记录

``` go
//单条删除
db.Find(&u, 13)
db.Delete(&u)   //根据主键删除

//批量删除，即添加条件
db.Where("name LIKE ?", "zzy%").Delete(UserInfo{})
```

