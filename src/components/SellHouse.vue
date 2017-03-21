<template>
	<section class="content-wrap">
		<v-search @search="Search"></v-search>
		<div class="button" @click="addRent()">新增出售</div>
		<v-table :thead="thead" :list="buyList" @deleted="deleted"></v-table>

		<transition name="fade">
			<div v-show="addInfoShow" class="addInfo">
				<div class="addInfo-wrapper">
					<div class="addInfo-main">
						<div class="from-wrap">
							<div class="ipunt-wrap">
								<label for="">户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型:</label>
								<input type="text" placeholder="如：平房、两室一厅" autofocus v-model="htype">
							</div>
							<div class="ipunt-wrap">
								<label for="">房屋价格:</label>
								<input type="text" v-model="bprice">
							</div>
							<div class="ipunt-wrap">
								<label for="">建筑面积:</label>
								<input type="text" v-model="jarea">
							</div>
							<div class="ipunt-wrap">
								<label for="">装修情况:</label>
								<input type="text" v-model="decoratetype">
							</div>
							<div class="ipunt-wrap">
								<label for="">房屋地址:</label>
								<input type="text" v-model="hadress">
							</div>
							<div class="ipunt-button">
								<a class="gv" href="javascript:;" @click="updataInfo()">添加</a>
							</div>
						</div>
					</div>
					<div class="addInfo-close" @click="closeAddInfo()"> x </div>
				</div>
			</div>
		</transition>
	</section>
</template>

<script>

import Searchbar from './Searchbar'
import Table from './Table'

export default {
	
	data() {
		return {
			addInfoShow: false,
			buyList: '',
			htype: '',
			bprice: '',
			jarea: '',
			decoratetype: '',
			hadress: '',
			custhead: ['编号', '姓名', '联系方式', '户型', '房屋价格(元)', '建筑面积', '装修情况', '房屋地址', '房屋情况'],
			adminthead: ['编号', '姓名', '联系方式', '户型', '房屋价格(元)', '建筑面积', '装修情况', '房屋地址', '房屋情况', '操作']
		}
	},
	components: {
		'v-search': Searchbar,
		'v-table': Table
	},
	computed: {
		thead() {
			if (sessionStorage.userid) {
				console.log(sessionStorage.userid)
				return this.adminthead
			} else {
				return this.custhead
			}
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
		addRent() {
			this.addInfoShow = true
		},
		closeAddInfo() {
			this.addInfoShow = false
		},
		updataInfo() {
			if (!this.htype || !this.bprice || !this.jarea || !this.decoratetype || !this.hadress) {
				alert('请填写完整')
				return
			}
			var rentHouse = {
				uid: sessionStorage.id,
				htype: this.htype,
				bprice: this.bprice,
				jarea: this.jarea,
				decoratetype: this.decoratetype,
				haddress:this.hadress,
				isbuy: 0
			}

			$.ajax({
				url: 'http://hjingren.cn/thinkphp/index.php/home/Buyhouse/add',
				type: 'post',
				dataType: 'json',
				data: rentHouse,
				success: (res) => {
					console.log(res)
					if (res.success) {
						alert('添加成功')
						this.addInfoShow = false
						this.BuyList()
					} else {
						alert('添加失败')
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
	}
}
</script>

<style scoped>
section.content-wrap{
	position: relative;
}
section.content-wrap .button{
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

.page-wrap{
	position: absolute;
	top: 450px;
	left: 50%;
	transform: translateX(-50%);
}
.page-wrap ul li{
	list-style: none;
	float: left;
	width: 40px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	border: 1px solid rgba(255, 255, 255, 0.2);
	margin-right: 5px;
}
.page-wrap ul li:hover{
	background: #fff;
	color: rgba(7,17,27,0.96);
}


.addInfo{
	position: fixed;
	top: 0;
	left: 0;
	/* z-index: 1000; */
	width: 100%;
	height: 100%;
	overflow: auto;
	backdrop-filter: blur(10px);
	transition: all 0.5s;
	background: rgba(7,17,27,0.9);
}
.addInfo.fade-enter-active,.addInfo.fade-leave-active{
	opacity: 1;
}
.addInfo.fade-enter,.addInfo.fade-leave-active{
	opacity: 0;
}
.addInfo-wrapper{
	min-height: 100%;
	width: 100%;
}
.addInfo-main{
	/* margin-top: 44px; */
	padding-bottom: 150px;
}			
.addInfo-close{
	position: relative;
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #fff;
    margin: 0px auto 0 auto;
    clear: both;
    font-size: 16px;
    cursor: pointer;
}

.gv {
	text-decoration: none;
    background: url('../assets/images/nav_gv.png') repeat 0px 0px;
    width: 130px;
    height: 43px;
    display: block;
    text-align: center;
    line-height: 43px;
    cursor: pointer;
    float: left;
    margin: 10px 2px 10px 2px;
    font: 18px/43px 'microsoft yahei';
    color: #066197;
}
a.gv:hover { 
	background: url('../assets/images/nav_gv.png') repeat 0px -43px; 
	color:#1d7eb8;
	-webkit-box-shadow: 0 0 6px #1d7eb8;
	transition-duration: 0.5s;
}
.from-wrap{
	padding-left: 450px;
	margin-top: 100px;
}
.ipunt-wrap label{
	width: 100px;
	text-align: center;
	display: inline-block;
}
.ipunt-wrap input{
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
    margin-left: 150px
}
</style>