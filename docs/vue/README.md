# webpack基本使用



1. 概念：webpack 是前端项目工程话的具体解决方案

2. 主要功能：它提供了友好的前端模块话开发支持，以及代码压缩混淆，处理浏览器JavaScript的兼容性，性能优化等强大功能。

3. 好处：提高开发效率，和项目的可维护性。

4. webpack的基本使用

   ```bash
   #①新建项目空白目录，并运行npm init -y命令，初始化包管理配置文件package.json
   #②新建src源代码目录
   #③新建 src->index.html首页和src->index.js脚本文件
   #④初始化首页基本的结构
   #⑤运行npm install jquery -S命令，安装jQuery  
   #-S 是--save的简写
   # -S 表示安装到dependencies节点下 dependencies表示开发时要用到，上线项目时也要用到
   #⑥通过ES6模块化的方式导入jQuery，实现列表隔行变色效果
   ```

5. 在项目中安装webpack

   ```bash
   #在终端运行如下命令，安装webpack相关的两个包
   npm install webpack@5.42.1 webpack-cli@4.7.2 -D 
   #-D 是--save-dev的简写
   #-D表示安装到devDependencies节点下 devDependencies表示开发时要用到，上线项目就不需要了
   ```

6. 配置webpack

```bash
#1，在项目根目录中，创建名为webpack.config.js的webpack配置文件。并初始化如下的基本配置
// 使用node.js中的导出语法，向外导出一个webpack的配置对象
module.exprots = {
    mode:'development'//mode 用来指定构建模式，可选值有development 和 production
      // development 开发时候用
    // production 项目上线时候用
}
#2，在package.json的scripts节点下，新增dev脚本
"scripts": {
    "dev":"webpack" //script 节点下的脚本，可以通过npm run执行，列如：npm run dev
  }
  #3,在终端运行npm run dev 命令，启动webpack进行项目的打包构建
  
 #4，配置自定义构建的js文件，和输出的文件路径和名称
 const path = require('path');
// 使用node.js中的导出语法，向外导出一个webpack的配置对象
module.exports = {
    mode: 'development',
    // entry:'指定要处理哪个文件' __dirname代表项目根目录
    entry: './src/index1.js',
    output: {
        // path: path.resolve(__dirname, 'dist'),
        path: path.join(__dirname, 'dist'),//输出的文件存放路径
        filename: 'bundle.js',//输出文件名称
    },
};
  
```

## webpack自动打包插件安装

```bash
#1,安装webpack-dev-server插件
运行 npm install webpack-dev-server@3.11.2 -D
#2,配置webpack-dev-server
1>修改package.json->scripts中的dev命令如下
"scripts": {
    "dev": "webpack server"//script节点下的脚本，可以通过npm run运行
  },
2>再次运行npm run dev命令，重新进行项目打包
3>在浏览器中访问http://localhost:8080地址，查看自动打包效果
#注：如果你使用 webpack v4+ 版本，并且想要在命令行中调用 webpack，你还需要安装 CLI。
npm install --save-dev webpack-cli
#注意：webpack-dev-server会启动一个实时打包的http服务器
#webpack-dev-server 插件打包成的文件，放在内存里
#要用文件需要加载和引用内存里面的bundle.js
<script src="/bundle.js"></script>
```

## html-webpack-plugin 模板引擎插件安装

```javascript
#可以通过此插件定制index.html页面内容 在复制index.html的时候还会在里面加入js脚本，自动链接js文件
#安装html-webpack-plugin 插件
npm install html-webpack-plugin@5.3.2 -D
#配置 html-webpack-plugin
#写在webpack.config.js里面
//1，导入HTMl插件，得到一个构造函数
const HtmlPlugin=require('html-webpack-plugin')
//2,创建HTML插件实例对象
const htmlPlugin=new HtmlPlugin({
    template:'./src/index.html',//指定源文件的存放路径
    filename:'./index.html',//指定生成的文件的存放路径
})
module.ecports={
    mode:'deveopment',
    //3，通过plugins 节点，使htmlPlugin插件生效
    //插件的数组，webpack运行时，会加载并调用增插件
    plugins:[htmlPlugin],
}

#--------------
#webpack.config.js里面devServer
devServer: {
        open: true,//初次打包完成后，自动打开浏览器
        // host: '127.0.0.1',//实时打包所使用的主机地址
        //在http协议中，如果端口号是80，可以被省略
        port:80,//实时打包所使用的端口号
}


```

## webpack loader

```javascript
#在实际开发过程中，webpack默认只能打包处理以.js后缀名结尾的模块。其他非.js后缀名结尾的模块，webpack 默认处理不了，需要调用loader加载器才可以正常打包，否则会报错！
loader加载器的作用：协助webpack打包处理特定的文件模块。比如：
#css-loader 可以打包处理.Css相关的文件Y
#less-loader 可以打包处理.less相关的文件
#babel-loader 可以打包处理 webpack无法处理的高级JS语法

#loader配置打包处理css文件
//①运行 npm i style-loader@3.0.0 css-loader@5.2.6 -D 命令，安装处理CSS文件的loader
//②在 webpack.config.js的 module->rules 数组中，添加loader规则如下：
module:{ //所有第三方文件模块的匹配规则 
   rules:[//文件后缀名的匹配规则
       // 定义了不同模块的loader
       {test:/\.css$/,use:['style-loader','css-loader']}
           ]
}
//其中，test 表示匹配的文件类型，use表示对应要调用的loader注意：
//use数组中指定的loader顺序是固定的
//多个loader的调用顺序是：从后往前调用

#// 使用ES6导入语法，导入jQuery 用$接收
import $ from 'jquery';
#//导入样式 (在webpack中 一切皆模块，都可以使用ES6 导入语法进行导入和使用)
import './css/index.css'
1-> webpack 默认只能打包处理.js结尾的文件，处理不了其他后缀的文件
2->，由于代码中包含了index.css 因此webpack处理不了
#3->当webpack 发现某个文件处理不了的时候，会查找webpack.config.js这个配置文件
#看module.rules数组中，是否配置了对应的loader加载器
module:{ //所有第三方文件模块的匹配规则 
   rules:[//文件后缀名的匹配规则
       // 定义了不同模块的loader
       {test:/\.css$/,use:['style-loader','css-loader']}
           ]
}
#4-> webpack把index.css这个文件，先转交给最后一个loader进行处理，（先转交给css-loader）
#5-> css-loader 处理完毕之后，会把处理的结果转交给下一个loader（转交给style-loader）
#5-> 当style-loader处理完毕之后，发现没有下一个loader，于是就把处理结果转交给webpack
#7->webpack 把style-loader 处理的结果，合并到/dist/bundle.js中，最终生成打包好的文件


#loader配置打包处理less文件
//①运行npm i less-loader@10.0.1 less@4.1.1 -D命令
//②在webpack.config.js的module->rules数组中，添加loader规则如下：
module:{
    rules:[
        {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
    ]
}
#loader配置打包处理url路径相关文件
//①运行npm i url-loader@4.1.1 file-loader@6.2.0 -D 命令
//②在webpack.config.js的module->rules数组中，添加loader规则如下：
module:{
    rules:[
        {test:/\.jpg|png|gif$/,use:'url-loader?limit=22229'},
    ]
}
//其中？之后的是loader的参数项：
//·limit用来指定图片的大小，单位是字节（byte）
//·只有<=limit大小的图片，才会被转为base64格式的图片

```

## webpack 打包js文件中的高级语法

