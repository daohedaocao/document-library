

# ES6中的类的对象

```javascript
#创建类
#类里面的函数不需要function 来声明
constructor()构造函数

// 1，创建类 class 创建一个明星类
class Star{
    // 构造函数 constructor()
constructor(uname,age){
this.uname=uname;
this.age=age;
}
}
// 2,利用类创建对象 new 
// new Star();
var xzz=new Star('小猪猪',10);
var xz=new Star('小猪',20);
console.log(xzz.uname);
console.log(xz.uname);
console.log(xzz);
console.log(xz);
// 1,通过class关键字创建类，类名我们还是习惯性的定义首字母大写
// 2，类里面有个constructor 函数，可以接收传递过来的参数，同时返回实例对象
// 3，constructor 函数只要new 生成实例时，就会自动调用这个函数，如果我们不写这个函数，类也会自动生成增函数
// 4，生成实例 new 不能省略
// 5，最后注意语法规范，创建类 类名后面不要加小括号，生成实例，类名后面加小括号，构造函数不需要加function

```

## 类的继承

```javascript
<script>
//         // 类的继承
// class Father{
//     constructor(){

//     }
//     money(){
//         console.log(100);
//     }
// }
// // 继承函数extends 
// class Son extends Father{

// }
// var son=new Son();
// son.money();


class Father{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    sum(){
        console.log(this.x+this.y);
    }
}
class Son extends Father{
    constructor(x,y){
        // this.x=x;
        // this.y=y;
        super(x,y);//调用了父类中的构造函数
    }
}
var son =new Son(1,2);
son.sum();


    </script>

```

## 使用类注意事项

1. ES6中类没有变量提升，必须现定义类，才能通过类实例化对象
2. 类里面的共有的属性和方法一定要加this使用

## 类的指向

```javascript
 <button>点击</button>
    <script>
var that;
var _that;
class Star{
    constructor(uname,age){
        // constructor里面的this 指向的是创建的实例对象
        that =this;
        console.log(this);
        this.uname=uname;
        this.age=age;
        this.btn=document.querySelector('button');
        this.btn.onclick=this.sing;
    }
    sing(){
        // 这个sing方法里面的this指向的是btn 这个按钮，因为这个按钮调用了这个函数
        console.log(this);
        console.log(that.uname);//that里面存的是constructor里面的this
    }
    dance(){
        // 这个dance 里面的this指向的是实例对象，ldh 因为ldh调用了这个函数
        _that =this;
console.log(this);
    }
}
var ldh=new Star('刘德华');
console.log(that===ldh);
ldh.dance(_that===ldh);

    </script>
```

## 静态成员和实例成员

```javascript
 // 构造函数中的属性和方法我们称为成员，成员可以添加
        function Star(uname, age) {
            this.uname = uname;
            this.age = age;
            this.sing = function () {
                console.log('我会唱歌');
            }
        }
        var ldh = new Star('刘德华', 18);
        // 实例成员就是构造函数内部通过this添加的成员，uname age sing 就是实例成员
        // 实例成员只能通过实例化的对象来访问
        console.log(ldh.uname);
        ldh.sing();
        // console.log(Star.uname);//不可以通过构造函数来访问实例成员
        // 2，静态成员
        // 在构造函数本身上添加的成员  sex就是静态成员
        Star.sex = '男';
        // 静态成员只能通过构造函数来访问
        console.log(Star.sex);
        console.log(ldh.sex);//不能通过对象来访问

```

## 拓展内置对象的方法

```javascript
   console.log(Array.prototype);
        Array.prototype.sum = function () {
            var sum = 0;
            for (var i = 0; i < this.length; i++) {
                sum += this[i];
            }
            return sum;
        }
        // 不能采用这种方法，会报错
        // Array.prototype = {
        //     sum: function () {
        //             var sum = 0;
        //             for (var i = 0; i < this.length; i++) {
        //                 sum += this[i];
        //             }
        //             return sum;
        //     }
        // }
          
        var arr = [1, 2, 3];
            console.log(arr.sum());//6
            console.log(Array.prototype);
            var arr1 = new Array(11, 22, 33);
            console.log(arr1.sum());//66

```

## 原型链成员查找

```javascript

        function Star(uname, age) {
            this.uname = uname;
            this.age = age;
            // this.sing = function () {
            //     console.log('我会唱歌');
            // }

        }
        Star.prototype.sing = function () {
            console.log('我会唱歌');
        }
        Star.prototype.sex='女';
        //    Object.prototype.sex='男';
        var ldh = new Star('刘德华', 18);
        // 就近原则
        ldh.sex='男';
        console.log(ldh.sex);
        console.log(Object.prototype);
        console.log(ldh);
        console.log(Star.prototype);
        console.log(ldh.toString);
```

