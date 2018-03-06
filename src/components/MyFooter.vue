<template>
  <div class="footer">
    <div class="container footer-content">
      <div class="logo " >
        <img src="../../static/img/logo.png" alt="" class="img-responsive">
      </div>
      <div class="footer-nav">
        <p>地址：湖北省武汉市江汉区泛海中央商务区soho城5栋1701号 </p>
        <p>工作时间：周一至周五  09:00 - 17:30</p>
        <p>联系方式：xxxxxxx</p>
        <p class="copyRight">
          © Copyright 2018 武汉秒车网科技有限公司.All Rights Reserved.
        </p>
      </div>
      <div class="erweima">
        <img src="../../static/img/erweima.jpg" alt="" class="erweima img-responsive" >
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
.footer-content{
 /* width: 1170px;*/
  height: 100%;
  margin: 0 auto;
  display:flex;
  justify-content:center;
  align-items:center;
}
.logo{
  width: 20%;
}

  .logo>img{
    width: 237px;
    margin: 0 auto;
  }
.footer-nav{
  width: 60%;
  padding-left: 10%;
}
  .footer-nav>p{
    font-size: 1.2rem;
    color:#fff;
    line-height: 38px;
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

  }
  .erweima>img{
    width: 84px;
  }



/*手机*/
@media screen and (max-width:707px) {
  .footer{

  }
  .footer-nav{
    width: 100%;
  }
  .footer-nav>p{
    font-size: .9rem;
    letter-spacing: 0;
    line-height: 1rem;
  }
}
/*平板*/
@media screen and (min-width:708px) and (max-width:1024px){
  .logo>img{
    width: 183px;
  }
  .footer-nav > p{
    line-height: 20px;
    font-size: 1rem;
  }
  .footer-nav{
    width: 60%;
    padding-left: 20px;
  }
  .erweima{
    width: 11%;
  }
}
/*电脑*/
@media screen and (min-width:1025px) {

}
</style>
