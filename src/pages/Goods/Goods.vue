<template>
  <div>
    <!-- 头部 -->
    <div class="shop_header">
      <i @click="$router.go(-1)" class="iconfont iconkuohao-l"></i>
    </div>
    <!-- 店铺内容 -->
    <div class="shop_content">
      <img
        src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg"
        alt=""
      />
      <!-- 描述 -->
      <div class="text">
        <div class="title">
          <span>品牌</span>
          <h2>嘉禾一品 (温都水城)</h2>
        </div>
        <!-- 信息 -->
        <p>
          <span class="score">4.2</span>
          <span class="sales">月售90单</span>
          <span>芜湖专送</span>
          <span class="time">约28分钟</span>
          <span class="distance">距离 1000m</span>
        </p>
      </div>
      <!-- 优惠 -->
      <div class="preferential" @click="popuoShow = true">
        <div class="content">
          <span class="span">首单</span>
          <p>新用户下单立减17元(不与其他活动共享)</p>
        </div>
        <span class="num"
          >8个优惠
          <i class="iconfont iconlower-triangle"></i>
        </span>
      </div>
      <!-- 标签页 -->
      <van-tabs v-model="active" color="#3aba93" title-active-color="#02a774">
        <van-tab title="点餐">
          <!-- 点餐模板 -->
          <Order />
        </van-tab>
        <van-tab title="评价">
          <!-- 评价模板 -->
          <Evaluation />
        </van-tab>
        <!-- 商家模板 -->
        <van-tab title="商家">
          <Merchants />
        </van-tab>
      </van-tabs>
    </div>
    <!-- 优惠券弹出层 -->
    <van-popup
      v-model="popuoShow"
      closeable
      position="bottom"
      :style="{ height: '30%' }"
    >
      <h3>优惠活动</h3>
      <ul class="list">
        <li>
          <span class="first">首单</span>
          <p>新用户下单立减17元(不与其他活动同享)</p>
        </li>
        <li>
          <span class="red">满减</span>
          <p>满35减19，满65减35</p>
        </li>
        <li>
          <span>特价</span>
          <p>[立减19.5元]欢乐小食餐</p>
        </li>
        <li>
          <span>特价</span>
          <p>[立减19.5元]火烤菠萝皇堡双人餐</p>
        </li>
        <li>
          <span>特价</span>
          <p>[立减19.5元]经典安格斯单人餐</p>
        </li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
// 点餐
import Order from "@/components/foodOrder/foodOrder.vue";
// 评价
import Evaluation from "@/components/foodEvaluation/foodEvaluation.vue";
// 商家
import Merchants from "@/components/foodMerchants/foodMerchants.vue";
export default {
  data() {
    return {
      active: 0,
      // 优惠券是否弹出
      popuoShow: false,
    };
  },
  components: {
    Order,
    Evaluation,
    Merchants,
  },
};
</script>

<style lang="less" scoped>
.shop_header {
  height: 50px;
  background: url("https://fuss10.elemecdn.com/f/5c/ead54394c3de198d3e6d3e9111bbfpng.png");
  background-size: 100% auto;
  display: flex;
  align-items: center;
  padding: 0 10px;
  i {
    color: #fff;
  }
}

.shop_content {
  position: relative;
  img {
    position: absolute;
    top: -70px;
    left: 50%;
    transform: translateX(-50%);
    width: 66px;
    height: 66px;
    border: 1px solid #ccc;
  }

  .text {
    margin-top: 30px;
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        background-color: #ffe432;
        color: #9f770f;
        padding: 3px 5px;
        font-weight: 700;
        font-size: 12px;
        border-radius: 3px;
        height: 15px;
      }

      h2 {
        color: #333;
        font-size: 20px;
        font-weight: 700;
        padding: 0 10px;
      }

      i.iconfont {
      }
    }

    p {
      text-align: center;
      span {
        padding: 0 5px;
        font-size: 10px;
      }
    }
  }
}
// 优惠
.preferential {
  width: 315px;
  margin: 0 auto;
  margin-top: 5px;
  padding: 2px 5px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  .content {
    flex: 5;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    .span {
      padding: 2px 5px;
      border-radius: 3px;
      color: #fff;
      background-color: #70bc46;
      font-size: 8px;
      margin-right: 5px;
      white-space: nowrap;
    }
    p {
      font-size: 10px;
      overflow: hidden; /*超出隐藏*/
      white-space: nowrap; /* 强制不换行 */
      text-overflow: ellipsis; /*文字隐藏的格式 */
    }
  }

  .num {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    i.iconfont.iconlower-triangle {
    }
  }
}

/* 优惠券弹出层 */
.van-popup {
  h3 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    padding: 5px;
  }

  ul.list {
    li {
      display: flex;
      align-items: center;
      padding-left: 30px;
      height: 30px;
      span {
        color: #fff;
        font-size: 8px;
        padding: 3px 5px;
        background-color: #f1884f;
        border-radius: 2px;
        margin-right: 10px;
      }
      .first {
        background-color: #70bc46;
      }
      .red {
        background-color: #f07373;
      }
      p {
        font-size: 14px;
      }
    }
  }
}
</style>
