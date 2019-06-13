
<template>
  <div class="home">
    <div class="card">
      <div class="img-wrapper">
        <img class="img-content" src="../assets/heart01.jpg" alt="">   
      </div>
      <div class="test-wrapper">
        <h1>项目介绍</h1>
        <p>
          利用人体脉搏波传感器和人体姿态传感器实时监测人体脉搏波和姿态信息，通过无线通讯模块将监测到的信息实时发送至智能手机APP；经简单处理后，再由智能手机APP将信息发送至信息处理中心（云端或服务器），信息处理中心对监测到的信息处理后，给出心脑血管疾病突发风险级别的评测结果，并将此结果发送至监护医师的PC机及智能手机终端，最后由医师及时做出相应的处理措施。达到将疾病突发风险控制在萌芽中，有效降低心脑血管恶性疾病突发的可能性。本项目专注于PC端和移动端的软件系统，主要针对前端（手机APP和PC端界面）。
        </p>
      </div>
    </div>
    </div>
    
</template>

<style>
.home{
  text-align: left;
  margin: 0 auto;
  padding-top: 40px;
}

.home .card{
  overflow: hidden;
  padding: 15px 20px 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.home .img-wrapper{
  width:30%;
  float:left;
}

.home .img-wrapper .img-content{
  width: 100%;
}

.home .test-wrapper {
  width:70%;
  float:right;
  box-sizing: border-box;
  padding-left: 30px;
}

.home h1{
  text-align: left;
  font-weight: 100;
  color: rgb(85,85,85);
  font-family: 'microsoft yahei';
  line-height: 35px;
}

.home p{
  margin-top: 20px;
  text-indent: 2em;
  color: rgb(85,85,85);
  font-family: 'microsoft yahei';
  font-size: 14px;
  line-height: 35px;
}
</style>

