在 laf 的开发过程中，我们使用的是 zustand + react-query 的组合，之前的想法是让 zustand 做为主的状态管理库，但是 react-query 确实在处理请求相关的封装时，又非常好用，比如可以获取请求阶段的各种状态，可以方便的处理轮询等。所以之前都在想着怎么能用 zustand 的库，又能用到 react-query 在请求相关的封装。

zustand 作为轻量级的状态管理库，是非常好用的，没有太多的概念，支持 hooks、ts 友好、异步处理方便，完全的全局状态，加上 Immer 这样的中间件，在处理状态时非常方便，对于大部分项目完全够用。

使用 zustand 时，唯一的问题是在发起异步请求时，如何处理请求状态。比如以下代码，
```ts
// store.ts
updateStorage: async (storage) => {
	const globalStore = useGlobalStore.getState();

	const res = await BucketsControllerUpdate({
	  appid: globalStore.currentApp,
	  ...storage,
	  name: storage.shortName,
	});
	return res;
  },
```

```tsx
// button.tsx
<Button onClick={async() => { 
	const res = await store.updateStorage(data); 
	if (res.data) {
		message.success('update succeed');
	}
}}>submit</Button>
```
这是一段比较典型的调用代码示例，但是这里的代码在交互上是略显粗糙的，没有点击后没有 Loading、error 错误处理，如果要加上，那我们需要给 store 加一个 response 的字段单独处理，如下：

```ts
// store.ts
updateStorageRes: {
  loading: false,
  res: {},
  error: null
},

updateStorage: async (storage) => {
	const globalStore = useGlobalStore.getState();
	set((state) => state.updateStorageRes.loading = true);
	const res = await BucketsControllerUpdate({
	  appid: globalStore.currentApp,
	  ...storage,
	  name: storage.shortName,
	});
	set((state) => {
		state.updateStorageRes.loading = false;
		state.updateStorageRes.res = res;
	});
	return res; // 为了在组件中能直接接收到数据，所以这里还是要返回 res
},

// button.tsx
<Button loading={store.updateStorageRes.loading} onClick={async() => { 
	const res = await store.updateStorage(data); 
	if (res.data) {
		message.success('update succeed');
	}
}}>submit</Button>

<span>{store.updateStorageRes.res.data.name}</span>
```


可以看到，为了交互上的优雅，我们做了很多额外的代码来处理相关的事情，而且这些都是很范式的代码，看上去很好理解，但是写多了是一件很枯燥的事情，而 react-query 正是帮我们去封装了这个事情。

如果使用 react-query ，我们可以怎么做？

```tsx
// button.tsx
const updateMutation = useMutation((storage) => BucketsControllerUpdate(storage));

<Button loading={updateMutation.loading} onClick={async() => { 
	const res = await updateMutation.mutateAsync(data); 
	if (res.data) {
		message.success('update succeed');
	}
}}>submit</Button>

<span>{updateMutation.data.name}</span>
{ updateMutation.error ? 'something is wrong...' : null }
```

整个代码是十分简洁，且易于理解，没有多余的范式代码，相应的可维护性也更高，俗话说「少写代码就是生产力」。

但是之前使用的时候，一直有个疑惑，即：我服务端请求回来之后，如果我要在别的地方使用，是不是还得把状态放到 global state 存储起来？如果需要的话，我可能还是得要通过比如 zustand 这样来维护前端状态？

所以在之前使用的时候，一直有个误区，即服务端请求完后，我依然在 zustand 中把服务端请求返回的数据维护起来。所以在用的过程中比较纠结，如果是这样的话，那我直接用 zustand 来处理不是更方便么？状态、请求都在一个地方，有点类似 MVC 中 `controller`  的角色。一个模块一个 controller ，岂不是更清晰么？

直到看到了 react-query 作者写的两篇文章：
[https://tkdodo.eu/blog/practical-react-query](https://tkdodo.eu/blog/practical-react-query);
[# Does React Query replace Redux, MobX or other global state managers?](https://tanstack.com/query/v4/docs/guides/does-this-replace-client-state?from=reactQueryV3&original=https://react-query-v3.tanstack.com/guides/does-this-replace-client-state)

这里面提到的非常重要的一点，即在 react query 的概念中，没有什么全局状态和局部状态的划分，而是说 「server side state」 和 「client side state」
![[Pasted image 20221208120000.png]]

那从这个角度来看的话，就比较好理解了。最佳实践是：所有涉及到跟服务端交互的状态，都应该交给 react-query，一些客户端的状态，交给 state 或者 context 或者 zustand 这样的状态管理库。

那为什么可以或者应该这么做呢？

这个就得从真实业务场景来看了，其实在我们的业务中，很多时候大部分的数据或者说状态来源都是从服务端获取的，比如这样一个列表：
![[Pasted image 20221208120427.png]]

这里面所有动态的数据，都是由服务端获取得到的，客户端拿到之后，只是做了一次展现，那么完全没有必要在客户端再维护一遍这些数据，维护了也没太大的意义，因为这些数据并不由客户端来决定。

例如这里面的「删除」功能，应该是需要触发服务端接口、然后重新获取服务端数据后做展现，如果前端拿到数据后，先做了一次本地状态的变更删除，那如果服务端请求失败，展示出来的交互状态就会变成 「数据先消失」 -> 「数据又重新出来」 的情况。

![[Pasted image 20221208120700.png]]

基于以上几点，我认为把应用的状态由之前的 「全局状态、局部状态」到 「服务端状态、客户端状态」是合理的，这样反而让应用中真正需要处理的状态变的很少，可能在真实的应用场景中，80% - 90% 都是服务端状态，而这些状态是可以都交给 `react query` 来维护的，那这样客户端需要维护的状态就极少。

然后可以将服务端状态单独维护起来，变成应用的 service，供组件来调用，另外由于这些代码也是很标准 + 模板化的， 所以后期也是可以由工具来直接生成，类似在 api 中做的那样。
![[Pasted image 20221208135537.png]]

最后，总结下这样做的好处。
首先，服务端状态剥离之后，客户端需要维护的状态变得极少，甚至不需要 zustand 这样的状态库了。
其次，所有涉及到服务端请求的代码都被 hooks 封装起来，调用方便，不需要像 zustand 那样写很多冗长的代码。

总的来说，就是代码更少，应用状态更清晰了。