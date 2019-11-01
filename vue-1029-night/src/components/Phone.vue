<template>
	<div class="container1">
		<img :src="phoneInfo.image" alt="">
		<h3>{{phoneInfo.title}}</h3>
		<p>{{phoneInfo.info}}</p>
		<p>{{phoneInfo.price}}</p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:["phoneInfo"]
	}
</script>

<style>
	.container1{
		width: 220px;
		text-align: center;
		margin: 10px;
		background-color: beige;
		padding-bottom: 10px;
	}
	.container1 img{
		width: 100%;
	}
</style>
