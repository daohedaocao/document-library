# Ubuntu

```bash
# 修改root密码：
sudopasswd
# 切换root用户：
su root
```

# 配置python虚拟环境 使用flask 

flask部署

https://gitee.com/gmbjzg/gzh_xiaoyaobiancheng/blob/master/flask%E9%A1%B9%E7%9B%AE%E9%83%A8%E7%BD%B2.md

```js
查看正在运行的端口
netstat -tunlp


创建虚拟环境
mkvirtualenv --python=/usr/bin/python3.10 rice_env
进入虚拟环境
workon rice_env
退出虚拟环境
deactivate

后台运行
uwsgi -d --ini uwsgi.ini

uwsgi -M --ini uwsgi.ini --plugin=python3.10


启动uWSGI

uwsgi --ini uwsgi.ini
复制代码
启动Nginx
/etc/init.d/nginx start



uwsgi重启
uwsgi --reload uwsgi.pid
复制代码
uwsgi停止
uwsgi --stop uwsgi.pid
sudo pkill -f uwsgi -9


[uwsgi]
#socket = 49.233.53.82:5000
chdir = /srv/test/
#module = app:app
wsgi-file =/srv/test/app.py
processes = 4
master = true
#threads = 20
callable =app
daemonize = uwsgi.log
#pidfile = uwsgi.pid
home = /root/.virtualenvs/rice_env
http = :5000


mkvirtualenv  --python=python3.x  envname：创建python3.x运行环境envname
workon envname: 工作在envname环境 或 从其它环境切换到envname环境
deactivate: 退出终端环境
rmvirtualenv envname：删除运行环境envname
mkproject env：创建env项目和运行环境env
mktmpenv：创建临时运行环境
lsvirtualenv: 列出可用的运行环境
lssitepackages: 列出当前环境安装了的包
cdvirtualenv [subdir] 导航到当前激活的虚拟环境的目录中
cdsitepackages [subdir] 和上面的类似，但是是直接进入到 site-packages 目录中
lssitepackages 显示 site-packages 目录中的内容
showvirtualenv [env] 显示指定环境的详情
cpvirtualenv [source] [dest] 复制一份虚拟环境
allvirtualenv 对当前虚拟环境执行统一的命令
add2virtualenv [dir] [dir] 把指定的目录加入当前使用的环境的path中，这常使用
于在多个project里面同时使用一个较大的库的情况
————————————————

```

## 个人博客后端部署配置--flask

> 打包依赖
>
> 生成软件包列表
> pipreqs ./ --encoding=utf8 --force
> 安装
> pip3 install -r requirements.txt

> 更新pip
>
> ```
> pip3 install --upgrade pip
> ```

> - 安装创建虚拟环境
>
>   - ```
>     pip3 install virtualenvwrapper
>     ```
>
>   - 创建虚拟环境
>     mkvirtualenv --python=/usr/bin/python3.10 rice_env
>     进入虚拟环境
>     workon rice_env
>     退出虚拟环境
>     deactivate
>
>     后台运行
>     uwsgi -d --ini uwsgi.ini
>
>     uwsgi -M --ini uwsgi.ini --plugin=python3.10
>
>   - 虚拟环境配置变量
>
>   - ```bash
>     export WORKON_HOME=$HOME/.virtualenvs #虚拟环境地址
>     VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3 #python 版本
>     source /usr/local/bin/virtualenvwrapper.sh  #刷新
>     #或---
>     export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3  #执行virtualenvwrapper执行的python版本
>     #export WORKON_HOME=$HOME/.virtualenvs  #指定虚拟环境的存放目录，路径可以自定义
>     export WORKON_HOME=/env/.virtualenvs
>     source /usr/local/bin/virtualenvwrapper.sh #virtualenvwrapper.sh所在的路径
>     ```
>
>   - 刷新文件  source ~/.bashrc
>
> - 安装uwsgi
>
>   - pip3 install uwsgi
>
> - 配置uwsgi
>
>   - 在项目根目录创建uwsgi.ini
>   - 自己 的配置
>   - [uwsgi]
>   - socket =127.0.0.1:6000 
>     chdir=/srv/rice_blog_webserve/
>     #module = app:app
>     wsgi-file=/srv/rice_blog_webserve/app.py
>     processes=30
>     threads = 5
>     master=true
>     reload-on-as= 4096
>     #threads = 20
>     callable=app
>     daemonize = uwsgi.log
>     pidfile=uwsgi.pid
>     home=/env/.virtualenvs/rice_env
>     #http=0.0.0.0:5000
>     #https=0.0.0.0:5000,./rices.crt,./rices.key
>     python-autoreload=1
>     #buffer-size=32k
>     buffer-size=32768
>
>   - 或
>
>   - ```bash
>     [uwsgi]
>       
>     # 项目的路径
>     chdir           = /srv/[项目名称]/
>     # Flask的uwsgi文件
>     wsgi-file       = /srv/[项目名称]/app.py
>     # 回调的app对象
>     callable        = app
>     # Python虚拟环境的路径
>     home            = /root/.virtualenvs/[项目名称]_env
>     
>     # 进程相关的设置
>     # 主进程
>     master          = true
>     # 最大数量的工作进程
>     processes       = 10
>     
>     # http            = :5000 监听5000端口（或监听socket文件，与nginx配合）
>     
>     socket          = /srv/[项目名称]/[项目名称].sock
>     
>     # 设置socket的权限
>     chmod-socket    = 666
>     # 退出的时候是否清理环境
>     vacuum          = true
>     ```

