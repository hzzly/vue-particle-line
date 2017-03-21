<template>
	<div id="regist">
		<router-link to="/menu">
			<div class="back" @click="back()"></div>			
		</router-link>

		<div class="regist-box">
			<div class="logo"></div>
			<form>
				<div class="ipunt-wrap">
					<label for="username" class="icon-user"></label>
					<input type="text" id="username" placeholder="姓名" v-model="username">
				</div>
				<div class="ipunt-wrap">
					<label for="phone" class="icon-phone"></label>
					<input type="text" id="phone" placeholder="手机号" v-model="phone">
				</div>
				<div class="ipunt-wrap">
					<label for="password" class="icon-password"></label>
					<input type="password" id="password" placeholder="密码" v-model="password">
				</div>
				<div class="ipunt-wrap">
					<label for="confimpassword" class="icon-password"></label>
					<input type="password" id="confimpassword" placeholder="确认密码" v-model="confimpassword">
				</div>
				<div class="button">
					<a class="gv" href="javascript:;" @click="Regist()">注册</a>
				</div>
				<div class="toregist">
					已有账号？<router-link to="/customer-login"><a href="javascript:;">去登录</a></router-link>
				</div>
			</form>
		</div>
		<v-dialog v-show="dialog" :dialog-msg="dialogMsg" @confirm="confirm"></v-dialog>
	</div>
</template>

<script>

import dialog from '@/components/Dialog'

export default {
	props: {
		login: {
			type: Boolean
		},
		admin: {
			type: Boolean
		},
		customer: {
			type: Boolean
		}
	},
	data() {
		return {
			username: '',
			phone: '',
			password: '',
			confimpassword: '',
			dialog: false,
			dialogMsg: ''
		}
	},
	mounted() {

	},
	
	methods: {
		confirm() {
			this.dialog = false
		},
		back() {
			this.$emit('back')
		},
		Regist() {
			if (!this.username || !this.phone || !this.password || !this.confimpassword) {
				this.dialog = true
				this.dialogMsg = '请填写完整'
				return
			}
			if (this.password !== this.confimpassword) {
				this.dialog = true
				this.dialogMsg = '两次密码不相等'
				return
			}
			if (!(/^1[34578]\d{9}$/).test(this.phone)) {
				this.dialog = true
				this.dialogMsg = '您的手机号码输入有误，请重新输入'
				return
			}
			var user = {
				username: this.username,
				password: this.password,
				phone: this.phone
			}
			$.ajax({
				url: 'http://hjingren.cn/thinkphp/index.php/home/Login/register',
				type: 'post',
				dataType: 'json',
				data: user,
				success: (res) => {
					console.log(res)
					if (res.success) {
						this.dialog = true
						this.dialogMsg = '注册成功，正在前往登录'
						this.$router.push('/customer-login')
					} else {
						this.dialog = true
						this.dialogMsg = '注册失败'
					}
				}
			});
			
		}
	},
	components: {
		'v-dialog': dialog
	},
}
</script>

<style scoped>
#regist {
	height: 100%;
	overflow: hidden;
	position: relative;
}
.back{
	position: fixed;
	left: 20px;
	top: 20px;
	width: 30px;
	height: 30px;
	background: url('../assets/images/back.png') no-repeat;
	background-size: cover;
	cursor: pointer;
}

.gv {
	text-decoration: none;
    background: url('../assets/images/nav_gv.png') repeat 0px 0px;
    width: 130px;
    height: 43px;
    display: block;
    text-align: center;
    line-height: 43px;
    cursor: pointer;
    float: left;
    margin: 10px 2px 10px 2px;
    font: 18px/43px 'microsoft yahei';
    color: #066197;
}
a.gv:hover { 
	background: url('../assets/images/nav_gv.png') repeat 0px -43px; 
	color:#1d7eb8;
	-webkit-box-shadow: 0 0 6px #1d7eb8;
	transition-duration: 0.5s;
}

.regist-box {
	width: 700px;
	padding: 50px;
	margin: 40px auto;
	display: flex;
	z-index: 10001;
}
.regist-box .logo{
	width: 300px;
	height: 120px;
	margin: 40px;
	background: url('../assets/images/logo.png') no-repeat;
	/* background: red; */
	background-size: cover;
}
.ipunt-wrap label{
	display: inline-block;
	width: 25px;
	height: 25px;
	vertical-align: middle;
	margin-right: 10px;
	background-size: cover;
}
.icon-user{
	background: url('../assets/images/user.png') no-repeat;
}
.icon-phone{
	background: url('../assets/images/phone.png') no-repeat;
}
.icon-password{
	background: url('../assets/images/password.png') no-repeat;
}

.ipunt-wrap input{
	border: none;
	outline: none;
	background: none;
	border-bottom: 1px solid #fff;
	margin-top: 30px;
	width: 200px;
	height: 30px;
	line-height: 30px;
	/* text-align: center; */
	color: #fff;
	font-size: 14px;
	padding: 0 5px;
}
.button {
	margin-top: 30px;
    margin-left: 60px
}
.toregist{
	font-size: 12px;
	float: right;
	padding-top: 20px;
	color: #fff;
	z-index: 10001;
}
.toregist a{
	color: #066197;
	text-decoration: none;
}

</style>