<template>
	<div class="container">
		<h2><slot></slot></h2>
		<table border="" cellspacing="" cellpadding="">
			<tr><th>商品</th><th>价格</th><th>数量</th></tr>
			<tr v-for="item in items"><th>{{item.name}}</th><th>{{item.price}}</th><th>{{item.num}}</th></tr>
		</table>
	</div>
</template>

<script>
	export default{
				props:["items"]
	}
</script>

<style scoped>
.container{
	text-align: center;
}
.container table{
	width: 600px;
	margin: 0 auto;
}
</style>
