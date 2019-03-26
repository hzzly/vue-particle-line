<template>
  <div class="main-section">
    <h3 class="section-title white">How to use</h3>
    <pre class="npm-code white">
              <code>
npm install vue-particle-line --save
              </code>
     </pre>

    <br>

    <div class="wrap-code text-left">
      <h4 class="white">Main.js file</h4>
      <pre class="language-js"><code>
import Vue from 'vue'
import vueParticleLine from 'vue-particle-line'
import 'vue-particle-line/dist/vue-particle-line.css'
Vue.use(vueParticleLine)
        </code></pre>
    </div>
    <br>
    <div class="wrap-code text-left">
      <h4 class="white">App.vue file - Simple example</h4>
      <pre class="language-html"><code>
{{appCode}}
        </code></pre>
    </div>
    <br>
    <div class="wrap-table">
      <h4 class="white text-left">Props</h4>
      <!-- <pre class="language-html">编写中</pre> -->
      <table class="rwd-table">

        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>

        <tr>
          <td data-th="Prop">lineWidth</td>
          <td data-th="Type">String</td>
          <td data-th="Default">0.3</td>
          <td data-th="Description">Lines width</td>
        </tr>
        <tr>
          <td data-th="Name">dotsNumber</td>
          <td data-th="Type">Number</td>
          <td data-th="Default">100</td>
          <td data-th="Description">
            Dots Number
          </td>
        </tr>
        <tr>
          <td data-th="Name">dotsDistance</td>
          <td data-th="Type">Number</td>
          <td data-th="Default">100</td>
          <td data-th="Description">
            Far as points to connect
          </td>
        </tr>
        <tr>
          <td data-th="Name">hoverEffect</td>
          <td data-th="Type">Boolean</td>
          <td data-th="Default">true</td>
          <td data-th="Description">
            Mouse hover events
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'
const appCode = `<template>
  <div id="app">
    <vue-particle-line>
      <router-view />
    </vue-particle-line>
  </div>
</template>`
export default {
  name: 'usage',
  data () {
    return {
      appCode
    }
  },
  mounted () {
    Prism.highlightAll()
  }
}
</script>

<style lang="scss" scoped>
$breakpoint-alpha: 767px;
.main-section {
  max-width: 650px;
  margin: auto;
  padding: 0 1rem;
}
.section-title {
  margin: 2rem 0 0 0;
}
.main-title {
  color: #fff;
  z-index: 999;
  h2 {
    font-size: 7rem;
    font-family: "Teko", sans-serif;
    text-shadow: 8px 8px #000000;
    text-transform: uppercase;
    margin: 0;
    @media (max-width: $breakpoint-alpha) {
      font-size: 3rem;
    }
  }
}
.rwd-table {
  margin: 1em 0;
  min-width: 300px;
  tr {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  th {
    display: none;
  }
  td {
    display: block;
    &:first-child {
      padding-top: .5em;
    }
    &:last-child {
      padding-bottom: .5em;
    }
    &:before {
      content: attr(data-th)": ";
      font-weight: bold;
      width: 6.5em;
      display: inline-block;
      @media (min-width: $breakpoint-alpha) {
        display: none;
      }
    }
  }
  th, td {
    text-align: left;
    @media (min-width: $breakpoint-alpha) {
      display: table-cell;
      padding: .25em .5em;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }
  }
}

.rwd-table {
  width: 100%;
  color: #fff;
  overflow: hidden;
  background: #292929;
  border-radius: 3px;
  box-shadow: 2px 6px 17px rgba(0, 0, 0, 0.39);
  padding: .5rem;
  tr {
    border-color: lighten(#34495E, 10%);
  }
  th, td {
    margin: .5em 1em;
    @media (min-width: $breakpoint-alpha) {
      padding: 1em !important;
    }
  }
  th, td:before {
    color: #dd5;
  }
}
</style>
