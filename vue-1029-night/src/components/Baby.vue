<template>
	<div>
		<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572367659502&di=a0c1d83abb6a5770e1ad71edb5d9f387&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2Fb%2Fca%2Fe89079a927_250_350.jpg" alt="">
	</div>
</template>

<script>
	export default{
		created(){
			console.log(this.$route.params.id);
			this.goodInfo = {
				
			}
		},
		data(){
			return{
				goodInfo:null,
			};
		}
	}
</script>

<style>
</style>
