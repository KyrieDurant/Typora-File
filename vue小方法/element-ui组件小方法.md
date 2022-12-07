## element-ui组件小方法

- el-table表格表格内容居中只需要在eltable里面加上下面的代码即可：

  ```vue
  <el-table :data="tableData" :cell-style="{textAlign:'center' }" :header-cell-style="{ textAlign: 'center' }">
  表格内容
  </el-table>
  ```

  

