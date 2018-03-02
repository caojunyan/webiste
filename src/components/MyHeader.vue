<template>
<div class="header">
  <span class="title">武汉秒车网科技有限公司</span>
  <ul class="nav">
    <li>
      <router-link :to="{ path: '/' }">首页</router-link>
    </li>
    <li>
      <router-link :to="{ path: '/serve' }">服务</router-link>
    </li>
    <li>
      <router-link :to="{ path: '/about' }">关于</router-link>
    </li>
    <li>
      <router-link :to="{ path: '/contact' }">联系我们</router-link>
    </li>
  </ul>
  <router-view></router-view>
</div>
</template>

<script>
    export default {
        name: "my-header"
    }
</script>

<style scoped>
.header{
  width:100%;
  height: 80px;
  background: #4E4E4D;
}
  .title{
    width: 28%;
    padding-left: 20px;
    color:#fff;
    font-size: 16px;
    line-height: 80px;
    display: inline-block;
    font-weight: bold;
    letter-spacing: 3px;
  }
  .nav{
    width: 70%;
    display: inline-block;
    float: right;
    list-style: none;
    height: 100%;

  }
  .nav>li{
    float: left;
    width: 166px;
    height: 100%;
    line-height: 80px;
    text-align: center;
  }
  .nav>li>a{
    display: inline-block;
    font-size: 16px;
    color:#fff;
    text-decoration: none;
    width: 100%;
    height: 100%;
  }
  .router-link-exact-active{
    background: #3D3D3C;
  }
</style>
