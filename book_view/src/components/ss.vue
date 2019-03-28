<template>
	<div class="dd">
		<header>
			<ul>
				<li style="margin: 10px;margin-left: 2%;"><router-link to='index' style="text-decoration: none;"><img src="../../img/ca.gif"></router-link></li>
				<li style="width: 78%;margin-left: 2%;margin-right: 2%;"><input placeholder="输【夜景】或【成都】试试" style="width: 100%;height: 50px;text-indent: 10px;font-size: 30px;"></li>
				<li style="float: right;margin-right: 2%;margin-top: 5px;"><button style="border: none;	background: #4a81d1;;color: white;font-size: 30px;">搜索</button></li>
			</ul>
		</header>
		<div class="rm">
			<p style="margin-left: 30px;padding-top: 15px;font-size: 32px;">热门搜索</p>
		</div>
		<div class="div4">
			<ul class="ul5">
				<li style="margin-left: 17%;">重庆</li>
				<li style="margin-left: 5%;">湖</li>
				<li style="margin-left: 5%;">小吃</li>
				<li style="margin-left: 5%;">泸沽湖</li>
				<li style="margin-left: 5%;">古镇</li>
			
			</ul>
		</div>
		<footer>
			<ul class="ul1">
				
				<li class="li3">闲玩</li>
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
	.li4{
		background: url(../../img/tianjia1.gif) no-repeat;
		background-size: contain;
		text-indent: 0px;
		line-height: 160px;
	}
	.li3{
		background: url(../../img/zhuy1.gif) no-repeat;
		background-size: contain;
		text-indent: 0px;
		line-height: 160px;
	}
		.li5{
		background: url(../../img/gr1.gif) no-repeat;
		background-size: contain;
		text-indent: 0px;
		line-height: 160px;
	}
	header{
		background: #4a81d1;
		width: 100%;
		height: 100px;
	}
	header ul{
		padding-top: 25px;
		display: flex;
	}
	.rm{
		background: #f9f9f9;
		height: 80px;
	}
	.div4{
		background: white;
		height: 200px;
	}
	.ul5 {
		display: flex;
		padding-top: 80px;
	}
	.ul5 li{
		border: 1px solid #CCCCCC;
		border-radius: 3px;
		padding: 5px 10px;
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
	li{
		list-style: none;
	}
	.dd{
		background: #D1D1D1;
		height: 1300px;
	}
</style>