## jQuery选择器

- jQuery基础选择器

  > 语法： $("选择器"); // 里面选择器直接写css选择器即可，但是要加引号

  | 名称       | 用法            | 描述                     |
  | ---------- | --------------- | ------------------------ |
  | ID选择器   | $("#id")        | 获取指定ID元素           |
  | 全选择器   | $('*')          | 匹配所有元素             |
  | 类选择器   | $(".class")     | 获取同一类class的元素    |
  | 标签选择器 | $("div")        | 获取同一类标签的所有元素 |
  | 并集选择器 | $("div,p,li")   | 选取多个元素             |
  | 交际选择器 | $("li.current") | 交集元素                 |

- jQuery层级选择器

  | 名称       | 用法        | 描述                                                       |
  | ---------- | ----------- | ---------------------------------------------------------- |
  | 子代选择器 | $('ul>li'); | 使用>号，获取亲儿子层级元素，不会获取孙子层级元素          |
  | 后代选择器 | $('ul li'); | 使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等 |

- jQuery设置样式

  > $('div').css('属性','值')；

```js
$(function(){
    var a = $('.nav');
    console.log(a);
    var ulli = $('ul li');//拿到ul里的所有li
    console.log(ulli);
    // 给ul里的li改变文字颜色
    // 改变样式语法,$('div').css('属性','值')
    ulli.css('color','#ffcccc');
    // 赋值咯，相当于 $('ul li').css('color','#ffcccc');
    // 它为隐式迭代，就是把匹配的所有元素内部进行遍历循环，给每一个元素添加css这个方法
})
```

- jQuery筛选选择器

  | 语法       | 用法          | 描述                                                 |
  | ---------- | ------------- | ---------------------------------------------------- |
  | :first     | $('li:first') | 获取第一个元素                                       |
  | :last      | $('li:last')  | 获取最后一个元素                                     |
  | :eq(index) | $("li:eq(2)") | 获取到的li元素中，选择索引号为2的元素，索引号从0开始 |
  | :odd       | $("li:odd")   | 获取到的li元素中，选择器为奇数的元素                 |
  | :even      | $("li:even")  | 获取到的li元素中，选择索引号为偶数的元素             |

  ```js
  // 改变ul里的第一个li的背景颜色   first第一个   last最后一个
  $("ul li:first").css('backgroundColor','rgb(129, 132, 139)');
  // 改变ul里的第3个li的字体颜色
  $("ul li:eq(3)").css('color','rgb(240, 76, 11)');
  // 改变ul里的偶数li的字体颜色   even偶数   odd奇数
  $("ul li:even").css('color','rgb(202, 255, 109)');
  ```

- jQuery筛选方法(重点)

  | 语法               | 语法                           | 说明                                                 |
  | ------------------ | ------------------------------ | ---------------------------------------------------- |
  | parent()           | $("li").parent();              | 查找父亲                                             |
  | children(selector) | $("ul").children("li")         | 相当于$("ul>li")，最近一级(亲儿子)                   |
  | find(selector)     | $("ul").find("li");            | 相当于$("ul li")，后代选择器                         |
  | siblings(selector) | $(".first").siblings('li');    | 查找兄弟节点，不包括自己本身                         |
  | nextAll([expr])    | $(".first").nextAll();         | 查找当前元素之后所有的同辈元素                       |
  | prevtAll([expr])   | $(".last").prevAll();          | 查找当前元素之前所有的同辈元素                       |
  | hasClass(class)    | $('div').hasClass("protected") | 检查当前的元素是否含有某个特定的类，如果有则返回true |
  | eq(index)          | $("li").eq(2);                 | 相当于$("li:eq(2)"),index从0开始                     |

- jQuery操作样式切换

  ```js
  //基于box盒子来进行样式修改
  <div class="box"></div>
  <button id="btn1">添加样式</button>
  <button id="btn2">删除样式</button>
  <button id="btn3">切换样式</button>
  // css样式
  <style>
      .box{
          width: 200px;
          height: 200px;
          background-color: #23a0b1;
      }
  .current{
      background-color: #1ca117;
      border: 2px solid rgb(199, 1, 1);
      border-radius: 50%;
  }
  </style>
  
  // 打印得到盒子宽度
  console.log($(".box").css("width"));
  // 修改盒子宽度
  $(".box").css("width","300px");
  // 同时修改盒子的多个样式
  $(".box").css({
      width: 150,
      height: 150,
      backgroundColor: '#f28f54',
  });
  // 添加样式 类   addClass()
  $('#btn1').click(function(){
      $('.box').addClass('current');
  });
  // 删除样式  类    removeClass()
  $('#btn2').click(function(){
      $('.box').removeClass('current');
  });
  // 切换样式   类   toggleClass()
  $('#btn3').click(function(){
      $('.box').toggleClass('current');
  });
  ```

