# java基础

## 安装jdk

+ 安装 jdk 百度搜索，找到下载地址，下载电脑对应的版本
+ 双击安装jdk 记住安装路径 ，配置JAVA_HOME的环境变量，配置path变量
+ 写个java文件，测试jdk是否安装成功，打开cmd,输入java -version
+ 生成javadoc文档：javadoc -encoding UTF-8 -charset UTF-8 demo10.java

## 基础语法



```java
public class HelloWorld {
    /* 第一个Java程序
     * 它将输出字符串 Hello World
     */
    public static void main(String[] args) {
        System.out.println("Hello World"); // 输出 Hello World
    }
}
```

## 关键字

| 关键字               | 说明                           |                      |
| :------------------- | :----------------------------- | -------------------- |
| 访问控制             | private                        | 私有的               |
| protected            | 受保护的                       |                      |
| public               | 公共的                         |                      |
| default              | 默认                           |                      |
| 类、方法和变量修饰符 | abstract                       | 声明抽象             |
| class                | 类                             |                      |
| extends              | 扩充,继承                      |                      |
| final                | 最终值,不可改变的              |                      |
| implements           | 实现（接口）                   |                      |
| interface            | 接口                           |                      |
| native               | 本地，原生方法（非 Java 实现） |                      |
| new                  | 新,创建                        |                      |
| static               | 静态                           |                      |
| strictfp             | 严格,精准                      |                      |
| synchronized         | 线程,同步                      |                      |
| transient            | 短暂                           |                      |
| volatile             | 易失                           |                      |
| 程序控制语句         | break                          | 跳出循环             |
| case                 | 定义一个值以供 switch 选择     |                      |
| continue             | 继续                           |                      |
| default              | 默认                           |                      |
| do                   | 运行                           |                      |
| else                 | 否则                           |                      |
| for                  | 循环                           |                      |
| if                   | 如果                           |                      |
| instanceof           | 实例                           |                      |
| return               | 返回                           |                      |
| switch               | 根据值选择执行                 |                      |
| while                | 循环                           |                      |
| 错误处理             | assert                         | 断言表达式是否为真   |
| catch                | 捕捉异常                       |                      |
| finally              | 有没有异常都执行               |                      |
| throw                | 抛出一个异常对象               |                      |
| throws               | 声明一个异常可能被抛出         |                      |
| try                  | 捕获异常                       |                      |
| 包相关               | import                         | 引入                 |
| package              | 包                             |                      |
| 基本类型             | boolean                        | 布尔型               |
| byte                 | 字节型                         |                      |
| char                 | 字符型                         |                      |
| double               | 双精度浮点                     |                      |
| float                | 单精度浮点                     |                      |
| int                  | 整型                           |                      |
| long                 | 长整型                         |                      |
| short                | 短整型                         |                      |
| 变量引用             | super                          | 父类,超类            |
| this                 | 本类                           |                      |
| void                 | 无返回值                       |                      |
| 保留关键字           | goto                           | 是关键字，但不能使用 |
| const                | 是关键字，但不能使用           |                      |

**注意：**Java 的 null 不是关键字，类似于 true 和 false，它是一个字面常量，不允许作为标识符使用。

## 注释

```java
public class HelloWorld {
   /* 这是第一个Java程序
    * 它将输出 Hello World
    * 这是一个多行注释的示例
    */
    public static void main(String[] args){
       // 这是单行注释的示例
       /* 这个也是单行注释的示例 */
       System.out.println("Hello World"); 
    }
}
```

## 构造器

```java
package oop.demo02;

public class Person {
    //    一个类即使什么都不写，它也会存在一个方法
//    显示的定义构造器
    String name;
//可以用 alt+insert  生成

//    实例化初始值
//    构造器
//    1，使用new 关键字，本质是在调用构造器
//无参构造
    public Person() {
//        this.name = "小朱";
    }

    //有参构造：一旦定义了有参构造，无参就必须显示定义,
//    也就是必须定义无参构造
    public Person(String name) {
        this.name = name;
    }
    
构造器：
//    1，和类名相同
//    2，没有返回值
//    作用：
//    1，new 本质在调用构造方法
//    2，初始化对象的值
//    注意点：1，定义有参构造之后，如果想是无参构造，显示的定义一个无参的构造
   
    ===================================================
    package oop.demo02;

//一个项目应该只存在一个main方法
public class Application {
    public static void main(String[] args) {
//        类是抽象性。需要实例化
//        类实例化后会返回一个自己的对象
//        new 实例化了一个对象，
        Person person=new Person();
        System.out.println(person.name);
    }
}

```

