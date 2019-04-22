<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">about</router-link> |
      <router-link to="/patient">patient</router-link> |
      <!-- @TODO 右上角登陆状态是否登陆 

      
      @TODO 导航栏菜单化-->
      <router-link to="/signin">signin</router-link> |
      <router-link to="/doctor">doctor</router-link>
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
  margin-top: 60px;
}
</style>
