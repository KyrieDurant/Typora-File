## JS数组

- 创建数组

  ```js
  // 1、利用数组字面量
  var a = [1,2,'3'];
  console.log(a[0]);// 1
  // 2、利用new Array()
  var b = new Array(2);// 2表示数组的长度，里面有2个空数组；
  console.log(b);// [empty x 2]
  var c = new Array(2,3);
  ```

- 翻转数组

  ```js
  function reverse(arr) {
      var newArr = [];
      for(var i = arr.length - 1; i >= 0; i--) {
          newArr[newArr.length] = arr[i];
      }
      return newArr;
  }
  console.log(reverse([1,2,3]));//[3,2,1]
  console.log(reverse((1,2,3)));//输入元素不为数组时得到的数组为[]
  ```

- 检测是否为数组

  ```js
  // (1) instanceof  运算符 它可以用来检测是否为数组
  var arr = [];
  var obj = {};
  console.log(arr instanceof Array); // true
  console.log(obj instanceof Array); // false
  // (2) Array.isArray(参数);
  console.log(Array.isArray(arr));// true
  console.log(Array.isArray(obj));// false
  ```

- 添加数组元素

  ```js
  // 1. push() 在末尾添加一个或多个数组元素
  var arr = [1,2,3];
  arr.push(4);
  console.log(arr);// [1, 2, 3, 4]
  // 2.unshift 在我们数组的开头 添加一个或多个元素
  arr.unshift('one');
  console.log(arr);// ['one', 1, 2, 3, 4]
  ```

- 删除数组元素

  ```js
  // 1. pop()删除数组最后一个元素,一次只能删除一个元素，没有参数
  var arr = [1,2,3,'a', 4];
  arr.pop();
  console.log(arr);//[1,2,3,'a'];
  // 2. shift()删除数组的第一个元素
  arr.shift();
  console.log(arr);// [2, 3, 'a']
  ```

- 案例：筛选数组

  ```js
  // 数组arr[35,7,2,11,13,1]，要求把数组里大于7的元素删除，剩余的存放到新数组里
  var arr = [35,7,2,11,13,1];
  var newArr = [];
  for(let i = 0; i<this.arr.length;i++){
      if(this.arr[i] <= 7){
          newArr.push(arr[i])
      }
  }
  console.log(newArr);//[7, 2, 1]
  ```

- 数组排序

  ```js
  // reverse()把数组顺序颠倒过来
  var arr = [35,7,2,11,13,1];
  arr.reverse();
  console.log(arr);// [1, 13, 11, 2, 7, 35]
  var arr1 = [35, 7, 2, 11, 13, 1];
  arr1.sort(function(a,b){
      return a - b; //升序的顺序排列
      // return b - a; //降序的顺序排列
  });
  console.log(arr1);// [1, 2, 7, 11, 13, 35]
  ```

- 数组索引

  ```js
  // indexOf(数组元素) 从数组前面开始查找，索引不存在是为-1
  // 它只满足返回第一个满足条件的索引号
  var arr = ['kd','ky','jh'];
  console.log(arr.indexOf('kd'));// 0是索引得到元素的位置，在第0个
  console.log(arr.indexOf(7));// -1
  // lastIndexOf(数组元素) 从数组后面开始查找，索引不存在是为-1
  console.log(arr.lastIndexOf('ky'));// 1是索引得到元素的位置，在第1个
  console.log(arr.lastIndexOf(11));// -1
  ```

- 数组去重

  ```js
  // 封装一个去重的函数 unique 独一无二的
  function unique(arr) {
      var newArr = [];
      for(var i = 0; i< arr.length; i++) {
          if(newArr.indexOf(arr[i]) === -1){
              newArr.push(arr[i]);
          }
      }
      return newArr;
  }
  var sz = ['a','b','c','d','c','b'];
  var a = unique(sz);
  console.log(a);// ['a', 'b', 'c', 'd']
  ```

- 数组转换为字符串

  ```js
  var arr = [1,2,3];
  // 1. toString() 将数组转换为字符串
  var b = arr.toString();
  console.log(b); // 1,2,3
  // 2. join(分隔符)
  var arr1 = ['red', 'green', 'yellow'];
  console.log(arr1.join());// red,green,yellow
  console.log(arr1.join('-'));// red-green-yellow
  console.log(arr1.join('&'));// red&green&yellow
  ```

