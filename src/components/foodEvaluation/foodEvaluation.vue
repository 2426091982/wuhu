<template>
  <div class="box">
    <!-- 评分 -->
    <div class="scoreBox">
      <!-- 综合评分 -->
      <div class="left">
        <h3>4.2</h3>
        <span>综合评分</span>
        <p>高于周边99%商家</p>
      </div>
      <!-- 服务态度评分 -->
      <div class="right">
        <div class="ServiceScore">
          <van-rate color="#ff9900" :size="15" v-model="value" readonly />
          <div>服务态度</div>
          <span class="score">4.1</span>
        </div>
        <div class="CommodityGrade">
          <van-rate color="#ff9900" :size="15" v-model="value" readonly />
          <div>商品评分</div>
          <span class="score">4.3</span>
        </div>
        <p>送达时间 <span>28分钟</span></p>
      </div>
    </div>
    <!-- 灰色盒子 -->
    <div class="split"></div>
    <!-- 评论列表 -->
    <div class="Comment">
      <!-- 顶部内容 -->
      <div class="top">
        <div class="content">
          <div class="classification">
            <button
              @click="changeList(0)"
              :class="activeIndex == 0 ? 'active' : ''"
            >
              全部
            </button>
            <button
              @click="changeList(1)"
              :class="activeIndex == 1 ? 'active' : ''"
            >
              满意
            </button>
            <button
              @click="changeList(2)"
              :class="activeIndex == 2 ? 'active' : ''"
            >
              不满意
            </button>
          </div>
          <p class="text">
            <i
              @click="activeNum = !activeNum"
              class="iconfont iconxuanzhong1"
              :class="activeNum == true ? 'active' : ''"
            ></i>
            只看有内容的评价
          </p>
        </div>
      </div>
      <!-- 评论列表 -->
      <div class="list">
        <!-- 项 -->
        <div class="list_item" v-for="item1 in newList" :key="item1.name">
          <div class="userimg">
            <img src="@/assets/user.jpg" alt="" />
          </div>
          <div class="content">
            <div class="info">
              <div class="name">{{ item1.name }}</div>
              <div class="date">{{ item1.date }}</div>
            </div>
            <van-rate
              :size="12"
              color="#ff9900"
              v-model="item1.value"
              readonly
            />
            <p>{{ item1.text }}</p>
            <ul class="dishes">
              <i class="iconfont icondianzan_active-copy-copy"></i>
              <li v-for="item2 in item1.dishes" :key="item2">{{ item2 }}</li>
            </ul>
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
      value: 4,
      activeIndex: 0,
      // 是否查看有内容的评价
      activeNum: true,
      list: [
        {
          name: "撕裂的闪光",
          date: "2016-07-23",
          value: 3.5,
          text: "还行吧，这个菜感觉做的一般",
          dishes: ["南瓜粥", "皮蛋瘦肉粥", "麻豆焖面", "娃娃菜炖豆腐"],
        },
        {
          name: "终究是句号",
          date: "2016-08-23",
          value: 4.5,
          text: "不错，粥很好喝，我经常吃这一家，非常不错，以后还会来吃",
          dishes: ["南瓜粥", "皮蛋瘦肉粥"],
        },
        {
          name: "A大5把P90",
          date: "2016-06-23",
          value: 1.5,
          text: "外卖这么慢，人都饿死了，差评！",
          dishes: ["芜湖粥", "葱油捞面", "麻婆豆腐", "油炸冰溜子"],
        },
        {
          name: "白给真不错",
          date: "2016-07-24",
          value: 5,
          text: "非常好吃，下次还会再来！",
          dishes: ["芜湖粥", "皮蛋瘦肉粥", "炒面", "油条"],
        },
        {
          name: "时间管理者",
          date: "2016-07-23",
          value: 4.5,
          text: "我觉得可以的，挺好吃",
          dishes: ["南瓜粥", "皮蛋瘦肉粥", "红枣粥", "炒河粉"],
        },
        {
          name: "玩扑克不洗牌",
          date: "2016-06-23",
          value: 1,
          text: "太难吃了，这东西给狗都不吃！",
          dishes: ["艇仔粥", "牛肉肠", "叉烧面", "油炸豆腐"],
        },
      ],
      // 处理后的数组
      newList: [
        {
          name: "撕裂的闪光",
          date: "2016-07-23",
          value: 3.5,
          text: "还行吧，这个菜感觉做的一般",
          dishes: ["南瓜粥", "皮蛋瘦肉粥", "麻豆焖面", "娃娃菜炖豆腐"],
        },
        {
          name: "白给真不错",
          date: "2016-07-24",
          value: 5,
          text: "非常好吃，下次还会再来！",
          dishes: ["芜湖粥", "皮蛋瘦肉粥", "炒面", "油条"],
        },
        {
          name: "时间管理者",
          date: "2016-07-23",
          value: 4.5,
          text: "我觉得可以的，挺好吃",
          dishes: ["南瓜粥", "皮蛋瘦肉粥", "红枣粥", "炒河粉"],
        },
        {
          name: "终究是句号",
          date: "2016-08-23",
          value: 4.5,
          text: "不错，粥很好喝，我经常吃这一家，非常不错，以后还会来吃",
          dishes: ["南瓜粥", "皮蛋瘦肉粥"],
        },
        {
          name: "A大5把P90",
          date: "2016-06-23",
          value: 1.5,
          text: "外卖这么慢，人都饿死了，差评！",
          dishes: ["芜湖粥", "葱油捞面", "麻婆豆腐", "油炸冰溜子"],
        },
        {
          name: "玩扑克不洗牌",
          date: "2016-06-23",
          value: 1,
          text: "太难吃了，这东西给狗都不吃！",
          dishes: ["艇仔粥", "牛肉肠", "叉烧面", "油炸豆腐"],
        },
      ],
    };
  },
  methods: {
    // 修改数组
    changeList(status) {
      this.activeIndex = status;
      // 0 为全部 ， 1 为好评， 2 为差评
      if (status === 0) {
        this.newList = this.list;
      } else if (status === 1) {
        this.newList = this.list.filter((v) => v.value >= 3);
        console.log(this.newList);
      } else if (status === 2) {
        this.newList = this.list.filter((v) => v.value < 3);
        console.log(this.newList);
      }
    },
  },
};
</script>

