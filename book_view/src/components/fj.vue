<template>
	<div class="dd">
		<header class="div1">
			<router-link to='ss'><img src="../../img/ss.gif" class="img2"></router-link>
			<ul>
				<router-link to='/index' style="text-decoration: none;color: black;">
					<li class="li1">发现</li>
				</router-link>
				<li class="li2" style="border-bottom: 2px solid yellow;">附近</li>
			</ul>
			<router-link to='tj'><img src="../../img/tj.gif" class="img1"></router-link>
		</header>
		<div class="div3">
			<p>附近没有好玩的我来发布一个</p>
			<button>我来发布一个</button>
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
				<router-link to='/UserMessage' style="text-decoration: none;color: black;">

					<li class="li5">我的</li>
				</router-link>
			</ul>
		</footer>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.li3 {
		background: url(../../img/zhuy1.gif) no-repeat;
		background-size: contain;
		text-indent: 0px;
		line-height: 160px;
	}
	
	.li5 {
		background: url(../../img/gr1.gif) no-repeat;
		background-size: contain;
		text-indent: 0px;
		line-height: 160px;
	}
	
	.div3 {
		text-align: center;
		padding-top: 400px;
	}
	
	.div3 p {
		font-size: 40px;
	}
	
	.div3 button {
		height: 80px;
		background: deepskyblue;
		width: 160px;
		font-size: 25px;
		color: white;
	}
	
	.dd {
		padding: 0;
		width: 100%;
		height: 1300px;
		background: #D1D1D1;
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
	
	footer ul li {
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
	
	.li2 {
		margin-left: 75px;
	}
	
	.div1 li {
		float: left;
		text-align: center;
		font-size: 38px;
		width: 90px;
	}
	
	.div1 ul {
		margin: 0 auto;
	}
	
	.div1 {
		display: flex;
		position: fixed;
		top: 0;
		width: 100%;
		background: white;
		height: 75px;
	}
	
	.img2 {
		margin-top: 10px;
		float: left;
		margin-left: 20px;
	}
	
	.img1 {
		margin-top: 10px;
		float: right;
		margin-right: 20px;
	}
	
	li {
		list-style: none;
	}
	.li4{
		background: url(../../img/tianjia1.gif) no-repeat;
		background-size: contain;
		text-indent: 0px;
		line-height: 160px;
	}
</style>