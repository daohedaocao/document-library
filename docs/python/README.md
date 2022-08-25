## 安装

```js
#检测
C:\Users\笙歌>python --version
Python 3.10.0

C:\Users\笙歌>pip --version
pip 21.2.3 from D:\python3.10\lib\site-packages\pip (python 3.10)

C:\Users\笙歌>#安装成功

#更改镜像
C:\Users\笙歌>pip config set global.index-url https://pypi.doubanio.com/simple
Writing to C:\Users\笙歌\AppData\Roaming\pip\pip.ini
C:\Users\笙歌>
#通过Python的包管理工具pip安装IPython 交互式工具
pip install ipython或pip3 install ipython
#使用
ipython

#查看pip版本
pip -V
#查看已安装的包
pip list
#更新版本 
C:\Users\笙歌>D:\python3.10\python.exe -m pip install --upgrade pip
```

## 条件判断语句

- python指定任何非0和非空值为True，0或者None为false

- python编程中if语句用于控制程序的执行 ，基本形式为

  ```python
  if 判断条件1：
  	执行语句1   #必须得有缩进
  elif 判断条件1：
  	执行语句2
  else:
  	执行语句3
  # -----------------------------
  score = float(input('请输入成绩: '))
  if score >= 90:
      grade = 'A'
  elif score >= 80:
      grade = 'B'
  elif score >= 70:
      grade = 'C'
  elif score >= 60:
      grade = 'D'
  else:
      grade = 'E'
  print('对应的等级是:', grade)
  ```



## 随机数

```python
# 引入随机数库
import random
# random.randint(0, 2) 返回0-2之间的随机数 整数 0<=x<=2
x = random.randint(0, 2)
print(x)
```

## 循环语句

```python
python的循环有两种，一种是for...in 循环，可以依次把list或tuple 中的元素迭代出来
"""
用for循环实现1~100求和
"""
sum = 0
for x in range(101):
    sum += x
print(sum)
```

需要说明的是上面代码中的`range(1, 101)`可以用来构造一个从1到100的范围，当我们把这样一个范围放到`for-in`循环中，就可以通过前面的循环变量`x`依次取出从1到100的整数。当然，`range`的用法非常灵活，下面给出了一个例子：

- `range(101)`：可以用来产生0到100范围的整数，需要注意的是取不到101。
- `range(1, 101)`：可以用来产生1到100范围的整数，相当于前面是闭区间后面是开区间。
- `range(1, 101, 2)`：可以用来产生1到100的奇数，其中2是步长，即每次数值递增的值。
- `range(100, 0, -2)`：可以用来产生100到1的偶数，其中-2是步长，即每次数字递减的值。

## while循环

如果要构造不知道具体循环次数的循环结构，我们推荐使用`while`循环。`while`循环通过一个能够产生或转换出`bool`值的表达式来控制循环，表达式的值为`True`则继续循环；表达式的值为`False`则结束循环。

下面我们通过一个“猜数字”的小游戏来看看如何使用`while`循环。猜数字游戏的规则是：计算机出一个1到100之间的随机数，玩家输入自己猜的数字，计算机给出对应的提示信息（大一点、小一点或猜对了），如果玩家猜中了数字，计算机提示用户一共猜了多少次，游戏结束，否则游戏继续。

```Python
"""
猜数字游戏

Version: 0.1
Author: 骆昊
"""
import random

answer = random.randint(1, 100)
counter = 0
while True:
    counter += 1
    number = int(input('请输入: '))
    if number < answer:
        print('大一点')
    elif number > answer:
        print('小一点')
    else:
        print('恭喜你猜对了!')
        break
print('你总共猜了%d次' % counter)
if counter > 7:
    print('你的智商余额明显不足')
```

上面的代码中使用了`break`关键字来提前终止循环，需要注意的是`break`只能终止它所在的那个循环，这一点在使用嵌套的循环结构（下面会讲到）需要引起注意。除了`break`之外，还有另一个关键字是`continue`，它可以用来放弃本次循环后续的代码直接让循环进入下一轮。

> **while可以跟else一起使用**
>
> ```python
> count = 0
> while count < 5:
>  print(count, "小于5")
>  count += 1
> else:
>  print(count, "大于或等于5")
> ```

## break和continue

- **break**
  - break语句可以跳出for 和 while 的循环体
- **continue** 
  - continue 语句跳出当前循环体，直接进行下一轮循环
- **pass**
  - pass是空语句，一般用做站占语句，不做任何事情

```python
# break
n=1
while n<=100:
    if n>10:
        break
        print(n)
        n+=1
        结果：打印1-10
# continue
n=1
while n<=100:
    n=n+1
    if n%2==0:
        continue
        print(n)
        结果：打印1,3,5,7,9
# pass
for letter in "Room":
    if letter =="o"
    pass
    print('pass')
 print(letter)
结果：
R
pass
o
pass
o


```

## 字符串

