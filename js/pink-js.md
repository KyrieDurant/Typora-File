js内容

```js
<script>
	//输入框
	prompt('请输入数据');
	//弹出窗口
	alert('输入的数据是');
</script>
//换行：\n

//任何类型与字符串类型相加都是相连的，如:
var a = undefined;
console.log(a + 'kd');//结果为：undefindkd
console.log(a + 7);//结果为：NaN 
var b = null;
console.log(b + 'ky');//结果为：nullky
console.log(b + 2);//结果为：1

//转换为字符型
var num = 7;
var str = num.toString();

//转换为数字型
//1.parseInt(变量)  可以把 字符型转换为数字型的整数
console.log(parseInt('3.14')); // 3 取整
console.log(parseInt('3.94')); // 3 取整
console.log(parseInt('7rpx')); // 7 自动去掉单位
console.log(parseInt('7.11rpx')); // 7 自动去掉单位取整
console.log(parseInt('abc7.11rpx')); // NaN 不能这样的
//2. parseFloat(变量) 可以把 字符型转换为数字型的小数
console.log(parseFloat('3.14')); // 3.14
//3.利用Number(变量)
var str = '123';
console.log(Number(str)); // 123
//4. 利用了算术运算 - * / 隐式转换
console.log('12' - 0); // 12数字型


```

案例：获取弹出输入框的数据

```js
var age = prompt('请输入您的年龄');
//显示到弹出框中
var str = '您今年'+ age + '岁啦！';
alert(str);
```

案例：两个数字相加

```js
var a = prompt('请输入第一个值');
var b = prompt('请输入第二个值');
var c = parseFloat(a) + parseFloat(b);
alert('两个值的和为'+ c);
```



- 转换为布尔型：Boolean()函数

  代表空、否定的值会被转换为false,如 ‘’、0、NaN、null、undefined

  其余值都会转换为true

  

- 解释型语言和编译型语言

  类似于去饭店吃饭

  解释型语言：把点的所有菜都做好后再上桌吃饭(java)

  编译型语言：像吃火锅，边吃边涮，同时进行(JavaScript)



- 算术运算符：加+  减-  乘*  除 /  余%

  ```js
  //1.取余
  console.log(5 % 2);//余1
  //2.浮点数 算数运算里面会有问题
  console.log(0.1 + 0.7);// 0.7999999999999999
  console.log(0.07 * 100);// 7.000000000000001
  //3.不能直接拿浮点数来进行比较是否相等
  var num = 0.1 + 0.2;
  console.log(num == 0.3); //false
  ```

  

- 递增递减

  ```js
  //1.前置递增运算符
  var age = 10;
  ++age;// 和age = age + 1;效果一样
  console.log(age);// 11
  console.log(++age + age);// 相当于11 + 10 = 21;
  
  //2.后置递增运算符
  var num = 7;
  num++;
  console.log(num);// 8
  console.log(num++ + num);// 20
  console.log(num);// 21 这个时候才会+1
  //前置递增：先自加，后返回原值；
  //后置递增：先返回原值，后自加。
  
  //混合加法：
  var a = 11;
  var b = a++ + ++a;//前面a++ = 10; 之后进行自增得到a=11, 再对它++a，所以++a=12;
  console.log(b);//22
  ```

  

- 比较运算符

  | 符号 | 作用 | 用法                                   |
  | ---- | ---- | -------------------------------------- |
  | =    | 赋值 | 把右边给左边                           |
  | ==   | 判断 | 判断两边值是否相等(注意此时有隐式转换) |
  | ===  | 全等 | 判断两边的值和数据类型是否完全相同     |

  ```js
  console.log(11 = '11');//true
  console.log(11 == '11');//true
  console.log(11 === '11');//false
  ```

  

