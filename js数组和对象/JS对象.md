## JS对象

- 往对象里添加新的元素

  ```js
  // 数组为data
  var data = {
      name: 'Kyrie',
  }
  // 在方法里面往里面添加元素
  this.data['age'] = 18;
  // 此时数组data多了新元素，为
  data = {
      name:'Kyrie',
      age: 18,
  }
  ```

  