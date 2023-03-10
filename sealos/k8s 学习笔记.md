![[IMG_9408.png]]
kubeadm（管理员，node 节点通过 join 加入到 master）
kubectl （命令行工具）
kube-proxy (代理人)

master 节点的区别：
多了 api-server etcd 等服务

kubectl get pod -owide  查看 pod 详细信息，比如 ip 地址等

service: 
将一组 pod 统一暴露，pod 的服务发现与负载均衡

每个 pod 都有独立的 ip


ClusterIP : 集群内
NodePort: 对外


kubectl get svc  (kubectl get service) 

kubectl expose deploy my-dep --port=8000 --target-port=80 --type=ClusterIP： 集群内访问

kubectl expose deploy my-dep --port=8000--target-port=80 --type=NodePort： 集群外访问

![[Pasted image 20230223095359.png]]


![[Pasted image 20230223095730.png]]


![[Pasted image 20230223150358.png]]

![[Pasted image 20230223153718.png]]