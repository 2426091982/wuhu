import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页
import MSite from '../pages/MSite/MSite.vue'
// 搜索
import Search from '../pages/Search/Search.vue'
// 订单
import Order from '../pages/Order/Order.vue'
// 个人
import Profile from '../pages/Profile/Profile.vue'
// 商品页
import Goods from '../pages/Goods/Goods.vue'
// 登录页面
import Login from '../pages/Login/Login.vue'


Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  // 所有路由
  routes:[{
    path:'/msite',
    component: MSite,
    meta:{
      showFooter: true
    }
  },{
    path:'/search',
    component: Search,
    meta:{
      showFooter: true
    }
  },{
    path:'/order',
    component: Order,
    meta:{
      showFooter: true
    }
  },{
    path:'/profile',
    component: Profile,
    meta:{
      showFooter: true
    }
  },{
    path:'/goods',
    component: Goods
  },{
    path:'/login',
    component: Login
  },{
    path:'/',
    redirect: '/msite'
  }]
})