<style lang="less" scoped>
// 滑动盒子
.box {
  height: calc(100vh - 198px);
  overflow: auto;
}
.box::-webkit-scrollbar {
  width: 0 !important;
}
.scoreBox {
  display: flex;
  height: 90px;
  padding: 15px 0;
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(7, 17, 27, 0.1);
    h3 {
      font-size: 30px;
      color: #ff9900;
    }

    span {
      font-size: 12px;
    }

    p {
      font-size: 10px;
      color: #777;
    }
  }

  .right {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .ServiceScore {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      div {
        margin: 0 5px;
      }
      span.score {
        color: #ff9900;
      }
    }

    .CommodityGrade {
      padding: 5px;

      display: flex;
      justify-content: center;
      align-items: center;
      div {
        margin: 0 5px;
      }
      span.score {
        color: #ff9900;
      }
    }

    p {
      padding-top: 5px;
      font-size: 12px;
      align-self: flex-start;
      padding-left: 20px;
      span {
        padding-left: 5px;
        color: #777;
      }
    }
  }
}
// 灰色盒子
.split {
  width: 100%;
  height: 16px;
  border-top: 1px solid rgba(7, 17, 27, 0.1);
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  background-color: #f3f5f7;
}

// 评论列表
.Comment {
  background-color: #fff;
  .top {
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    .content {
      height: 90px;
      display: flex;
      padding: 10px 30px;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      .classification {
        button.active {
          background-color: #02a774;
          color: #fff;
        }

        button {
          height: 30px;
          width: 60px;
          border: none;
          color: #666;
          background-color: #dbdddf;
          margin-right: 10px;
        }
      }

      p.text {
        i {
          font-size: 20px;
        }
        .active {
          color: #02a774;
        }
      }
    }
  }
  // 列表
  .list {
    .list_item {
      display: flex;
      padding: 15px 0;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      .userimg {
        flex: 2;
        display: flex;
        justify-content: flex-end;
        img {
          width: 28px;
          height: 28px;
          border-radius: 50%;
        }
      }

      .content {
        display: flex;
        flex-direction: column;
        padding: 0 10px;
        align-items: space-around;
        flex: 10;
        .info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
          .name {
            font-size: 8px;
          }

          .date {
            font-size: 8px;
            color: #777;
          }
        }

        .van-rate {
        }
        p {
          font-size: 12px;
          padding: 10px 0;
        }

        ul.dishes {
          display: flex;
          flex-wrap: wrap;
          i {
            color: #f5a100;
            margin-right: 6px;
          }
          li {
            font-size: 8px;
            padding: 2px;
            color: #777;
            border: 1px solid #ccc;
            margin-right: 6px;
            margin-bottom: 6px;
          }
        }
      }
    }
  }
}
</style>
