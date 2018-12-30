<template>
  <section class="content-wrap">
    <div class="button" @click="toupdata()" v-show="isReadOnly">修改资料</div>
    <div class="from-wrap">
      <div class="ipunt-wrap">
        <label for>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:</label>
        <input type="text" placeholder="如：张三" :readonly="isReadOnly" v-model="username" autofocus>
      </div>
      <div class="ipunt-wrap">
        <label for>身份证号:</label>
        <input type="text" placeholder="请填17位有效身份证号" :readonly="isReadOnly" v-model="idcard">
      </div>
      <div class="ipunt-wrap">
        <label for>出生日期:</label>
        <input type="text" placeholder="如：1995-09-26" :readonly="isReadOnly" v-model="bdate">
      </div>
      <div class="ipunt-wrap">
        <label for>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:</label>
        <input type="text" placeholder="男 或 女" :readonly="isReadOnly" v-model="sex">
      </div>
      <div class="ipunt-wrap">
        <label for>电子邮件:</label>
        <input type="text" placeholder="请填有效的电子邮箱" :readonly="isReadOnly" v-model="email">
      </div>
      <div class="ipunt-wrap">
        <label for>通信地址:</label>
        <input type="text" placeholder="请填正确的地址" :readonly="isReadOnly" v-model="address">
      </div>
      <div class="ipunt-wrap">
        <label for>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话:</label>
        <input type="text" placeholder="请填有效的手机号" :readonly="isReadOnly" v-model="phone">
      </div>
      <transition name="pull-up">
        <div class="ipunt-button" v-show="!isReadOnly">
          <a class="gv" href="javascript:;" @click="updataInfo()">修改</a>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>

export default {

  data() {
    return {
      username: '',
      idcard: '',
      bdate: '',
      sex: '',
      email: '',
      address: '',
      phone: '',
      isReadOnly: true,
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
        this.username = res.username;
        this.idcard = res.idcard;
        this.bdate = res.bdate;
        this.sex = res.sex;
        this.email = res.email;
        this.address = res.address;
        this.phone = res.phone;
      }
    });
    // this.$http.get('http://hjingren.cn/thinkphp/index.php/home/index').then((res) => {
    // 	this.username = res.data.username;
    // 	this.idcard = res.data.idcard;
    // 	this.bdate = res.data.bdate;
    // 	this.sex = res.data.sex;
    // 	this.email = res.data.email;
    // 	this.address = res.data.address;
    // 	this.phone = res.data.phone;
    // })
  },
  methods: {
    toupdata() {
      this.isReadOnly = false;
    },
    updataInfo() {
      var user = {
        id: sessionStorage.id,
        username: this.username,
        idcard: this.idcard,
        bdate: this.bdate,
        sex: this.sex,
        email: this.email,
        address: this.address,
        phone: this.phone
      }
      console.log(user);
      $.ajax({
        url: 'http://hjingren.cn/thinkphp/index.php/home/User/updatauser',
        type: 'post',
        dataType: 'json',
        data: user,
        success: (res) => {
          console.log(res)
          if (res.success) {
            alert('修改成功')
            this.isReadOnly = true;
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

section.content-wrap .button {
  position: absolute;
  top: 20px;
  left: 60%;
  width: 120px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  padding: 8px 20px;
  /* margin: 30px 0; */
  font-size: 20px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  cursor: pointer;
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
  padding-left: 100px;
  margin-top: 20px;
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

.pull-up-enter-active,
.pull-up-leave-active {
  transition: all 0.5s;
}
.pull-up-enter,
.pull-up-leave-active {
  opacity: 0;
  transform: translateY(-100px);
}
</style>