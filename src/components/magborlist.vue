<template>
  <section class="content-wrap">
    <table style="top: 50px;">
      <thead>
        <tr>
          <th>编号</th>
          <th>姓名</th>
          <th>时间</th>
          <th>内容</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in magborLists" :key="index">
          <td>{{++index}}</td>
          <td>{{item.username}}</td>
          <td>{{item.time | time}}</td>
          <td>{{item.content}}</td>
          <td v-show="isAdmin">
            <a @click="deleted(item.id)" style="color: #FF3030;text-decoration: underline;">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>

export default {

  data() {
    return {
      magborLists: '',
      isAdmin: false
    }
  },
  filters: {
    time(value) {
      return new Date(parseInt(value) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
    }
  },
  created() {
    this.magborList()
    if (sessionStorage.userid != '') {
      console.log(sessionStorage.userid)
      this.isAdmin = true
    }
  },
  methods: {
    deleted(id) {
      var r = confirm("确认删除")
      if (r == true) {
        $.ajax({
          url: 'http://hjingren.cn/thinkphp/index.php/home/Msgboard/delete?id=' + id,
          type: 'get',
          dataType: 'json',
          success: (res) => {
            console.log(res)
            if (res.success) {
              alert(res.data)
              this.magborList()
            } else {
              alert('删除失败')
            }
          }
        });
      } else {
        return
      }
    },
    magborList() {
      $.ajax({
        url: 'http://hjingren.cn/thinkphp/index.php/home/Msgboard/showlist',
        type: 'get',
        dataType: 'json',
        success: (res) => {
          console.log(res)
          if (res.success) {
            this.magborLists = res.data
          } else {
            alert('查询失败')
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
</style>