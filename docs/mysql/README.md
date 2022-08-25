## 数据库入门

```bash
#1,检查是否安装过mysql
rpm -qa | grep mysql
#2,新装mysql获得自定义初始密码：
mysqld --initialize --console
#3,启动服务器：
net start mysql
#4,关闭服务器：
net stop mysql
#5,删除数据库：
sc delete MySQL;
#6,本机登录服务器：
mysql -u root -p
mysql -h localhost -u root -p
#7,DOS窗口登录：
mysql -h localhost -u username -p
#8,设置MySQL登录密码：
mysql_secure_installation
#9,修改密码：
ALTER USER 'root'@'localhost' IDENTIFIED BY '密码';
#10,修改密码格式：
mysqladmin -u用户名 -p旧密码 password 新密码
#11,重新配置MySQL:
DOS命令: set character_set_client=gbk;
my.ini配置文件修改:修改default-character-set=utf8
#12,创建数据库： 
create database 数据库名；
#13,查看数据库：
show databases;
#14,删除数据库：
drop database 数据库名;
#15,查看指定数据库信息：
show create database 数据库名；
#16,创建一个指定字符集的数据库：
create database 数据库名 charset utf8MB4;
#17,创建一个指定校对集的数据库：
create database 数据库名 charset utf8MB4 collate utf8mb4_general_ci;
#18,使用数据库：
use 数据库名；
#19,修改数据库字符集：
alter database 数据库名 charset gbk;
#20,修改数据库校对集（如果字符集修改必须用时修改字符集): 
alter database 数据库名 charset gbk collate gbk_chinese_ci;
#21,创建数据库表语法：
create table 数据库名.表名（字段名 字段类型，...）表选项；
#22，创建简单的数据表：
create table 表名（name varchar(50)）;
#23，创建简单的数据表（指定数据库创建数据表）
create table 数据库名.表名(name varchar(50));
#24，创建数据库表--表选项：
create table 表名(name varchar(50))engine Innodb charset utf8MB4;
#25，显示所有数据表--当前数据库下：
show tables;
#26，显示所有数据表--指定数据库：
show tables from 数据库名；
#27，显示部分关联数据表--匹配：
show tables like '%like';  # _表示匹配一个字符（固定位置），%表示匹配N个字符
#28，显示数据表的创建指令:
show create table 数据表名；
#29，查看数据表（3种效果一样）：
1> desc 表名；2> describe 表名； 3> show columns from 表名;
#30，更改数据表：修改表名：
rename table 原表名 to 新表名；如果跨数据库的话原表名=数据库.原表名
#31,修改数据表选项：
alter table 表名 charset utf8;
#32,更改字段：语法
alter table 表名 字段操作 字段位置；
#33,为表增加一个id字段，放到最前面：
alter table 表名 add id int first;
为表name字段后增加一个身份证字段card：alter table 表名 add card varchar(18) after name;,
#34，更改字段名：
alter table 表名 change 原字段名 新字段名 字段类型 字段属性 位置；
修改字段名card为sfz：alter table 表名 change card sfz varchar(18);
#35,修改字段：
alter table 表名 modify 字段名 字段类型 字段属性 位置；
修改sfz的类型为char(18)并且位置放到id后面：alter table 表名 modify sfz char(18) after id;
修改字段的排列位置：alter table 表名 modify 字段名1 数据类型 first或after  字段名2；
#36,删除字段：（不可逆的）语法：
alter table 表名 drop 字段名；

#37,新增数据：
全字段插入：insert into 表名 values(字段列表顺序对应的所有值）；
部分字段插入：insert into 表名（字段列表）values(字段列表对应的值顺序列表）；
列：insert into 表名 values(值1，值2，....);
根据字段插入数据：insert into 表名 (id,sfz,name) values(2，'412826..'，'Tom'），
#38,查看数据：语法：select *字段列表 from 表名；
列： 查看demo表中的所有数据：select * from demo;
查看demo表中的name和sfz信息：select name,sfz from demo;
查看demo表中id值为1的信息：select * from demo where id = 1;
#39,更新数据：语法：updata 表名 set 字段 = 新值，字段=新值  where条件筛选；
更新所有记录的身份信息：updata 表名 set sfz = '412826..';
更新某个记录的多个字段数据：updata 表名 set name = '新名字',sfz = '新的身份证号' where id = 1;
#40,删除数据：（不可逆）
delete from 表名 where条件；
删除表中的id为2的数据：delete from 表名 where id = 2;
#41,退出数据库：
quit 简写 \q
#42,使用“\s”命令查看数据库信息：\s
#43，使用“\u”命令切换数据库：\u test
#44，删除表中的数据
1，delete from 表名；
2，truncate 表名;
```

## 表的约束

```bash
#1,表的约束：：
单子段主键：字段名 数据类型 primary key
多字段主键：primary key(字段名1，字段名2，....）;
非空约束：字段名 数据类型 not null
唯一约束： 字段名 数据类型 unique
默认约束： 字段名 数据类型 default 默认值
#2,设置表的字段值自动增加：字段名 数据类型 auto_increment  注：只能作为主键（primary key）才能用
#4，例：
1、单字段主键：字段名 数据类型 primary key
          实例1：create table example01(
                        id int primary key,
                        name varchar(20),
                        grade float
                 );
    2、多字段的主键：primary key(字段名1,字段名2,...,字段名n)
          实例2：create table example02(
                        stu_id int,
                        course_id int,
                        name varchar(20),
                        grade float,
                        primary key(stu_id,course_id)
                 );
    3、非空约束：字段名 数据类型 not null;
          实例3：:create table example03(
                        id int primary key,
                        name varchar(20) not null,
                        grade float
                 );
    4、唯一约束：字段名 数据类型 unique;
          实例4：create table example04(
                        id int primary key,
                        std_id int unique,
                        name varchar(20) not null,
                        grade float
                 );
    5、默认约束：字段名 数据类型 default 默认值;
          实例5：create table example05(
                        id int primary key,
                        std_id int unique,
                        name varchar(20) not null,
                        grade float default 100
                 );
 #5，设置表的字段值自动增加：字段名 数据类型 auto_increment
          实例6：create table example06(
                        id int primary key auto_increment,
                        std_id int unique,
                        name varchar(20) not null,
                        grade float default 0
                 );
```