```javascript
//webpack只能打包处理一部分高级的JavaScript语法。对于那些webpack无法处理的高级js语法，
//需要借助babel-loader进行打包处理。例如webpack 无法处理下面的JavaScript 高级语法 代码：
#JavaScript 高级语法 代码：
//1，定义了infode 装饰器 
function info(target){
//2,为目标添加静态属性info
    target.info='Person info'
}
//3,为Preson 类应用info装饰器
@info
class Person{}
//4,打印Person的静态属性info
console.log(Person.info)
#配置babel-loader进行打包处理JavaScript 高级语法
npm i babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5 -D
//在webpack.config.js的module->rules数组中，添加loader规则如下：
//注意 必须使用exclude 指定排除项 因为node——modules 目录下的第三方包不需要被打包
module:{
    rules:[
        {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
    ]
}
#还要在项目根目录下，创建名为babel.config.js的配置文件，定义Babel的配置项如下：
module.exports={
    //声明babel可用的插件
    plugins:[['@babel/plugin-proposal-decorators',{legacy:}]]
}

```

## webpack打包发布

```javascript
#在package.json文件的scripts节点下，新增build命令如下：
"script":{
    "dev":"webpack serve",//开发环境中，运行dev命令
    "build":"webpack --mode production"//项目发布时，运行build命令
}
#  --model是一个参数项，用来指定webpack的运行模式。production代表生产环境，会对打包生成的文件进行代码压缩和性能优化。
#注意：通过--model 指定的参数项，会覆盖 webpack.config.js中的model选项。

#开发阶段 npm run dev
#发布阶段 npm run build
//打包发布生成的文件 分类
#js文件
 output: {
        filename: 'js/bundle.js',//输出文件名称 也可以这样写，放在js文件瑕里
    }
#图片 同一放到image目录中
//修改 webpack.config.js中的url-loader配置项，新增outputPath选项即可指定图片文件的输出路径：
{
    test:/\.jpg|png|gif$/,
        use:{
            loader:'url-loader',
                options:{
                    limit:22228,
                        //明确指定吧打包生成的图片文件，储存到dis目录下的image文件瑕中
                        outputPath:'image',
                }      
        }
}
#或者这样写   在配置url-loader配置项多个参数之间用&隔开
{ test: /\.jpg|png|gif$/, use: 'url-loader?limit=22229&outputPath=images' },
    
#打包发布自动清理dist目录下的旧文件
//为了在每次打包发布时自动清理掉dist目录中的旧文件，可以安装并配置clean-webpack-plugin 插件：
 //1.安装清理dist目录的webpack 插件
npm install clean-webpack-plugin@4.0.0 -D
//2.按需导入插件、得到插件的构造函数之后，创建插件的实例对象
const{CleanWebpackPlugin}=require('clean-webpack-plugin')//结构赋值
const cleanPlugin=new CleanWebpackPlugin()
//3.把创建的cleanPlugin插件实例对象，挂载到plugins节点中
plugins:[htmlPlugin，cleanPlugin]，//挂载插件
    
        
```

## Source Map

```javascript
#Source Map就是一个信息文件件，里面储存着位置信息。也就是说，Source Map文件中存储着压缩混淆后的代码，所对应的转换前的位置。
#有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码，能够极大的方便后期的调试。
#开发环境下默认生成的Source Map，|记录的是生成后的代码的位置。会导致运行时报错的行数与源代码的行数不一致的问题。
//解决默认Source Map的问题
//开发环境下，推荐在webpack.config.js中添加如下的配置，即可保证运行时报错的行数与源代码的行数保持一致：
module.exports={
    mode:'development',
    //eval-sour-map 仅限在开发模式下使用，不建议生产模式下使用
    //此选项生成的Source Map能够保证 运行时报错的行数 与 源代码的行数保持一致
     //在开发调试阶段，建议把devtool的值调为eval-source-map
    //项目发布的时候建议关掉
    devtool:'eval-source-map',
}
#注：在生产环境下，如果省略了devtool选项，则最终生成的文件中不包含Source Map。这能够防止原始代码通过Source Map的形式暴露给别有所图之人。
# 在生产环境下如果只想定位报错的具体行数，且不想暴露源码。此时可以将devtool的值设置为nosources-source-map。
# 在生产环境下，如果想在定位报错行数的同时，展示具体报错的源码。此时可以将 devtool的值设置为source-map。
```

## 导入路径 @

```javascript
// import msg from '../../msg'
import msg from '@/msg.js'
// 建议大家使用 @ 表示src 源代码目录下，从外往里找，不要使用../ 从里往外找
//@/msg.js
#需要在webpack.config.js文件中配置 如下：
 resolve: {
        alias: {
            //告诉webpack 程序员写的代码中，@符号表示src这一程目录
            '@':path.join(__dirname,'./src/')
        }
    }
```

## 配置Chrome浏览器

```javascript
#在谷歌浏览器安装vue_devtools_chrome_5.3.4.crx插件
```

# Vue

## Vue框架的两个特性

- 数据驱动视图：

  

  ```javascript
  #在使用了vue的页面中，vue会监听数据的变化，从而自动重新渲染页面的结构。
  #好处：当页面数据发生变化时，页面会自动重新渲染
  #注意：数据驱动视图是单向的数据绑定
  ```

- 双向数据绑定

  > 在网页中，form表单负责采集数据，Ajax负责提交数据

  ```javascript
#在填写表单时，双向数据绑定可以辅助开发者在不操作DOM的前提下，自动把用户填写的内容同步到数据源中。
  #好处：好处：开发者不再需要手动操作DOM元素，来获取表单元素最新的值！
  ```
  
  ## MVVM

  > **MVVM是vue实现数据驱动视图和双向数据绑的核心原理。MVVM指的是Model、View和ViewModel，它把每个HTML页面都拆分成了这三个部分，如图所示：**

  

  

## vue指令

**vue中指定按照不同的用途可分为六大类**

### 内容渲染指令

```javascript
#常用
#1，v-test  缺点：会覆盖标签里面的原有内容
//把msg对应的值，渲染到span标签里
<span v-text="msg"></span>
#2,{{ }} //插值表达式 实际开发中用的最多，只是一个占位符，不会覆盖内容
<span>姓名:{{msg}}</span>
#3,v-html 可以渲染带标签的内容渲染成真正的html
 <div v-html="info"></div>
 info:'<h4 style="color:red;font-weight:bold;">稻和稻草</h4>'
```

### 属性绑定指令


```javascript
# 插值表达式只能用在元素内容节点中，不能用在元素的属性节点中
#1，v-bind 
   <input type="text" v-bind:placeholder="tips">
    tips:'请输入用户名'
#v-bind可以简写为 :
<input type="text" :placeholder="tips">
//插值表达式运算
 <div>1+2的结果是{{1+2}}</div>
//插值表达式反转
 <div>{{tips}}：反正的结果是：{{tips.split('').reverse().join('')}}</div>
//属性拼接 
<div :title="'box'+index">这是一个div</div>
 index:3
<!-- 缩写 -->
<img :src="imageSrc">

<!-- 内联字符串拼接 -->
<img :src="'/path/to/images/' + fileName">

<!-- class 绑定 -->
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]">

<!-- style 绑定 -->
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>

```

### 事件绑定指令


