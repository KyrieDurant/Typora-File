## Ajax请求

```js
// jquery调用ajax方法：
            // 格式： $.ajax({});
            // 参数：
                    // type： 请求方式GET/POST
                    // url:   请求地址url
                    // async: 是否异步，默认是true表示异步
                    // data: 发送到服务器返回的地址
                    // dataType: 与其服务器返回的数据类型
                    // contentType: 设置请求头
                    // success: 请求成功时调用这个函数
                    // error: 请求失败时调用这个函数
```

- get、post、getJSON请求语法

  ```js
  $.get();
  //语法： $('请求地址'，'请求参数',function(形参){});
  
  // get请求
  $.get('./js/go.json',{},function(data){
      console.log('拿到数据',data);
  })
  
  //  post请求
  let cdata = {
      id: 1
  }
  $.post('./js/go.json',cdata,function(data){
      console.log('拿到数据',data);
  })
  
  //  getJSON请求
  //  注：getJSON方式要求返回的数据格式满足json格式(json字符串)
  $.getJSON('./js/go.json',{},function(data){
      console.log('拿到数据',data);
  })
  ```

  

  