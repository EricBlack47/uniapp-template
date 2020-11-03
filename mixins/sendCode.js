const sendCode = {
	data(){
		return{
			sendCode: false, //验证码
			times: 60,
		}
	},
	methods:{
		//获取验证码
		sendTextCode() {
			this.sendCode = true
			this.timer = setInterval(() => {
				if (this.times > 0 && this.times <= 60) {
					this.times--
				} else {
					this.sendCode = false
					clearInterval(this.timer)
				}
			}, 1000)
		},
		//消息失败
		showFalse() {
			this.$u.toast('60s内不能重复发送')
		},
	}
}

export default sendCode