<template>
    <div class="loginHeader">
        <span class="iconfont retrunClick" @click="retrunClick">&#xe624;</span>
        <p class="login">登录</p>
        <span class="iconfont returnHead" @click="retrunHead">&#xe699;</span>
    </div>
</template>

<script>
export default {
  name: 'login-header',
  methods: {
      retrunClick () {
          this.$router.go(-1)
      },
      retrunHead () {
          this.$router.push('/')
      }
  }
}
</script>

<style lang="stylus" scoped>
    .loginHeader
       display: flex 
       align-items: center
       height: 1.3rem
       font-size: .4rem
       background: #f7f7f7
       border-bottom: 1px solid #e3e3e3
       color: #333
       .retrunClick
          width: 1rem
          text-align: center 
          font-size: .5rem
       .login
          width: 5.6rem
          text-align: center
       .returnHead
          font-size: .5rem   
</style>
