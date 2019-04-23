<template>
  <div id="app">
    <div id="nav">
      <el-menu 
        class="el-menu-demo" 
        mode="horizontal"
        default-active='/'
        :router="true"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/about">about</el-menu-item>
        <el-menu-item index="/patient/:id">patient</el-menu-item>
        <el-menu-item index="/signin">signin</el-menu-item>
        <el-menu-item index="/doctor">doctor</el-menu-item>
      </el-menu>
      <!-- @TODO 右上角登陆状态是否登陆 -->
      
    </div>
    <!-- @TODO需求整理
    最终的导航栏有github地址，最好有在线文档，患者有查看档案功能
    首页可能要做个轮播，介绍一下项目
    但是还是别给自己添加需求了，emmmmm -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 100px;
}
</style>
