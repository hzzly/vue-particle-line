<template>
  <section class="content-wrap">
    <div class="center-search">
      <v-search @search="Search"></v-search>
    </div>
    <v-table :thead="thead" :list="rentList" @deleted="deleted" @rent="rent"></v-table>
  </section>
</template>

<script>
import Searchbar from './Searchbar'
import Table from './Table'

export default {
  components: {
    'v-search': Searchbar,
    'v-table': Table
  },
  data() {
    return {
      rentList: '',
      thead: ['编号', '姓名', '联系方式', '户型', '每月价格(元)', '建筑面积', '装修情况', '房屋地址', '房屋情况', '操作']
    }
  },
  created() {
    this.RentList()
  },
  methods: {
    deleted(id) {
      var r = confirm("确认删除")
      if (r == true) {
        $.ajax({
          url: 'http://hjingren.cn/thinkphp/index.php/home/Renthouse/delete?id=' + id,
          type: 'get',
          dataType: 'json',
          success: (res) => {
            console.log(res)
            if (res.success) {
              alert(res.data)
              this.RentList()
            } else {
              alert('删除失败')
            }
          }
        });
      } else {
        return
      }
    },
    rent(id) {
      var r = confirm("确认租房")
      if (r == true) {
        $.ajax({
          url: 'http://hjingren.cn/thinkphp/index.php/home/Renthouse/rent?id=' + id,
          type: 'get',
          dataType: 'json',
          success: (res) => {
            console.log(res)
            if (res.success) {
              alert(res.data)
              this.RentList()
            } else {
              alert('求租失败')
            }
          }
        });
      } else {
        return
      }
    },
    RentList() {
      $.ajax({
        url: 'http://hjingren.cn/thinkphp/index.php/home/Renthouse/showlist',
        type: 'get',
        dataType: 'json',
        success: (res) => {
          console.log(res)
          if (res.success) {
            this.rentList = res.data
          } else {
            alert('查询失败')
          }
        }
      });
    },
    Search(keyword) {
      $.ajax({
        url: 'http://hjingren.cn/thinkphp/index.php/home/Renthouse/search?keyword=' + keyword,
        type: 'get',
        success: (res) => {
          console.log(res)
          if (res.success) {
            this.rentList = ''
            this.rentList = res.data
          } else {
            alert('查询失败')
          }
        }
      });
    }
  },

}
</script>

<style scoped>
section.content-wrap {
  position: relative;
}
.center-search {
  position: absolute;
  left: 30%;
  /* transform: translateX(-50%); */
}
</style>