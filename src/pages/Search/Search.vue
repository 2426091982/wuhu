<template>
  <div>
    <div class="search">
      <h2>搜索</h2>
      <div class="form">
        <van-field
          v-model="keyword"
          clearable
          placeholder="请输入商家名称"
          center
        />
        <button @click="search">提交</button>
      </div>
    </div>
    <div class="list">
      <div @click="$router.push('/goods')" class="list_tiem" v-for="item in list" :key="item.id">
        <!-- 图片 -->
        <div class="img_item">
          <img :src="item.img" alt="" />
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
</template>

<script>
// 弹出框
import { Dialog } from "vant";
export default {
  data() {
    return {
      // 关键词
      keyword: "",
      // 店铺列表
      list: [],
    };
  },
  methods: {
    // 搜索关键词
    search() {
      if (this.keyword.trim() === "麦当劳") {
        this.list = [
          {
            id: 0,
            img:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597476351379&di=8ffd5a95bcebcb6b6c3a10d2168d0489&imgtype=0&src=http%3A%2F%2Fpic3.16pic.com%2F00%2F01%2F64%2F16pic_164606_b.jpg",
            title: "麦当劳(佛山市禅城区芜湖分店)",
            // 起送价
            sendPrice: 20,
            // 配送费
            freight: 5,
          },
        ];
        return;
      } else {
        Dialog.alert({
          message: "抱歉，无法查找到该店铺",
          confirmButtonColor: "#02a774",
        }).then(() => {
          // on close
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  h2 {
    height: 50px;
    background-color: #02a774;
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
  }
  .form {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    .van-field {
      flex: 1;
      padding: 5px;
      font-weight: 700;
      font-size: 16px;
      background-color: #f2f2f2;
      border: none;
      margin-right: 10px;
    }
    button {
      border: none;
      padding: 10px 20px;
      border-radius: 2px;
      background-color: #02a774;
      color: #fff;
      font-weight: 700;
    }
  }
}
// 商品列表
.list {
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
</style>
