<template lang="html">
	<div class="div1">
		<div>
			<div v-if=!isLogin class="header">
				<Row>
					<i-col>
						<router-link to="/login">
							<div class="header_menu">
								<Icon type="person" />
								<ul>
									<li>未登录</li>
									<li>点击登录，发现更多好玩的地方！</li>
								</ul>
							</div>
						</router-link>
					</i-col>
				</Row>
			</div>
			<div v-else class="header">
				<Row>
					<i-col>
						<router-link :to="{path: '/index', query:{ id: id }}">
							<div class="header_menu">
								<Icon type="person" />已登录：{{username}}</div>
						</router-link>
					</i-col>
				</Row>
			</div>
		</div>
		<div>
			<p class="p1"><img src="../../img/bj.gif">我创建的笔记<span style="float: right;margin-right: 20px;">></span></p>
			<div class="div2">
				<ul class="ul1">
					<li class="li1"><img src="../../img/gz2.gif">我喜欢的笔记<span style="float: right;margin-right: 20px;">></span></li>
					<li><img src="../../img/zj.gif">我浏览的笔记<span style="float: right;margin-right: 20px;">></span></li>
				</ul>
			</div>
		</div>
		<footer>
			<ul class="ul4">
				<router-link to='/index' style="text-decoration: none;color: black;">
					<li class="li3">闲玩</li>
				</router-link>
			</ul>
			<ul class="ul5">
			
				<li class="li4">新建</li>
			</ul>
			<ul class="ul6">
				<li class="li5">我的</li>
				</router-link>
			</ul>
		</footer>
	</div>
</template>.
<script>
	export default {
		data() {
			return {
				isLogin: false,
				username: '',
			}
		},
		created() {
			//    姝ゆ椂鐧诲綍鎴愬姛
			let token = localStorage.getItem('token')
			//    console.log(token)
			if(token) {
				this.isLogin = true
				this.username = localStorage.getItem('username')
				this.id = localStorage.getItem('_id')
			} else {
				console.log('信息错误');
				//      this.localStorage.setItem(data.body.data);
			}
		}
	}
</script>
<style scoped>
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
	
	footer ul li {
		font-size: 30px
	}
	
	.li4{
		background: url(../../img/tianjia1.gif) no-repeat;
		background-size: contain;
		text-indent: 0px;
		line-height: 160px;
	}
	.ul4 {
		margin-left: 20px;
		padding-left: 0;
		float: left;
		margin-top: 10px;
	}
	
	.ul5 {
		margin: 0 auto;
		margin-top: 10px;
		
	}
	
	.ul6 {
		float: right;
		margin-right: 20px;
		margin-top: 10px;
	}
	
	.li3 {
		background: url(../../img/zhuy2.gif) no-repeat;
		background-size: contain;
		text-indent: 0px;
		line-height: 160px;
	}
	
	.li5 {
		background: url(../../img/gr2.gif) no-repeat;
		background-size: contain;
		text-indent: 0px;
		line-height: 160px;
	}
	
	.div2 {
		height: 50px;
	}
	
	.div1 {
		background: #f0eff4;
		height: 1350px;
	}
	
	.p1 {
		margin-top: 20px;
		font-size: 40px;
		background: white;
		height: 80px;
		padding-top: 10px;
		padding-left: 20px;
	}
	
	.ul1 {
		padding-left: 20px;
		margin-top: 20px;
		background: white;
	}
	
	.ul1 li {
		padding-top: 10px;
		padding-bottom: 10px;
		font-size: 40px;
	}
	
	.ul1 li,
	img {
		vertical-align: middle;
	}
	
	.li1 {
		border-bottom: 1px solid #f0eff4;
	}
	
	.header {
		width: 100%;
		height: 230px;
		text-align: center;
		background-color: #c3bbbb;
	}
	
	.header_menu {
		margin-top: 50px;
		color: #fff;
		font-size: 30px;
	}
	
	li {
		list-style: none;
	}
</style>