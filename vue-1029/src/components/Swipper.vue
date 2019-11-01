<template>
	<div class="swipper-container" @mouseenter="stop" @mouseleave="resume">
		<div v-for="(item,index) in items" v-show="index==currentIndex">
			<img :src="item" alt="">
		</div>
		
		
		<div class="point" v-for="(item,index) in items" @click="currentIndex=index">
			<span ></span>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				currentIndex:0,
				playing:true,
				interval:null
			}
		},
		created(){
			this.play();
		},
		destroyed(){
			clearInterval(this.interval);
		},
		methods:{
			play(){
				this.interval = setInterval( ()=>{
					if(this.playing)
					{
						this.currentIndex++;
						if(this.currentIndex>=this.items.length){
							this.currentIndex=0;
						}
					}
				},3000 )
			},
			stop(){
				this.playing=false;
				
			},
			resume(){
				this.playing=true;
			}
		},
		props:["items"]
	}
</script>


<!--样式中使用less  预处理 需要在style标签中表名 lang=less -->
<!-- scoped代表样式只在当前组件生效 -->
<style lang="less">
.swipper-container{
	div{
		img{
			width: 100%;
		}
	}
	
	.point{
		display: inline-block;
		border: 18px solid  #2B81AF;
		border-radius: 8px;
		margin: 5px;
		position: relative;
		top: -100px;
	}
	
}
	
</style>