```python
'''
# 字符串
word = '字符串'
sentence = "这是一个句子"
paragraph = """
        这是一个段落
        可以有多行组成
"""
print(word)
print(sentence)
print(paragraph)
'''

""" 
# my_str = "I'm a student"
# 转义字符 \
my_str = 'I\'m a student'
print(my_str)
"""
# my_str = "jason said \"I like you\""
# my_str = "jason said 'I like you'"
# print(my_str)

# 字符串访问
# str[0:6] 访问0-6个单个字符
str = "chengdu"
print(str)
print(str[0:6])  # [起始位置:结束位置:步进值]
print(str[1:7:2])
print(str[::5])
# 别的写法
print(str[6:])  # u
print(str[:5])  # cheng
# 字符串连接使用+号
print(str + ",你好")  # chengdu,你好
print(str * 3)  # chengduchengduchengdu

print("hello\nchengdu")  # 使用反斜杠，实现转义字符的功能
# hello
# chengdu
print(r"hello\nchengdu")  # 在字符串前面加 r 表示直接显示原始字符串，不进行转义
# hello\nchengdu

```

## 列表

```python
# 列表增删改查

nameList = ["校长", "老师", "局长"]
# 增 在末尾增加一个元素
print("--增加前的数据---")
for name in nameList:
    print(name)
nameTemp = input("请输入：")
nameList.append(nameTemp)
print("--增加后的数据---")
for name in nameList:
    print(name)
------------
    # 增 append
# 追加列表 二维列表
 a = [1, 2]
 b = [3, 4]
# # 将列表当做一个元素，加入到列表中
 a.append(b)
 print(a)
# # 将b列表中的每个元素逐一追加到a中
 a.extend(b)
 print(a)

# 增：insert 指定下标位置，插入元素
a = [0, 1, 2]
a.insert(1, 3)  # 第一个变量表示下标，第二个表示元素对象
print(a)  # [0, 3, 1, 2]

##删
# 删：del  pop  remove
movieName = ["加勒比海盗", "速度激情", "指环王", "欢乐岛", "指环王"]
print("--删除前的数据---")
for name in movieName:
    print(name)
# del movieName[2]  # 在指定位置删除一个元素
# movieName.pop()  # 弹出末尾最后一个元素
movieName.remove("指环王")  # 直接删除指定内容元素 重复的话，删除找到的第一个
print("--删除后的数据---")
for name in movieName:
    print(name)

 ## # 改：
nameList = ["校长", "老师", "局长"]
print("--修改前的数据---")
for name in nameList:
    print(name)
nameList[0] = "省长"  # 修改指定下标的数据
print("--修改后的数据---")
for name in nameList:
    print(name)
    
###查：
nameList = ["校长", "老师", "局长"]
findName = input("请输入你要找的人：")
# 判断 某一个元素是否在一个列表中
if findName in nameList:
    print("找到了")
else:
    print("没有找到")
    
 =========
# myList = ["a", "b", "c", "a", "d"]
# print(myList.index("a", 1, 4))  # 可以查找指定下标范围的元素，并返回找到对应数据的下标
# # print(myList.index("a", 1, 3))  # 范围区间，左闭右开区间[1,3) 找不到会报错

# print(myList.count("c"))  # 统计某个元素出现几次

# 排序
a = [1, 4, 2, 3]
print(a)
# 反转
a.reverse()  # 将列表所有元素反转
print(a)
# 排序 默认升序
a.sort()
print(a)
a.sort(reverse=True)
print(a)  # 降序


# 多维列表
# schoolNames = [[], [], []]   #有3个元素的空列表，每个元素都是一个空列表
schoolNames = [["北京大学", "清华大学"], ["南开大学", "天津大学", "师范大学"], ["山东大学", "野鸡大学"]]
# print(schoolNames[0][0])
for value in schoolNames:
    for val in value:
        print(val)
```

## 元组

- tupli(元组)
  - tuple 与 list 类似，不同之处在于tuple的元素不能修改，tuple写在小括号里，元素之间用逗号隔开。
  - 元组的元素不可变，但可以包含可变的对象，如list
  - 定义一个只有一个元素的tuple，必须加逗号

```python
"""
# 元组
# 创建空元组
tup1 = ()
print(type(tup1))
# tup2=(50)   #不是元组，是个整型
tup2 = (50,)  # 一个只有一个元素的tuple，必须加逗号
print(type(tup2))
"""
# tup1 = ("abc", "def", 2021, 2000, 111, 222, 666,)
# print(tup1[0])
# print(tup1[-1])  # 访问最后一个元素
# print(tup1[1:5])  # 左闭右开区间 进行切片

# 增 (连接)
# tup1 = (12, 34, 56)
# tup2 = ("abc", "def")
# tup = tup2 + tup1
# print(tup)

# 删
tup1 = (12, 34, 56)
print(tup1)
del tup1  # 删除了整个元组变量
print("删除后")
print(tup1)

# 改
# tup1 = (12, 34, 56)
# tup1[0] = 100 #报错，不允许修改

# 查
# tup1 = ("abc", "def", 2021, 2000, 111, 222, 666,)
# print(tup1[0])
# print(tup1[-1])  # 访问最后一个元素
# print(tup1[1:5])  # 左闭右开区间 进行切片# 定义元组
t = ('张三', 38, True, '四川成都')
print(t)
# 获取元组中的元素
print(t[0])
print(t[3])
# 遍历元组中的值
for member in t:
    print(member)
# 重新给元组赋值
# t[0] = '王大锤'  # TypeError
# 变量t重新引用了新的元组原来的元组将被垃圾回收
t = ('王大锤', 20, True, '云南昆明')
print(t)
# 将元组转换成列表
person = list(t)
print(person)
# 列表是可以修改它的元素的
person[0] = '李小龙'
person[1] = 25
print(person)
# 将列表转换成元组
fruits_list = ['apple', 'banana', 'orange']
fruits_tuple = tuple(fruits_list)
print(fruits_tuple)
```

