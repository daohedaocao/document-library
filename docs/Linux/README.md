# Linux --- 一切皆文件

## 网络连接的三种模式

1. 桥接模式，虚拟系统可以和外部系统通讯，但是容易造成IP冲突
2. NAT模式，网络地址转换模式，虚拟系统可以和外部系统通讯，不造成IP冲突
3. 主机模式：独立的系统

## 虚拟机克隆

如果你已经安装了一台linux操作系统，你还想再更多的，没有必要再重新安装，克隆就可以

- 方式1，直接拷贝一份安装好的虚拟机文件

- 方式2，使用vmware的克隆操作

- 注意，克隆时，需要先关闭linux 系统

  

## 虚拟机快照

如果你在使用虚拟机系统的时候(比如linux)，你想回到原先的某一是说你担心可能有些误操作造成系统异常，需要回到原先某个正常运行的状态，vmware也提供了这样的！快照管理
应用实例
   1.安装好系统以后，先做一个快照A

2. 进入到系统。创建一个文件夹，再保存一个快照B
3. 回到系统刚刚安装好的状态，即 快照A
4. 试试看，是否还能再次回到快照B

## 虚拟机迁移和删除

它的本质就是文件(放在文件夹的)。因此虚拟拟系统的迁移很方便

迁移：可以夹整体 直接剪贴到另外位置使用。

删除：直接手动删除虚拟系统对应的文件夹即可。

## 安装vmtools

```bash
#1. vmtools 安装后，可以让我们在windows下更好的管理vm虚拟机
#2. 可以设置windows和centos的共享文件夹

#安装vmtools的步骤
#1.进入centos
#2.点击vm菜单的->install vmware tools
#3.centos会出现一个vm的安装包,XX.tar.gz
#4.拷贝到 /opt
cd/opt #进入opt目录
#5.使用解压命令 tar, 得到一个安装文件
#6.进入该vm解压的目录，/opt 目录下
#7．安装 /vmware-install.pl
#8.全部使用默认设置即可,就可以安装成功
#9.注意：安装vmtools需要有gcc 
gcc -v  #查看是否安装gcc
#安装成功后，可以在windows下更好的管理VM虚拟机
#可以设置windows和centos的共享文件瑕
1,在windows磁盘设置个文件瑕
2在虚拟机设置里，选项，共享文件瑕，找到刚才设置的文件瑕位置，确定
3，在centos 主文件瑕下，其他位置，计算机，下的 mnt/hgfs/共享文件瑕
```

## 指令

```bash
#进入opt目录
cd/opt 
#查看当前文件下所有文件
ls
#解压压缩包
tar -zxvf  xx.tar.gz  #tar -zxvf  解压的文件名
#安装文件
 ./vmware-install.pl # ./需要安装的文件程序名字
#创建文件瑕
useradd Jack  #  useradd  文件瑕名
#删除文件瑕
# 不能用  userdel - r jack  #userdel - r 文件瑕名 
#解压rar 压缩
rar x 压缩包名字
#压缩文件
rar a 压缩




```

## 具体的目录结构

- **/bin**：
  bin 是 Binaries (二进制文件) 的缩写, 这个目录存放着最经常使用的命令。

- **/boot：**
  这里存放的是启动 Linux 时使用的一些核心文件，包括一些连接文件以及镜像文件。

- **/dev ：**
  dev 是 Device(设备) 的缩写, 该目录下存放的是 Linux 的外部设备，在 Linux 中访问设备的方式和访问文件的方式是相同的。

- **/etc：**
  etc 是 Etcetera(等等) 的缩写,这个目录用来存放所有的系统管理所需要的配置文件和子目录。

- **/home**：
  用户的主目录，在 Linux 中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的，如上图中的 alice、bob 和 eve。

- **/lib**：
  lib 是 Library(库) 的缩写这个目录里存放着系统最基本的动态连接共享库，其作用类似于 Windows 里的 DLL 文件。几乎所有的应用程序都需要用到这些共享库。

- **/lost+found**：
  这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件。

- **/media**：
  linux 系统会自动识别一些设备，例如U盘、光驱等等，当识别后，Linux 会把识别的设备挂载到这个目录下。

- **/mnt**：
  系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将光驱挂载在 /mnt/ 上，然后进入该目录就可以查看光驱里的内容了。

- **/opt**：
  opt 是 optional(可选) 的缩写，这是给主机额外安装软件所摆放的目录。比如你安装一个ORACLE数据库则就可以放到这个目录下。默认是空的。

- **/proc**：**（不能动）**
  proc 是 Processes(进程) 的缩写，/proc 是一种伪文件系统（也即虚拟文件系统），存储的是当前内核运行状态的一系列特殊文件，这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。
  这个目录的内容不在硬盘上而是在内存里，我们也可以直接修改里面的某些文件，比如可以通过下面的命令来屏蔽主机的ping命令，使别人无法ping你的机器：

  ```
  echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_all
  ```

- **/root**：
  该目录为系统管理员，也称作超级权限者的用户主目录。

- **/sbin**：

  s 就是 Super User 的意思，是 Superuser Binaries (超级用户的二进制文件) 的缩写，这里存放的是系统管理员使用的系统管理程序。

- **/selinux**：
  这个目录是 Redhat/CentOS 所特有的目录，Selinux 是一个安全机制，类似于 windows 的防火墙，但是这套机制比较复杂，这个目录就是存放selinux相关的文件的。

- **/srv**：**（不能动）**
  该目录存放一些服务启动之后需要提取的数据。

- **/sys**：**（不能动）**

  这是 Linux2.6 内核的一个很大的变化。该目录下安装了 2.6 内核中新出现的一个文件系统 sysfs 。

  sysfs 文件系统集成了下面3种文件系统的信息：针对进程信息的 proc 文件系统、针对设备的 devfs 文件系统以及针对伪终端的 devpts 文件系统。

  该文件系统是内核设备树的一个直观反映。

  当一个内核对象被创建的时候，对应的文件和目录也在内核对象子系统中被创建。

- **/tmp**：
  tmp 是 temporary(临时) 的缩写这个目录是用来存放一些临时文件的。

- **/usr**：
  usr 是 unix shared resources(共享资源) 的缩写，这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于 windows 下的 program files 目录。

- **/usr/bin：**
  系统用户使用的应用程序。

- **/usr/sbin：**
  超级用户使用的比较高级的管理程序和系统守护程序。

- **/usr/src：**
  内核源代码默认的放置目录。

- **/var**：
  var 是 variable(变量) 的缩写，这个目录中存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件。

- **/run**：
  是一个临时文件系统，存储系统启动以来的信息。当系统重启时，这个目录下的文件应该被删掉或清除。如果你的系统上有 /var/run 目录，应该让它指向 run。

在 Linux 系统中，有几个目录是比较重要的，平时需要注意不要误删除或者随意更改内部文件。

**/etc**： 上边也提到了，这个是系统中的配置文件，如果你更改了该目录下的某个文件可能会导致系统不能启动。

**/bin, /sbin, /usr/bin, /usr/sbin**: 这是系统预设的执行文件的放置目录，比如 ls 就是在 /bin/ls 目录下的。

值得提出的是，/bin, /usr/bin 是给系统用户使用的指令（除root外的通用户），而/sbin, /usr/sbin 则是给 root 使用的指令。

**/var**： 这是一个非常重要的目录，系统上跑了很多程序，那么每个程序都会有相应的日志产生，而这些日志就被记录到这个目录下，具体在 /var/log 目录下，另外 mail 的预设放置也是在这里。

## 常用指令

> **Linux中没有输出就代表操作成功**
>
> **Linux下一切皆文件**
>
> **根目录 / 所有的文件都在当前目录下**

```js
#查询IP
ifconfig
#测试网络连通性
ping  ip地址
#重启Linux系统
reboot
#立即进行关机
shutdown -h now
#1分钟后会关机
shudown -h 1
#现在重新启动计算机
shutdown -r now
#关机，作用和上面一样
halt
#把内存的数据同步到磁盘
sync
#建立文件夹
mkdir 文件夹名字
#移动文件
mv 移动的文件名字 移动的文件夹名字
#创建文件
touch 创建的文件 
```

## 目录管理，常用命令

> **绝对路径、相对路径**

```js
cd 切换的目录名称（绝对路径 都是以/开头、相对路径 对于当前目录./../ ）  #切换目录命令
./ #当前目录
cd .. #返回上一级目录
ls  #列出命令  #最长被使用的  
ls -a #all 查看全部的文件，包括隐藏文件
ls -l #列出所有的文件，包含文件的属性和权限，没有隐藏文件 
#所有Linux命令可以组合使用
cd ~ #回到当前用户目录
pwd #显示当前用户所在的目录

mkdir 目录名 #创建一个目录
mkdir -p 目录名1/目录名2/... #递归创建目录，创建多级目录
rmdir 目录名 #删除目录，仅能删除空目录，如果里面存在文件，则删不掉
rmdir -p 目录名1/目录名2/... #删除多级目录 里面存在文件，可以删不掉

cp 原来的地方或文件  新的地方 #复制文件或目录 如果文件重复，则选择确定(y)或放弃(n)

rm #移除文件或目录
rm -f #忽略不存在的文件，不会出现警告，强制删除
rm -r #递归删除目录
rm -i #互动，删除询问是否删除

rm -rf/ #系统中的所有文件都被删除了，删库跑路就是这么操作的！！！！！！

mv #移动文件或目录 或重命名
mv -f #强制移动
mv -u #只替换已经更新过的文件
mv 旧名字 新名字 #重命名

```