## call方法

```javascript
  // call
        function fun(x,y) {
            console.log('我想吃饭');
            console.log(this);
            console.log(x+y);
        }
        var o = {
            name: 'andy'
        }
        // fun();
        // 1,call可以调用函数
        // fun.call();
        // 2,call可以改变this指向 此时这个函数的this就指向了o这个对象 
        // call第一个参数不参与运算 可以改变函数this指向
        fun.call(o,1,2);

```

## 处理数组的方法

```javascript
#1,forEach方法
  // forEach 迭代遍历数组
        var arr = [1, 2, 3];
        var sum=0;
        arr.forEach(function (value, index, array) {
            console.log('每个数组元素' + value);
            console.log('每个数组元素的索引号' + index);
            console.log('数组本身' + array);
            sum+=value;

        })
        console.log(sum);
#2，filter方法
 // filter筛选数组
        var arr = [14, 22, 3, 4, , 50, 30];
        var newArr = arr.filter(function (value, index) {
            // 返回大于等于2的 返回的值存到数组中
            // return value >= 20;
            // 返回偶数
            return value % 2 === 0;
        })
        console.log(newArr);
#3，some方法
  // some方法 查找数组中是否满足条件的元素 
        var arr=[10,30,29,9];
        var flag=arr.some(function(value){
            return value>=20;
        })
        console.log(flag);
        var arr1=['red','pink','blue'];
        var flag1=arr1.some(function(value){
            // 找到第一个满足条件的 就不终止循环了
            return value=='pink';
        })
        console.log(flag1);
#2，filter 也是查找满足条件的元素，返回的是一个数组，而且是吧所以满足条件的数组返回回来
#3，some 也是查找满足条件的元素是否存在，返回的是一个布尔值，如果查找到第一个满足条件的元素就终止循环



```

# 异步编程高级用法

## ES6模块化

**Es6模块化规范中的3个定义：**

- **每个js文件都是一个独立的模块**
- **导入其他模块成员使用import关键字**
- **向外共享模块成员使用export关键字**

> 在 node.js中体验ES6模块化

node.js默认仅支持CommonJS模块化规范，若想基于node.js体验与学习 ES6模块化语法，可以按照如下两个步骤进行配置：

1. 确保安装 V14.15.1 或更高版本的node.js

   1. ```js
      node -v     #查看版本
      ```

2. 在packge.json的根节点中添加  "type":"module"节点

   1. ```js
      #终端初始化一个package.json文件
      npm init -y
      
      #注意：文件瑕名字不能用中文字符
      ```
   
   

## ES6模块化的基本语法

```js
# 默认导出语法：
export default 默认导出的成员对象

# 默认导入的语法:
import 接收名称 from '模块标识符'

#按需导出的语法
export 按需导出的成员
例如：
export let a1=2
export let a2=2
export let a3=2
#按需导入语法
import {a1,a2,XXX} from '模块标识符'
```

1. **默认导出与默认导入**

   1. > **默认导出的注意事项：**

   - 每个模块中，只允许使用唯一的一次export default ，否则会报错

     > 默认导入的注意事项

   - 默认导入的接受名称可以随意命名，只要合法就行

2. **按需导出与按需导入**

   1. > **按需导出与按需导入的注意事项**

      - 每个模块中可以使用多次按需导出

      - 按需导入的成员名称必须和按需导出的名称保持一致

      - 按需导入时，可以使用as关键字进行重命名

        - ```js
          import {s1,s2 as str2} from './03按需导出.js'
          //s2 as str2 重命名为str2
          ```

      - 按需导入可以和默认导入一起使用

3. **直接导入并执行模块中的代码**

   > **如果只想单纯地执行某个模块中的代码，并不需要得到模块中向外共享的成员，此时，可以直接导入并执行模块代码，示例代码如下：**

```js
//当前文件模块为 05——m3.js
//在当前模块中执行一个for循环操作
for(let i=0;i<3;i++){
    console.log(i)
}
#----------------------------
//直接导入并执行模块代码，不需要得到模块向外共享的成员
import './05——m3.js'
```



## 回调地狱--->Promise

> 多成回调函数的相互嵌套，就形成了回调地狱，示例代码如下：

```js
serTimeout(()=>{//第一层回调函数
    console.log('延迟 1 秒后输出')
    serTimeout(()=>{//第二层回调函数
    console.log('延迟 2 秒后输出')
        serTimeout(()=>{//第三层回调函数
    console.log('延迟 3 秒后输出')
},3000)
},2000)
},1000)

```

