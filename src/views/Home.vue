<template>
  <div class="home wrapper" ref="wrapper" >
    <my-header></my-header>
    <!--banner图-->
    <div class="banner" id="banner" >
      <div class="intro_pic">
        <img src="../../static/img/banner.png" alt="" class="img-responsive">
      </div>
    </div>
    <!--四个圆-->
    <div class="skill">
      <div class="container content" >
        <transition name="bounce">
          <div v-show="aa" class="row">
            <dl class="col-md-3 col-sm-6">
              <dt>
                <img src="../../static/img/team.png" alt="">
              </dt>
              <dd>专业团队</dd>
            </dl>
            <dl class="col-md-3 col-sm-6">
              <dt>
                <img src="../../static/img/iconfont-fuwushichang.png" alt="">
              </dt>
              <dd>优质售后</dd>
            </dl>
            <dl class="col-md-3 col-sm-6">
              <dt>
                <img src="../../static/img/iconfont-yiqiyibiao(1).png" alt="">
              </dt>
              <dd>快速高效</dd>
            </dl>
            <dl class="col-md-3 col-sm-6">
              <dt>
                <img src="../../static/img/good(1).png" alt="">
              </dt>
              <dd>客户好评</dd>
            </dl>
          </div>
        </transition>
      </div>
    </div>
    <!--服务宗旨-->
  <!--  <div class="serve" id="service">
      <div class="server-content">
        <h3>服务宗旨</h3>
        <P>our service</P>
        <div class="img-container">
          <dl>
            <dt>
              <img src="../../static/img/service1.png" alt="">
            </dt>
            <dd>
              <p>达成高效合作</p>
              <p>High efficient corperation</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="../../static/img/service2.png" alt="">
            </dt>
            <dd>
              <p>提供优质产品</p>
              <p>Provide quality products</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="../../static/img/service3.png" alt="">
            </dt>
            <dd>
              <p>提升客户价值 </p>
              <p>Upgrade clients value</p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    &lt;!&ndash;关于我们&ndash;&gt;
    <div class="about" id="about">
      <h3>关于我们</h3>
      <h4>about us</h4>
      <p>
        武汉秒车网科技有限公司是一家从事企业外包的新型互联网公司，现坐落于湖北武汉，目前主要服务于全国市场，帮助中小企业实现业务拓展和价值升级。其业务范围主要包括：企业门户网站的搭建，PC端，app端以及微信端客户平台的搭建以及维护，特别是为众多的小微企业打造安全稳定的互联网业务平台。
      </p>

    </div>
    &lt;!&ndash;banner图片&ndash;&gt;
    <div class="banner_pic">
      <img src="../../static/img/banner_pic.png" alt="">
    </div>
    &lt;!&ndash;联系我们&ndash;&gt;
    <transition name="bounce" >
      <div class="contact" id="contact" v-show="aa">
      <h3>联系我们</h3>
      <h4>contact us</h4>
      <form action="">
        <div class="name">
          <input type="text" placeholder="客户姓名" v-model="name" >
        </div>
        <div class="number">
          <input type="text" placeholder="联系方式" v-model="number" >
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
    </transition>-->
    <!--<my-footer></my-footer>-->
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import MyHeader from '../components/MyHeader'
  import MyFooter from '../components/MyFooter'
  export default {
    name: '',
    data () {
      return {
        name:'',
        number:'',
        scroll2: '',
        aa: true,
        bb:false
      }
    },
  /*  mounted () {
      window.addEventListener('scroll', this.menu)
      this.$nextTick(() => {
      this.scroll=new BScroll(this.$refs.wrapper,{})
      })
    },
    created:function() {
// 主页添加键盘事件,注意,不能直接在焦点事件上添加回车
      var lett = this;
      document.onkeydown = function (e) {
        var key = window.event.keyCode;
        if (key == 116) {
          var url=window.location.host ;
         /!* lett.$router.replace({path: url});*!/
       /!*   window.location.href = url;*!/
        }
      }
    },*/
    components:{
      MyHeader,
      MyFooter
    },
   /* methods:{
      send(){
        var name=this.name;
        var number=this.number;
        this.testNumber();
      },
      // 手机号正则
      testNumber(){
        var phone=/^[1][3,4,5,7,8][0-9]{9}$/;
        var email=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        if (!phone.test(this.number)&&!email.test(this.number)) {
          alert('请输入正确手机号或者邮箱')
          return false;
        }else{
          this.testName();
        }
      },
      testName(){
        if (this.name=='') {
          alert('请输入客户名')
          return false;
        }else{

        }
      },
      menu () {
        this.scroll2 = document.body.scrollTop;
        if (this.scroll2 >= 300) {
          this.aa = true
        } else {
          this.aa = false
        }
      },
      // 提交
      submit(){
        this.$axios.get("/",).then(res=>{
          console.log(res);
        });
      }
    },*/
    watch:{
      'route':function(to,from){
        console.log(to)
        console.log(from)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .banner{
    margin-top: 80px;
    width: 100%;
    /*height: 818px;*/
    background: #fff;
  }

  .skill{
    width: 100%;
    height: 278px;
    background: #FD9E2D;
  }
  .content{
    height: 100%;
  }
  .content>div{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
  .content dl{
    margin: 0 auto;
  }
  .content dl>dt{
  /*  width: 120px;
    height: 145px;*/
  }
  .content dl>dt>img{
    /*width: 120px;*/
  }
  .content dl>dd{
    text-align: center;
    color:#fff;
    font-size: 1.3rem;
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



  /*手机*/
  @media screen and (max-width:707px) {
    .container{
      width: 100%;
    }
    .content dl{
      width: 50%;

    }
  }
  /*平板*/
  @media screen and (min-width:708px) and (max-width:1024px){

  }
  /*电脑*/
  @media screen and (min-width:1025px) {

  }
</style>
