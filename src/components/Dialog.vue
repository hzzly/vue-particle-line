<template>
  <div class="dialog">
    <div class="mask"></div>
    <div class="dialog-wrap">
      <div class="text">{{dialogMsg}}</div>
      <div class="btn-wrap" @click="confirm">知道了</div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    dialogMsg: String
  },
  data() {
    return {

    }
  },
  methods: {
    confirm() {
      this.$emit('confirm')
    }
  }
}
</script>

<style scoped>
.dialog {
  z-index: 100;
}
.mask {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}
.dialog-wrap {
  position: fixed;
  z-index: 5000;
  width: 80%;
  max-width: 300px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  text-align: center;
  border-radius: 3px;
  overflow: hidden;
}
.text {
  min-height: 40px;
  font-size: 15px;
  line-height: 1.3;
  word-wrap: break-word;
  word-break: break-all;
  padding: 2.7em 20px 1.7em;
  color: #353535;
}
.btn-wrap {
  position: relative;
  line-height: 48px;
  font-size: 18px;
  color: #0457b7;
}
.btn-wrap::after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #d5d5d6;
  color: #d5d5d6;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
</style>