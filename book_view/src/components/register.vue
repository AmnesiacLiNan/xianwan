<template lang="html">
	<div class="divv">
		<div>
			<div class="tb">
				<span style="float: left;font-size: 30px;margin-top: 5px;"><router-link to='index' style="text-decoration: none;color: white;">返回</router-link></span>
				<span>注册</span>
			</div>
			<div class="divv2">
				<div class="box">
					<label>输入用户名：</label>
					<input v-model="username" placeholder="用户名" class="i1">
				</div>
				<div class="box">
					<label>输入密码：</label>
					<input v-model="password" placeholder="密码" class="i2">
				</div>
				<div class="box">
					<label>再次输入密码：</label>
					<input v-model="rePassword" placeholder="请再次输入密码" class="i3">
				</div>

				<div class="box1" style="margin-top: 100px;">
					<button v-on:click="userRegister()" style="color: red;">注册</button>
				</div>
				<div class="box1" style="margin-top: 0.5rem;">
					<router-link :to="{path:'/login'}"><button style="background: red;color: white;">使用已有账号登入</button></router-link>
				</div>
			</div>
		</div>
		<footer>
			<ul class="ul1">
				<router-link to='/index' style="text-decoration: none;color: black;">
				
					<li class="li3">闲玩</li>
				</router-link>
			</ul>
			<ul class="ul2">
			
				<li class="li4">新建</li>
			</ul>
			<ul class="ul3">
			
				<li class="li5">我的</li>

			</ul>
		</footer>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				rePassword: ''
			}
		},
		methods: {
			userRegister: function(event) {
				if(this.password != this.rePassword) {
					alert("两次密码不一致")
				} else {
					let sendDate = {
						username: this.username,
						password: this.password,
					}
					this.$http.post('/api/users/register', sendDate).then((data) => {
						if(data.body.status == 1) {
							alert(data.body.message)
						} else {
							alert("注册成功")
							this.$router.push({
								path: 'index'
							})
						}
					})
				}
			}
		}
	}
</script>
<style scoped="scoped">
	.li3{
		background: url(../../img/zhuy2.gif) no-repeat;
		background-size: contain;
		text-indent: 0px;
		line-height: 160px;
	}
		.li5{
		background: url(../../img/gr2.gif) no-repeat;
		background-size: contain;
		text-indent: 0px;
		line-height: 160px;
	}
	.tb{
		background: #4a81d1;
		text-align: center;
		height: 70px;
		padding: 10px 5px;
	}
	.tb span{
		font-size: 40px;
		color: white;
	}
footer {
		clear: both;
		display: flex;
		position: fixed;
		width: 100%;
		background: #f0eff4;
		height: 120px;
		bottom: 0;
		padding: 0;
	}
	footer ul li{
		font-size: 30px
	}
	.ul1{
		margin-left: 20px;
		padding-left: 0;
		float: left;
		margin-top: 10px;
	}
	.ul2{
		margin: 0 auto;
		margin-top: 10px;
	}
	.ul3{
		float: right;
		margin-right: 20px;
		margin-top: 10px;
	}
	
	li {
		list-style: none;
	}
	
.box {
		margin-bottom: 30px;
	}
	
	.box label {
		font-size: 30px;
		margin-left: 20px;
	}
	
	.box input {
		font-size: 30px;
		height: 70px;
		border-radius: 5px;
	}
	
	.i1 {
		width: 65%;
		margin-left: 30px;
	}
	
	.i2 {
		width: 65%;
		margin-left: 60px;
	}
	
	.box1 {
		text-align: center;
		margin-top: 450px;
	}
	
	.box1 button {
		width: 90%;
		height: 70px;
		border-radius: 15px;
		font-size: 40px;
	}
	
	.i3 {
		width: 65.5%;
	}
	
	
	.divv {
		
		height: 1300px;
	}
	.divv2 {
		padding-top: 75px;
	}
	.li4{
		background: url(../../img/tianjia1.gif) no-repeat;
		background-size: contain;
		text-indent: 0px;
		line-height: 160px;
	}
</style>