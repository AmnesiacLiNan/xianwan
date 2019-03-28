<template lang="html">
	<div class="divv">
		<div class="tb">
				<span style="float: left;font-size: 30px;margin-top: 5px;"><router-link to='index' style="text-decoration: none;color: white;">返回</router-link></span>
				<span>登入</span>
			</div>
		<div class="divv2">
			<div>
				<div class="box">
					<label>输入用户名：</label>
					<input v-model="username" placeholder="用户名" class="i1">
				</div>
				<div class="box">
					<label>输入密码：</label>
					<input v-model="password" placeholder="密码" class="i2" />
				</div>
				<div class="box1">
					<button v-on:click=userlogin() style="background: red;color: white;">登入</button>
					<router-link :to="{path:'/register'}"><button style="color: red;margin-top: 0.5rem;">注册</button></router-link>
				</div>
			</div>
		</div>
		<div style="text-align: center;margin-top: -30px;font-size: 40px;">
			<span>快速登入</span>
		</div>
		<div style="text-align: center;margin-top: 30px;">
			<img src="../../img/weix.gif" style="border-radius: 50%;"/>
		</div>
		<footer>
			<ul class="ul1">
				<router-link to='/index' style="text-decoration: none;color: black;">
					<li class="li3">闲玩</li>
				</router-link>
			</ul>
			<ul class="ul2">
				<li class="li6">新建</li>
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
			}
		},
		methods: {
			userlogin: function(event) {
				this.$http.post('/api/users/login', {
					username: this.username,
					password: this.password
				}).then((data) => {
					if(data.body.status == 1) {
						alert(data.body.message)
					} else {
						let save_token = {
							token: data.body.data.token,
							username: this.username,
						}
						localStorage.setItem('token', data.body.data.token);
						localStorage.setItem('username', data.body.data.user[0].username);
						localStorage.setItem('_id', data.body.data.user[0]._id);
						this.$router.push({
							path: 'index'
						})
					}
				})
			},
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
	.tb {
		background: #4a81d1;
		text-align: center;
		height: 70px;
		padding: 10px 5px;
	}
	
	.tb span {
		font-size: 40px;
		color: white;
	}
	
	.divv {
		height: 1300px;
	}
	
	.divv2 {
		padding-top: 75px;
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
	.ul1 {
		margin-left: 20px;
		padding-left: 0;
		float: left;
		margin-top: 10px;
	}
	
	.ul2 {
		margin: 0 auto;
		margin-top: 10px;
	}
	
	.ul3 {
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
		margin-top: 100px;
		border-bottom: 1px solid #D1D1D1;
		height: 300px;
	}
	.li6{
		background: url(../../img/tianjia1.gif) no-repeat;
		background-size: contain;
		text-indent: 0px;
		line-height: 160px;
	}
	.box1 button {
		width: 90%;
		height: 70px;
		border-radius: 15px;
		font-size: 40px;
	}
</style>