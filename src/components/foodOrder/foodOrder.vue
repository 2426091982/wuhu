<template>
  <div>
    <div class="container">
      <!-- 选项 -->
      <div class="options">
        <ul>
          <li
            @click="changeActive(i)"
            :class="i === activeIndex ? 'active' : ''"
            v-for="(item, i) in list"
            :key="item.options"
          >
            {{ item.options }}
          </li>
        </ul>
      </div>
      <!-- 项 -->
      <div class="content">
        <div
          class="item"
          v-for="(item1, i1) in list[activeIndex].items"
          :key="item1.title"
        >
          <h3>{{ item1.title }}</h3>
          <ul>
            <li v-for="(item2, i2) in item1.contents" :key="item2.text">
              <div class="left" @click="showImg(item2.img)">
                <img :src="item2.img" alt="" />
              </div>
              <div class="middle">
                <h4>{{ item2.text }}</h4>
                <div class="category">{{ item2.category }}</div>
                <span>月售{{ item2.sale }}份</span
                ><span>好评率{{ item2.rate }}</span>
                <div class="price">￥{{ item2.price }}</div>
              </div>
              <div class="right">
                <!-- 减 -->
                <transition name="van-slide-right">
                  <span v-show="item2.num > 0" class="sub">
                    <i @click="subTotal(i1, i2)" class="iconfont icon-hao"></i>
                  </span>
                </transition>
                <transition name="van-fade">
                  <input
                    type="text"
                    disabled
                    v-show="item2.num > 0"
                    :value="item2.num"
                  />
                </transition>
                <!-- 加 -->
                <span class="add">
                  <i @click="addTotal(i1, i2)" class="iconfont iconhao"></i>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 底部结算 -->
    <div class="settlement">
      <div class="total">
        <div class="picture" :class="total != 0 ? 'haveTotal' : ''">
          <i class="iconfont iconcart"></i>
          <div v-show="num > 0" class="num">{{ num }}</div>
        </div>
        <div class="text">
          <h3>￥{{ total }}</h3>
          <p>另需要配送费￥4元</p>
        </div>
      </div>
      <van-button v-if="total < 20" color="#2b333b">￥20元起送</van-button>
      <van-button @click="buy" v-if="total >= 20" color="#00b43c"
        >结算</van-button
      >
    </div>

    <!-- 遮罩层 -->
    <van-overlay :show="isShow">
      <div class="wrapper" @click="isShow = false">
        <div class="block">
          <img :src="showImgUrl" alt="" />
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      // 数据
      list: [
        {
          options: "优惠",
          items: [
            {
              title: "优惠",
              contents: [
                {
                  text: "南瓜粥",
                  img:
                    "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "甜粥",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
                {
                  text: "红豆薏米美肤粥",
                  img:
                    "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "甜粥",
                  // 好评
                  rate: "100%",
                  // 月销售
                  sale: 86,
                  // 价格
                  price: 12,
                  /* 数量 */
                  num: 0,
                },
                {
                  text: "八宝酱菜",
                  img:
                    "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "",
                  // 好评
                  rate: "100%",
                  // 月销售
                  sale: 84,
                  // 价格
                  price: 4,
                  /* 数量 */
                  num: 0,
                },
                {
                  text: "肉豆焖面",
                  img:
                    "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "",
                  // 好评
                  rate: "100%",
                  // 月销售
                  sale: 188,
                  // 价格
                  price: 14,
                  /* 数量 */
                  num: 0,
                },
              ],
            },
          ],
        },
        {
          options: "折扣",
          items: [
            {
              title: "折扣",
              contents: [
                {
                  text: "娃娃菜炖豆腐",
                  img:
                    "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "",
                  // 好评
                  rate: "92%",
                  // 月销售
                  sale: 43,
                  // 价格
                  price: 15,
                  /* 数量 */
                  num: 0,
                },
                {
                  text: "手撕包菜",
                  img:
                    "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 16,
                  /* 数量 */
                  num: 0,
                },
                {
                  text: "香酥黄金鱼",
                  img:
                    "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 11,
                  /* 数量 */
                  num: 0,
                },
              ],
            },
            {
              title: "香浓甜粥",
              contents: [
                {
                  text: "红枣山药粥",
                  img:
                    "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "甜粥",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
              ],
            },
          ],
        },
        {
          options: "香浓甜粥",
          items: [
            {
              title: "香浓甜粥",
              contents: [
                {
                  text: "红枣山药粥",
                  img:
                    "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "甜粥",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
                {
                  text: "红豆粥",
                  img:
                    "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "甜粥",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
                {
                  text: "芜湖粥",
                  img:
                    "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "甜粥",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
                {
                  text: "糊塌子",
                  img:
                    "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "甜粥",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
              ],
            },
          ],
        },
        {
          options: "营养咸粥",
          items: [
            {
              title: "营养咸粥",
              contents: [
                {
                  text: "田园蔬菜粥",
                  img:
                    "https://fuss10.elemecdn.com/5/7b/0af500733bb676d2a0a329ef1a078jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
                  // 分类
                  category: "咸粥",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 8,
                  /* 数量 */
                  num: 0,
                },
              ],
            },
          ],
        },
        {
          options: "爽口凉菜",
          items: [
            {
              title: "爽口凉菜",
              contents: [
                {
                  text: "芜湖八宝菜",
                  img:
                    "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
                {
                  text: "拍黄瓜",
                  img:
                    "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
              ],
            },
          ],
        },
        {
          options: "精选套餐",
          items: [
            {
              title: "精选套餐",
              contents: [
                {
                  text: "红豆薏米粥套餐",
                  img:
                    "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "甜粥",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
                {
                  text: "皮蛋瘦肉粥套餐",
                  img:
                    "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "咸粥",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
              ],
            },
          ],
        },
        {
          options: "果拼果汁",
          items: [
            {
              title: "果拼果汁",
              contents: [
                {
                  text: "蜜瓜圣女果萝莉杯",
                  img:
                    "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
                {
                  text: "加多宝",
                  img:
                    "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
                {
                  text: "VC无限橙果汁",
                  img:
                    "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
              ],
            },
          ],
        },
        {
          options: "小吃主食",
          items: [
            {
              title: "小吃主食",
              contents: [
                {
                  text: "麻豆焖面",
                  img:
                    "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
                {
                  text: "葱花饼",
                  img:
                    "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
                {
                  text: "牛肉馅饼",
                  img:
                    "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
                {
                  text: "猪肉白菜锅贴",
                  img:
                    "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
                {
                  text: "塔克toca",
                  img:
                    "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
              ],
            },
          ],
        },
        {
          options: "特殊粥品",
          items: [
            {
              title: "特殊粥品",
              contents: [
                {
                  text: "皮蛋粥",
                  img:
                    "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "咸粥",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
                {
                  text: "咸鱼白菜粥",
                  img:
                    "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "甜粥",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
                {
                  text: "鲜蔬蘑菇粥",
                  img:
                    "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "甜粥",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
                {
                  text: "艇仔粥",
                  img:
                    "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "甜粥",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
                {
                  text: "绿豆粥",
                  img:
                    "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                  // 分类
                  category: "甜粥",
                  // 好评
                  rate: "98%",
                  // 月销售
                  sale: 19,
                  // 价格
                  price: 9,
                  /* 数量 */
                  num: 0,
                },
              ],
            },
          ],
        },
      ],
      // 选中index
      activeIndex: 0,
      // 总价
      total: 0,
      // 数量
      num: 0,
      //是否展示遮罩层
      isShow: false,
      // 预览图片url
      showImgUrl: "",
      // 是否已登录
      isLogin: false,
      // 用户
      user: {},
      // 下单数组
      buyList: [],
    };
  },
  mounted() {
    /* 判断是否有登录 */
    let user = localStorage.getItem("loginInfo");
    if (user !== null) {
      // 登录状态
      this.user = JSON.parse(user);
      this.isLogin = true;
    }
  },
  methods: {
    // 改变选中索引
    changeActive(i) {
      this.activeIndex = i;
    },
    // 添加价格
    addTotal(i1, i2) {
      let item = this.list[this.activeIndex].items[i1].contents[i2];
      this.total += item.price;
      item.num++;
      this.num++;
      if (item.num == 1) {
        this.buyList.push(item);
      }
    },
    // 减少价格
    subTotal(i1, i2) {
      let item = this.list[this.activeIndex].items[i1].contents[i2];
      if (item.num > 0) {
        this.total -= item.price;
        item.num--;
        this.num--;
      }
      let index = this.buyList.findIndex((v) => v.text == item.text);
      if (this.buyList[index].num === 0) {
        // 删除商品
        this.buyList.splice(index, 1);
      }
    },
    // 图片预览
    showImg(url) {
      this.isShow = true;
      this.showImgUrl = url;
    },
    // 购买
    buy() {
      if (this.isLogin) {
        console.log(this.buyList);
        // 存入本地存储
        localStorage.setItem('buyList',JSON.stringify(this.buyList))
        Dialog.alert({
          message: "支付成功!",
        }).then((res) => {
          this.$router.push("/order");
        });
      } else {
        Dialog.alert({
          message: "抱歉，请先登录!",
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  .options {
    flex: 1;

    ul {
      height: calc(100vh - 252px);
      overflow: auto;
      li {
        padding: 20px 0;
        text-align: center;
        background-color: #f3f5f7;
        font-size: 12px;
        color: #000;
        border-bottom: 1px solid #ccc;
      }
      .active {
        background-color: #fff;
        color: #02a774;
      }
    }
    // 滚动条样式
    ul::-webkit-scrollbar {
      width: 0 !important;
    }
  }
  // 滚动条样式
  .content::-webkit-scrollbar {
    width: 0 !important;
  }
  .content {
    flex: 4;
    height: calc(100vh - 252px);
    overflow: auto;
    .item {
      h3 {
        background-color: #f3f5f7;
        color: #9fa4aa;
        font-size: 12px;
        border-left: 2px solid #d9dde1;
        padding: 5px 0;
        padding-left: 15px;
      }

      ul {
        li {
          display: flex;
          padding: 18px;
          .left {
            flex: 2;
            img {
              width: 57px;
              height: 57px;
            }
          }

          .middle {
            flex: 5;
            padding-left: 10px;
            h4 {
              color: #07111b;
              font-weight: 700;
            }
            .category {
              font-size: 8px;
              color: #93999f;
              padding: 5px 0;
            }
            .price {
              font-size: 14px;
              color: red;
            }
            span {
              font-size: 8px;
              color: #93999f;
              padding-right: 5px;
            }
          }

          .right {
            flex: 2;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            .add {
              width: 25px;
              height: 25px;
              border-radius: 50%;
              color: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #02a774;
              i {
                font-size: 14px;
              }
            }
            input {
              width: 30px;
              height: 25px;
              border: none;
              text-align: center;
            }
            .sub {
              box-sizing: border-box;
              width: 25px;
              height: 25px;
              border: 2px solid #02a774;
              border-radius: 50%;
              color: #02a774;
              display: flex;
              justify-content: center;
              align-items: center;

              i {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
}
/* 结算 */
.settlement {
  height: 54px;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  .total {
    padding-left: 15px;
    display: flex;
    .picture {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background-color: #2b343c;
      border: 3px solid #000;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateY(-8px);
      .iconfont {
        font-size: 24px;
      }
      .num {
        position: absolute;
        top: -5px;
        right: 5px;
        font-size: 8px;
        background-color: red;
        border-radius: 5px;
        padding: 2px 5px;
      }
    }
    .haveTotal {
      background-color: #02a774;
      color: #fff;
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
      h3 {
        font-size: 16px;
        font-weight: 700;
        color: #fff;
      }
      p {
        color: #ffffff66;
        font-size: 12px;
      }
    }
  }
}

/* 遮罩层 */
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 300px;
  height: 300px;
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
