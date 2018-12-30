<template>
  <section class="content-wrap">
    <div class="from-wrap">
      <div class="ipunt-wrap">
        <label for>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:</label>
        <input type="text" disabled="true" v-model="username">
      </div>
      <div class="ipunt-wrap">
        <label for>新&nbsp;&nbsp;密&nbsp;&nbsp;码:</label>
        <input type="password" v-model="password">
      </div>
      <div class="ipunt-wrap">
        <label for>重复密码:</label>
        <input type="password" v-model="cfmpaaaword">
      </div>
      <div class="ipunt-button">
        <a class="gv" href="javascript:;" @click="updatapassword()">修改</a>
      </div>
    </div>
  </section>
</template>

<script>

export default {

  data() {
    return {
      username: '',
      password: '',
      cfmpaaaword: ''
    }
  },
  created() {
    var user = {
      uid: sessionStorage.id
    }
    console.log(user);
    $.ajax({
      url: 'http://hjingren.cn/thinkphp/index.php/home/index',
      type: 'post',
      dataType: 'json',
      data: user,
      success: (res) => {
        console.log(res)
        this.username = res.username;
      }
    });
  },
  methods: {
    updatapassword() {
      if (this.password == '') {
        alert('密码不能为空')
        return
      }
      if (this.password != this.cfmpaaaword) {
        alert('两次密码不一致')
        return
      }
      var user = {
        id: sessionStorage.id,
        password: this.password
      }
      console.log(user);
      $.ajax({
        url: 'http://hjingren.cn/thinkphp/index.php/home/User/updatapassword',
        type: 'post',
        dataType: 'json',
        data: user,
        success: (res) => {
          console.log(res)
          if (res.success) {
            alert('修改成功,请前往登录。')
            if (sessionStorage.userid) {
              sessionStorage.id = ''
              sessionStorage.userid = ''
              sessionStorage.name = ''
            } else {
              sessionStorage.id = ''
              sessionStorage.name = ''
            }
            this.$router.push('/menu')
          } else {
            alert('修改失败')
          }
        }
      });
    }
  }
}
</script>

<style scoped>
section.content-wrap {
  position: relative;
}
.gv {
  text-decoration: none;
  background: url("../assets/images/nav_gv.png") repeat 0px 0px;
  width: 130px;
  height: 43px;
  display: block;
  text-align: center;
  line-height: 43px;
  cursor: pointer;
  float: left;
  margin: 10px 2px 10px 2px;
  font: 18px/43px "microsoft yahei";
  color: #066197;
}
a.gv:hover {
  background: url("../assets/images/nav_gv.png") repeat 0px -43px;
  color: #1d7eb8;
  -webkit-box-shadow: 0 0 6px #1d7eb8;
  transition-duration: 0.5s;
}
.from-wrap {
  padding-left: 300px;
  margin-top: 100px;
}
.ipunt-wrap label {
  width: 100px;
  text-align: center;
  display: inline-block;
}
.ipunt-wrap input {
  border: none;
  outline: none;
  background: none;
  border-bottom: 1px solid #fff;
  margin-bottom: 30px;
  width: 300px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  font-size: 18px;
  padding: 0 5px;
}
.ipunt-button {
  margin-left: 150px;
}
</style>