```js
#v-on
 #<!-- v-on: 指令可以简写成 @  -->
  <p>count的值是:{{count}}</p>
<button @click="add">+1</button>
<button v-on:click="sub(2)">-1</button>
   // methods的作用，就是定义事件的处理函数
            methods: {
                // 以前的写法
                // add:function(){
                // }
                // 新写法
                add() {
                    console.log(vm);
                    //vm.count+=1;
                     // this===vm this指向vm
                    this.count+=1;
                },
                     sub(n) {
                    //可以传参数，
                    this.count-=n;
                }
            }
#事件对象
#  <!-- vue 提供了内置变量，名字叫做 $event  他就是原生得到事件对象e -->
#$event应用场景，如果默认的事件对象e被覆盖了，则可以手动传递一个$event
        <button @click="add(1,$event )">+n</button>
         add(n,e) {
                    this.count += n;
                    console.log(e);
                    // 判断 this.count的值是否为偶数
                    if (this.count % 2 == 0) {
                        e.target.style.backgroundColor = 'red';
                    } else {
                        e.target.style.backgroundColor = '';
                    }
                }

#事件修饰符
# <!-- 事件修饰符  .prevent 阻止默认行为 - 调用 event.preventDefault()-->
<a href="http:www.baidu.com" @click.prevent="show">百度</a>
#stop 阻止冒泡
#.stop - 调用 event.stopPropagation()
<div style="height: 150px; background-color: orange; line-height: 150px;" @click="divHandler">
 <button @click.stop="btnHandler">按钮</button>
</div>

#修饰符
/*
.stop - 调用 event.stopPropagation()。
.prevent - 调用 event.preventDefault()。
.capture - 添加事件侦听器时使用 capture 模式。
.self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
.{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
.native - 监听组件根元素的原生事件。
.once - 只触发一次回调。
.left - (2.2.0) 只当点击鼠标左键时触发。
.right - (2.2.0) 只当点击鼠标右键时触发。
.middle - (2.2.0) 只当点击鼠标中键时触发。
.passive - (2.3.0) 以 { passive: true } 模式添加侦听器
*/
#用法：
//绑定事件监听器。事件类型由参数指定。表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略。
#例如：<a href="http:www.baidu.com" @click.prevent="show">百度</a>



#按键修饰符
# @keyup
#用法 @keyup.需要绑定的键名字
/*
 当用户键盘按下 esc 键，触发clearInput函数 
 按下esc 键 清空文本框里的内容
     <input type="text" @keyup.esc="clearInput">
 methods: {
                clearInput(e){
                    e.target.value='';
                }
            }
*/

```

### 双向绑定指令


```js
#v-model
/*
当文本框里的值发生改变时，p标签里的值也会相对改变  因为文本通过双向绑定指令v-model 绑定了对象里的 username

  <p>用户的名字是：{{username}}</p>
        <input type="text" name="" id="" v-model="username">
            data: {
                username: 'zhangsan'
            }
            */

# v-model 指令 能和input，textarea，select，一起使用， 和div，span 等 一块使用无意义

#v-bind  是单向绑定  v-bind可以简写为 :
/*
当第二个文本框里的值发生变化，对象里的值和p标签的值不会发生变化，
当对象里的值发生变化，两个文本框里的值和p标签的值都会发生变化，
当第一个文本框里的值发生变化，第二个文本框和p标签和对象里面的值都会发生变化
由此证明 V-bind 是单向绑定
 <p>用户的名字是：{{username}}</p>
        <input type="text" v-model="username">
        <hr>
        <input type="text" :value="username" >
         data: {
                username: 'zhangsan'
            }
        */


#v-model 指令专用修饰
/*
修饰符：
.lazy - 取代 input 监听 change 事件
.number - 输入字符串转为有效的数字
.trim - 过滤输入首尾空格过滤
以上修饰符只能用于 v-model
*/
# .number 使用
 /* 通过v-model采集到的数据转成 数字 
        <input type="text" v-model.number="n1">+<input type="text" v-model.number="n2">=<span>{{ n1+n2}}</span>
 data: {
                username: 'zhangsan',
                n1: 1,
                n2: 2
            }
            */
# .trim 过滤输入首尾空格过滤
/*
<input type="text" v-model.trim="username">
        <button @click="showName">按钮</button>
         methods: {
                showName() {
                    console.log(`用户名是：${this.username}`)
                }
            },
        */
# .lazy - 取代 input 监听 change 事件
/*
取消实时监测 只文本框无焦点的时候更改数据
  <input type="text"  v-model.lazy="username">
  data: {
                username: 'zhangsan',
  }
  */
                

```



### 条件渲染指令


```js
#条件渲染指令
#1， V-if  和  v-show
/*
  <!-- v-if 是用动态创建和移除元素来控制隐藏元素 -->
      <p v-if="flag">这是被v-if控制的元素</p>
      <!-- v-show 是用display:none 来控制隐藏元素 -->
      <p v-show="flag">这是被v-show控制的元素</p>
 data: {
                // 如果flag 为true 则显示被控制的元素，如果为false 则隐藏被控制的元素
              flag:true
            }
            */
#原理区别：v-show 动态为元素添加或移除display:none 来实现元素的显示和隐藏
#    v-if 每次动态创建或移除元素，实现元素的显示和隐藏

#性能区别：如果刚进入页面的某些元素不需要被展示，而且后期这个元素也不需要被展示出来，此时v-if性能更好
# 实际开发，一般使用v-if
# 当和 v-if 一起使用时，v-for 的优先级比 v-if 更高

# v-if 配套使用的 v-else-if 
#表示 v-if 的“else if 块”。可以链式调用。 相当于if...else 语句
/*
 <div v-if="type === 'A'">优秀</div>
      <div v-else-if="type === 'B'">良好</div>
      <div v-else-if="type === 'C'">一般</div>
      <div v-else>差</div>
 data: {
                // 如果flag 为true 则显示被控制的元素，如果为false 则隐藏被控制的元素
              flag:true,
              type:'A'
            }
            */

```



### 列表渲染指令


```js
#列表渲染指令
# v-for  要循环生成什么样的标签 在每个标签后面加个v-for   ----> 类似于for in 循环语句
#  itrms 是待循环的数组
#  item 是被循环的每一项
<div v-for="item in items">
  {{ item.text }}
</div>
#------
# v-for指令孩子次一个可选的第二参数，即当前项的索引 语法格式：v-for="(item,index) in list"
   <table class="table table-bordered table-hover table-striped">
          <thead>
              <th>索引</th>
              <th>id</th>
              <th>姓名</th>
          </thead>
          <tbody>
              <tr v-for="(item,index) in list" :title="item.name+index">
                  <td>{{index}}</td>
                  <td>{{item.id}}</td>
                  <td>{{item.name}}</td>
                 
              </tr>
            
          </tbody>
      </table>
  data: {
               list:[
            {id:1,name:'张三'},
            {id:2,name:'李四'},
            {id:3,name:'王二'},
            {id:4,name:'麻子'},
                   
            ]}
  #官方建议 只要用到了v-for 指令一定要绑定一个 :key 属性 而且尽量吧id 作为key 的值  因为id 是唯一的
  #官方对 key 的值类型，是有要求的，只能是字符串或数字类型
  # 不要拿索引去做 key 的值，因为索引不具有唯一性，无意义 
  #key 的值是千万不能重复的 否则会终端报错
  #v-for 的默认行为会尝试原地修改元素而不是移动它们。要强制其重新排序元素，你需要用特殊 attribute key 来提供一个排序提示：
    <tr v-for="(item,index) in list" :key="item.id" :title="item.name+index">
                    <td>{{index}}</td>
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>

                </tr>
```



