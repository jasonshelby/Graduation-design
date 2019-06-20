<template>
  <div class="user-card">
    <img src="../assets/tx.jpg" alt="" class="head-img">
    <div class="right">
      <!-- <div>{{ state.identity ? state.name.substring(0, 1) + '医生' : state.name }}，你好</div> -->
      <div class="name">张旭</div>
      <div>用户名：{{ state.username }}</div>
      <div>年龄：{{ state.age }}岁</div>
      <div>身高：{{ state.height }}cm</div>
      <div>体重：{{ state.weight }}kg</div>
      <div>联系电话：{{ state.phone }}</div>
      <div class="line"></div>
    </div>
  </div>
</template>
<script>
// import state from '../store/index.js'

export default {
  props:{
    state: Object,
  },
  // data() {
  //   return {
  //     state,
  //   }
  // },
}
</script>

<style>
.user-card{
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  margin: 10px 20px;
}

.user-card .right > div{
  float: left;
  padding: 1px 4px;
  height: 30px;
  line-height: 30px;
  text-align: left;
  font: 12px Extra Small;
}

.user-card .head-img{
  float: left;
  width: 100px;
  height: 100px;
  margin: 20px;
  border-radius: 50%;
}

.user-card .right .name{
  float: none;
  margin: 20px 0px 40px 0px;
  font:	20px Extra large;
}
</style>

