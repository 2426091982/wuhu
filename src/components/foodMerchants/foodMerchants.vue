<template>
  <div class="box">
    <div class="info">
      <h3>配送信息</h3>
      <div class="text">
        <span>芜湖专送</span>
        <p>由商家配送提供配送，约28分钟送达，距离1000m</p>
      </div>
      <div class="shipping">
        <p>配送费￥4</p>
      </div>
    </div>
    <!-- 小灰盒 -->
    <div class="split"></div>
    <!-- 活动与服务 -->
    <div class="Activities">
      <h3>活动与服务</h3>
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
          <p>【立减19.5元】欢乐小食餐</p>
        </li>
        <li>
          <span>特价</span>
          <p>【立减19.5元】火烤菠萝皇堡双人餐</p>
        </li>
        <li>
          <span>特价</span>
          <p>【立减16.5元】经典安格斯单人餐</p>
        </li>
        <li>
          <span>特价</span>
          <p>【立减12.5元】皇堡双人餐</p>
        </li>
        <li>
          <span>特价</span>
          <p>【立减8.5元】半价单人餐</p>
        </li>
        <li>
          <span>特价</span>
          <p>【立减5.5元】工作单人餐</p>
        </li>
      </ul>
    </div>
    <!-- 小灰盒 -->
    <div class="split"></div>
    <!-- 商家实景 -->
    <div class="live">
      <h3>商家实景</h3>
      <ul>
        <li>
          <img
            src="https://fuss10.elemecdn.com/f/7f/d1422ec824a0a9d1fb879c57ab533jpeg.jpeg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://fuss10.elemecdn.com/6/82/2cd3d681f5e93292b3eb49d6b412ajpeg.jpeg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://fuss10.elemecdn.com/8/93/4cf527b6462eea634f69755374f88jpeg.jpeg"
            alt=""
          />
        </li>
      </ul>
    </div>
    <!-- 小灰盒 -->
    <div class="split"></div>
    <!-- 商家信息 -->
    <div class="infoText">
      <h3>商家信息</h3>
      <ul>
        <li class="item">
          <h4>品类</h4>
          <p>包子粥店，简餐</p>
        </li>
        <li class="item">
          <h4>商家电话</h4>
          <p>13378446314</p>
        </li>
        <li class="item">
          <h4>地址</h4>
          <p>广东省佛山市禅城区创意产业园33号</p>
        </li>
        <li class="item">
          <h4>营业时间</h4>
          <p>09:35-24:00</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
// 滑动盒子
.box {
  height: calc(100vh - 200px);
  overflow: auto;
}
.box::-webkit-scrollbar {
  width: 0 !important;
}
// 头部
.info {
  border-top: 1px solid rgba(7, 17, 27, 0.1);
  height: 100px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #000;
  }

  .text {
    display: flex;
    align-items: center;
    span {
      padding: 3px 5px;
      background-color: #0097ff;
      color: #fff;
      font-size: 10px;
      border-radius: 5px;
    }

    p {
      font-size: 12px;
      color: #777;
      padding-left: 15px;
    }
  }

  .shipping {
    p {
      color: #777;
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
// 活动与服务
.Activities {
  padding: 10px;
  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .list {
    li {
      display: flex;
      align-items: center;
      height: 30px;
      span {
        color: #fff;
        font-size: 12px;
        padding: 2px 5px;
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

// 商家实景
.live {
  padding: 10px;
  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #000;
    padding-bottom: 10px;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      flex: 1;
      height: 90px;
      margin: 0 3px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
// 商家信息
.infoText {
  display: flex;
  flex-direction: column;
  padding: 15px 0 0;
  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #000;
    margin-top: 10px;
    padding: 0 10px;
  }

  ul {
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 48px;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      padding: 0 10px;
      h4 {
        font-size: 14px;
        color: #000;
        font-weight: 700;
      }

      p {
        color: #666;
        font-size: 14px;
      }
    }
  }
}
</style>
