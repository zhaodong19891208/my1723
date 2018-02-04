<template>
    <div class="verification">
        <input type="text" class="phone" placeholder="手机号/用户名/邮箱">
        <input type="password" class="word" placeholder="请输入密码">
        <p class="keepCookie">
          <input type="checkbox" class="judge">记住本次登录
        </p>
        <button class="btn" @click="getClick">立即登录</button>
        <div class="register">
            <span @click="goRegister">免费注册</span>
            <em>|</em>
            <span>忘记密码</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "verification",
    methods: {
        goRegister () {
            this.$router.push('/register')
        },
        getClick () {
            axios.get()
                 .then(this.handleGetSucc.bind(this))
                 .catch(this.handleGetError.bind(this))
        },
        handleGetSucc (res) {
            console.log(res)
        },
        handleGetError (error) {
            console.log(error)
        }
    }
}
</script>

<style lang="stylus" scoped>
 .verification
    text-indent: 2em
    .phone
       width: 6.5rem
       height: 1.2rem
       font-size: .34rem
       border-bottom: 1px solid #eee 
    .word
       width: 6.5rem
       height: 1.2rem
       margin-left: .5rem
       font-size: .34rem
       border-bottom: 1px solid #eee
    .keepCookie
       height: 1.2rem
       line-height: 1.2rem
       font-size: .3rem
       color: #666
       .judge
          width: .4rem
          height: .4rem
          margin-right: .1rem
     .btn
        border-radius: .1rem
        width: 6.5rem
        height: 1rem
        font-size: .3rem
        margin-left: .6rem
        background: #2FB6F0
        color: #fff
     .register
        height: 1rem
        width: 6.5rem
        margin-left: .3rem
        text-align: center
        line-height: 1rem     
</style>
