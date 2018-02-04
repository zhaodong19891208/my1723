<template>
    <div>
        <Header></Header>
        <head-swiper :list="list"></head-swiper>
    </div>
</template>

<script>
import Header from './header'
import HeadSwiper from './head-swiper'
import axios from 'axios'
export default {
    name: 'index',
    components: {
        Header,
        HeadSwiper
    },
    data () {
        return {
            list: []
        }
    },
    methods: {
        handleGetSucc (res) {
            this.list = res.data.data.swiper
            console.log(this.list)
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

<style>

</style>

