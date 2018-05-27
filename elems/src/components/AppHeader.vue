<template>
  <div class="hd_wrap">
    <x-header :left-options="{backText:'elem.me',showBack:isShowBack}" >
      <strong v-if="isShowTitle">{{title}}</strong>
      <a v-if="!isShowBack" slot="left"><x-icon type="ios-search" size="30" class="x-icon-search-white"></x-icon></a>
      <a slot="right"></x-icon>登入 | 注册</a>
      
    </x-header>
  </div> 
</template>

<script>
import { XHeader , Icon } from 'vux'


export default {
  components: {
    XHeader,
    Icon
  },
  data () {
    return {
      title: '',
      isShowTitle:true,
      isShowBack:true     //是否显示返回图标；true 显示，false不显示。
    }
  },

  methods:{

  },

  

}
</script>

<style>
.hd_wrap{width: 100%;height: 3rem;}
.x-icon-search-white{fill: white;margin-top: -5px;}
</style>
