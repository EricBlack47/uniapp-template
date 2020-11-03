//日期自定义格式化
function dateFormat(fmt, date) {
	let ret;
	let opt = {
		"Y+": date.getFullYear().toString(), // 年
		"m+": (date.getMonth() + 1).toString(), // 月
		"d+": date.getDate().toString(), // 日
		"H+": date.getHours().toString(), // 时
		"M+": date.getMinutes().toString(), // 分
		"S+": date.getSeconds().toString() // 秒
		// 有其他格式化字符需求可以继续添加，必须转化成字符串
	};
	for (let k in opt) {
		ret = new RegExp("(" + k + ")").exec(fmt);
		if (ret) {
			fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
		};
	};
	return fmt;
}

//储存用户
function setUserInfo(user) {
	uni.setStorageSync('distribution_user', JSON.stringify(user))
}

//储存token
function setToken(token) {
	uni.setStorageSync('distribution_token', JSON.stringify(token))
}

//获取token
function getToken() {
	let token = uni.getStorageSync('distribution_token')
	let finalToken = JSON.parse(token)
	if(finalToken)
		return finalToken
	else
		return false
}

//移除用户
function removeUser() {
	uni.clearStorageSync()
	setTimeout(() => {
		uni.reLaunch({
			url: '/pages/login-register/login'
		})
	}, 1500)
}

//获取用户
function getUser(){
	let user = uni.getStorageSync('distribution_user')
	let res = JSON.parse(user)
	if(res)
		return res
}

export {
	dateFormat,
	setUserInfo,
	removeUser,
	getUser,
	getToken,
	setToken
}
