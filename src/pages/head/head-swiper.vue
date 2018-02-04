<template>
    <div class="swiper-container swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="items in list" :key="items.id">
                <img class="img" :src="items.imgUrl" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-pagination"></div>
        <div class="swiper-pagination"></div>
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
        }
    },
    mounted () {    
       this.$nextTick(this.SwiperSetTimer)      
    }
}
</script>

<style lang="stylus" scoped>
    .swiper
        overflow: hidden
        height: 0
        padding-bottom: 64%
       .img 
          width: 100%
          heihgt: 100%   
</style>
