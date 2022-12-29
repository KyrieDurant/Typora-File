## uniapp小方法

- ==uniapp的页面高度设置为100%==

  在css样式里定义page的高度为100%，然后再在给元素定义高度100%,这样页面的高度就能过自适应100%了

  ```vue
  <template>
  	<view class="content">
      	<!-- 页面内容在这里面写 -->
      </view>
  </template>
  <script>
  </script>
  <style>
  	page{
          height: 100%;
          width: 100%;
      }
      .content{
          display: flex;
          flex-direction: column;
          justify-content: center;
          /* align-items: center; */
          width: 100%;
          height: 100%;
      }
  </style>
  ```

- ==uniapp交互反馈默认弹窗==

  uniapp的默认弹窗是uni.showToast，具体信息到uniapp官网自查

  ```vue
  uni.showToast({
      icon:'none',//这是弹窗的icon
      title: '弹窗内容',
      duration: 2000,//弹出时间
  });
  ```

  其中加载中的弹窗显示和关闭如下

  ```vue
  uni.showLoading({
  	title: '加载中'
  });
  //关闭弹窗的代码为下，加载成功后添加下面代码就可关闭弹窗
  uni.hideLoading();
  ```

  

