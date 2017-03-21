<template>
	<section class="content-wrap">
		<div class="center-search">		
			<v-search @search="Search"></v-search>
		</div>
		<v-table :thead="thead" :list="buyList" @deleted="deleted" @buy="buy"></v-table>
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
			buyList: '',
			thead: ['编号', '姓名', '联系方式', '户型', '房屋价格(元)', '建筑面积', '装修情况', '房屋地址', '房屋情况', '操作']
		}
	},
	created() {
		this.BuyList()
	},
	methods: {
		deleted(id) {
			var r=confirm("确认删除")
			if (r==true){
				$.ajax({
					url: 'http://hjingren.cn/thinkphp/index.php/home/Buyhouse/delete?id='+id,
					type: 'get',
					dataType: 'json',
					success: (res) => {
						console.log(res)
						if (res.success) {
							alert(res.data)
							this.BuyList()
						} else {
							alert('删除失败')
						}
					}
				});
			} else {
				return
			}
		},
		buy(id) {
			var r=confirm("确认购房")
			if (r==true){
				$.ajax({
					url: 'http://hjingren.cn/thinkphp/index.php/home/Buyhouse/rent?id='+id,
					type: 'get',
					dataType: 'json',
					success: (res) => {
						console.log(res)
						if (res.success) {
							alert(res.data)
							this.BuyList()
						} else {
							alert('买房失败')
						}
					}
				});
			} else {
				return
			}
		},
		BuyList() {
			$.ajax({
				url: 'http://hjingren.cn/thinkphp/index.php/home/Buyhouse/showlist',
				type: 'get',
				dataType: 'json',
				success: (res) => {
					console.log(res)
					if (res.success) {
						this.buyList = res.data
					} else {
						alert('查询失败')
					}
				}
			});
		},
		Search(keyword) {
			$.ajax({
				url: 'http://hjingren.cn/thinkphp/index.php/home/Buyhouse/search?keyword='+keyword,
				type: 'get',
				success: (res) => {
					console.log(res)
					if (res.success) {
						this.buyList = ''
						this.buyList = res.data
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
section.content-wrap{
	position: relative;
}
.center-search{
	position: absolute;
	left: 30%;
	/* transform: translateX(-50%); */
}

</style>