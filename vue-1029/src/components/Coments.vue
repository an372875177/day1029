<template>
	<div>评论详情</div>
</template>

<script>
	export default{
		data(){
			return{
				commentInfo:null
			}
		},
		created(){
			console.log(this.$route.params.id);
			this.commentInfo = {
				
			}
		}
	}
</script>

<style>
</style>
