<template>
	<div class="dd">
		<header class="div1">
			<router-link to='ss'><img src="../../img/ss.gif" class="img2"></router-link>
			<ul>
				<li class="li1" style="border-bottom: 2px solid yellow;">发现</li>
				<router-link to='/fj' style="text-decoration: none;color: black;">
					<li class="li2">附近</li>
				</router-link>
			</ul>
			<router-link to='tj'><img src="../../img/tj.gif" class="img1"></router-link>
		</header>
		<div class="lbt">
			<Carousel autoplay v-model="value2" loop>
				<div v-for="i in srca">
					<CarouselItem>
						<div class="demo-carousel"><img :src="i.src" class="img3"></div>
					</CarouselItem>
				</div>
			</Carousel>
		</div>
		<div class="div2">
			<ul class="ul4">
				<li class="imgl1" style="margin-right: 5px;">
					<img src="../../img/l1.jpg" style="width: 100%;">
					<span class="span1"><img src="../../img/ax.gif">0</span>
					<span class="span2">免费</span>
				</li>
				<li class="imgl1" style="margin-right: 5px;">
					<img src="../../img/l2.jpg" style="width: 100%;">
					<span class="span1"><img src="../../img/ax.gif">0</span>
					<span class="span2">免费</span>
				</li>
			</ul>
			<ul class="ul4">
				<li class="imgl1" style="margin-right: 5px;">
					<img src="../../img/l3.jpg" style="width: 100%;">
					<span class="span1"><img src="../../img/ax.gif">0</span>
					<span class="span2">免费</span>
				</li>
				<li class="imgl1" style="margin-right: 5px;">
					<img src="../../img/l4.jpg" style="width: 100%;">
					<span class="span1"><img src="../../img/ax.gif">0</span>
					<span class="span2">免费</span>
				</li>
			</ul>
			<ul class="ul4">
				<li class="imgl1" style="margin-right: 5px;">
					<img src="../../img/l5.jpg" style="width: 100%;">
					<span class="span1"><img src="../../img/ax.gif">0</span>
					<span class="span2">免费</span>
					<span class="span3"></span>
				</li>
				<li class="imgl1" style="margin-right: 5px;">
					<img src="../../img/l6.jpg" style="width: 100%;">
					<span class="span1"><img src="../../img/ax.gif">0</span>
					<span class="span2">免费</span>
				</li>
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
	import Divider from "iview/src/components/divider/divider";
	export default {
		components: {
			Divider
		},
		data() {
			return {
				value2: 0,
				srca: undefined
				
			}
		},
		created() {
			this.$http.post('/api/lubo/lubos').then((data) => {
				this.srca = data.body.data;
			})
		}
	}
</script>
<style scoped="scoped">
	.imgl1 {
		position: relative;
	}
	
	.imgl2 {
		position: relative;
	}
	
	.imgl1 .span1 {
		left: 20px;
		top: 10px;
		position: absolute;
	}
	
	.imgl1 .span2 {
		right: 10px;
		top: 10px;
		position: absolute;
		color: white;
		background: rgba(205, 84, 77, 0.5);
		padding: 5px 20px;
		border-radius: 30px;
	}
	
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
	.li4{
		background: url(../../img/tianjia1.gif) no-repeat;
		background-size: contain;
		text-indent: 0px;
		line-height: 160px;
	}
	.ul4 {
		display: flex;
		margin: 0;
		padding: 0;
		margin-bottom: 5px;
		width: 100%;
	}
	
	.ul4 li {
		width: 100%;
		font-size: 25px;
		color: white;
	}
	
	.dd {
		padding: 0;
		width: 100%;
		/*background: #D1D1D1;*/
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
		z-index: 1;
		display: flex;
		position: fixed;
		top: 0;
		width: 100%;
		background: white;
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
	
	.img3 {
		width: 100%;
		height: 400px;
	}
	
	li {
		list-style: none;
	}
	
	.lbt {
		z-index: -1;
		margin-top: 65px;
	}
</style>