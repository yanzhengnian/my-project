<template>
  <div class="header">
  	<div class="content-wrapper">
		<div class="avatar">
			<img :src="seller.avatar" width="64" height="64">
		</div>
		<div class="content">
			<div class="title">
				<span class="brand"></span>
				<span class="name">{{ seller.name }}</span>
			</div>
			<div class="descript">
				{{ seller.description}}/{{seller.deliveryTime}}分钟送达
			</div>
			<div class="support">
				<span class="icon"></span>
				<span class="text">{{ seller.supports[0].description}}</span>
			</div>
		</div>
		<div class="support-count"></div>
  	</div>
  	<div class="bulletin-wrapper"></div>
  </div>
</template>

<script type="text/javascript">
export default {
	props: {
		seller: {
			type: Object
		}
	}
} 
</script>

<style lang="less" rel="stylesheet/less"> 




.header{
	position: relative; 
	color: #fff;
	overflow: hidden;
	background-color: rgba(7,17,27,0.5);
	.content-wrapper{
		padding: 24px 12px 18px 24px;

	}
	.avatar{
		display: inline-block;
		vertical-align: top;
		img{
			border-radius: 2px
		}
	}
	.content{
		display: inline-block;
		margin-left: 16px;
		font-size: 14px;
		.title{
			margin: 2px 0 8px 0;
		}
		.brand{
			display: inline-block;
			vertical-align: top;
			width: 30px;
			height: 18px;
			// .bg-image("brand@2x.png");
		}
	}
}
</style>
