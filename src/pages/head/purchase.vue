<template>
<div>
    <div class="Purchase">
         <div class="Purchase-head">
            <span class="iconfont">&#xe612;</span>
            限时抢购
        </div>
        <div class="Purchase-shop" v-for="item in purchaseOne" :key="item.id">
            <img :src="item.imgUrl" alt="">
            <p>{{item.introduce}}</p>
            <span>{{item.rmb}}</span>
        </div>
    </div>
    <div class="Purchase-two">
           <div class="partition"></div>
         <div class="head-two">
            <span class="iconfont">&#xe613;</span>
            新品速递
        </div>
        <div class="Purchase-shop" v-for="item in purchaseTwo" :key="item.id">
            <img :src="item.imgUrl" alt="">
            <p>{{item.introduce}}</p>
            <span>{{item.rmb}}</span>
        </div>
    </div>
 </div>   
</template>

<script>
export default {
    name: "Purchase",
    props: {
        purchaseOne: Array,
        purchaseTwo: Array
    }
}    
</script>

<style lang="stylus" scoped>
   .Purchase-head
      height: .8rem
      text-align: center
      line-height: .8rem
   .Purchase-shop
      float: left
      text-align: center
      width: 2.4rem
      height: 2.8rem
   .Purchase-shop img 
      width: 2.0rem
      height: 1.5rem
   .Purchase-shop p 
      overflow: hidden
      width: 2.5rem
      height: .26rem
      margin-bottom: .3rem
   .Purchase-shop span 
      color: #2FB6F0 
.Purchase-two
    margin-top: 3rem
   .head-two
      height: .8rem
      text-align: center
      line-height: .8rem
.partition
    height: .4rem
    background: #f0f0f0              
</style>
