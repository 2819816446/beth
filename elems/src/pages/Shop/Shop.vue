<template>
	<div class="shop_wrap">
		
		<p>shop</p>
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
</style>