- 逻辑运算符

  | 逻辑运算符 | 说明                    | 案例             |
  | ---------- | ----------------------- | ---------------- |
  | &&         | “逻辑与”，简称“与”  and | true && false;   |
  | \|\|       | “逻辑或”，简称“或”   or | true \|\| false; |
  | !          | “逻辑非”，简称“与”  not | !true            |

  ```js
  // 与 && 只要有一个条件为false就为false,必须两个都为true，结果才为true
  console.log(2>7 && 7<11);//false 
  console.log(2<7 && 7<11);//true 
  // 与 || 只要有一个条件为true结果就为true,两个都是false,结果才是false
  console.log(2>7 || 7<11);//true
  console.log(2>7 || 7>11);//false
  // 非 ！  取反
  console.log(!true);//false
  ```

  

- 短路运算 

  ```js
  //与  &&
  //如果表达式为1 结果为真，则返回表达式2；如果表达式为1 结果为假， 则返回表达式1。
  //如果有空或者否定为假，其余都是真的   0 、 ‘ ’、 null、 undefined、 NaN
  //除了0以外的数字都是真的，0是假的
  console.log(123 && 456);  //456
  console.log(0 && 456);  //0
  console.log(0 && 4.56-66 && 243);  //0 只要表达式1为0(假的),后面不管是什么，打印结果都是0
  
  //或 ||
  //如果表达式为1 结果为真 则返回表达式1；如果表达式为1为假，则返回表达式2。
  console.log(123 || 456);  //123
  console.log(0 || 456 || 123 + 456);  //456
  
  //例：
  var num = 0;
  console.log(123 || num++);//123
  console.log(num);//0 因为它log打印出来123后就不执行||后面的num了，所以它还是0
  
  ```

  

- 赋值运算符

  | 赋值运算符 | 说明                 | 案例                    |
  | ---------- | -------------------- | ----------------------- |
  | =          | 直接赋值             | var num = ‘我是值’      |
  | +=、-=     | 加、减一个数后再赋值 | var a = 10; a+=5;  //15 |
  | *=、/=、%= | 乘、除、取余后再赋值 | var b = 7; b*=2;   //14 |

  ```js
  var num = 7;
  num = num + 1; //等于num++
  num = num + 2; //等于num +=2;
  num = num - 2; //等于 num -=2;
  //乘除也一样
  ```

  

- 案例：判断闰年

  ```js
  //判断闰年
  var year = prompt('请输入年份');
  if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
      alert('您输入的'+ year + '是闰年');
  } else {
      alert('您输入的'+ year + '是平年');
  }
  ```

  

- 三元表达式

  ```js
  // 三元表达式
  // 语法结构：   条件表达式 ? 表达式1 : 表达式2
  //执行思路  如果表达式结构为真 则返回表达式1的值，如果条件表达式结构为假，则返回表达式2的值
  var num = 2;
  var result = num > 5 ? '对' : '错'; 
  console.log(result);//错
  //相当于一个if else的语法，它简洁了
  if(num > 5){
      console.log('对');
  } else {
      console.log('错');
  }
  ```

- 案例：数字补0

  用户输入数字，如果数字小于10，则在前面补0，比如02,07，如果数字大于10，则不需要补，比如11,35。

  ```js
  var num = prompt('请输入数字');
  var result = num < 10 ? '0' + num : num;
  alert('您输入的数字是'+ result);
  console.log(result);
  ```

  
  
