<template>
  <div class="home">
	<images class="images-container" :items="imagesList"></images>
	<div class="phones-container">
		<div v-for="item in phoneList">
			<router-link :to='"/detail/"+item.id'>
				<phone :phoneInfo="item"></phone>
			</router-link>
		</div>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Images from '@/components/Images.vue'
import Phone from '@/components/Phone.vue'

export default {
  name: 'home',
  data(){
	  return{
		  imagesList:[
		  		  "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d6e7ed784f7825078454eabc2fa299e.jpg?w=2452&h=920",
		  		  "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/30bb7101afd301b77d8558bf43dff8b0.jpg?thumb=1&w=1533&h=575&f=webp&q=90", 
		  		  "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4f5e5eb570bd8c932c41d111ecb4838.jpg?thumb=1&w=1533&h=575&f=webp&q=90"
		  ],
		  phoneList:[
		  	{
		  		id:101,
		  		title:"honor/荣耀20i",
		  		image:"https://gw.alicdn.com/bao/uploaded/i1/3986260424/O1CN01Dk4I8Q1F0EUcEH7T8_!!3986260424.jpg",
		  		info:"5G双卡全网通，骁龙855Plus",
		  		price:3699,
		  	},
		  	{
		  		id:102,
		  		title:"honor/荣耀20i",
		  		image:"https://gw.alicdn.com/bao/uploaded/i1/3986260424/O1CN01Dk4I8Q1F0EUcEH7T8_!!3986260424.jpg",
		  		info:"5G双卡全网通，骁龙855Plus",
		  		price:3699,
		  	},
		  	{
		  		id:103,
		  		title:"honor/荣耀20i",
		  		image:"https://gw.alicdn.com/bao/uploaded/i1/3986260424/O1CN01Dk4I8Q1F0EUcEH7T8_!!3986260424.jpg",
		  		info:"5G双卡全网通，骁龙855Plus",
		  		price:3699,
		  	},
		  	{
		  		id:104,
		  		title:"honor/荣耀20i",
		  		image:"https://gw.alicdn.com/bao/uploaded/i1/3986260424/O1CN01Dk4I8Q1F0EUcEH7T8_!!3986260424.jpg",
		  		info:"5G双卡全网通，骁龙855Plus",
		  		price:3699,
		  	},
		  	{
		  		id:105,
		  		title:"秋装上季",
		  		image:"https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/31983578/O1CN01eahA2G1cIlgxgf0It_!!0-saturn_solar.jpg_250x250.jpg_.webp",
		  		info:"贼好看",
		  		price:399,
		  	},
		  	{
		  		id:106,
		  		title:"秋装上季",
		  		image:"https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/31983578/O1CN01eahA2G1cIlgxgf0It_!!0-saturn_solar.jpg_250x250.jpg_.webp",
		  		info:"贼好看",
		  		price:399,
		  	},
		  	{
		  		id:107,
		  		title:"秋装上季 ",
		  		image:"https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/31983578/O1CN01eahA2G1cIlgxgf0It_!!0-saturn_solar.jpg_250x250.jpg_.webp",
		  		info:"贼好看",
		  		price:399,
		  	},
		  	{
		  		id:108,
		  		title:"秋装上季",
		  		image:"https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/31983578/O1CN01eahA2G1cIlgxgf0It_!!0-saturn_solar.jpg_250x250.jpg_.webp",
		  		info:"贼好看",
		  		price:399,
		  	}
		  ]
	  }
  },
  components: {
    // HelloWorld
	Images,
	Phone
  }
}
</script>
<style>
	.home{
		width: 1000px;
		margin: 0 auto;
		background-color: skyblue;
	}
	.phones-container{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
</style>
