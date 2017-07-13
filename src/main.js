// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods.vue';
import ratings from './components/ratings.vue';
import seller from './components/seller.vue';
import secondcomponent from './components/secondcomponent.vue';

Vue.config.debug = true;
Vue.use(VueResource);
Vue.use(VueRouter);

const First = {template: '<div><h2>第一个子页面</h2></div>'};
const routes = [
  {
    path: '/',
    component: secondcomponent
  }, {
    path: '/goods',
    component: goods
  }, {
    path: '/ratings',
    component: ratings
  }, {
    path: '/seller',
    component: seller
  }
]
//创建一个路由实例，并且配置路由规则
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: routes
});

const app = new Vue({
	router: router,
  template: '<App/>',
  components: { App},
	//render: h() => h(App)
}).$mount('#app');



// Vue.config.productionTip = false;

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// });
