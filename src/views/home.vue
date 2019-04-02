
<template>
  <div class="home">
    背景（用心守护您的健康）
    <br>

    登陆框


    账户:<el-input v-model="username" placeholder="请输入内容"></el-input>
    密码:<el-input v-model="password" placeholder="请输入内容"></el-input>

    <el-button>登陆 </el-button>
    <el-button type="primary">
      <router-link to="/signin">注册</router-link>
    </el-button>

    (清空功能)



    
    选项卡
    （十天免登录功能）
    登陆按钮
    注册按钮（route sign in page）

  </div>
</template>

<script>
import { Input, Button } from 'element-ui'

// console.log(Input)

export default {
  components: {
    "el-input": Input,
    "el-button": Button
  },
  data() {
    return {
      isDoctor: true,
      username: '',
      password: '',
    }
  },
  creatd() {
  },
  methods: {
    
  },
  
}
</script>