## 字典

- 字典是另一种可变容器模型，Python中的字典跟我们生活中使用的字典是一样一样的，它可以存储任意类型对象，与列表、集合不同的是，字典的每个元素都是由一个键和一个值组成的“键值对”，键和值通过冒号分开。下面的代码演示了如何定义和使用字典。
- 字典是无序的对象集合，使用键-值（key-value)储存，具有极快的查找速度，
- 键（key）必须使用不可变类型
- 同一字典中，键（key）必须是唯一的

```python
"""
# 字典
# 字典的定义
info = {"name": "吴彦祖", "age": 18}
# 字典的访问
# 通过键访问
print(info["name"])
print(info["age"])

# 访问不存在的键
# print(info["gender"])  # 直接访问会报错

# print(info.get("gender"))  # 使用get方法,没有找到对应的键，默认返回nune
print(info.get("gender", "M"))  # 没找到的时候，可以设置默认值
print(info.get("age", "M"))  # 找到的话，就返回找到的数据

"""
""" 
# 增
info = {"name": "吴彦祖", "age": 18}
newID=input("请输入学号")
info["id"] = newID
print(info["id"])
"""
""" 
# 删
# del
info = {"name": "吴彦祖", "age": 18}
print("删除前：%s" % info["name"])

del info["name"]
# print("删除后：%s" % info["name"])  #删除了指定键值对后，再次访问会报错
"""
""" 
info = {"name": "吴彦祖", "age": 18}
print("删除前：%s" % info)
del info
print("删除后：%s" % info) #删除字典后在访问，报错
"""
# clear  清空
# info = {"name": "吴彦祖", "age": 18}
# print("清空前：%s" % info)
#
# info.clear()
# print("清空后：%s" % info)

# 改
# info = {"name": "吴彦祖", "age": 18}
# info["age"] = 20
# print(info["age"])

# 查  遍历
info = {"id": 1, "name": "吴彦祖", "age": 18}
""" 
print(info.keys())  # 得到所有键的列表
print(info.values())  # 得到所有值的列表
print(info.items())  # 得到所有项的列表 每个键值对是一个元组
"""
# 遍历所有的键
for key in info.keys():
    print(key)
# 遍历所有的值
for value in info.values():
    print(value)
# 遍历所有的项
for item in info.items():
    print(item)
# 遍历所有的键值对
for key, value in info.items():
    print("key=%s,value=%s" % (key, value))
myList = ["a", "b", "c", "d"]
# enumerate()枚举类型
# 使用枚举函数 同时拿到列表中的下标和元素
for i, x in enumerate(myList):
    print(i, x)  # i是下标

```

## 集合

Python中的集合跟数学上的集合是一致的，不允许有重复元素，而且可以进行交集、并集、差集等运算。

可以按照下面代码所示的方式来创建和使用集合。

```Python
# 创建集合的字面量语法
set1 = {1, 2, 3, 3, 3, 2}
print(set1)
print('Length =', len(set1))
# 创建集合的构造器语法(面向对象部分会进行详细讲解)
set2 = set(range(1, 10))
set3 = set((1, 2, 3, 3, 2, 1))
print(set2, set3)
# 创建集合的推导式语法(推导式也可以用于推导集合)
set4 = {num for num in range(1, 100) if num % 3 == 0 or num % 5 == 0}
print(set4)
```

向集合添加元素和从集合删除元素。

```Python
set1.add(4)
set1.add(5)
set2.update([11, 12])
set2.discard(5)
if 4 in set2:
    set2.remove(4)
print(set1, set2)
print(set3.pop())
print(set3)
```

集合的成员、交集、并集、差集等运算。

```Python
# 集合的交集、并集、差集、对称差运算
print(set1 & set2)
# print(set1.intersection(set2))
print(set1 | set2)
# print(set1.union(set2))
print(set1 - set2)
# print(set1.difference(set2))
print(set1 ^ set2)
# print(set1.symmetric_difference(set2))
# 判断子集和超集
print(set2 <= set1)
# print(set2.issubset(set1))
print(set3 <= set1)
# print(set3.issubset(set1))
print(set1 >= set2)
# print(set1.issuperset(set2))
print(set1 >= set3)
# print(set1.issuperset(set3))
```