## 类与对象

- 类与对象

  - 类似一个模板，抽象，对象是一个具体的实例	

- 方法

  - 定义，调用

- 对应的引用

  - 引用类型：基本类型（8）
  - 对象是通过引用来操作的：栈-->堆

- 属性：字段Field 成员变量

  - 默认初始化：
    - 数字：0,0.0
    - char:u0000
    - boolean:false
    - 引用：null
    - 修饰符 属性类型  属性名=属性值

- 对象的创建和使用

  - 必须使用new 关键字创造对象，构造器 Person xiaozhu=new Person();
  - 对象的属性  xiaozhu.name
  - 对象的方法  xiaohzu.sleep()

- 类

  - 静态的属性	属性

  - 动态的行为    方法

    

## 封装

```java
package oop.demo03;

//类 private ：私有的
public class Student {
//    属性私有

//    名字
    private String name;
//    学号
    private int id;
//    性别
    private char sex;
//    学习()
//    睡觉()

//    提供一些可以操作这个属性的方法！
//    提供一些public 的 get、set方法
//    get 获得这个数据
    public String getName(){
        return  this.name;
    }
//    set 给这个数据设置值
    public void setName(String name){
        this.name=name;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setSex(char sex) {
        this.sex = sex;
    }
    
    
}
```

## 继承

```java
extends 继承

package oop.demo04;
//学生 is 人
//学生继承了人
public class Student extends Person {
}

子类继承父类，就会继承父类的全部方法，
私有的东西
    
  //  ctrl+H  继承树
  //在java 中所有的类，都默认直接或间接继承Object类
```

## 继承关键字

继承可以使用 extends 和 implements 这两个关键字来实现继承，而且所有的类都是继承于 java.lang.Object，当一个类没有继承的两个关键字，则默认继承object（这个类在 **java.lang** 包中，所以不需要 **import**）祖先类。

### extends关键字

在 Java 中，类的继承是单一继承，也就是说，一个子类只能拥有一个父类，所以 extends 只能继承一个类。



```java
public class Animal { 
    private String name;   
    private int id; 
    public Animal(String myName, String myid) { 
        //初始化属性值
    } 
    public void eat() {  //吃东西方法的具体实现  } 
    public void sleep() { //睡觉方法的具体实现  } 
} 
 
public class Penguin  extends  Animal{ 
}
```



使用 implements 关键字可以变相的使java具有多继承的特性，使用范围为类继承接口的情况，可以同时继承多个接口（接口跟接口之间采用逗号分隔）。

```java
public interface A {
    public void eat();
    public void sleep();
}
 
public interface B {
    public void show();
}
 
public class C implements A,B {
}
```

### super 与 this 关键字

super关键字：我们可以通过super关键字来实现对父类成员的访问，用来引用当前对象的父类。

this关键字：指向自己的引用。

> **super注意点：**
>
> **1，super调用父类的构造函数，必须在构造方法的第一个**
>
> **2，super 必须出现在子类的方法或者构造方法中！**
>
> **3，super 和this不能同时调用构造方法**
>
> **Vs this：**
>
> **代表的对象不同：**
>
> ​	**this: 本身调用者这个对象**
>
> ​	**super：代表父类对象的应用**
>
> **前提**
>
> ​	**this：没有继承也可以使用**
>
> ​	**super：只能在继承条件可以使用**
>
> **构造方法**
>
> ​	**this()；本类的构造**
>
> ​	**super(); 父类的构造**

### 实例