> **修改文件属性**

```js
chgrop [-R] 属组名 文件名 #更改文件属组
-R #递归更改文件属组，就是在更改某个目录的属组时，如果加上-R的参数，那么该目录下的所有的文件属组都会更改

chown #更改文件属主，也可以同时更改文件属组
chown [-R] 属主名 文件名 
chown [-R] 属主名:属组名 文件名 
chmod 777 文件名 # 给文件赋予用户可读可写可执行的权限
chmod 70 文件名 #取消赋予的权限
```

## 基本属性

> 看懂文件属性

Linux系统是一种典型的多用户系统，不同的用户处于不同的地位，拥有不同的权限。为了保护系统的安全性，Linux系统对不同的用户访问同一文件（包括目录文件）的权限做了不同的规定。

在Linux中我们可以使用`ll`或者`ls –l`命令来显示一个文件的属性以及文件所属的用户和组，如：

实例中，boot文件的第一个属性用"d"表示。"d"在Linux中代表该文件是一个目录文件。

在Linux中第一个字符代表这个文件是目录、文件或链接文件等等：

- 当为[ **d** ]则是目录
- 当为[ **-** ]则是文件；
- 若是[ **l** ]则表示为链接文档 ( link file )；
- 若是[ **b** ]则表示为装置文件里面的可供储存的接口设备 ( 可随机存取装置 )；
- 若是[ **c** ]则表示为装置文件里面的串行端口设备，例如键盘、鼠标 ( 一次性读取装置 )。

接下来的字符中，以三个为一组，且均为『rwx』 的三个参数的组合。

其中，[ r ]代表可读(read)、[ w ]代表可写(write)、[ x ]代表可执行(execute)。

要注意的是，这三个权限的位置不会改变，如果没有权限，就会出现减号[ - ]而已。

每个文件的属性由左边第一部分的10个字符来确定（如下图）：



从左至右用0-9这些数字来表示。

第0位确定文件类型，第1-3位确定属主（该文件的所有者）拥有该文件的权限。第4-6位确定属组（所有者的同组用户）拥有该文件的权限，第7-9位确定其他用户拥有该文件的权限。

其中：

第1、4、7位表示读权限，如果用"r"字符表示，则有读权限，如果用"-"字符表示，则没有读权限；

第2、5、8位表示写权限，如果用"w"字符表示，则有写权限，如果用"-"字符表示没有写权限；

第3、6、9位表示可执行权限，如果用"x"字符表示，则有执行权限，如果用"-"字符表示，则没有执行权限。

对于文件来说，它都有一个特定的所有者，也就是对该文件具有所有权的用户。

同时，在Linux系统中，用户是按组分类的，一个用户属于一个或多个组。

文件所有者以外的用户又可以分为文件所有者的同组用户和其他用户。

因此，Linux系统按文件所有者、文件所有者同组用户和其他用户来规定了不同的文件访问权限。

在以上实例中，boot 文件是一个目录文件，属主和属组都为 root。



> 修改文件属性

**1、chgrp：更改文件属组**

```
chgrp [-R] 属组名 文件名
```

-R：递归更改文件属组，就是在更改某个目录文件的属组时，如果加上-R的参数，那么该目录下的所有文件的属组都会更改。

**2、chown：更改文件属主，也可以同时更改文件属组**

```
chown [–R] 属主名 文件名
chown [-R] 属主名：属组名 文件名
```

**3、chmod：更改文件9个属性**  **重要**

```
chmod [-R] xyz 文件或目录
```

Linux文件属性有两种设置方法，一种是数字，一种是符号。

Linux文件的基本权限就有九个，分别是owner/group/others三种身份各有自己的read/write/execute权限。

先复习一下刚刚上面提到的数据：文件的权限字符为：『-rwxrwxrwx』， 这九个权限是三个三个一组的！其中，我们可以使用数字来代表各个权限，各权限的分数对照表如下：

```
r:4     w:2         x:1
```

每种身份(owner/group/others)各自的三个权限(r/w/x)分数是需要累加的，例如当权限为：[-rwxrwx---] 分数则是：

- owner = rwx = 4+2+1 = 7
- group = rwx = 4+2+1 = 7
- others= --- = 0+0+0 = 0

```
chmod 770 filename
```

可以自己下去多进行测试！

## 文件内容查看

> **网络配置目录：cd /etc/sysconfig/network-scripts**  



> **ifconfig**  命令查看网络配置



> **Linux系统中使用以下命令来查看文件的内容：**

- cat 由第一行开始显示文件内容（常用）

- tac 从最后一行开始显示，可以看出 tac 是 cat 的倒着写！（常用）
  
  - 
- nl  显示的时候，顺道输出行号！（常用）
  
  - 
- more 一页一页的显示文件内容（空格代表翻页，enter代表向下看一行，:f 行号）
  
  - 
- **less 与 more 类似，但是比 more 更好的是，他可以往前翻页！（空格翻页，上下键代表翻动页面，退出 q 查找字符串  /要查找的字符串 向下查询， 向上查询  ?要查询的字符串）**
- head 只看头几行(通过 -n 参数来控制显示几行)
  
  - 
- tail 只看尾巴几行 （通过 -n 参数来控制显示几行）
  
  - 

你可以使用 *man [命令]*来查看各个命令的使用文档，如 ：man cp。

> cat 由第一行开始显示文件内容

语法：

```
cat [-AbEnTv]
```

选项与参数：

- -A ：相当於 -vET 的整合选项，可列出一些特殊字符而不是空白而已；
- -b ：列出行号，仅针对非空白行做行号显示，空白行不标行号！
- -E ：将结尾的断行字节 $ 显示出来；
- -n ：列印出行号，连同空白行也会有行号，与 -b 的选项不同；
- -T ：将 [tab] 按键以 ^I 显示出来；
- -v ：列出一些看不出来的特殊字符



## **拓展：Linux链接**

Linux链接分为两张：硬链接，软连接！

**硬链接：**A-----B  假设B是A的硬链接，那么他们两个指向了同一个文件！允许一个文件拥有多个路径，用户可以通过这种机制建立到一些重要文件，防止误删！

**软链接：**类似windows下的快捷方式，删除的源文件，快捷方式也访问不了了

**创建链接 ln 命令**

> ln -s 创建软连接的地址 创建到的地址

**touch 创建的文件   ----创建文件**

**echo  输出字符串**    语法：**echo "要写入的内容" >> 指向的文件**



```js
[root@VM-16-10-centos home]# touch f1  #创建一个f1文件
[root@VM-16-10-centos home]# ls
f1  hello1.java  lighthouse  redis  www  xiaozhu
[root@VM-16-10-centos home]# ln f1 f2  #创建一个硬链接f2
[root@VM-16-10-centos home]# ls
f1  f2  hello1.java  lighthouse  redis  www  xiaozhu
[root@VM-16-10-centos home]# ln -s f1 f3   #创建一个软链接(符号链接)f3
[root@VM-16-10-centos home]# ls
f1  f2  f3  hello1.java  lighthouse  redis  www  xiaozhu
[root@VM-16-10-centos home]# ll
total 20
-rw-r--r-- 2 root       root          0 Jan  7 21:23 f1
-rw-r--r-- 2 root       root          0 Jan  7 21:23 f2
lrwxrwxrwx 1 root       root          2 Jan  7 21:24 f3 -> f1
-rw-r--r-- 1 root       root          8 Jan  6 22:24 hello1.java
drwx------ 5 lighthouse lighthouse 4096 Oct 27 15:17 lighthouse
drwx------ 2 redis      redis      4096 Oct 27 17:44 redis
drwx------ 2 www        www        4096 Oct 27 15:26 www
drwxr-xr-x 2 root       root       4096 Jan  6 22:24 xiaozhu
[root@VM-16-10-centos home]# echo "nidayee" >>f1   #给f1文件中写入字符串
[root@VM-16-10-centos home]# ls
f1  f2  f3  hello1.java  lighthouse  redis  www  xiaozhu
[root@VM-16-10-centos home]# ll
total 28
-rw-r--r-- 2 root       root          8 Jan  7 21:26 f1
-rw-r--r-- 2 root       root          8 Jan  7 21:26 f2
lrwxrwxrwx 1 root       root          2 Jan  7 21:24 f3 -> f1
-rw-r--r-- 1 root       root          8 Jan  6 22:24 hello1.java
drwx------ 5 lighthouse lighthouse 4096 Oct 27 15:17 lighthouse
drwx------ 2 redis      redis      4096 Oct 27 17:44 redis
drwx------ 2 www        www        4096 Oct 27 15:26 www
drwxr-xr-x 2 root       root       4096 Jan  6 22:24 xiaozhu
[root@VM-16-10-centos home]# cat f1  #查看f1
nidayee
[root@VM-16-10-centos home]# cat f2    #查看f2
nidayee
[root@VM-16-10-centos home]# cat f3     #查看f3
nidayee
[root@VM-16-10-centos home]# 

#删除f1之后，查看f2和f3的区别
[root@VM-16-10-centos home]# rm -rf f1
[root@VM-16-10-centos home]# ls
f2  f3  hello1.java  lighthouse  redis  www  xiaozhu
[root@VM-16-10-centos home]# cat f2  #f2硬链接还在
nidayee
[root@VM-16-10-centos home]# cat f3  #软链接（符号链接）不在了，失效了
cat: f3: No such file or directory
[root@VM-16-10-centos home]# 

```