## vue 的指令与过滤器

```js
//过滤器（filters) 是vue为开发者提供的功能，常用语文本的格式化，过滤器可以用在两个地方：插值表达式和v-bind 属性绑定。
//过滤器应该被添加在JavaScript 表达式的尾部，有管道符进行调用，示例代码如下：
# | 是管道符
//在双花括号中通过管道符调用capitalize过滤器，对message 的值进行格式化
# <p>{{ message | capitalize }}</P>

#在v-bind 的通过管道符调用formatID过滤器，对rawId 的值进行格式化
<div> v-bind:id="rawId | formatId"</div>
<div id="app">
        <p>message 的值是：{{message | capi }}</p>
    </div>
    <script src="./lib/vue-2.6.12.js"></script>
    <script>
        const vm = new Vue({
            el: '#app',
            data: {
                message: 'hello vue.js'
            },
       #   // 过滤器函数必须被定义到filters 节点之下
       #   // 过滤器本质是函数
            filters: {
 #  // 注意 过滤器函数形参中的val 永远都是管道符前面的那个值 形参名字是任意的
                capi(val) {
          // console.log(val);
     // 字符串有 charAt() 方法，这个方法接受索引值，表示从字符串中把索引对应的字符获取出来
            // console.log(val.charAt(0));
                 // toUpperCase() 转成大写字母
                    const first = val.charAt(0).toUpperCase();
                    console.log(first);
                    // 字符串的slice 方法，可以截取字符串，从指定索引往后截取
                    // slice(1) 代表从索引为1 往后截取
                    const other = val.slice(1);
      #              // 强调：过滤器中一定要有一个返回值
                    return first + other;
                }
            }
        })
</script>

#连续调用过滤器
<p>message 的值是：{{message | capi | 第二个过滤器 | 第三个过滤器 |第n个过滤器}}</p>
# 调用过滤器 传参
// <p>message 的值是：{{message | capi(参数1，参数2，..)}}</p>
# 只能从第二个位置接受参数
// 接受方 capi(val,参数1，参数2，..)

#私有过滤器：定义在filters节点下的是私有过滤器，只能在el控制的区域才可以用
#全局过滤器：独立于每个vm 实例之外  定义在main.js
// vue.filter() 方法接受两个参数;
// 第一个参数：是全局过滤器的 名字
// 第二个参数：是全局过滤器的 处理函数
Vue.filter('capitalize',(val)=>{
    // 这是需要实现的具体功能，可以根据实际情况写
    return val.charAt(0).toUpperCase()+val.slice(1)+'~~';
})

   // 使用vue.filter() 定义全局过滤器
        Vue.filter('capi', (val) => {
            const first = val.charAt(0).toUpperCase();
            // console.log(first);
            // 字符串的slice 方法，可以截取字符串，从指定索引往后截取
            // slice(1) 代表从索引为1 往后截取
            const other = val.slice(1);
            // 强调：过滤器中一定要有一个返回值
            return first + other+'~~~~~';
        })
#结论：如果全局过滤器和私有过滤器名字一致，此时按照就近原则，调用自己私有过滤器
# vue3没有过滤器
```



## Watch侦听器

```js
# watch 侦听器 允许开发者监视数据的变化，从而针对数据的变化做特定的操作
语法格式：
const vm=new Vue({
    el:'#app',
    data:{username:''},
#    //侦听器定义在watch节点下
    watch:{
        //  监听username 值的变化
       //   newVal 是变化后的新值 ，oldVal是变化之前的旧值
       // 要侦听谁就用谁当函数名
    //    新值在前，旧值在后
   # 方法格式侦听器
        username(newVal,oldVal){
            console.log(newVal,oldVal);
        }
    }
})
#侦听器的格式：
# 1，方法格式的侦听器
# 缺点1：无法在刚进入页面的时候自动触发
# 缺点2：如果侦听的是一个对象，如果对象中的属性值发生变化，不会触发侦听器
# 2，对象格式的侦听器
# 好处1：可以通过**immediate** 选项让侦听器自动触发！！
# 好处2：可以通过deep选项，让侦听器深度监听对象中每个属性的变化

#对象型侦听器
   const vm = new Vue({
            el: '#app',
            data: { username: 'admin' },
            //所有的侦听器定义在watch节点下
            watch: {
                // 定义对象格式的侦听器
                username: {
                    //   侦听器处理函数 用handler 来定义
                    handler(newVal, oldVal) {
                        console.log(newVal, oldVal);
                    },
                    // immediate 的属性是一个布尔值，true代表已进入页面就触发一次侦听器
                    // immediate 选项的默认值是一个false 作用：控制侦听器是否自动触发
                    immediate:true
                }
            }
        })
# **深度监听**
    <div id="app">
        <input type="text"  v-model="info.username">
    </div>
 <script>
        const vm = new Vue({
            el: '#app',
            data: { 
                info:{
                 username:'admin'
             }
            },
            //所有的侦听器定义在watch节点下
            watch: {
              info:{
                  handler(newVal){
                      console.log(newVal);
                  },
                //   开启深度监听，只要对象中任何一个属性发生变化，都会触发对象的监听器
                  deep:true
              }
            }
        })
  #  // 改造版
                // 如果要侦听的是对象的子属性的变化，则必须包裹一层单引号
                'info.username'(newVal) {
                    console.log(newVal);
                }
    </script>

```

## 计算属性

