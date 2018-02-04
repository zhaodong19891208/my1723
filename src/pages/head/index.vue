<template>
    <div classs="index">
        <Header></Header>
        <head-swiper :list="list"></head-swiper>
        <Functional :type="type" :advertising="advertising"></Functional>
        <Classify :limit="limit"></Classify>
        <Purchase :purchaseOne="purchaseOne" :purchaseTwo="purchaseTwo"></Purchase>
        <Brand></Brand>
    </div>
</template>

<script>
import Header from './header'
import HeadSwiper from './head-swiper'
import Functional from './functional'
import Classify from './classify'
import Purchase from './purchase'
import Brand from './brand'
import axios from 'axios'
export default {
    name: 'index',
    components: {
        Header,
        HeadSwiper,
        Functional,
        Classify,
        Purchase,
        Brand
    },
    data () {
        return {
            list: [],
            type: [],
            advertising: [],
            limit: [],
            purchaseOne: [],
            purchaseTwo: []
        }
    },
    methods: {
        handleGetSucc (res) {
            this.list = res.data.data.swiper
            this.type = res.data.data.functional
            this.advertising = res.data.data.advertising
            this.limit = res.data.data.limit
            this.purchaseOne = res.data.data.purchaseOne
            this.purchaseTwo = res.data.data.purchaseTwo
        },
        handleGetError (error) {
            console.log(error)
        }
    },
    mounted () {
        axios.get('api/swiper.json')
             .then(this.handleGetSucc.bind(this))
             .catch(this.handleGetError.bind(this))
    }
}
</script>

<style lang="stylus" scoped>
    
</style>

