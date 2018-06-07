<template>
	<div class="profile_wrap">
		<app-header :title="headTitle"></app-header>
		<app-footer></app-footer>
		<div class="box">
			<div class="hd">
				<img src="../../assets/imgage/advatar.png" alt="">
				<div class="msg">
					<h3>登入/注册</h3>
					<p class="phone"><i class="iconfont icon-shouji"></i><span>暂无绑定手机号码</span></p>

					<p class="right iconfont icon-xiangyou"></p>
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
		name:'Profile',
		data(){
			return{
				headTitle:"",
				keyword:"",
				city_id:"",
				restRanList:[]
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


			// http://cangdu.org:8001/v4/restaurants
			/*
			geohash 
			keyword 
			 */
			getTitle(){
				this.headTitle = "我的";

			},


		},
		mounted(){
			


		},
		beforeCreate(){


		},
		created(){
			this.getTitle();

		},

		watch:{

		},


	};
	
</script>
	

<style>
	.profile_wrap{width: 100%;position: relative;}
	.box{margin-top: 3rem;display:-webkit-box;}
	.box .hd{height: 6rem;width:100%;background: #3190E8;display:-webkit-flex;display:flex; display:-moz-box;}
	.box .hd img{width: 4rem;height: 4rem;border-radius: 50%;padding: 1rem;}
	.box .hd .msg{-webkit-box-flex: 1;-webkit-flex: 1;flex: 1;padding: 1.5rem 0 0.5rem 0;color:white;position: relative;}
	.box .hd p.phone i{font-size: 1rem;}
	.box .hd .right{position: absolute;right: 0.7rem;top:30%;font-size: 1.5rem;}
</style>