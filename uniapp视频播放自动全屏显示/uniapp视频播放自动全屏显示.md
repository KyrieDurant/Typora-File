### uniapp视频点击播放全屏显示

> video在uniapp中@play在开始/继续播放时触发的事件， uni.createVideoContext(videoId, this)为视频的传入组件，videoContext 对象中的requestFullScreen为进入全屏，在进行@play的方法中进行全屏事件的添加就可在点击播放时触发全屏。

```vue
<template>
	<view>
		<view class="page-body">
			<view class="page-section">
				<video @play="quanpingVideo()" :src="src" id="myVideo" controls>
				</video>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/360e4b20-4f4b-11eb-8a36-ebb87efcf8c0.mp4',
			}
		},
		methods: {
			//点击播放自动全屏
			quanpingVideo(){
				this.videoContext = uni.createVideoContext('myVideo');//定义视频播放
				console.log('开始播放');
				this.videoContext.requestFullScreen();//视频全屏
			},
		}
	}
</script>

<style>
</style>

```

