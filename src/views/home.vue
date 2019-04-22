
<template>
  <div class="home">
    <div class="img-wrapper">
      <img class="img-content" src="../assets/heart01.jpg" alt="">   
    </div>
    <el-form
      ref="loginInForm" 
      :model="loginInForm" 
      class="loginBox"
    >
      <!-- <el-menu 
        :default-active="loginInForm.userType" 
        class="Menu-demo" mode="horizontal" 
        @select="handleSelect"
      >
        <el-menu-item index="doctor" class="menu-item">医师</el-menu-item>
        <el-menu-item index="patient" class="menu-item">患者</el-menu-item>
      </el-menu> -->

      <el-form-item label="账户" prop="username">
        <el-input v-model.number="loginInForm.username" placeholder="请输入账户"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" >
        <el-input v-model="loginInForm.password" :show-password="true" placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-form-item class="button-wrapper">
        <el-button class="home-button" type="primary" @click="submitForm('loginInForm')">登陆</el-button>
        <router-link to="/signin">
          <el-button class="home-button">注册</el-button>
        </router-link>
      </el-form-item>
    </el-form>
    <div class="line"></div>
    <!-- @TODO密码清空功能
    @TODO、十天免登录功能
     -->

  </div>
</template>

<script>
import state from '../store/index.js'
import axios from 'axios'
import config from '../config.js'

export default {
  // @TODO 登陆项的类型检查
  data() {
    return {
      state,
      loginInForm: {
        userType: 'doctor',
        username: '',
        password: '',
      }
    }
  },
  created() {
    // alert(JSON.stringify(state))
  },
  updated() {
    // alert('更新了')
  },
  methods: {
    submitForm() {
      let formdata = new FormData()
      Object.keys(this.loginInForm).forEach(item => {
        formdata.append(item, this.loginInForm[item])
      })
      // formdata.append('username', this.loginInForm.username);
      // formdata.append('password', this.loginInForm.password);
      axios.post(`${ config.host }/loginRequest`, formdata).then(mes => {
        let { data } = mes
        if (data.success === "true") {
          console.log(data)
          this.handleSuccess(data)
        } else if (data.success === "false") {
          this.handleError(data.message)
        }
      }, e => {
        this.handleError(e)
      })
    },
    handleSuccess() {
      this.$message({
        message: '登陆成功',
        type: 'success'
      });
      state.isOnline = true
      
      this.$router.push(`/${this.loginInForm.userType}`)
    },
    handleError(mes) {
      if (mes === "nonexistence") {
        this.$message.error('用户名不存在');
        this.$refs['loginInForm'].resetFields();
      }
    },
    handleSelect(mes){
      this.loginInForm.userType = mes
    }
  },
}
</script>

<style>
.home{
  min-width: 960px;
  width: 800px;
  padding-top: 40px;
  margin: 0 20px 60px 25px;
  overflow: hidden;
  margin: auto;
}

.img-wrapper{
  float: left;
}

.img-wrapper .img-content{
  width: 421px;
  margin: 1px 50px 20px;
}

.menu-item{
  width: 50%;
}

.loginBox{
  float: right;
  right: 0px;
  width: 334px;
  height: 387px;
}

.el-form-item__content{
  margin-top: 20px;
  margin: auto;
}

.home-button{
  margin-top: 15px;
  box-sizing: border-box;
  width: 50%;
}
</style>