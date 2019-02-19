<template>
  <div class="vue-particle-line">
    <div class="slot-wraper">
      <slot></slot>
    </div>
    <canvas id="canvas" class="canvas"></canvas>
  </div>
</template>

<script>
import ParticleLine from './particle-line'
import { debounce } from 'common/js/utils'
export default {
  name: 'vue-particle-line',
  mounted () {
    const particleLine = new ParticleLine('canvas')
    particleLine.init()
    window.onresize = debounce(() => particleLine.resize(), 500)
  }
}
</script>

<style lang="scss" scoped>
.vue-particle-line {
  position: relative;
  width: 100%;
  height: 100%;
  .slot-wraper {
    height: 100%;
    z-index: 99;
  }
  .canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
