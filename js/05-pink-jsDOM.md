## JS-DOM

- 简单的获取元素

  ```js
  <div id="name">Kyrie</div>
  <ul id="ol">
      <li>天时地利人和</li>
  <li>冲冲冲！</li>
  </ul>
  <script>
      var con = document.getElementById('name');
  console.log(con);
  console.log(typeof con);
  console.dir(con);
  
  //获取某类标签元素
  // 返回的是 获取过来元素对象的集合 以伪数组的形式存储
  var lis = document.getElementsByTagName('li');
  console.log(lis);// 得到伪数组
  console.log(lis[1]);
  // 循环遍历得到的lis
  for(var i=0;i<this.lis.length;i++){
      console.log(lis[i]);
  }
  
  // 获取ol元素
  var ys = document.getElementById('ol');
  console.log('ol元素',ys);
  console.log('ol里的li元素', ol.getElementsByTagName('li'));
  ```

- 选择器

  ```js
  <body>
      <div class="box">盒子</div>
      <div class="box">盒子1</div>
      <div id="nav">
          <ul>
              <li>首页</li>
              <li>产品</li>
          </ul>
      </div>
      <script>
          // 1. document.getElementsByClassName('类名');// 根据类名返回元素对象集合
          var boxs = document.getElementsByClassName('box');
          console.log(boxs);
          // 2. document.querySelector('选择器'); // 根据指定选择器返回第一个元素对象
          var xzq = document.querySelector('.box');
          console.log(xzq);
          var nav = document.querySelector('#nav');
          console.log(nav);
          // 3. document.querySelectorAll('选择器'); // 根据指定选择器返回
          var syhz = document.querySelectorAll('.box');
          console.log(syhz);
          var lis = document.querySelectorAll('li');
          console.log(lis);
  
      </script>
  </body>
  ```

- 获取body元素和获取html元素

  ```js
  // 获取body元素
  var quebody = document.body;
  console.log(quebody);
  // 获取html元素
  var quehtml = document.documentElement;
  console.log('获取html元素', quehtml);
  ```

- 简单的交互事件

  ```js
  <body>
      <div>
          <button id="btn">点击弹窗</button>
      </div>
      <script>
          var djan = document.getElementById('btn');
          djan.onclick = function() {
              alert('弹出来啦！');
          }
      </script>
  </body>
  ```

- 常见的鼠标点击事件

  | 鼠标事件    | 触发条件         |
  | ----------- | ---------------- |
  | onclick     | 鼠标点击左键触发 |
  | onmouseover | 鼠标经过触发     |
  | onmouseout  | 鼠标离开触发     |
  | onfocus     | 获得鼠标焦点触发 |
  | onblur      | 失去鼠标焦点触发 |
  | onmousemove | 鼠标移动触发     |
  | onmouseup   | 鼠标弹起触发     |
  | onmousedown | 鼠标按下触发     |

- 操作元素

  修改元素内容

  ```js
  <body>
      <button>点击显示时间</button>
      <div id="time">某个时间</div>
      <script>
          var btn = document.querySelector('button');
          var cha = document.querySelector('#time');
          console.log(cha);
          btn.onclick = function(){
              cha.innerText = getDate();
          }
          function getDate(){
              var date = new Date();
              var year = date.getFullYear();
              var month = date.getMonth() + 1;
              var dates = date.getDate();
              var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
              var day = date.getDay();
              return '今天是：' + year + '年'+month+'月'+dates+'日  '+ arr[day];
          }
      </script>                                                                            
  </body>
  ```

- innerText 和 innerHTML的区别

  ```js
  // innerText 和 innerHTML 的区别
  // 1. innerText 不识别html标签 非标准 去除空格和换行
  var wzi = document.querySelector('.tex');
  // wzi.innerText = '<strong>今天是：</strong> 2023';//这里识别不出来strong标签
  // 2. innerHTML 识别html标签 W3C标准 保留空格和换行
  wzi.innerHTML = '<strong>今天是：</strong> 2023'; //能够识别出strong标签
  ```
  
- 点击切换图片

  ```js
  <button id="pic1">极光</button>
  <button id="pic2">夕阳</button>
  <img id="tp" src="image/jg.jpg" alt="" style="width: 300px;">
  <script>
  	var pic1 = document.getElementById('pic1');
  	var pic2 = document.getElementById('pic2');
  	var tp = document.querySelector('img');
  	pic1.onclick = function(){
      	tp.src = "image/jg.jpg";
  	};
  	pic2.onclick = function(){
      	tp.src = "image/南极洲.jpg";
  	}
  </script>
  ```

- 根据判断时间去切换图片和文字

  ```js
  <img id="tp" src="../image/jg.jpg" alt="" style="width: 300px;">
  <div id="txt">时间</div>
  <script>
      var pic = document.querySelector('#tp');
  	var con = document.querySelector('#txt');
  	var nowTime = new Date();
  	console.log(nowTime);
  	var times = nowTime.getHours();
  	// var times = 18;//测试
  	console.log(times);
  	if(times < 12){
      	console.log(con);
      	pic.src = '../image/jg.jpg';
      	con.innerHTML = '上午好！';
  	} else if(times < 13){
      	pic.src = '../image/milu.jpg';
      	con.innerHTML = '中午好！';
  	} else if(times < 19){
      	pic.src = '../image/dxg.jpg';
      	con.innerHTML = '下午好！';
  	} else if(times <= 23){
      	pic.src = '../image/南极洲.jpg';
      	con.innerHTML = '晚上好！';
  	}
  
  </script>
  ```

