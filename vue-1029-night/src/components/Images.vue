<template>
	<div class="images-container" @mouseenter="stop" @mouseleave="resume">
		<div v-for="(item,index) in items" v-show="index==currentIndex">
			<img :src="item" alt="">
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				currentIndex:0,
				playing:true
			}
		},
		created(){
			this.play();
		},
		methods:{
			play(){
				this.interval = setInterval(()=>{
					if(this.playing)
					{
						this.currentIndex++;
						if(this.currentIndex>=this.items.length){
							this.currentIndex=0;
						}
					}
				},2000)
			
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

<style  lang="less">
.images-container{
	div{
		img{
			width: 100%;
		}
	}
	
}
</style>
