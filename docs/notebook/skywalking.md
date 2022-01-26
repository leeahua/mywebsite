# skywalking 安装



# 第一步 安装elasticsearch

```
# yum  官网 https://www.elastic.co/guide/en/elasticsearch/reference/7.15/rpm.html#rpm-repo
Create a file called elasticsearch.repo in the /etc/yum.repos.d/ directory for RedHat based distributions, or in the /etc/zypp/repos.d/ directory for OpenSuSE based distributions, containing:

[elasticsearch]
name=Elasticsearch repository for 7.x packages
baseurl=https://artifacts.elastic.co/packages/7.x/yum
gpgcheck=1
gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
enabled=0
autorefresh=1
type=rpm-md
# 安装方式 下面选择其一即可
sudo yum install --enablerepo=elasticsearch elasticsearch  
sudo dnf install --enablerepo=elasticsearch elasticsearch 
sudo zypper modifyrepo --enable elasticsearch && \
  sudo zypper install elasticsearch; \
  sudo zypper modifyrepo --disable elasticsearch
```



## 第二步 安装skywalking