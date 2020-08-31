<template>
  <div class="login">
    <i @click="$router.go(-1)" class="iconfont iconkuohao-l"></i>
    <h3>芜湖外卖</h3>
    <van-tabs color="#02a774" title-active-color="#02a774" v-model="active">
      <!-- 短信登录 -->
      <van-tab class="phone" title="短信登录">
        <div class="phoneInp">
          <input type="text" placeholder="手机号" />
          <button @click="showTip">获取验证码</button>
        </div>
        <input type="text" placeholder="验证码" />
        <p>
          温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
          <a href="#">《用户服务协议》</a>
        </p>
        <button @click="showTip" class="loginBtn">登录</button>
        <span class="about">关于我们</span>
      </van-tab>
      <!-- 密码登录 -->
      <van-tab class="password" title="密码登录">
        <input type="text" v-model="user" placeholder="手机/邮箱/用户名" />
        <input type="password" v-model="password" placeholder="密码" />
        <button class="loginBtn" @click="login">登录</button>
        <span class="about">关于我们</span>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      // 选中索引
      active: 1,
      // 用户名
      user: "",
      // 密码
      password: "",
    };
  },
  methods: {
    // 暂时消息
    showTip() {
      console.log(1);
      Dialog.alert({
        message: "此功能开发中，暂时不可用",
      });
    },
    // 登录验证
    login() {
      console.log(this.user, this.password);
      if (this.user === "admin" && this.password === '123') {
        let user = {
          img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1978629863,393249385&fm=26&gp=0.jpg',
          name: '终究是句号',
          phone: '13378446314',
          /* 余额 */
          balance: 736.5,
          /* 优惠 */
          preferential: 3,
          /* 积分 */
          integral: 32,

        }
        /* 本地存储 */
        localStorage.setItem('loginInfo',JSON.stringify(user));
        // 跳转
        this.$router.push("/profile");
      } else {
        Dialog.alert({
          message: "密码或者账号错误!",
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  padding: 20px 45px;
  i.iconfont.iconkuohao-l {
  }

  h3 {
    font-size: 40px;
    font-weight: 700;
    color: #02a774;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .van-tabs {
    margin-top: 20px;
    .phone {
      display: flex;
      flex-direction: column;
      align-items: center;
      .phoneInp {
        margin: 15px 0;
        display: flex;
        input {
          width: 240px;
          height: 45px;
          box-sizing: border-box;
          border: 1px solid #ddd;
          padding: 5px;
          padding-left: 10px;
          border-right: none;
          color: #666;
        }

        button {
          width: 80px;
          background-color: #fff;
          border-radius: 5px;
          outline: none;
          border: 1px solid #ddd;
          border-left: none;
          color: #ccc;
          padding-right: 6px;
        }
      }

      input {
        color: #666;
        width: 320px;
        height: 45px;
        box-sizing: border-box;
        padding: 5px;
        padding-left: 10px;

        border-radius: 5px;
        border: 1px solid #ddd;
      }

      p {
        color: #999;
        margin-top: 10px;
        a {
          color: #05a875;
        }
      }
      .loginBtn {
        background-color: #4cd96f;
        height: 42px;
        width: 100%;
        color: #fff;
        font-size: 18px;
        margin-top: 35px;
        margin-bottom: 20px;
        border: none;
      }

      .about {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #999;
      }
    }

    .password {
      input {
        color: #666;
        width: 320px;
        height: 45px;
        box-sizing: border-box;
        padding: 5px;
        padding-left: 10px;

        border-radius: 5px;
        border: 1px solid #ddd;
        margin-top: 20px;
      }
      .loginBtn {
        background-color: #4cd96f;
        height: 42px;
        width: 100%;
        color: #fff;
        font-size: 18px;
        margin-top: 35px;
        margin-bottom: 20px;
        border: none;
      }

      .about {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #999;
      }
    }
  }
}
</style>
