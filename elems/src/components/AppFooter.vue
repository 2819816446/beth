<template>
  <div class="fd_wrap">
      <ul>
        <!-- 0 === 0 当当前li的index === changeActive值时 添加active类  
          :class="{active:changeActive == 0}"  
          :class="{active:changeActive == 1}"
          :class="{active:changeActive == 2}"
          :class="{active:changeActive == 3}"
        -->
        <li v-for="(nav,index,key) of navLists" :class="{active:changeActive === index}" @click="changeToActive(index)" >
            <i class="iconfont" v-bind:class="nav.icon"  ></i>
            <p>{{nav.text}}</p>
        </li>       

      </ul>
  </div> 
</template>

<script>
 import {mapState} from 'vuex'
import MySite from '../pages/MySite/MySite.vue'


export default {
  components: {
  },
  data () {
    return {
      isShowTitle:true,
      // isShowBack:true     //是否显示返回图标；true 
      navLists:[
          {
              "icon":"icon-shouye",
              "text":"首页"                     
          },
          {
              "icon":"icon-sousuo",
              "text":"搜索"                     
          },
          {
              "icon":"icon-shouji",
              "text":"订单"                        
          },
          {
              "icon":"icon-04",
              "text":"我的"                     
          }
      ],
      changeActive:0,
    }
  },
  computed:{
   ...mapState([
     // 映射 this.geohash 为 store.state.geohash
        'geohash'
    ]),
  },


  methods:{
    // 动态添加active 的class    click事件
    changeToActive(index){
      this.changeActive = index;
      if (index == 0) {
        var geohash = this.geohash;
        this.$router.push({name:'MySite', query: {geohash}});
      }else if (index == 1) {
        console.log(this.changeActive);
        this.$router.push({path:'/search'});


      }
    },



  }, 

  

}
</script>

<style>
    .fd_wrap{height: 3rem;border-top: 1px solid gray;width: 100%;position: fixed;bottom: 0;left: 0;z-index: 100;background: #F2F2F2;}
    .fd_wrap ul{display: flex;}
    .fd_wrap ul li{flex: 1;list-style: none;text-align: center;height: 3rem;color: #A4A4A4;}
    
    /*通过line-height 调节i p 的位置*/
    .fd_wrap li i{font-size: 1.5rem;width: 1rem;height: 1rem;line-height: 2rem;}
    .fd_wrap li p{font-size: 0.5rem;line-height: 0.5rem;}
    .fd_wrap ul li.active i,.fd_wrap ul li.active p{color: #3190E8;}
</style>
