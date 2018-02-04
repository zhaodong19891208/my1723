<template>
    <div class="brand">
      <router-link to="/">
          <img src="http://www.eachsee.com/mobile/themes/tianmao2016/statics/img/icon/home-a.png" alt="">
          <p class="brand-head">首页</p>
      </router-link>
       <router-link to="/classify">
          <img src="http://www.eachsee.com/mobile/themes/tianmao2016/statics/img/icon/cate.png" alt="">
          <p>分类</p>
      </router-link>
       <router-link to="/">
          <img src="http://www.eachsee.com/mobile/themes/tianmao2016/statics/img/icon/menu_shidai.png" alt="">
          <p>加载</p>
      </router-link>
       <router-link to="/">
          <img src="http://www.eachsee.com/mobile/themes/tianmao2016/statics/img/icon/menu_news.png" alt="">
          <p>指南</p>
      </router-link>
       <router-link to="/login">
          <img src="http://www.eachsee.com/mobile/themes/tianmao2016/statics/img/icon/menu_wo.png" alt="">
          <p>用户</p>
      </router-link>
      <div class="iconfont up" @click="Scroll">&#xe665;</div>
    </div>
</template>

<script>
export default {
    name: "Brand",
    methods: {
        Scroll () {
          document.body.scrollTop = 0
          document.documentElement.scrollTop = 0
        }
    },
}
</script>

<style lang="stylus" scoped>
  .brand
     position: fixed
     display: flex
     justify-content: space-around
     align-items: center
     bottom: 0
     width: 100%
     height: 1.5rem
     background: #fff
     z-index: 10
  .brand img 
     width: .5rem
     height: .5rem
     margin-bottom: .1rem
  .brand p
     color: #333
  .brand .brand-head 
     color: #2FB6F0
  .brand .up
     position: fixed
     bottom: 1.8rem
     right: .5rem
     border: 1px solid #333
     width: .8rem
     height: .8rem
     text-align: center 
     line-height: .8rem
     border-radius: 50%
     z-index: 20
</style>
 