<template>
	<section class="content-wrap">
		
		<div class="comments-wrap">
			<div class="avatar"></div>
			<div class="comments-content">
				<textarea name="" id="" cols="85" rows="5" placeholder="扯淡、吐槽、点赞... 想说啥就说啥！" v-model="content"></textarea>
				<div class="comments-button gv" @click="addCommen()">评论</div>
			</div>
		</div>

		<div class="comments-list">
			<div class="lifeline"></div>
			<div class="comments-item" v-for="(item,index) in msgboardList">
				<div class="dateview">{{ item.time | time}}</div>
				<div class="comment">
					<div class="name">{{item.username}}：</div>
					<div class="words">{{item.content}}</div>
				</div>
			</div>			
		</div>
	</section>
</template>

<script>

export default {
	
	data() {
		return {
			msgboardList: '',
			content: ''
		}
	},
	filters: {
		time(value) {
			return new Date(parseInt(value) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
		}
	},
	created() {
		this.showlist()
	},
	methods: {
		showlist() {
			$.ajax({
				url: 'http://hjingren.cn/thinkphp/index.php/home/Msgboard/showlist',
				type: 'get',
				dataType: 'json',
				success: (res) => {
					console.log(res)
					if (res.success) {
						this.msgboardList = res.data
					} else {
						alert('查询失败')
					}
				}
			});
		},
		addCommen() {
			var comment = {
				uid: sessionStorage.id,
				content: this.content
			}
			$.ajax({
				url: 'http://hjingren.cn/thinkphp/index.php/home/Msgboard/addmsgboard',
				type: 'post',
				dataType: 'json',
				data: comment,
				success: (res) => {
					console.log(res)
					if (res.success) {
						alert('留言成功')
						this.content = ''
						this.showlist()
					} else {
						alert('留言失败')
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

.comments-wrap{
	display: flex;
	margin-left: 50px;
	margin-top: 30px;
}

.avatar{
	width: 50px;
	height: 50px;
	margin: 0 20px;
	border-radius: 50%;
	background: url('../assets/images/avatar.jpg') no-repeat;
	background-size: cover;
}
.comments-content{
	position: relative;
}
.comments-content textarea{
	border: none;
	border-radius: 10px;
	overflow: hidden;
    resize: none;
    outline: none;
    overflow: auto;
    padding: 10px;
    font-size: 16px;
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
.gv:hover { 
	background: url('../assets/images/nav_gv.png') repeat 0px -43px; 
	color:#1d7eb8;
	-webkit-box-shadow: 0 0 6px #1d7eb8;
	transition-duration: 0.5s;
}
.comments-button{
	position: absolute;
	right: 5px;
	top: 120px;
}

.comments-list{
	position: relative;
	border-top: 1px solid #fff;
	width: 70%;
	margin: 90px 0 50px 40px;
	padding-left: 50px;
}
.lifeline{
	position: absolute;
	/* min-height: 300px; */
	height: 100%;
	top: 20px;
	left: 200px;
	width: 2px;
	background: rgba(7,17,27,1);
}

.comments-item{
	margin-left: 200px;
	padding-top: 40px;
	position: relative;
}
.comments-item::before{
	content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    background: rgba(7,17,27,1);
    border: 2px solid #fff;
    left: -56px;
    top: 50px;
}

.dateview{
	position: absolute;
    left: -215px;
    top: 50px;
    z-index: 1;
    font-size: 14px;
    color: #F5F5F5;
}
.comment{
	
}
.comment .name {
	line-height: 30px;
	font-size: 18px;
}
</style>