<template>
	<view class="content">
		<view class="u-flex bottom_btns">
			<view class="menu_item" @click="changePage(1)">
				<image src="/static/bottom-bar/home2.png" v-if="arrIndex == 1" mode="aspectFit"></image>
				<image src="/static/bottom-bar/home1.png" v-else mode="aspectFit"></image>
				<view class="sub_title u-padding-top-10" :class="{'main_text':arrIndex == 1}">首页</view>
			</view>
			<view class="menu_item" @click="changePage(2)">
				<image src="/static/bottom-bar/like2.png" v-if="arrIndex == 2" mode="aspectFit"></image>
				<image src="/static/bottom-bar/like1.png" v-else mode="aspectFit"></image>
				<view class="sub_title u-padding-top-10" :class="{'main_text':arrIndex == 2}">线下体验</view>
			</view>
			<view class="menu_item" @click="changePage(3)">
				<image src="/static/bottom-bar/mine1.png" v-if="arrIndex == 3" mode="aspectFit"></image>
				<image src="/static/bottom-bar/mine2.png" v-else mode="aspectFit"></image>
				<view class="sub_title u-padding-top-10" :class="{'main_text':arrIndex == 3}">会员中心</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['arrIndex'],
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {
			changePage(val){
				if(this.arrIndex != val)
					switch(val){
						case 1:
							uni.reLaunch({
								url:'/pages/home/index'
							})
							break;
						case 2:
							// uni.reLaunch({
							// 	url:'/pages/guide/index'
							// })
							break;
						case 3:
							// uni.reLaunch({
							// 	url:'/pages/order/index'
							// })
							break;
						default:
							uni.reLaunch({
								url:'/pages/home/index'
							})
							break;
					}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bottom_btns{
		position: fixed;
		bottom: 0;
		width: 100%;
		padding: 10rpx 0;
		background-color: #FFFFFF;
	}
	.menu_item{
		width: 33.3%;
		text-align: center;
		image{
			width: 44rpx;
			height: 44rpx;
		}
	}
</style>
