<template>
	<div class="search-bar">
		<input type="text" class="input-wrap" v-model="keyword">
		<a href="javascript:;" class="input-button" @click="search">搜索</a>
	</div>
</template>

<script>
export default {
	data() {
		return {
			keyword: ''
		}
	},
	methods: {
		search () {
			this.$emit('search', this.keyword)
		}
	}
}
</script>

<style scoped>
.search-bar{
	position: absolute;
	top: 20px;
	left: 10%;
	width: 400px;
	height: 46px;
	line-height: 46px;
}
.search-bar .input-wrap{
	float: left;
	width: 270px;
	height: 40px;
	padding: 0 15px;
	line-height: 40px;
	border: none;
	outline: none;
	font-size: 20px;
	border-radius: 20px 0 0 20px;
	background: rgba(255, 255, 255, 0.2);
	transition: all .8s;
}
.search-bar .input-wrap:focus{
	background: rgba(255, 255, 255, .8);
}
.search-bar .input-button{
	float: left;
	width: 50px;
	height: 38px;
	line-height: 38px;
	text-align: center;
	font-size: 14px;
	border: 1px solid rgba(255, 255, 255, 0.2);
	transition: all .8s;
}
.search-bar .input-wrap:focus .input-botton{
	border-color: rgba(255, 255, 255, 0.8);
}
</style>