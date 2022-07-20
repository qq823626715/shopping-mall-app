<template>
  <div class="about">
    <!-- <div class="test-div" :style="firstStyle" @click.stop="handleClick($el)"> -->
    <van-image class="test-div" :style="firstStyle" fit="cover" src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'ABC',
  data() {
    return {
      test: true
    }
  },
  computed: {
    domRect() {
      return this.$route.params.domRect
    },
    firstStyle() {
      if (this.test) {
        return { transform: `translate(${this.domRect.left}px, ${this.domRect.top}px) scale(${this.domRect.width / 375}, ${this.domRect.height / 150})` }
      } else {
        return { transform: 'none' }
      }
    }
  },
  created() {
    console.log(this.$route.params)
  },
  mounted() {
    const timer = setTimeout(() => {
      this.test = false
      clearTimeout(timer)
    }, 10)
  },
  methods: {
    handleClick(el) {
      console.log(el.getBoundingClientRect())
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes square-in-center {
  from {
    clip-path: inset(100% 100% 100% 100%);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

[transition-style="in:square:center"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) square-in-center both;
}
.test-div {
  width: 375px;
  height: 150px;
  transition: 0.8S linear;
  transform-origin: 0 0;
  transform: none;
}
.test-dev__transform {
  transform: scale(0.5, 0.3);
}
</style>
