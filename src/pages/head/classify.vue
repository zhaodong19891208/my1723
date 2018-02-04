<template>
    <div class="classify">
        <div class="partition"></div>
        <div class="limit-head">
            <span class="iconfont">&#xe798;</span>
            商品特卖
        </div>
        <div>
        <mt-swipe class="swiper" :auto="0" :show-indicators="false" :continuous="false">
            <mt-swipe-item v-for="(page, index) in pageList" :key="index" >
                <div class="paging" v-for="item in page" :key="item.id" @click="handleClick()">
                   <img :src="item.imgUrl">
                </div>
            </mt-swipe-item>
        </mt-swipe>
        </div>
        <div class="partition"></div>
    </div>
</template>

<script>
export default {
    name: "Classify",
    props: {
        limit: Array
    },
    computed: {
       pageList () {
            const pages = []
            this.limit.forEach((value, index) => {
                const page = Math.floor(index / 2)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(value)
            })  
             return pages
       }
    },
    methods: {
        handleClick () {
            /*this.$router.push({name: 'details', params: { userId: 123 }})*/
        }
    }
}
</script>

<style lang="stylus" scoped>
    .partition
        height: .4rem
        background: #f0f0f0 
    .limit-head
        height: .8rem
        text-align: center
        line-height: .8rem
    .swiper
        height: 3.0rem  
    .swiper .paging
        float: left
        width: 3.6rem
        height: 2.0rem
        margin-left: .1rem 
    .swiper img 
        width: 3.6rem
        height: 2.0rem
</style>
