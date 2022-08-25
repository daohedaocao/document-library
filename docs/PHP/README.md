



# PHP动态网站开发案例教程

学习可使用 https://www.php.net/

## 第一章   PHP开发环境

## 1.1PHP简介

PHP是一个适合于开发规模为中、小企业级的动态网站的<u>*解释性程序语言*。</u>

#### 用途：

开发动态网站、微信公众号、小程序的后台开发语言

### 1.1.1静态网页与动态网页

从内容的角度来看,几乎一成不变的网页属于静态网页，而经常改变网也属动态网页。

从开发语言来看,纯粹采用 HTML 作为开发语言的网页属于静态网页,而采用其他动态开发语言(例如 PHP)来开发的网页属于动态网页。

从网页文件是否需要动态服务器解析执行的角度来看,不需要动态服务器解析执行的网页称为静态网页,而需要动态服务器解析执行的网页称为动态网页。

### 1.1.2 PHP语言的特点

（1）开放源代码

（2）基于web服务器（Apache）

（3）数据库支持

（4）跨平台

（5）易于学习

（6）安全性高

## 1.2集成开发环境配置

本门课程使用的集成开发环境是 *wampserver*。WAMP是 windows + Apache + MySQL + PHP

### 1.2.1 下载wampserver

https://www.wampserver.com/en/

### 1.2.2 安装wampserver

正常安装软件的流程。见课本 4-7页。

第七步中有的电脑可能会出现缺少MYSVCR100.dll。百度搜索下载，放到C:\windows\system32 文件夹下即可。

### 1.2.3 配置wampserver

双击桌面图标，等待图标变绿，证明wampserver启动成功。（建议：提前关闭本机的MySQL数据库服务）

##### 访问：浏览器地址栏输入  localhost:80/ ，回车。看到一个wampserver界面（红色的），说明安装成功

