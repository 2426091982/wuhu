<template>
  <div>
    <!-- 标题 -->
    <div class="title">
      <h3>我的</h3>
    </div>
    <!-- 登录信息  已登录-->
    <div class="yesLogin" v-if="isLogin">
      <div class="userInfo">
        <!-- 用户头像 -->
        <div class="left">
          <img :src="user.img" alt="" />
        </div>
        <div class="right">
          <!-- 登录信息 -->
          <div class="loginText">
            <div class="name">{{ user.name }}</div>
            <i class="iconfont iconmobile">
              <span>{{ user.phone }}</span>
            </i>
          </div>
          <!-- 右侧小箭头 -->
          <i class="iconfont iconright-arrow"></i>
        </div>
      </div>
      <!-- 用户信息 -->
      <div class="profile_info_data">
        <!-- 余额 -->
        <div class="balance">
          <div class="num">
            <span>{{ user.balance }}</span
            >元
          </div>
          <div>我的余额</div>
        </div>
        <!-- 优惠 -->
        <div class="preferential">
          <div class="num">
            <span>{{ user.preferential }}</span
            >个
          </div>
          <div>我的优惠</div>
        </div>
        <!-- 积分 -->
        <div class="integral">
          <div class="num">
            <span>{{ user.integral }}</span
            >分
          </div>
          <div>我的积分</div>
        </div>
      </div>
    </div>
    <!-- 登录信息  未登录-->
    <div class="noLogin" v-else>
      <div class="userInfo" @click="$router.push('/login')">
        <!-- 用户头像 -->
        <div class="left">
          <img src="@/assets/user2.jpg" alt="" />
        </div>
        <div class="right">
          <!-- 登录信息 -->
          <div class="loginText">
            <div class="name">登录 / 注册</div>
            <i class="iconfont iconmobile">
              <span>暂无绑定手机号</span>
            </i>
          </div>
          <!-- 右侧小箭头 -->
          <i class="iconfont iconright-arrow"></i>
        </div>
      </div>
      <!-- 用户信息 -->
      <div class="profile_info_data">
        <!-- 余额 -->
        <div class="balance">
          <div class="num"><span>0.00</span>元</div>
          <div>我的余额</div>
        </div>
        <!-- 优惠 -->
        <div class="preferential">
          <div class="num"><span>0</span>个</div>
          <div>我的优惠</div>
        </div>
        <!-- 积分 -->
        <div class="integral">
          <div class="num"><span>0</span>分</div>
          <div>我的积分</div>
        </div>
      </div>
    </div>
    <!-- 选项 -->
    <div class="linkOptions">
      <!-- 我的订单-->
      <div class="profile_my_order" @click="$router.push('/order')">
        <i class="iconfont icons-order"><span>我的订单</span></i>
        <i class="iconfont iconright-arrow"></i>
      </div>
      <div class="profile_my_order">
        <i class="iconfont iconjifen"><span>积分商城</span></i>
        <i class="iconfont iconright-arrow"></i>
      </div>
      <div class="profile_my_order">
        <i class="iconfont iconVIP"><span>芜湖外卖会员卡</span></i>
        <i class="iconfont iconright-arrow"></i>
      </div>
      <div class="profile_my_order">
        <i class="iconfont icons3"><span>服务中心</span></i>
        <i class="iconfont iconright-arrow"></i>
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
};
</script>

<style lang="less" scoped>
// 头部
.title {
  h3 {
    height: 50px;
    background-color: #02a774;
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
    border-bottom: 1px solid #fff;
  }
}
/* 用户头像登录 */
.userInfo {
  height: 100px;
  background-color: #02a774;
  display: flex;
  box-sizing: border-box;
  .left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }

  .right {
    flex: 5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    .loginText {
      .name {
        font-size: 20px;
        color: #fff;
        font-weight: 700;
        margin-bottom: 10px;
      }

      .iconfont {
        color: #fff;
        font-size: 14px;
        span {
          padding-left: 3px;
        }
      }
    }

    i.iconfont {
      color: #fff;
      font-size: 18px;
    }
  }
}
/* 用户信息 */
.profile_info_data {
  display: flex;
  height: 80px;
  .balance {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .num {
      span {
        color: #ff9e0d;
        font-size: 30px;
        font-weight: 700;
      }
      margin-bottom: 5px;
    }
  }

  .preferential {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #f1f1f1;
    border-left: 1px solid #f1f1f1;
    .num {
      span {
        color: #ff5f3e;
        font-size: 30px;
        font-weight: 700;
      }
      margin-bottom: 5px;
    }
  }

  .integral {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .num {
      span {
        color: #6ac20b;
        font-size: 30px;
        font-weight: 700;
      }
      margin-bottom: 5px;
    }
  }
}
/* 选项 */
.linkOptions {
  .profile_my_order {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10px;
    .icons-order {
      border-bottom: 1px solid #f1f1f1;
      color: #4fc29f;
      span {
        color: #666;
        padding-left: 5px;
      }
    }
    .iconjifen {
      border-bottom: 1px solid #f1f1f1;
      color: #ff5f3e;
      span {
        color: #666;
        padding-left: 5px;
      }
    }
    .iconVIP {
      border-bottom: 1px solid #f1f1f1;
      color: #ff9900;
      span {
        color: #666;
        padding-left: 5px;
      }
    }
    .icons3 {
      border-bottom: 1px solid #f1f1f1;
      color: #02a774;
      span {
        color: #666;
        padding-left: 5px;
      }
    }
  }
}
</style>