> **说明：** Python中允许通过一些特殊的方法来为某种类型或数据结构自定义运算符（后面的章节中会讲到），上面的代码中我们对集合进行运算的时候可以调用集合对象的方法，也可以直接使用对应的运算符，例如`&`运算符跟intersection方法的作用就是一样的，但是使用运算符让代码更加直观。



## 函数

- 在Python中可以使用`def`关键字来定义函数，和变量一样每个函数也有一个响亮的名字，而且命名规则跟变量的命名规则是一致的。在函数名后面的圆括号中可以放置传递给函数的参数，这一点和数学上的函数非常相似，程序中函数的参数就相当于是数学上说的函数的自变量，而函数执行完成后我们可以通过`return`关键字来返回一个值，这相当于数学上说的函数的因变量。

```python
# 函数的定义
def printfinfo():
    print("-------------------")
    print("人生苦短，我用python")
    print("-------------------")

# 函数的调用
printfinfo()

# 带参数的
def add2Number(a, b):
    c = a + b
    print(c)
 # 带参数调用   
add2Number(11, 22)
# 带返回值的
def add2Number(a, b):
    return a + b

print(add2Number(11, 22))

# 返回多个值的函数
def divid(a, b):
    shang = a // b
    yushu = a % b
    return shang, yushu  # 可以返回多个


sh, yu = divid(5, 2)
print("商：%d,余数：%d"%(sh,yu))
#==========================================================================
# 全局变量和局部变量
# def test():
#     a = 300  # 局部变量
#     print("test----修改前:a=%d" % a)
#     a = 100
#     print("test----修改后:a=%d" % a)
# def test2():
#     a = 500  # 不同的函数可以定义相同的函数，彼此无关
#     print("test----:a=%d" % a)
# test()
# test2()


a = 100  # 全局变量
def test1():
    print(a)
def test2():
    print(a)  # 调用全局变量a
test1()
test2()
# 全局变量和局部变量相同 就近原则
a = 100  # 全局变量
def test1():
    a = 300  # 局部变量
    print("test----修改前:a=%d" % a)
    a = 100
    print("test----修改后:a=%d" % a)
def test2():
    print("test2----:a=%d" % a)
test1()
test2()


# 在函数中修改全局变量  global关键字
a = 100
def test1():
    global a  # 声明全局变量在函数中的标识符
    print("test----修改前:a=%d" % a)
    a = 200
    print("test----修改后:a=%d" % a)


def test2():
    print("test2----:a=%d" % a)  # 没有局部变量，默认使用全局变量

test1()
test2()

```



## 文件操作

在Python中实现文件的读写操作其实非常简单，通过Python内置的`**open**`函数，我们可以指定文件名、操作模式、编码信息等来获得操作文件的对象，接下来就可以对文件进行读写操作了。这里所说的操作模式是指要打开什么样的文件（字符文件还是二进制文件）以及做什么样的操作（读、写还是追加），具体的如下表所示。

### open() 方法

Python open() 方法用于打开一个文件，并返回文件对象，在对文件进行处理过程都需要使用到这个函数，如果该文件无法被打开，会抛出 OSError。

**注意：**使用 open() 方法一定要保证关闭文件对象，即调用 close() 方法。

open() 函数常用形式是接收两个参数：文件名(file)和模式(mode)。

```python
open(file, mode='r')
```

完整的语法格式为：

```python
open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)
```

参数说明:

- file: 必需，文件路径（相对或者绝对路径）。
- mode: 可选，文件打开模式
- buffering: 设置缓冲
- encoding: 一般使用utf8
- errors: 报错级别
- newline: 区分换行符
- closefd: 传入的file参数类型
- opener: 设置自定义开启器，开启器的返回值必须是一个打开的文件描述符。

| 模式 | 描述                                                         |
| :--- | :----------------------------------------------------------- |
| t    | 文本模式 (默认)。                                            |
| x    | 写模式，新建一个文件，如果该文件已存在则会报错。             |
| b    | 二进制模式。                                                 |
| +    | 打开一个文件进行更新(可读可写)。                             |
| U    | 通用换行模式（**Python 3 不支持**）。                        |
| r    | 以只读方式打开文件。文件的指针将会放在文件的开头。这是默认模式。 |
| rb   | 以二进制格式打开一个文件用于只读。文件指针将会放在文件的开头。这是默认模式。一般用于非文本文件如图片等。 |
| r+   | 打开一个文件用于读写。文件指针将会放在文件的开头。           |
| rb+  | 以二进制格式打开一个文件用于读写。文件指针将会放在文件的开头。一般用于非文本文件如图片等。 |
| w    | 打开一个文件只用于写入。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。 |
| wb   | 以二进制格式打开一个文件只用于写入。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。一般用于非文本文件如图片等。 |
| w+   | 打开一个文件用于读写。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。 |
| wb+  | 以二进制格式打开一个文件用于读写。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。一般用于非文本文件如图片等。 |
| a    | 打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。 |
| ab   | 以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。 |
| a+   | 打开一个文件用于读写。如果该文件已存在，文件指针将会放在文件的结尾。文件打开时会是追加模式。如果该文件不存在，创建新文件用于读写。 |
| ab+  | 以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。如果该文件不存在，创建新文件用于读写。 |

