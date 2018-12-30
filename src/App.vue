<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body,
html {
  width: 100%;
  height: 100%;
  /* background: rgba(7,17,27,0.96); */
}
a {
  text-decoration: none;
  /* color: #333; */
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
}
.fade-out-enter-active,
.fade-out-leave-active {
  transition: all 0.5s;
}
.fade-out-enter,
.fade-out-leave-active {
  opacity: 0;
  transform: translateX(-400px);
}
</style>
