<template>
	<div class="selectCity_wrap">
		<app-header :title="headTitle"></app-header>
		<div class="input_wrap" >
			<input type="text" placeholder="输入学校、商务楼、地址">
			<p>提交</p>
		</div>

		<div class="search_history">
			<p class="f">搜索历史</p>
			<div class="history_list">
				<p>南京路</p>
				<span>xxx路xxx街xxx路xxx街</span>
			</div>

			<div class="history_list">
				<p>南京路</p>
				<span>xxx路xxx街xxx路xxx街</span>
			</div>	

			<p class="clear_all">清空所有</p>		
		</div>
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
	.input_wrap{width: 100;height: 6rem;background: white;margin-top: 1rem;padding: 1rem;}
	.input_wrap input{width: 100%;height: 2rem;margin: 0 auto;}
	.input_wrap p{width:100%;margin-top: 1rem;height: 2rem;background: #3190E8;color: white;border-radius: 5px;text-align: center;font-size: 1.2rem;}


	.search_history p.f{border-bottom: 1px solid #EAEAEA;margin-left: 1rem;}

	.history_list{width: 100%;height: 5rem;background: white;padding: 1rem;box-sizing: border-box;border-bottom: 2px solid #EAEAEA;}
	.history_list p{font-size: 1.2xxx路xxx街xxx路xxx街rem;}
	.history_list span{font-size: 1rem;color: #999999;}

	.clear_all{width: 100%;height: 2.5rem;background:white;text-align: center;line-height: 2.5rem;font-size: 1.3rem;color: #666666;}
</style>