- jquery效果

  ```js
  <div class="box"></div>
  <button>显示</button>
  <button>隐藏</button>
  <button>切换</button>
  <script>
      $(function(){
      // 显示盒子
      $('button').eq(0).click(function(){
          // 1秒完成后开始执行后面的函数打印log
          $('.box').show(1000,function(){
              console.log('显示完成！');
          });
      });
      // 隐藏盒子
      $('button').eq(1).click(function(){
          // $('.box').hide('fast');// fast为隐藏效果
          // 1秒完成后开始执行后面的函数打印log
          $('.box').hide(1000,function(){
              console.log('隐藏完成！');
          });
      });
      // 切换盒子
      $('button').eq(2).click(function(){
          $('.box').toggle(1000);
      });
  });
  </script>
  ```

- 滑动效果

  ```js
  /*-------滑动效果------*/
  // 下滑效果语法规范
  sildeDown([speed,[easing],[fn]])
  // 上拉效果语法规范
  slideUp([speed,[easing],[fn]])
  // 切换效果语法规范
  slideTogle([speed,[easing],[fn]])
  
  /*-------淡入淡出效果------*/
  // 淡入效果语法规范
  fadeIn([speed,[easing],[fn]])
  // 淡出效果语法规范
  fadeOut([speed,[easing],[fn]])
  // 切换效果语法规范
  fadeToggle([speed,[easing],[fn]])
  // 修改透明度效果语法规范
  fadeTo([speed,opacity,[easing],[fn]])
  
  /*-------自定义动画------*/
  animate(params,[speed],[easing],[fn])
  // params：想要更改样式属性，以对象形式传递，必须写。属性名可以不用带引号，如果是复合属性则需要采取驼峰命名法borderLeft。其余参数可以省略。
  
  (1) 参数都可以省略
  (2)speed:三种预定速度之一的字符串("slow","normal",or "fast")或表示动画时长的毫秒数值(如:1000)。
  (3)easing:(Optional)用来指定切换效果，默认是"swing",可用参数"linear"。
  (4)fn:回调函数，在动画完成时执行的函数，每个元素执行一次。
  (5)opacity: 透明度必须写，0-1之间
  ```

- 属性操作

  ```js
  <a href="https://www.bookstack.cn/read/es6-3rd/sidebar.md">ES6教程</a>
  <input type="checkbox" id="checked">
  <div index="6" data-index="35">哈哈哈哈哈</div>
  <span>hhhhhhh</span>
  <script>
          $(function(){
          // 1. element.prop('属性名')  获取属性值
          console.log($('a').prop('href'));
  
          $('input').change(function(){
              console.log($(this).prop('checked'));
          })
  
          // 2. 元素的自定义属性 我们通过attr()
          console.log('未修改的',$('div').attr('index'));
          // 修改属性的值
          $('div').attr('index','7');
          console.log('修改过的',$('div').attr('index'));
  
          // 3.数据缓存 data() 这个里面的数据是存放在元素的内存里面
          $('span').data('uname', 'andy');
          console.log('span里的自定义属性：',$('span').data('uname'));
          // 这个方法获取data-index  h5自定义属性 第一个  不用写data-  而且返回的是数字型
          console.log($('div').data('index'));
  
      })
  </script>
  ```

- 内容文本值

  ```js
  <div>
      <span>我是内容</span>
  </div>
  <input type="text" value="请输入内容">
      <script>
      // 1.获取设置元素内容  html()
      console.log($('div').html());
  // $('div').html('哈哈哈哈哈');//修改内容
  // 2.获取设置元素文本内容 text()
  console.log($('div').text());
  $('div').text('改变text的内容');//修改内容
  // 3.获取设置表单值 val()
  console.log($('input').val());
  $('input').val('123');
  </script>
  ```

- 遍历元素

  > $("div").each(function (index,domEle) {xxx;})

  1. each()元素方法遍历匹配每个元素。主要用于DOM处理。
  2. 里面的回调函数有2个参数：index是每个元素的索引号; demEle是每个DOM元素对象，不是jquery对象
  3. 所以想要使用jquery方法，需要给这个dom元素转换为jquery对象$(domEle)

  ```js
  $.each({
      name:'kd',
      num:35
  }, function(i,ele){
      console.log(i); // 输出name
      console.log(ele);// 输出num
  });
  ```
  
