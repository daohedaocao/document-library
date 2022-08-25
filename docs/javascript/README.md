# DOM

## 输出语句

```javascript
alert();//在浏览器弹出一个警示框
console.log();//在浏览器控制台打印输出的信息；
prompt() //在浏览器弹出输入框；
```

## 定义变量

```javascript
var a;
```

## 数据类型

| 简单数据类型 | 说明                                           | 默认值    |
| ------------ | ---------------------------------------------- | --------- |
| Number       | 数字型，包含整型，浮点型，如21,0.21            | 0         |
| Boolean      | 布尔类型，如true,false;等价于1和0              | false     |
| String       | 字符串类型，如“张三” ，js里字符串都带引号      | “ ”       |
| Undefined    | var a;声明了变量a但是没有给值，此时a=undefined | undefined |
| Null         | var a=null;声明了变量a为空值                   | null      |

### 数字型范围

```javascript
alert(Number.max_value);//最大值：1.7976931348623157e+308
alert(Number.min_value);//最小值:5e-324
```

### 数字类型三个特殊值

```javascript
alert(Infinty);//Infinty 无穷大
alert(-Infinty);//-Infinty  无穷小
alert(NaN);//NaN  非数值
//isNaN()这个方法可以用来判断非数字，如果是返回false，不是返回true
console.log(isNaN(10));//false
console.log(isNaN("小猪猪"));//true
```

## 转义字符

| 转义符 | 解释                     |
| ------ | ------------------------ |
| \n     | 换行符，n是newline的意思 |
| \\\    | 斜杠\                    |
| \\'    | ' 单引号                 |
| \\"    | “ 双引号                 |
| \t     | tab缩进                  |
| \b     | 空格,b是blank的意思      |

## 数据类型转换

### 转换为字符型

```JavaScript
//把数字型转换为字符串型,变量.toString()
var num =10;
var str=num.toString();// 隐式转换
//利用String转换
console.loh(String(num));
```

### 转换为数字型

| 方式                   | 说明                         | 案例             |
| ---------------------- | ---------------------------- | ---------------- |
| parseInt(string)函数   | 将String类型转换成数字型     | parselnt("80")   |
| parseFloat(string)函数 | 将String类型转换成浮点型数值 | parselnt("80.3") |
| Number()强制转换函数   | 将String类型转换成数值型     | Number("32")     |
| js 隐式转换（- * /）   | 利用算数运算隐式转换为数值型 | '32'-3           |

### 转换为布尔类型

| 方式          | 说明                 | 案例             |
| ------------- | -------------------- | ---------------- |
| Boolean()函数 | 其他类型转换成布尔型 | Boolean("true"); |

- 代表空、否定的值会被转换为false，如、0、NaN、null、undefined
- 其余值都会被转换为true

### 短路运算（逻辑中断）

#### 原理：

当有多个表达式的值时，左边的表达式可以确定结果时，就不再继续运算右边的表达式的值。

#### 逻辑与

- 语法：表达式1 && 表达式2
- 如果第一个表达式的值为真，则返回表达式2
- 如果第一个表达式的值为假，则返回表达式1

### 逻辑中断（短路运算）

#### 逻辑或

- 语法： 表达式1 || 表达式2
- 如果第一个表达式的值为真，则返回表达式1
- 如果第一个表达式的值为假，则返回表达式2

### 循环

```javascript
var cars=["张三"，"李四","王二"];
使用for循环
for (var i=0;i<cars.length;i++)
{ 
    document.write(cars[i] + "<br>");
}
使用while循环
while (i<5)
{
    x=x + "The number is " + i + "<br>";
    i++;
}
使用do while循环
do
{
    需要执行的代码
}
while (条件);
do
{
    x=x + "The number is " + i + "<br>";
    i++;
}
while (i<5);
使用switch循环
switch(n)
{
    case 1:
        执行代码块 1
        break;
    case 2:
        执行代码块 2
        break;
    default:
        与 case 1 和 case 2 不同时执行的代码
}



break 语句用于跳出循环。
continue 用于跳过循环中的一个迭代。
```

### 遍历数组

概念：把数值中的每个元素从头到尾都访问一次

```
var cars=["张三"，"李四","王二"];
for (var i=0;i<cars.length;i++)
{ 
    document.write(cars[i] + "<br>");
}
```

