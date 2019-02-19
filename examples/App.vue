<template>
  <div id="app">
    <vue-particle-line class="banner-wraper">
      <banner :text="title" />
    </vue-particle-line>
  </div>
</template>

<script>
import banner from './components/banner'
export default {
  name: 'app',
  components: {
    banner
  },
  data () {
    return {
      title: 'vue-particle-line'
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body, #app {
  width: 100%;
  height: 100%;
  background: #283644;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", SimSun, sans-serif;
  font-size: 14px;
  text-align: center;
  color: #fff;
  .banner-wraper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #283644;
  }
}
</style>
