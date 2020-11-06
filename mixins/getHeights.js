const getHeights = {
	computed: {
		//获取顶部高度
		heights() {
			let height = 0
			uni.getSystemInfo({
				success: function(e) {
					height = e.statusBarHeight
					if (e.platform == 'android') {
						height = e.statusBarHeight + 50 + 85
					} else {
						height = e.statusBarHeight + 45 + 85
					}
				}
			})
			return height
		}
	}
}
export default getHeights
