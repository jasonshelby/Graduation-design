
<template>
  <div class="home">
    <img src="../assets/heart01.jpg" alt="">   
    <Form>
      <Menu :default-active="loginInForm.userType" class="Menu-demo" mode="horizontal" @select="handleSelect">
        <MenuItem index="doctor">医师</MenuItem>
        <MenuItem index="patient">患者</MenuItem>
      </Menu>

      <FormItem label="账户" prop="username">
        <el-input v-model.number="loginInForm.username" placeholder="请输入账户"></el-input>
      </FormItem>
      <FormItem label="密码" prop="password" >
        <el-input v-model="loginInForm.password" :show-password="true" placeholder="请输入密码"></el-input>
      </FormItem>

      <FormItem>
        <Button type="primary" @click="submitForm('loginInForm')">登陆</Button>
        <router-link to="/signin">
          <Button>注册</Button>
        </router-link>
      </FormItem>
    </Form>
    
    <div class="line"></div>
    1、密码清空功能
    2、十天免登录功能

  </div>
</template>

<script>

import { 
  Input, 
  Button,
  Menu,
  MenuItem,
  Form,
  FormItem,
} from 'element-ui'

export default {
  components: {
    "el-input": Input,
    Button,
    Menu,
    MenuItem,
    Form,
    FormItem,
  },
  data() {
    return {
      loginInForm: {
        userType: 'doctor',
        username: '',
        password: '',
      }
    }
  },
  creatd() {
  },
  methods: {
    submitForm(){

    },
    handleSelect(){

    }
  },
  
}
</script>

