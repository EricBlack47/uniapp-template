<template>
	<u-sticky>
		<view class="u-flex main_body" :style="{paddingTop:heights-70+'rpx'}">
			<view class="left_icon" @click="goBack">
				<u-icon name="arrow-left" color="#fff" size="36"></u-icon>
			</view>
			<view class="title">
				{{titleName}}
			</view>
			<view class="right_part">
				<slot></slot>
			</view>
		</view>
	</u-sticky>

</template>

<script>
	import getHeights from '@/mixins/getHeights.js'
	export default {
		props: ['titleName'],
		mixins: [getHeights],
		data() {
			return {

			}
		},
		methods: {
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			}
		},
		onLoad() {

		}
	}
</script>

<style lang="scss" scoped>
	.main_body {
		background-color: $total-main-font-color;
		color: #fff;
		font-size: 34rpx;
		padding: 30rpx;

		.left_icon {
			width: 15%;
		}

		.title {
			width: 70%;
			text-align: center;
		}

		.right_part {
			width: 15%;
		}
	}
</style>