## vim编辑器



```js
#使用vim 
//正常模式
vim hello.java #表示编写一个hello.java的程序
#输入i或者a 进入  编写模式，
#编写完成后，点击esc 退出编写模式  
// 命令模式
# 然后输入:wq 表示写入并退出   :q 退出,不保存    :q!强制退出，不保存
#再次编辑
vim hello.java


#vim 快捷键
//复制内容
先输入yy 然后输入p
//复制多行
# 5 代表复制几行
先输入5yy 然后移动光标，然后输入p

//删除当前行
dd   
//向下删除5行 5dd

// 在当前文件中查找某个单词，命令行下/关键字，回车查找，输入n就是查找下一下
//设置文件的行号，取消文件的行号，【命令行下:set nu 和:set nonu】
//编辑/etc/profile 文件，在一般模式使用，使用快捷键到该文本档的最末行[G]和最首行[gg]
//在文件中输入一个“hello"，在一般模式使用，然后撤销这个动作 u
//编辑  /etc/profile文件，并将光标移动到20行 shift+g
 
```

> 
>
> **三种使用模式**

基本上 vi/vim 共分为三种模式，分别是**命令模式（Command mode）**，**输入模式（Insert mode）**和**底线命令模式（Last line mode）**。这三种模式的作用分别是：

**命令模式：**

用户刚刚启动 vi/vim，便进入了命令模式。

此状态下敲击键盘动作会被Vim识别为命令，而非输入字符。比如我们此时按下i，并不会输入一个字符，i被当作了一个命令。

以下是常用的几个命令：

- **i** 切换到输入模式，以输入字符。
- **x** 删除当前光标所在处的字符。
- **:** 切换到底线命令模式，以在最底一行输入命令。

若想要编辑文本：启动Vim，进入了命令模式，按下i，切换到输入模式。

命令模式只有一些最基本的命令，因此仍要依靠底线命令模式输入更多命令。

**输入模式：**

在命令模式下按下i就进入了输入模式。

在输入模式中，可以使用以下按键：

- **字符按键以及Shift组合**，输入字符
- **ENTER**，回车键，换行
- **BACK SPACE**，退格键，删除光标前一个字符
- **DEL**，删除键，删除光标后一个字符
- **方向键**，在文本中移动光标
- **HOME**/**END**，移动光标到行首/行尾
- **Page Up**/**Page Down**，上/下翻页
- **Insert**，切换光标为输入/替换模式，光标将变成竖线/下划线
- **ESC**，退出输入模式，切换到命令模式

**底线命令模式**

在命令模式下按下:（英文冒号）就进入了底线命令模式。

底线命令模式可以输入单个或多个字符的命令，可用的命令非常多。

在底线命令模式中，基本的命令有（已经省略了冒号）：

- q 退出程序
- w 保存文件

按ESC键可随时退出底线命令模式。

> 上手体验一下，在home目录下测试

如果你想要使用 vi 来建立一个名为 kuangstudy.txt 的文件时，你可以这样做：

```
[root@kuangshen home]# vim kuangstudy.txt
```

然后就会进入文件

**按下 i 进入输入模式(也称为编辑模式)，开始编辑文字**

在一般模式之中，只要按下 i, o, a 等字符就可以进入输入模式了！

在编辑模式当中，你可以发现在左下角状态栏中会出现 –INSERT- 的字样，那就是可以输入任意字符的提示。

这个时候，键盘上除了 **Esc** 这个按键之外，其他的按键都可以视作为一般的输入按钮了，所以你可以进行任何的编辑。

**按下 ESC 按钮回到一般模式**

好了，假设我已经按照上面的样式给他编辑完毕了，那么应该要如何退出呢？是的！没错！就是给他按下 **Esc** 这个按钮即可！马上你就会发现画面左下角的 – INSERT – 不见了！

在一般模式中按下 **:wq** 储存后离开 vim！

OK! 这样我们就成功创建了一个 kuangstudy.txt 的文件。

> **Vim 按键说明**

除了上面简易范例的 i, Esc, :wq 之外，其实 vim 还有非常多的按键可以使用。

**第一部分：一般模式可用的光标移动、复制粘贴、搜索替换等**

| 移动光标的方法     |                                                              |
| :----------------- | ------------------------------------------------------------ |
| h 或 向左箭头键(←) | 光标向左移动一个字符                                         |
| j 或 向下箭头键(↓) | 光标向下移动一个字符                                         |
| k 或 向上箭头键(↑) | 光标向上移动一个字符                                         |
| l 或 向右箭头键(→) | 光标向右移动一个字符                                         |
| [Ctrl] + [f]       | 屏幕『向下』移动一页，相当于 [Page Down]按键 (常用)          |
| [Ctrl] + [b]       | 屏幕『向上』移动一页，相当于 [Page Up] 按键 (常用)           |
| [Ctrl] + [d]       | 屏幕『向下』移动半页                                         |
| [Ctrl] + [u]       | 屏幕『向上』移动半页                                         |
| +                  | 光标移动到非空格符的下一行                                   |
| -                  | 光标移动到非空格符的上一行                                   |
| n< space>          | 那个 n 表示『数字』，例如 20 。按下数字后再按空格键，光标会向右移动这一行的 n 个字符。 |
| 0 或功能键[Home]   | 这是数字『 0 』：移动到这一行的最前面字符处 (常用)           |
| $ 或功能键[End]    | 移动到这一行的最后面字符处(常用)                             |
| H                  | 光标移动到这个屏幕的最上方那一行的第一个字符                 |
| M                  | 光标移动到这个屏幕的中央那一行的第一个字符                   |
| L                  | 光标移动到这个屏幕的最下方那一行的第一个字符                 |
| G                  | 移动到这个档案的最后一行(常用)                               |
| nG                 | n 为数字。移动到这个档案的第 n 行。例如 20G 则会移动到这个档案的第 20 行(可配合 :set nu) |
| gg                 | 移动到这个档案的第一行，相当于 1G 啊！(常用)                 |
| n< Enter>          | n 为数字。光标向下移动 n 行(常用)                            |

| 搜索替换 |                                                              |
| :------- | ------------------------------------------------------------ |
| /word    | 向光标之下寻找一个名称为 word 的字符串。例如要在档案内搜寻 vbird 这个字符串，就输入 /vbird 即可！(常用) |
| ?word    | 向光标之上寻找一个字符串名称为 word 的字符串。               |
| n        | 这个 n 是英文按键。代表重复前一个搜寻的动作。举例来说， 如果刚刚我们执行 /vbird 去向下搜寻 vbird 这个字符串，则按下 n 后，会向下继续搜寻下一个名称为 vbird 的字符串。如果是执行 ?vbird 的话，那么按下 n 则会向上继续搜寻名称为 vbird 的字符串！ |
| N        | 这个 N 是英文按键。与 n 刚好相反，为『反向』进行前一个搜寻动作。例如 /vbird 后，按下 N 则表示『向上』搜寻 vbird 。 |

| 删除、复制与粘贴 |                                                              |
| :--------------- | ------------------------------------------------------------ |
| x, X             | 在一行字当中，x 为向后删除一个字符 (相当于 [del] 按键)， X 为向前删除一个字符(相当于 [backspace] 亦即是退格键) (常用) |
| nx               | n 为数字，连续向后删除 n 个字符。举例来说，我要连续删除 10 个字符， 『10x』。 |
| dd               | 删除游标所在的那一整行(常用)                                 |
| ndd              | n 为数字。删除光标所在的向下 n 行，例如 20dd 则是删除 20 行 (常用) |
| d1G              | 删除光标所在到第一行的所有数据                               |
| dG               | 删除光标所在到最后一行的所有数据                             |
| d$               | 删除游标所在处，到该行的最后一个字符                         |
| d0               | 那个是数字的 0 ，删除游标所在处，到该行的最前面一个字符      |
| yy               | 复制游标所在的那一行(常用)                                   |
| nyy              | n 为数字。复制光标所在的向下 n 行，例如 20yy 则是复制 20 行(常用) |
| y1G              | 复制游标所在行到第一行的所有数据                             |
| yG               | 复制游标所在行到最后一行的所有数据                           |
| y0               | 复制光标所在的那个字符到该行行首的所有数据                   |
| y$               | 复制光标所在的那个字符到该行行尾的所有数据                   |
| p, P             | p 为将已复制的数据在光标下一行贴上，P 则为贴在游标上一行！举例来说，我目前光标在第 20 行，且已经复制了 10 行数据。则按下 p 后， 那 10 行数据会贴在原本的 20 行之后，亦即由 21 行开始贴。但如果是按下 P 呢？那么原本的第 20 行会被推到变成 30 行。(常用) |
| J                | 将光标所在行与下一行的数据结合成同一行                       |
| c                | 重复删除多个数据，例如向下删除 10 行，[ 10cj ]               |
| u                | 复原前一个动作。(常用)                                       |
| [Ctrl]+r         | 重做上一个动作。(常用)                                       |

**第二部分：一般模式切换到编辑模式的可用的按钮说明**

