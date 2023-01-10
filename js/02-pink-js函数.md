## js函数

- 基本语法

  ```js
  // 基本语法
  function getdy() {
      console.log('hello！');
  }
  this.getdy();//函数调用，不调用就不执行
  ```

  

- 参数调用

  ```js
  // 参数调用
  // 调用函数的时候传实参food进去，在使用函数的形参用row命名(也可以用其他的如a,b,c都可以)
  var food = '土豆肉丝盖饭';
  function getcs(row) { // row为形参，用来接收实参
      console.log(row);// 打印出来 土豆肉丝盖饭
  }
  this.getcs(food);//函数调用,food为实参，直接传入
  ```

  

- 例：输入两个数据求和

  ```js
  // 求任意两个数的和
  var num1 = prompt('请输入第一个数字');
  var num2 = prompt('请输入第二个数字');
  function getXj(a,b) {
      console.log(parseFloat(a) + parseFloat(b));
      let he = parseFloat(a) + parseFloat(b);
      alert('两个数相加等于：'+ he);
  }
  this.getXj(num1,num2);
  ```

  

- return返回结果

  ```js
  // return返回结果
  function getresult(){
      let a = 7;
      return a;
  }
  this.getresult();
  console.log(this.getresult());// 拿到值:7
  ```

  

- 两个值比大小

  ```js
  // 利用函数 求两个数最大值
  var num1 = prompt('请输入第一个数字');
  var num2 = prompt('请输入第二个数字');
  function getMax(a,b){
      return a>b ? a : b;
  }
  this.getMax(num1,num2);
  alert(num1 + '和' + num2 + '相比,'+ this.getMax(num1,num2) + '大');
  ```

  

- 求数组里的最大值

  ```js
  // 利用函数求数组最大值
  var arr = [35, 7, 11, 2, 13, 1];
  var re = this.getMaxnum(this.arr);
  function getMaxnum(row) {
      var max = row[0];
      for (let i = 1; i <= row.length; i++) {
          if (row[i] > max) {
              max = row[i];
          }
      }
      return max;
  }
  console.log('数组[' + this.arr + ']里最大的数字是' + re);//35
  
  // return还是终止函数，方法里的代码执行到return之后就停止执行
  // return只能返回一个值,想输出多个可以输出一个数组包含多个值或者{}包含多个值
  //  例：求任意两个数的加减乘除结果
  var num1 = prompt('请输入第一个数字');
  var num2 = prompt('请输入第二个数字');
  var re = this.getjg(num1, num2);
  function getjg(a, b) {
      let jg = [parseFloat(a) + parseFloat(b), a - b, a * b, a / b];
      return jg;
  }
  console.log(re);
  
  ```
  

> - break ：结束当前循环体 (如for、while)
> - continue ：跳出本次循环、继续执行下次循环 (如for、while)
> - return ： 不仅可以跳出循环体，还能返回return语句中的值，同时还可以结束当前的函数体内的代码

- arguments的使用

  ```js
  function chuanc() {
      // arguments存储了传递过来的实参,以伪数组的形式来展示
      console.log('接收实参',arguments);
      // 打印结果为1,3,7
  }
  this.chuanc(1,3,7);
  
  // 利用函数求任意个数的最大值
  var re = this.getMax(1,2,4,9,11);
  function getMax() {
      var max = arguments[0];
      for(let i = 1; i<arguments.length;i++){
          if(arguments[i]> max){
              max = arguments[i];
          }
      }
      return max;
  }
  console.log(re);//11
  ```

  

- 函数的两种声明方式

  1、利用函数关键字自定义函数（命名函数）

  ```js
  function fn() {
      console.log('111');
  }
  fn();
  ```

  2、函数表达式(匿名函数)

  ```js
  // var 变量名 = function() {};
  var fun = function(aru) {
      console.log('222');
      console.log(aru);//abc
  }
  fun('abc');
  // (1) fun是变量名 不是函数名
  // (2) 函数表达式声明方式跟声明变量差不多，只不过变量里存的是值 而函数表达式里存的是函数
  // (3) 函数表达式也可以进行传递参数
  ```

  

- 预解析案例

  ```js
  // 预解析案例
  var num = 10;
  fun();
  function fun(){
      console.log(num);//输出结果为undefined
      var num = 20;
  }
  //预解析相当于下面代码
  var num;
  function fun(){
      var num;
      console.log(num);//输出结果为undefined
      num = 20;
  }
  num = 10;
  fun();
  ```

  

- 代码声明

  ```js
  var a = b = c = 9;// 相当于var a = 9; b = 9; c = 9;它的b和c直接赋值，并没有var声明，当全局变量看
  // 集体声明时应该用逗号分隔
  var a = 9, b = 9, c = 9;// 这时三个都会var进行声明
  ```




学到142