启动成功开启如下应用程序：Apache(web服务器）、MySQL数据库、PHP环境。

我们常用到的配置文件：httpd.conf、my.ini、php.ini

#### 常见的配置修改

* 修改服务器的访问端口：找到httpd.conf配置文件，打开找Listen 80     ServerName localhost:80，将80修改为其他的，如8080等
* 修改服务器站点：httpd.conf 文件，找到修改为

然后修改httpd-vhosts.conf文件，如

，最后重启wampserver。

* 修改MySQL端口号：my.ini 文件

  

### 1.2.4 编译PHP软件

软件有很多，只要可以编辑文件的工具，都可以写php代码。但是为了写php代码更快，我们可以选择专业的工具，如Dreamweaver，vscode等

推荐使用vscode，我们慢慢感受它的魅力

* vscode下载：https://code.visualstudio.com/
* 安装：下一步即可
* ### 搜索安装
* 汉化 
* 

## 1.3 牛刀小试

### 1.3.1 编写hello world

* php代码必须写在后缀名是.php的文件里

* 必须写在 <?php  ?>

```
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>hello world </title>
    </head>

​    <body>
​		<?php
​			echo “hello world”;
​		?>
​    </body>
</html>
```

```
<?php
	header('content-type:text/html;charset=utf-8');
	echo “hello world”;
?>
```



### 1.3.2 同一个页面上的PHP交互

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>同一个页面上PHP交互</title>
</head>
<body>
    <form action="" method="post" name="form1" id="form1">
        请输入一个正方形的边长
        <input type="text" name="Rad" id="Rad">
        <input type="submit" value="提交" id="send" name="send">
    </form>

    <?php
        if(isset($_POST['send'])){
            $Rad = $_POST['Rad'];
            $area = $Rad * $Rad;
            echo '正方形的面积是'.$area;
        }
    ?>
</body>
</html>
```

### 1.3.3 不同页面上PHP交互

创建  a.html 文件 ，编写如下代码

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="ex1-3b.php" method="post" name="form1" id="form1">
        请输入一个正方形的边长
        <input type="text" name="Rad" id="Rad">
        <input type="submit" value="提交" id="send" name="send">
    </form>
</body>

</html>
```

创建  b.php  文件，编写如下代码

```
<?php   
    if(isset($_POST['send'])){
        $Rad = $_POST['Rad'];
        $area = $Rad * $Rad;
        echo '正方形的面积是'.$area;
    }
?>
```

### 1.3.4 访问方法

①打开 wampserver

②打开浏览器，地址栏输入127.0.0.1:80/myphp/class01/t1.php

## 第二章 PHP语言基础

## 2.1 PHP入门

### 2.1.1 PHP脚本标记

以    <?php   开始，以  ?>结束，文件的后缀名是  .php

```
<?php
echo "hello world";
?>
```

### 2.1.2 PHP中的注释

#### ①单行注释：  //  

从   //   开始，到行末。作用范围是一行

```
<?php
// 输出hello world，这句话就是注释
echo "hello world";
?>
```

#### ② 多行注释:   /*    */

以  /*  开始，*/结束。作用范围是一块

```
<?php
/*
作用：输出hello world
作者：张三
*/
echo "hello world";
?>
```

### 2.1.3 输出语句

#### ①  print

 print只能输出一个数据

```
<?php
	$a = 123;
	print $a;
	print "hello world";
?>
```

#### ②   echo

echo可以输出多个数据，数据之间使用  逗号 隔开

```
<?php
	$a = 123;
	echo $a;
	echo "hello world" , $a;
?>
```

#### ③var_dump()  函数

输出每个表达式的数据类型和值

```
<?php
	$a = 123;
	$b = "hello";
	var_dump($a);
	var_dump($a , $b);
?>
```

## 2.2 PHP数据类型

#### 整型(int)

* 整数是没有小数的数字。

* 可以用四种格式规定整数：十进制、十六进制（前缀是 0x）、二进制（前缀是0b）或八进制（前缀是 0）

* 整数正负均可

* 整数不能有小数点

  ```
  <?php 
  $x = 5985;
  var_dump($x);
  echo "<br>"; 
  $x = -345; // 负数
  var_dump($x);
  echo "<br>"; 
  $x = 0x8C; // 十六进制数
  var_dump($x);
  echo "<br>";
  $x = 047; // 八进制数
  var_dump($x);
  ?>
  ```

#### 浮点型(float)

浮点数是有小数点或指数形式的数字。

```
<?php 
$x = 10.365;
var_dump($x);
echo "<br>"; 
$x = 2.4e3;
var_dump($x);
echo "<br>"; 
$x = 8E-5;
var_dump($x);
?>
```

#### 字符串型(string)

字符串是字符序列，比如 "Hello world!"。

字符串可以是引号内的任何文本。可以使用  单引号   或   双引号   ：

```
<?php 
$x = "Hello world!";
echo $x;
echo "<br>"; 
$x = 'Hello world!';
echo $x;
?>
```

* 单引号 和 双引号使用上的区别：

输出字符串时，如果字符串中需要表达一个变量的值，双引号定义的字符串可以直接将变量写入到字符串中间，而单引号定义的变量不行。

```
<?php 
$x = "中国";
echo "加油 {$x}";  // 输出 加油中国
echo '加油'.$x;  // 输出 加油中国
?>
```

#### 布尔型(boolean)

有两个值 true（真） 或 false（假）。常用于条件测试。也可以使用大写的 TRUE  、FALSE。

输出是  true 显示为 1 ，false 显示为 0

#### 数组

数组在一个变量中存储多个值。

```
<?php 
$cars=array("Volvo","BMW","SAAB");
var_dump($cars);
?>
```

#### 对象

对象是存储数据和有关如何处理数据的信息的数据类型。

在 PHP 中，必须明确地声明对象。

首先我们必须声明对象的类。对此，我们使用 class 关键词。类是包含属性和方法的结构。

然后我们在对象类中定义数据类型，然后在该类的实例中使用此数据类型：

```
<?php
class Car
{
  var $color;
  function Car($color="green") {
    $this->color = $color;
  }
  function what_color() {
    return $this->color;
  }
}
?>
```

#### NULL

特殊的 NULL 值表示变量无值。NULL 是数据类型 NULL 唯一可能的值。

NULL 值标示变量是否为空。也用于区分空字符串与空值数据库。

变量可以通过把值设置为 NULL，将变量清空：

```
<?php
$x="Hello world!";
$x=null;
var_dump($x);
?>
```

## 2.3 变量

变量是存储信息的容器。

#### ①命名规则：

* 变量以 $ 符号开头，其后是变量的名称
* 变量名称只能包含字母、数字和下划线（A-z、0-9 以及 _）
* 变量名称不能以数字开头（必须以字母或下划线开头）
* 变量名称对大小写敏感（$y 与 $Y 是两个不同的变量）

#### ②定义变量：

变量会在首次为其赋值时被创建。

PHP 是一门类型松散的语言。定义变量时，不用声明它的名称和类型。

```
<?php
$txt="Hello world!";
$x=5;
$y=10.5;
?>
```

#### ③变量的赋值方式

* 值赋值：将一个变量（常量）的值赋给另外一个变量
* 引用赋值：将一个变量的地址赋给另外一个变量。如 $a = &$b

#### ④可变变量

```php
$a = 10;
$b = "a";
echo $a;  //10
echo $$b;  //10
```

## 2.4 常量

常量是一个**简单值**的标识符。

常量值被定义后，在脚本的其他任何地方都不能被改变。

一个常量由**英文字母、下划线、和数字**组成,但数字不能作为首字母出现。 (常量名不需要加 **$** 修饰符)。

**注意：** 常量在整个脚本中都可以使用。

#### 格式：bool define ( string $name , mixed $value [, bool $case_insensitive = false ] )

- **name：**必选参数，常量名称，即标志符。
- **value：**必选参数，常量的值。
- **case_insensitive** ：可选参数，如果设置为 TRUE，该常量则大小写不敏感。默认是大小写敏感的。

```
<?php
// 区分大小写的常量名
define("GREETING", "格物穷理  知行合一");
echo GREETING;    // 输出 "格物穷理  知行合一"
echo '<br>';
echo greeting;   // 输出 "greeting"
?>
```

```
<?php
// 不区分大小写的常量名
define("GREETING", "格物穷理  知行合一", true);
echo greeting;  // 输出 "格物穷理  知行合一"
?>
```

## 2.5 运算符

### 2.5.1 算术运算符

| 例子   | 名称             | 描述            | 实例                        | 结果  |
| :----- | :--------------- | :-------------- | :-------------------------- | :---- |
| x + y  | 加               | x 和 y 的和     | 2 + 2                       | 4     |
| x - y  | 减               | x 和 y 的差     | 5 - 2                       | 3     |
| x * y  | 乘               | x 和 y 的积     | 5 * 2                       | 10    |
| x / y  | 除               | x 和 y 的商     | 15 / 5                      | 3     |
| x % y  | 模（除法的余数） | x 除以 y 的余数 | 5 % 2   10 % 8    10 % 2    | 1 2 0 |
| - x    | 取反             | x 取反          | `<?php $x =2; echo -$x; ?>` | -2    |
| a . b  | 字符串连接运算符 | 连接两个字符串  | "Hi" . "Ha"                 | HiHa  |
| x ** y | 幂               | x的y次方        | 2 ** 3                      | 8     |

PHP7+ 版本新增整除运算符 **intdiv()**。返回值为第一个参数除于第二个参数的值并取整（向下取整）

取模运算符的操作数在运算之前都会转换成整数（除去小数部分）。 浮点数取模可参考 [fmod()](https://www.php.net/manual/zh/function.fmod.php)。

取模运算符 `%` 的结果和**被除数**的符号（正负号）相同。

### 2.5.2 赋值运算符

基本的赋值运算符是 "="。它意味着左操作数被设置为右侧表达式的值。

| 例子      | 等同于        | 描述                           |
| :-------- | :------------ | :----------------------------- |
| x = y     | x = y         | 左操作数被设置为右侧表达式的值 |
| $a += $b  | $a = $a + $b  | 加法                           |
| $a -= $b  | $a = $a - $b  | 减法                           |
| $a *= $b  | $a = $a * $b  | 乘法                           |
| $a /= $b  | $a = $a / $b  | 除法                           |
| $a %= $b  | $a = $a % $b  | 取模                           |
| $a .= $b  | $a = $a . $b  | 字符串拼接                     |
| $a **= $b | $a = $a ** $b | 指数                           |

小技巧：

```
<?php

$a = ($b = 4) + 5; // $a 现在成了 9，而 $b 成了 4。

?>
```

### 2.5.3 位运算符

| 例子           | 名称                | 结果                                                     |
| :------------- | :------------------ | :------------------------------------------------------- |
| **`$a & $b`**  | And（按位与）       | 将把 $a 和 $b 中都为 1 的位设为 1。                      |
| **`$a | $b`**  | Or（按位或）        | 将把 $a 和 $b 中任何一个为 1 的位设为 1。                |
| **`$a ^ $b`**  | Xor（按位异或）     | 将把 $a 和 $b 中一个为 1 另一个为 0 的位设为 1。         |
| **`~ $a`**     | Not（按位取反）     | 将 $a 中为 0 的位设为 1，反之亦然。                      |
| **`$a << $b`** | Shift left（左移）  | 将 $a 中的位向左移动 $b 次（每一次移动都表示“乘以 2”）。 |
| **`$a >> $b`** | Shift right（右移） | 将 $a 中的位向右移动 $b 次（每一次移动都表示“除以 2”）。 |

### 2.5.4 比较运算符

返回结果是true   或者  false

| 例子      | 名称                       | 结果                                                         |
| :-------- | :------------------------- | :----------------------------------------------------------- |
| $a == $b  | 等于                       | **`true`**，如果类型转换后 $a 等于 $b。                      |
| $a === $b | 全等                       | **`true`**，如果 $a 等于 $b，并且它们的类型也相同。          |
| $a != $b  | 不等                       | **`true`**，如果类型转换后 $a 不等于 $b。                    |
| $a <> $b  | 不等                       | **`true`**，如果类型转换后 $a 不等于 $b。                    |
| $a !== $b | 不全等                     | **`true`**，如果 $a 不等于 $b，或者它们的类型不同。          |
| $a < $b   | 小于                       | **`true`**，如果 $a 严格小于 $b。                            |
| $a > $b   | 大于                       | **`true`**，如果 $a 严格大于 $b。                            |
| $a <= $b  | 小于等于                   | **`true`**，如果 $a 小于或者等于 $b。                        |
| $a >= $b  | 大于等于                   | **`true`**，如果 $a 大于或者等于 $b。                        |
| $a <=> $b | 太空船运算符（组合比较符） | 当$a小于、等于、大于 $b时 分别返回一个小于-1、等于0、大于1的 int 值。 |

```
<?php
echo 1 <=> 1; // 0
echo 1 <=> 2; // -1
echo 2 <=> 1; // 1
?>
```

### 2.5.5 错误控制运算符

PHP 支持一个错误控制运算符：@。将其放置在一个 PHP 表达式之前，该表达式可能产生的任何错误信息都被忽略掉。

### 2.5.6 递增／递减运算符

| 例子 | 名称 | 效果                          |
| :--- | :--- | :---------------------------- |
| $a++ | 后加 | 返回 $a，然后将 $a 的值加一。 |
| ++$a | 前加 | $a 的值加一，然后返回 $a。    |
| --$a | 前减 | $a 的值减一， 然后返回 $a。   |
| $a-- | 后减 | 返回 $a，然后将 $a 的值减一。 |

```
<?php
echo "<h3>Postincrement</h3>";
$a = 5;
echo "Should be 5: " . $a++ . "<br />\n";
echo "Should be 6: " . $a . "<br />\n";

echo "<h3>Preincrement</h3>";
$a = 5;
echo "Should be 6: " . ++$a . "<br />\n";
echo "Should be 6: " . $a . "<br />\n";

echo "<h3>Postdecrement</h3>";
$a = 5;
echo "Should be 5: " . $a-- . "<br />\n";
echo "Should be 4: " . $a . "<br />\n";

echo "<h3>Predecrement</h3>";
$a = 5;
echo "Should be 4: " . --$a . "<br />\n";
echo "Should be 4: " . $a . "<br />\n";
?>
```

### 2.5.7 逻辑运算符

| 例子       | 名称            | 结果                                                      |
| :--------- | :-------------- | :-------------------------------------------------------- |
| $a and $b  | And（逻辑与）   | **`true`**，如果 $a 和 $b 都为 **`true`**。               |
| $a or $b   | Or（逻辑或）    | **`true`**，如果 $a 或 $b 任一为 **`true`**。             |
| $a xor $b  | Xor（逻辑异或） | **`true`**，如果 $a 或 $b 任一为 **`true`**，但不同时是。 |
| $a && $b   | And（逻辑与）   | **`true`**，如果 $a 和 $b 都为 **`true`**。               |
| $a \|\| $b | Or（逻辑或）    | **`true`**，如果 $a 或 $b 任一为 **`true`**。             |
| ! $a       | Not（逻辑非）   | **`true`**，如果 $a 不为 **`true`**。                     |

“与”和“或”有两种不同形式运算符的原因是它们运算的优先级不同。

**`短路`**：与操作，如果$a 是false，那么$b将不运算，最终结果是false；

或操作，如果$a 是true，那么$b将不运算，最终结果是true；

### 2.5.8 数组运算符

| 例子      | 名称   | 结果                                                         |
| :-------- | :----- | :----------------------------------------------------------- |
| $a + $b   | 联合   | $a 和 $b 的联合。右边的数组元素附加到左边的数组后面，两个数组中都有的键名，则只用左边数组中的，右边的被忽略。 |
| $a == $b  | 相等   | 如果 $a 和 $b 具有相同的键／值对则为 **`true`**。            |
| $a === $b | 全等   | 如果 $a 和 $b 具有相同的键／值对并且顺序和类型都相同则为 **`true`**。 |
| $a != $b  | 不等   | 如果 $a 不等于 $b 则为 **`true`**。                          |
| $a <> $b  | 不等   | 如果 $a 不等于 $b 则为 **`true`**。                          |
| $a !== $b | 不全等 | 如果 $a 不全等于 $b 则为 **`true`**。                        |

### 2.5.9 类型运算符

`instanceof` 用于确定一个 PHP 变量是否属于某一类 [class](https://www.php.net/manual/zh/language.oop5.basic.php#language.oop5.basic.class) 的实例：

## 2.6 流程控制语句

### 选择结构

- **if 语句** - 在条件成立时执行代码
- **if...else 语句** - 在条件成立时执行一块代码，条件不成立时执行另一块代码
- **if...elseif....else 语句** - 在若干条件之一成立时执行一个代码块
- **switch 语句** - 在若干条件之一成立时执行一个代码块

### 2.6.1  if 语句

if 语句用于**仅当指定条件成立时执行代码**。

```
if (条件)
{
    条件成立时要执行的代码;
}
```

### 2.6.2  if...else 语句

**在条件成立时执行一块代码，条件不成立时执行另一块代码**

**语法**

```
if (*条件*)
{
	条件成立时执行的代码;
}
else
{
	条件不成立时执行的代码;
}
```

### 2.6.3 if...elseif....else 语句

**在若干条件之一成立时执行一个代码块**

**语法**

```
if (条件)
{
    if 条件成立时执行的代码;
}
elseif (条件)
{
    elseif 条件成立时执行的代码;
}
elseif (条件)
{
    elseif 条件成立时执行的代码;
}
else
{
    条件不成立时执行的代码;
}
```

### 2.6.4 switch语句

**有选择地执行若干代码块之一**

```
<?php
switch (n)
{
case label1:
    如果 n=label1，此处代码将执行;
    break;
case label2:
    如果 n=label2，此处代码将执行;
    break;
default:
    如果 n 既不等于 label1 也不等于 label2，此处代码将执行;
}
?>
```

### 循环结构

需要让相同的代码块一次又一次地重复运行，用循环。

在 PHP 中，提供了下列循环语句：

- **while** - 只要指定的条件成立，则循环执行代码块
- **do...while** - 首先执行一次代码块，然后在指定的条件成立时重复这个循环
- **for** - 循环执行代码块指定的次数
- **foreach** - 根据数组中每个元素来循环代码块

### 2.6.5 while 循环

while 循环将重复执行代码块，直到指定的条件不成立。

**语法**

```
while (条件)
{
    要执行的代码;
}
```

### 2.6.6 do...while 语句

do...while 语句会至少执行一次代码，然后检查条件，只要条件成立，就会重复进行循环。

**语法**

```
do
{
    要执行的代码;
}
while (条件);
```

### 2.6.7 for 循环

for 循环用于您预先知道脚本需要运行的次数的情况。

**语法**

```
for (初始值; 条件; 增量)
{
    要执行的代码;
}
```

参数：

- **初始值**：主要是初始化一个变量值，用于设置一个计数器（但可以是任何在循环的开始被执行一次的代码）。
- **条件**：循环执行的限制条件。如果为 TRUE，则循环继续。如果为 FALSE，则循环结束。
- **增量**：主要用于递增计数器（但可以是任何在循环的结束被执行的代码）。

**注释：**上面的**初始值**和**增量**参数可为空，或者有多个表达式（用逗号分隔）。

### 2.6.8 foreach 循环

foreach 循环用于遍历数组。

**语法**

```
foreach ($array as $value)
{
    要执行代码;
}
```

每进行一次循环，当前数组元素的值就会被赋值给 $value 变量（数组指针会逐一地移动），在进行下一次循环时，您将看到数组中的下一个值。

```
foreach ($array as $key => $value)
{
    要执行代码;
}
```

每一次循环，当前数组元素的键与值就都会被赋值给 $key 和 $value 变量（数字指针会逐一地移动），在进行下一次循环时，你将看到数组中的下一个键与值。

### 2.6.9 break

`break` 结束当前 `for`，`foreach`，`while`，`do-while` 或者 `switch` 结构的执行。

`break` 可以接受一个可选的数字参数（不能用变量）来决定跳出几重循环。

### 2.6.10 continue

`continue` 在循环结构用来跳过本次循环中剩余的代码并在条件求值为真时开始执行下一次循环。

`continue` 接受一个可选的数字参数来决定跳过几重循环到循环结尾。默认值是 `1`，即跳到当前循环末尾。

### 2.6.11 流程控制的代替语法

PHP 提供了一些流程控制的替代语法，包括 `if`，`while`，`for`，`foreach` 和 `switch`。替代语法的基本形式是把左花括号（{）换成冒号（:），把右花括号（}）分别换成 `endif;`，`endwhile;`，`endfor;`，`endforeach;` 以及 `endswitch;`。

**注意**:

不支持在同一个控制块内混合使用两种语法。

```
<?php
if ($a == 5):
    echo "a equals 5";
    echo "...";
elseif ($a == 6):
    echo "a equals 6";
    echo "!!!";
else:
    echo "a is neither 5 nor 6";
endif;
?>
```

```
<?php
$finaldir = 'download';

$finished = false;                       // we're not finished yet (we just started)
while ( ! $finished ):                   // while not finished
  $rn = rand();                          // random number
  $outfile = $finaldir.'/'.$rn.'.gif';   // output file name
  if ( ! file_exists($outfile) ):        // if file DOES NOT exist...
    $finished = true;                    // ...we are finished
  endif;
endwhile;                                // (if not finished, re-start WHILE loop)
?>
```



## 2.7 文件包含语句

### 2.7.1 include

被包含文件先按参数给出的路径寻找，如果没有给出目录（只有文件名）时则按照 [include_path](https://www.php.net/manual/zh/ini.core.php#ini.include-path) 指定的目录寻找。如果在 [include_path](https://www.php.net/manual/zh/ini.core.php#ini.include-path) 下没找到该文件则 `include` 最后才在调用脚本文件所在的目录和当前工作目录下寻找。如果最后仍未找到文件则 `include` 结构会发出一条[警告](https://www.php.net/manual/zh/function.include.php)；这一点和 [require](https://www.php.net/manual/zh/function.require.php) 不同，后者会发出一个[致命错误](https://www.php.net/manual/zh/function.include.php)。

```php
vars.php
<?php

$color = 'green';
$fruit = 'apple';

?>

test.php
<?php

echo "A $color $fruit"; // A

include 'vars.php';

echo "A $color $fruit"; // A green apple

?>
```

### 2.7.2 require

`require` 和 [include](https://www.php.net/manual/zh/function.include.php) 几乎完全一样，除了处理失败的方式不同之外。**require** 在出错时产生 **`E_COMPILE_ERROR`** 级别的错误。换句话说将导致脚本中止而 [include](https://www.php.net/manual/zh/function.include.php) 只产生警告（**`E_WARNING`**），脚本会继续运行。

### 2.7.3 include_once

`include_once` 语句在脚本执行期间包含并运行指定文件。此行为和 [include](https://www.php.net/manual/zh/function.include.php) 语句类似，唯一区别是如果该文件中已经被包含过，则不会再次包含，且 include_once 会返回 **`true`**。 如同此语句名字暗示的那样，该文件只会包含一次。

`include_once` 可以用于在脚本执行期间同一个文件有可能被包含超过一次的情况下，想确保它只被包含一次以避免函数重定义，变量重新赋值等问题。

### 2.7.4 require_once

`require_once` 语句和 [require](https://www.php.net/manual/zh/function.require.php) 语句完全相同，唯一区别是 PHP 会检查该文件是否已经被包含过，如果是则不会再次包含。

## 2.8 函数

### 2.8.1函数定义

**` 定义:` **指采用若干行代码以指明此函数具体的执行过程以及执行之前需要输入什么参数、执行完成后可以返回什么值。

**`作用`**：让同一段代码可以被多个地方直接调用，从而大大节省编程时间、减少编程错误、容易维护代码，实现结构化编程。

**`定义格式`**：

```php
<?php
function 函数名([形参表])
{
    函数体// 要执行的代码
    [return]
}
?>
```

- 函数的名称应该提示出它的功能
- 函数名称与标识符命名规则相同，以字母或下划线开头（不能以数字开头）

### 2.8.2函数调用

```
函数名（[实际参数列表]）
```

函数无需在调用之前被定义，*除非* 是下面两个例子中函数是有条件被定义时。

当一个函数是有条件被定义时，必须在调用函数 *之前* 定义。

```php
<?php

$makefoo = true;

/* 不能在此处调用foo()函数，
   因为它还不存在，但可以调用bar()函数。*/
bar();

function bar()
{
  echo "I exist immediately upon program start.\n";
}



if ($makefoo) {
  function foo()
  {
    echo "I don't exist until program execution reaches me.\n";
  }
}

/* 现在可以安全调用函数 foo()
   因为 $makefoo 值为真 */

if ($makefoo) foo();


?>
```

```php
<?php
function foo()
{
  function bar()
  {
    echo "I don't exist until foo() is called.\n";
  }
}

/* 现在还不能调用 bar() 函数，因为它还不存在 */

foo();

/* 现在可以调用 bar() 函数了，因为 foo() 函数
   的执行使得 bar() 函数变为已定义的函数 */

bar();

?>
```

PHP 中的所有函数和类都具有全局作用域，可以定义在一个函数之内而在之外调用，反之亦然。	

PHP 不支持函数重载，也不可能取消定义或者重定义已声明的函数。

### 2.8.3函数的参数

通过参数列表可以传递信息到函数，即以逗号作为分隔符的表达式列表。参数是从左向右求值的。

PHP 支持按值传递参数（默认），[通过引用传递参数](https://www.php.net/manual/zh/functions.arguments.php#functions.arguments.by-reference) 以及 [默认参数](https://www.php.net/manual/zh/functions.arguments.php#functions.arguments.default)。也支持 [可变长度参数列表](https://www.php.net/manual/zh/functions.arguments.php#functions.variable-arg-list) 和 [命名参数](https://www.php.net/manual/zh/functions.arguments.php#functions.named-arguments)。

**参数传递：**

```php
<?php
function add($x,$y)
{
    $total=$x+$y;
    return $total;
}
 
echo "1 + 16 = " . add(1,16);
?>
```

```
<?php
//引用传参
function fun(&$x , $y){
	$x += 10;
	$y += 20;
}
$a = 1;
$b = 5;
fun($a , $b);
echo "$a , $b";
?>
```

**默认参数：**

```php
<?php
function show($x,$y,$name="南阳职业学院")
{
    $total=$x.$y.$name;
    return $total;
}
 
echo show(1,16);
?>
```

### 2.8.4 可变函数

```php
<?php
function foo() {
    echo "In foo()<br />\n";
}

function bar($arg = '')
{
    echo "In bar(); argument was '$arg'.<br />\n";
}

// 使用 echo 的包装函数
function echoit($string)
{
    echo $string;
}

$func = 'foo';
$func();        // This calls foo()

$func = 'bar';
$func('test');  // This calls bar()

$func = 'echoit';
$func('test');  // This calls echoit()
?>
```

## 2.9数组

数组是一个能在单个变量中存储多个值的特殊变量。

在 PHP 中，array() 函数用于创建数组：

```
$arr = array();
```

在 PHP 中，有三种类型的数组：

- **数值数组** - 带有数字 ID 键的数组
- **关联数组** - 带有指定的键的数组，每个键关联一个值
- **多维数组** - 包含一个或多个数组的数组

### 2.9.1数值数组

这里有两种创建数值数组的方法：

自动分配 ID 键（ID 键总是从 0 开始）：

$cars=array("Volvo","BMW","Toyota");

人工分配 ID 键：

$cars[0]="Volvo";
$cars[1]="BMW";
$cars[2]="Toyota";

下面的实例创建一个名为 $cars 的数值数组，并给数组分配三个元素,然后打印一段包含数组值的文本：

**实例**

```
<?php 
	$cars=array("Volvo","BMW","Toyota"); 
	echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . "."; 
?>
```

#### 2.9.1.1获取数组的长度 - count() 函数

count() 函数用于返回数组的长度（元素的数量）：

**实例**

```
<?php 
	$cars=array("Volvo","BMW","Toyota"); 
	echo count($cars); 
?>
```

#### 2.9.1.2遍历数值数组

```
<?php
$cars=array("Volvo","BMW","Toyota");
$arrlength=count($cars);
 
for($x=0;$x<$arrlength;$x++)
{
    echo $cars[$x];
    echo "<br>";
}
?>
```

### 2.9.2 关联数组

关联数组是使用您分配给数组的指定的键的数组。

这里有两种创建关联数组的方法：

```
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
```

or:

```
$age['Peter']="35";
$age['Ben']="37";
$age['Joe']="43";
```

可以在脚本中使用指定的键：

```
<?php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
echo "Peter is " . $age['Peter'] . " years old.";
?>
```

#### 2.9.2.1遍历关联数组

遍历并打印关联数组中的所有值，您可以使用 foreach 循环

```
<?php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
 
foreach($age as $x=>$x_value)
{
    echo "Key=" . $x . ", Value=" . $x_value;
    echo "<br>";
}
?>
```

```php
<?php
    echo "学习数组 ，就是定义、访问、遍历。升级就是 函数的使用";
    /**
     * 不论是哪一种数组，结构一样
     * 都是  key => value 
     * 
     * 访问是  数组名[键]
     */

    //数组中的键不允许重复，如果重复，则相同键的元素，后者将前者值覆盖。
    echo "<br/>============数值数组=========<br/>";
    //默认分配键的数组是数值数组，键是从左到右、从0开始、逐个递增
    $arr_1 = array("南阳职业学院","计应3班",12,6,true);//数组元素可以是任意的数据类型

    var_dump($arr_1);

    echo "<br/>============访问数值数组=========<br/>";
    echo $arr_1[1];
    echo "<br/>============数值数组遍历=========<br/>";
    for ($i = 0; $i < count($arr_1); $i++) { 
        echo $arr_1[$i] . "\t";
    }
    echo "<br/>";
    foreach($arr_1 as $v){
        echo $v . "\t";
    }
    echo "<br/>";
    foreach($arr_1 as $k => $v){
        echo "键是:$k,值是$v <br/>";
    }


    echo "<br/>============关联数组=========<br/>";
    //array(键=>值,键=>值,键=>值....) ，其中 键使用字符串（不可以是汉字）的形式，值可以是任意类型
    $arr_2 = array("nz"=>"南阳职业学院","banji"=>"计应3班","renshu"=>38);
    var_dump($arr_2);
    echo "<br/>============访问关联数组=========<br/>";
    echo $arr_2['banji'];
    echo "<br/>============关联数组遍历=========<br/>";

    foreach($arr_2 as $v){
        echo $v . "\t";
    }
    echo "<br/>";
    foreach($arr_2 as $k => $v){
        echo "键是:$k,值是$v <br/>";
    }

    echo "<br/>============混合数组=========<br/>";
    //混合数组中，没有明确的键元素， 可以整体看做是数值数组，其索引是从左往右，从零开始依次递增
    //但是某个元素的键数字（或转换后是数字的），那么其后边的没有指定键的元素，他们的键会在之前的基础之上累加
    $arr_3 = array("nz"=>"南阳职业学院","123"=>32,"banji"=>"计应3班",12,122=>'nz',"renshu"=>38);
    $arr_4 = array("nz"=>"南阳职业学院",12=>32,"banji"=>"计应3班",12,'nz',"renshu"=>38);
    var_dump($arr_3);
    var_dump($arr_4);

    echo "<br/>============访问混合数组=========<br/>";
    echo $arr_3['banji'];

    echo "<br/>============混合数组遍历=========<br/>";

    foreach($arr_3 as $v){
        echo $v . "\t";
    }
    echo "<br/>";
    foreach($arr_3 as $k => $v){
        echo "键是:$k,值是$v <br/>";
    }

    echo "<br/>============多维数组=========<br/>";
    $arr_5 = array(
        "nz"=>'南阳职业学院',
        "xy"=>array("计算机学院","机电学院","经济与管理学院"),
        "xiaoling"=>10
    );
    var_dump($arr_5);

    echo "<br/>============访问多维数组=========<br/>";
    echo $arr_5['nz'];
    echo "<br/>";
    echo $arr_5['xy'][0];
    echo "<br/>============多维数组遍历=========<br/>";
    foreach($arr_5 as $v){
        if(is_array($v)){
            foreach($v as $v_v){
                echo $v_v . "\t";
            }
        }else{
            echo $v . "\t";
        }
    }
    echo "<br/>";
    foreach($arr_5 as $k => $v){
        echo "键是:$k ,值是";
        if(is_array($v)){
            foreach($v as $v_v){
                echo $v_v . "<br/>";
            }
        }else{
            echo $v . "<br/>";
        }
    }

?>
```

### 2.9.3数组排序函数

- sort() - 对数组进行升序排列
- rsort() - 对数组进行降序排列
- asort() - 根据关联数组的值，对数组进行升序排列
- ksort() - 根据关联数组的键，对数组进行升序排列
- arsort() - 根据关联数组的值，对数组进行降序排列
- krsort() - 根据关联数组的键，对数组进行降序排列

```php
<?php
$cars=array("Volvo","BMW","Toyota");
sort($cars);
?>
```

```php
<?php
$numbers=array(4,6,2,22,11);
sort($numbers);
?>
```

```php
<?php
$cars=array("Volvo","BMW","Toyota");
rsort($cars);
?>
```

```php
<?php
$numbers=array(4,6,2,22,11);
rsort($numbers);
?>
```

```php
<?php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
asort($age);
?>
```

```php
<?php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
ksort($age);
?>
```

```php
<?php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
arsort($age);
?>
```

```php
<?php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
krsort($age);
?>
```

