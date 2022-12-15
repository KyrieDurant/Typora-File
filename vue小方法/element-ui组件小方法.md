## element-ui组件小方法

- el-table表格表格内容居中只需要在eltable里面加上下面的代码即可：

  ```vue
  <el-table :data="tableData" :cell-style="{textAlign:'center' }" :header-cell-style="{ textAlign: 'center' }">
  表格内容
  </el-table>
  ```


- 如果只想单行居中的话，只需要给单行加入居中属性即可

  ```vue
  <el-table-column prop="" label="属性信息"  align="center"></el-table-column>
  ```


- this.$forceUpdate()处理页面刷新问题

  在函数中改变了页面中的某个值，在函数中log打印出来查看是修改成功了，但在页面中没有及时刷新改变后的值；这时可在对应的方法里添加此函数进行强制刷新，这时页面就能渲染成功。

  例如element表单里el-select的关联性：选择巡查类型后根据巡查类型的选择进行问题大类里的内容，再根据所选问题大类的内容判断问题小类的内容，这样多层嵌套时任意出现问题小类选择后选择框无法渲染出内容，此时就可以在问题小类选择的时候使用@change监听数据的改变，如果问题小类数据改变了就在方法里添加强制刷新函数。

  ```vue
  <el-form ref="queryParams" :model="queryParams" inline label-width="60px" label-position="left">
  	<!-- 巡查类型 -->
      <el-form-item lable-width="80px" label="巡查类型">
          <el-select v-model="queryParams.xclx" :placeholder="`请选择巡查类型`" clearable 
              @change="judgewtlx(queryParams.xclx)" @clear="qcxclx()">
              <el-option v-for="(item, index) in xclx" :key="index" :value="item.value" :label="item.name" />
          </el-select>
  	</el-form-item>
  	<!-- 问题大类 -->
  	<el-form-item lable-width="80px" label="问题大类">
      	<el-select v-model="queryParams.wtdl" :placeholder="`请选择问题大类`" clearable 
          	@change="chakanwtdlxze(queryParams.wtdl)" @clear="qcwtxl()>
          	<el-option v-for="(item, index) in wtdlList" :key="index" :value="item.id" :label="item.label" />
          </el-select>
      </el-form-item>
      <!-- 问题小类 -->
      <el-form-item lable-width="80px" label="问题小类">
          <el-select v-model="queryParams.wtxl" :placeholder="`请选择问题小类`" @change="quewtxl(queryParams.wtxl)" clearable >
              <el-option v-for="(item, index) in wtxlList" :key="index" :value="item.id" :label="item.label" />
          </el-select>
      </el-form-item>
  </el-form>
  
  <script>
  export default {
      data() {
          return {
              queryParams:{},
              xclx: [
                  { name: "日常安全巡查", value: 1 },
                  { name: "消防巡查", value: 2 },
              ],
              wtdlList:[],//问题大类
              wtdalei1:[
                  {label:"问题大类aa", id:"1-1"},
                  {label:"问题大类ab", id:"1-2"},
              ],
              wtdalei2:[
                  {label:"问题大类ba", id:"2-1"},
                  {label:"问题大类bb", id:"2-2"},
              ],
              wtxlList:[],//问题小类
              wtxlei1:[
                  {label:"问题小类aaa", id:"2-1-1"},
                  {label:"问题小类aab", id:"2-1-2"},
                  {label:"问题小类aac", id:"2-1-3"},
              ],
              wtxlei2:[
                  {label:"问题小类aba", id:"2-2-1"},
                  {label:"问题小类abb", id:"2-2-2"},
                  {label:"问题小类abc", id:"2-2-3"},
              ],
              wtxlei3:[
                  {label:"问题小类aca", id:"2-3-1"},
                  {label:"问题小类acb", id:"2-3-2"},
                  {label:"问题小类acc", id:"2-3-3"},
              ],
              wtxlei4:[
                  {label:"问题小类ada", id:"2-4-1"},
                  {label:"问题小类adb", id:"2-4-2"},
                  {label:"问题小类adc", id:"2-4-3"},
              ],
              
          }
      },
      methods:{
          // 根据巡查类型判断问题大类
          judgewtlx(row){
              if (row) {
                  //改变巡查类别时清空问题大类和问题小类
                  this.queryParams.wtdl = null;
                  this.queryParams.wtxl = null;
              }                              
                                              
              console.log('巡查类型=', row);
              if(row == 1){
                  this.wtdlList = this.wtdalei1;
              } else if(row == 2){
                  this.wtdlList = this.wtdalei2;
              }
          }，
          //清除巡查类型(上面和这里选一个)
          qcxclx() {
              this.queryParams.wtdl = null;
              this.queryParams.wtxl = null;
          },
          // 根据问题大类判断问题小类
          chakanwtdlxze(row){
      		console.log('问题大类=', row);
              //监听问题大类的情况，问题大类改变或清空时清除问题小类
              if(row || row == null){
                  this.queryParams.wtxl = null;
              }
                      
              if(row == '1-1'){
                  this.wtxlList = this.wtxlei1;
              } else if(row == '1-2'){
                  this.wtxlList = this.wtxlei2;
              } else if(row == '2-1'){
                  this.wtxlList = this.wtxlei3;
              } else if(row == '2-2'){
                  this.wtxlList = this.wtxlei4;
              }
  		},
          //清除问题大类时也会删除问题小类(上面和这里选一个)
          qcwtxl(){
          	this.queryParams.wtxl = null;
          },
          //问题小类选择
          quewtxl(row){
              console.log('问题小类', row);
              //因为问题小类没有渲染出来，所以进行强制刷新
              this.$forceUpdate();//强制刷新
          },
          
      },
  }
  </script>
  <style>
  
  </style>
  ```

  
