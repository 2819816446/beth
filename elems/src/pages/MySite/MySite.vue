<template>
	<div class="selectCity_wrap">
		<app-header :title="headTitle" :isShowBack="false"></app-header>
		<app-footer></app-footer>
	</div>
</template>

<script>
// 组件里都是用 this.$store 访问数据
	import axios from 'axios'
	import AppHeader from '../../components/AppHeader.vue'
	import AppFooter from '../../components/AppFooter.vue'
	
	export default{
		name:'MySite',
		data(){
			return{
				headTitle:""
			};
		},
		components:{
			"app-header":AppHeader,
			"app-footer":AppFooter
		},
		computed:{

		},
		methods:{
			getDetailAddress(){
				var _this = this;
				var geohash = this.$route.query.geohash;
				var url ='http://cangdu.org:8001/v2/pois/'+geohash;
				axios.get(url)
				  .then(function (response) {		//{data:{[],[]...}}
				    console.log(response.data);		//{[],[]...}
					_this.headTitle = response.data.name;   //根据经纬度获取地位的地点名称
					_this.$store.commit("SearchHistoryToLacal",response.data); //搜索历史保存在本地
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
			this.getDetailAddress();
		},

		watch:{

		},


	};
	
</script>


<style>

</style>