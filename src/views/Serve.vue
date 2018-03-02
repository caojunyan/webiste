<template>
  <div class="serve">
    <my-header></my-header>
    服务
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from '../components/MyHeader'
  import MyFooter from '../components/MyFooter'
    export default {
        name: "service",
        components:{
          MyHeader,
          MyFooter
        }
    }
</script>

<style scoped>

</style>
