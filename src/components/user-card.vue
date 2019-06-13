<template>
  <div class="user-card">
    <!-- {{state}} -->
    <!-- @TODO  CSS 卡片样式 -->
    
    <div>{{ state.identity ? state.name.substring(0, 1) + '医生' : state.name }}，你好</div>
    <div>用户名：{{ state.username }}</div>
    <div>年龄：{{ state.age }}</div>
    <div>身高：{{ state.height }}</div>
    <div>体重：{{ state.weight }}</div>
    <div>联系电话：{{ state.phone }}</div>
    <div class="line"></div>
    <!-- <span v-if="!state.identity">
      您的健康数据如下所示
    </span>
    <span v-else>
      请在这里处理患者们的信息
    </span> -->
  </div>
</template>


<script>
import state from '../store/index.js'

export default {
  data() {
    return {
      state,
    }
  },
  

}
</script>


<style>

.user-card{
  overflow: hidden;

}
.user-card .line{
  float: none;
}
.user-card > div{
  float: left;
  width: 300px;
  height: 30px;
  line-height: 30px;
  text-align: left;
}


</style>