## 索引

```bash
#1，索引：：是一种数据‪结构；
B+Tree:为BTree的变种，区别为：
1，n叉B+Tree最多含有n个key，而BTree最多含有n-1个key
2,B+Tree的叶子点保存所有的key的信息,依key大小顺序排列
3，所有的非叶子节点都可以看做是key的索引部分。非叶子节点不存储数据，只起到索引
#2，普通索引：
索引语法：create index  索引名字_索引表格_索引字段 on 索引表格(索引字段全称);
例子：create index idx_city_name on city(city_name);
#3，查看索引：show index from table_name;
例子： show index from city;或 show index from city\G;
#4，删除索引：drop index index_name on tbl_name;或: drop index 索引名字 on 表名；
(1)alter table 表名 drop index 索引名;
(2)drop index 索引名 on 表名;
例子：drop index idx_city_name on city;
#5，创建唯一索引：alter table 表名 add unique 索引名(表名_字段);
例子:alter table city add unique idx_city_name(city_name);
#6， 索引的创建
       （1） 创建表的时候创建索引：CREATE TABLE 表名（字段名 数据类型[完整性约束条件],
                                                 字段名 数据类型[完整性约束条件],
                                                ．．．．．．
　　　　　　　　                                字段名 数据类型,
　　　　　　　　                               [UNIQUE|FULLTEXT|SPATIAL] INDEX|KEY
                                                     [别名] (字段名1 [(长度)] [ASC|DESC])
                                   );
              a.创建普通索引  实例1：create table tb1(id int,
                                                     name varchar(20),
                                                     score float,
                                                     index(id)
                                                    );
                              查看结构：show create table 表名\G
                              查看索引是否被使用：explain select *from tb1 where id=1\G
              b.创建唯一索引  实例2：create table tb2(id int not null,
                                                     name varchar(20) not null,
                                                     score float,
                                                     unique index (id asc)
                                                    );
                              实例3： create table tb3(id int,
                                                     name varchar(20) not null,
                                                     score float,
                                                     unique index unique_id(id asc)
                                                    );
              c.创建全文索引  实例4：create table tb4(id int not null,
                                                     name varchar(20) not null,
                                                     score float,
                                                     fulltext index fulltext_name(name)
                                                    )engine=MyISAM;
              d.创建单列索引 实例5：create table tb5(
                                                     id int not null,
                                                     name varchar(20),
                                                     score float,
                                                     index single_name(name(5))
                                                    );
              e.创建多列索引 实例6：create table tb6(
                                                     id int not null,
                                                     name varchar(20),
                                                     score float,
                                                     index muti_name(id,name(20))
                                                    ); 
              d.空间索引     实例7：create table tb6(
                                                     id int,
                                                     space geometry not null,
                                                     SPATIAL index sp(space)
                                                    )engine=MyISAM;                                     
        (2)使用create index在已存在表上去创建索引:create [UNIQUE|FULLTEXT|SPATIAL] INDEX 索引名 on 表名(字段名 [(长度)] [ASC|DESC]) ;
                            create table book(
                                              bookid int not null,
                                              bookname varchar(255) not null,
                                              author varchar(255) not null,
                                              info varchar(255) not null,
                                              comment varchar(255)not null,
                                              publicyear year not null
                            );

                            实例8：create INDEX index_id on book(bookid);普通
                                 查看结构：show create table 表名\G
                            
                            实例9：create UNIQUE INDEX unidue_id on book(bookid);唯一
                            实例10：create INDEX single_id on book(comment);单列
                            实例11：create INDEX muti_id on book(author,info);多列
                            实例12：create FULLTEXT INDEX fulltext_id on book1(info);全文
                                    create table book1(
                                              bookid int not null,
                                              bookname varchar(255) not null,
                                              author varchar(255) not null,
                                              info varchar(255) not null,
                                              comment varchar(255)not null,
                                              publicyear year not null
                                              )engine=MyISAM; 
        (3)使用alter table在已存在表上去创建索引:alter  table 表名 add [UNIQUE|FULLTEXT|SPATIAL] INDEX 索引名(字段名 [(长度)] [ASC|DESC]) ;
                             create table book2(
                                              bookid int not null,
                                              bookname varchar(255) not null,
                                              author varchar(255) not null,
                                              info varchar(255) not null,
                                              comment varchar(255)not null,
                                              publicyear year not null
                                             );

                            实例8：alter table book2 add INDEX index_id (bookid);普通
                            
                            实例9：alter table book2 add UNIQUE INDEX unidue_id (bookid);唯一
                            实例10：alter table book2 add INDEX single_id(comment(20));单列
                            实例11：alter table book2 add INDEX muti_id (author(10),info(20));多列
```

## 单表查询

```bash
#1,select 语句
select [distinct] *|字段名1，字段名2,... #distinct去重复
from 表名
[where 条件表达式1]
[group by 字段名 [having 条件表达式2]]#按...分组
[ordep by 字段名 [asc|desc]]#按...排列
[limit [offset] 记录数]#限制
```

