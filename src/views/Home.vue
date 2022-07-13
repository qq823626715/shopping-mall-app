<template>
  <div class="home">

    <van-tabbar v-model="tabberActive">
      <van-tabbar-item name="home" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item name="apps" icon="apps-o">分类</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      tabberActive: 'home'
    }
  }
}
</script>