> nginx配置
>
> ```
> upstream [项目名称]{
>     server unix:///srv/[项目名称]/[项目名称].sock;
> }
> 
> # 配置服务器
> server {
>     # 监听的端口号
>     listen      80;
>     # 域名
>     server_name 47.117.122.52;
>     charset     utf-8;
> 
>     # 最大的文件上传尺寸
>     client_max_body_size 75M;
> 
>     # 静态文件访问的url
>     location /static {
>         # 静态文件地址
>         alias /srv/[项目名称]/static; 
>     }
> 
>     # 最后，发送所有非静态文件请求到uwsgi服务器
>     location / {
>         uwsgi_pass  [项目名称];
>         # uwsgi_params文件地址
>         include     /etc/nginx/uwsgi_params;
>     }
> }
> ```

> 自己的nginx配置

```bash

```



# flask部署

## 打包依赖

> ```
> 生成软件包列表
> pipreqs ./ --encoding=utf8 --force
> 安装
> pip3 install -r requirements.txt
> ```

## 使用uwsgi

> **pip instal  uwsgi**
>
> 在根目录建立  **uwsgi.ini**

**编写** 

```bash
[uwsgi]
#转发地址，使用nginx配合
socket = 127.0.0.1:6000
#项目运行目录
chdir=/srv/rice_blog_webserve/
#项目入口文件
wsgi-file=/srv/rice_blog_webserve/app.py
#运行进程
processes=100
master=true
#threads = 20
#回调
callable=app
#daemonize = uwsgi.log
#pid文件
pidfile=uwsgi.pid
#虚拟环境地址
home=/env/.virtualenvs/rice_env
#不使用nginx 的写法
#http=0.0.0.0:5000
#https=0.0.0.0:5000,./rices.crt,./rices.key
#自动重启
python-autoreload=1

```

## 启动uwsgi

> uwsgi --ini uwsgi.ini
> 复制代码
> 启动Nginx
> /etc/init.d/nginx start
>
> uwsgi重启
> uwsgi --reload uwsgi.pid
> 复制代码
> uwsgi停止
> uwsgi --stop uwsgi.pid
> sudo pkill -f uwsgi -9

## nginx 配置

```bash
server  {
            # listen  80;
            listen  443 ssl;
            # proxy_max_temp_file_size 0;
            server_name 49.233.53.82:5000;
            # ssl on;
                #从腾讯云获取到的第一个文件的全路径
            ssl_certificate /www/server/nginx/conf/ricessl/rices.top_bundle.crt;
                #从腾讯云获取到的第二个文件的全路径
            ssl_certificate_key /www/server/nginx/conf/ricessl/rices.top.key;
    }
    
  #主要的         
server {
              
                listen 5000 ssl;
                # 监听443端口（默认安全连接）
                # listen 443 ssl;
                proxy_max_temp_file_size 0;
                # 域名
                server_name 49.233.53.82;
                # ssl on;
                #从腾讯云获取到的第一个文件的全路径
                ssl_certificate ./ricessl/rices.top_bundle.crt;
                #从腾讯云获取到的第二个文件的全路径
                ssl_certificate_key ./ricessl/rices.top.key;
                
                location / {
                        include uwsgi_params;
                        # 跳转到的端口
                        uwsgi_pass 127.0.0.1:6000;
                    
                }
        }


#重启nginx
```

```bash
  
##  自己的配置
  
  server  {
              # listen  80;
              listen  443 ssl;
              # proxy_max_temp_file_size 0;
              server_name 49.233.53.82:5000;
              # ssl on;
            #       #从腾讯云获取到的第一个文件的全路径
              ssl_certificate /www/server/nginx/conf/ricessl/rices.top_bundle.pem;
            #       #从腾讯云获取到的第二个文件的全路径
              ssl_certificate_key /www/server/nginx/conf/ricessl/rices.top.key;
                location / {
        
                # add_header Access-Control-Allow-Origin *;
                add_header Content-Security-Policy upgrade-insecure-requests;
                add_header 'Access-Control-Allow-Origin' '*' always;
				add_header 'Access-Control-Allow-Methods' '*';
				add_header 'Access-Control-Allow-Credentials' 'true';
				add_header 'Access-Control-Allow-Headers' '*';
            if ($request_method = 'POST') {
            add_header Content-Security-Policy upgrade-insecure-requests;
				add_header 'Access-Control-Allow-Origin' '*' always;
				add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS,PUT,DELETE,OPTION';
				add_header 'Access-Control-Allow-Credentials' 'true';
				add_header 'Access-Control-Allow-Headers' 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization,Accept,Referer,Accept-Encoding,Accept-Language,Access-Control-Request-Headers,Access-Control-Request-Method,Connection,Host,Origin,Sec-Fetch-Mode';
			}
			if ($request_method = 'GET') {
			add_header Content-Security-Policy upgrade-insecure-requests;
				add_header 'Access-Control-Allow-Origin' '*' always;
				add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS,PUT,DELETE,OPTION';
				add_header 'Access-Control-Allow-Credentials' 'true';
				add_header 'Access-Control-Allow-Headers' 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization,Accept,Referer,Accept-Encoding,Accept-Language,Access-Control-Request-Headers,Access-Control-Request-Method,Connection,Host,Origin,Sec-Fetch-Mode';
              
                }
            if ($request_method = 'OPTIONS') {
            add_header Content-Security-Policy upgrade-insecure-requests;
				add_header 'Access-Control-Allow-Origin' '*' always;
				add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS,PUT,DELETE,OPTION';
				add_header 'Access-Control-Allow-Credentials' 'true';
				add_header 'Access-Control-Allow-Headers' 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization,Accept,Referer,Accept-Encoding,Accept-Language,Access-Control-Request-Headers,Access-Control-Request-Method,Connection,Host,Origin,Sec-Fetch-Mode';
				return 204;
			}
                        }
      }

        
server {
              
                listen 5000;
                # 监听443端口（默认安全连接）
                # listen 443 ssl;
                # proxy_max_temp_file_size 0;
                # 域名
                # server_name server.rices.top;
                server_name 49.233.53.82;
                # ssl on;
                #从腾讯云获取到的第一个文件的全路径
                ssl_certificate /www/server/nginx/conf/ricessl/rices.top_bundle.pem;
                #   #从腾讯云获取到的第二个文件的全路径
                ssl_certificate_key /www/server/nginx/conf/ricessl/rices.top.key;
                
                location / {
                        add_header Content-Security-Policy upgrade-insecure-requests;
                        include uwsgi_params;
                        uwsgi_pass 127.0.0.1:6000;
                        
        }
        
        }
    server {
              
                listen 5001 ssl;
                # 监听443端口（默认安全连接）
                # listen 443 ssl;
                # proxy_max_temp_file_size 0;
                # 域名
                # server_name server.rices.top;
                server_name 49.233.53.82;
                # ssl on;
                #从腾讯云获取到的第一个文件的全路径
                ssl_certificate /www/server/nginx/conf/ricessl/rices.top_bundle.pem;
                #   #从腾讯云获取到的第二个文件的全路径
                ssl_certificate_key /www/server/nginx/conf/ricessl/rices.top.key;
                
                location / {
                        add_header Content-Security-Policy upgrade-insecure-requests;
                        include uwsgi_params;
                        uwsgi_pass 127.0.0.1:6000;
                        
        }
        
        }
        
```

