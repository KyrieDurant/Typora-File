## 点击改变css样式

- 方法一

  在定义的写两个class样式，在要改变样式的元素用:class，点击时切换样式

  ```vue
  vue内容:
  
  <view :class="tuxin"></view>
  <view class="djgb" @click="changeTx">切换形状</view>
  
  js内容
  在data里定义
  tuxin:'tuxinYx',
  然后在methods里写点击事件
  //点击改变css样式
  changeTx(){
  	if(this.tuxin == 'tuxinYx'){
  		this.tuxin = 'tuxinSjx';
  	} else{
  		this.tuxin = 'tuxinYx';
  	}
  },
  
  
  css样式为：
  .tuxinYx{
      width: 100rpx;
      height: 100rpx;
      background-color: #20aaa6;
      border-radius: 50%;
  }
  .tuxinSjx{
      width: 100rpx;
      height: 100rpx;
      background-color: #55aaff;
      -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
  ```

- 方法二

  在元素里用:style来进行样式的改变，在data里定义platform的css样式,在ccs里-变成大写的驼峰命名，如在css的background-color在data里面写成backgroundColor，改变css样式的话只需改变platform里面的元素的值就可以了

  ```vue
  <template>
  	<view :style="platform"></view>
  	<view @click="changeYs()"></view>
  </template>
  
  <script>
  export default {
      data(){
        return {
            platform: {
                width:'80%',
                height:'200rpx',
                animationPlayState: 'paused',
                animationDelay: '0.5s',
            },
        }  
      },
      methods: {
          //点击改变样式
          changeYs(){
              this.platform.height = '100rpx';
          },
      },
  }
  </script>
  
  ```

- 方法三，还是:style改变单个css的值，如下

  ```vue
  <template>
  	<view :style="'color:' + chazhi"></view>
  	<view @click="changeYs()"></view>
  </template>
  
  <script>
  export default {
      data(){
        return {
           chazhi:'red',
        }  
      },
      methods: {
          //点击改变样式
          changeYs(){
              this.chazhi = 'green';
          },
      },
  }
  </script>
  ```

- 方法四，通过ref修改(这个方法有时候可能拿不到style所以要是不能用就用上面的就够了)

  在元素里添加ref，再在methods里面改变的时候用$refs就能获取

  ```vue
  <template>
  	<view class="abcc" ref="masklaye"></view>
  	<view @click="changeYs()"></view>
  </template>
  
  <script>
  export default {
      data(){
        return {
           
        }  
      },
      methods: {
          //点击改变样式
          changeYs(){
              console.log('查看abcc的css样式',this.$refs.masklaye.style);
              this.$refs.masklaye.style.width = '300rpx';
          },
      },
  }
  </script>
  <style>
      .abcc{
          width: 100%;
          height:200rpx;
          color:#ffcccc;
      }
  </style>
  ```

- 实战小例子：实现tab切换效果

  ```vue
  <template>
  	<view class="content">
  		<view class="tabBox">
  			<view class="atabs" v-for="(item,index) in tabList" :key="index">
  				<view @click="getTitle(index)" :class="clils == index ? 'aTab' : 'aTab2'">{{item.name}}</view>
  			</view>
  		</view>
  	</view>
  </template>
  
  <script>
  	export default {
  		data(){
  			return {
  				tabList:[
  					{
  						name: '标题1',
  					},
  					{
  						name: '标题2',
  					},
  					{
  						name: '标题3',
  					},
  					{
  						name: '标题4',
  					},
  				],
  				clils: 0,
  			}
  		},
  		onLoad() {
  			
  		},
  		methods:{
  			getTitle(e){
  				this.clils = e;
  				console.log('得到',e);
  			},
  		},
  	}
  </script>
  
  <style >
  page{
  	width:100%;
  	height:100%;
  }
  .content{
  	width:100%;
  	height:100%;
  	display:flex;
  }
  .tabBox{
  	width: 100%;
  	height: 100rpx;
  	margin-top: 100rpx;
  	background-color: #ccc;
  	display: flex;
  }
  .atabs{
  	height: 100%;
  	width: 100%;
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	background-color: #3ab0bd;
  }
  .aTab{
  	width: 100%;
  	height: 100%;
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	border: 1rpx solid #ccc;
  	color: #fff;
  	background-color: #65bd36;
  }
  .aTab2{
  	width: 100%;
  	height: 100%;
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	border: 1rpx solid #ccc;
  	color: #fff;
  	background-color: #aaaaff;
  }
  </style>
  ```

  

这几个方法算是比较通俗易懂的，可以结合在一起用不会受影响的。





