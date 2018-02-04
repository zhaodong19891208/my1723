<template>
<div class="swiperOne">
    <div class="swiper-container swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="items in list" :key="items.id">
                <img class="img" :src="items.imgUrl" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    <div class="seek">
        <span class="logo">亿视力</span>
        <div class="seekClick" @click="newClick">
            <span class="iconfont seekFake">&#xe651;</span>
            畅想无忧配镜!
        </div>
        <span class="iconfont list">&#xe650;</span>
    </div>
 </div>   
</template>

<script>
import Swiper from 'swiper'
export default {
    name: 'index-swiper',
    props: {
        list: Array
    },
    methods: {
        SwiperSetTimer () {
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        },
        newClick () {
            this.$router.push("/details")
        }
    },
    updated () {    
       this.$nextTick(this.SwiperSetTimer)      
    }
}
</script>

<style lang="stylus" scoped>
    .swiper
        overflow: hidden
        height: 0
        padding-bottom: 62%
     .swiper .img 
          width: 100%
          heihgt: 100%
     .seek
        display: flex
        align-items: center 
        position: absolute
        top: 1.04rem
        width: 100%
        background: rgba(17,17,17,0.6)
        z-index: 5
        .logo
           line-height: 1.2rem
           text-align: center
           font-size: 0.3rem
           width: 1.5rem
           height: 1.2rem
           color: #fff
        .seekClick
           border-radius: .5rem
           width: 4.8rem
           height: .8rem
           background: rgba(255,255,255,0.7)
           color: #777
           .seekFake
              text-align: center
              line-height: .8rem
              padding-left: .2rem
        .list
           flex: 1
           text-align: center
           font-size: .4rem
           line-height: .8rem
           color: #fff
</style>
