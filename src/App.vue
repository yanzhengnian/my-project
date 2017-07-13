<template>
  <div id="app">
    <!-- <v-header :seller="seller"></v-header> -->
    <!--<img src="./assets/logo.png">-->
    <!--<firstcomponent></firstcomponent>-->
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import header from './components/header/header.vue';
const ERR_OK = 0;

export default {
  // name: 'app',
  data () {
    return {
      // msg: 'Hello Vue!!!',
      seller: {},
      goods: {}
    };
  },
  created() {
    this.$http.get('/api/seller').then((res) => {
      res = res.body;
      if(res.errno === ERR_OK) {
        console.log(res.data);
        // this.seller = Object.assign({}, this.seller, res.data);
        this.seller = res.data;
      }
    });
  },
  components: {
    'v-header': header
  }
};
</script>

<style rel="stylesheet/less" lang="less" scoped>
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
  .tab{
    background-color: #dcdcdc;
    display: flex;
    width: 100%;
    height: 40px;
    .border-1px(rgba(7,17,27,0.1))
    .tab-item{
      flex: 1;
      text-align: center;
      & > a{
        display: block;
        font-size: 14px;
        color: rgb(77,85,93);
        &.active{
          color: rgb(240,20,20);
        }
      }
    }
  }
}
</style>
