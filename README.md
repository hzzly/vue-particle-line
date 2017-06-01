# canvas-vue

>又一个Vue+Cnavas酷炫的后台管理，依然前后端分离。

**项目地址：** https://github.com/hzzly/canvas-vue

**demo地址：** http://hjingren.cn/curriculum-design/

欢迎大家的star啦~

(服务器被勒索病毒破坏，后台数据也被破坏，暂时预览不了了，抱歉，可以把本项目和[后台项目](https://github.com/hzzly/canvas-vue-backstage)clone下面运行)

### **技术栈**
前台:
   > vue-cli 
   > vue 
   > vue-router 
   > webpak 
   > canvas 
   > ajax 

后台:
   > wamp 
   > PHP(ThinkPHP) 
   > mysql 

### **功能说明**
* 登录
    * 用户登录
    * 管理员登录
* 注册
    * 用户注册
* Canvas
    * 流星滑过
    * 星星闪闪
    * 后台折线
    * 折线跟着鼠标滑动
* Vue
    * 弹出框组件
    * 路由切换动画
    * 通过Ajax调用后台接口
* 留言板(时间轴)
* 添加房屋信息
* 出租 求租
* 出售 求购
* 个人信息修改
* 密码修改
* ......

> 1.登录注册模块，流星与星星为canvas，登录注册切换动画为vue transition

![canvas-login](http://omt3u4bph.bkt.clouddn.com/canvas-login.png)

> 2. 后台管理页面，背景为canvas(会动的折线+跟着鼠标滑动) 功能模块切换为vue transition

![admin](http://omt3u4bph.bkt.clouddn.com/canvas-admin.png)

> 3. 留言板(时间轴特效)

![msgboard](http://omt3u4bph.bkt.clouddn.com/msgboard.png)

### 目录结构

<!--more-->

```
|——canvas-vue/
|   |——build/
|   |——confg/
|   |——node_modules/
|   |——src/
|   |   |——assets/                 //静态文件
|   |   |——components/             //页面组件
|   |   |   |——Menu.vue            //登录注册加载页面
|   |   |   |——Home.vue            //后台首页
|   |   |   |——Login.vue           //登录页面
|   |   |   |——Regist.vue          //注册页面
|   |   |   |——Navbar.vue          //我的发布
|   |   |   |——Messageboard.vue    //留言板页面
|   |   |   |——...                 //等等
|   |   |——router/                 
|   |   |   |——index.js            //页面路由
|   |   |——App.vue                 //父组件
|   |   |——main.js                 //入口文件
|   |——static/                     
|   |——.babelrc
|   |——.editorconfig
|   |——.gitgnore
|   |——index.html
|   |——package.json
|   |——README.md
```

### 总结

这个项目还没有完成，后期将不定期更新，敬请期待。。

如果觉得还行，欢迎star

**项目地址：** https://github.com/hzzly/canvas-vue


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


好了，溜了溜了。。。