- 创建添加删除元素

  ```js
  <ul>
      <li>这是原先的li</li>
  </ul>
  <div class="test">我是原先的div</div>
  <script>
      $(function(){
      // 1. 创建元素
      var li = $('<li>我是后来创建的li</li>');
      // 2. 添加元素
  
      // (1) 内部添加
      // $('ul').append(li); //内部添加并且放到内容的最后面
      $('ul').prepend(li); //内部添加并且放到内容的最前面
      // (2) 外部添加
      var div = $('<div>我是后来的div</div>');
      // $('.test').after(div);//放在后面
      $('.test').before(div);//放在前面
      // 3. 删除元素
      // $('ul').remove(); // 删除自己
      // $('ul').empty(); //删除自己里面的所有子节点
      $('ul').html(''); // 可以删除匹配的元素里面的子节点
  
  })
  </script>
  ```

- jQuery尺寸

  | 语法                                 | 用法                                                 |
  | ------------------------------------ | ---------------------------------------------------- |
  | width() / height()                   | 取得匹配元素宽度和高度值  只算width / height         |
  | innerWidth() / innerHeight()         | 取得匹配元素宽度和高度值 包含padding                 |
  | outerWidth() / outerHeight()         | 取得匹配元素宽度和高度值 包含padding、border         |
  | outerWidth(true) / outerHeight(true) | 取得匹配元素宽度和高度值 包含padding、border、margin |

  > - 以上参数为空，则是获取相应值，返回的是数字型
  > - 如果参数为数字，则是修改相应值
  > - 参数可以不必写单位

- jQuery位置

  > 位置主要有三个：offset()、position()、scrollTop()/scrollLeft()

  1. offset()设置或获取元素偏移

     > ① offset() 方法设置或返回元素相对于文档的偏移坐标，跟父级没有关系。
     >
     > ② 该方法有2个属性left、top、offset().top 用于获取距离文档顶部的距离，offset().left用于获取距离文档左侧的距离
     >
     > ③ 可以设置元素的偏移：offset({top:10,left:30});

  2. position()只能获取带有定位的位置不能设置

     ```js
     console.log($('.son').position());
     ```

  3. scrollTop()/scrollLeft()设置或获取元素被卷去的头部和左侧

     > ①  scrollTop() 方法设置或返回被选元素被卷去的头部

- jQuery事件注册

  1. 单个事件注册

     > element.事件(function(){})
     >
     > $('div').click(function(){ 事件处理程序 })

     ```js
     // 1.单个事件注册
     $('.box').click(function(){
     
         $(this).css('backgroundColor','red');
     });
     $('.box').mouseenter(function(){
         $(this).css('backgroundColor','green');
     });
     ```

     

  2. 事件处理on()绑定事件

     on()方法在匹配元素上绑定一个或多个事件的处理函数

     > 语法：element.on(evebts，[selector]，fn)
     >
     > ①  events：一个或多个空格的事件类型
     >
     > ②  selector：元素的子元素选择器
     >
     > ③  fn：回调函数  即绑定在元素身上的侦听函数

     ```js
     // 2.事件处理
     $(".box").on({
         mouseenter:function(){
             $(this).css('backgroundColor','green');
         },
         click:function(){
             $(this).css('backgroundColor','red');
         },
         mouseleave:function(){
             $(this).css('backgroundColor','yellow');
         }
     });
     ```

     on()方法优势2：

     > 可以事件委派操作。事件委派的定义就是，把原来加给子元素身上的时间绑定在父元素身上，就是把事件委派给父元素。

     ```js
     // on可以给动态创建的元素绑定事件
     // click是绑定在ul身上的，但是 触发的对象是Ul里面的li
     $('ul').on('click','li',function(){
        console.log('触发ul里的li') 
     });
     ```

  - off()解绑事件

    > off()方法可以移除通过on()方法添加的事件处理程序

    ```js
    $('div').off();//解除了div身上的所有事件
    $('div').off('click');//解除了div身上的点击事件
    $('ul').off('click','li');//解除委托事件
    
    //one()只能触发事件一次,第一次触发过后就不会再触发
    $('p').one('click',function(){
        console.log('哈哈哈哈');
    });
    
    // trigger()  自动触发事件
    $('div').click();
    $('div').trgger('click');
    $('div').trggerHandler('click');// 不会触发元素的默认行为
    ```