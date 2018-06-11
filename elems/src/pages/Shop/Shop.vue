<template>
	<div class="shop_wrap">
		<div class="shop_hd">
			<div class="shop_hd_1">
				<img class="avatar_bg" src="../../assets/imgage/m2/m2_1.jpeg"   alt="">
				<img class="avatar" src="../../assets/imgage/m2/m2_1.jpeg"  alt="">
				<div class="msg">
					<h2 class="hd_title">店铺名称</h2>
					<p class="descript_text">商家配送／分钟送达／配送费¥5</p>
					<p class="p_info">公告 </p>

					<i class="iconfont icon-xiangyou"></i>
				</div>
			</div>

			<p class="f_cut">
				<span class="span_1">减</span>
				<span class="span_2">满30减5，满60减8（APP专享）</span>
				<span class="span_3">一个活动</span>
				<i class="iconfont icon-xiangyou"></i>
			</p>

			<i class="back iconfont icon-xiangzuo"></i>
		</div>

		<div class="tabs">
			<ul>
				<li class="active">商品</li>
				<li>评价</li>
			</ul>
		</div>

		<div class="m3">
			<!-- <div class="m3_left"></div> -->
			<!-- <div class="m3_right"></div> -->
		</div>
		
	</div>
</template>

<script>
// 组件里都是用 this.$store 访问数据
	import axios from 'axios'
	import AppHeader from '../../components/AppHeader.vue'
	import AppFooter from '../../components/AppFooter.vue'
	import { Toast} from 'vux'
	
	export default{
		name:'Shop',
		data(){
			return{
				headTitle:"",
			};
		},
		components:{
			Toast,
			"app-header":AppHeader,
			"app-footer":AppFooter
		},
		computed:{
	

		},
		methods:{


		},
		mounted(){
			


		},
		beforeCreate(){


		},
		created(){

		},

		watch:{

		},


	};
	
</script>
	

<style>
	body{background: #F5F5F5;height: 100%;}
	.shop_wrap{width: 100%;height: 100%;display:-webkit-box;display:-webkit-flex;display:flex; display:-moz-box;flex-direction:column;}
	/*height: 8rem;*/
	.shop_hd{width: 100%;border-bottom: 1px solid red;position: relative;overflow: hidden;}
	.shop_hd .back{position: absolute;font-size: 1.5rem;top: 0.2rem;left: 0;color: white;z-index: 50;}
	.shop_hd_1{height: 6rem;padding:0.5rem;box-sizing: border-box;display:-webkit-box;display:-webkit-flex;display:flex; display:-moz-box;}
	.shop_hd_1 img.avatar_bg{position: absolute;top: 0;left: 0;width: 100%;-webkit-filter: blur(10px);filter: blur(10px);}
	.shop_hd_1 img.avatar{width: 5rem;height: 5rem;border-radius: 0.5rem;z-index: 10;}
	.shop_hd_1 .msg{-webkit-box-flex: 1;-webkit-flex: 1;flex: 1;box-sizing: border-box;height: 5rem;position: relative;margin-left: 0.5rem;color: white;}
	.shop_hd .msg h2{font-size: 1.3rem;line-height: 2rem;}
	.shop_hd .msg .p_info{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width: 100%;}
	.shop_hd_1 .msg i{position: absolute;top: 40%;right: 0;font-size: 1.2rem;}
	.shop_hd .f_cut{width: 100%;box-sizing: border-box;padding: 0 0.5rem;position: relative;color: white;}
	.shop_hd .f_cut .span_1{background:red;color: white;text-align: center;border-radius: 0.1rem;font-size: 0.8rem;}
	.shop_hd .f_cut .span_2{padding-left: 0.2rem;font-size: 0.8rem;}
	.shop_hd .f_cut .span_3{position: absolute;top: 0.2rem;right:2rem;font-size: 0.8rem;}
	.f_cut i{position: absolute;right: 0.5rem;top: 0.2rem;}

	/*tabs*/
	/*border-bottom: 1px solid gray;*/
	.shop_wrap .tabs{height: 3rem;width: 100%;background: white;margin-bottom: 0.2rem;}
	.tabs ul{display:-webkit-box;display:-webkit-flex;display:flex; display:-moz-box;}
	.tabs ul li{-webkit-box-flex: 1;-webkit-flex: 1;flex: 1;list-style: none;height: 2.8rem;line-height: 3rem;text-align: center;}
	.tabs ul li.active{border-bottom: 2px solid #3190E8;color: #3190E8;}
	/*content*/
	/*.shop_wrap .m3{display:-webkit-box;display:-webkit-flex;display:flex; display:-moz-box;}*/
	.shop_wrap .m3{flex: auto;min-height: 100vh;}
	.shop_wrap .m3 .m3_left{width: 4rem;height: 20rem;}
	.shop_wrap .m3 .m3_right{-webkit-box-flex: 1;-webkit-flex: 1;flex: 1;background: white;}
</style>