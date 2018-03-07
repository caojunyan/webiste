<template>
<div class="header ">

  <nav class="navbar navbar-default">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">武汉秒车网科技有限公司</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li :class="{ active_header: 1==isActive }" @click="onSwitch(1)"><router-link :to="{path:'/'}">首页</router-link></li>
          <li :class="{ active_header: 2==isActive }" @click="onSwitch(2)"><a  @click.prevent="custormAnchor('service')"  >服务</a></li>
          <li :class="{ active_header: 3==isActive }" @click="onSwitch(3)"><a  href="" @click.prevent="custormAnchor('about')">关于</a></li>
          <li :class="{ active_header: 4==isActive }" @click="onSwitch(4)"><a href="" @click.prevent="custormAnchor('contact')">联系我们</a ></li>
          <li :class="{ active_header: 5==isActive }" @click="onSwitch(5)"><router-link :to="{path:'/join'}">加入我们</router-link></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</div>
</template>

<script>
    export default {
      name: "my-header",
      data(){
        return{
          isActive:1,
          onScroll:''
        }
      },
      mounted: function () {

      },
      methods:{
       onSwitch(index){
         this.isActive=index;
      /*   let jump = document.querySelectorAll('.d_jump')
        // 获取需要滚动的距离
         let total = jump[index].offsetTop
         console.log(total)
         // Chrome
         document.body.scrollTop = total
         console.log(document.body.scrollTop)
         // Firefox
         document.documentElement.scrollTop = total
        // Safari
         window.pageYOffset = total*/
       },
       custormAnchor(anchorName) {
          // 找到锚点
          let anchorElement = document.getElementById(anchorName);
          // 如果对应id的锚点存在，就跳转到锚点
          if(anchorElement) { anchorElement.scrollIntoView(); }
        }
     }
    }
</script>

<style scoped>
.header{
  width:100%;
  height: 80px;
  background: #4E4E4D;
  position: fixed;
  top:0px;
  left:0px;
  z-index:200;
}
.navbar{
  height: 100%;
  background: #4E4E4D;
  border:none;
}
.navbar-header{
  line-height: 80px;
  height: 100%;
}
.navbar-toggle{
  margin-top: 23px;
  margin-right:23px;
}

.navbar-header>a{
  line-height: 80px;
  height: 100%;
  display: inline-block;
  padding: 0;
  color:#fff;
}
.navbar-header>a:hover{
  color:#fff;
}
#bs-example-navbar-collapse-1{
  background: #4E4E4D;
}
.navbar-nav>li>a:hover{
  color:#fff;
  background: #3D3D3C;
}
.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:link{
  background: #3D3D3C;
  color:#fff;
}
.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:visited{
  background: #3D3D3C;
  color:#fff;
}
.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:hover{
  background: #3D3D3C;
  color:#fff;
}
.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:active{
  background: #3D3D3C;
  color:#fff;
}

.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:visited{
  background: #3D3D3C;
  color:#fff;
}
.navbar-header>a{
  padding-left: 20px;
  display: inline-block;
}
.navbar-default .navbar-collapse{
  border: none;
}
.active_header{
  background: #3d3d3c;
}
.navbar-default .navbar-nav>li>a{
  color:#fff;
  cursor:pointer;
}
/*手机*/
@media screen and (max-width:707px) {
  .navbar-header>a{
    font-size: 1.8rem;
  }
  .navbar-default .navbar-nav > .active > a{
    font-size: 1.8rem;
  }
  .navbar-default .navbar-nav>li>a{
    font-size: 1.5rem;
  }
}
.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus{
  color:#fff;
}
/*平板*/
@media screen and (min-width:708px) and (max-width:1024px){
  .navbar-nav{
    display: inline-block;
    float: right;
    list-style: none;
    height:100%;
    line-height: 80px;
    width: 68%;
  }
  .navbar-nav>li{
    height:80px;
    line-height: 80px;
    width: 20%;
  }
  .navbar-nav>li>a {
    width: 100%;
    text-align: center;
    display: inline-block;
    height: 80px;
    line-height: 80px;
    padding: 0;
    font-size: 18px;
    color: #fff;
  }
}
  /*电脑*/
@media screen and (min-width:1025px) {
  .navbar-nav{
    display: inline-block;
    float: right;
    list-style: none;
    height:100%;
    line-height: 80px;
    width: 68%;
  }
  .navbar-nav>li{
    height:80px;
    line-height: 80px;
    width: 20%;
  }
  .navbar-nav>li>a {
    width: 100%;
    text-align: center;
    display: inline-block;
    height: 80px;
    line-height: 80px;
    padding: 0;
    font-size: 18px;
    color: #fff;
  }
  }
</style>
