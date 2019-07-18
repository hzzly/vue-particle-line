## vue-particle-line

![NPM version](https://img.shields.io/npm/v/vue-particle-line.svg)
![MIT Licence](https://img.shields.io/npm/l/vue-particle-line.svg)

### How to use
```
npm install vue-particle-line --save
```

### Main.js file
```javascript
import Vue from 'vue'
import vueParticleLine from 'vue-particle-line'
import 'vue-particle-line/dist/vue-particle-line.css'
Vue.use(vueParticleLine)
```

### App.vue file - Simple example
```html
<template>
  <div id="app">
    <vue-particle-line>
      <router-view />
    </vue-particle-line>
  </div>
</template>
```

### Props

| Prop         | Type    | Default  | Description   |
| -------      | -----   | :------: |  -----------  |
| lineWidth    | Number  |  0.3     |  connect line width   |
| dotsNumber   | Number  |  100     |  dot number   |
| dotsDistance | Number  |  100     |  far as points to connect   |
| hoverEffect  | Boolean |  true    |  mouse hover events   |

### License

MIT