| 进入输入或取代的编辑模式 |                                                              |
| :----------------------- | ------------------------------------------------------------ |
| i, I                     | 进入输入模式(Insert mode)：i 为『从目前光标所在处输入』， I 为『在目前所在行的第一个非空格符处开始输入』。(常用) |
| a, A                     | 进入输入模式(Insert mode)：a 为『从目前光标所在的下一个字符处开始输入』， A 为『从光标所在行的最后一个字符处开始输入』。(常用) |
| o, O                     | 进入输入模式(Insert mode)：这是英文字母 o 的大小写。o 为『在目前光标所在的下一行处输入新的一行』；O 为在目前光标所在处的上一行输入新的一行！(常用) |
| r, R                     | 进入取代模式(Replace mode)：r 只会取代光标所在的那一个字符一次；R会一直取代光标所在的文字，直到按下 ESC 为止；(常用) |
| [Esc]                    | 退出编辑模式，回到一般模式中(常用)                           |

**第三部分：一般模式切换到指令行模式的可用的按钮说明**

| 指令行的储存、离开等指令                                     |                                                              |
| :----------------------------------------------------------- | ------------------------------------------------------------ |
| :w                                                           | 将编辑的数据写入硬盘档案中(常用)                             |
| :w!                                                          | 若文件属性为『只读』时，强制写入该档案。不过，到底能不能写入， 还是跟你对该档案的档案权限有关啊！ |
| :q                                                           | 离开 vi (常用)                                               |
| :q!                                                          | 若曾修改过档案，又不想储存，使用 ! 为强制离开不储存档案。    |
| 注意一下啊，那个惊叹号 (!) 在 vi 当中，常常具有『强制』的意思～ |                                                              |
| :wq                                                          | 储存后离开，若为 :wq! 则为强制储存后离开 (常用)              |
| ZZ                                                           | 这是大写的 Z 喔！若档案没有更动，则不储存离开，若档案已经被更动过，则储存后离开！ |
| :w [filename]                                                | 将编辑的数据储存成另一个档案（类似另存新档）                 |
| :r [filename]                                                | 在编辑的数据中，读入另一个档案的数据。亦即将 『filename』 这个档案内容加到游标所在行后面 |
| :n1,n2 w [filename]                                          | 将 n1 到 n2 的内容储存成 filename 这个档案。                 |
| :! command                                                   | 暂时离开 vi 到指令行模式下执行 command 的显示结果！例如 『:! ls /home』即可在 vi 当中看 /home 底下以 ls 输出的档案信息！ |
| :set nu                                                      | 显示行号，设定之后，会在每一行的前缀显示该行的行号           |
| :set nonu                                                    | 与 set nu 相反，为取消行号！                                 |

## 账号管理

> 简介

Linux系统是一个多用户多任务的分时操作系统，任何一个要使用系统资源的用户，都必须首先向系统管理员申请一个账号，然后以这个账号的身份进入系统。

用户的账号一方面可以帮助系统管理员对使用系统的用户进行跟踪，并控制他们对系统资源的访问；另一方面也可以帮助用户组织文件，并为用户提供安全性保护。

每个用户账号都拥有一个唯一的用户名和各自的口令。

用户在登录时键入正确的用户名和口令后，就能够进入系统和自己的主目录。

实现用户账号的管理，要完成的工作主要有如下几个方面：

- 用户账号的添加、删除与修改。
- 用户口令的管理。
- 用户组的管理。



> 用户账号的管理

用户账号的管理工作主要涉及到用户账号的添加、修改和删除。

添加用户账号就是在系统中创建一个新账号，然后为新账号分配用户号、用户组、主目录和登录Shell等资源。

> **创建用户 useradd**

```
useradd 选项 用户名
```

参数说明：

- 选项 :

- - -c comment 指定一段注释性描述。
  - -d 目录 指定用户主目录，如果此目录不存在，则同时使用-m选项，可以创建主目录。
  - -g 用户组 指定用户所属的用户组。
  - -G 用户组，用户组 指定用户所属的附加组。
  - **-m　使用者目录如不存在则自动建立。（常用）**
  - -s Shell文件 指定用户的登录Shell。
  - -u 用户号 指定用户的用户号，如果同时有-o选项，则可以重复使用其他用户的标识号。

- 用户名 :

- - 指定新账号的登录名。

测试：

```
# 此命令创建了一个用户kuangshen，其中-m选项用来为登录名kuangshen产生一个主目录 /home/kuangshen
[root@kuangshen home]# useradd -m kuangshen
```

增加用户账号就是在/etc/passwd文件中为新用户增加一条记录，同时更新其他系统文件如/etc/shadow, /etc/group等。

**-m:自动创建这个用户主目录/home/snallpig**

```js
[root@VM-16-10-centos home]# useradd -m smallpig
[root@VM-16-10-centos home]# ls
lighthouse  redis  smallpig  www  xiaozhu
```

**理解一下本质：Linux中一切皆文件，这里的添加用户说白了就是忘某一个文件中写入了用户信息**!   **/etc/passwd**   **(cat /etc/passwd)**

> **Linux下如何切换用户**

**1.切换用户的命令为：su username 【username是你的用户名哦】**

**2.从普通用户切换到root用户，还可以使用命令：sudo su**

**3.在终端输入exit或logout或使用快捷方式ctrl+d，可以退回到原来用户，其实ctrl+d也是执行的exit命令**

**4.在切换用户时，如果想在切换用户之后使用新用户的工作环境，可以在su和username之间加-，例如：【su - root】**

**$表示普通用户**

**\#表示超级用户，也就是root用户**

> **hostname  查看当前主机名**
>
> **hostname   修改的主机名字**



> **删除用户**

如果一个用户的账号不再使用，可以从系统中删除。

删除用户账号就是要将/etc/passwd等系统文件中的该用户记录删除，必要时还删除用户的主目录。

删除一个已有的用户账号使用userdel命令，其格式如下：

```
userdel 选项 用户名
```

**常用的选项是 -r，它的作用是把用户的主目录一起删除。**

```
[root@kuangshen home]# userdel -r kuangshen
```

此命令删除用户kuangshen在系统文件中（主要是/etc/passwd, /etc/shadow, /etc/group等）的记录，同时删除用户的主目录。



> **修改用户**

修改用户账号就是根据实际情况更改用户的有关属性，如用户号、主目录、用户组、登录Shell等。

修改已有用户的信息使用usermod命令，其格式如下：

```js
usermod 选项 用户名
[root@VM-16-10-centos home]# usermod -d /home/233 smallpig 
#修改完毕之后查看配置文件即可
```

常用的选项包括-c, -d, -m, -g, -G, -s, -u以及-o等，这些选项的意义与useradd命令中的选项一样，可以为用户指定新的资源值。

例如：

```
# usermod -s /bin/ksh -d /home/z –g developer kuangshen
```

此命令将用户kuangshen的登录Shell修改为ksh，主目录改为/home/z，用户组改为developer。



> **设置用户密码的管理**

**超级用户root可以给任何一个普通用户设置密码**

用户管理的一项重要内容是用户口令的管理。用户账号刚创建时没有口令，但是被系统锁定，无法使用，必须为其指定口令后才可以使用，即使是指定空口令。

指定和修改用户口令的Shell命令是passwd。超级用户可以为自己和其他用户指定口令，普通用户只能用它修改自己的口令。

命令的格式为：

```
passwd 选项 用户名
```

可使用的选项：

- -l 锁定口令，即禁用账号。
- -u 口令解锁。
- -d 使账号无口令。
- -f 强迫用户下次登录时修改口令。

如果默认用户名，则修改当前用户的口令。

例如，假设当前用户是kuangshen，则下面的命令修改该用户自己的口令：

```
$ passwd
Old password:******
New password:*******   #密码不能太过简单
Re-enter new password:*******
```

如果是超级用户，可以用下列形式指定任何用户的口令：

```
# passwd kuangshen
New password:*******
Re-enter new password:*******
```

普通用户修改自己的口令时，passwd命令会先询问原口令，验证后再要求用户输入两遍新口令，如果两次输入的口令一致，则将这个口令指定给用户；而超级用户为用户指定口令时，就不需要知道原口令。

为了系统安全起见，用户应该选择比较复杂的口令，例如最好使用8位长的口令，口令中包含有大写、小写字母和数字，并且应该与姓名、生日等不相同。

为用户指定空口令时，执行下列形式的命令：

```js
# passwd -d kuangshen  #没有密码也不能登录
```

> **锁定账户**

此命令将用户 kuangshen的口令删除，这样用户 kuangshen下一次登录时，系统就不再允许该用户登录了。

passwd 命令还可以用 -l(lock) 选项锁定某一用户，使其不能登录，例如：

```js
# passwd -l kuangshen  #锁定之后这个用户就不能登录了
```

## 用户组管理

每个用户都有一个用户组，系统可以对一个用户组中的所有用户进行集中管理。不同Linux 系统对用户组的规定有所不同，如Linux下的用户属于与它同名的用户组，这个用户组在创建用户时同时创建。

**用户组的管理涉及用户组的添加、删除和修改。组的增加、删除和修改实际上就是对/etc/group文件的更新。**

> 增加一个新的用户组使用groupadd命令
>
> 

```
groupadd 选项 用户组
```

可以使用的选项有：

- -g GID 指定新用户组的组标识号（GID）。
- -o 一般与-g选项同时使用，表示新用户组的GID可以与系统已有用户组的GID相同。

创建完用户后，可以得到一个组的id，这个id是可以指定的，-g 520 ，若不指定，就是自增1



实例1：

```
# groupadd group1
```

此命令向系统中增加了一个新组group1，新组的组标识号是在当前已有的最大组标识号的基础上加1。

实例2：

```
# groupadd -g 101 group2
```

此命令向系统中增加了一个新组group2，同时指定新组的组标识号是101。



