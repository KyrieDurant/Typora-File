## JS-BOM

- 概念

  > BOM(浏览器对象模型)，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是window。

- DOM和BOM的区别

  | DOM                              | BOM                                      |
  | -------------------------------- | ---------------------------------------- |
  | 文档对象模型                     | 浏览器对象模型                           |
  | 把「文档」当做一个「对象」来看待 | 把「浏览器」当做一个「对象」来看待       |
  | 顶级对象是document               | 顶级对象是window                         |
  | 主要学习操作页面元素             | 浏览器窗口交互的一些对象                 |
  | W3C标准规范                      | 浏览器厂商在各自浏览器定义的，兼容性较差 |

- 窗口加载事件

  > window.onload是窗口加载事件，当文档内容完全加载完成后才开始触发该事件
  >
  > 1.有了window.onload就可以把JS代码写到页面元素上方，因为onload是等页面内容全部加载完毕后再去执行函数。
  >
  > 2.window.onload为传统注册事件，只能写一次，如果有多个，会以最后一个为准。
  >
  > 3.如果使用addEventListener则没有限制。

  ```javascript
  // DOMContentLoaded事件触发时，仅当DOM加载完成。相当于div标签加载完成后就能够
  document.addEventListener('DOMContentLoaded', function(){})
  
  // load 等页面内容全部加载完毕，包含页面DOM元素，图片 flash css等等
  // DOMContentLoaded 是DOM 加载完毕， 不包含图片 flash css等就可以执行 加载速度比 load更快一些
  ```

- 调整窗口大小事件

  ```js
  // 只要窗口发生变化就可以触发该事件
  window.onresize = function(){}
  window.addEventener("resize",function(){});
  ```

  例：如果页面宽度小于800px的时候盒子div的的大小变小

  ```js
  arr = [
      {
          name:'kyrie',
          number: 2
      },
      {
          name:'Ke',
          number: 35
      },
  ]
  ```

- JS同步和异步

  ```js
  // 执行下面代码，运行出来log的打印顺序为1,3,2,说明在log打印运行到3的时候有定时器，所以先去运行3。
  <script>
      console.log('1');
  	setTimeout(() => {
      	console.log('2');
  	}, 30);
  	console.log('3');
  </script>
  ```

- location 对象的方法

  | location对象方法   | 返回值                                                       |
  | ------------------ | ------------------------------------------------------------ |
  | location.assign()  | 跟href一样，可以跳转页面(也称为重定向页面)                   |
  | location.replace() | 替换当前页面，因为不记录历史，所以不能后退页面               |
  | location.reload()  | 重新加载页面，相当于刷新按钮或者f5 如果参数为true 强制刷新ctrl+f5 |

- history 对象

  | history对象方法 | 作用                                                       |
  | --------------- | ---------------------------------------------------------- |
  | back()          | 后退功能                                                   |
  | forward()       | 前进功能                                                   |
  | go(参数)        | 前进后退功能 参数如果是1 前进1个页面 如果是-1 后退一个页面 |

- 元素偏移量

  | offset系列           | 作用                                                         |
  | -------------------- | ------------------------------------------------------------ |
  | element.offsetParent | 返回作为该元素带有单位的父级元素 如果父级都没有定位则返回body |
  | element.offsetTop    | 返回元素相对带有定位父元素上方的偏移                         |
  | element.offsetLeft   | 返回元素相对带有定位父元素左边的偏移                         |
  | element.offsetWidth  | 返回自身包括padding、边框、内容区的宽度，返回数值不带单位    |
  | element.offsetHeight | 返回自身包括padding、边框、内容区的高度，返回数值不带单位    |

- offset与style的区别

  | offset                                        | style                                      |
  | --------------------------------------------- | ------------------------------------------ |
  | offset可以得到任意样式表中的样式值            | style只能得到行内样式表中的样式值          |
  | offset系列获得的数值是没有单位的              | style.width获得的是带有单位的字符串        |
  | offsetWidth 包含padding+border+width          | style.width获得不包含padding和border的值   |
  | offsetWidth等属性是只读属性，只能获取不能赋值 | style.width是可读写属性,可以获取也可以赋值 |
  | 想获取元素大小位置，用offset更合适            | 想修改元素的值，需要用style改变            |

- 元素可视区 client系列

  | client系列属性       | 作用                                                         |
  | -------------------- | ------------------------------------------------------------ |
  | element.clientTop    | 返回元素上边框的大小                                         |
  | element.clientLeft   | 返回元素左边框的大小                                         |
  | element.clientWidth  | 返回自身包括padding、内容区宽度、不含边框、返回数值不带单位  |
  | element.clientHeight | 返回自身包括padding、内容区的高度、不含边框、返回数值不带单位 |

- 立即执行函数

  ```javascript
  // 1.立即执行函数，不需要调用，立马能够自己执行的函数
  function fn() {
      console.log(111);
  }
  fn();
  // 2.写法
  //     (fuction(){})()    或者     (function(){}()) 也可以传递参数进来
  (function (a,b) {
      console.log(a+b);
  })(1,2);// 第二个小括号可以当做调用函数
  
  (function sum(a,b) {
      console.log(b-a);
  }(7,11));
  //3.立即执行函数最大的作用是独立创建了一个作用域
  ```

- mouseenter和mouseover的区别

  > - 当鼠标移动到元素上时就会触发mouseenter事件
  >
  > - 类似mouseover，它们两者之间的差别是：
  >
  >   mouseover鼠标经过自身盒子会触发，经过盒子还会触发。mouseenter只会经过自身盒子触发
  >
  >   之所以这样，就是因为mouseenter不会冒泡
  >
  >   跟mouseenter搭配鼠标离开mouseleave同样不会冒泡

 
