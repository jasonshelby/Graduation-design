
<template>
  <div :class="isPC ? 'doctor' : 'M-doctor'">

    <UserCard v-if="isPC"></UserCard>

    <el-menu
      :default-active="activeFunc"
      :class="isPC ? 'menu' : 'M-menu'"
      :mode="isPC ? 'vertical' : 'horizontal'"
      @select="chartName => activeFunc = chartName"
    >
      <el-menu-item index="PatientList" class="lll">
        <i class="el-icon-menu"></i>
        <span slot="title">患者列表</span>
      </el-menu-item>
      <el-menu-item index="None" class="lll">
        <i class="el-icon-setting"></i>
        <span slot="title">其他功能</span>
      </el-menu-item>
    </el-menu>

    <component :is="activeFunc" class="main"></component>

    <!-- 
    消息队列
    用户分组功能
    patient/:id
    用户详情 -->
  </div>
</template>

<script>
  import UserCard from '../components/user-card'
  import PatientList from '../components/patient-list'
  import None from '../components/none'

export default {
  components: {
    UserCard,
    PatientList,
    None,
  },
  data() {
    return { 
      activeFunc: 'PatientList'
    };
  },

}
</script>

<style>
.doctor .menu{
  width: 200px;
  float: left;
  min-height: 400px;
}

.doctor .main{
  overflow: auto;
}

.M-doctor .el-menu-item{
  width: 50%;
}
</style>


