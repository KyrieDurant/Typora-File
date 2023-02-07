## Vue 自定义弹窗（大体结构）

template代码

```vue
<div class="addPop">
    <div class="popTitle">
        <div style="margin-left: 10px; font-weight: 600;">新增</div>
        <li style="margin-right: 10px; font-size: 20px;" class="el-icon-lx-roundclose"></li>
    </div>
    <div class="popContent"></div>
</div>
```

css代码

```css
/* 新增弹窗 */
.addPop{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -140px;
    margin-left: -180px;
    height: 280px;
    width: 360px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 3px;
    z-index: 10;
    display: flex;
    flex-direction: column;
}
.popTitle{
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
}
.popContent{
    display: flex;
    flex-direction: column;
}
```

