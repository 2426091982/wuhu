<template>
  <ul class="bar">
    <li
      v-for="item in list"
      :key="item.id"
      :class="item.isActive ? 'active' : ''"
      @click="changeBar(item.id)"
    >
      <i :class="item.icon"></i>
      <span>{{ item.val }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["list"],
  methods: {
    changeBar(id){
      this.$emit('tabChange',id)
    }
  }
};
</script>

<style lang="less" scoped>
.bar {  
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  height: 50px;
  border-top: 1px solid #ccc;
  li {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    i {
      font-size: 25px;
    }
    span {
    }
  }
  .active {
    color: #00916d;
  }
}
</style>
