### uniapp时间戳转换格式

>步骤

1. 示例框架为下图，index为界面内容，test.json为示例的时间戳，通过请求拿到时间戳后把时间戳进行转换

   <img src="https://ask.qcloudimg.com/http-save/7256485/6orvh69drf.png?imageView2/2/w/1620" alt="img" style="zoom: 80%;" />

2. 假设json的时间戳数据为下：

   ```json
   {
   "time":"1588061853944"
   }
   ```

> 完整代码示例

```vue
<template>
    <view>
        <view class="text-cut">
            {{timeArray.time | formatDate}}
        </view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                timeArray: [],
            };
        },
        onLoad() {
            this.getList();
        },
        methods: {
            getList() {
                uni.request({
                    url: "../../static/test.json",
                    method: 'get',
                    dataType: 'json',
                    success: (res) => {
                        console.log(res.data);
                        this.timeArray = res.data;
                    },
                    // fail: function (err) {
                    //        console.log("服务器繁忙")
                    // }                
                });
            },
    
        },
        //时间戳的处理    
        filters: {
            formatDate: function() {
                var date = new Date();
                var month = date.getMonth() + 1;
                var hours = date.getHours();
                if (hours < 10)
                    hours = "0" + hours;
                var minutes = date.getMinutes();
                if (minutes < 10)
                    minutes = "0" + minutes;
                var time = date.getFullYear() + "-" + month + "-" + date.getDate() +
                    " " + hours + ":" + minutes;
                return time;
            }

        },
    }
</script>
<style>
</style>
```