> **如果要删除一个已有的用户组，使用groupdel命令**

```
groupdel 用户组
```



例如：

```
# groupdel group1
```

此命令从系统中删除组group1。



> **修改用户组的属性使用groupmod命令**

```
groupmod 选项 用户组
```



常用的选项有：

- -g GID 为用户组指定新的组标识号。
- -o 与-g选项同时使用，用户组的新GID可以与系统已有用户组的GID相同。
- -n新用户组 将用户组的名字改为新名字

```
# 此命令将组group2的组标识号修改为102。
groupmod -g 102 group2

# 将组group2的标识号改为10000，组名修改为group3。
groupmod –g 10000 -n group3 group2
```



> **切换组**

如果一个用户同时属于多个用户组，那么用户可以在用户组之间切换，以便具有其他用户组的权限。

用户可以在登录后，使用命令newgrp切换到其他用户组，这个命令的参数就是目的用户组。例如：

```
$ newgrp root
```

这条命令将当前用户切换到root用户组，前提条件是root用户组确实是该用户的主组或附加组。



> **/etc/passwd**

完成用户管理的工作有许多种方法，但是每一种方法实际上都是对有关的系统文件进行修改。

与用户和用户组相关的信息都存放在一些系统文件中，这些文件包括/etc/passwd, /etc/shadow, /etc/group等。

下面分别介绍这些文件的内容。

**/etc/passwd文件是用户管理工作涉及的最重要的一个文件。**

> **用户名：口令（登录密码，我们不可见）:用户标识号：组标识号：注释性描述：主目录：登录shell**

**Linux系统中的每个用户都在/etc/passwd文件中有一个对应的记录行，它记录了这个用户的一些基本属性。**

这个文件对所有用户都是可读的。它的内容类似下面的例子：

```bash
＃ cat /etc/passwd

root:x:0:0:Superuser:/:
daemon:x:1:1:System daemons:/etc:
bin:x:2:2:Owner of system commands:/bin:
sys:x:3:3:Owner of system files:/usr/sys:
adm:x:4:4:System accounting:/usr/adm:
uucp:x:5:5:UUCP administrator:/usr/lib/uucp:
auth:x:7:21:Authentication administrator:/tcb/files/auth:
cron:x:9:16:Cron daemon:/usr/spool/cron:
listen:x:37:4:Network daemon:/usr/net/nls:
lp:x:71:18:Printer administrator:/usr/spool/lp:
```

从上面的例子我们可以看到，/etc/passwd中一行记录对应着一个用户，每行记录又被冒号(:)分隔为7个字段，其格式和具体含义如下：

```
用户名:口令:用户标识号:组标识号:注释性描述:主目录:登录Shell
```

1）"用户名"是代表用户账号的字符串。

通常长度不超过8个字符，并且由大小写字母和/或数字组成。登录名中不能有冒号(:)，因为冒号在这里是分隔符。

为了兼容起见，登录名中最好不要包含点字符(.)，并且不使用连字符(-)和加号(+)打头。

2）“口令”一些系统中，存放着加密后的用户口令字。

虽然这个字段存放的只是用户口令的加密串，不是明文，但是由于/etc/passwd文件对所有用户都可读，所以这仍是一个安全隐患。因此，现在许多Linux 系统（如SVR4）都使用了shadow技术，**把真正的加密后的用户口令字存放到/etc/shadow文件中**，而在/etc/passwd文件的口令字段中只存放一个特殊的字符，例如“x”或者“*”。

3）“用户标识号”是一个整数，系统内部用它来标识用户。

一般情况下它与用户名是一一对应的。如果几个用户名对应的用户标识号是一样的，系统内部将把它们视为同一个用户，但是它们可以有不同的口令、不同的主目录以及不同的登录Shell等。

通常用户标识号的取值范围是0～65 535。0是超级用户root的标识号，1～99由系统保留，作为管理账号，普通用户的标识号从100开始。在Linux系统中，这个界限是500。

4）“组标识号”字段记录的是用户所属的用户组。

它对应着/etc/group文件中的一条记录。

5)“注释性描述”字段记录着用户的一些个人情况。

例如用户的真实姓名、电话、地址等，这个字段并没有什么实际的用途。在不同的Linux 系统中，这个字段的格式并没有统一。在许多Linux系统中，这个字段存放的是一段任意的注释性描述文字，用作finger命令的输出。

6)“主目录”，也就是用户的起始工作目录。

它是用户在登录到系统之后所处的目录。在大多数系统中，各用户的主目录都被组织在同一个特定的目录下，而用户主目录的名称就是该用户的登录名。各用户对自己的主目录有读、写、执行（搜索）权限，其他用户对此目录的访问权限则根据具体情况设置。

7)用户登录后，要启动一个进程，负责将用户的操作传给内核，这个进程是用户登录到系统后运行的命令解释器或某个特定的程序，即Shell。

Shell是用户与Linux系统之间的接口。Linux的Shell有许多种，每种都有不同的特点。常用的有sh(Bourne Shell), csh(C Shell), ksh(Korn Shell), tcsh(TENEX/TOPS-20 type C Shell), bash(Bourne Again Shell)等。

系统管理员可以根据系统情况和用户习惯为用户指定某个Shell。如果不指定Shell，那么系统使用sh为默认的登录Shell，即这个字段的值为/bin/sh。

用户的登录Shell也可以指定为某个特定的程序（此程序不是一个命令解释器）。

利用这一特点，我们可以限制用户只能运行指定的应用程序，在该应用程序运行结束后，用户就自动退出了系统。有些Linux 系统要求只有那些在系统中登记了的程序才能出现在这个字段中。

8)系统中有一类用户称为伪用户（pseudo users）。

这些用户在/etc/passwd文件中也占有一条记录，但是不能登录，因为它们的登录Shell为空。它们的存在主要是方便系统管理，满足相应的系统进程对文件属主的要求。

常见的伪用户如下所示：

```
伪 用 户 含 义
bin 拥有可执行的用户命令文件
sys 拥有系统文件
adm 拥有帐户文件
uucp UUCP使用
lp lp或lpd子系统使用
nobody NFS使用
```

> /etc/shadow

**1、除了上面列出的伪用户外，还有许多标准的伪用户，例如：audit, cron, mail, usenet等，它们也都各自为相关的进程和文件所需要。**

由于/etc/passwd文件是所有用户都可读的，如果用户的密码太简单或规律比较明显的话，一台普通的计算机就能够很容易地将它破解，因此对安全性要求较高的Linux系统都把加密后的口令字分离出来，单独存放在一个文件中，这个文件是/etc/shadow文件。有超级用户才拥有该文件读权限，这就保证了用户密码的安全性。

**2、/etc/shadow中的记录行与/etc/passwd中的一一对应，它由pwconv命令根据/etc/passwd中的数据自动产生**

它的文件格式与/etc/passwd类似，由若干个字段组成，字段之间用":"隔开。这些字段是：

```
登录名:加密口令:最后一次修改时间:最小时间间隔:最大时间间隔:警告时间:不活动时间:失效时间:标志
```

1. "登录名"是与/etc/passwd文件中的登录名相一致的用户账号
2. "口令"字段存放的是加密后的用户口令字，长度为13个字符。如果为空，则对应用户没有口令，登录时不需要口令；如果含有不属于集合 { ./0-9A-Za-z }中的字符，则对应的用户不能登录。
3. "最后一次修改时间"表示的是从某个时刻起，到用户最后一次修改口令时的天数。时间起点对不同的系统可能不一样。例如在SCO Linux 中，这个时间起点是1970年1月1日。
4. "最小时间间隔"指的是两次修改口令之间所需的最小天数。
5. "最大时间间隔"指的是口令保持有效的最大天数。
6. "警告时间"字段表示的是从系统开始警告用户到用户密码正式失效之间的天数。
7. "不活动时间"表示的是用户没有登录活动但账号仍能保持有效的最大天数。
8. "失效时间"字段给出的是一个绝对的天数，如果使用了这个字段，那么就给出相应账号的生存期。期满后，该账号就不再是一个合法的账号，也就不能再用来登录了。

> /etc/group

用户组的所有信息都存放在/etc/group文件中。

将用户分组是Linux 系统中对用户进行管理及控制访问权限的一种手段。

每个用户都属于某个用户组；一个组中可以有多个用户，一个用户也可以属于不同的组。

当一个用户同时是多个组中的成员时，在/etc/passwd文件中记录的是用户所属的主组，也就是登录时所属的默认组，而其他组称为附加组。

用户要访问属于附加组的文件时，必须首先使用newgrp命令使自己成为所要访问的组中的成员。

用户组的所有信息都存放在/etc/group文件中。此文件的格式也类似于/etc/passwd文件，由冒号(:)隔开若干个字段，这些字段有：

```
组名:口令:组标识号:组内用户列表
```

1. "组名"是用户组的名称，由字母或数字构成。与/etc/passwd中的登录名一样，组名不应重复。

2. "口令"字段存放的是用户组加密后的口令字。一般Linux 系统的用户组都没有口令，即这个字段一般为空，或者是*。

3. "组标识号"与用户标识号类似，也是一个整数，被系统内部用来标识组。

4. "组内用户列表"是属于这个组的所有用户的列表/b]，不同用户之间用逗号(,)分隔。这个用户组可能是用户的主组，也可能是附加组。

   

## 磁盘管理

> 概述

Linux磁盘管理好坏直接关系到整个系统的性能问题。

Linux磁盘管理常用命令为 df、du。

