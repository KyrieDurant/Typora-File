### uniapp接口请求成功后存放token

> 登录接口请求成功后返回唯一值，把key存入Local Storage中进行数据缓存

:package:**==存放==**

#### uni.setStorage(OBJECT)

```js
uni.setStorage({
	key: 'storage_key',//本地缓存中的指定的key的名字
	data: 'hello',//需要存储的key的内容
	success: function () {
		console.log('success');
	}
});

```

:ideograph_advantage:**==取出==**

> 请求接口时所需要相对应的key来请求，可用以下方法取出存放的key来使用

#### uni.getStorage(OBJECT)

```js
uni.getStorage({
	key: 'storage_key',//存放进入key的名字
	success: function (res) {
		console.log(res.data);//拿到对应key相对应的值
	}
});

```

