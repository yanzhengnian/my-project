<template>
	<div id="firstcomponent">
		<h1>I am a title.</h1>
		<a >written by {{ author }}</a>
		<ul>
			<li><router-link to="/first">点我跳转第一页</router-link></li>
			<li><router-link to="/second">点我跳转第二页</router-link></li>
		</ul>
	</div>
</template>

<script type="text/javascript">
export default {
	data () {
		return {
			author: "微信公众号 jinkey-love!!!"
		};
	}
};
</script>

<style rel="stylesheet/less" lang="less">
#firstcomponent{
	color: red;
	ul{
		list-style: none;
	}
}
</style>
