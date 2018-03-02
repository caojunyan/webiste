<template>
  <div class="footer">
    <div class="container">
      <img src="../assets/logo.png" alt="" class="logo">
    </div>
  </div>
</template>

<script>
    export default {
        name: "my-footer"
    }
</script>

<style scoped>
.footer{
  width:100%;
  height: 222px;
  background: #6A6865;
}
  .container{
    width: 60%;
    margin: 0 auto;
  }
  .logo{
    width: 180px;
    height: 56px;
    line-height: 222px;
  }
</style>
