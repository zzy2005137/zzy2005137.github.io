# SQL Basic Sytax 

### SQL & NoSQL



### CREATE DATABASE

``` sql
mysql -u root -p
password:

show databases;
create database database_name;	//创建database
use database_name;  //进入到某个database
```

### CREATE TABLE

> cli较复杂，用图形界面或gorm创建表格



### INSERT

- step1: view table structure

  ``` sql
  DESCRIBE table_name;
  ```

- step2: insert

  ``` sql
  INSERT INTO table_name (column1,column2,...) 
  VALUES (value1,value2,...);
  
  INSERT INTO persons (name, birth_date)
  VALUES ('Victoria Ashworth', '1996-10-17');
  ```

  注：id自增，不需要insert

### SELECT

- select columns 

  ``` sql
  SELECT column1_name, column2_name, columnN_name FROM table_name;
  ```

- select all

  ``` sql
  SELECT * FROM table_name;
  ```

### UPDATE

``` sql
UPDATE table_name
SET column1_name = value1, column2_name = value2,...
WHERE condition;
```

### DELETE

``` sql
DELETE FROM table_name WHERE condition;
```



### CONDITIONS

#### WHERE

``` sql
SELECT column_list FROM table_name WHERE condition;
SELECT * FROM table_name WHERE condition;
```

#### AND, OR

``` sql
eg: SELECT * FROM table_name WHERE id>10;
SELECT * FROM employees
WHERE salary > 5000 AND (dept_id = 1 OR dept_id = 5);
```

#### ORDER BY

``` sql
SELECT column_list FROM table_name ORDER BY column_name ASC|DESC;
```

#### LIMIT & TOP

``` SQL
//TOP  可指定前几个或前百分之几
SELECT TOP 3 * FROM employees
ORDER BY salary DESC;

SELECT TOP 30 PERCENT * FROM employees
ORDER BY salary DESC;

//LIMIT 效果一样
SELECT column_list FROM table_name LIMIT number;

SELECT * FROM employees 
ORDER BY salary DESC LIMIT 3;
```



### FAQ

> CLI字符编码问题

``` sql
show variables like 'character%'; //查看字符相关变量
set character_set_results=utf8mb4;  //改成utf8mb4
```







 
