<template>
    <div>
        <div class="header">
            <div class="header-am">
                <span class="attention">关注公众号</span>
                <span class="getrmb">领取
                    <em>50元</em>代金券</span>
            </div>
            <span class="promptly" @click="handleClick()" ref="child">立即关注</span>
        </div>
        <div class="scan" v-if="show" @click="handleShow()">
            <div class="scan-am">
                <img src="/mobile/themes/tianmao2016/statics/img/ewm.png" alt="">
                <p>长按二维码关注公众微信</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            show: false
        }
    },
    methods: {
        handleClick() {
            this.show = true
            this.$refs.child.style.color = '#fff'
            this.$refs.child.style.background = '#2FB6F0'
        },
        handleShow() {
            this.show = false
            this.$refs.child.style.color = '#2FB6F0'
            this.$refs.child.style.background = '#1e2427'
        }
    }
}
</script>

<style lang="stylus" scoped>
  .header
     display: flex
     align-items: center  
     background-color: #1e2427
     .header-am
        display: flex
        flex-direction: column
        width: 73%
        text-indent: 1em
        padding: .2rem 0
        .attention
           color: #fff
           margin-bottom: .1rem
        .getrmb
           color: #ccc
        .getrmb em
           color: #fdba34
      .promptly
         height: .6rem
         text-align: center
         line-height: .6rem
         padding: 0 .2rem
         border: 1px solid #2FB6F0
         border-radius: .1rem 
         background: #1e2427
         color: #2FB6F0
  .scan
     position: fixed
     background: rgba(0,0,0,0.8)
     top: 0
     left: 0
     right: 0
     bottom: 0
     z-index: 15
     .scan-am
        margin: 0 auto
        position: fixed
        top: 20%
        left: 20%
        right: 20%
        z-index: 16
        background: #fff
        padding: 0.5rem
        box-shadow: 0px 5px 10px rgba(0,0,0,0.6)
        border-radius: 0.1rem
     .scan-am img 
        width: 100%
        height: 100%  
</style>