- df ：列出文件系统的整体磁盘使用量
- du：检查磁盘空间使用量



> **df**

df命令参数功能：检查文件系统的磁盘空间占用情况。可以利用该命令来获取硬盘被占用了多少空间，目前还剩下多少空间等信息。

语法：

```
df [-ahikHTm] [目录或文件名]
```

选项与参数：

- -a ：列出所有的文件系统，包括系统特有的 /proc 等文件系统；
- -k ：以 KBytes 的容量显示各文件系统；
- -m ：以 MBytes 的容量显示各文件系统；
- -h ：以人们较易阅读的 GBytes, MBytes, KBytes 等格式自行显示；
- -H ：以 M=1000K 取代 M=1024K 的进位方式；
- -T ：显示文件系统类型, 连同该 partition 的 filesystem 名称 (例如 ext3) 也列出；
- -i ：不用硬盘容量，而以 inode 的数量来显示

测试：

```
# 将系统内所有的文件系统列出来！
# 在 Linux 底下如果 df 没有加任何选项
# 那么默认会将系统内所有的 (不含特殊内存内的文件系统与 swap) 都以 1 Kbytes 的容量来列出来！
[root@kuangshen /]# df
Filesystem     1K-blocks   Used Available Use% Mounted on
devtmpfs          889100       0    889100   0% /dev
tmpfs             899460     704    898756   1% /dev/shm
tmpfs             899460     496    898964   1% /run
tmpfs             899460       0    899460   0% /sys/fs/cgroup
/dev/vda1       41152812 6586736  32662368  17% /
tmpfs             179896       0    179896   0% /run/user/0
# 将容量结果以易读的容量格式显示出来
[root@kuangshen /]# df -h
Filesystem     Size Used Avail Use% Mounted on
devtmpfs       869M     0 869M   0% /dev
tmpfs           879M 708K 878M   1% /dev/shm
tmpfs           879M 496K 878M   1% /run
tmpfs           879M     0 879M   0% /sys/fs/cgroup
/dev/vda1       40G  6.3G   32G  17% /
tmpfs           176M     0 176M   0% /run/user/0
# 将系统内的所有特殊文件格式及名称都列出来
[root@kuangshen /]# df -aT
Filesystem     Type       1K-blocks   Used Available Use% Mounted on
sysfs         sysfs               0       0         0    - /sys
proc           proc                0       0         0    - /proc
devtmpfs       devtmpfs       889100       0    889100   0% /dev
securityfs     securityfs          0       0         0    - /sys/kernel/security
tmpfs         tmpfs          899460     708    898752   1% /dev/shm
devpts         devpts              0       0         0    - /dev/pts
tmpfs         tmpfs          899460     496    898964   1% /run
tmpfs         tmpfs          899460       0    899460   0% /sys/fs/cgroup
cgroup         cgroup              0       0         0    - /sys/fs/cgroup/systemd
pstore         pstore              0       0         0    - /sys/fs/pstore
cgroup         cgroup              0       0         0    - /sys/fs/cgroup/freezer
cgroup         cgroup              0       0         0    - /sys/fs/cgroup/cpuset
cgroup         cgroup              0       0         0    - /sys/fs/cgroup/hugetlb
cgroup         cgroup              0       0         0    - /sys/fs/cgroup/blkio
cgroup         cgroup              0       0         0    - /sys/fs/cgroup/net_cls,net_prio
cgroup         cgroup              0       0         0    - /sys/fs/cgroup/memory
cgroup         cgroup              0       0         0    - /sys/fs/cgroup/pids
cgroup         cgroup              0       0         0    - /sys/fs/cgroup/cpu,cpuacct
cgroup         cgroup              0       0         0    - /sys/fs/cgroup/devices
cgroup         cgroup              0       0         0    - /sys/fs/cgroup/perf_event
configfs       configfs            0       0         0    - /sys/kernel/config
/dev/vda1     ext4         41152812 6586748  32662356  17% /
systemd-1      -                   -       -         -    - /proc/sys/fs/binfmt_misc
mqueue         mqueue              0       0         0    - /dev/mqueue
debugfs       debugfs             0       0         0    - /sys/kernel/debug
hugetlbfs     hugetlbfs           0       0         0    - /dev/hugepages
tmpfs         tmpfs          179896       0    179896   0% /run/user/0
binfmt_misc   binfmt_misc         0       0         0    - /proc/sys/fs/binfmt_misc
# 将 /etc 底下的可用的磁盘容量以易读的容量格式显示

[root@kuangshen /]# df -h /etc
Filesystem     Size Used Avail Use% Mounted on
/dev/vda1       40G  6.3G   32G  17% /
```



> **du**
>
> 

Linux du命令也是查看使用空间的，但是与df命令不同的是Linux du命令是对文件和目录磁盘使用的空间的查看，还是和df命令有一些区别的，这里介绍Linux du命令。

语法：

```
du [-ahskm] 文件或目录名称
```

选项与参数：

- -a ：列出所有的文件与目录容量，因为默认仅统计目录底下的文件量而已。
- -h ：以人们较易读的容量格式 (G/M) 显示；
- -s ：列出总量而已，而不列出每个各别的目录占用容量；
- -S ：不包括子目录下的总计，与 -s 有点差别。
- -k ：以 KBytes 列出容量显示；
- -m ：以 MBytes 列出容量显示；

测试：

```
# 只列出当前目录下的所有文件夹容量（包括隐藏文件夹）:
# 直接输入 du 没有加任何选项时，则 du 会分析当前所在目录的文件与目录所占用的硬盘空间。
[root@kuangshen home]# du
16./redis
8./www/.oracle_jre_usage  # 包括隐藏文件的目录
24./www
48.                        # 这个目录(.)所占用的总量
# 将文件的容量也列出来
[root@kuangshen home]# du -a
4./redis/.bash_profile
4./redis/.bash_logout    
....中间省略....
4./kuangstudy.txt # 有文件的列表了
48.
# 检查根目录底下每个目录所占用的容量
[root@kuangshen home]# du -sm /*
0/bin
146/boot
.....中间省略....
0/proc
.....中间省略....
1/tmp
3026/usr  # 系统初期最大就是他了啦！
513/var
2666/www
```

通配符 * 来代表每个目录。

与 df 不一样的是，du 这个命令其实会直接到文件系统内去搜寻所有的文件数据。



> **磁盘挂载与卸除**

根文件系统之外的其他文件要想能够被访问，都必须通过“关联”至根文件系统上的某个目录来实现，此关联操作即为“挂载”，此目录即为“挂载点”,解除此关联关系的过程称之为“卸载”

Linux 的磁盘挂载使用mount命令，卸载使用umount命令。

磁盘挂载语法：

```
mount [-t 文件系统] [-L Label名] [-o 额外选项] [-n] 装置文件名 挂载点
```

测试：

```
# 将 /dev/hdc6 挂载到 /mnt/hdc6 上面！
[root@www ~]# mkdir /mnt/hdc6
[root@www ~]# mount /dev/hdc6 /mnt/hdc6
[root@www ~]# df
Filesystem           1K-blocks     Used Available Use% Mounted on
/dev/hdc6              1976312     42072   1833836   3% /mnt/hdc6
```

磁盘卸载命令 umount 语法：

```
umount [-fn] 装置文件名或挂载点
```

选项与参数：

- -f ：强制卸除！可用在类似网络文件系统 (NFS) 无法读取到的情况下；
- -n ：不升级 /etc/mtab 情况下卸除。

卸载/dev/hdc6

```
[root@www ~]# umount /dev/hdc6
```

## 进程管理

**Linux中一切皆文件（文件：读写执行（查看，创建，删除，移动，复制，编辑），权限（用户，用户组）。系统：（磁盘，进程））**

> **什么是进程**

1. 在Linux中，每一个程序都有自己的一个进程，没一个进程都有一个id号
2. 每一个进程，都会有一个父进程！
3. 进程可以有两种存在方式，一种是前台，一种是后台运行！
4. 一般的话服务都是后台运行的，基本的程序都是前台运行的！

> **命令**

**ps**  查看当前系统中正在执行的各种进程信息 ！（常用）

- -a  显示当前终端运行的所有进程信息(当前的进程)
- -u  以用户的信息显示进程
- -x  显示后台运行进程的参数 ！ 

```bash
#  ps -aux|  查看所有的进程
ps -aux|
# | 在Linux这个叫做管道符  A|B
#grep  查找文件中符合条件的字符串
ps -aux|grep mysql
ps -aux|grep XXX

```

对于我们来说，目前只需要记住一个命令即可 **ps -xx|grep 进程名字** 过滤进程信息

**ps -ef :可以查看到父进程的信息**

```bash
PS -ef|grep mysql  #看父进程一般我们可以通过目录树结构来查看

#目录树，以树的形势显示
pstree -pu
	-p 显示父id
	-u 显示用户组

```

**结束进程**：杀掉进程，等价于windows的结束任务

**kill -9 进程的id**      

服务器一般不会结束进程

```bash
kill -9 进程的id     
#表示强制结束进程
```



## jdk安装（rpm安装）

1、rpm下载地址http://www.oracle.com/technetwork/java/javase/downloads/index.html

2、如果有安装openjdk 则卸载

