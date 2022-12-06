## Za-Text

- **vscode扩展：==Vue  VSCode  Snippets== **

> 在vscode里安装完成扩展之后，创建新的vue文件完成后，输入vbase就可以快速得到vue的初始结构。

![image-20221205091820105](image-Files/vbase)

- video标签的层级最高，任何被video覆盖之后使用==z-index只能显示==，但是不能进行@click之类的操作。

- uniapp下载文件时，可使用==uni-link==超链接来进行，详细信息往uniapp官网进行查询。

  ```vue
  <uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/"></uni-link>
  ```

- js获取==文件名后缀==

  方法一：subtring()

  使用subtring() 截取字符串，对于文件名中会出现多个点的很有用，从最后一个点的地方截取。

  ```js
  var name="xxxxx.txt";
  var suffix = name.substring(name.lastIndexOf("."));//.txt
  /*只获取后缀*/
  var suffix =name.substring(name.lastIndexOf(".")+1);//txt
  ```

  方法二:正则表达式

  使用正则，对只会出现一个点的适用：

  ```js
  var name="xxxxx.txt";
  var suffix = name.match(/.[^.]+$/)[0];//.txt
  /*只获取后缀*/
  var suffix = name.match(/[^.]+$/)[0];//txt
  ```

  方法三：转为数组

  ```js
  var name="xxxxx.txt";
  var suffix = '.'+name.split('.').pop();//.txt
  ```

  方法四：substr()

  同subtring()的字符串截取

  ```js
  var name="xxxxx.txt";
  var suffix = name.substr(name.lastIndexOf("."));//'.txt'
  var suffix = name.substr(name.lastIndexOf(".")+1);//txt
  ```

  **实例**

  uniapp接口传过来的数据,使用for循环可以看到后缀名

  ```js
  for (let m = 0; m < obtainFile.length; m++) {
      // console.log('拿到图片视频音频', obtainFile[m].remarksUrl);
      for (let n = 0; n < obtainFile[m].remarksUrl.length; n++) {
          console.log('文件名', obtainFile[m].remarksUrl[n]);
          let fileName = obtainFile[m].remarksUrl[n];
          console.log('后缀名为', fileName.substring(fileName.lastIndexOf('.') + 1));
      }
  }
  ```

  用v-if的类型进行后缀名判断,其中的==includes()==方法为查找字符串是否包含对象

  includes()方法实例

  ```js
  var str = "Hello world, welcome to the Runoob。";
  var n = str.includes("Runoob");
  //输出结果为true
  ```

  在template里用v-if进行判断

  ```vue
  <!-- 图片显示 -->
  <view class="feedback-iamge-item" v-for="(m, mindex) in querstionList[index].rectificationUrl" :key="mindex">
      <!-- 后台传过来图片和视频 -->
      <view class="image-box1">
          <image
                 v-if="['jpg', 'png', 'jpeg', 'gif'].includes(m.url.substring(m.url.lastIndexOf('.') + 1))"
                 :src="m.url" @tap="_previewImage(m.url)" mode="aspectFit"></image>
          <video v-if="['mp4'].includes(m.url.substring(m.url.lastIndexOf('.') + 1))"
                 :src="m.url" class="zgfjVideo" :id="'myVideo' + index + mindex"
                 @play="fallScreenVideo(index, mindex)"></video>
      </view>
  </view>
  ```

  