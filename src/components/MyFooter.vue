<template>
  <div class="footer">
    <div class="container">
      <div class="logo">
        <img src="../../static/img/logo.png" alt="">
      </div>
      <div class="footer-nav">
        <ul>
          <li>联系我们</li>
          <li>资质证书</li>
          <li>客户反响</li>
          <li>质量管理</li>
          <li class="border_none">费用报价</li>
        </ul>
        <p class="copyRight">
          © Copyright 2018 武汉秒车网科技有限公司.All Rights Reserved.
        </p>
      </div>
      <div class="erweima">
        <img src="../../static/img/erweima.jpg" alt="" class="erweima">
      </div>
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
    width: 69%;
    margin: 0 auto;
    height: 222px;
    display:flex;
    display:-webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    justify-content:center;
    align-items:center;

  }
  .logo{
    float: left;
    width: 25%;

  }
  .logo>img{
    width: 180px;
    margin: 0 auto;
  }
  .footer-nav{
    display: inline-block;
    width: 55%;
    text-align: center;

  }
  .footer-nav>ul{
    list-style: none;
    display: inline-block;
  }
  .footer-nav>ul>li{
    float: left;
    font-size: 20px;
    color:#fff;
    letter-spacing: 3px;
    padding-right: 12px;
    padding-left: 9px;
    border-right: 1px solid #fff;
  }
.footer-nav>ul>li.border_none{
    border: none;
  }
.copyRight{
  font-size: 20px;
  color:#fff;
}
  .erweima{
    width: 20%;
    margin: 0 auto;

  }
  .erweima>img{
    width: 106px;
  }
</style>
