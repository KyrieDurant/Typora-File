## JS对象

- 创建空对象后，可以往对象里添加==属性==和==方法==

  ```js
  // 利用 new Object 创建对象
  var obj = new Object();//创建了一个空对象
  obj.name = 'kd';// 添加属性
  obj.age = 35;
  // 添加方法
  obj.dy = function() {
      var a = 7;
      console.log(a);
  }
  console.log(this.obj);
  
  
  // 直接创建对象
  var player = {
      name:'kd',
      number: 7,
      like: function() {
          console.log('Play Basketball !');
      }
  }
  ```

- 构造函数

  ```js
  // 构造函数的语法格式
  function 构造函数名() {
      this.属性 = 值;
      this.方法 = function() {}
  }
  new 构造函数名();
  
  // 1.构造函数名首字母要大写
  // 2.构造函数不需要return,就能返回结果
  // 3.调用构造函数，必须使用 new
  // 4.构造函数只要new Player() 调用函数就创建一个对象 kd = {};
  // 5.属性和方法前面必须添加this
  // 例：
  function Player(uname,age,number) {
      this.name = uname;
      this.age = age;
      this.number = number;
      this.play = function(bas) {
          console.log('like',bas);
      }
  }
  var kd = new Player('kd',35,7)
  console.log(kd);// {name: 'kd', age: 35, number: 7}
  console.log(kd.number);// 7
  kd.play('basketball');//执行kd对象里面的play方法
  ```

- 遍历对象

  ```js
  var player = {
      name: 'kd',
      number: 7,
      like: function () {
          console.log('Play Basketball !');
      }
  }
  //通过for in 来进行遍历
  for (var k in player) {
      console.log(k); // k 变量 输出得到的是属性名
      console.log(player[k]); // player[k] 得到的是属性值
  }
  ```

  

- 封装自己的数学对象

  ```js
  // 利用对象封装自己的数学对象  里面有PI最大值的最小值
  var myMath = {
      PI: 3.14,
      max: function(){
          var max = arguments[0];
          for(let i = 1; i<arguments.length;i++){
              if(arguments[i] > max){
                  max = arguments[i];
              }
          }
          return max;
      },
      main: function(){
          var main = arguments[0];
          for(let i = 1; i<arguments.length;i++){
              if(arguments[i] < main){
                  main = arguments[i];
              }
          }
          return main;
      },
  }
  console.log(myMath.PI);// 3.14
  console.log(myMath.max(2,7,11,35));// 35
  console.log(myMath.main(2,7,11,35));// 2
  ```

  

- 取随机数

  ```js
  // 得到连个数之间的随机数，并且包含这2个数
  function getRandom(min,max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(getRandom(1,10));
  // 随机点名
  var arr = ['kd','ky','hd','sc','pg'];
  console.log('本次选中：', arr[getRandom(0,4)]);
  ```

  

- 猜数字游戏

  ```js
  // 输入数字猜1-10之间的数字
  function getRandom(min,max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var random = getRandom(1,10);
  console.log(random);
  while (true) { // 死循环
      var num = prompt('猜1-10之间的数字');
      if(num > random) {
          alert('你猜大了');
      } else if(num < random) {
          alert('你猜小了');
      } else {
          alert('恭喜你猜对了！');
          break;//退出整个循环结束程序
      }
  }
  ```

  

- Date() 日期对象 是一个构造函数 必须使用new来调用创建我们的日期对象

  ```js
  var newTime = new Date();
  console.log(newTime);// 获取当前时间
  
  // 格式化日期 年月日
  var date = new Date();//获取当前时间
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var dates = date.getDate();
  var arr = ['星期日','星期一','星期二','星期三', '星期四','星期五','星期六'];
  var day = date.getDay();
  console.log('今天是'+ this.year + '年' + this.month + '月' + this.dates + '日\t' + arr[this.day]);
  // 打印结果：今天是2023年1月11日	星期三
  console.log(date.getHours);//时
  console.log(date.getMinutes);//分
  console.log(date.getSeconds);//秒
  
  // 封装一个函数返回当前的时分秒 格式08:08:08
  function getTime() {
      var time = new Date();//获取当前时间
      var h = time.getHours();//时
      h = h < 10 ? '0' + h : h;//h是否小于10，小于的话在前面补0，否则输出h
      var m = time.getMinutes();//分
      m = m < 10 ? '0' + m : m;
      var s = time.getSeconds();//秒
      s = s < 10 ? '0' + s : s;
      return h + ':' + m + ':' + s;
  }
  console.log(getTime());//返回当前时间
  ```

  

学到166
