<template>
	<div id="sidebar">
		<ul>
			<li v-for="(item,index) in sidebarList" class="list-item">
				<router-link :to="item.url">{{item.content}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>

export default {
	
	data() {
		return {
			sidebarList: [],
			customerSidebar: [
				{content: '注意事项', url: '/matters'},
				{content: '出租房屋', url: '/renthouse'},
				{content: '出售房屋', url: '/sellhouse'},
				{content: '求租房屋', url: '/solicithouse'},
				{content: '购买房屋', url: '/buyhouse'},
				{content: '个人信息', url: '/userinfo'},
				{content: '密码修改', url: '/modifypass'},
				{content: '留言板', url: '/messageboard'}
			],
			adminSidebar: [
				{content: '注意事项', url: '/matters'},
				{content: '出租信息管理', url: '/renthouse'},
				{content: '出售信息管理', url: '/sellhouse'},
				{content: '求租信息管理', url: '/solicithouse'},
				{content: '购买信息管理', url: '/buyhouse'},
				{content: '会员信息管理', url: '/userlist'},
				{content: '留言板管理', url: '/msgborlist'}
			]
		}
	},

	created() {
		if (sessionStorage.userid) {
			this.sidebarList = this.sidebarList.concat(this.adminSidebar)
		} else {
			this.sidebarList = this.sidebarList.concat(this.customerSidebar)
		}
	},
	
	methods: {
		
	}
}
</script>

<style scoped>
#sidebar{
	position: fixed;
	padding-top: 30px;
	width: 180px;
	height: 100%;
	z-index: 10;
	border-right: 1px solid #fff;
}
.list-item{
	height: 50px;
	line-height: 50px;
	text-align: center;
	font-family: '微软雅黑';
}
.list-item a.active{
	display: block;
	background: rgba(7,17,27,1);
}
</style>