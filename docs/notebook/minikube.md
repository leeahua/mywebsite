# minikube

## 资料连接

```
https://minikube.sigs.k8s.io/docs/start/
```



## 1. install

-----

```shell
 # 下载依赖
 curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
 
 # 安装
 sudo install minikube-linux-amd64 /usr/local/bin/minikube
 
 #执行结果查看
 [root@centos7-2 home]# curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 67.3M  100 67.3M    0     0  1987k      0  0:00:34  0:00:34 --:--:-- 3823k
[root@centos7-2 home]# sudo install minikube-linux-amd64 /usr/local/bin/minikube

```

------



## 2 启动集群

-----



```shell
minikube start

# 执行结果 并出现了问题
[root@centos7-2 home]# minikube start
* Centos 7.6.1810 上的 minikube v1.25.1
* 自动选择 docker 驱动。其他选项：none, ssh
* The "docker" driver should not be used with root privileges.
* If you are running minikube within a VM, consider using --driver=none:
*   https://minikube.sigs.k8s.io/docs/reference/drivers/none/

X Exiting due to DRV_AS_ROOT: The "docker" driver should not be used with root privileges.

# 问题解决方案 To solve your problem you can follow these steps:
# 1. Add new User minikube_user
	adduser minikube_user
	# centos 执行下下面的语句会出错
	#[root@centos7-2 home]# usermod -aG sudo minikube_user
    # usermod：“sudo”组不存在
    # 解决方法 
    # centos 使用 
    usermod -aG wheel minikube_user
	#linxe 使用 usermod -aG sudo newUser 
# 2. Login to the newly created User
	su - newUser
# 3. Add User to the Docker Group
	sudo groupadd docker
	sudo usermod -aG docker minikube_user

# 4. Relogin and the start minikube with this following commands 这里我推出重新登录才可以的
	minikube start --driver=docker
# 5. Verify minikube is running
	docker ps

```

## 启动结果

```shell
[minikube_user@centos7-2 ~]$ minikube start --driver=docker
* Centos 7.6.1810 上的 minikube v1.25.1
* 根据用户配置使用 docker 驱动程序

X Requested memory allocation (1819MB) is less than the recommended minimum 1900MB. Deployments may fail.


X The requested memory allocation of 1819MiB does not leave room for system overhead (total system memory: 1819MiB). You may face stability issues.
* 建议：Start minikube with less memory allocated: 'minikube start --memory=1819mb'

* Starting control plane node minikube in cluster minikube
* Pulling base image ...
* Downloading Kubernetes v1.23.1 preload ...
    > gcr.io/k8s-minikube/kicbase: 378.98 MiB / 378.98 MiB  100.00% 1.47 MiB p/
    > preloaded-images-k8s-v16-v1...: 504.42 MiB / 504.42 MiB  100.00% 1.90 MiB
* Creating docker container (CPUs=2, Memory=1819MB) ...
* 正在 Docker 20.10.12 中准备 Kubernetes v1.23.1…
  - kubelet.housekeeping-interval=5m
  - Generating certificates and keys ...
  - Booting up control plane ...
  - Configuring RBAC rules ...
* Verifying Kubernetes components...
  - Using image gcr.io/k8s-minikube/storage-provisioner:v5
* Enabled addons: storage-provisioner, default-storageclass
* kubectl not found. If you need it, try: 'minikube kubectl -- get pods -A'
* Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default
# docker ps 可以看到 minikube的容器已经启动了
[minikube_user@centos7-2 ~]$ docker ps
CONTAINER ID   IMAGE                                 COMMAND                  CREATED              STATUS              PORTS                                                                                                                                                                        NAMES
8ddccab8debb   gcr.io/k8s-minikube/kicbase:v0.0.29   "/usr/local/bin/entr…"   About a minute ago   Up About a minute   127.0.0.1:49157->22/tcp, 127.0.0.1:49156-                                      >2376/tcp, 127.0.0.1:49155->5000/tcp, 127.0.0.1:49154->8443/tcp, 127.0.0.1:49153->32443/tcp   minikube



```

