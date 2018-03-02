<template>
  <div class="home">
    <my-header></my-header>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
import MyFooter from '../components/MyFooter'
export default {
  name: '',
  data () {
    return {
      msg: ''
    }
  },
  components:{
    MyHeader,
    MyFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
