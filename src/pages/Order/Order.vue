<template>
  <div>
    <!-- 已登录 -->
    <div v-if="isLogin" class="isLogin">
      <h3>我的订单</h3>
      <ul v-if="buyList">
        <li v-for="item in buyList" :key="item.text">
          <div class="left" @click="showImg(item.img)">
            <img :src="item.img" alt="" />
          </div>
          <div class="middle">
            <h4>{{ item.text }}</h4>
            <div class="category">{{ item.category }}</div>
            <span>月售{{ item.sale }}份</span
            ><span>好评率{{ item.rate }}</span>
            <div class="price">￥{{ item.price }}</div>
          </div>
          <div class="right">
            x {{item.num}}
          </div>
        </li>
      </ul>
    </div>
    <!-- 未登录 -->
    <div v-else class="noLogin">
      <div class="title">
        <h3>订单列表</h3>
      </div>
      <div class="login">
        <img src="@/assets/订单未登录.png" alt="" />
        <p>登录后查看外卖订单</p>
        <button @click="$router.push('/login')">立即登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
      user: {},
      // 订单数组
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
    let buyList = localStorage.getItem("buyList");
    if (buyList) {
      this.buyList = JSON.parse(buyList);
    }
  },
};
</script>

<style lang="less" scoped>
.isLogin {
  h3 {
    height: 50px;
    background-color: #02a774;
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
    border-bottom: 1px solid #fff;
  }
  ul {
    li {
      display: flex;
      padding: 18px;
      .left {
        flex: 2;
        img {
          width: 100%;
          height: 100%;
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
    }
  }
}
.noLogin {
  .title {
    h3 {
      height: 50px;
      background-color: #02a774;
      color: #fff;
      font-size: 20px;
      text-align: center;
      line-height: 50px;
    }
  }

  .login {
    height: calc(100vh - 180px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
    }

    p {
      font-size: 18px;
      padding: 10px 0;
    }

    button {
      padding: 10px 20px;
      color: #fff;
      font-size: 16px;
      border: none;
      outline: none;
      background-color: #02a774;
      border-radius: 5px;
    }
  }
}
</style>
