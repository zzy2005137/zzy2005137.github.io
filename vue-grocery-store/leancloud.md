## leancloud storage

> 需求：存储包含文件或者关联文件的对象

``` js
itemObj = {
    name:"",
    description:"",
    category:"",
    img:null
}
```

一、注册并创建应用；域名绑定；

二、安装与初始化

```  shell
 npm install leancloud-storage --save
```

``` js
import AV from "leancloud-storage"

AV.init({
  appId: "Ulaw7giTyqj4y7HPb5ghyo5d-gzGzoHsz",
  appKey: "2NrLba4t067j7p7iNCzd2joJ",
  serverURL: "https://please-replace-with-your-customized.domain.com",
})

```

验证服务器地址

``` shell
curl https://please-replace-with-your-customized.domain.com/1.1/date

#正常则返回
{"__type":"Date","iso":"2020-10-12T06:46:56.000Z"}
```

三、主要用到的几个类

`AV.Object`

`AV.File`

`AV.User`

`AV.Query`

四、对象的存储

>  注意：当需要存储尺寸较大或结构较为复杂的数据，如文档，图片，视频等，这类数据不适合用 `AV.Object` 保存，此时文件对象 `AV.File` 便成为了更好的选择。后面会总结二者如何关联

- 创建对象

  ``` js
  // 为 AV.Object 创建子类
  const Todo = AV.Object.extend('Todo');
  
  // 为该类创建一个新实例
  const todo = new Todo();
  ```

  或

  ``` js
  // 你还可以直接使用 AV.Object 的构造器
  const todo = new AV.Object('Todo');
  ```

  其中传入的参数是对象所对应的的云端数据库的class名字

- 保存对象

  `obj.save().then()`

  ``` js
  // 为属性赋值
  todo.set('title', '马拉松报名');
  todo.set('priority', 2);
  
  // 将对象保存到云端
  todo.save().then((todo) => {
    // 成功保存之后，执行其他逻辑
    console.log(`保存成功。objectId：${todo.id}`);
  }, (error) => {
    // 异常处理
  });
  ```

- 查询对象

  步骤：

  1. 创建 `AV.Query` 实例；
  2. 向其添加查询条件；
  3. 执行查询并获取包含满足条件的对象的**数组**。

  ``` js 
  const query = new AV.Query('Student'); 
  query.equalTo('lastName', 'Smith');
  query.find().then((students) => {
    // students 是包含满足条件的 Student 对象的数组
  });
  
  //单个查询
  query.first().then( res =>{})
  
  //根据id获取
  query.get(obj_id).then(res=>{})
  ```

  对返回结果的操作：

  1. 获取单个属性值 `res.get()`

  ``` js
  query.get('582570f38ac247004f39c24b').then((todo) => {
    // todo 就是 objectId 为 582570f38ac247004f39c24b 的 Todo 实例
    const title     = todo.get('title');
    const priority  = todo.get('priority');
  
    // 获取内置属性
    const objectId  = todo.id;
    const updatedAt = todo.updatedAt;
    const createdAt = todo.createdAt;
  });
  ```

  2. 一次性获取返回对象的所有属性（数据绑定）`res.toJSON()` 

     可以直接赋值给对象

  ```js
  query.get('582570f38ac247004f39c24b').then((todo) => {
    console.log(todo.toJSON());
  });
  //输出
    // {
    //   createdAt: "2017-03-08T11:25:07.804Z",
    //   objectId: "582570f38ac247004f39c24b",
    //   priority: 2,
    //   title: "工程师周会",
    //   updatedAt: "2017-03-08T11:25:07.804Z"
    // }
  ```

  

- 删除对象

  根据ID删除对象

  ``` js 
  //从云端删除一个item类下的指定id的对象
  const item = AV.Object.createWithoutData("item", obj.objectId)
  item.destroy()
  ```



五、文件的操作

- 构建文件

  ```js
  const file = new AV.File('avatar.jpg', localFile);
  ```

  第一个参数为文件名，第二个参数为 `File` 类型的对象，是 `input type="file"` 上传所获取的数据对象。若使用element ui , 则需注意去掉一层封装，`file.raw`

- 保存文件

  ```js
  file.save().then((file) => {
    console.log(`文件保存完成。URL：${file.url}`);
  }, (error) => {
    // 保存失败，可能是文件无法被读取，或者上传过程中出现问题
  });
  ```

  将文件保存到云端后，便可获得一个永久指向该文件的 URL：

  文件上传后，可以在 `_File` class 中找到。已上传的文件无法再被修改。

- 删除文件

  使用文件id删除

  ```js
  const file = AV.File.createWithoutData('552e0a27e4b0643b709e891e');
  file.destroy();
  ```



六、文件关联对象

- `obj.add()` 关联

  已经保存到云端的文件可以关联到 `AV.Object`

  ```js
  const Todo = AV.Object.extend('Todo');
  const todo = new Todo();
  todo.set('title', '买蛋糕');
  // attachments 是一个 Array 属性
  todo.add('attachments', file);
  todo.save();
  ```

- 获取包含文件的对象 `query.include("属性名")`

  ```js
  getObjs() {
        const query = new AV.Query("item")
        // 同时获取附件中的文件
        query.include("img")
  
        query.find().then((items) => {
          // items 是包含满足条件的对象的数组
          // toJSON()方法一次获取对象的全部属性，而不用一个个get
          var container = []
          items.forEach((item) => {
            container.push(item.toJSON())
          })
          this.objArray = container
          console.log(this.objArray)
        })
      },
  ```



