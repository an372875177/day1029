<template>
	<div>宝贝详情</div>
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