- swith语句

  ```js
  //语法结构 switch 转换、开关 case 小例子或者选项的意思
  // 执行思路：表达式的值和value的值相匹配的时候就执行相对应的值的语句，如果都不匹配则执行default语句
  // 针对表达式为特定值的时候使用，它的效率会比if else 要高，但是值变动时采用if else会更好
  
  // 1.表达式和value的值和数据类型都相匹配的时候才执行， 表达式 === value 
  // 2.如果case里面没有break则不会退出，会继续执行下一个语句
  var num = 1;
  switch(num) {
      case 1:
          console.log('执行1的匹配项');
          break;
      case 2: {
          console.log('执行2的匹配项');
          break;
      }
      default:
          console.log('执行1和2以外的匹配项');
  }
  
  // 查询水果案例
  // 在弹出框里输入水果，如果有这类水果就弹出该水果的价格，如果没有就弹出“没有此水果”
  
  var shuiguo = prompt('请输入水果类型查看价格：');
  switch (shuiguo) {
      case '苹果':
          console.log('执行1的匹配项');
          alert('苹果4块钱1斤');
          break;
      case '橘子': {
          alert('橘子10块钱3斤');
          break;
      }
      case '香蕉': {
          alert('香蕉5块钱1斤');
          break;
      }
      default:
          alert('没有你要查询的水果');
  }
  ```

  > switch语句和if else if语句的区别：
  >
  > 1. 一般情况下，它们两个可以相互替换
  > 2. switch…case语句通常处理比较确定的值，而if…else…更加灵活，常用于范围判断
  > 3. switch语句进行条件判断后直接执行到程序条件语句，效率更高。而if…else…有几种条件就得判断多少次。
  > 4. 当分支比较少时,if…else…的执行效率比switch语句高，反之，分支多时switch效率高，而且结构更清晰。

  

- for循环

  ```js
  //例：1-100累加
  var sum = 0;
  for(i = 1; i<=100; i++){
      sum = sum  + i;
  }
  console.log('1-100相加：',sum);
  
  // 求1-100之间所有能被3整除的数字的和
  var num = 0;
  for(i = 1; i<=100; i++){
      if(i % 3 == 0){
          num = num + i;
      }
  }
  console.log('1-100所有数之间能被3整除的数之和：',num);
  
  // 求班级学生成绩的平均数：
  // 要求用户输入班级人数，之后依次输入每个学生的成绩，最后打印出该班级的总成绩及平均成绩
  var num = prompt('请输入班级学生人数');
  var sum = 0;//求和的变量
  var average = 0;//平均值
  for(var i = 1; i<=num; i++){
      var score = prompt('请输入第'+ i + '个学生的成绩');
      sum = sum + parseFloat(score);
  }
  average = sum / num;
  alert('总成绩是'+sum);
  alert('平均成绩是：'+average);
  ```

  

- 双重for循环

  ```js
  // 打印5行5列的星星
  var star = '';
  for(var i=1;i<=5;i++){
      for(var j=0;j<=5;j++){
          star = star + '★';
      }
      star = star + '\n';
  }
  console.log(star);
  
  // 打印正三角的星星
  var star = '';
  for(var i=1;i<=5;i++){
      for(var j=0;j<i;j++){
          star = star + '★';
      }
      star = star + '\n';
  }
  console.log(star);
  
  // 打印倒三角的星星
  var star = '';
  for(var i=1;i<=5;i++){
      for(var j=0;j<=5-i;j++){
          star = star + '★';
      }
      star = star + '\n';
  }
  console.log(star);
  
  //三种不同的打印方式都取决于第二层for循环打印的次数
  
  // 案例：九九乘法表
  var str = '';
  for(var i=1;i<=9;i++){
      for(var j=1;j<=i;j++){
          str = str + j + 'x' + i + '=' + i * j + '\t';
      }
      str = str + '\n';
  }
  console.log(str);
  ```

  

- while循环

  ```js
  // 1.语法结构 while 当...的时候
  // while (条件表达式) {
  //     //循环体
  // }
  // 2.执行思路  当条件表达式结构为true时 执行循环体 否则退出循环
  var a = 1;
  while (a<7) {
      console.log('a的值小于7');
      a++;
  }
  // 3.里面也有计数器 初始化变量 
  // 4.里面也有操作表达式 完成计数更新 防止死循环 a++;
  
  // 例：计算1-100之间的整数和
  var sum = 0;
  var n = 1;
  while (n <= 100) {
      sum += n;//相当于sum = sum + n;
      n++;
  }
  console.log('1-100的和',sum);
  
  //弹出一个提示框，你要学习吗？  如果输入 学 就提示结束，否则一直询问。
  var learn = prompt('你要学习吗？');
  while (learn != '学！') {
      learn = prompt('真的不学吗？');
  }
  alert('这才对嘛哈哈哈！');
  ```

  

