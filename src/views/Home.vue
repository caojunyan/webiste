<template>
  <div class="home">
    <my-header></my-header>
    <!--banner图-->
    <div class="banner">
      <div class="intro_info">
        <h1 class="title">提升客户价值，增强企业竞争力</h1>
        <p>您的企业发展好帮手</p>
      </div>
      <div class="intro_pic">
        <img src="../assets/banner.png" alt="">
      </div>
    </div>
    <!--四个圆-->
    <div class="skill">
      <div class="content" >
        <transition name="bounce">
          <div v-show="aa">
            <dl>
              <dt>
                <img src="../assets/team.png" alt="">
              </dt>
              <dd>专业团队</dd>
            </dl>
            <dl>
              <dt>
                <img src="../assets/iconfont-fuwushichang.png" alt="">
              </dt>
              <dd>优质售后</dd>
            </dl>
            <dl>
              <dt>
                <img src="../assets/iconfont-yiqiyibiao(1).png" alt="">
              </dt>
              <dd>快速高效</dd>
            </dl>
            <dl>
              <dt>
                <img src="../assets/good(1).png" alt="">
              </dt>
              <dd>客户好评</dd>
            </dl>
          </div>
        </transition>
      </div>
    </div>
    <!--服务宗旨-->
    <div class="serve" id="service">
      <div class="server-content">
        <h3>服务宗旨</h3>
        <P>our service</P>
        <div class="img-container">
          <dl>
            <dt>
              <img src="../assets/service1.png" alt="">
            </dt>
            <dd>
              <p>达成高校合作</p>
              <p>High efficient corperation</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="../assets/service2.png" alt="">
            </dt>
            <dd>
              <p>提供优质产品</p>
              <p>Provide quality products</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="../assets/service3.png" alt="">
            </dt>
            <dd>
              <p>提升客户价值 </p>
              <p>Upgrade clients value</p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <!--关于我们-->
    <div class="about" id="about">
      <h3>关于我们</h3>
      <h4>about us</h4>
      <p>
        武汉海创科技有限公司是一家从事企业外包的新型互联网公司，现坐落于湖北武汉，目前主要服务于全国市场，帮助中小企业实现业务拓展和价值升级。其业务范围主要包括：企业门户网站的搭建，PC端，app端以及微信端客户平台的搭建以及维护，特别是为众多的小微企业打造安全稳定的互联网业务平台。
      </p>

    </div>
    <!--banner图片-->
    <div class="banner_pic">
      <img src="../assets/banner_pic.png" alt="">
    </div>
    <!--联系我们-->
    <transition name="bounce">
      <div class="contact" id="contact" v-show="aa">
      <h3>联系我们</h3>
      <h4>contact us</h4>
      <form action="">
        <div class="name">
          <input type="text" placeholder="客户姓名" v-model="name">
        </div>
        <div class="number">
          <input type="text" placeholder="联系方式" v-model="number">
        </div>
        <div class="send" @click="send">
          <input type="button" value="发送">
        </div>
      </form>
      <div class="address">
        <p>地址：湖北省武汉市江汉区泛海中央商务区soho城5栋1701号  </p>
        <p>工作时间：周一至周五  09:00 - 17:30</p>
        <p>联系方式：xxxxxxxx</p>
      </div>
    </div>
    </transition>
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
        name:'',
        number:'',
        scroll: '',
        aa: false,
        scroll1:'',
        bb:false
      }
    },
    mounted () {
      window.addEventListener('scroll', this.menu)
      window.addEventListener('scroll', this.form)
    },
    components:{
      MyHeader,
      MyFooter
    },
    methods:{
      send(){
        var name=this.name;
        var number=this.number;
        console.log(name,number)
      },
      menu () {
        this.scroll = document.body.scrollTop;
        if (this.scroll >= 300) {
          this.aa = true
        } else {
          this.aa = false
        }
      },
      form () {
        this.scroll = document.body.scrollTop;
        if (this.scroll >= 300) {
          this.bb = true
        } else {
          this.bb = false
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .banner{
    margin-top: 80px;
    width: 100%;
    height: 818px;
    background: #fff;
  }
  .intro_info{
    float: left;
    width: 53%;
    text-align: center;
    position: relative;
    top:342px;
    left:190px;

  }
  .intro_pic{
    float: right;
  }
  .intro_info>h1{
    font-size: 50px;
    color:#999999;
    font-weight: 400;
    letter-spacing: 5px;
    line-height: 145px;
  }
  .intro_info>p{
    font-size: 27px;
    color: #999999;
    letter-spacing: 7px;
  }
  .skill{
    width: 100%;
    height: 278px;
    background: #FD9E2D;
  }
  .content{
    width: 51%;
    margin: 0 auto;
    height: 100%;

  }
  .content>div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
  .content dl{
    margin: 0 auto;
  }
  .content dl>dt{
    width: 120px;
    height: 145px;
  }
  .content dl>dt>img{
    width: 120px;
  }
  .content dl>dd{
    text-align: center;
    color:#fff;
    font-size: 20px;
    font-weight: 600;
  }
  .serve{
    width: 100%;
    height: 740px;
    background: #F1F1F1;
  }
  .server-content{
    width: 69%;
    margin: 0 auto;
    height: 630px;
    padding-top: 100px;
  }
  .server-content>h3{
    text-align: center;
    color:#9F9F9F;
    font-size: 28px;
    font-weight: 400;
    line-height: 46px;
  }
  .server-content>p{
    font-size: 22px;
    color:#9f9f9f;
    text-align: center;
    line-height: 40px;
  }
  .img-container{
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .img-container>dl{
    width: 425px;
    text-align: center;
    color:#666666;
  }
  .img-container>dl>dt{
    width: 100%;
    height: 320px;
    overflow: hidden;
  }
  .img-container img{
    cursor: pointer;
    transition: all 0.6s;
  }
  .img-container img:hover{
    transform: scale(1.4);
  }
  .img-container>dl dd{
    margin-top: 40px;
    font-size: 20px;
  }
  .img-container p{
    font-size: 20px;
    color:#666666;
  }
  .about{
    width: 51%;
    height: 390px;
    padding-left: 24.5%;
    padding-right: 24.5%;
    padding-top: 80px;
  }
  .about>h3{
    text-align: center;
    color: #9F9F9F;
    font-size: 28px;
    font-weight: 400;
    line-height: 46px;
  }
  .about>h4{
    font-size: 22px;
    color: #9f9f9f;
    text-align: center;
    line-height: 40px;
  }
  .about>p{
    font-size: 18px;
    color:#999999;
    letter-spacing: 3px;
    line-height: 50px;
    margin-top: 15px;
    text-indent:44px
  }
  .banner_pic{
    width: 100%;
  }
  .banner_pic>img{
    width: 100%;
  }
  .contact{
    width: 542px;
    margin: 0 auto;
    height: 545px;
    padding-top: 105px;
  }
  .contact>h3{
    text-align: center;
    color: #9F9F9F;
    font-size: 28px;
    font-weight: 400;
    line-height: 46px;
  }
  .contact>h4{
    font-size: 22px;
    color: #9f9f9f;
    text-align: center;
    line-height: 40px;
  }
  .contact form div{
    width: 100%;
    height: 60px;
    margin-top: 20px;
  }
  .name>input,.number>input{
    width: 100%;
    height: 100%;
    outline: none;
    border: 1px solid #B4B4B1;
    text-indent: 20px;
    font-size: 18px;
    color:#dadada;
  }
  ::-webkit-input-placeholder { /* WebKit browsers */
    font-size:18px;
    color:#DADADA;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    font-size:18px;
    color:#DADADA;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    font-size:18px;
    color:#DADADA;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
    font-size:18px;
    color:#DADADA;
  }
  .send>input{
    width: 100%;
    height: 60px;
    color:#fff;
    background: #FD9E2D;
    font-size: 20px;
    text-align: center;
    line-height: 60px;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .address{
    margin-top: 50px;
    text-align: center;
    color:#999999;
    font-size: 18px;
  }
  .address>p{
    line-height: 30px;
  }
  /*动画事件*/
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-out .5s;
  }
  @keyframes bounce-in {
    0% {
      transform: translateY(-85px);
    }
    50% {
      transform: translateY(-45px);
    }
    100% {
      transform: translateY(0);
    }
  }

</style>
