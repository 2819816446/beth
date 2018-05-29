import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index.js'
import HelloWorld from '@/components/HelloWorld'
import App from '../App.vue'
import Home from '../pages/home/Home.vue'
import SelectCity from '../pages/SelectCity/SelectCity.vue'
import MySite from '../pages/MySite/MySite.vue'


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
          path:'/mysite',
          name:'MySite',
          component:MySite
        }

      ]
    }, 
  ]



const router = new Router({
    routes
});




export default router;