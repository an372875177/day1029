<template>
	<div class="detail">
		<h2>{{good.title}}</h2>
		<img src="../assets/logo.png" alt="">
		<br>
		<!-- <button @click="num--" :disabled="num==1">-</button> {{num}} <button @click="num++">+</button>  <button>购买</button>
		<br> -->
		<router-link :to="`/Detail/${this.$route.params.id}/baby`">宝贝详情</router-link> <router-link :to="`/Detail/${this.$route.params.id}/coments`">评论</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				good:null,
				num:1,
			}
		},
		created(){
			console.log(this.$route.params.id);
			this.good = {
				id:this.$route.params.id,
				title:`商品${this.$route.params.id}`,
				image:"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg?thumb=1&w=250&h=250&f=webp&q=90",
				
			}
		}
	}
</script>

<style>
	
</style>
