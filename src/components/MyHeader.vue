<template>
<div class="header">
  <div>
    <span class="title">武汉秒车网科技有限公司</span>
    <ul class="nav" >
      <li>
        <a href="#" :class="{ active: 1==isActive }" @click="onSwitch(1)">首页</a>
      </li>
      <li>
        <a href="#service" :class="{ active: 2==isActive }" @click="onSwitch(2)">服务</a>
      </li>
      <li>
        <a href="#about" :class="{ active: 3==isActive }" @click="onSwitch(3)">关于</a>
      </li>
      <li>
        <a href="#contact" :class="{ active: 4==isActive }" @click="onSwitch(4)">联系我们</a>
      </li>
    </ul>
  </div>

</div>
</template>

<script>
    export default {
      name: "my-header",
      data(){
        return{
          isActive:1
        }
      },
     methods:{
       onSwitch(index){
         this.isActive=index;
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
.header>div{
  width: 69%;
  margin: 0 auto;
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
    width: 68%;
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
  a.active{
    background: #3D3D3C;
  }
  a.hover{
    background: #3D3D3C;
  }

</style>