默认为文本模式，如果要以二进制模式打开，加上 **b** 。

### file 对象

file 对象使用 open 函数来创建，下表列出了 file 对象常用的函数：

| 序号 | 方法及描述                                                   |
| :--- | :----------------------------------------------------------- |
| 1    | [file.close()](https://www.runoob.com/python3/python3-file-close.html)关闭文件。关闭后文件不能再进行读写操作。 |
| 2    | [file.flush()](https://www.runoob.com/python3/python3-file-flush.html)刷新文件内部缓冲，直接把内部缓冲区的数据立刻写入文件, 而不是被动的等待输出缓冲区写入。 |
| 3    | [file.fileno()](https://www.runoob.com/python3/python3-file-fileno.html)返回一个整型的文件描述符(file descriptor FD 整型), 可以用在如os模块的read方法等一些底层操作上。 |
| 4    | [file.isatty()](https://www.runoob.com/python3/python3-file-isatty.html)如果文件连接到一个终端设备返回 True，否则返回 False。 |
| 5    | [file.next()](https://www.runoob.com/python3/python3-file-next.html)**Python 3 中的 File 对象不支持 next() 方法。**返回文件下一行。 |
| 6    | [file.read([size\])](https://www.runoob.com/python3/python3-file-read.html)从文件读取指定的字节数，如果未给定或为负则读取所有。 |
| 7    | [file.readline([size\])](https://www.runoob.com/python3/python3-file-readline.html)读取整行，包括 "\n" 字符。 |
| 8    | [file.readlines([sizeint\])](https://www.runoob.com/python3/python3-file-readlines.html)读取所有行并返回列表，若给定sizeint>0，返回总和大约为sizeint字节的行, 实际读取值可能比 sizeint 较大, 因为需要填充缓冲区。 |
| 9    | [file.seek(offset[, whence\])](https://www.runoob.com/python3/python3-file-seek.html)移动文件读取指针到指定位置 |
| 10   | [file.tell()](https://www.runoob.com/python3/python3-file-tell.html)返回文件当前位置。 |
| 11   | [file.truncate([size\])](https://www.runoob.com/python3/python3-file-truncate.html)从文件的首行首字符开始截断，截断文件为 size 个字符，无 size 表示从当前位置截断；截断之后后面的所有字符被删除，其中 windows 系统下的换行代表2个字符大小。 |
| 12   | [file.write(str)](https://www.runoob.com/python3/python3-file-write.html)将字符串写入文件，返回的是写入的字符长度。 |
| 13   | [file.writelines(sequence)](https://www.runoob.com/python3/python3-file-writelines.html)向文件写入一个序列字符串列表，如果需要换行则要自己加入每行的换行符。 |

```python
# 文件操作
""""
f = open("test.txt", "w")  # 打开文件 w模式，写模式，文件不存在就新建
f.write("hello world!")  # 将字符串写入文件中
f.close()  # 关闭文件
"""
""" 
# 读  read方法，读取指定的字符，开始时定位置在文件的头部，没执行一次向后移动指定字符数
f = open("test.txt", "r")
content = f.read(5)  # 读5个字符
print(content)
content = f.read(5)  # 接着上次继续读5个
print(content)
f.close()
"""
""" 
# readlines()方法，一次性读取全部文件，为列表，每行为一个列表
f = open("test.txt", "r")
content = f.readlines()  # 读取出来的是列表
# print(content)

i = 1
for temp in content:
    print("%d:%s" % (i, temp))
    i += 1
f.close()
"""
f = open("test.txt", "r")
content = f.readline()
print("1:%s" % content)
content = f.readline()
print("2:%s" % content)
f.close()

# 更改名字
import  os
os.rename("test.txt","txte.txt")
```

## 文件异常

```python
# -*- codeing = utf-8 -*-
# @Time : 2021/12/12 11:20
# @Author : daohedaocao
# @File : Page16.py
# @Software:PyCharm
"""
# 发生了异常
print("----test----1")
f = open("123.txt", "r")  # 用只读模式打开了一个不存在的文件，报错

print("----test----2")  # 这句代码不会被执行
"""
import time

""" 
# 捕获异常
try:
    print("----test----1")
    f = open("123.txt", "r")

    print("----test----2")
except IOError: #文件没找到，属于IO异常，（输入输出异常）
    pass
"""
""" 
try:
    print(num)
# except IOError:
except NameError:  #异常类型想要被捕获，需要一致
    print("产生错误了")
    """
""" 
try:
    print("----test----1")
    f = open("123.txt", "r")
    print("----test----2")
    print(num)
except (NameError, IOError):  # 将可能产生的所有异常类型，都放到下面的小括号内
    print("产生错误了")
"""
""" 
# 获取错误描述
try:
    print("----test----1")
    f = open("123.txt", "r")
    print("----test----2")
    print(num)
except (NameError, IOError) as result:  # 将可能产生的所有异常类型，都放到下面的小括号内
    print("产生错误了")
    print(result)
"""
""" 
# 捕获所有异常
try:
    print("----test----1")
    f = open("123.txt", "r")
    print("----test----2")
    print(num)
except Exception as result:  # Exception可以捕获所有异常
    print("产生错误了")
    print(result)
"""

# try...finally 和嵌套

try:
    f = open("txte.txt", 'r')
    try:
        while True:
            content = f.readline()
            if len(content) == 0:
                break
            time.sleep(2)
            print(content)
    finally:
        f.close()
        print("文件关闭")
except Exception as result:
    print("发生异常")

```



## python爬虫基础

- > **什么是爬虫**

  - 网络爬虫，是一种按照一定规则，自动抓取互联网信息的程序或者脚本。由于互联网
    数据的多样性和资源的有限性，根据用户需求定向抓取相关网页并分析已成为如今主流
    的爬取策略。

- > **爬虫可以做什么**

  - 你可以爬取妹子的图片，爬取自己想看的视频等等，只要你能通过浏览器访问的数据
    都可以通过爬虫获取。

- > **爬虫的本质是什么**

  - 模拟浏览器打开网页，获取网页中我们想要的那部分数据。

- 基本流程

- 准备工作

  - 通过浏览器查看分析目标网页，学习编程基础规范。

- 获取数据

  - 通过HTTP库向目标站点发起请求，请求可以包含额外的header等信息，如
    果服务器能正常响应，会得到一个Response，便是所要获取的页面内容。
    解析内容

- 解析内容

  - 得到的内容可能是HTML、json等格式，可以用页面解析库正则表达式等进行解析。

- 保存数据

  - 保存形式多样，可以存为文本，也可以保存到数据库，或者保存特定格式的
    文件。

## 编码规范

一般Python程序第一行需要加入
准备工作

```python
 # coding: utf-8 -*- 或者 # coding=utf-8
```

这样可以在代码中包含中文
获取数据
在Python中，使用函数实现单一功能或相关联功能的代码段，可以提高可读
性和代码重复利用率，函数代码块以def关键词开头，后接空格、函数标识符
名称、圆括号()、冒号:，括号中可以传入参数，函数段缩进（Tab或四个空格，
只能任选一种），return用于结束函数，可以返回一个值，也可以不带任何表
达式（表示返回None）
Python文件中可以加入main函数用于测试程序

```python
# Python文件中可以加入main函数用于测试程序
if __name__ == "__main__":
    
    
def main(a):
    print("hello", a)
main(1)
# 定义程序的入口
if __name__ == "__main__":  # 当程序执行时
    # 调用函数
    main(2)

```

Python使用#添加注释，说明代码（段）的作用

## 引入模块

```python
# 引入自定义模块
from 文件瑕名 import 文件名
# python 爬虫需要的包
import bs4   #网页解析，获取数据
import  re   #正则表达式，进行文字匹配
import  urllib.request,urllib.error         #指定URL，获取网页数据
import  xlwt        #进行excel操作
import  sqlite3 #进行数据库操作

```

## url响应

```python
# -*- codeing = utf-8 -*-
# @Time : 2021/12/12 14:22
# @Author : daohedaocao
# @File : testUrllib.py
# @Software:PyCharm

import urllib.request

# 获取一个get请求
# response = urllib.request.urlopen("http://49.233.53.82/")
# response = urllib.request.urlopen("https://www.baidu.com")
# 直接打印
# print(response)
# 读取
# print(response.read())
# 对获取到的网页源码进行 utf-8 解码
# print(response.read().decode('utf-8'))

# 获取一个post请求  post请求需要传参数
# 测试网站
# httpbin.org
# import urllib.parse  # 解析器
# # bytes()转换成二进制的数据包
# data = bytes(urllib.parse.urlencode({"hello": "world"}), encoding="utf-8")
# response = urllib.request.urlopen("http://httpbin.org/post", data=data)
# print(response.read().decode('utf-8'))

# 超时处理
# try:
#     response = urllib.request.urlopen("http://httpbin.org/get", timeout=0.01)  # timeout设置超时时间
#     print(response.read().decode('utf-8'))
# except urllib.error.URLError as e:
#     print("time out")

# 响应头
# response = urllib.request.urlopen("https://www.baidu.com")
# # 打印状态码
# # print(response.status)
# print(response.getheaders())
# # 拿具体的一个
# print(response.getheader("Server"))


# 伪装不是爬虫
# url = "https://movie.douban.com/"
# url = "http://httpbin.org/post"
# headers = {
#     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36"
# }
# data = bytes(urllib.parse.urlencode({'name': 'eric'}), encoding="utf-8")
# req = urllib.request.Request(url=url, data=data, headers=headers, method="POST")
# response = urllib.request.urlopen(req)
# print(response.read().decode("utf-8"))

# 伪装身份，访问豆瓣
url = "https://movie.douban.com/"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36"
}
req = urllib.request.Request(url=url,headers=headers)
response = urllib.request.urlopen(req)
print(response.read().decode("utf-8"))
```



## Re库主要功能函数

- 作用：正则判断

| 函数          | 说明                                                         |
| ------------- | ------------------------------------------------------------ |
| re.search()   | 在一个字符串搜索匹配正则表达式的第一个位置，返回match对象    |
| re.match()    | 从一个字符串的开始位置起匹配正则表达式，返回match对象        |
| re.findall()  | 搜索字符串，以列表类型返回全部能匹配的子串                   |
| re.split()    | 将一个字符串按照正则表达式匹配结果进行分割，返回列表类型     |
| re.finditer() | 搜索字符串，返回一个匹配结果的迭代类型，每个迭代元素是match对象 |
| re.sub()      | 在一个字符串中替换所有匹配正则表达式的子串，返回替换后的字符串 |

正则表达式可以包含一些可选标志修饰符来控制匹配的模式，修饰符被指定为一个可选的标志，多个标志可以通过按位 OR(|)它们来指定，如 re.I | re.M 被设置成 I 和 M 标志。

| 修饰符 | 描述                                                       |
| ------ | ---------------------------------------------------------- |
| re.l   | 使匹配对大小写不敏感                                       |
| re.L   | 做本地化识别(local-aware)匹配                              |
| re.M   | 多行匹配，影响^ 和 $                                       |
| re.S   | 使用 . 匹配包括换行在内的所有字符                          |
| re.U   | 根据Unicode字符集解析字符。这个标志影响\w,\W,\b,\B         |
| re.X   | 该标志通过给予你更灵活的格式以便你将正则表达式写得更易理解 |

 

# 题库：

A.requestB.jiebaC.itchatD.time

答案：A

2、Python网络爬虫方向的第三方库是

A、numpyB、scrapyC、ArcadeD、FGMK

答案：B

3、Python数据分析方向的第三方库是

A、BokehB、dataswimC、scipyD、Gleam

答案：C

4、Python数据分析方向的第三方库是

A、PlotlyB、PyQtDataVisualizationC、PygalD、pandas

答案：D

5、Python文本处理方向的第三方库是

A、pdfminerB、geoplotlibC、ggplotD、missingno

答案：A

6、Python文本处理方向的第三方库是

A、matplotlibB、openpyxlC、vispyD、wxPython

答案：B

7、Python文本处理方向的第三方库是

A、ONNXB、MMdnnC、python-docxD、scipy

答案：C

8、Python文本处理方向的第三方库是

A、DjangoB、filecmpC、pyserialD、beautifulsoup4

答案：B

9、Python数据可视化方向的第三方库是

A、matplotlibB、retryingC、FGMKD、PyQt5

答案：A

10、Python数据可视化方向的第三方库是

A、Panda3dB、TVTKC、TheanoD、Pyramid

答案：B

11、Python中文分词的第三方库是

A、turtleB、jiebaC、itchatD、time

答案：B

12、将Python脚本程序转变为可执行程序的第三方库是

A、randomB、pygameC、PyQt5D、PyInstaller

答案：D

13、以下选项中，不是Python数据分析方向的第三方库是

A、requestsB、numpyC、scipyD、pandas

答案：A

14、Python数据分析方向的第三方库是

A、numpyB、pdfminerC、beautifulsoup4D、time

答案：A

15、Python机器学习方向的第三方库是

A、randomB、PILC、PyQt5D、TensorFlow

答案：D

16、PythonWeb开发方向的第三方库是

A、requestsB、DjangoC、scipyD、pandas

答案：B

17、Python网络爬虫方向的第三方库是

A、scrapyB、numpyC、openpyxlD、PyQt5

答案：A

18、Python数据分析方向的第三方库是

A、randomB、PILC、DjangoD、pandas

答案：D

19、Python机器学习方向的第三方库是

A、requestsB、TensorFlowC、scipyD、pandas

答案：B

20、Python数据可视化方向的第三方库是

A、panda3dB、cocos2dC、mayaviD、Pyramid

答案：C

21、Python图形用户界面方向的第三方库是

A、PyQt5B、Scikit-learnC、gym-super-mario-brosD、freegames

答案：A

22、Python图形用户界面方向的第三方库是

A、TVTKB、wxPythonC、scipyD、requests

答案：B

23、Python图形用户界面方向的第三方库是

A、openpyxlB、gymC、PyGTKD、Theano

答案：C

24、以下选项中，不是Python图形用户界面方向的第三方库是

A、PyQt5B、wxPythonC、PyGTKD、requests

答案：D

25、机器学习方向的第三方库是

A、Scikit-learnB、gymC、TVTKD、Plotly

答案：A

26、机器学习方向的第三方库是

A、randomB、TensorFlowC、pigletD、Plotly

答案：B

27、机器学习方向的第三方库是

A、PyQtDataVisualizationB、PILC、TheanoD、cocos2d

答案：C

28、以下选项中，不是Python机器学习方向的第三方库是

A、Scikit-learnB、TensorFlowC、TheanoD、requests

答案：D

29、PythonWeb开发方向的第三方库是

A、DjangoB、PILC、TheanoD、cocos2d

答案：A

30、PythonWeb开发方向的第三方库是

A、beautifulsoup4B、PyramidC、matplotlibD、PyQt5

答案：B

31、PythonWeb开发方向的第三方库是

A、MMdnnB、ONNXC、flaskD、PyQt5

答案：C

32、以下选项中，不是PythonWeb开发方向的第三方库是

A、DjangoB、PyramidC、flaskD、matplotlib

答案：C

33、Python游戏开发方向的第三方库是

A、PygameB、PyQt5C、wxPythonD、PyGTK

答案：A

34、Python游戏开发方向的第三方库是

A、Scikit-learnB、Panda3DC、TensorFlowD、Theano

答案：B

35、Python游戏开发方向的第三方库是

A、Scikit-learnB、PyramidC、cocos2dD、flask

答案：C

36、以下选项中，不是Python游戏开发方向的第三方库是

A、ArcadeB、FGMKC、Panda3dD、flask

答案：D

37、PIL库是Python语言重要的第三方库，用于

A、图像处理B、游戏开发C、Web开发D、机器学习

答案：A

38、关于Sympy库的描述，以下选项中正确的是

A、Sympy是一个支持符号计算的Python第三方库B、Sympy是游戏开发方向的Python第三方库C、Sympy是Web开发方向的Python第三方库D、Sympy是机器学习方向的Python第三方库

答案：A

39、关于NLTK库的描述，以下选项中正确的是

A、NLTK是一个支持符号计算的Python第三方库B、NLTK是支持多种语言的自然语言处理Python第三方库C、NLTK是数据可视化方向的Python第三方库D、NLTK是网络爬虫方向的Python第三方库

答案：B

40、关于WeRoBot的描述，以下选项中正确的是

A、WeRoBot是一个微信公众号开发框架，也称为微信机器人框架B、WeRoBot是Python语言的一套优秀的GUI图形库C、WeRoBot是一个可以从PDF文档中提取各类信息的第三方库D、WeRoBot是网络爬虫方向的Python第三方库

答案：A

41、关于requests的描述，以下选项中正确的是

A、requests是数据可视化方向的Python第三方库B、requests是处理HTTP请求的第三方库C、requests是支持多种语言的自然语言处理Python第三方库D、requests是一个支持符号计算的Python第三方库

答案：B

42、关于MyQR的描述，以下选项中正确的是

A、MyQR是一个能够产生基本二维码、艺术二维码和动态效果二维码的python第三方库B、MyQR是Python语言的一套优秀的GUI图形库C、MyQR是一个可以从PDF文档中提取各类信息的第三方库D、MyQR是网络爬虫方向的Python第三方库

答案：A

43、关于TensorFlow的描述，以下错误的是

A、TensorFlow是谷歌公司基于DistBelief进行研发的第二代人工智能学习系统B、TensorFlow是Python语言的一套优秀GUI图形库C、Tensor(张量)指N维数组，Flow(流)是基于数据流图的计算D、TensorFlow描述张量从流图的一端流动到另一端的计算过程

答案：B

44、关于Django的描述，以下选项中错误的是

A、Django是谷歌公司基于DistBelief进行研发的第二代人工智能学习系统B、Django是Python生态中最流行的开源Web应用框架C、Django采用模型(Model)、模板(Template)和视图(Views)的编写模式，称为MTV模式D、Django的开发理念是DRY(Don’tRepeatYourself)，用于鼓励快速开发，进而减少程序员建立一个高性能Web应用所花费的时间和精力，形成一种一站式解决方案

答案：A

45、关于matplotlib的描述，以下选项中错误的是

A、matplotlib主要进行二位图表数据展示，广泛用于科学计算的数据可视化B、matplotlib是提供数据绘图功能的第三方库C、matplotlib是Python生态中最流行的开源Web应用框架D、使用matplotlib库可以利用Python程序绘制超过100种可视化效果

答案：C

46、以下选项中，不是Python深度学习方向的第三方库是

A、ArcadeB、TensorFlowC、MXNetD、Caffe2

答案：A

47、以下选项中，不是Python深度学习方向的第三方库是

A、TheanoB、kerasC、MXNetD、mayavi

答案：D

48、以下选项中，不是Python深度学习方向的第三方库是

A、PyTorchB、PandleC、NeonD、Seaborn

答案：D

49、Pyserial库是Python语言的第三方库，用于

A、图像处理B、游戏开发C、硬件开发D、并行处理

答案：C

50、以下选项中，不是Python处理Office文件的第三方库是

A、Python-docxB、VPythonC、openpyxlD、python-pptx

答案：B