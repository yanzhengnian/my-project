<template>
  <div id="secondcomponent">
    <h1>I am another page</h1>
    <p class="articles">
      <ul v-for="item in articles" >
        <li>{{ item.title }}</li>
      </ul>
    </p>
    <a> written by {{ author }} </a>
    <p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
  </div>
</template>

<script>
export default {
	data() {
		return {
			author: '微信公众号 jinkey-love',
			articles: []
		}
	},
	mounted() {
		this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10').then((response) => {
	      // 这里是处理正确的回调
	        this.articles = response.body.subjects;
	        // this.articles = response.data["subjects"] 也可以
	    }, (response) => {
	        // 这里是处理错误的回调
	        console.log(response)
	    })
	}
}
</script>
<style rel="stylesheet/less" lang="less" scoped>
// @import "../common/less/index.less";
#secondcomponent{
	width: 400px;
	margin: 0 auto;
	.articles{
		border: 1px solid #ddd;

		ul{
			list-style: none;
		}
	}
}
</style>
