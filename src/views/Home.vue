<template>
  <div class="home wrapper" ref="wrapper" >
    <my-header @jump="jump" ></my-header>
    <!--banner图-->
    <div class="banner d_jump" id="banner" ref="header">
      <div class="intro_pic">
        <img src="../../static/img/banner.png" alt="" class="img-responsive">
      </div>
    </div>
    <!--四个圆-->
    <div class="skill">
      <div class="container content" >

          <div  class="row" >
            <dl class="col-md-3 col-sm-6">
              <dt>
                <img src="../../static/img/team.png" alt="" class="img-responsive">
              </dt>
              <dd>专业团队</dd>
            </dl>
            <dl class="col-md-3 col-sm-6">
              <dt>
                <img src="../../static/img/iconfont-fuwushichang.png" alt="" class="img-responsive">
              </dt>
              <dd>优质售后</dd>
            </dl>
            <dl class="col-md-3 col-sm-6">
              <dt>
                <img src="../../static/img/iconfont-yiqiyibiao(1).png" alt="" class="img-responsive">
              </dt>
              <dd>快速高效</dd>
            </dl>
            <dl class="col-md-3 col-sm-6">
              <dt>
                <img src="../../static/img/good(1).png" alt="" class="img-responsive">
              </dt>
              <dd>客户好评</dd>
            </dl>
          </div>

      </div>
    </div>
    <!--服务宗旨-->
    <div class="serve d_jump" id="service" ref="service">
      <div class="server-content container">
        <h3>服务宗旨</h3>
        <P>our service</P>
        <div class="img-container row">
          <dl class="col-sm-12 col-md-4">
            <dt>
              <img src="../../static/img/service1.png" alt="" class="img-responsive">
            </dt>
            <dd>
              <p>达成高效合作</p>
              <p>High efficient corperation</p>
            </dd>
          </dl>
          <dl class="col-sm-12 col-md-4">
            <dt>
              <img src="../../static/img/service2.png" alt="" class="img-responsive">
            </dt>
            <dd>
              <p>提供优质产品</p>
              <p>Provide quality products</p>
            </dd>
          </dl>
          <dl class="col-sm-12 col-md-4">
            <dt>
              <img src="../../static/img/service3.png" alt="" class="img-responsive">
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
    <div class="about container d_jump" id="about" ref="about">
      <h3>关于我们</h3>
      <h4>about us</h4>
      <p>
        武汉秒车网科技有限公司是一家从事企业外包的新型互联网公司，现坐落于湖北武汉，目前主要服务于全国市场，帮助中小企业实现业务拓展和价值升级。其业务范围主要包括：企业门户网站的搭建，PC端，app端以及微信端客户平台的搭建以及维护，特别是为众多的小微企业打造安全稳定的互联网业务平台。
      </p>

    </div>
    <!--banner图片-->
    <div class="banner_pic ">
      <img src="../../static/img/banner_pic.png" alt="" class="img-responsive">
    </div>
    <!--联系我们-->
    <div class="contact container d_jump" id="contact" ref="contact">
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
     <!-- <div class="address hidden-md hidden-lg">
        <p>地址：湖北省武汉市江汉区泛海中央商务区soho城5栋1701号  </p>
        <p>工作时间：周一至周五  09:00 - 17:30</p>
        <p>联系方式：xxxxxxxx</p>
      </div>-->
    </div>
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
        number:''
      }
    },
    mounted () {
      setTimeout(()=>{
        /*this.jump('header')*/
      },20)
    },
    components:{
      MyHeader,
      MyFooter
    },
    methods:{
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
      // 提交
      submit(){
        this.$axios.get("/",).then(res=>{
          console.log(res);
        });
      },
      jump (id) {
        //console.log(this.$route.hash)
        // 用 class="d_jump" 添加锚点
        let jump = document.querySelectorAll('.d_jump')
        let total=0
        if(id==="service"){
          total= this.$refs.service.offsetTop
        }
        if(id==="about"){
          total= this.$refs.about.offsetTop
        }
        if(id==="contact"){
          total= this.$refs.contact.offsetTop
        }
        if(id==="header"){
          console.log("header")
          total= this.$refs.header.offsetTop
        }
        let distance = document.documentElement.scrollTop || document.body.scrollTop
        // 平滑滚动，时长500ms，每10ms一跳，共50跳
        let step = total / 50
        if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total + 100
          step = newTotal / 50
          smoothUp()
        }
        function smoothDown () {
          if (distance < total) {
            distance += step
            // Firefox
            document.documentElement.scrollTop = distance
            // Chrome
            document.body.scrollTop = distance
            setTimeout(smoothDown, 10)
          } else {
            document.documentElement.scrollTop = total
            document.body.scrollTop = total
            window.pageYOffset = total
          }
        }
        function smoothUp () {
          if (distance > total) {
            distance -= step
            // Firefox
            document.documentElement.scrollTop = distance
            // Chrome
            document.body.scrollTop = distance
            setTimeout(smoothUp, 10)
          } else {
            document.documentElement.scrollTop = total
            document.body.scrollTop = total
            window.pageYOffset = total
          }
        }
      },
    },
    mounted(){
      //console.log(this.$route);
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
    padding-top: 5px;
  }
  .content>div{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
  .content dl>dt>img{
    margin: 0 auto;
  }
  .content dl>dd{
    margin-top: 10px;
    text-align: center;
    color:#fff;
    font-size: 1.3rem;
    font-weight: 600;
  }
  .serve{
    width: 100%;
    background: #F1F1F1;
  }
  .server-content{
    width: 69%;
    margin: 0 auto;
 /*   height: 630px;*/
    padding-top: 66px;
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
    flex-wrap: wrap;
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
    height: 400px;
    padding-top: 41px;
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
    color:#9F9F9F;
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
    width: 548px;
    margin: 0 auto;
    height: 545px;
    padding-top: 63px;
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
  .address>p{
    line-height: 30px;
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
      margin-top: 10px;
      margin-bottom: 0;
    }
    .content{
      height: 100%;
      padding-top: 0px;
    }
    .content>div{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      margin-left: 0px;
    }
    .content dl>dt>img{
      margin: 0 auto;
      width: 80px;
    }
    .content dl>dd{
      margin-top: 10px;
      text-align: center;
      color:#fff;
      font-size: .9rem;
      font-weight: 400;
    }
    .server-content{
      padding-top:10px;
      padding-left: 0px;
      padding-right: 0px;
      height: 100%;
    }
    .server-content>h3{
      font-size: 1.5rem;
      margin-top: 0;
      margin-bottom: 0;
    }
    .server-content>p{
      font-size: 1.2rem;
      line-height: 6px;
    }
    .img-container{
      margin-top: 20px;
      width: 100%;
      margin-left: 0px;
    }
    .img-container>dl{
      padding: 0px;
      background:#F1F1F1 ;
      height: auto;
    }
    .img-container>dl>dt{
      height: auto;
    }
    .img-container>dl dd{
      margin-top: 10px;
    }
    .img-container p{
      font-size: 1.5rem;
      margin: 0;
      color:#9F9F9F;
      line-height: 30px;
    }
    .about{
      height: auto;
      padding-top: 40px;
      padding-bottom: 40px;
    }
    .about>h3{
      text-align: center;
      color: #9F9F9F;
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.5rem;
    }
    .about>h4{
      font-size: 1.2rem;
      color: #9f9f9f;
      text-align: center;
      line-height: 1.5rem;
    }
    .about>p{
      font-size: 1.3rem;
      color:#9F9F9F;
      letter-spacing:0px;
      line-height: 2rem;
      margin-top: 15px;
      text-indent:2rem
    }
    .contact{
      padding-top: 8px;
      height: 355px;
    }
    .contact>h3{
      font-size: 1.5rem;
    }
    .contact>h4{
      font-size: 1.5rem;
      line-height: 0px;
    }
    .contact form{
      margin-top: 25px;
    }
    .contact form>div{
      height: 50px;

    }
    .send>input{
      height: 50px;
      line-height: 50px;
      font-size: 1.2rem;
    }

    .address>p{
      font-size: .8rem;

    }
  }
  /*平板*/
  @media screen and (min-width:708px) and (max-width:1024px){
    .skill{
      height: 150px;
    }
    .container{
      width: 100%;
    }
    .content dl{
      width: 25%;
      margin-bottom: 0px;
    }
    .content{
      height: 100%;
      padding-top: 0px;
    }
    .content>div{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      margin-left: 0px;
    }
    .content dl>dt>img{
      margin: 0 auto;
      width: 80px;
    }
    .content dl>dd{
      margin-top: 10px;
      text-align: center;
      color:#fff;
      font-size: .9rem;
      font-weight: 400;
    }
    .server-content{
      padding-top:10px;
      padding-left: 0px;
      padding-right: 0px;
    }
    .server-content>h3{
      font-size: 2rem;
      line-height: 13px;
      margin-top: 23px;
      margin-bottom: 0;
    }
    .server-content>p{
      font-size: 1.8rem;
      line-height: 47px;
    }
    .img-container{
      margin-top: 0px;
      width: 100%;
      margin-left: 0px;
    }
    .img-container>dl{
      padding: 0px;
      width: 30%;
      padding-bottom: 10px;
      background:#F1F1F1 ;
    }
    .img-container>dl>dt{
      height: auto;
    }
    .img-container>dl dd{
      margin-top: 23px;
    }
    .img-container p{
      font-size: 1.5rem;
      color:#9F9F9F;
      line-height: 22px;
      margin: 0;
    }
    .about{
      padding-top: 40px;
    }
    .about>h3{
      font-size: 2rem;
    }
    .about>h4{
      font-size: 1.8rem;
      color: #9f9f9f;
      text-align: center;
      line-height: 14px;
      margin: 0;
    }
    .contact{
      padding-top: 12px;
      height: 424px;
      padding-left: 0px;
    }
    .contact>h3{
      font-size: 2rem;
    }
    .contact>h4{
      font-size: 1.8rem;
    }
  }
</style>
