<template>
	
	<download-table :items="tables"></download-table>
</template>

<script>
// @ is an alias to /src
import DownloadTable from '@/components/DownloadTable.vue'

export default {
  components: {
    DownloadTable
  },
  data(){
	    return{
			tables:[
					  {
						  name:"雪碧",
						  price:3,
						  num:1
					  },
					  {
						  name:"可乐",
						  price:3,
						 num:1
					  },
					  {
						  name:"乐虎",
						  price:4,
						 num:1
					  }
			]
		}
  }
}
</script>
<style>
</style>
