# flume

## 1. 资源获取

```
下载地址
http://archive.apache.org/dist/flume/1.8.0/apache-flume-1.8.0-bin.tar.gz
```



# 2. flume 启动



```
# 参考学习资源 https://flume.apache.org/releases/content/1.9.0/FlumeUserGuide.html
# 启动指令
bin/flume-ng agent --conf conf --conf-file example.conf --name a1 -Dflume.root.logger=INFO,console
# --conf conf 配置文件目录 --conf-file example.conf 启动的配置文件
#Flume 发行版中包含的 Avro 客户端可以使用 avro RPC 机制将给定文件发送到 Flume Avro 源：
$ bin/flume-ng avro-client -H localhost -p 41414 -F /usr/logs/log.10
```

