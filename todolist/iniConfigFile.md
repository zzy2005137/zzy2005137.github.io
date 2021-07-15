### ini包的使用

https://ini.unknwon.io/docs

#### What Does .ini File Mean? (类似yaml，json等配置文件)

是类似yaml, json等格式的配置文件。纯文本，结构简单

用于windows环境下的用户配置设置

读作`in-ee` 意思是`initialization` 

#### ini 文件语法

``` ini
;comments
#comments

key1 = value

[section1]    #section名与结构体嵌套时的变量名对应
key2 = value

[section2]
key3 = value
```

#### 基本使用

创建对应结构体

`MapTo` 结构体映射

``` go
import "gopkg.in/ini.v1"

type Config struct {
	Version int `ini:"version"`
	Mysql   MysqlConfig
}

type MysqlConfig struct {
	User     string `ini:"user"`
	Password string `ini:"password"`
	Host     string `ini:"host"`
	Port     string `ini:"port"`
	DBname   string `ini:"db"`
}

func main() {
    
   c := new(Config)
	ini.MapTo(c, "config.ini")
	fmt.Println(c)
}
//output 
//&{1 {root root1234 127.0.0.1 13306 db3}}
```

#### 注意

> 否则会导致读取不到变量

- 结构体变量开头大写（Public）
- section对应结构体嵌套的情况，没有嵌套不要写section
- section名与所嵌套的结构体变量名要一致













