
<template>
  <div class="home">
    <el-form
      v-if="!state.isOnline"
      ref="loginInForm" 
      label-position="left"
      :model="loginInForm" 
      class="loginBox"
    >
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

  </div>
</template>

<script>
import state from '../store/index.js'
import axios from 'axios'
// @TODO 将登陆信息同步到缓存

export default {
  // @TODO 登陆项的类型检查
  data() {
    return {
      state,
      loginInForm: {
        username: '',
        password: '',
      }
    }
  },
  // mixins: [],
  created() {
    if (sessionStorage.isOnline === 'true') {
      // state.isOnline = true
    }
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
      axios.post(`${ this.host }/loginRequest`, formdata).then(mes => {
        let { data } = mes
        if (data.success === "true") {
          this.handleSuccess.call(this, JSON.parse(data.message))
        } else if (data.success === "false") {
          this.handleError(data.message)
        }
      }, e => {
        this.handleError(e)
      })
    },
    handleSuccess(data) {
      let { identity, id } = data
      this.$message({
        message: '登陆成功',
        type: 'success'
      });
      Object.keys(data).forEach(item => {
        state[item] = data[item]
      })
      sessionStorage.isOnline = true
      sessionStorage.user = JSON.stringify(data)
      state.isOnline = true
      this.$router.push(`/${identity ? 'doctor' : 'patient'}/${id}`)
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

.menu-item{
  width: 50%;
}

.loginBox{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  padding: 15px 40px 30px;
  margin: 0 auto;
  width: 334px;
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