重启nginx

```
service nginx restart
```

nginx 常用命令

```
启动：service nginx start
关闭：service nginx stop
重启：service nginx restart
测试配置文件：service nginx configtest
```







# 安装Docker

```bash
地址 https://docs.docker.com/engine/install/ubuntu/


sudo apt-get remove docker docker-engine docker.io containerd runc


 sudo apt-get update
 sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
    
    
    sudo mkdir -p /etc/apt/keyrings
 curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg


 echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

 sudo apt-get update
 sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

```

# 安装docker-compose

```bash

apt install docker-compose
```



# 安装青龙控制面板

```
地址：https://mopo-blog.ddnsfree.com/2021/05/08/qinglong-docker-build/




```

# 青龙 安装教程

 发表于 2021-05-08 | 分类于 [Docker ](https://mopo-blog.ddnsfree.com/categories/Docker/)， [qinglong](https://mopo-blog.ddnsfree.com/categories/Docker/qinglong/)

## 简介

青龙采用全新的设计方式，颜值即正义的设计理念为大家带来更加个性化和人性化的交互方式。截止到当前博客创建时间，青龙即将迎来2.0，如果大家有什么好的建议，请前往 👉 [反馈地址](https://comments.app/view/JMyzrsnx) 提交您的宝贵意见，感谢大家一直以来对[whyour大佬](https://github.com/whyour) 的支持 ^_^ [☕鼓励一下☕](https://t.me/c/1465257366/34)

## 环境

- Docker
- 代理 (尽量满足)

## 部署

### Host方式

```
docker run -dit \
  --name QL \
  --hostname QL \
  --restart always \
  -p 5700:5700 \
  -v $PWD/QL/config:/ql/config \
  -v $PWD/QL/log:/ql/log \
  -v $PWD/QL/db:/ql/db \
  -v $PWD/QL/scripts:/ql/scripts \
  -v $PWD/QL/jbot:/ql/jbot \
  whyour/qinglong:latest
```

### MacVlan方式

```
docker run -dit \
  --name QL \
  --hostname QL \
  --restart always \
  --net=macnet \
  --ip=192.168.2.20 \
  --dns=192.168.2.2 \
  --mac-address C2:F2:9C:C5:B1:01 \
  -v $PWD/QL/config:/ql/config \
  -v $PWD/QL/log:/ql/log \
  -v $PWD/QL/db:/ql/db \
  -v $PWD/QL/scripts:/ql/scripts \
  -v $PWD/QL/jbot:/ql/jbot \
  whyour/qinglong:latest
```



# docker常用命令

```bash

docker info #查看是否安装成功


启动docker： systemctl start docker

停止docker： systemctl stop docker

重启docker: systemctl  restart docker

查看docker状态：systemctl status docker

开机启动： systemctl  enable docker

查看概要信息： docker info

查看帮助文档： docker --help

查看具体指令文档： docker 具体命令 --help

 

查看本地docker仓库： docker images

搜索远程仓库： docker search redis

安装镜像： docker pull redis

删除镜像 ：docker rmi redis

交互式启动容器 ：docker -it ubuntu /bin/bash

查看运行的docker容器 :docker ps

exit退出容器，容器会停止

ctrl++p+q退出容器，容器不会停止

启动容器: docker start 容器id

停止容器： docker stop 容器id

重启容器： docker restart 容器id

强行停止容器： docker kill 容器id

删除已停止容器： docker rm 容器id

查看容器日志： docker logs 容器id

重新进入容器前台： docker exec -it  容器id  /bin/bash

将docker容器中的文件拷贝到服务器 ：docker cp 容器id：文件地址  服务器文件地址 docker cp 6203340eb0b9:/usr/sjj.txt /usr

容器持久化 docker export b673627b3b65 > redis.tar

持久化文件转换成镜像：cat redis.tar | docker import - 123/redis:1

提交新版镜像 docker commit -m="add vim" -a="sjj" 6203340eb0b9 sjj/sjjj

```

## 一、管理命令

- `docker version`，查看docker客户端及服务端的版本信息；
- `docker info`，查看docker容器的详细信息，除了如上版本信息，还有镜像、容器数据卷、容器网络、Registry地址、物理配置等信息；
- `docker --help`，查看命令帮助；

## 二、镜像命令

- ```
  docker images
  ```

  ，查看本地所有顶层镜像（top level）信息的命令，按照创建时间倒序展示 ；

  - `docker images -a`，查看本地所有镜像信息的命令，包含中间层；
  - `docker images -q`，只显示镜像ID；
  - `docker images name:tag`，根据镜像name:tag来查看详细信息，不支持模糊搜索；

- ```
  docker history
  ```

  ，查看镜像的历史信息；

  - `docker history name:tag`，查看name:tag对应镜像的历史信息；

- ```
  docker search
  ```

  ，镜像搜索命令；

  - `docker search name`，根据镜像name进行搜索；
  - `docker search --filter=stars=1000 name`，增加筛选条件，只查询stars数量在1000以上的；

- ```
  docker pull
  ```

  ，拉取镜像；

  - `docker pull name:tag`，根据name和tag拉取镜像；

- ```
  docker rmi
  ```

  ，移除镜像；

  - `docker rmi name:tag`，根据name和tag删除镜像，该镜像如果已经生成容器则不能删除；如果同一个镜像有多个tag，则只有当最后一个tag删除时才会删除镜像；
  - `docker rmi -f name:tag`，强制删除镜像，如论是否创建容器；
  - `docker rmi -f ${docker images -q}`，强制删除本地所有镜像；
  - `docker rmi id`，根据镜像ID删除镜像，会先删除所有tag，然后删除镜像；

- ```
  docker build
  ```

  ，构建镜像；

  - `docker build -f container_path/dockerfile -t name:tag .`，指定dockerfile构建name:tag镜像，注意最后有一个.符号；

- ```
  docker save
  ```

  ，导出镜像，适用于需要将镜像安装到没有网络条件的服务器上的场景；

  - `docker save -o E:\httpd.zip httpd:latest`，将本地仓库中的httpd镜像导入到指定目录的指定文件中；

- ```
  docker load
  ```

  ，从指定文件中加载镜像，适用于在无网络条件的服务器上使用；

  - `docker load -i E:\httpd.zip`，从指定目录的指定文件中加载镜像到本地仓库中；

- ```
  docker tag
  ```

  ，给指定的镜像打tag，常用于指定别名，用于上传到远程镜像仓库场景；

  - `docker tag httpd:latest zhangxun/httd:latest`，一个镜像两个tag，删除任意一个都不会删除镜像，只有当所有tag都删除了才会真正删除镜像；但是如果删除镜像ID，则会先删除所有tag，再删除镜像；
  - `docker tag id zhangxun/httpd:latest`，对指定ID的镜像打tag；
  - `docker tag id test.tecentcloudcr.com/project/httpd:latest`，在新tag前面加上registry地址，表示后续将该镜像推送到指定的远程仓库，而非官方的Docker Hub；

- ```
  docker push
  ```

  ，将镜像推送到远程镜像仓库；

  - `docker push zhangxun/httpd:latest`，默认是推送到Docker Hub的远程仓库，一定要加上用户名前缀，否则无法推送，没有用户名前缀的都是官方镜像；
  - `docker push test.tecentcloudcr.com/project/httpd:latest`，推送到指定的远程仓库；

## 三、容器命令

- ```
  docker run
  ```

  ，新建并启动容器命令；

  - `docker run -it name`，以交互方式新建启动容器，此处name为image的，非容器的，此时容器name随机；
  - `docker run --name newname name`，新启动的容器指定名称为newname；
  - `docker run -d name`，以守护方式启动容器；
  - `docker run -it -v local_path:container_path name`，-v是指挂载数据卷，使得主机和容器地址挂载；
  - `docker run --name name02 --volumes-from name01 name:tag`，启动name02容器，共享name01数据卷，name01称为数据卷容器；
  - `docker run -it --network=bridge name`，启动容器使用某个指定的网络；

- ```
  docker start
  ```

  ，启动容器命令；

  - `docker start name`，这里的name是容器的name；

- ```
  docker restart
  ```

  ，重启容器命令；

  - `docker restart name`，这里的name是容器的name；

- `docker stop`，停止容器命令；

- `docker kill`，杀掉正在运行中的某个容器；

- `docker rm`，移除容器；

- ```
  docker ps
  ```

  ，查看容器命令；

  - `docker ps -q`，只显示容器ID；
  - `docker ps -a`，显示正在运行和历史运行过的容器信息；
  - `docker ps -l -n num`，显示最近创建的num个容器信息；
     -`docker container ps`和`docker container ls`的效果和`docker ps`完全一样；

- ```
  docker top
  ```

  ，查看容器中的进程信息；

  - `docker top name`，查看name容器中的进程信息；
  - `docker container top name`效果完全一样。

- ```
  docker stats
  ```

  ，查看容器的运行情况资源占用情况；

  - `docker stats name`，查看某个容器的运行情况；
  - `docker container stats`，效果完全一样；

- ```
  docker logs
  ```

  ， 查看容器中的日志；

  - `docker logs -f -t --tail=20 name`，查看name容器中的日志，-f表示跟踪日志输出，-t显示时间戳，--tail n，只显示最新的n条日志信息；

- ```
  docker inspect
  ```

  ，查看docker容器的详细信息；

  - `docker inspect name`，查看某个容器的详细信息；

- ```
  docker attach
  ```

  ，进入容器；

  - `docker attach name`，进入正在运行的容器name的命令行，显示该容器的运行信息；

- ```
  docker exec
  ```

  ，进入容器并执行命令；

  - `docker exec -it name cmd`，以交互方式进入容器name，同时执行cmd命令；

- ```
  docker commit
  ```

  ，打包生成镜像；

  - `docker commit -a="author" -m="commit info" name newname:tag`，写上作者、提交信息，并将当前容器打包为newname:tag的容器；

- ```
  docker cp
  ```

  ，容器与宿主机之间的数据拷贝；推荐使用数据卷的功能，所以这个命令实际中不常用；

  - `docker cp name:/container_path local_path`，将name容器中container_path路径下内容cp到宿主机的local_path路径下；
  - `docker cp local_path name:/container_path`，将宿主机的local_path路径下内容cp到name容器中container_path路径下

- ```
  docker volume
  ```

  ，查看数据卷的信息；

  - `docker volume ls`，查看所有存在的数据卷信息；
  - `docker volume inspect name`，查看数据卷的详细信息，比如对应主机的路径；
  - `docker volume create name`，创建一个name名称的数据卷；

- ```
  docker network
  ```

  ，网络设置相关；

  - `docker network ls`，查看宿主机上docker的网络列表；
  - `docker network inspect name`，根据name查看某个具体网络的信息；
  - `docker network create --driver bridge --subnet 172.17.0.0/16 --gateway 172.17.0.1 yourNetName`，创建自定义网络，指定网络类型、子网范围以及网关地址；

- ```
  docker export
  ```

  ，导出容器；

  - `docker export -o /root/docker/httpd-01.tar container-id`，将某个容器（无论是否正在运行）导出到指定路径的指定文件；

- ```
  docker import
  ```

  ，导入容器；

  - `docker import /root/docker/httpd-01.tar - test/imagename:tag`，从指定路径导入容器，同时创建一个基于容器快照的镜像；



### 文章目录

- - - [一、docker概述](https://copyfuture.com/blogs-details/20200310142123550ud2h9cakq8e7f5g#docker_1)
    - [二、常用运维命令](https://copyfuture.com/blogs-details/20200310142123550ud2h9cakq8e7f5g#_50)
    - [三、docker服务详解](https://copyfuture.com/blogs-details/20200310142123550ud2h9cakq8e7f5g#docker_85)
    - - - [3.1 拉取与推送](https://copyfuture.com/blogs-details/20200310142123550ud2h9cakq8e7f5g#31__86)
        - [3.2 docker 启动一个container](https://copyfuture.com/blogs-details/20200310142123550ud2h9cakq8e7f5g#32_docker_container_113)
        - [3.3 将一个container固化为一个新的image（commit）](https://copyfuture.com/blogs-details/20200310142123550ud2h9cakq8e7f5g#33_containerimagecommit_166)



### 一、docker概述

**docker命令总分为以下几种：**

- Docker环境信息 — docker [info|version]
- 容器生命周期管理 — docker [create|exec|run|start|stop|restart|kill|rm|pause|unpause]
- 容器操作运维 — docker [ps|inspect|top|attach|wait|export|port|rename|stat]
- 容器rootfs命令 — docker [commit|cp|diff]
- 镜像仓库 — docker [login|pull|push|search]
- 本地镜像管理 — docker [build|images|rmi|tag|save|import|load]
- 容器资源管理 — docker [volume|network]
- 系统日志信息 — docker [events|history|logs]

从docker命令使用出发，梳理出如下命令结构图：

![在这里插入图片描述](20200310142123550ud2h9cakq8e7f5g_0.png)

**Docker环境信息**

```bash
[weblogickk@localhost ~]$ sudo docker info # Docker环境信息,总容器镜像等
Containers: 43
Running: 9
Paused: 0
Stopped: 34
Images: 140
Server Version: 17.09.0-ce
Storage Driver: overlay
Backing Filesystem: xfs
Supports d_type: false
Logging Driver: json-file
Cgroup Driver: cgroupfs
[weblogickk@localhost ~]$ sudo docker version # 查看docker版本等详情
Client:
Version: 17.09.0-ce
API version: 1.32
Go version: go1.8.3
Git commit: afdb6d4
Built: Tue Sep 26 22:41:23 2017
OS/Arch: Linux/amd64
Server:
Version: 17.09.0-ce
API version: 1.32 (minimum version 1.12)
Go version: go1.8.3
Git commit: afdb6d4
Built: Tue Sep 26 22:42:49 2017
OS/Arch: Linux/amd64
Experimental: false
```

### 二、常用运维命令

- attach命令
  docker attach命令对应开发者很有用，可以连接到正在运行的容器，观察容器的运行状况，或与容器的主进程进行交互。
- inspect命令
  用于查看镜像和容器的详细信息，默认会列出全部信息，可以通过–format参数来指定输出的模板格式，以便输出特定信息。
- **container（ps）** 查看容器的信息
  `docker ps` 命令可以查看容器的CONTAINER ID、NAME、IMAGE NAME、端口开启及绑定、容器启动后执行的COMMNAD。最常用的功能是通过ps来找到CONTAINER_ID，以便对特定容器进行操作。
  `docker ps` 默认显示当前正在运行中的container
  `docker ps -a` 查看包括已经停止的所有容器
  `docker ps -l` 显示最新启动的一个容器（包括已停止的）
- 查看容器中正在运行的进程（top）
  容器运行时不一定有/bin/bash终端来交互执行top命令，查看container中正在运行的进程，
  `docker top <container_id/container_name>`。实际上在host上使用`ps -ef|grep docker`也可以看到一组类似的进程信息，把container里的进程看成是host上启动docker的子进程就对了。
- images 列出机器上的镜像
  下面IMAGE ID列其实是缩写，要显示完整则带上–no-trunc选项

```bash
[weblogickk@localhost ~]$ sudo docker ps # 显示当前正在运行中的container
CONTAINER ID NAME COMMAND CREATED STATUS PORTS
f855896522d4 ubuntu16.04v1.0 "/bin/bash" 7 months ago Up 7 month scripts
[weblogickk@localhost ~]$ sudo docker stop f855896522d4 # 停止container的服务
[weblogickk@localhost ~]$ sudo docker images # 列出机器上的镜像
REPOSITORY TAG IMAGE ID CREATED VIRTUAL SIZE
ubuntu 14.10 2185fd50e2ca 13 days ago 236.9 MB
[weblogickk@localhost ~]$ sudo docker rmi 2185fd50e2ca # 删除镜像
[weblogickk@localhost ~]$ sudo docker load -i javaWebserver.tar # 读取javaWebserver.tar服务
[weblogickk@localhost ~]$ sudo docker run
```

### 三、docker服务详解

##### 3.1 拉取与推送

1. 在docker index中搜索image（search）
   `Usage: docker search TERM`

   ```bash
   [weblogickk@localhost ~]$ sudo docker search seanlo
   NAME DESCRIPTION STARS OFFICIAL AUTOMATED
   seanloook/centos6 sean's docker repos 0
   ```

   搜索的范围是官方镜像和所有个人公共镜像。NAME列的 / 后面是仓库的名字。

2. 从docker registry server 中下拉image或repository（pull）
   Usage: docker pull [OPTIONS] NAME[:TAG]
   `# docker pull centos`
   上面的命令需要注意，在docker v1.2版本以前，会下载官方镜像的centos仓库里的所有镜像，而从v.13开始官方文档里的说明变了：will pull the centos:latest image, its intermediate layers and any aliases of the same id，也就是只会下载tag为latest的镜像（以及同一images id的其他tag）。
   也可以明确指定具体的镜像：
   `# docker pull centos:centos6`
   当然也可以从某个人的公共仓库（包括自己是私人仓库）拉取，形如docker pull username/repository
   `# docker pull seanlook/centos:centos6`
   如果你没有网络，或者从其他私服获取镜像，形如docker pull registry.domain.com:5000/repos:
   `# docker pull dl.dockerpool.com:5000/mongo:latest`

3. 推送一个image或repository到registry（push）
   与上面的pull对应，可以推送到Docker Hub的Public、Private以及私服，但不能推送到Top Level Repository。
   `# docker push seanlook/mongo`
   `# docker push registry.tp-link.net:5000/mongo:2014-10-27`
   registry.tp-link.net也可以写成IP，172.29.88.222。
   在repository不存在的情况下，命令行下push上去的会为我们创建为私有库，然而通过浏览器创建的默认为公共库。

##### 3.2 docker 启动一个container

1. 从image启动一个container（run）
   docker run命令首先会从特定的image创之上create一层可写的container，然后通过start命令来启动它。停止的container可以重新启动并保留原来的修改。run命令启动参数有很多，以下是一些常规使用说明，更多部分请参考http://www.cnphp6.com/archives/24899
   当利用 docker run 来创建容器时，

- Docker 在后台运行的标准操作包括：

  检查本地是否存在指定的镜像，不存在就从公有仓库下载 利用镜像创建并启动一个容器 分配一个文件系统，并在只读的镜像层外面挂载一层可读写层 从宿主主机配置的网桥接口中桥接一个虚拟接口到容器中去 从地址池配置一个 ip 地址给容器 执行用户指定的应用程序 执行完毕后容器被终止 Usage: docker run [OPTIONS] IMAGE [COMMAND] [ARG…]

1. 使用image创建container并执行相应命令，然后停止
   `# docker run ubuntu echo "hello world"`
   hello word
   这是最简单的方式，跟在本地直接执行echo ‘hello world’ 几乎感觉不出任何区别，而实际上它会从本地ubuntu:latest镜像启动到一个容器，并执行打印命令后退出（docker ps -l可查看）。需要注意的是，默认有一个–rm=true参数，即完成操作后停止容器并从文件系统移除。因为Docker的容器实在太轻量级了，很多时候用户都是随时删除和新创建容器。
   容器启动后会自动随机生成一个CONTAINER ID，这个ID在后面commit命令后可以变为IMAGE ID
   **使用image创建container并进入交互模式, login shell是/bin/bash**
   `# docker run -i -t --name mytest centos:centos6 /bin/bash`
   `bash-4.1#`
   上面的–name参数可以指定启动后的容器名字，如果不指定则docker会帮我们取一个名字。镜像centos:centos6也可以用IMAGE ID (68edf809afe7) 代替），并且会启动一个伪终端，但通过ps或top命令我们却只能看到一两个进程，因为容器的核心是所执行的应用程序，所需要的资源都是应用程序运行所必需的，除此之外，并没有其它的资源，可见Docker对资源的利用率极高。此时使用exit或Ctrl+D退出后，这个容器也就消失了（消失后的容器并没有完全删除？）
   （那么多个TAG不同而IMAGE ID相同的的镜像究竟会运行以哪一个TAG启动呢

2. 运行出一个container放到后台运行
   `# docker run -d ubuntu /bin/sh -c "while true; do echo hello world; sleep 2; done"`
   `ae60c4b642058fefcc61ada85a610914bed9f5df0e2aa147100eab85cea785dc`
   它将直接把启动的container挂起放在后台运行（这才叫saas），并且会输出一个CONTAINER ID，通过docker ps可以看到这个容器的信息，可在container外面查看它的输出docker logs ae60c4b64205，也可以通过docker attach ae60c4b64205连接到这个正在运行的终端，此时在Ctrl+C退出container就消失了，按ctrl-p ctrl-q可以退出到宿主机，而保持container仍然在运行
   另外，如果-d启动但后面的命令执行完就结束了，如/bin/bash、echo test，则container做完该做的时候依然会终止。而且-d不能与–rm同时使用
   可以通过这种方式来运行memcached、apache等。

3. 映射host到container的端口和目录
   映射主机到容器的端口是很有用的，比如在container中运行memcached，端口为11211，运行容器的host可以连接container的 internel_ip:11211 访问，如果有从其他主机访问memcached需求那就可以通过-p选项，形如-p <host_port:contain_port>，存在以下几种写法：

   ```bash
   -p 11211:11211 这个即是默认情况下，绑定主机所有网卡（0.0.0.0）的11211端口到容器的11211端口上
   -p 127.0.0.1:11211:11211 只绑定localhost这个接口的11211端口
   -p 127.0.0.1::5000
   -p 127.0.0.1:80:8080
   ```

   目录映射其实是“绑定挂载”host的路径到container的目录，这对于内外传送文件比较方便，在搭建私服那一节，为了避免私服container停止以后保存的images不被删除，就要把提交的images保存到挂载的主机目录下。使用比较简单，-v <host_path:container_path>，绑定多个目录时再加-v。
   `-v /tmp/docker:/tmp/docker`
   另外在两个container之间建立联系可用–link，详见高级部分或官方文档。
   下面是一个例子：

   ```bash
   $ sudo docker run --name nginx_test \
   > -v /tmp/docker:/usr/share/nginx/html:ro \
   > -p 80:80 -d \
   > nginx:1.7.6`
   ```

   在主机的/tmp/docker下建立index.html，就可以通过http://localhost:80/或http://host-ip:80访问了。

##### 3.3 将一个container固化为一个新的image（commit）

当我们在制作自己的镜像的时候，会在container中安装一些工具、修改配置，如果不做commit保存起来，那么container停止以后再启动，这些更改就消失了。
`docker commit <container> [repo:tag]`
后面的repo:tag可选
只能提交正在运行的container，即通过docker ps可以看见的容器，
查看刚运行过的容器

```bash
$ sudo docker ps -l
CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES
c9fdf26326c9 nginx:1 nginx -g.. 3 hours ago Exited (0).. nginx_test
启动一个已存在的容器（run是从image新建容器后再启动），以下也可以使用docker start nginx_test代替
[root@hostname docker]$ sudo docker start c9fdf26326c9
c9fdf26326c9
$ sudo docker run -i -t --sig-proxy=false 21ffe545748baf /bin/bash
nginx服务没有启动
$ sudo docker commit -m "some tools installed" fcbd0a5348ca seanlook/ubuntu:14.10_tutorial
fe022762070b09866eaab47bc943ccb796e53f3f416abf3f2327481b446a9503
```

-a “seanlook7@gmail.com”
请注意，当你反复去commit一个容器的时候，每次都会得到一个新的IMAGE ID，假如后面的repository:tag没有变，通过docker images可以看到，之前提交的那份镜像的repository:tag就会变成:，所以尽量避免反复提交。
另外，观察以下几点:

commit container只会pause住容器，这是为了保证容器文件系统的一致性，但不会stop。

- 如果你要对这个容器继续做其他修改：

  你可以重新提交得到新image2，删除次新的image1 也可以关闭容器用新image1启动，继续修改，提交image2后删除image1 当然这样会很痛苦，所以一般是采用Dockerfile来build得到最终image，参考[]

虽然产生了一个新的image，并且你可以看到大小有100MB，但从commit过程很快就可以知道实际上它并没有独立占用100MB的硬盘空间，而只是在旧镜像的基础上修改，它们共享大部分公共的“片”。
下

1. 开启/停止/重启container（start/stop/restart）

   容器可以通过run新建一个来运行，也可以重新start已经停止的container，但start不能够再指定容器启动时运行的指令，因为docker只能有一个前台进程。

   容器stop（或Ctrl+D）时，会在保存当前容器的状态之后退出，下次start时保有上次关闭时更改。而且每次进入attach进去的界面是一样的，与第一次run启动或commit提交的时刻相同。

   ```bash
   CONTAINER_ID=$(docker start <containner_id>)
   docker stop $CONTAINER_ID
   docker restart $CONTAINER_ID
   ```

关于这几个命令可以通过一个完整的实例使用：docker如何创建一个运行后台进程的容器并同时提供shell终端。

1. 连接到正在运行中的container（attach）
   要attach上去的容器必须正在运行，可以同时连接上同一个container来共享屏幕（与screen命令的attach类似）。
   官方文档中说attach后可以通过CTRL-C来detach，但实际上经过我的测试，如果container当前在运行bash，CTRL-C自然是当前行的输入，没有退出；如果container当前正在前台运行进程，如输出nginx的access.log日志，CTRL-C不仅会导致退出容器，而且还stop了。这不是我们想要的，detach的意思按理应该是脱离容器终端，但容器依然运行。好在attach是可以带上–sig-proxy=false来确保CTRL-D或CTRL-C不会关闭容器。
   `# docker attach --sig-proxy=false $CONTAINER_ID`
2. 查看image或container的底层信息（inspect）
   inspect的对象可以是image、运行中的container和停止的container。
   查看容器的内部IP
   `# docker inspect --format='{{.NetworkSettings.IPAddress}}' $CONTAINER_ID`
   172.17.42.35
3. 删除一个或多个container、image（rm、rmi）
   你可能在使用过程中会build或commit许多镜像，无用的镜像需要删除。但删除这些镜像是有一些条件的：
   同一个IMAGE ID可能会有多个TAG（可能还在不同的仓库），首先你要根据这些 image names 来删除标签，当删除最后一个tag的时候就会自动删除镜像；
   承上，如果要删除的多个IMAGE NAME在同一个REPOSITORY，可以通过docker rmi <image_id>来同时删除剩下的TAG；若在不同Repo则还是需要手动逐个删除TAG；
   还存在由这个镜像启动的container时（即便已经停止），也无法删除镜像；
   TO-DO
   如何查看镜像与容器的依存关系
   删除容器：`docker rm <container_id/contaner_name>`
   删除所有停止的容器：`docker rm $(docker ps -a -q)`
   删除镜像：`docker rmi <image_id/image_name ...>`

下面是一个完整的示例：

```bash
$ sudo docker images <==
ubuntu 13.10 195eb90b5349 4 months ago 184.6 MB
ubuntu saucy 195eb90b5349 4 months ago 184.6 MB
seanlook/ubuntu rm_test 195eb90b5349 4 months ago 184.6 MB
使用195eb90b5349启动、停止一个容器后，删除这个镜像
$ sudo docker rmi 195eb90b5349
Error response from daemon: Conflict, cannot delete image 195eb90b5349 because it is
tagged in multiple repositories, use -f to force
2014/11/04 14:19:00 Error: failed to remove one or more images
删除seanlook仓库中的tag <==
$ sudo docker rmi seanlook/ubuntu:rm_test
Untagged: seanlook/ubuntu:rm_test
现在删除镜像，还会由于container的存在不能rmi
$ sudo docker rmi 195eb90b5349
Error response from daemon: Conflict, cannot delete 195eb90b5349 because the
container eef3648a6e77 is using it, use -f to force
2014/11/04 14:24:15 Error: failed to remove one or more images
先删除由这个镜像启动的容器 <==
$ sudo docker rm eef3648a6e77
删除镜像 <==
$ sudo docker rmi 195eb90b5349
Deleted: 195eb90b534950d334188c3627f860fbdf898e224d8a0a11ec54ff453175e081
Deleted: 209ea56fda6dc2fb013e4d1e40cb678b2af91d1b54a71529f7df0bd867adc961
Deleted: 0f4aac48388f5d65a725ccf8e7caada42f136026c566528a5ee9b02467dac90a
Deleted: fae16849ebe23b48f2bedcc08aaabd45408c62b531ffd8d3088592043d5e7364
Deleted: f127542f0b6191e99bb015b672f5cf48fa79d974784ac8090b11aeac184eaaff
```

注意，上面的删除过程我所举的例子比较特殊——镜像被tag在多个仓库，也有启动过的容器。按照<==指示的顺序进行即可。

1. docker build 使用此配置生成新的image
   build命令可以从Dockerfile和上下文来创建镜像：
   docker build [OPTIONS] PATH | URL | -
   上面的PATH或URL中的文件被称作上下文，build image的过程会先把这些文件传送到docker的服务端来进行的。
   如果PATH直接就是一个单独的Dockerfile文件则可以不需要上下文；如果URL是一个Git仓库地址，那么创建image的过程中会自动git clone一份到本机的临时目录，它就成为了本次build的上下文。无论指定的PATH是什么，Dockerfile是至关重要的，请参考Dockerfile Reference。
   请看下面的例子：

```bash
$ sudo cat Dockerfile
FROM seanlook/nginx:bash_vim
EXPOSE 80
ENTRYPOINT /usr/sbin/nginx -c /etc/nginx/nginx.conf && /bin/bash
$ sudo docker build -t seanlook/nginx:bash_vim_Df .
Sending build context to Docker daemon 73.45 MB
Sending build context to Docker daemon
Step 0 : FROM seanlook/nginx:bash_vim
---> aa8516fa0bb7
Step 1 : EXPOSE 80
---> Using cache
---> fece07e2b515
Step 2 : ENTRYPOINT /usr/sbin/nginx -c /etc/nginx/nginx.conf && /bin/bash
---> Running in e08963fd5afb
---> d9bbd13f5066
Removing intermediate container e08963fd5afb
Successfully built d9bbd13f5066
上面的PATH为.，所以在当前目录下的所有文件（不包括.dockerignore中的）将会被tar打包并传送到docker daemon（一般在本机），从输出我们可以到Sending build context...，最后有个Removing intermediate container的过程，可以通过--rm=false来保留容器。
TO-DO
docker build github.com/creack/docker-firefox失败。
```

1. 给镜像打上标签（tag）
   tag的作用主要有两点：一是为镜像起一个容易理解的名字，二是可以通过docker tag来重新指定镜像的仓库，这样在push时自动提交到仓库。
   将同一IMAGE_ID的所有tag，合并为一个新的
   `# docker tag 195eb90b5349 seanlook/ubuntu:rm_test`
   新建一个tag，保留旧的那条记录
   `# docker tag Registry/Repos:Tag New_Registry/New_Repos:New_Tag`
2. 其他命令
   docker还有一些如login、cp、logs、export、import、load、kill等不是很常用的命令，比较简单，请参考官网。
   `events`、`history`和`logs`命令
   这3个命令用于查看Docker的系统日志信息。events命令会打印出实时的系统事件；history命令会打印出指定镜像的历史版本信息，即构建该镜像的每一层镜像的命令记录；logs命令会打印出容器中进程的运行日志。

- docker events [options] ：从服务器获取实时事件。
  OPTIONS说明：
  `-f` ：根据条件过滤事件；
  `--since` ：从指定的时间戳后显示所有事件;
  `--until` ：流水时间显示到指定的时间为止；
- docker history [options] image：查看指定镜像的创建历史。
  OPTIONS说明：
  `-H` :以可读的格式打印镜像大小和日期，默认为true；
  `--no-trunc`:显示完整的提交记录；
  `-q` :仅列出提交记录ID。
- docker logs [options] container
  Options:
  `--details` 显示更多的信息
  `-f, --follow` 跟踪日志输出，最后一行为当前时间戳的日志
  `--since string` 显示自具体某个时间或时间段的日志
  `--tail string` 从日志末尾显示多少行日志， 默认是all
  `-t, --timestamps` 显示时间戳

