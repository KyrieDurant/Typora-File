## CSS应用

- snCot盒子里的内容太多导致超出时，使用滑动条效果，然后隐藏滚动条样式：

  ```css
  .snCont {
      flex: 1;
      background-color: #fff;
      padding: 15px;
      overflow-y: scroll;
  }
  .snCont::-webkit-scrollbar {
    	display: none;
  }
  ```

  