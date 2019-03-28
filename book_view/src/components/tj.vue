<template>
	<div class="div1">
		<div>
			<header>
				<p style="float: left;margin-left: 10px;">
					<router-link to="index"style="text-decoration: none;color: white;"><</router-link></p>
						<p style="margin: 0 auto;margin-top: 10px;">新建闲玩笔记</p>
						<P style="float: right;margin-right: 10px;">发布</P>
			</header>
		</div>
		<div class="div2">
			<span style="float: left;margin-top: 16px;">链接：</span>
			<input type="text" placeholder="参考链接这里粘贴" style="border: none;width: 70%;height: 50px;margin-top: 20px;font-size: 40px;" />
			<button style="float: right;width: 100px;height: 40px;margin-top: 20px;background: white;border: none;font-size: 40px;">打开</button>
		</div>
		<div>
			<textarea placeholder="闲玩笔记说明，如：适合季节、所需费用、注意事项等。" style="width: 100%;border: none;height: 300px;font-size: 26px;text-indent: 20px;color:#757575;"></textarea>
		</div>
		<div style="border-top:1px solid #D1D1D1 ;border-bottom: 1px solid #D1D1D1;height: 200px;">
			<div style="border-bottom: 1px solid #D1D1D1;height: 70px;">
				<div style="margin-top: 30px;">
					<span style="font-size: 30px;margin-left: 30px;">位置：</span>
					<input type="text" placeholder="湖南省岳阳市岳阳楼区青年中路-聚轩鸟苑附件13米" style="border: none;font-size: 30px;" />
					<span style="float: right;margin-right: 30px;color:#999999;">></span>
				</div>
			</div>
			<div>
				<div style="height: 80px;">
					<span style="font-size: 30px; margin-top: 30px;margin-left: 30px;">百科：</span>
					<input type="text" placeholder="百科知识可做参考" style="border: none;font-size: 30px;margin-top: 30px;" />
					<button style="border-radius: 5px; background: white;width: 80px;height: 60px;float: right;margin-top: 10px;margin-right: 30px;">预览</button>
				</div>
			</div>
		</div>
		<div style="height: 60px;background: #D1D1D1 ">
			<p style="font-size: 30px;line-height: 60px;margin-left: 20px;">标签<span>(正确选择，更多人关注你哦！)</span></p>
		</div>
		<div>
			<ul class="ul6">
				<button style="border-radius: 10px;background: #D1D1D1; width: 80px;height: 57px;font-size: 36px;float: left;margin-top: 10px;">+</button>
				<li>免费</li>
				<li>射箭</li>
				<li>爬山</li>
				<li>赏花</li>
				<li>钓鱼</li>
				<li>钓龙虾</li>
				<li>划船</li>
				<li>夜景</li>
				<li>刺激</li>
				<li>演唱会</li>
				<li>甜品</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.ul6{
		margin: 10px;
		width: 98%;
	}
	.ul6 button{
		margin-left: 20px;
	}
	.ul6 li{
		padding: 10px 5px;
		float: left;
		margin-left: 20px;
		margin-top: 10px;
		border: 1px solid #D1D1D1;
		background: #D1D1D1;
		border-radius: 10px;
		color: white;
	}
	.div2 {
		width: 100%;
		height: 104px;
		margin: 0px auto;
		border-bottom: 1px solid #D1D1D1;
		font-size: 40px;
	}
	
	header {
		display: flex;
		background: #4a81d1;
		height: 80px;
		color: white;
		font-size: 40px
	}
	
	header p {
		margin-top: 10px;
	}
	li{
		list-style: none;
	}
</style>