<template>
  <div class="about">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">登陆</el-menu-item>
      <el-menu-item index="3">注册</el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>




<script>
  import { 
    Menu,
    MenuItem,
    // MenuItemGroup 
  } from 'element-ui'

  export default {
    components: {
      "el-menu": Menu,
      "el-menu-item": MenuItem,
    // MenuItemGroup 
    },
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      
    }
  }
</script>