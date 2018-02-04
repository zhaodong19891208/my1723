<template>
    <div>
        <LoginHeader></LoginHeader>
        <Verification></Verification>  
    </div>
</template>

<script>
import LoginHeader from './LoginHeader'
import Verification from './verification'
export default {
    name: 'login',
    components: {
      LoginHeader,
      Verification
    }
}
</script>

<style>

</style>
