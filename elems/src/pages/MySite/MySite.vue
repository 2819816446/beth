<template>
	<div class="selectCity_wrap">
		<app-header :title="headTitle" :isShowBack="false"></app-header>
		<app-footer></app-footer>

		<div class="m1">
			<ul>
				<li>
					<img src="../../assets/imgage/m1/m1_1.jpeg" alt="">
					<p>甜品饮品</p>
				</li>
				<li>
					<img src="../../assets/imgage/m1/m1_2.jpeg" alt="">
					<p>超市便利</p>
				</li>
				<li>
					<img src="../../assets/imgage/m1/m1_3.jpeg" alt="">
					<p>美食</p>
				</li>
				<li>
					<img src="../../assets/imgage/m1/m1_4.jpeg" alt="">
					<p>简餐</p>
				</li>
				<li>
					<img src="../../assets/imgage/m1/m1_5.jpeg" alt="">
					<p>新店特惠</p>
				</li>
				<li>
					<img src="../../assets/imgage/m1/m1_6.jpeg" alt="">
					<p>准时达</p>
				</li>
				<li>
					<img src="../../assets/imgage/m1/m1_7.jpeg" alt="">
					<p>预定早餐</p>
				</li>
				<li>
					<img src="../../assets/imgage/m1/m1_8.jpeg" alt="">
					<p>土豪套餐</p>
				</li>
			</ul>

			<div class="btn">
				<p class="btn_1 active"></p>
				<p class="btn_2"></p>
			</div>
		</div>
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
	.m1{height: 10.3rem;width: 100%;}
	.m1 img{width: 3rem;height: 3rem;}
	.m1 ul{height: 9.3rem;}
	.m1 ul li{width: 25%;height: 4rem;text-align: center;float: left;list-style: none;padding-bottom: 0.5rem;}
	.m1 li p{line-height: 0.5rem;line-height:0.4rem; } 
	.m1 .btn{width: 100%;height: 1rem;position: relative;} 
	.m1 .btn p{width: 0.5rem;height: 0.5rem;border-radius: 50%;background: gray;float: left;position: absolute;}
	.m1 .btn p.active{background: #3190E8;}
	.m1 .btn p.btn_1{left: 48%;bottom: 0.4rem;}
	.m1 .btn p.btn_2{left: 52%;bottom: 0.4rem;}
</style>