```java
class Animal {
  void eat() {
    System.out.println("animal : eat");
  }
}
 
class Dog extends Animal {
  void eat() {
    System.out.println("dog : eat");
  }
  void eatTest() {
    this.eat();   // this 调用自己的方法
    super.eat();  // super 调用父类方法
  }
}
 
public class Test {
  public static void main(String[] args) {
    Animal a = new Animal();
    a.eat();
    Dog d = new Dog();
    d.eatTest();
  }
}
```



输出结果为：

```
animal : eat
dog : eat
animal : eat
```

### final关键字

final 关键字声明类可以把类定义为不能继承的，即最终类；或者用于修饰方法，该方法不能被子类重写：

- 声明类：

  ```
  final class 类名 {//类体}
  ```

- 声明方法：

  ```
  修饰符(public/private/default/protected) final 返回值类型 方法名(){//方法体}
  ```

**注**:实例变量也可以被定义为 final，被定义为 final 的变量不能被修改。被声明为 final 类的方法自动地声明为 final，但是实例变量并不是 final

------

## 构造器

子类是不继承父类的构造器（构造方法或者构造函数）的，它只是调用（隐式或显式）。如果父类的构造器带有参数，则必须在子类的构造器中显式地通过 **super** 关键字调用父类的构造器并配以适当的参数列表。

如果父类构造器没有参数，则在子类的构造器中不需要使用 **super** 关键字调用父类构造器，系统会自动调用父类的无参构造器。

## 实例

```java
class SuperClass {
  private int n;
  SuperClass(){
    System.out.println("SuperClass()");
  }
  SuperClass(int n) {
    System.out.println("SuperClass(int n)");
    this.n = n;
  }
}
// SubClass 类继承
class SubClass extends SuperClass{
  private int n;
  
  SubClass(){ // 自动调用父类的无参数构造器
    System.out.println("SubClass");
  }  
  
  public SubClass(int n){ 
    super(300);  // 调用父类中带有参数的构造器
    System.out.println("SubClass(int n):"+n);
    this.n = n;
  }
}
// SubClass2 类继承
class SubClass2 extends SuperClass{
  private int n;
  
  SubClass2(){
    super(300);  // 调用父类中带有参数的构造器
    System.out.println("SubClass2");
  }  
  
  public SubClass2(int n){ // 自动调用父类的无参数构造器
    System.out.println("SubClass2(int n):"+n);
    this.n = n;
  }
}
public class TestSuperSub{
  public static void main (String args[]){
    System.out.println("------SubClass 类继承------");
    SubClass sc1 = new SubClass();
    SubClass sc2 = new SubClass(100); 
    System.out.println("------SubClass2 类继承------");
    SubClass2 sc3 = new SubClass2();
    SubClass2 sc4 = new SubClass2(200); 
  }
}
```

输出结果为：

```java
------SubClass 类继承------
SuperClass()
SubClass
SuperClass(int n)
SubClass(int n):100
------SubClass2 类继承------
SuperClass(int n)
SubClass2
SuperClass()
SubClass2(int n):200
```

## 方法重写

> 重写：需要有继承关系，子类重写了父类的方法！！
>
> 1，方法名必须相同
>
> 2，参数列表必须相同
>
> 3，修饰符：范围可以扩大但不能缩小：piblic>Protected>Default>private
>
> 4，抛出的异常：范围，可以被缩小，但不能扩大；
>
> 重写，子类的方法和父类的方法必须要一致，方法体不同！！
>
> 
>
> 为什么需要重写：
>
> 1，父类的功能，子类不一定需要，或者不一定满足！
>
> Alt+insert 	:	override

## 多态

### 多态的优点

- \1. 消除类型之间的耦合关系
- \2. 可替换性
- \3. 可扩充性
- \4. 接口性
- \5. 灵活性
- \6. 简化性

### 多态存在的三个必要条件

- 继承
- 重写
- 父类引用指向子类对象：**Parent p = new Child();**

> **多态注意事项：**
>
> **1，多态是方法的多态，属性没有多态**
>
> **2，父类和子类，有联系，类型转换异常！classCastExecption!**
>
> **3，存在条件：继承关系，方法需要重写，父类引用指向子类对象！Father f1=new Son();**
>
> ​		**1,static 方法，属于类，他不属于实例**
>
> ​		**2，final 常量**
>
> ​		**3，private 方法；**

