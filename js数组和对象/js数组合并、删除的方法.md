### js数组合并的方法

> **push 添加到数组的末尾 改变原数组**

```js
let arr1 = [1,2];
let arr2 = [3,4];
for( let i=0; i<arr2.length; i++)
    arr1.push(arr2[i]);
}
console.log('arr1',arr1);
//log打印得到arr1[1,2,3,4];
```

> **cancat 不改变原数组。concat合并数组之后，返回值才是新数组，并且可以合并两个及其以上的数组**

```js
let arr1 = [1,2];
let arr2 = [3,4];
arr1 = arr1.concat(arr2);
console.log('arr1',arr1);
//log打印得到arr1[1,2,3,4];
```

> **push.apply合并数组是把后一个数组的值依次push进前一个数组，使前一个数组发生改变，并且只能两个数组之间发生合并。**

```js
let arr1 = [1,2];
let arr2 = [3,4];
arr1.push.apply(arr1, arr2);
console.log('arr1',arr1);
//log打印得到arr1[1,2,3,4];
```

> `ES6` **语法，简单而实用,生成新数组**

```js
let arr1 = [1,2];
let arr2 = [3,4];
arr1 = [...arr1,...arr2];
console.log('arr1',arr1);
//log打印得到arr1[1,2,3,4];
```

> **push和ES6结合生成新数组**

```js
let arr1 = [1,2];
let arr2 = [3,4];
arr1.push(...arr2);
console.log('arr1',arr1);
//log打印得到arr1[1,2,3,4];
```



### js删除数组内元素的方法

> 1、Array.prototype.removeByValue这个函数扩展了JavaScript的内置对象Array,这样，我们以后的所有声明的数组都会自动的拥有remove能力。

```js
Array.prototype.removeByValue = function (val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === val) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
}

var sites = ['apple', 'google', 'runoob', 'taobao'];
sites.removeByValue('google');
console.log(sites);
//结果： ['apple', 'runoob', 'taobao']
```

> 2、array.splice 的方法实现

```js
const array = [2, 5, 9];
const index = array.indexOf(5);
if (index > -1) {
    array.splice(index, 1); // 第二个参数为删除的次数，设置只删除一次
}
console.log('array',array);
// array = [2, 9]
```

> 3、splice()恐怕要算最强大的数组方法了，他的用法有很多种，在此只介绍删除数组元素的方法。在删除数组元素的时候，它可以删除任意数量的项，只需要指定2个参数：要删除的第一项的位置和要删除的项数，例如splice(0, 2)会删除数组中的前两项。

```js
var colors = ["red", "blue", "grey"];
var item = colors.splice(0, 1);
console.log(item);      //"red"
console.log(colors);    //["blue", "grey"]
```

> 4、栈方法：在调用Pop方法时，数组返回最后一项，即”C”

```js
// var colors = ["A", "B", "C","D"];
// var item = colors.pop();
// console.log(item);      //"C"
// console.log(colors.length);    //2
```



## JS数组新增元素

```js
var arr = ['kd','ky','hd'];
arr.push('pg');//添加到数组末尾
arr.unshift('mj');//添加到数组前面
console.log(arr);//['mj', 'kd', 'ky', 'hd', 'pg']
```

