<template>
  <div class="fd_wrap">
      <ul>
        <li>
            <i class="iconfont icon-shouye"></i>
            <p>aaa</p>
        </li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
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
     /*@import url('../../static/iconfont.css')*/
    .fd_wrap{height: 3rem;border-top: 1px solid gray;width: 100%;position: fixed;bottom: 0;left: 0;}
    .fd_wrap ul{display: flex;}
    .fd_wrap ul li{flex: 1;list-style: none;text-align: center;height: 3rem;line-height: 3rem;color: #A4A4A4;}
    .fd_wrap li i{color: red;font-size: 2rem;width: 1rem;height: 1rem;}
</style>
