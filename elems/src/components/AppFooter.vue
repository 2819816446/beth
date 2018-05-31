<template>
  <div class="fd_wrap">
      <ul>
        <li class="active">
            <i class="iconfont icon-shouye"></i>
            <p>首页</p>
        </li>
        
        <li class="">
            <i class="iconfont icon-sousuo"></i>
            <p>搜索</p>
        </li>
        <li class="">
            <i class="iconfont icon-shouji"></i>
            <p>订单</p>
        </li>
        <li class="">
            <i class="iconfont icon-04"></i>
            <p>我的</p>
        </li>                
      </ul>
  </div> 
</template>

<script>


export default {
  components: {
  },
  data () {
    return {
      isShowTitle:true,
      // isShowBack:true     //是否显示返回图标；true 显示，false不显示。
    }
  },


  methods:{

  },

  

}
</script>

<style>
    .fd_wrap{height: 3rem;border-top: 1px solid gray;width: 100%;position: fixed;bottom: 0;left: 0;}
    .fd_wrap ul{display: flex;}
    .fd_wrap ul li{flex: 1;list-style: none;text-align: center;height: 3rem;color: #A4A4A4;}
    
    /*通过line-height 调节i p 的位置*/
    .fd_wrap li i{font-size: 1.5rem;width: 1rem;height: 1rem;line-height: 2rem;}
    .fd_wrap li p{font-size: 0.5rem;line-height: 0.5rem;}
    .fd_wrap ul li.active i,.fd_wrap ul li.active p{color: #3190E8;}
</style>
