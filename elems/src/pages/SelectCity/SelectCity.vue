<template>
	<div class="selectCity_wrap">
		<app-header :title="headTitle"></app-header>
		slect
	</div>
</template>

<script>
// 组件里都是用 this.$store 访问数据
	import axios from 'axios'
	import AppHeader from '../../components/AppHeader.vue'
	
	export default{
		name:'SelectCity',
		data(){
			return{
				headTitle:""
			};
		},
		components:{
			"app-header":AppHeader,
		},
		computed:{

		},
		methods:{
			// http://cangdu.org:8001/v1/cities/:id
			// 
			getCityInfo(){
				var _this = this;
				var id = this.$route.params.id;
				var url ='http://cangdu.org:8001/v1/cities/'+id;
				axios.get(url)
				  .then(function (response) {		//{data:{[],[]...}}
				    console.log(response.data);		//{[],[]...}
					_this.headTitle = response.data.name;
				  })
				  .catch(function (error) {
				    console.log(error);
				 });
			}	
		

		},
		mounted(){
			


		},
		beforeCreate(){


		},
		created(){
			this.getCityInfo();

		},

		watch:{

		},


	};
	
</script>


<style>

</style>