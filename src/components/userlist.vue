<template>
  <section class="content-wrap">
    <table style="top: 50px;">
      <thead>
        <tr>
          <th v-for="(item, index) in thead" :key="index">{{item}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in userList" :key="index">
          <td>{{++index}}</td>
          <td>{{item.username}}</td>
          <td>{{item.sex}}</td>
          <td>{{item.password}}</td>
          <td>{{item.idcard}}</td>
          <td>{{item.bdate}}</td>
          <td>{{item.email}}</td>
          <td>{{item.address}}</td>
          <td>{{item.phone}}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>

export default {

  data() {
    return {
      userList: '',
      thead: ['编号', '姓名', '性别', '密码', '身份证号', '出生日期', '邮箱', '通信地址', '电话号码']
    }
  },
  created() {
    this.UserList()
  },
  methods: {
    UserList() {
      $.ajax({
        url: 'http://hjingren.cn/thinkphp/index.php/home/User/showlist',
        type: 'get',
        dataType: 'json',
        success: (res) => {
          console.log(res)
          if (res.success) {
            this.userList = res.data
          } else {
            alert('查询失败')
          }
        }
      });
    },
  }
}
</script>

<style scoped>
section.content-wrap {
  position: relative;
}
</style>