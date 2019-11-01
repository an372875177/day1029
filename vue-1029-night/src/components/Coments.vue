<template>
	<div>
		<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572367659500&di=1cee36aa11f554c48edf2d1a293377c3&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F20%2F20181020082933_uizhn.jpg" alt="">
	</div>
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
		},
	}
</script>

<style>
</style>
