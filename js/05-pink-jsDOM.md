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
  <style>
  .message{
          display: inline-block;
          font-size: 12px;
          color: #999;
          background-color: #bbe0e0;
      }
  .wrong{
      color: red;
  }
  .right{
      color: green;
  }
  </style>
  <body>
      <div style="display: flex;">
          <input type="password" class="ipt">
          <div class="message">请输入6~16位密码</div>
      </div>
      <script>
          var ipt = document.querySelector('.ipt');
          var message = document.querySelector('.message');
          ipt.onblur = function() {
              if(this.value.length < 6 || this.value.length > 16 ){
                  message.className = 'message wrong';
                  message.innerHTML = '密码格式正确';
              } else {
                  message.className = 'message right';
                  message.innerHTML = '密码格式正确';
              }
          }
      </script>
  </body>
  ```

- 自定义属性的操作

  ```js
  // 获取属性值
  element.属性  获取属性值
  element.getAttribute('属性');
  
  // 区别
  element.属性  获取内置属性值(元素本身自带属性)
  element.getAttribute('属性');  主要获取自定义的属性(标准) 程序自定义的属性
  
  <div id="demo" index="1"></div>
      <script>
          var div = document.querySelector('div');
          // 1.获取元素的属性值
          // (1) element.属性
          console.log(div.id);// demo
          // (2) element.getAttribute('属性') get获取  attribute 属性的意思
          console.log(div.getAttribute('id'));// demo
          console.log(div.getAttribute('index'));// 1
  
  	    // 2.设置元素属性值
          // (1) element.属性 = '值'
          div.id = 'test'; // id变成了test
          // (2) element.setAttribute('属性', '值'); 主要针对自定义属性
          div.setAttribute('index', 2); // index的值变为2
  
          // 3.移除属性 removeAttribute(属性)
          div.removeAttribute('index');//去除index属性
      </script>
  ```

- 节点操作

  ```html
  <body>
      <div class="box">
          <span class="erweima"></span>
      </div>
      <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
      </ul>
      <script>
          // 1. 父节点 parentNode
          var erweima = document.querySelector('.erweima');
          // 获取erweima的父级节点：
          var box = document.querySelector('.box');//传统的获取方法
          
          // 使用parentNode获取
          console.log(erweima.parentNode);//得到父节点box
  
          // 2. 子节点 parentNode.children(非标准)
          var ul = document.querySelector('ul');
          console.log(ul.children);
  
          // 3. firstElenentChild 返回第一个子元素节点
          console.log(ul.firstElementChild);
          console.log(ul.lastElementChild);
  
          // 4. 创建节点元素
          var ol = document.createElement('ol');
          // 5. 添加节点 node.appendChild(child)  node 父级节点  child 子级节点
          // 后面追加元素，类似于数组的push
          ul.appendChild(ol);
          console.log('添加ol标签',ul);
          // 6. 添加节点 node.insertBefore(child, 指定元素);
          var a = document.createElement('a');
          ul.insertBefore(a,ul.children[0]);
          console.log('添加a标签',ul);
          
          // 删除元素 node.removeChild(child);
          ul.removeChild(ul.children[0]);
          
          // 复制节点 node.cloneNode();
          // node.cloneNode(); 括号为空或者里面是false 为浅拷贝，只复制标签不复制标签里的内容
          var lili  = ul.children[0].cloneNode();
          ul.appendChild(lili);
          
      </script>
  </body>
  ```

- 创建元素的三种方式

  ```html
  <body>
      <button>点击</button>
      <p>kyrie</p>
      <script>
      	// 三种创建元素的方式
          // 1.document.write() 创建元素 如果页面文档流加载完毕，再调用会导致页面重绘
          // 一般不用它
          var btn = document.querySelector('button');
          btn.onclick = function(){
              document.write('<div>123</div>');
          }
          // 2. innerHTML 创建元素(常用)
          var inner = document.querySelector('.inner');
          var create = document.querySelector('.create');
          var a = document.createElement('a');
          create.appendChild(a);
          
      </script>
  </body>
  ```

  | 方法                     | 特点                                                         |
  | ------------------------ | ------------------------------------------------------------ |
  | document.write()         | 直接写入页面内容，但文档流执行完毕，则它会导致页面全部重绘(一般不用它) |
  | element.innerHTML        | 将内容写入某个DOM节点，不会导致页面全部重绘(常用，效率高)    |
  | document.createElement() | 创建多个元素，效率较低但是结构清晰                           |

- 注册事件的两种方式

  ```html
  <body>
      <button>传统注册事件</button>
      <button>方法监听注册事件</button>
      <script>
      	var btns = document.querySelectorAll('button');
          // 1. 传统方式注册事件
          // 唯一性：执行函数时只会执行最后一个
          btns[0].onclick = function (){
              alert('弹窗111');
          }
          btns[0].onclick = function (){
              alert('弹窗222');
          }
          // 2. 事件侦听注册事件 addEventListener
          // 先后执行：从上往下执行函数
          btns[1].addEventListener('click',function(){
              alert('哈哈哈');
          })
          btns[1].addEventListener('click',function(){
              alert('哈哈哈滴滴滴');
          })
      </script>
  </body>
  ```

- 删除事件(解绑事件)

  ```html
  <body>
      <div>111</div>
      <div>222</div>
      <script>
      	var divs = document.querySelectAll('div');
          // 1. 传统方式删除事件
          divs[0].onclick = function(){
              alert(11);
              //弹窗完成后销毁方法
              div.onclick = null;
          }
          // 2. removeEventListener 删除事件
          divs[1].addEventListener('click',fn) // 里面的fn 不需要调用小括号
          function fn(){
              alert(22);
              divs[1].removeEventListener('click', fn);// 移除
          }
      </script>
  </body>
  ```

- 事件对象

  ```html
  <body>
      <div>123</div>
      <a>点击</a>
      <script>
      	// 常见事件对象的属性和方法  event 就是一个事件对象
          var div = document.querySelector('div');
          div.onclick = function(event) {
              console.log('事件对象', event);
          }
          // e.target 返回的是触发事件的对象(元素)   this 返回的是绑定事件的对象(元素)
           var a = document.querySelector('a');
          a.addEventListener('click', function(e){
              console.log('触发',e.target);
              console.log(this);
          })
          
      </script>
  </body>
  ```

- 阻止冒泡行为

  dom推荐的标准 stopPragation();    stop 停止   pragation  传播 

- 事件委托

  ```html
  <body>
      <ul>
          <li>111</li>
          <li>222</li>
          <li>333</li>
      </ul>
      <script>
      	// 事件委托原理： 给父节点添加侦听器，利用事件冒泡影响每一个子节点
          var ul = document.querySelect('ul');
          ul.addEventListener('click',function(e){
              // e.target 这个可以得到我们的点击对象
              e.target.style.backgroundColor = 'pink';
          })
      </script>
  </body>
  ```

- 禁止选中文字和右击菜单

  ```html
  <body>
     <div>这是一段不能复制的文字</div>
     <script>
          // 1.contextmenu  禁用右键菜单
          document.addEventListener('contextmenu',function(e){
              e.preventDefault();
          })
          // 2.禁止选中文字
          document.addEventListener('selectstart', function(e){
              e.preventDefault();
          })
     </script> 
  </body>
  ```

- 常用鼠标事件对象

  | 鼠标事件对象 | 说明                                  |
  | ------------ | ------------------------------------- |
  | e.clientX    | 鼠标返回相对于浏览器窗口可视区的x坐标 |
  | e.clientY    | 鼠标返回相对于浏览器窗口可视区的y坐标 |
  | e.pageX      | 鼠标返回相对于文档页面的x坐标(重点)   |
  | e.pageY      | 鼠标返回相对于文档页面的y坐标(重点)   |
  | e.screenX    | 鼠标返回相对于电脑屏幕的x坐标         |
  | e.screenY    | 鼠标返回相对于电脑屏幕的y坐标         |

- 鼠标追踪事件

  ```html
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>图片追随鼠标事件</title>
      <style>
          img {
              position: absolute;
              top: 0px;
              left: 0px;
              width: 40px;
              height: 40px;
          }
      </style>
  </head>
  
  <body>
      <img src="../image/milu.jpg" alt="">
      <script>
          var pic = document.querySelector('img');
          document.addEventListener('mousemove', function (e) {
              // 每次鼠标移动，就会获得最新的鼠标坐标, 把这个x和y坐标作为图片的top和left 的值
              var x = e.pageX;
              var y = e.pageY;
              console.log('x坐标' + x, 'y坐标' + y);
              // -20是为了鼠标能点在图片的中心点
              pic.style.left = x - 20 + 'px';
              pic.style.top = y - 20 + 'px';
  
          })
      </script>
  </body>
  
  </html>
  ```

- 常用键盘事件

  | 方法     | 作用                                                         |
  | -------- | ------------------------------------------------------------ |
  | keyup    | 按键弹起的时候触发(e的key和keyCode不区分字母大小写)          |
  | keydown  | 按键被按下的时候触发(e的key和keyCode不区分字母大小写)        |
  | keypress | 按键被按下的时候触发(但是它不识别功能键，比如ctrl shift箭头等，e的key和keyCode能够区分字母大小写) |

  学到266

> ​		当事情发展到完全超出你的能力，你根本无法去影响的时候，你只能接受。就算你感到痛苦和烦恼，难道结局会改变吗？与其烦恼这种事情，不如不去管它。我们的时间很宝贵，不要用于那些改变不了的事情，而要用于你能改变的事情。

>  ​		请赐予我力量，全力改变那些可以改变的事情，平静接受那些无能为力的事情，拥有智慧区分这两者。—–宁静祷文

> 耐冷耐苦，耐劳耐闲。—–《曾国藩家书》

> ​		人生总有不顺的时候，不必勉强冲刺，就把它当作老天给的悠长假期，好好享受这个假期。突然一天假期结束，时来运转，人生才真正开始。——《悠长假期》

> “你还年轻，别被体制的条条框框同化了，否则，你永远只能按照别人规划好的路走，如果你没有背景，你的这条路，还容易被有背景的人顶替。你只能是别人的手脚，替别人赚钱，你的时间是别人的，你的钱是别人给你的，奋斗一生，也不会有出路。”

> 我们应该做一个积极行动的悲观主义者，对未来低期望，但只要是值得的，就坚定去做。当一个有前途的新项目出现在你面前时，不妨认定它很难成功，但是如果你相信这个项目，即便赚不到钱你也想做，那么无论如此，你要去试一下。