```
[root@kuangshen ~]# java -version
java version "1.8.0_121"
Java(TM) SE Runtime Environment (build 1.8.0_121-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.121-b13, mixed mode)
# 检查
[root@kuangshen ~]# rpm -qa|grep jdk
jdk1.8.0_121-1.8.0_121-fcs.x86_64
# 卸载 -e --nodeps 强制删除
[root@kuangshen ~]# rpm -e --nodeps jdk1.8.0_121-1.8.0_121-fcs.x86_64
[root@kuangshen ~]# java -version
-bash: /usr/bin/java: No such file or directory  # OK
```

3、安装JDK

```
# 安装java rpm
[root@kuangshen kuangshen]# rpm -ivh jdk-8u221-linux-x64.rpm

# 安装完成后配置环境变量 文件：/etc/profile
JAVA_HOME=/usr/java/jdk1.8.0_221-amd64
CLASSPATH=%JAVA_HOME%/lib:%JAVA_HOME%/jre/lib
PATH=$PATH:$JAVA_HOME/bin:$JAVA_HOME/jre/bin
export PATH CLASSPATH JAVA_HOME
# 保存退出

# 让新增的环境变量生效！
source /etc/profile

# 测试 java -version
[root@kuangshen java]# java -version
java version "1.8.0_221"
Java(TM) SE Runtime Environment (build 1.8.0_221-b11)
Java HotSpot(TM) 64-Bit Server VM (build 25.221-b11, mixed mode)
```



## Tomcat安装（解压缩安装）

1、安装好了Java环境后我们可以测试下Tomcat！准备好Tomcat的安装包！

2、将文件移动到/usr/tomcat/下，并解压！

```
[root@kuangshen kuangshen]# mv apache-tomcat-9.0.22.tar.gz /usr
[root@kuangshen kuangshen]# cd /usr
[root@kuangshen usr]# ls
apache-tomcat-9.0.22.tar.gz
[root@kuangshen usr]# tar -zxvf apache-tomcat-9.0.22.tar.gz   # 解压
```

3、运行Tomcat，进入bin目录，和我们以前在Windows下看的都是一样的

```
# 执行：startup.sh -->启动tomcat
# 执行：shutdown.sh -->关闭tomcat
./startup.sh
./shutdown.sh
```

4、确保Linux的防火墙端口是开启的，如果是阿里云，需要保证阿里云的安全组策略是开放的！

Linux查看防火墙开放端口

```bash
firewall-cmd --list-ports
```

```
# 查看firewall服务状态
systemctl status firewalld

# 开启、重启、关闭、firewalld.service服务
# 开启
service firewalld start
# 重启
service firewalld restart
# 关闭
service firewalld stop

# 查看防火墙规则
firewall-cmd --list-all    # 查看全部信息
firewall-cmd --list-ports  # 只看端口信息

# 开启端口
开端口命令：firewall-cmd --zone=public --add-port=80/tcp --permanent
重启防火墙：systemctl restart firewalld.service

命令含义：
--zone #作用域
--add-port=80/tcp  #添加端口，格式为：端口/通讯协议
--permanent   #永久生效，没有此参数重启后失效
```



## 安装Docker（yum安装）

> 基于 CentOS 7 安装

1. 官网安装参考手册：https://docs.docker.com/install/linux/docker-ce/centos/

2. 确定你是CentOS7及以上版本

   ```
   [root@192 Desktop]# cat /etc/redhat-release
   CentOS Linux release 7.2.1511 (Core)
   ```

3. yum安装gcc相关（需要确保 虚拟机可以上外网 ）

   ```
   yum -y install gcc
   yum -y install gcc-c++
   ```

4. 卸载旧版本

   ```
   yum -y remove docker docker-common docker-selinux docker-engine
   # 官网版本
   yum remove docker \
             docker-client \
             docker-client-latest \
             docker-common \
             docker-latest \
             docker-latest-logrotate \
             docker-logrotate \
             docker-engine
   ```

5. 安装需要的软件包

   ```
   yum install -y yum-utils device-mapper-persistent-data lvm2
   ```

6. 设置stable镜像仓库

   ```
   # 错误
   yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
   ## 报错
   [Errno 14] curl#35 - TCP connection reset by peer
   [Errno 12] curl#35 - Timeout
   
   # 正确推荐使用国内的
   yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
   ```

7. 更新yum软件包索引

   ```
   yum makecache fast
   ```

8. 安装Docker CE

   ```
   yum -y install docker-ce docker-ce-cli containerd.io
   ```

9. 启动docker

   ```
   systemctl start docker
   ```

10. 测试

    ```
    docker version
    
    docker run hello-world
    
    docker images
    ```

    

## 宝塔面板安装

https://www.bilibili.com/video/av91821322



## Linux配置node.js

linux安装nodejs有2种方式一种简单的，解压即可用；另一种，通过下载source code ，通过编译，make，make install命令来安装。

 这里只讲第一种，简单方便。不需要执行mak、make install。步骤如下：

一、确定你使用的linux系统，然后下载响应的压缩包。这里我下载的是node-v6.11.2-linux-x64.tar.xz

二、上传到linux相关路径下，一般是/usr/local/，并执行如下命令

  xz -d node-xxxx.tar.xz ---将tar.xz解压成tar文件

  tar -xvf node-xxxx.tar ---将tar文件解压成文件夹

 ***mv node-xxx node ----改文件夹的名字，改成node***

三、检查是否可以安装成功

 

四、配置软连接，使全局都可以使用node命令

ln -s /usr/local/node/bin/node /usr/bin/node  --将node源文件映射到usr/bin下的node文件

ln -s /usr/local/node/bin/npm /usr/bin/npm

五、配置node文件安装路径

进入/usr/local/node/路径下:

mkdir node_global

mkdir node_cache

npm config set prefix "node_global"

npm config set cache "node_cache"

六、当你觉得npm慢的时候，可以安装cnpm

npm install cnpm -g --registry=https://registry.npm.taobao.org

顺便可以检查一下-g这个全局安装有没有按照之前设置的，安装到node_global文件下。

如下全局使用cnpm，也要记得配置一个软连接。



 

##  pm2使用

## pm2是一个进程管理工具,可以用它来管理你的node进程，并查看node进程的状态，当然也支持性能监控，进程守护，负载均衡等功能

```js
1、 pm2需要全局安装
 `npm install -g pm2`
 2、进入项目根目录
 2.1 启动进程/应用           `pm2 start bin/www 或 pm2 start app.js`
2.2 重命名进程/应用           `pm2 start app.js --name wb123`
2.3 添加进程/应用 watch         `pm2 start bin/www --watch`
2.4 结束进程/应用            `pm2 stop www`
2.5 结束所有进程/应用           `pm2 stop all`
2.6 删除进程/应用            `pm2 delete www`
2.7 删除所有进程/应用             `pm2 delete all`
2.8 列出所有进程/应用          `pm2 list`
2.9 查看某个进程/应用具体情况      `pm2 describe www`
2.10 查看进程/应用的资源消耗情况       `pm2 monit`
2.11 查看pm2的日志                 `pm2 logs`
2.12 若要查看某个进程/应用的日志,使用  `pm2 logs www`
2.13 重新启动进程/应用            `pm2 restart www`
2.14 重新启动所有进程/应用        `pm2 restart all`
```

安装：

```
npm install -g pm2
```

用pm2启动node服务：

```
pm2 start app.js -i max -n 别名
```

> ```sh
> pm2启动python脚本
> pm2 start main.py -x --interpreter python3
> ```

基本命令

```js
$ pm2 start app.js              # 启动app.js应用程序
$ pm2 start app.js -i 4         # cluster mode 模式启动4个app.js的应用实例     # 4个应用程序会自动进行负载均衡
$ pm2 start app.js --name="api" # 启动应用程序并命名为 "api"
$ pm2 start app.js --watch      # 当文件变化时自动重启应用
$ pm2 start script.sh           # 启动 bash 脚本
$ pm2 list                      # 列表 PM2 启动的所有的应用程序
$ pm2 monit                     # 显示每个应用程序的CPU和内存占用情况
$ pm2 show [app-name]           # 显示应用程序的所有信息
$ pm2 logs                      # 显示所有应用程序的日志
$ pm2 logs [app-name]           # 显示指定应用程序的日志
$ pm2 flush
$ pm2 stop all                  # 停止所有的应用程序
$ pm2 stop 0                    # 停止 id为 0的指定应用程序
$ pm2 restart all               # 重启所有应用
$ pm2 reload all                # 重启 cluster mode下的所有应用
$ pm2 gracefulReload all        # Graceful reload all apps in cluster mode
$ pm2 delete all                # 关闭并删除所有应用
$ pm2 delete 0                  # 删除指定应用 id 0
$ pm2 scale api 10              # 把名字叫api的应用扩展到10个实例
$ pm2 reset [app-name]          # 重置重启数量
$ pm2 startup                   # 创建开机自启动命令
$ pm2 save                      # 保存当前应用列表
$ pm2 resurrect                 # 重新加载保存的应用列表
$ pm2 update                    # Save processes, kill PM2 and restore processes
$ pm2 generate                  # Generate a sample json configuration file
$ pm2 deploy app.json prod setup    # Setup "prod" remote server
$ pm2 deploy app.json prod          # Update "prod" remote server
$ pm2 deploy app.json prod revert 2 # Revert "prod" remote server by 2
$ pm2 module:generate [name]    # Generate sample module with name [name]
$ pm2 install pm2-logrotate     # Install module (here a log rotation system)
$ pm2 uninstall pm2-logrotate   # Uninstall module
$ pm2 publish                   # Increment version, git push and npm publish
```



## linux基础命令

**系统基础相关** 

