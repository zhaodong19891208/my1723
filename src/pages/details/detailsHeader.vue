<template>
<div>
    <div class="seek">
        <span class="iconfont return" @click="returnClick">&#xe624;</span>
        <input type="text" class="txt" placeholder="请输入搜索关键字">
        <button class="btn">搜索</button>
    </div>
    <div class="famous"> 
        <p>热门搜索</p>
        <ul class="famousDrand">
            <li>
              <router-link to="" class="Router">精工</router-link>
            </li>
            <li>
              <router-link to="" class="Router">雷朋</router-link>
            </li>
            <li>
              <router-link to="" class="Router">李维斯</router-link>
            </li>
            <li>
              <router-link to="" class="Router">施洛华</router-link>
            </li>
            <li>
              <router-link to="" class="Router">理查德</router-link>
            </li>
            <li>
              <router-link to="" class="Router">淡泊</router-link>
            </li>
            <li>
              <router-link to="" class="Router">左川腾井</router-link>
            </li>
            <li>
              <router-link to="" class="Router">罗本</router-link>
            </li>
            <li>
              <router-link to="" class="Router">点倩</router-link>
            </li>
        </ul>
    </div>
</div>    
</template>

<script>
export default {
    name: 'details-header',
    methods: {
        returnClick () {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="stylus" scoped>
.seek
    display: flex
    align-items: center 
    height: 1.3rem
    background: #F6F6F9
   .return
      padding: 0 .3rem
      line-height: 1rem
      height: 1rem
   .txt 
      width: 4.7rem
      height: .9rem
      padding-left: .3rem
   .btn 
      height: .9rem
      padding: 0 .4rem
      background: #17a6e4
      border-radius: 0 .1rem .1rem 0
      color: #fff
   .famous p 
      height: .6rem
      line-height: .6rem
      text-indent: 1.2em
      color: #999
   .famous .famousDrand
      display: flex
      flex-wrap: wrap
      justify-content: space-around
   .famous .famousDrand li
      border: 1px solid #999
      border-radius: .1rem
      text-align: center
      width: 2.0rem
      height: .6rem
      line-height: .6rem
      margin-bottom: .3rem 
   .famous .famousDrand .Router 
      color: #999
</style>