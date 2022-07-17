<template>
  <div class="home">
    <van-swipe class="swipe" :autoplay="3000" indicator-color="#313233">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <div v-for="group in 3" :key="`commodity-group${group}`" class="commodity-group">
      <van-cell title="分组名称" title-class="group-cell__title" value-class="group-cell__value" value="查看更多" is-link :border="false" />
      <div class="commodity-group__content">
        <div v-for="item in 9" :key="`commodity-item${item}`" class="commodity-item">
          <van-image class="commodity-item__image" src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
          <p class="commodity-item__name van-multi-ellipsis--l2">商品表体</p>
          <p class="commodity-item__price">￥100.00</p>
        </div>
      </div>
    </div>
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

<style lang="scss" scoped>
.home {
  background: #F3F3F3;
}
.swipe {
  height: 150px;
  background: #39a9ed;
}
.commodity-group {
  background: #FFFFFF;
  margin-bottom: 10px;
  &__content {
    display: flex;;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .group-cell {
    &__title {
      font-weight: bold;
    }
    &__value {
      font-size: 12px;
      color: #A0A0A0;
    }
  }
  .commodity-item {
    width: 115px;
    margin-bottom: 8px;
    &__image {
      // width: 120px;
      // height: 120px;
    }
    &__name {
      font-size: 12px;
      margin-bottom: 4px;
    }
    &__price {
      font-size: 12px;
      color: #ff7159;
    }
  }
}

</style>
