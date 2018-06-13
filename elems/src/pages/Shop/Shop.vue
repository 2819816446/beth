<template>
	<div class="shop_wrap">
		<div class="shop_hd">
			<div class="shop_hd_1">
				<img src="../../assets/imgage/m2/m2_1.jpeg" height="681" width="1024"  alt="">
				<div class="msg">
					<h2 class="hd_title">店铺名称</h2>
					<p class="descript_text">商家配送／分钟送达／配送费¥5</p>
					<p class="p_info">公告 </p>
				</div>
			</div>
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
	.shop_wrap{width: 100%;position: relative;}
	.shop_hd{width: 100%;height: 8rem;border-bottom: 1px solid red;}
	.shop_hd_1{height: 6rem;padding:0.5rem;box-sizing: border-box;display:-webkit-box;display:-webkit-flex;display:flex; display:-moz-box;}
	.shop_hd_1 img{width: 5rem;height: 5rem;border-radius: 0.5rem;}
	.shop_hd_1 .msg{-webkit-box-flex: 1;-webkit-flex: 1;flex: 1;box-sizing: border-box;height: 5rem;position: relative;margin-left: 0.5rem;}
	.msg h2{font-size: 1.3rem;line-height: 2rem;}
	.msg .p_info{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width: 17rem;}
</style>