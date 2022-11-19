---
title: Setup Hadoop on Kubernetes
publish_date: 2022-11-19
---

## Deploy Hadoop using Helm

```sh
helm repo add pfisterer-hadoop https://pfisterer.github.io/apache-hadoop-helm/
helm install hadoop pfisterer-hadoop/hadoop
```

## Webhdfs Test

```sh
kubectl port-forward svc/hadoop-hadoop-hdfs-nn 9870

curl -i -X PUT "http://localhost:9870/webhdfs/v1/user/foo/bar?op=MKDIRS&user.name=root"
curl -i -X GET "http://localhost:9870/webhdfs/v1/user/foo?op=LISTSTATUS"

curl -i -X PUT "http://localhost:9870/webhdfs/v1/test.log?op=CREATE"
curl -i -X POST "http://localhost:9870/webhdfs/v1/test.log?op=APPEND"
```