- do…while…循环

  ```js
  // 执行思路：先执行一次循环体，再判断条件 如果条件表达式为真，则继续执行循环，如果为假则退出循环
  var i = 1;
  do {
      console.log('执行循环');
      i++;
  } while (i <=7)//当i大于7时while为假，停止循环,log打印了7次
      
  // 例：计算1-100的所有数的和
  var sum = 0;
  var j = 1;
  do {
      sum += j;
      j++;
  } while (j <= 100)
  console.log(sum);
  ```

  > 大多数情况下我们更喜欢用for循环，while先判断后执行，可能一次也不会执行；do…while先执行一次，再判断是否继续执行

  

- 关键字 continue 和 break

  ```js
  // contnue 关键字用于立即跳出本次循环，继续下一次循环
  // 吃包子跳过第三个包子不吃
  for(var i = 1; i <= 5; i++) {
      if (i == 3) {
          continue;
      }
      console.log('我正在吃第'+ i +'个包子');
  }
  //得到的结果为打印了1,2,4,5个包子，第三个直接跳过
  
  // 求1-100之间，除了能被7整除之外的整数和
  var sum = 0;
  for (var i = 1; i <= 100; i++) {
      if(i % 7 == 0){
          continue;
      }
      sum  += i;
  }
  console.log('1-100之间，除了能被7整除之外的整数和为：', sum);
  
  // break 关键字 用于立即跳出整个循环(循环结束);
  // 吃五个包子，吃完第3个的时候不想吃了
  for(var i = 1; i <= 5; i++) {
      if (i == 4) {
          break;
      }
      console.log('我正在吃第'+ i +'个包子');
  }
  ```

  

- 数组遍历

  ```js
  // 例：求数组[7,11,2,35] 里面所有元素的平均值
  var sz = [7,11,2,35];
  var sum = 0;
  for(var i = 1; i<this.sz.length;i++){
      sum += this.sz[i];
  }
  console.log('数组相加的和：',sum);
  var pjs = sum / this.sz.length;
  console.log('平均数：',pjs);
  
  // 求数组[7,11,1,35,2,13]的最大值
  var sz = [7,11,1,35,2,13];
  var maxsz = 0;
  for(var i = 1; i<this.sz.length;i++){
      if(maxsz < this.sz[i]){
          maxsz = this.sz[i];
      }
  
  }
  console.log('数组最大值为：',maxsz);
  
  // 例：将数组['kd','ky','hd']转换为字符串，并且用|或其他符号分割
  var arr = ['kd','ky','hd'];
  var zfc = '';
  var fgf = '|';
  for(var i = 0; i<this.arr.length;i++){
      this.zfc += arr[i] + this.fgf; 
  }
  console.log('转换为字符串：', this.zfc);
  ```

  

- 新增数组元素

  ```js
  var arr = ['kd','ky','hd'];
  arr.push('pg');//添加到数组末尾
  arr.unshift('mj');//添加到数组前面
  console.log(arr);//['mj', 'kd', 'ky', 'hd', 'pg']
  ```

  

- 筛选数组

  ```js
  //将数组中大于等于10的元素选出来，放入新数组。
  var arr = [7,11,1,35,2,13];
  var newArr = [];
  var j = 0;
  for(var i = 0; i<this.arr.length; i++){
      if(this.arr[i] < 10){
          this.newArr[j] = this.arr[i];
          j++;
      }
  }
  console.log(newArr);//[7, 1, 2]
  ```

  

- 数组去重

  ```js
  // 将数组中的0去掉，生成一个新的数组
  var arr = [7, 11, 0, 1, 35, 2, 0, 13];
  var newArr = [];
  for (var i = 0; i < this.arr.length; i++) {
      if (this.arr[i] != 0) {
          this.newArr[this.newArr.length] = this.arr[i];
      }
  }
  console.log(newArr);
  ```

  

 





已学到109