- 修改表单属性

  ```js
  <button>点击</button>
  <input type="text" value="请输入内容">
      <script>
      var btn = document.querySelector('button');
  	var ipt = document.querySelector('input');
  	btn.onclick = function(){
      	ipt.value = '被点击了';
      	this.disabled = true;
  }
  </script>
  ```

- 输入密码后切换显示和隐藏密码

  ```js
  <div class="box">
      <label for="">密码：</label>
  <input class="ipt" type="password" value="" >
      <div onclick="qiehuan" class="switch">显示</div>
  </div>
  <script>
          var mima = document.querySelector('.ipt');
  var qieh = document.querySelector('.switch');
  var flag = 0;
  console.log(qieh);
  qieh.onclick = function(){
      if(flag == 0){
          mima.type = 'text';
          qieh.innerHTML = '隐藏';
          flag = 1;
      } else {
          mima.type = 'password';
          qieh.innerHTML = '显示';
          flag = 0;
      }
  };
  </script>
  ```

- 修改元素样式

  ```js
  // style样式
  <style>
      .box {
          width: 200px;
          height: 200px;
          background-color: rgba(41, 187, 175, 0.637);
      }
  </style>
  // body里的样式
  <div class="box"></div>
  <script>
      var xiug = document.querySelector('.box');
  console.log(xiug);
  xiug.onclick = function(){
      this.style.width = '400px';
      this.style.backgroundColor = '#ccc';
  }
  </script>
  ```

- 点击关闭图片

  ```js
  <div>
      <img src="../image/jg.jpg" class="tup" style="width: 100px; display: block;">
          <button id="gbtp">关闭图片</button>
  </div>
  <script>
      var tp = document.querySelector('.tup');
      var btn = document.querySelector('#gbtp');
      var a = 0;//默认打开状态
      btn.onclick = function(){
          if(a == 0) {
              tp.style.display = 'none';
              btn.innerHTML = '打开图片';
              a = 1;
          } else {
              tp.style.display = 'block';
              btn.innerHTML = '关闭图片';
              a = 0;
          }
      }
  </script>
  ```

- 显示隐藏文本框内容

  ```js
  <input class="ipt" type="text" value="搜索" style="color: #999;">
  <script>
      var con = document.querySelector('.ipt');
      // 得到焦点事件 onfocus
      con.onfocus = function() {
          if(con.value == '搜索'){
              console.log('得到焦点');
              con.value = '';
          }
      } 
      // 失去焦点事件 onblur
      con.onblur = function(){
          if(con.value == '') {
              console.log('失去焦点');
              con.value = '搜索';
          }
      }
  </script>
  ```

- 样式修改

  ```js
  //两个css样式
  <style>
      .wb{
          width: 200px;
          height: 100px;
          background-color: rgb(241, 164, 63);
      }
  .wbxgai{
      width: 100px;
      height: 100px;
      color: #fff;
      font-size: 40px;
      font-weight: 800;
      background-color: rgb(63, 161, 241);
  }
  </style>
  // body的内容
  <div class="wb">文本</div>
  <script>
      // 使用 element.style 获得元素样式修改
      var test = document.querySelector('.wb');
      test.onclick = function(){
          // 1.书写好class之后，直接切换class的名字,但是之前的样式会被覆盖掉
          // test.className = 'wbxgai';
          // 2.如果希望样式不会被覆盖，就直接再加上去后面的样式
          test.className = 'wb wbxgai';
      }
  </script>
  ```

- 密码验证信息

  ```js
  
  ```

  

> ​		当事情发展到完全超出你的能力，你根本无法去影响的时候，你只能接受。就算你感到痛苦和烦恼，难道结局会改变吗？与其烦恼这种事情，不如不去管它。我们的时间很宝贵，不要用于那些改变不了的事情，而要用于你能改变的事情。

>  ​		请赐予我力量，全力改变那些可以改变的事情，平静接受那些无能为力的事情，拥有智慧区分这两者。—–宁静祷文

> 耐冷耐苦，耐劳耐闲。—–《曾国藩家书》

> ​		人生总有不顺的时候，不必勉强冲刺，就把它当作老天给的悠长假期，好好享受这个假期。突然一天假期结束，时来运转，人生才真正开始。——《悠长假期》

> “你还年轻，别被体制的条条框框同化了，否则，你永远只能按照别人规划好的路走，如果你没有背景，你的这条路，还容易被有背景的人顶替。你只能是别人的手脚，替别人赚钱，你的时间是别人的，你的钱是别人给你的，奋斗一生，也不会有出路。”

> 我们应该做一个积极行动的悲观主义者，对未来低期望，但只要是值得的，就坚定去做。当一个有前途的新项目出现在你面前时，不妨认定它很难成功，但是如果你相信这个项目，即便赚不到钱你也想做，那么无论如此，你要去试一下。













经度：106 : 32 : 12.9071039999834625          106.32129071039999834625

纬度：29 : 33 : 37.6391600000059157             29.33376391600000059157

106.54064600000000000000,29.55765400000000000000

106.32129071039999834625,29.33376391600000059157