### instanceof (类型转换)  引用类型，判断一个类是什么类型

**类型转换**



## 抽象类

```java
package oop.demo07;
//abstract  抽象类:类 extends   单继承~ （接口可以多继承）
public abstract class Action {

//    约束~有人帮我们实现
//    abstract ,抽象方法，只有方法的名字，没有方法的实现
    public abstract void doDomething();
//    1，不能new这个抽象类，只能靠子类实现它：约束
//    2，抽象类中可以写普通方法，
//    3，抽象方法必需在抽象类中
//    抽象的抽象：约束
}
============================
    package oop.demo07;

//抽象类的方法，继承了它的子类都必需实现它的方法，除非~~
public abstract class A extends Action{


}

```

## 接口



> ```
> 作用：
> 1，约束
> 2，定义一些方法，让不同的人实现~
> 3，public  abstract
> 4,public static final
> 5,接口不能被实例化~，接口中没有构造方法
> 5，implements 可以实现多个接口
> 7，必须要重写接口中的方法
> ```

```java
package oop.demo08;

//接口
//抽象的思维
//interface定义的关键字,接口都需要实现一个类
public interface UserService {
//    接口中的所有定义其实都是抽象的，public
//    常量
    int AGE=99;

    void add(String name);
    void delete(String name);
    void update(String name);
    void query(String name);
}
```

```java
package oop.demo08;

//抽象类：extends~
//类 可以实现接口 implements 接口
//实现了接口的类，就必须重写接口中的方法
//多继承~利用接口实现多继承
public class UserServiceImpl implements UserService,TimeService {

    @Override
    public void add(String name) {

    }

    @Override
    public void delete(String name) {

    }

    @Override
    public void update(String name) {

    }

    @Override
    public void query(String name) {

    }

    @Override
    public void time() {

    }
}
```

## 内部类

```java
package oop.demo09;

public class Outer {
    private int id=10;
    public void out(){
        System.out.println("这个是外部类的方法");
    }
   public class Inner{
        public void in(){
            System.out.println("这是内部类的方法");
        }
//        获得外部类的私有属性
        public void getID(){
            System.out.println(id);
        }
    }
//    静态内部类
//    public static class Inner{
//        public void in(){
//            System.out.println("这是内部类的方法");
//        }
////        获得外部类的私有属性
//        public void getID(){
////            System.out.println(id);
//        }
//    }

        public void C(){
//        局部内部类
            class D{
                public void in(){}
            }
        }
    
    
}
//一个java类中，可以有多个class类，但只能有一个public class
class  A{

}
```

## 异常

- 检查性异常
- 运行时异常
- 错误ERROR

```java
package excepeion;

public class Test {
    public static void main(String[] args) {
        int a = 1;
        int b = 0;
//        假设要捕获多个异常，从小到大
        try {//try 监控区域
            System.out.println(a / b);

        }catch (ArithmeticException e){//catch(想要捕获的异常类型) 捕获异常
            System.out.println("ArithmeticException");
        }catch (Exception e) {
            System.out.println("Exception");
        }finally {//处理善后工作
            System.out.println("finally");
        }

//finally 可以不要finally 假设IO，资源，关闭、、、
    }
    public void a(){
        b();
    }
      public void b(){
        a();
    }  
}

```

```java
package excepeion;

public class Test2 {
    public static void main(String[] args) {
        int a=1;
        int b=0;
//Ctrl+Alt+T
        try {
            if(b==0){//主动抛出异常
                throw new ArithmeticException();//主动抛出异常
            }
            
            System.out.println(a/b);
        } catch (Exception e) {
            e.printStackTrace();//打印错误的栈信息
        } finally {
        }
    }
//    假设这个方法中，处理不了异常，方法上抛出异常
    public void test(int a,int b){
        if(b==0){//主动抛出异常
            throw new ArithmeticException();//主动抛出异常,一般在方法中使用
        }

    }
}
```

# GUI编程

## Frame窗口