- 使用root用户的环境变量切换到root用户 `su -`
- 显示当前工作路径 `pwd`
- 显示当前系统默认语言及键盘布局 `localectl`
- 显示系统中能支持的所有语言 `localectl list-locales`
- 配置系统默认语言为中文 `localectl set-locale LANG=zh_CN.gb2312`
- 重启机器 `reboot`
- 关机 `poweroff`
- 退出当前的shell  `logout/exit`

------

 **命令帮助** 

- `command --help`
- `man command`
- `info command`
- 列出命令的简短使用信息(当使用`whatis`报错时，需要运行`mandb`命令生成索引文件)  `whatis command`

------

 **日常使用命令** 

- 显示或者更改日期 `date`
- 显示日历 `cal`
- 统计文本行数或字符数以及其他相关信息 `wc`
- 找出命令的绝对路径 `which`
- 列出最近使用过的number条命令(rehl下默认保存1000条) `history number`
- 默认显示文本前10行内容，如需要显示更多行可以加减number实现 `head [+- number]`
- 默认显示文本后10行内容, 如需显示更多可以加减number `tail [+- number]`
- 自上而下显示文本内容 `cat`
- 自下而上显示文本内容 `tac`
- 切换工作路径 `cd`
- 显示目录内容 `ls`
- 复制文件或目录，复制目录时，加上`-r`选项表示递归复制 `cp`
- 重命名/移动文件或者目录 `mv`
- 删除文件或目录，删除目录时，加上`-r`选项表示递归,加上`-f`选项表示强制删除并且不提醒 `rm`
- 创建目录,递归创建加上`-p`选项  `mkdir`
- 创建空文件，或者更新时间戳 `touch`
- 列出目录树 `tree`
- 文件校验 `sha1sum    sha224sum  sha256sum  sha384sum  sha512sum`
- 校验文件`md5`的值 `md5sum`
- 逐屏浏览文本内容 `less`

------

 **用户, 组以及权限相关** 

- 打印用户身份信息 `id`
- 更改`user`用户的密码 `passwd user`
- 添加用户 `useradd`
- 更改已添加用户的相关信息(uid, gid以及groups) `usermod`
- 删除用户 `userdel`
- 添加组 `groupadd`
- 删除组 `groupdel`
- 更改用户权限和组以及id等 `change`
- 同时更改file文件的所属用户及属组为student `chown student.student file`
- 更改文件的所属组 `chgrp`
- 更改文件权限 `chmod`
- 掩码方式更改 `umask`

------

 **网络配置相关** 

- 杂七杂八

  ```
  网络配置相关的文件存放在
  /etc/sysconfig/network-scripts/ifcfg-*
  /etc/hosts        #静态IP到名称解析文件
  /etc/hostname    #主机名称配置文件
  接口命名规则
  ethx    #以太网接口
  wlanx    #无线网卡接口
  pppxx    #PPPOE拨号接口复制代码
  ```

- ```
  VI
  ```

  编辑配置文件来配置网络

  ```
  配置静态IPv4地址(vi纯手工编辑配置文件)
  cat /etc/sysconfig/network-scripts/ifcfg-
  DEVICE=        #此处填写物理网卡名称
  BOOTPROTO=none        #地址分配类型{dhcp|none|static}
  IPADDR=1.2.3.4        #IPv4地址
  PREFIX=24        #Netmask
  GATEWAY=1.2.3.254    #GW
  DNS1=1.2.3.254
  DNS2=1.2.3.253
  ONBOOT=yes        #配置此接口是否在开机时启用
  #systemctl restart network
  配置动态IPv4地址(vi纯手工编辑配置文件)
  cat /etc/sysconfig/network-scripts/ifcfg-
  DEVICE=        #此处填写物理网卡名称
  BOOTPROTO=dhcp        #地址分配类型{dhcp|none|static}
  ONBOOT=yes        #配置此接口是否在开机时启用
  #systemctl restart network
  配置DNS客户端
  #cat /etc/resolv.conf
  search    redhat.com    #搜索域
  nameserver    1.2.3.4
  nameserver    4.3.2.1
  配置静态IP到名称的解析列表，当内网中没有DNS服务器时，就可以编辑hosts文件实现IP地址到名称的解析
  #cat /etc/hosts
  10.1.1.1        server1 server1.example.com
  10.1.1.2        server2 server2.example.com
  更改主机名称
  #cat /etc/hostname
  server.example.com复制代码
  ```

------

 **解压缩相关** 

- tar
  - `c` 创建
  - `t` 列出
  - `x` 解压
  - `f` 文件名称
  - `C` 解压到指定目录
  - `z` 采用`gzip`压缩
  - `j` 采用`bzip2`压缩
  - `J` 采用`xz`进行压缩
- 打包 `tar cvf filename.tar /path`
- 打包并压缩成gzip格式 `tar czvf filename.tar.gz /path`
- 解压到指定文件夹 `tar xvf filename.tar /path`
- 查看压缩包内容但不解压 `tar tvf filename.tar`

------

 **软件包管理相关** 

- ```
  yum
  ```

  常用命令

  ```
  yum install a b c d    #安装软件包a b c d    (加上-y选项，可以在安装软件包时，不弹出是否继续的提示)
  yum remove a b c d    #卸载软件包a b c d
  yum groups list    #查看已安装的软件组和可用的软件组
  yum groups  install "Infiniband Support"    #安装软件组
  yum groups remove "Infiniband Support"    #卸载软件组
  yum info a b c    #查看软件包a b c d的相关信息，如大小，版本等...
  yum update a b c d    #更新软件包a b c d
  yum update    #整体更新所有可更新的软件包
  yum provides 文件或目录        #查看文件由哪个rpm包提供的
  yum search tree        #从仓库中搜索关键词为tree的包
  yum history        #查看yum运行历史记录复制代码
  ```

- ```
  rpm
  ```

   常用命令

  ```
  rpm -qa        #查询本机安装的所有RPM包
  rpm -qa --last    #按照时间先后顺序查询本机安装的所有RPM包
  rpm -qf 文件或目录    #查看文件由哪个rpm包提供的
  rpm -Va 包名称    #校验RPM包完整性，也可不填，不填，则代表校验所有RPM包
  rpm -qd 包名称    #查看RPM包附带的文档有哪些
  rpm -ql 包名称    #查看RPM包释放了哪些文件在哪个目录下
  rpm -qc 包名称    #查看RPM包附带的配置文件有哪些
  rpm -e 包名称    #卸载RPM包，多个包以空格隔开
  rpm -e 包名称 --nodeps    #不检查RPM包之间的依赖关系，直接卸载RPM包
  rpm -ivh 包名称    #安装一个或多个RPM包
  rpm -Uvh 包名称    #升级一个或多个RPM包复制代码
  ```

------

 **文件系统相关** 

- 设备文件命名规则

  ```
  Linux下的设备文件命名规则
  /dev/sda        #第一块串口硬盘
  /dev/hda        #第一块并口硬盘
  /dev/vda        #基于KVM下的virtio驱动的第一块虚拟化磁盘
  /dev/xvda    #基于Xen虚拟化技术的虚拟磁盘
  /dev/cdrom    #CD/DVD设备，该文件通常链接到/dev/sr0，也就是第一个CD/DVD设备，第二个光驱设备，则是/dev/sr1，以此类推
  /dev/vgname/lvname    #逻辑卷磁盘
  /dev/sda1        #第一块串口硬盘的第一个分区
  /dev/hda1    #第一块并口硬盘的第一个分区
  备注: 当Linux下的磁盘超过24个时，比如从/dev/sda>/dev/sdz，那么则多余的磁盘会继续以/dev/sdaa,/dev/sdab排列
  df    #显示文件系统使用情况
  du    #统计文件大小
  mount    #挂载分区至某个目录，或者显示挂载情况复制代码
  ```

------

 **文件搜索** 

- 搜索前, 先执行`updatedb`建立索引数据库然后再执行 `locate filename`

- ```
  find
  ```

  搜索

  ```
  find / -name ccie    #从/分区遍历所有子目录，然后根据文件名称查找
  find / -type d -name ccie    #从/分区遍历所有子目录，然后只查找名为ccie的目录
  find / -size 10M        #从/分区遍历所有子目录，然后查找大小为差不多10M的文件
  find / -perm 0755    #从/分区遍历所有子目录，然后查找权限为0755的文件
  find / -user student    #从/分区遍历所有子目录，然后查找student用户的文件复制代码
  ```

------

 **服务与进程相关** 

- 在

  ```
  rehl7
  ```

  中使用

  ```
  systemctl
  ```

  来管理

  ```
  systemctl    -t help    #列出所有的单元类型
  systemctl --type "unit"    #查看指定单元类型的状况
  systemctl --failed        #查看所有加载失败的单元信息
  systemctl status cups.service    #查看cups服务单元状况
  systemctl start cups.service    #启动cups服务单元
  systemctl stop cups.service    #停止cups服务单元
  systemctl restart cups.service    #重启cups服务单元
  systemctl enable cups.service    #配置cups服务单元开机自动启动
  systemctl disable cups.service    #配置cups服务单元开机不启动
  systemctl reload cups.service    #重新加载cups服务单元的配置文件
  systemctl is-active cups.service    #查看cups服务单元当前是否运行
  systemctl is-enabled cups.service    #查看cups服务单元开机是否自动运行
  systemctl mask NetworkManager.service        #彻底屏蔽NM服务单元
  systemctl unmask NetworkManager.service    #取消屏蔽NM服务单元
  ```

