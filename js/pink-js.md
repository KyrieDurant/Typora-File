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

  







已学到64