> 如何解决回调地狱的问题：
>
> 为解决回调地狱的问题，ES6中新增了Promise的概念

- Promise是一个构造函数：
  - 我们可以创建Promise的实例const p = new Promise()
  - new 出来的Promise 实例对象，代表一个异步操作
- Promise.prototype 上包含一个 .then()方法
  - 每一次new Promise() 构造函数得到的实例对象
  - 都可通过原型链的方式访问到 .then() 方法，例如p.then()
- .then()方法用来预先指定成功和失败的回调函数
  - p.then(成功的回调函数，失败的回调函数)
  - p.then(result=>{ },error=>{ })
  - 调用 .then() 方法时，成功的回调函数是必选的，失败的回调函数是可选的

**回调地狱：**



```js
#安装：npm install then-fs
```

## then-fs 基本使用

> 调用 then-fs 提供的readFile()方法，可以异步地读取文件的内容，它的返回值是 Promise 的实例对象。因此可以调用 .then()方法为每个Promise异步操作指定成功和失败之后的回调函数，示例代码如下：



> 上述的代码，无法保证文件的读取顺序，需要进一步改进！！



##  .then()方法的特性

> **如果上一个 .then() 方法中返回一个新的Promise 实例对象，则可以通过下一个 .then() 继续进行处理，通过.then()方法的链式调用，就解决了回调地狱的问题**





## .catch 方法捕获错误

在Promise的链式操作中如果发生了错误，就可以调用Promise.prototype.catch方法进行捕获和处理：



如果不希望前面的错误导致后续 .then()无法正常执行，可以将 /catch 的调用提前:



## Promise.all()方法

Promise.all() 方法会发起并行的Promise异步操作，等所有的异步操作全部结束后，才会执行下一步的.then操作（等待机制），示例代码如下：



> 注意:数组中Promise的实例的顺序，就是最终结果的顺序



## Promise.race()方法

Promise.race()方法会发起并行的Promise异步操作，只要任何一个异步操作完成，就立即执行下一步的.then操作（赛跑机制）示例代码如下：



## 基于Promise封装读取文件的方法

方法的封装要求：

- 1,方法的名称要定义为getFile
- 2,方法接受一个形参fpath，表示要读取的文件路径
- 3,方法的返回值为Promise实例对象

```js
#getFile方法的定义
function getFile(fpath){
    return new Promise()
    // new Promise()只是创建了一个形式上的异步操作
}

#创建具体的异步操作
#如果想要创建异步操作，则需要在new Promise() 构造函数期间，传递一个function函数，将具体的异步操作定义到function函数的内部，示例代码如下：
import fs from 'fs'
function getFile(fpath){
    return new Promise(function(){
        //4,下面这行代码，表示是一个具体的、读文件的异步步骤
        fs.readFile(fpath,'utf8',(err,dataStr)=>{	})
    })
}


```

## 获取 .then()的两个实参







## async和await

async和await是ES8中引入的新语法，用来简化Promise异步操作，在async和await出现之前，开发者只能通过链式 .then()的方法处理Promise异步操作，示例代码如下：



> .then 链式的优点，解决了回调地狱的问题，
>
> .then链式的缺点，代码阅读性差，不易理解
>
> 



> async和await的基本使用

```js
import thenFs from "then-fs";

// 如果某个返回值是Promise实例可以用await和async修饰
async function getAllFile() {
    const r1 = await thenFs.readFile('./files/1.txt', 'utf8')
    console.log(r1)
    const r2 = await thenFs.readFile('./files/2.txt', 'utf8')
    console.log(r2)
}

getAllFile()
```

> async和await的注意事项

- 如果在function中使用await，则function必须被async修饰
- 在async方法中，第一个await之前的代码会同步执行，await之后的代码会异步执行
- 



## EventLoop

> javascript 是一个单线程语言

> **执行过程**
>
> 





## 宏任务和微任务

> 

> 

## API接口案例

> 

> 

> 



>  **npm i express@4.17.1 mysql2@2.2.5**

**4，创建基本的服务器**

```js
//使用 ES6 语法导入
import express from 'express'
const app = express()
app.listen(80,()=>{
    console.log('serve running at http://127.0.0.1')
})
#可以通过以下几种命令在终端运行
//启动需要启动的服务文件
nodemon server.js
node server.js
npx nodemon server.js
```

**5，创建db数据库操作模块**

```js
import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    database: 'my_db_01',
    user: 'root',
    password: 'admin123',
})


// 向外导出
export default pool.promise()
```

...........

## 错误处理



