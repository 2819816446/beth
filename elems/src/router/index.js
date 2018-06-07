import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index.js'
import HelloWorld from '@/components/HelloWorld'
import App from '../App.vue'
import Home from '../pages/home/Home.vue'
import SelectCity from '../pages/SelectCity/SelectCity.vue'
import MySite from '../pages/MySite/MySite.vue'
import Search from '../pages/Search/Search.vue'
import OrderList from '../pages/OrderList/OrderList.vue'
import Profile from '../pages/Profile/Profile.vue'


Vue.use(Router)


  const routes = [
    // 首页 index.html
    {
      path: '/',
      name: 'App',
      component: App,
      children:[		//二级路由
      	{
      		path:'/',
      		redirect:'/home'
      	},	
      	{
      		path:'/home',
      		name:'Home',
      		component:Home
      	},
      	{
      		path:'cities/:id',
      		name:'SelectCity',
      		component:SelectCity
      	},
        {
          path:'/search',
          name:'Search',
          component:Search
        },
        {
          path:'/mysite',
          name:'MySite',
          component:MySite
        },
        {
          path:'/order',
          name:'OrderList',
          component:OrderList
        },
        {
          path:'/profile',
          name:'Profile',
          component:Profile
        }

      ]
    }, 
  ]



const router = new Router({
    routes
});




export default router;