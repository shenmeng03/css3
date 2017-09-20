// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from './components/goods/goods';
import rating from './components/rating/rating';
import seller from './components/seller/seller';

Vue.use(VueRouter);
Vue.use(VueResource);
const router = new VueRouter({
	linkActiveClass: 'active',
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: goods
    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/rating',
      component: rating
    },
    {
      path: '/seller',
      component: seller
    }
  ]
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  computed: {
    ViewComponent () {
      return router[this.goods];
    }
  },
  render: h => h(App)
});
