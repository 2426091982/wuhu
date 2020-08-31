<template>
  <div>
    <!--首页头部-->
    <van-sticky>
      <header class="msite_header">
        <span class="header_search" @click="$router.push('/search')">
          <i class="iconfont iconicon-search"></i>
        </span>
        <span class="header_title">
          <span class="header_title_text ellipsis"
            >昌平区北七家宏福科技园(337省道北)</span
          >
        </span>
        <span @click="$router.push('/login')" class="header_login">
          <span class="header_login_text">登录|注册</span>
        </span>
      </header>
    </van-sticky>
    <div class="main">
      <!-- 轮播图 -->
      <van-swipe
        loop
        class="my-swipe"
        indicator-color="#02a774"
        :autoplay="3000"
      >
        <van-swipe-item>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" />
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg" />
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/3.jpg" />
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/4.jpg" />
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/5.jpg" />
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/6.jpg" />
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/7.jpg" />
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/8.jpg" />
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/9.jpg" />
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/10.jpg" />
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/11.jpg" />
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/12.jpg" />
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/13.jpg" />
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/14.jpg" />
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" />
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg" />
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
        </van-swipe-item>
      </van-swipe>
      <!-- 附近商家 -->
      <div class="merchant">
        <!-- title -->
        <div class="shop_header">
          <i class="iconfont icongengduo"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
        <!-- 列表 -->
        <div class="shop_container">
          <div class="list_tiem" @click="$router.push('/goods')" v-for="item in list" :key="item.id"  >
            <!-- 图片 -->
            <div class="img_item">
              <img :src="item.img " alt="" />
            </div>
            <!-- 文字描述 -->
            <div class="text_item">
              <h4 class="shop_title ellipsis">{{ item.title }}</h4>
              <p class="shop_delivery_msg">
                <span>¥{{ item.sendPrice }}起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥{{ item.freight }}</span>
              </p>
            </div>
            <!-- 保障 -->
            <div class="security_item">
              <span class="delivery_style delivery_right">芜湖专送</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 店铺列表
      list: [
        {
          id: 0,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476351379&di=8ffd5a95bcebcb6b6c3a10d2168d0489&imgtype=0&src=http%3A%2F%2Fpic3.16pic.com%2F00%2F01%2F64%2F16pic_164606_b.jpg",
          title: "麦当劳(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 20,
          // 配送费
          freight: 5,
        },
        {
          id: 1,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476390004&di=df51415e57da00b4a1c962b18c18760c&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F7LsWdDW5_xN3otqbppnN2DJv%2Fzhidao%2Fpic%2Fitem%2Fc8ea15ce36d3d5397b94b8063187e950342ab04e.jpg",
          title: "肯德基(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice:40 ,
          // 配送费
          freight: 10,
        },{
          id: 2,
          img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3031420083,3669180293&fm=26&gp=0.jpg",
          title: "柳州螺蛳粉(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 30,
          // 配送费
          freight: 5,
        },{
          id: 3,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476506794&di=81ee8c02f1e9e41144ca42b6df2f6b02&imgtype=0&src=http%3A%2F%2Fp1.meituan.net%2Fdeal%2F2358a77c8b0fb0fa9a814f1aedacbdf7757603.jpg",
          title: "五谷鱼粉(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 15,
          // 配送费
          freight: 0,
        },{
          id: 4,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476523914&di=a1030d1b58d6a7aab53b5f1e1104315b&imgtype=0&src=http%3A%2F%2Fpx.thea.cn%2FPublic%2FUpload%2FUploadfiles%2Fimage%2F20170817%2F20170817160200_46453.jpg",
          title: "云浮石磨肠粉(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 10,
          // 配送费
          freight: 3,
        },{
          id: 5,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476570101&di=a999d8fa39f119909b74557622bc791f&imgtype=0&src=http%3A%2F%2Fp1.meituan.net%2Fmerchantpic%2Fca809115776d0c1547e6ddc77d438e14151464.jpg%2540700w_700h_1e_1c_1l%257Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20",
          title: "星巴克(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 30,
          // 配送费
          freight: 5,
        },{
          id: 6,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476591102&di=b12e25fd9f16879397fa4c60f413881c&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20190301%2F72037177121551404736.jpg",
          title: "德州鸡排(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 20,
          // 配送费
          freight: 5,
        },{
          id: 7,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476591102&di=b12e25fd9f16879397fa4c60f413881c&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20190301%2F72037177121551404736.jpg",
          title: "德州鸡排(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 20,
          // 配送费
          freight: 5,
        },{
          id: 8,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476591102&di=b12e25fd9f16879397fa4c60f413881c&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20190301%2F72037177121551404736.jpg",
          title: "德州鸡排(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 20,
          // 配送费
          freight: 5,
        },{
          id: 9,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476591102&di=b12e25fd9f16879397fa4c60f413881c&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20190301%2F72037177121551404736.jpg",
          title: "德州鸡排(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 20,
          // 配送费
          freight: 5,
        },{
          id: 10,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476591102&di=b12e25fd9f16879397fa4c60f413881c&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20190301%2F72037177121551404736.jpg",
          title: "德州鸡排(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 20,
          // 配送费
          freight: 5,
        },{
          id: 11,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476591102&di=b12e25fd9f16879397fa4c60f413881c&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20190301%2F72037177121551404736.jpg",
          title: "德州鸡排(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 20,
          // 配送费
          freight: 5,
        },{
          id: 12,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476591102&di=b12e25fd9f16879397fa4c60f413881c&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20190301%2F72037177121551404736.jpg",
          title: "德州鸡排(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 20,
          // 配送费
          freight: 5,
        },{
          id: 13,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476591102&di=b12e25fd9f16879397fa4c60f413881c&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20190301%2F72037177121551404736.jpg",
          title: "德州鸡排(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 20,
          // 配送费
          freight: 5,
        },{
          id: 14,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476591102&di=b12e25fd9f16879397fa4c60f413881c&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20190301%2F72037177121551404736.jpg",
          title: "德州鸡排(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 20,
          // 配送费
          freight: 5,
        },{
          id: 15,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476591102&di=b12e25fd9f16879397fa4c60f413881c&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20190301%2F72037177121551404736.jpg",
          title: "德州鸡排(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 20,
          // 配送费
          freight: 5,
        },{
          id: 16,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476591102&di=b12e25fd9f16879397fa4c60f413881c&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20190301%2F72037177121551404736.jpg",
          title: "德州鸡排(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 20,
          // 配送费
          freight: 5,
        },{
          id: 17,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476591102&di=b12e25fd9f16879397fa4c60f413881c&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20190301%2F72037177121551404736.jpg",
          title: "德州鸡排(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 20,
          // 配送费
          freight: 5,
        },{
          id: 18,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476591102&di=b12e25fd9f16879397fa4c60f413881c&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20190301%2F72037177121551404736.jpg",
          title: "德州鸡排(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 20,
          // 配送费
          freight: 5,
        },{
          id: 19,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476591102&di=b12e25fd9f16879397fa4c60f413881c&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20190301%2F72037177121551404736.jpg",
          title: "德州鸡排(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 20,
          // 配送费
          freight: 5,
        },{
          id: 20,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476591102&di=b12e25fd9f16879397fa4c60f413881c&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20190301%2F72037177121551404736.jpg",
          title: "德州鸡排(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 20,
          // 配送费
          freight: 5,
        },{
          id: 21,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476591102&di=b12e25fd9f16879397fa4c60f413881c&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20190301%2F72037177121551404736.jpg",
          title: "德州鸡排(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 20,
          // 配送费
          freight: 5,
        },{
          id: 22,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476591102&di=b12e25fd9f16879397fa4c60f413881c&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20190301%2F72037177121551404736.jpg",
          title: "德州鸡排(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 20,
          // 配送费
          freight: 5,
        },{
          id: 23,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476591102&di=b12e25fd9f16879397fa4c60f413881c&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20190301%2F72037177121551404736.jpg",
          title: "德州鸡排(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 20,
          // 配送费
          freight: 5,
        },{
          id: 24,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476591102&di=b12e25fd9f16879397fa4c60f413881c&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20190301%2F72037177121551404736.jpg",
          title: "德州鸡排(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 20,
          // 配送费
          freight: 5,
        },{
          id: 25,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476591102&di=b12e25fd9f16879397fa4c60f413881c&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Farticle%2F20190301%2F72037177121551404736.jpg",
          title: "德州鸡排(佛山市禅城区芜湖分店)",
          // 起送价
          sendPrice: 20,
          // 配送费
          freight: 5,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
// 首页头部
header.msite_header {
  display: flex;
  height: 40px;
  background-color: #02a774;
  span.header_search {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    .iconicon-search {
      font-size: 24px;
      color: #fff;
    }
  }

  span.header_title {
    line-height: 40px;
    padding: 0 20px;
    flex: 4;
    font-size: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #fff;
    text-align: center;
  }

  span.header_login {
    flex: 2;
    line-height: 40px;
    color: #fff;
    text-align: center;
    span.header_login_text {
    }
  }
}

// 滚动条样式
.main {
  height: calc(100vh - 90px);
  overflow: auto;
  background-color: #f5f5f5;
}
.main::-webkit-scrollbar {
  width: 0 !important;
}

// 轮播图
.my-swipe .van-swipe-item {
  background-color: #fff;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  padding-bottom: 30px;
  a.link_to_food {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .food_container {
      img {
        width: 50px;
        height: 50px;
      }
    }

    span {
      padding-top: 5px;
      font-size: 13px;
      color: #666;
    }
  }
}

// 附近商家
.merchant {
  background-color: #fff;
  margin-top: 20px;
  .shop_header {
    height: 30px;
    padding: 5px 10px;
    line-height: 30px;
    .icongengduo {
      padding-right: 5px;
    }

    span.shop_header_title {
    }
  }
  .shop_container {
    .list_tiem {
      height: 10vh;
      display: flex;
      padding: 10px 8px;
      border-bottom: 1px solid #ccc;
      .img_item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .text_item {
        width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-content: center;
        padding-left: 10px;
        h4.shop_title {
          font-size: 14px;
          font-weight: 700;
        }

        h4.shop_title.ellipsis::before {
          content: "品牌";
          display: inline-block;
          font-size: 11px;
          line-height: 11px;
          color: rgb(51, 51, 51);
          background-color: rgb(255, 217, 48);
          margin-right: 5px;
          padding: 2px;
          border-radius: 2px;
        }

        p.shop_delivery_msg {
          font-size: 12px;
          span {
          }

          span.segmentation {
          }
        }
      }

      .security_item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        span.delivery_style.delivery_right {
          color: #02a774;
          border: 1px solid #02a774;
          padding: 5px;
          border-radius: 5px;
        }
      }
    }
  }
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