```java
package GUI01.lessson01;

import java.awt.*;

//GUI的第一个界面
public class TestFrame {
    public static void main(String[] args) {
//        Frame.JDK 看源码
        Frame frame=new Frame("我的只一个java图像界面窗口");
//        需要设置可见性 w h
        frame.setVisible(true);
//        设置窗口的大小
        frame.setSize(400,400);
//        设置背景颜色
        frame.setBackground(new Color(85,85,168));
//        设置弹窗的初始位置
        frame.setLocation(200,200);
//        设置固定大小
        frame.setResizable(false);


    }
}
```

## **封装弹出多个窗口**

```java
package GUI01.lessson01;

import java.awt.*;

public class TestFrame02 {
    public static void main(String[] args) {
//        展示多个窗口    new
        MyFrame myFrame1 = new MyFrame(100, 100, 200, 200, Color.blue);
        MyFrame myFrame2 = new MyFrame(300, 100, 200, 200, Color.yellow);
        MyFrame myFrame3 = new MyFrame(100, 300, 200, 200, Color.red);
        MyFrame myFrame4 = new MyFrame(300, 300, 200, 200, Color.pink);


    }
}

class MyFrame extends Frame {
    static int id = 0;//可能存在多个窗口，我们需要一个计数器

    public MyFrame(int x, int y, int w, int h, Color color) {
        super("MyFrame" + (++id));
        setBackground(color);
        setBounds(x, y, w, h);
        setVisible(true);

    }
}
```

## 面板Panel

```java
package GUI01.lessson01;

import java.awt.*;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;

//panel 可以看成是一个空间，但是不能单独存在
public class TestPanel {
    public static void main(String[] args) {
        Frame frame = new Frame();
//        布局的概念
        Panel panel = new Panel();

//        设置布局
        frame.setLayout(null);

//        坐标
        frame.setBounds(300, 300, 500, 500);
        frame.setBackground(new Color(201, 19, 147));

//        Panel 设置坐标，相对于frame
        panel.setBounds(50, 50, 400, 400);
        panel.setBackground(new Color(51, 238, 163));

//        frame.add(panel)
        frame.add(panel);

//        设置可见性
        frame.setVisible(true);

//        监听事件，监听窗口关闭事件 System.exit()
//        适配器模式
        frame.addWindowListener(new WindowAdapter() {
//            窗口点击关闭的时候要做的事情
            @Override
            public void windowClosing(WindowEvent e) {
//              结束程序
                System.exit(0);

            }
        });

    }
}
```

## 布局关闭器

- 流式布局

- ```java
  package GUI01.lessson01;
  
  import java.awt.*;
  
  public class TestFlowLayout {
      public static void main(String[] args) {
          Frame frame = new Frame();
  //        组件-按钮
          Button button1 = new Button("button1");
          Button button2 = new Button("button1");
          Button button3 = new Button("button1");
  //          设置为流式布局
  //        frame.setLayout(new FlowLayout());
  //        FlowLayout.LEFT左对齐
          frame.setLayout(new FlowLayout(FlowLayout.LEFT));
          frame.setSize(200, 200);
  
  //        把按钮添加上去
          frame.add(button1);
          frame.add(button2);
          frame.add(button3);
  
          frame.setVisible(true);
  
  
      }
  }
  ```

- 

- 东西南北中

- ```java
  package GUI01.lessson01;
  
  import java.awt.*;
  
  public class TestBorderLayout {
      public static void main(String[] args) {
          Frame frame = new Frame("TestBorderLayout");
          Button east = new Button("East");
          Button west = new Button("West");
          Button south = new Button("South");
          Button north = new Button("North");
          Button center = new Button("Center");
  
  //        添加按钮到布局
          frame.add(east,BorderLayout.EAST);
          frame.add(west,BorderLayout.WEST);
          frame.add(south,BorderLayout.SOUTH);
          frame.add(north,BorderLayout.NORTH);
          frame.add(center,BorderLayout.CENTER);
  
          frame.setSize(500,500);
          frame.setVisible(true);
      }
  }
  
  ```

- 

- 表格布局 Grid

