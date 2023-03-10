date: 2022/11.15  by allence

LAF 是基于 serverless 架构来做的，如果说 serverless 是一种架构模式的话，那么对LAF 来说，laf 就是 「一个」开发方式。

### 关于商业化
收费是一定要做的，但是收费是一个手段，而不是目的，是为了检验我们产品的商业价值，同时可以为这个产品能够长期发展提供动力。另外收费其实也是一种「责任」，用户因为信任而付费，我们应该为了这份信任而做出更好的产品，提供更好的服务。

### 免费版怎么做？
见过很多产品，不收费把自己慢慢拖死，一收费就把自己搞死。

参考国外的很多产品，比如 figma 、 github、vercel 等，我们还是需要免费模式的，免费模式提供的是最基础的用户使用，让用户可以尽早体验你的产品。
免费模式不能一上来就给很大的优惠力度，而是要循序渐进，按自己的能力去给到用户。为什么？因为如果刚开始就把免费福利提的很高，会有两个问题：
1. 后续收费策略很难做，俗话说「由俭入奢易，由奢入俭难」，如果你免费都已经无限制使用了，那我为什么还要付费呢？
2. 如果你想先免费，然后再对原先免费的功能进行收费，或者变相收费，比如对免费版本进行阉割，都会引起用户极大的反感和不信任感，因为这会让用户觉得自己就是刀板上的鱼肉，任人宰割。

不知道为什么国内的产品都喜欢这么做，先用免费把你「圈」进来，然后等你用久了之后，产生依赖了，再给你慢慢的收割，似乎是把 toC 的运营策略用到了 toB 上，更可耻的是，有些产品收费了，依然还要挂广告。

我觉得 laf 不应该这样，这不是 laf 产品的价值观。

所以回到免费策略，我更希望的是，首先我们尽可能提供了一个可用的让用户可以测试使用的「免费版本」，比如对应用数、存储等做一些限制，但是能够保证用户比如日活在1000左右的完全够用。
等 laf 团队有钱了，比如拿到了融资，或者商业化做的很给力，再慢慢提升免费版本的福利，比如可以支持日活 10000 等。这种模式比较像 github 的路径，以前 github 的免费用户只能创建公开仓库，只有企业版客户才能创建私有仓库，但是后来融资后，这个权限也慢慢放开给免费客户，我觉得这是一种比较好的渐进策略。

### 收费模式怎么做？
说完了免费模式，再来说说收费模式怎么定的问题，现在的收费一般有两种
1. 按月收费，企业版按人头收费，按年的话，可以打个折这样
2. 按用量收费

第一种模式的好处是收费简单（我只需要对用户做控制就行），且会有较大的利润空间（长尾理论），且随着用户量的提升，营收也会一直上去，我只要围绕用户增长去做就行。
但是这真的是一种好模式吗？其实从我个人的角度来讲，我是比较排斥这样的做法的。因为这种做法可能会导致一些沉睡账户依然在给你付钱，（想想你多久没去清理按月订阅的服务了），但是这些人并没有在使用你的服务，或者很低频的在使用你的服务，你却依然在收费，我认为这种行为是不道德的。

我不想出现说，我 laf 用户的业务还没做起来呢，就先被「咔咔咔」的付一堆费用。

所以我会更倾向于第二种模式，即 「按量付费」，我们的服务应该是跟水电煤一样，比如「用电」，我打开开关，开始计费，关掉开关，就停止计费。同时「电」也会分为「民用电」和「公业用电」，然后每个地方的「电」可能收费不一样。
这种模式也更贴近 serverless 云服务的理念。

同时这种模式，也更契合 laf 与用户共成长的「价值观」。

在你的应用还很早期的时候，你可以用「免费版本」来做 poc，等开始有用户量了，切到「基础版」，如果发展很好，再往上就切到「企业版」，「基础版」和「企业版」都是「按量付费」，不会在应用低谷的时候多收钱，甚至可以做到很好的升配和降配。「基础版」和「企业版」的唯一差别是在「并发量」等一些指标上，因为背后用的机器不一样。

### laf 的优势是什么？
相对于一些公有云平台服务来说，肯定是不受平台绑定。
同时 laf 是开源的，所有代码公开可见，不会偷偷摸摸做事情。
但是如果有同样一个产品，举个例子，比如字节的轻服务的团队出去做了一个同样的产品，然后也开源了，那我们跟他们比起来，优势是什么？

我觉得好的产品都应该有这样的文化自信，即：即使你把我的功能都抄去了，甚至短期内做的比我还好，我也不会担心，因为你学不到我的内核，竞争不能顺着对手去思考，而是应该立足于产品自身，想想怎么站在用户的角度去思考。
想想 figma 为什么成功，sketch 为什么失败？


### 关于 laf 的用户画像
想了几个场景。
1. 基于 laf 开发一些自动化工具的接口
	1. 比如每天早上 8:00 自动发送今日天气、穿褡建议给微信。
	2. 比如有些 app 需要做签到任务等。
这个场景的衍生场景是：我可以把这些 api 进行对外开放，比如我做了一个 text to Image 的服务，我可以将这个服务封装为 api 接口进行对外，从而进行收费等。

2.  基于 laf 开发 to C 的网站、小程序等
这个应该是 laf 的一个非常典型的场景了，用户画像是：个人开发者或者小团队。他们会自己开发应用然后运营，也可能是给他自己的客户开发了应用，然后交付给客户。
如何提升这些开发者的体验，以及提供所需要的产品能力是当前的重点。

3. 基于 laf 开发 SaaS 服务
使用 laf 构建了比如 CMS 这样的系统

### 关于公有云
我觉得公有云应该分两个版本，「国内版」以及「海外版」，毕竟两地政策不一样，比如让海外版做「实名认证」或者「人脸识别」就是很奇怪的事情，海外版应该限制更小一些，但是从技术或者产品架构上怎么去做，需要思考。
对于公有云来说，「安全」和「稳定性」是底线，对于私有云来说，怎么让 laf 依赖更少需要去思考

对于一些基础使用用户来说，我希望他不要自己去建 laf 的私有云，直接用公有云就好，因为成本更低，稳定性更好，但同时对 laf 公有云提出了一个要求，就是我得有很方便的导入导出功能，这样即使经历黑天鹅事件，我也可以让我的客户快速部署到自己的私有云上。

### 关于插件
需要插件吗？目前看来似乎是需要的，举个场景，用户需要「发送短信」的能力，现在的做法是需要自己去购买短信服务，然后通过 api 进行对接，如果 laf 提供了的话，用户可以直接通过比如 `sdk.sms.send()` 这样的方式来调用。
另外像 七牛云、mysql 这样的能力如何集成进来。甚至于上面提到的 AI 能力等，这些能力不是每个 app 都需要的，但是这些能力一般也不会免费使用，所以说这些是不是都可以抽象到「插件市场」来扩展 laf 的生态。

## 11.15 补充
### 如果定价跟微信云开发价格一样，用户为什么会选择我们？
LAF 的用户来自两部分，一部分是公有云上用户，一部分是私有云，

