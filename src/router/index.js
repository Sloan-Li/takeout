import Vue from "vue";
import VueRouter from "vue-router";
// 引入组件
import goods from "@/components/Goods";
import ratings from "@/components/Ratings";
import seller from "@/components/Seller";
import product from "@/components/product/index";

Vue.use(VueRouter);

// 导出并配置路由
export default new VueRouter({
  routes: [{
    path: '/',
    name:goods,
    component: goods
  },
  {
    path: '/goods',
    name: 'goods',
    component: goods
  },
  {
    path: '/ratings',
    name: 'ratings',
    component: ratings
  },
  {
    path: '/seller',
    name: 'seller',
    component: seller
  },
  {
    path: '/product',
    name: 'product',
    component: product
  }
  ],
  linkActiveClass: 'active'
});