- 字符串查找

  ```js
  // indexOf('要查找的字符',[起始的位置])
  var str = '改革春风吹满地，春天来了';
  console.log(str.indexOf('春')); // 2
  console.log(str.indexOf('春', 3));//8 这是第二个春的位置，从3开始进行查找
  ```

- 案例：返回字符串位置

  ```js
  // 查找字符串"awbckdwfsgwkww"中所有w出现的位置以及次数
  var str = 'awbckdwfsgwkww';
  var index = str.indexOf('w');
  var num = 0;
  while(index !== -1) {
      console.log(index);//循环打印出来每个w的位置：1 6 10 12 13
      num++;//每查到一次就加一次
      index = str.indexOf('w', index + 1);
  }
  console.log('w 出现的次数是：'+ num);// 5
  ```

- 根据位置返回字符

  | 方法名            | 说明                                     | 使用                         |
  | ----------------- | ---------------------------------------- | ---------------------------- |
  | charAt(index)     | 返回指定位置的字符(index字符串的索引号)  | str.charAt(0)                |
  | charCodeAt(index) | 获取指定位置处字符的ASCII码(index索引号) | str.charCodeAt(0)            |
  | str[index]        | 获取指定位置处字符                       | HTML5,IE8+支持和charAt()等效 |

  ```js
  // 根据位置返回字符
  var str = 'Kevin';
  console.log(str.charAt(2)); // v
  // 遍历所有字符
  for(var i = 0; i< str.length; i++){
      console.log(str.charAt(i));
  }
  console.log(str.charCodeAt(0)); //在表里K对应75
  console.log(str[3]); //i
  ```

- 案例：返回字符串位置

  ```js
  // 判断一个字符串'awbkdwgwkww'中出现次数最多的字符，并统计其次数
  var str = 'awbkdwgwkww';
  var w = {};
  for(let i=0; i<this.str.length;i++){
      var chars = str.charAt(i); // chars 是字符串的每一个字符
      if(w[chars]){ // w[chars]得到的是属性值
          w[chars]++;
      } else {
          w[chars] = 1;
      }
  }
  console.log(w);
  //遍历对象
  var max = 0;
  var ch = '';
  for( var k in w) {
      // k得到的是 属性名
      // w[k]得到的是属性值
      if(w[k] > max) {
          max = w[k];
          ch = k;
      }
  }
  console.log(max);
  console.log('最多的字符是'+ ch);
  ```

- 字符串操作方法

  | 方法名                  | 说明                                                         |
  | ----------------------- | ------------------------------------------------------------ |
  | concat(str1,str2,str3…) | concat()方法用于连接两个或者多个字符串。拼接字符串，等效于+，+更常用 |
  | substr(start,length)    | 从start位置开始(索引号)，length 取的个数                     |
  | slice(start,end)        | 从start位置开始，截取到end位置，end取不到(他们俩都是索引号)  |
  | substring(start,end)    | 从start位置开始，截取到end位置，end取不到，基本和slice相同，但是不接受负值 |

  ```js
  // 字符串操作方法
  // 1.concat('字符串1','字符串2');
  var str = 'Kevin';
  console.log(str.concat('Durant'));// KevinDurant
  
  // 2.substr('截取的起始位置', '截取几个字符');
  var str1 = '改革春风吹满地';
  console.log(str1.substr(2,2));// 春风 
  ```

  ```js
  // 1.替换字符 replace('被替换的字符','替换为的字符') 它只会替换第一个字符
  var str = 'andyandy';
  console.log(str.replace('a','b'));// bndyandy
  // 有一个字符串'odofgborewoo' 要求把里面的所有o 替换为*
  var str1 = 'odofgborewoo';
  while(str1.indexOf('o') !== -1) {
      str1 = str1.replace('o','*');
  }
  console.log(str1);// *d*fgb*rew**
  
  // 2.字符串转换为数组 split('分隔符') 
  var str2 = 'red,green,yellow';
  console.log(str2.split(','));// ['red', 'green', 'yellow']
  var str3 = 'red-pink-abc';
  console.log(str3.split('-'));// ['red', 'pink', 'abc']
  ```

  学到191

