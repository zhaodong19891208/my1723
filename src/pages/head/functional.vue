<template>
<div>
    <ul class="functional">
        <li v-for="items in type" :key="items.id">
            <img :src="items.imgUrl" alt="">
            {{items.type}}
        </li>
    </ul>
    <div class="partition"></div>
    <div class="advertising">
        <div class="optician">
            <img :src="advertisingOne" alt="">
        </div>
        <div class="two">
            <img :src="advertisingTwo" alt="">
        </div>
        <div class="bracelet">
            <img :src="advertisingThree" alt="">
        </div>
    </div>
    <div class="partition"></div>
    <ul class="nav">
        <li>纯钛</li>
        <li>β-钛</li>
        <li>tr90</li>
        <li>板材</li>
        <li>天然竹木</li>
        <li>钛合金</li>
        <li>时尚合金</li>
        <li>全部</li>
    </ul>
 </div>   
</template>

<script>
import axios from 'axios'
export default {
    name: 'Functional',
    data () {
        return {
            advertisingOne: null,
            advertisingTwo: null,
            advertisingThree: null
        }
    },
    props: {
        type: Array,
        advertising: Array
    },
    updated () {
         this.advertisingOne = this.advertising[0].imgUrl
         this.advertisingTwo = this.advertising[1].imgUrl
         this.advertisingThree = this.advertising[2].imgUrl
    }
}
</script>

<style lang="stylus" scoped>
    .functional 
        display: flex
        flex-wrap: wrap
        align-items: center
        overflow: hidden
        height: 0
        padding-bottom: 34%
     .functional li 
        width: 2.5rem
        height: 1.2rem
        line-height: 1.2rem
     .functional li img
        width: .6rem
        height: .6rem
        padding: 0 0 0 .3rem
     .partition
        height: .4rem
        background: #f0f0f0 
     .advertising img 
        width: 100%
        height: 100% 
     .advertising
        overflow: hidden
        height: 0
        padding-bottom: 60%
        .optician
            float: left
            border-right: 1px solid #f0f0f0 
            width: 4.46rem
            height: 5.0rem
        .two
            float: right 
            width: 3.0rem
            height: 2.5rem
            border-bottom: 1px solid #f0f0f0
        .bracelet
            float: right
            width: 3.0rem
            height: 2.5rem
      .nav
         overflow: hidden
         height: 0
         padding-bottom: 25%
         display: flex
         flex-wrap: wrap
         align-items: center
      .nav li
         border: 1px solid #f0f0f0
         border-radius: .3rem
         line-height: .6rem
         width: 1.4rem
         text-align: center
         margin: .2rem 0 0 .3rem
         height: .6rem   
</style>