- ```java
  package GUI01.lessson01;
  
  import java.awt.*;
  
  public class TestGridLayout {
      public static void main(String[] args) {
  
          Frame frame = new Frame("TestGridLayout");
          Button btn1 = new Button("btn1");
          Button btn2 = new Button("btn2");
          Button btn3 = new Button("btn3");
          Button btn4 = new Button("btn4");
          Button btn5 = new Button("btn5");
          Button btn6 = new Button("btn6");
  
          frame.setLayout(new GridLayout(3,2));
          frame.add(btn1);
          frame.add(btn2);
          frame.add(btn3);
          frame.add(btn4);
          frame.add(btn5);
          frame.add(btn6);
  
          frame.pack();//java函数，自动填充
          frame.setVisible(true);
  
      }
  }
  
  ```

- 

## 练习

![image-20220201150139619](image-20220201150139619.png)



```java
package GUI01.lessson01;

import java.awt.*;

//练习的Demo
public class TestDemo {
    public static void main(String[] args) {
//        总 Frame
        Frame frame = new Frame();
        frame.setLayout(new GridLayout(2,1));
        frame.setVisible(true);
        frame.setSize(400,400);
        frame.setLocation(200,200);
        frame.setBackground(Color.blue);
//        4个面板
        Panel p1=new Panel(new BorderLayout());
        Panel p2=new Panel(new GridLayout(2,1));
        Panel p3=new Panel(new BorderLayout());
        Panel p4=new Panel(new GridLayout(2,2));
//        上面
        p1.add(new Button("East-1"),BorderLayout.EAST);
        p1.add(new Button("west-1"),BorderLayout.WEST);
        p2.add(new Button("p2-btn-1"));
        p2.add(new Button("p2-btn-2"));
        p1.add(p2,BorderLayout.CENTER);

//        下面
        p3.add(new Button("East-2"),BorderLayout.EAST);
        p3.add(new Button("west-2"),BorderLayout.WEST);
//        中间4个
        for (int i = 0; i < 4; i++) {
            p4.add(new Button("for-"+i));
        }
        p3.add(p4,BorderLayout.CENTER);
        frame.add(p1);
        frame.add(p3);
    }
}
```

## 总结

1. Frame 是一个顶级窗口

2. Panel无法单独显示，必须添加到某个容器中

3. 布局管理器

4. 1. 流式
   2. 东西南北中
   3. 表格

5. 大小，定位，背景颜色，可见性，监听

   

## 事件监听

> 事件监听:当某个时间发生的时候，干什么？
>
> ```java
> package GUI01.lessson02;
> 
> import java.awt.*;
> import java.awt.event.ActionEvent;
> import java.awt.event.ActionListener;
> import java.awt.event.WindowAdapter;
> import java.awt.event.WindowEvent;
> 
> public class TestAction {
>     public static void main(String[] args) {
> //        按下按钮的时候，触发一些事件
>         Frame frame = new Frame();
>         Button button = new Button();
> 
> //        因为addActionListener() 需要一个ActionEvent，所以我们要构造一个 ActionEvent
>         MyActionLister myActionLister = new MyActionLister();
>         button.addActionListener(myActionLister);
> 
>         frame.add(button, BorderLayout.CENTER);
>         frame.pack();//自适应
> //        关闭窗口
>         windowClose(frame);
>         frame.setVisible(true);
> 
> 
>     }
> //    关闭窗体的时间
>     private static void windowClose(Frame frame){
>         frame.addWindowListener(new WindowAdapter() {
>             @Override
>             public void windowClosing(WindowEvent e) {
>                 System.exit(0);
>             }
>         });
>     }
> 
> 
> }
> //事件监听
> class MyActionLister implements ActionListener {
>     @Override
>     public void actionPerformed(ActionEvent e) {
>         System.out.println("aaa");
>     }
> }
> ```
>
> 











































# javaweb

## maven:配置

> **1，自己配置，修改一下镜像为阿里云镜像，方面下载**

在settings.xml文件中的mirrors下添加mirror标签



```bash
<mirror>
<id>nexus-aliyun</id>
<mirrorOf>central</mirrorOf>
<name>Nexus aliyun</name>
<url>http://maven.aliyun.com/nexus/content/groups/public</url>
</mirror>
```



> 2，建立本地仓库



> **创建maven web项目**



> **在ideA配置maven**，**自己配置**



## 在idea配置tomcat


