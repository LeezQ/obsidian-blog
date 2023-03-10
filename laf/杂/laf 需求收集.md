> 公共开发变量
![[Pasted image 20221027172826.png|300]]

> 发布回滚
![[Pasted image 20221027172854.png|300]]

> 现在是如何做环境区分的？

建两个应用，然后通过远程部署的方式发布。


> 可以搞个“保存时发起调试”的开关么？



> 导出数据库数据

![[Pasted image 20221027192044.png|200]]

> 支持修改域名
![[Pasted image 20221028092034.png|250]]


> 触发器


![[633B6ED6-8F8C-4044-9BD4-67246548AB97.png|300]]

参考：https://github.com/labring/laf/issues/258?notification_referrer_id=NT_kwDOAA7YDbE0MTgzMDM3NjIxOjk3MjgxMw&amp;notifications_query=repo%3Alabring%2Flaf

> 日志处理等系统运维能力

函数间内部调用
![[23E04ADC-D482-4C92-8C25-88C3E691827A.png|300]]

> 数据库批量导入导出

> 还有云函数超时时间设置的问题

![[wecom-temp-79380-dc0616bb8fa703b47a780a51ce5cbc4c.png|500]]


> 控制面版支持 Body 参数和 headers
> https://github.com/labring/laf/issues/474

支持客户端推送

![[AEF6CC1D-0611-4201-8D17-7A808134C707.jpeg]]



> 云函数 dashboard
> https://github.com/labring/laf/issues/491
![[Pasted image 20221213162418.png|600]]

> 固定 IP 功能
https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#eip

![[0660BA7C-558F-4440-AFED-DD92BC19FBD7.png]]

「allence：“问调调呀。：
在apisix上可以好像配置 但在laf的公有云上好像不行诶 大佬们有没有办法”
------
@问调调呀。 明白了，现在网站托管这块还没完善，1.0 会补足，我记一下」
- - - - - - - - - - - - - - -
还有支持网站托管这块儿的SSL配置 [破涕为笑]cname之后没法使用ssl



> 函数模板
> 

### 安全相关

DDOS ?
应用之间的隔离

压测，安全策略


![[Pasted image 20230223154539.png]]

![[Pasted image 20230307141214.png]]