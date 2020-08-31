<template>
  <div id="app">
    <router-view @tabChange="tabChange"></router-view>
    <tabbar :list="list" @tabChange="tabChange" v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
// tab导航
import tabbar from "./components/tabbar/tabbar.vue";
export default {
  data() {
    return {
      // tabbar 组件数据
      list: [
        {
          id: 0,
          val: "外卖",
          icon: "iconfont iconplatform-eleme",
          isActive: true,
          path: "/msite",
        },
        {
          id: 1,
          val: "搜索",
          icon: "iconfont  iconsearch",
          isActive: false,
          path: "/search",
        },
        {
          id: 2,
          val: "订单",
          icon: "iconfont icons-order",
          isActive: false,
          path: "/order",
        },
        {
          id: 3,
          val: "我的",
          icon: "iconfont  icons-custom",
          isActive: false,
          path: "/profile",
        },
      ],
    };
  },
  watch: {
    // 检测路由，对应路由给选中状态
    $route(to, from) {
      this.list.forEach(v => {
         v.isActive = false;
       if( v.path === to.path){
         v.isActive = true;
       }
      })
    },
  },
  methods: {
    // 改变路由
    tabChange(id) {
      // 寻找id
      let i = this.list.findIndex((v) => v.id == id);
      // 跳转路由
      this.$router.replace(this.list[i].path);
    },
  },
  name: "App",
  components: {
    tabbar,
  },
};
</script>

<style lang="less" scope>
.mui-active {
  color: pink;
}
/* 轮播图颜色 */
.van-swipe__indicator {
  background-color: #02a774 !important;
}
</style>