```js
# 计算属性是指通过一系列运算之后，最终得到的一个属性值
# 这个动态计算出来的属性值，可以被模板结构或methods 方法使用，如下：
var vm=new Vue({
    el:'#app',
    data:{
        r:0,g:0,b,0
    },
 #   所有的计算属性 都要放到 computed 里
    computed:{
        rgb(){return `rgb(${this.r}，${this.g},${this.b}）`}
    },
    methods:{
        show(){console.log(this.rgb)}
    }
})

     // 所有的计算属性 都要放到 computed 里
            // 计算属性在定义的时候，要定义成方法格式
            computed: {
                // rgb 作为一个计算属性，被定义成方法格式
                // 最终 在这个方法中,要返回一个生产好的rgb(x,x,x)的字符串
                // this 指向vm实例
                rgb() { 
                    return `rgb(${this.r},${this.g},${this.b})` 
                }
            }
  <div class="box" :style="{backgroundColor:rgb }">
            <!-- rgb访问的是计算属性上的rgb -->
            {{ rgb }}
        </div>
# 计算属性用的时候，当属性用
# 特点1:定义的时候要被定义成方法
# 特点2：在使用订一份方法的时候，当普通的属性使用
# 好处1：实现了代码的复用
# 好处2：只要计算属性依赖的数据源发生变化，则计算属性会重新求值

```

## axios

> axios是一个专注于网络请求的库！



```js
#axios基本语法  导入axios库文件，会全局生成一个axios
axios({
    method:'请求的类型',
    url:'请求的 URL 地址'
}).then((result)=>{
  // .then 用来指定请求成功之后的回调函数
  //  形参中的 result 是请求成功后的结果
})

# axios发GET请求
 <script>
// 1，调用axios 方法得到的返回值是Promise 对象
 const result = axios({
    method: 'GET',
    url:'http://www.liulongbin.top:3006/api/getbooks',
    #  按需
  // URL中的查询 参数
    params:{
     id:1
 },
    // 请求体参数
    data:{}
})
// console.log(result);

result.then(function(books){
    console.log(books);//不是真实数据
    console.log(books.data);//是真实数据
})
    </script>
# ------
axios({
    method: 'GET',
    url:'http://www.liulongbin.top:3006/api/getbooks',
     #  按需
    // URL中的查询 参数
    params:{id:1},//请求id为1的图书
    // 请求体参数
    data:{}
}).then(function(result){
    console.log(result);//不是真实数据
    console.log(result.data);//是真实数据
})

# axios 在请求到数据之后，在真正的数据之外，套了一层壳
// config: {}
#  data: {真实数据}
// headers: {}
// request:{}
// status: 200
// statusText: ""

#axios 发post请求
 <button id="btnPost">发post请求</button>
   <script>
        // post请求
        document.querySelector('#btnPost').addEventListener('click', () => {
            axios({
                method: 'POST',
                url: 'http://www.liulongbin.top:3006/api/post',
                data: {
                    name:'zs',
                    age: 20
                }
            }).then(function (result) {
                console.log(result);
            })
        })
    </script>
# -----------------
  document.querySelector('#btnPost').addEventListener('click', async function () {
    #        // 如果调用某个方法的返回值是promise 实例，则前面可以添加await
  #          // await 只能用在async 修饰的方法中
            const result = await axios({
                method: 'POST',
                url: 'http://www.liulongbin.top:3006/api/post',
                data: {
                    name: 'zs',
                    age: 20
                }
            })
            console.log(result);//是一个promise对象
        })
# -----------------
  document.querySelector('#btnPost').addEventListener('click', async function () {
            // 如果调用某个方法的返回值是promise 实例，则前面可以添加await
            // await 只能用在async 修饰的方法中
  #          const { data } = await axios({
                method: 'POST',
                url: 'http://www.liulongbin.top:3006/api/post',
                data: {
                    name: 'zs',
                    age: 20
                }
            })
            console.log(data);//是服务器返回的真正的data对象
        })
#-----
   // Get请求
        document.querySelector('#btnGet').addEventListener('click', async function () {
            // 如果调用某个方法的返回值是promise 实例，则前面可以添加await
            // await 只能用在async 修饰的方法中
#            // 解构赋值的时候，使用： 进行重命名
  #          const { data:res } = await axios({
                method: 'GET',
                url: 'http://www.liulongbin.top:3006/api/getbooks',
              //      GET 传参用data
                data: {
                    name: 'zs',
                    age: 20
                }
            })
#            console.log(res.data);//是服务器返回的真正的data对象
#       console.log(res.data);//是服务器返回的真正的data对象的数据列
        })
# 注释::
## 1，解构赋值的的时候，使用async/await进行简化
## 2，使用解构赋值，从axios封装的大对象中，把data属性解构出来
## 3，把解构出来的data属性，使用冒号进行重命名，一般都重命名为{data:res}
```

## Vue Cli

```js
#安装 任意终端打开输入一下命令
// vue-cli 是npm上的一个全局包，使用npm install 命名。即可方便的把安装到自己电脑上：
// npm install -g @vue/cli
// 查看是否安装成功： vue -V
# 在需要创建项目的文件瑕内 终端 创建项目
基于 vue-cli 快速生成工程化的Vue项目：##   Vue create 项目名称   名称尽量用英文
```



```js
###  建议选最后一项
```







创建成功！

```js
#  Vue项目中src目录的构成
#   1，assets文件瑕：存放项目中用到的静态资源文件，列如：css样式表，图片资源
#   2，components文件瑕：程序员封装的、可复用的组件，都要放到components目录下
#   3,main.js 是项目的入口文件，整个项目的运行要先执行main.js
#   4，App.vue 是项目的根组件 定义项目的页面结构

```

> **vue项目的运行流程**

- 在工程化的项目中，Vue要做的事情很单纯：通过main.js把App.vue渲染到index.html的指定区域中

- 其中：
- 1,App.vue用来编写待渲染的模板结构
- 2，index.html中需要预留一个 el 区域
- 3，main.js 把App.vue渲染到index.html所预留的区域中

> **vue组件的三个组成部分**

每个.vue组件都由3个部分构成，分别是：

- template -->组件的模板结构
- script -->组件的 javascript 行为
- style -->组件的样式













## **在template模板结构里面只能有一个根元素**

```vue
<!--使用less语法 要在style前加lang="less"  -->
<style lang="less">
/*代表组件的样式*/
.test-box {
  background: #1e7e34;
  h3{
    color: red;
  }
}

</style>
```

## 在项目中使用组件的3个步骤

- 使用import 语法导入需要的组件  @指向根目录

  - ```js
    import Left form '@/components/Left.vue'
    ```

- 使用components节点注册组件

  - ```js
    - export default{
    - conpents:{
    - Left 
    }
    }
    ```

- 以标签形势使用刚才注册的组件

  - ```js
    <div class="box"> <Left></Left>   </div>
    ```

  

## 注册全局组件

- 在Vue 项目的main.js入口文件中，通过Vue.component()方法，可以注册全局组件

  - ```js
    //导入需要注册的全局组件
    import Count from ‘@/components/Count.vue'
    
    //参数1：字符串格式，表示组件的注册名称
    //参数2：需要被全局注册的那个组件
    
    Vue.component('MyCount',Count)
    
    
    ```

    

## props组件

```js
#props是组件的自定义属性，在封装通用组件的时候，合理的使用props可以极大的提高组件的复用性
#props 是只读属性，不能直接修改它的值，如果有需求，把props的值转存，就可以进行读写操作
export default{
   // 组件的自定义属性
    props:['自定义属性A','自定义属性B','其他自定义属性...'],
        //组件的私有数据
    data(){
        return { }
    }
}

 // 自定义属性的名字 是封装者自定义的，只要名称合法就行
  // props 中的数据，可以直接在模板结构中被使用
  // props 属性封装的值，是只读的,否则会报错
 props:['init'],


# 在声明自定义属性是，可以通过default来定义属性的默认值。
 export defaule{
     props:{
         init:{
            // 用default来定义属性的默认值。
             default:0
         }
     }
 }
# 在声明自定义属性是，可以通过type来定义属性的类型。
 export defaule{
     props:{
         init:{
            // 用default来定义属性的默认值。
             default:0,
                 //type来定义属性的类型
              type:Number
         
         }
     }
 }
# 在声明自定义属性是，可以通过 required 来定义使用时必须传值  必填项校验。
 export defaule{
     props:{
         init:{
            // 用default来定义属性的默认值。
             default:0,
                 //type来定义属性的类型
              type:Number
              //通过 required 来定义使用时必须传值 
         	   required：true
         }
     }
 }

```

## 组之间样式冲突

- 默认情况下，卸载  .vue 组件中的样式会全局生效，因此很容易造成多个组件之间的样式冲突问题

- 导致样式冲突的原因、

  - 单页面应用程序所有组件的DOM结构，都是基于唯一的index.html 页面，进行呈现的
  - 每个组件中的样式，都会影响整个index.html页面中的DOM元素

- 解决

  - 给当前页面每个标签都添加 自定义属性、

  - ```js
    <div class="left-container" data-v-001>
        <h3 data-v-001>Left 组件</h3>
    </div>
    h3[data-v-001]{
      color: red;
    }
    
    #简写 在每个单页面组件，style后面加上 scoped 防止组件之间的样式冲突-
    <style lang="less" scoped>
    .left-container{
      float: left;
      width: 50%;
      background-color: green;
    }
    h3{
      color: red;
    }
    </style>
    
    
    //当使用第三方组件库的时候，如果有修改组件默认样式的需求，需要用到 /deep/
    <van-button type="primary">主要按钮</van-button>
    /deep/ van-button{
      background-color: red;
    }
    
    ```



## 组件的生命周期

- 生命手气是一个组件从创建---》运行---》销毁 的整个阶段，强调的是一个时间段

- 生命周期函数: 是由Vue 框架提供的内置函数，会伴随着组件的生命周期，自动按次序执行




## [生命周期图示](https://cn.vuejs.org/v2/guide/instance.html#生命周期图示)



## 组件之间的数据共享

- 父子关系

  - 父----->子：用自定义属性传数据    **props**   自定义属性   定义在子组件里面

    - 子组件中，通过props来自定义属性
    - 父组件中，负责把数据，通过v-vind：绑定给子组件

  - 子------->父：用自定义事件 this.$emit()

    - 在子组件中，调用this.$emit()，来触发自定义事件，(参数1，字符串，表示自定义事件的名称，参数2，值，表示要发送给父组件的数据）
    - 在父组件中，通过v-on：来来绑定自定义事件，并提供一个事件处理函数，通过实践处理函数的形参，接收到子组件传递过来的的数据

    

- 兄弟关系  （嵌套关系也能用）

  - 用EvenBus.js传送数据

  - 1，数据发送方

    - 导入evenBus.js    import  bus from './evenBus.js  '
    - bus.$emit（‘要触发的事件的名字，’要发送的数据‘）

  - 2，EvenBus

    - 创建Vue实例的对象，new Vue()
    - 向外导出Vue 的实例对象， export  dafault new Vue()

  - 3。数据接收方

    - 导入evenBus.js    import  bus from './evenBus.js  '

    - bus.Son('要声明的自定义事件的名字，'事件处理函数)

    - 通过实践处理函数的形参，可以接收到发送过来的数据

    - 在数据接收方，created 生命周期函数中，调用bus.Som()方法

      

## ref引用

> **ref用来辅助开发者不依赖jQuery的情况下，获取DOM元素或组件的引用**
>
> **在每一个vue组件实例上，都会包含一个$refs对象，里面储存这对应的DOM元素或组件的引用，默认情况下，组件的$refs指向一个空对象**

```js
# ref DOM引用
<h3 ref="myh3">App根组件</h3>
    <button @click="showThis">打印 this</button>
methods:{
   showThis(){
     // 当前APP组件的实例对象
     console.log(this.$refs.myh3);
     this.$refs.myh3.style.color='red';
   }
 }

#注意  ref的名字不能重复

#ref 组件引用
//使用ref属性，为对应的组件添加引用名称
<my-count ref="counterRef"></my-count>
<button @click="getRef">获取$refs引用</button>

methods：{
    getRef(){
        //通过this.$refs.引用的名称，可以引用组件的实例
        control.log(this.refs.counterRef);
        //引用到组件的实例之后，就可以调用组件上的methods方法
        this.$refs.counterRef.add()
    }
}

# $nextTick()方法接受一个回调函数，功能是把回调函数延迟到页面DOM重新渲染后最新的数据后执行回调函数
 this.$nextTick(()=>{
       this.$refs.iptRef.focus()
      })



```

## 动态组件

> **动态组件指的是动态切换组件的显示与隐藏**

```js
#vue提供了一个内置的<component>组件，专门用来实现动态组件的渲染，示例代码如下：

data(){
    //1,当前要渲染的组件名称  // comName表示要展示组件的名字
    return {comName:'Left'}
}
// 2，通过is属性，动态指定要渲染的组件   component 标签相当于占位
//		component 标签是vue内置的，作用，组件的占位符
  //    is 属性的值，表示要渲染的组件名字
<component :is="comName"></component>
//3, 点击按钮，动态切换组件名称
<button @click=comName='Left'>展示 Left 组件</button>
<button @click=comName='Right'>展示 Right 组件</button>


```

> **使用keep-alive保持状态**

```js
# keep-alive 保证组件即使没有被展示，也不会被销毁
//keep-alive 可以把内部的组件进行缓存，而不是销毁组件
<keep-alive><component :is="comName"></component></keep-alive>
    
#  keep-alive 对应的生命周期函数 
// 1，当组件被缓存时，会自动触发组件的 deactivated  生命周期函数
// 2，当组件被激活时，会自动触发组件的 activated 生命周期函数
     activated() {
    console.log('组件被激活了 activated')
  },
  deactivated() {
    console.log('组件被缓存了 deactivated')
  },
    
 #   keep-alive 的include 属性 指定需要被缓存的组件
  <keep-alive include="Left,Right,xxx">
       <component :is="comName"></component>
     </keep-alive>
#   keep-alive 的exclude 属性 指定不需要被缓存的组件
<keep-alive exclude="Left,xxx">
       <component :is="comName"></component>
     </keep-alive>

#include 和 exclude这俩属性，不能同时使用
```

## 插槽

> **插槽（ slot )是vue 为组件的封装者，提供的能力，允许开发者在封装组件时，把不确定的，希望由用户指定的部分定义为插槽**

```js
# Left组件
<!--    声明一个插槽-->
//vue 官方规定，每一个slot，都要有一个name名称，如果省略slot的name属性，则有一个默认名称，default
    <slot name="default"></slot>	
#App根组件
 <Left>
     // 默认情况下，再说使用组件的时候，提供的内容都会被填充到名字为default的插槽中
    <p>这是在left组件内容区域，声明的p标签，显示在定义的插槽区域</p>
  </Left>
#------------------------
 
    <Left>
# 指定放到哪个插槽中  v-slot：插槽名
     // v-slot: 指令不能直接用在元素身上，只能用在template模态框中
    <template v-slot:default>
      <p>这是在left组件内容区域的p标签</p>
    </template>
  </Left>

  //1， 如果把内容填充到指定名称的插槽中，需要使用v-slot： 这个指令-->
  //  2，v-slot：后面要跟上插槽的名字
  //  v-slot：指令不能直接用在元素身上，必须用在template标签
  //  template 这个标签，不会被渲染出来，他是个虚拟的标签，只起到包裹性质的作用，不会被渲染成实质的HTML元素

#v-slot:简写 #

#具名插槽
 <slot name="num"></slot>
 <slot name="default"></slot>

#作用域插槽
// 在封装组件时，为预留 slot 提供属性对应的值，这用用法，叫做 作用域插槽
<slot name="n" msg="hello vue"></slot>

 <template #n="obj">
      <p>稻和稻草</p>
      <p>{{obj}}</p>
	 <p>{{obj.msg}}</p>
//obj=={ "msg": "hello vue" }
//obj.msg==hello vue
    </template>

#作用域的解构赋值
// left组件
 <slot name="number" msg="hello vue" :user="userinfo"></slot>
data(){
    return {
      // 用户的信息对象
      userinfo:{
       name:'zs',
        age:20
      }
    }
  }
#App根组件
<Left>
    // 解构赋值
   <template #number="{msg,user}">
      <p>稻和稻草1</p>
      <p>{{msg}}</p>
      <p>{{user.name}}</p>
      <p>{{user.age}}</p>

    </template>
  </Left>

```

## 自定义指令

- 私有自定义指令

  - ```js
    # 在每个vue组件中，可以在 directives 节点下生命私有自定义指令，示例代码如下：
    // 私有自定义指令的节点
    directives：{
        color：{
            //为绑定到的HTML 元素设置红色的文字
         #   当指令第一次被绑定到元素身上的时候，会立即触发bind函数
    	//   形参中的el 表示当前指令所绑定到的那个DOM对象
            bind(el){
                //形参中的el 是绑定了此指令的，原生的DOM对象
                el.style.color='red'
            }
        }
    }
    # 使用 自定义的 color 指令
     <h3 v-color>App根组件</h3>
    
    # 升级
     data(){
        return {
          color:'blue'
        }
      },
    directives:{  
        color:{
          bind(el,binding){
            console.log(binding)
            el.style.color = binding.value
          }
        }
      }
    // 升级的使用
    // 使用data里的颜色数据
    <h3 v-color="color">App根组件</h3>
    // 行内传参
    <h3 v-color="‘red’">App根组件</h3>
    
    
    
    #  update 函数    每次DOM更新时被调用
    // 私有自定义指令的节点
    directives：{
        color：{
            //为绑定到的HTML 元素设置红色的文字
         //  当指令第一次被绑定到元素身上的时候，会立即触发bind函数
    	//   形参中的el 表示当前指令所绑定到的那个DOM对象
            bind(el,binding){
                //形参中的el 是绑定了此指令的，原生的DOM对象
               el.style.color = binding.value
            },
            //    每次DOM更新时被调用
                update(el,binding){
                    el.style.color = binding.value
                }
        }
    }
    
    ## 函数简写
    // 如果bind 和 update 函数中的逻辑完全相同，则对象格式的自定义指令可以简写成函数格式
    directives:{
    // 在bind 和update 逻辑完全相同时，会触发相同的业务逻辑
    color(el,binding){
        el.style.color=binding.value
    }
    
    }
    
    ```

  - 

- 全局自定义指令

```js
# 全局共享的自定义指令，需要通过 "Vue.directive()"进行声明，示例代码如下
########## 全局自定义指令定义在  main.js
// 参数1：字符串，表示全局自定义指令的名字
// 参数2: 对象，用来接收指令的参数值
Vue.directive('color',function(el,binding){
     el.style.color=binding.value
})



```



## Eslint 规范



## axios 优化1

```js
# right 组件
 <button @click="postInfo">发起 POST 请求</button>
 methods: {
    async postInfo() {
      const { data: res } = await this.$http.post('/api/post', {
        name: 'zs',
        age: 20
      })
      console.log(res)
    }
  }
##   main.js

import axios from 'axios'
Vue.config.productionTip = false
// Vue.prototype.axios = axios
// 如果请求的根路径是一样的，可以先配置
// axios.defaults.baseURL='请求路径'
// 全局配置axios 的请求根路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'
// 把axios 挂载到Vue.prototype上， 供每个 .vue 组件实例直接使用
Vue.prototype.$http = axios
// 今后，在每个 .vue 组件中要发起请求，直接调用this.$http.get|post|xxx

#缺点 但是，把axios 挂载到Vue.prototype上，不利于api的复用


```



## axios优化2 --(常用)

> **封装  request.js**   **模块**
>
> **封装在 、src/utils/request.js****  如下：
>
> **哪里用到，直接在哪个组件导入request.js**

```js
import axios from 'axios'

#例
const axios1=大axios.create({
    baseURL:'http://api.taobao.com'
})
//	 例子
//	const axios2=大axios.create({
//	    baseURL:'http://api.jd.com'
//	})

//	向外导出
export default axios1
```





## 路由 --- 前端路由

> 官网：https://router.vuejs.org/zh/installation.html
>
> 路由就是对应关系
>
> 概念：Hash 地址与组件之间的对应关系
>
> 例：file:///D:/desktop/%E5%AD%A6%E4%B9%A0/web%E6%96%87%E4%BB%B6/js%E7%BB%83%E4%B9%A0/%E9%94%9A%E9%93%BE%E6%8E%A5.html#b2
>
> Hash 地址：**#b2**

**路由的工作方式**

- 用户点击了页面上的路由链接
- 导致了URL地址栏中的Hash值发生了变化
- 前端路由监听到Hash地址的变化
- 前端路由把当前Hash地址对应的组件渲染到浏览器中





```js
<a href="#/home">home</a>
<a href="#/movie">movie</a>
<a href="#/about">about</a>

data(){
  return {
      // 在动态组件的位置，要展示的组件的名字，值必须是字符串
      comName:'Home'
  }  
},
created(){
    // 只要当前 App组件一被创建，就立即监听 window 对象的onhashchange 事件
    window.onhashchange=()=>{
        console.log('监听到了 hash 地址的变化',location.hash)
        switch(location.hash){
                case '#/home':
                this.comName='Home'
                break
                case '#/movie':
                this.comName='Movie'
                break
                case '#/about':
                this.comName='About'
                break
        }
    }
}
```



### 路由库 vue-route

> **vue-route 是vue.js官方给出的路由解决方案，它只能结合vue项目进行使用，能够轻松的管理SPA项目总组件的切换**

**安装配置vue-router**

- 安装vue-router包

  - ```bash
    # vue2 项目安装命令如下
    npm install vue-router@3.5.2 -S
    ```

- 创建路由模块

  - ```js
    # 在src源代码目录下，新建router/index.js 路由模块，并初始化如下代码：
    // 1，导入 Vue 和VueRouter 的包
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    
    // 2,调用Vue.use 函数，把VueRouter 安装为Vue 的插件
    // Vue.use() 函数的作用，就是用来安装插件的
    Vue.use(VueRouter)
    
    //3,创建路由的实例对象
    const router =new VueRouter()
    
    // 4,向外共享路由的实例对象
    export default router
    ```

  - 

- 导入并挂载路由模块

  - ```js
    #  在main.js中
    // 导入路由模块，拿到路由的实例对象
    // /index.js 可以省略
    // 在进行模块话导入的人时候，如果给定的是文件夹，则默认导入这个文件夹下，名字叫做index.js 的文件
    import router from "@/router/index.js";
    
    
    new Vue({
      render: h => h(App),
      // 在vue项目中，要想把路由用起来，必须把路由实例对象，通过下面的方式进行挂载
      // router:路由的实例对象
      // router:router 课简写为router
      router
    }).$mount('#app')
    
    ```

  - 

- 声明路由链接和占位符

```js
# 创建链接，在app组件中
#当安装和配置了vue-router，就可以用router-link来替代普通的a链接了
<a href="#/home"> 首页 </a>
//改造 to=""，相当于href=" "
<router-link to="/home">首页</router-link>

    <a href="#/movie"> 电影 </a>
    <a href="#/about"> 关于 </a>
# 占位符 在app组件中
 <!--    只要在项目中，安装配置了 vue-router，就可以使用 router-view 这个组件了-->
    <!--    它的作用很单纯：占位符-->
    <router-view></router-view>

#声明路由链接  在router/index.js中 

// 导入需要的组件
import Home from "@/components/Home";
import Movie from "@/components/Movie";
import About from "@/components/About";


//3,创建路由的实例对象
const router =new VueRouter({
    // routes 是一个数组，作用：定义 hash 地址与 组件 之间的对应关系
    routes:[
        //路由规则
        // {path:'/home',component:要展示的组件}
        {path:'/home',component:Home},
        {path:'/movie',component:Movie},
        {path:'/about',component:About}
    ]
})




```

### 路由重定向

> **路由重定向指的是：用户在访问地址A的时候，强制用户跳转到地址C,从而展示特定的组件页面。**
>
> **通过路由规则的redirect 属性，指定一个新的路由地址，可以很方便的设置路由的重定向**

```js
#在router/index.js中 

//3,创建路由的实例对象
const router =new VueRouter({
    // routes 是一个数组，作用：定义 hash 地址与 组件 之间的对应关系
    routes:[
        //路由规则
        // {path:'/home',component:要展示的组件}
        // 当用户访问 / 的时候，通过 redirect 属性 跳转到 /home 对应的路由规则
        {path:'/',redirect:'/home'},
        {path:'/home',component:Home},
        {path:'/movie',component:Movie},
        {path:'/about',component:About}
    ]
})


```

### 嵌套路由

> **通过路由实现组件的嵌套展示，叫做嵌套路由**

```js
#about 组件
<div class="about-container">
    <h3>about 组件</h3>
<!--子级路由链接-->
    <router-link to="/about/tab1"> tab1 </router-link>
    <router-link to="/about/tab2"> tab2 </router-link>
<hr>
<!--    子级路由占位符-->
    <router-view></router-view>
  </div>
#router/index.js中 通过children 属性声明子路由规则

import Tab1 from "@/components/tabs/Tab1";
import Tab2 from "@/components/tabs/Tab2";
const router =new VueRouter({
    // routes 是一个数组，作用：定义 hash 地址与 组件 之间的关系
    routes:[
       //about 页面的路由规则，（父级路由规则
        path:'/about',
        component:About,
        children:[
        // 1，通过 children 属性，声明子级路由规则
        {path:'tab1',component:Tab1}, //2，访问 /about/tab1 时展示Tab1组件
        {path:'tab2',component:Tab2} //2，访问 /about/tab2 时展示Tab2组件
    ]
    ]
})
# 用法
//3,创建路由的实例对象
const router =new VueRouter({
    // routes 是一个数组，作用：定义 hash 地址与 组件 之间的关系
    routes:[
        //路由规则
        // {path:'/home',component:要展示的组件}
        // 当用户访问 / 的时候，通过 redirect 属性 跳转到 /home 对应的路由规则
        // 重定向的路由规则
        {path:'/',redirect:'/home'},
        {path:'/home',component:Home},
        {path:'/movie',component:Movie},
        {path:'/about',component:About,children:[
            // 子路由规则
                {path:'tab1',component:Tab1},
                {path:'tab2',component:Tab2}
            ]}

    ]
})

```

### 动态路由匹配

> **动态路由指的是：把Hash地址中，可变的部分定义为参数项，从而提高路由规则的复用性**

```js
# 在vue-router 中使用英文的 冒号（：）来定义路由的参数项，示例代码如下：
// 路由中的动态参数以：进行声明，冒号后面的是动态参数的名称
{path:'/movie/:id',component:Movie}
// 将以下3个路由规则，合并成一个，提高了路由规则的复用性
{path:'/movie/1',component:Movie}
{path:'/movie/2',component:Movie}
{path:'/movie/3',component:Movie}

# 在movie组件访问动态id
this.$route.params.id      // id 是根据你定义的动态id来写
// this.$route 是路由的参数对象
// this.$router 是路由的导航对象

#第二种传参 访问动态id
# 在 movie组件
 // 接收props 数组
  props: ['mid'],
# // 在index.js
 // props:true ：为当前组件开启props传参
  {path: '/movie/:mid', component: Movie,props:true},
在movie组件  访问：--{{mid}}

#拓展
<!--    注意1： 在hash 地址中，/ 后面的参数，叫做路径参数-->
<!--    在路由参数对象中，需要使用this.$route.params来访问路径参数-->
<!--    注意2：在hash 地址中，? 后面的参数，叫做查询参数-->
<!--    在路由参数对象中，需要使用 this.$route.query 来访问查询参数-->
<!--    注意3：在this.$route中，path只是路径部分；fullpath是完成的地址-->
<!--    例如：-->
<!--    "/movie/1?name=zs%20age%3D20"是fullpath的值-->
<!--    "/movie/1" 是path 的值-->
    <router-link to="/movie/1?name=zs age=20"> 洛基</router-link>
    <router-link to="/movie/1"> 洛基</router-link>
```

### 声明式导航&编程式导航

> 在浏览器中，点击链接实现导航的方式，叫做声明式导航。列如：

- 普通网页中点击<a> 链接，vue项目中点击<router-link> 都属于声明式导航

> 在浏览器中，调用API方法实现导航的方式，叫做编程式导航，列如：

- 普通网页中调用location.href 跳转到新页面的方式，属于编程式导航

**vue项目的编程式导航**

> 官网：https://router.vuejs.org/zh/guide/essentials/navigation.html

```js
# vue-router 提供了许多编程式导航的API ,其中最常见的导航API分别是：
#// 1，this.$router.push('hash 地址')
 // 跳转到指定的hash 地址，并增加一条历史记录
例如：
// 点击按钮 通过编程时导航API 导航跳转到指定的页面
    gotoLk(){
      this.$router.push('/movie/1')
    }
#2，this.$router.replace('hash地址')
// 跳转到指定的hash 地址，并替换掉当前的历史记录

#3，this.$router.go(数值n)
// 调用this.$router.go()方法，可以在浏览历史中国，前进和后退
<button @click="goback">后退</button>
 goback(){
     // 如果超过记录，则原地不动
     # -1 表示后退一步，-n 表示后退n步
     #如果 go(1) 代表前进1步，
      this.$router.go(-1)
    }
#  this.$router.back()  后退1步
#  this.$rouuter.forward() 前进1不

// 在行内使用编程式导航跳转，this必须省略
<button @click="$router.back()">后退</button>
```

### 导航守卫



**全局前置守卫**

> **每次发生路由的导航跳转时，都会触发全局前置守卫，因此，在全局前置守卫中，程序员可以对每个路由进行访问权限的控制**

```js
//创建路由实例对象
const router = new VueRouter({...})
//调用路由实例对象的beforeEach 方法，即可声明 全局前置守卫
// 每次发生路由跳转的时候，都会自动触发fn 这个回调函数
router.beforeEach(fn)
#---------------
//全局前置守卫的回调函数，接收3个形参，
router.beforeEach((to,from,next)=>{
    // to 是将要访问的路由的信息对象
    // from 是将要离开的路由信息对象
    // next 是一个函数，调用next() 表示放行，允许这次路由导航
})

```



> **next 函数的3种调用方式**





```js
  // 导航守卫 练习
    // 分析：
    // 1，拿到用户将要访问的hash地址
    // 2,判断hash 地址是否等于 /main
    // 2.1，判断等于 /main 证明需要登录之后，才能访问成功
    // 2.2，如果不等于 /main，则不需要登录，直接放行 next()
    // 3,如果访问的地址是 /main 则需要读取 localStorage 中 token 的值
router.beforeEach((to,from,next)=>{
 if (to.path === '/main') {
        const token = localStorage.getItem('token')
        if (token) {
            next() //访问的是后台主页，且有token 的值
        } else {
            next('/login') //访问的是后台主页，但没有token的值
        }
    } else {
        next() // 访问的不是后台主页直接放行

    }
   })
```

### 拓展





## 安装 vant组件库

> vant官网：https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart
>
> 安装方法不止一种，可以参考官网

```js
# Vue 2 项目，安装 Vant 2：
npm i vant -S

# Vue 3 项目，安装 Vant 3：
npm i vant@next -S
```

> **引入组件：**

```js
# 方式三. 导入所有组件 在main.js 中
# Vant 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法。

import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
```

> **使用**

```js
<van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="default">默认按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>
```

