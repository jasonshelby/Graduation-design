<template>
  <div id="app">
    <el-menu 
      class="menu-wrapper" 
      mode="horizontal"
      default-active='/'
      :router="true"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <nav class='nav-left'>
        <el-menu-item index="/" class="item-left">脉搏波监控系统</el-menu-item>
      </nav>

      <!-- @TODO 无网络连接 -->
      <!-- @TODO 防止用户请求到其他用户的信息 -->

      <nav class='nav-right'>
        <el-menu-item v-if="state.isOnline" @click="quit" class="item-right">
          退出登陆({{state.name}})
        </el-menu-item>
        <el-menu-item v-else index="/signin" class="item-right">注册</el-menu-item>
        <el-menu-item 
          class="item-right"
          v-if="state.isOnline" 
          :index="`/${state.identity ? 'doctor' : 'patient'}/${ state.id }`">
          个人主页
        </el-menu-item>
        <el-menu-item v-else index="/login" class="item-right">登陆</el-menu-item>
      </nav>
    </el-menu>
    <router-view id="app-body"/>
  </div>
</template>

<script>
import state from './store/index.js'

export default {
  // @TODO 登陆项的类型检查
  data() {
    return {
      state,
    }
  },
  created() {
    // 根据缓存自动登陆
    if(sessionStorage.isOnline === 'true') {
      let data = JSON.parse(sessionStorage.user)
      state.isOnline = true
      Object.keys(data).forEach(item => {
        state[item] = data[item]
      })
    }
  },
  methods: {
    quit() {
      state.isOnline = false
      sessionStorage.isOnline = ''
      sessionStorage.user = ''
    }
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app-body{
  margin: 0 100px;
}
.nav-left {
  margin-left: 100px;
}
#app .menu-wrapper .item-left{
  float: left;
}
.nav-right {
  margin-right: 100px;
}
#app .menu-wrapper .item-right{
  float: right;
}
</style>
