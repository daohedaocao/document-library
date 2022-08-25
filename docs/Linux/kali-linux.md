# Kali Linux

## 解决kali linux远程连接问题

### 一、首先需要安装ufw命令

```bash
  # apt-get install ufw
>
>     二、ufw命令使用实例如下：
>
>     检查防火墙的状态(默认 inactive) # ufw status
>
>     防火墙版本                    # ufw version
>
>     启动ufw防火墙                 # ufw enable
>
>     关闭ufw防火墙                 # ufw disable
>
>     默认禁止访问所有               # ufw default deny
>
>     开放22/TCP端口                # ufw allow 22/tcp
>
>     开放53端口(tcp/udp)             # ufw allow 53
>
>     禁止外部访问                  # ufw deny 3306
>
>     删除已经添加过的规则           # ufw delete allow 22
>
>     允许此IP访问所有的本机端口      #  ufw allow from 192.168.1.100
>
>     删除上面的规则                #  ufw delete allow from 192.168.1.100
>
>     查看规则，显示行号             #  ufw status numbered
>
>     删除第三条规则                #  ufw delete 3
>
>     关闭ufw                      #  ufw disable
>
>     禁止对8888端口的访问          #  ufw deny 8888
>
>     打开来自192.168.0.1的tcp请求的22端口        # ufw allow proto tcp from 192.168.0.1 to any port 22

```



### 二，如果遇到拒绝访问，则更改配置文件

- ```bash
  
  1.修改sshd_config文件，命令为：vi /etc/ssh/sshd_config
     将#PasswordAuthentication no的注释去掉，并且将no修改为yes
     将#PermitRootLogin prohibit-password的注释去掉 ,prohibit-password 改为yes
     修改完成记得把 # 去掉
  2.重启服务
    service ssh restart
  ```

- 

## 设置ssh开机自启

```bash
在Kali系统里配置SSH服务并开机自动启动

1. 修改SSH配置文件

vim /etc/ssh/sshd_config

34行 把#去掉，并修改为yes

#PermitRootLogin prohibit-password

修改为

PermitRootLogin yes

2. 设置开机启动

systemctl enable ssh

3. 重启ssh服务

systemctl restart ssh

4. 查看22端口服务状态

netstat -apn |grep ssh

systemctl start nfs-server.service . # 启动nfs服务
systemctl enable nfs-server.service # 设置开机自启动
systemctl disable nfs-server.service # 停止开机自启动
systemctl status nfs-server.service # 查看服务当前状态
systemctl restart nfs-server.service # 重新启动某服务
systemctl list-units --type=service # 查看所有已启动的服务

#开启防火墙22端口
iptables -I INPUT -p tcp --dport 22 -j accept
```

## 工具

### 使用nslooup查看ip地址

```bash
┌──(straw㉿192)-[~]
└─$ nslookup www.baidu.com
Server:         192.168.74.2
Address:        192.168.74.2#53

Non-authoritative answer:
Name:   www.baidu.com
Address: 220.181.38.149
www.baidu.com   canonical name = www.a.shifen.com.
```

### 使用dig查询域名if

```bash
语法：dig (选项) 需要查询的域名
选项：
@<DNS 服务器地址>：指定进行域名解析的域名服务器
any  #显示所有类型的域名记录，默认只显示A记录

-x #反向解析域名
dig -x 49.233.53.82
```

### 查看dns服务器版本信息

```bash
dig txt chaos VERSION.BIND @baidu.com
# txt记录信息
# chaos 类级别
#version 版本信息
```

### 查询网站的域名注册信息和备案信息

- Whois 查新方式web接口和Whois命令查询

1. 通过web接口查询：阿里云：https://whois.aliyun.com/ 等等
2. 命令查询：whois baidu.com

- 备案信息
  1. web接口查询：站长之家网站，天眼查

### 使用Maltego收集子域名信息

>  子域名挖掘工具：Maltego子域名挖掘机
>
> 搜索引擎挖掘 如L在google中输入site:qq.com
>
> 第三方网站查询：http://tool.chinaz.com/subdomain  https://dasdumpster.com/
>
> 证书透明度开日枚举：https://crt.sh/  http://censys.io/
>
> 其他途径： https://phpinfo.me.domain  http://dns.aizhan.com

