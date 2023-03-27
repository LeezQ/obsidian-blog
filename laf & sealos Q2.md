
1. 产品相关
	1. 应用市场， 函数市场
	2. 计量计费、按量付费
	3. 扩缩容
	4. 应用 dashboard
	5. 数据库备份
	6. oss 备份
	7. 日志模块优化
	8. 插件能力
	9. AI 能力场景拓展
	10. 核心开发体验
		1. 函数界面（列表排序、保存、历史版本？）
		2. 控制台日志优化
		3. Command + K 的快捷方式
	11. 团队版，开发协作能力
	12. 三方登录（支持 github / wechat / oauth）
2. 安全
	1. 系统安全
		1. 定期漏洞检查
		2. 容器安全
		3. 防攻击，DDos
	2. 内容安全
		1. oss、db、函数
	3. 合规安全
		1. 实名认证
3. . 稳定性
	1. 管理员相关工具建设
		1. laf 管理员 dashbord
	2. 私有化快速部署
	3. 运维监控、告警
	4. 集群备份（laf server 的本身 mongo数据库、oss）
4. 存储能力支撑
	1. oss proxy ，支持 s3
	2. 稳定、费用低（对接 ali oss ?）
	3. cdn


sealos
1. deploy manager 上线，公有云营收 10w

目前随着 chatGPT 以及 openAI 的能力指数级别的能力增长，极大地降低了 AI 的落地成本，这是能改变生产力、生产关系的一次变革，不亚于第二次工业革命所带来的影响，而这个变化已然来到了大规模变革的前夜，这个时候，我们作为一家创业公司，特别是技术类的创业公司，我们需要及时拥抱变化，探索 AI 的落地。
这个落地分为两部分：
1. AI 在公司内部的落地。
2. AI 在公司产品内的落地

探索ai能力在公司内部的落地，我们需要去学会各种 AI 能力去重塑公司内部的生产力，就像电脑刚诞生时，我们需要使用电脑上的软件去解决各类问题一样，我们也需要体验各种 AI 产品带来的变革，比如：
1. 使用 copilot 开发代码
2. 使用 midjourney 制作插图及运营素材
3. 使用 office copilot 制作 ppt 
4. 使用 Notion  AI 写作文档
5. 使用 docs AI ，制作公司知识库
6. 使用行政 copolit ，进行财务规划、员工薪酬、发票管理等

未来的公司，可能就是 人 + AI Copilot ，甚至在一些场景下，是 AI Pilot + 人。

探索 AI 在公司产品内的落地，目前公司两大产品， sealos + laf ，本身需要去内置 AI 能力，有 AI 能力的产品，对没有 AI 的是一个降维打击，特别是 chatGPT 提供了自然语言的这种。因为没有 AI ，做的再多，可能只是效率上的改变，这个程度有限，而有了 AI ，可能是颠覆性的改变。

举个例子：
我需要部署一个 k8s 集群，现在的方式是，通过 sealos 的命令去把 master + node 节点等部署进来，但是如果有个 k8s copilot ，是不是可能就只要跟他说一句话就可以了？ 「帮我部署一个 k8s 集群，1个 master, 3 个 node」，而且还能 AI 自运维，完全不需要去管系统环境。因为本质上，如果没有 AI ，是人在操作这些事情，所以这些是完全可以被 AI 替代的，而且我认为 AI 绝对可以比人做的更好，加上运维领域，都是一些经验知识，是 AI 特别擅长的领域。

### 关于内部如何协同
鉴于目前 laf 跑得相对来说比较快，加上已经开始商业化，可以在公司层面做一些资源的倾斜。
目前 laf 团队遇到的问题，人员紧缺，核心开发成员两人，需要支持产品迭代、运维支持、技术调研、群内解答、问题排查等工作。因此需要让专业的人做专业的事，把运维及稳定性相关工作交由 sealos 及 sealfs 支撑。laf 团队本身关注产品迭代及功能开发相关的事情。