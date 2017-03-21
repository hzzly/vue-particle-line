<template>
	<table>
		<thead>
			<tr>
				<th v-for="item in thead">
					{{item}}
				</th>
			</tr>
		</thead>
		<tbody>				
			<tr v-for="(item,index) in list">
				<td>
					{{++index}}
				</td>
				<td>
					{{item.username}}
				</td>
				<td>
					{{item.phone}}
				</td>
				<td>
					{{item.htype}}
				</td>
				<td v-show="item.rprice">
					{{item.rprice}}
				</td>
				<td v-show="item.bprice">
					{{item.bprice}}
				</td>
				<td>
					{{item.jarea}}
				</td>
				<td>
					{{item.decoratetype}}
				</td>
				<td v-show="item.hadress">
					{{item.hadress}}
				</td>
				<td v-show="item.haddress">
					{{item.haddress}}
				</td>
				<td v-show="item.isrent">
					{{item.isrent | isRent}}
				</td>
				<td v-show="item.isbuy">
					{{item.isbuy | isBuy}}
				</td>
				<td v-show="!isAdmin && item.isrent == 0 && thead.length != 9">
					<a @click="rent(item.id)" style="color: #FF3030;text-decoration: underline;">求租</a>
				</td>
				<td v-show="!isAdmin && item.isbuy == 0 && thead.length != 9">
					<a @click="buy(item.id)" style="color: #FF3030;text-decoration: underline;">求购</a>
				</td>
				<td v-show="isAdmin">
					<a @click="deleted(item.id)" style="color: #FF3030;text-decoration: underline;">删除</a>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>

export default {
	props: ['thead', 'list'],
	filters: {
		isRent(value) {
			return value == 0?'未出租':'已出租'
		},
		isBuy(value) {
			return value == 0?'未出售':'已出售'
		}
	},
	computed: {
		isAdmin() {
			if (sessionStorage.userid) {
				return true
			} else {
				return false
			}
		}
	},
	methods: {
		deleted (id) {
			this.$emit('deleted', id)
		},
		rent (id) {
			this.$emit('rent', id)
		},
		buy (id) {
			this.$emit('buy', id)
		}
	}

}
</script>

<style scoped>

</style>