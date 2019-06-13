
<template>
  <div class="home">
    
    <el-form 
      ref="signInForm" 
      :model="signInForm" 
      :rules="rules" 
      label-position="left"
      label-width="70px"
      :hide-required-asterisk="true"
      class="siginBox"
    >
      <el-form-item label="身份" prop="identity">
        <el-radio-group v-model="signInForm.identity">
          <el-radio label="患者"></el-radio>
          <el-radio label="医师"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="账户" prop="username">
        <el-input v-model.number="signInForm.username" placeholder="请输入账户"></el-input>
      </el-form-item>
      <!-- @TODO添加验证 字母或者数字 -->
      <el-form-item label="密码" prop="password" >
        <el-input v-model="signInForm.password" :show-password="true" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPassword" >
        <el-input v-model="signInForm.checkPassword" :show-password="true" placeholder="确认密码"></el-input>
      </el-form-item>
      
      <!-- <el-form-item label="身份证号" prop="idNumber" >
        <el-input v-model="signInForm.idNumber"></el-input>
      </el-form-item> -->
      <el-form-item label="姓名" prop="name" >
        <el-input v-model="signInForm.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio-group v-model="signInForm.gender">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="signInForm.age"></el-input>
      </el-form-item>
      <el-form-item label="身高(cm)" prop="height" >
        <el-input v-model.number="signInForm.height"></el-input>
      </el-form-item>
      <el-form-item label="体重(kg)" prop="weight" >
        <el-input v-model.number="signInForm.weight"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone" >
        <el-input v-model.number="signInForm.phone"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- TODO照片 -->
    <br>
  </div>
</template>

<script>
import state from '../store/index.js'
import axios from 'axios'

export default {
  data() {
    return {
      state,
      signInForm: {
        username: '',
        password: '',
        gender: '男',
        age: '',
        name: '',
        height: '', //cm
        weight: '', //kg
        phone: '',
        identity: '患者',
        checkPassword: '',
        // idNumber: '',
        // QQNumber: 0,
        // weChatNumber: 0,
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { type : 'string', message: '数字', trigger: 'blur'},
          { min: 6, max: 12, message: '长度在 6 到 16 个字符或者数字', trigger: 'blur' }
        ],
        password: [
          { validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              if (this.signInForm.checkPassword !== '') {
                this.$refs.signInForm.validateField('checkPassword');
              }
              callback();
            }
          }, trigger: 'blur' }
        ],
        checkPassword: [
          { validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.signInForm.password) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
          }, trigger: 'blur' }
        ],
        age: [
          { required: true, message: '年龄不能为空'},
          { type: 'number', message: '年龄必须为数字值'}
        ],
        weight: [
          { required: true, message: '体重不能为空'},
          { type: 'number', message: '体重必须为数字值'}
        ],
        height: [
          { required: true, message: '身高不能为空'},
          { type: 'number', message: '身高必须为数字值'}
        ]
      }
    }
  },
  created() {
  },
  methods: {
    submitForm() {
      this.$refs['signInForm'].validate(valid => {
        if (valid) {
          let formdata = new FormData()

          Object.keys(this.signInForm).forEach(item => {
            if(item === 'identity') {
              formdata.append(item, this.signInForm[item] === 'doctor' ? true : false)
              return 
            }
            if(item === 'gender') {
              formdata.append(item, this.signInForm[item] === '男' ? false : true)
              return 
            }
            if(item === 'checkPassword') return 
            formdata.append(item, this.signInForm[item])
          })
          axios.post(`${ this.host }/registerRequest`, formdata)
          .then(mes => {
            if (mes.data.success === 'true') {
              this.handleSuccess()
            }
          }, e => {
            this.handleError(e)
          })
        } else {
          return false;
        }
      });
    },
    handleSuccess() {
      this.$message({
        message: '注册成功',
        type: 'success'
      });
      this.resetForm()
      this.$router.push('/')
    },
    handleError(e) {
      this.$message({
        message: e,
        type: 'error'
      });
    },
    resetForm() {
      this.$refs['signInForm'].resetFields();
    },
    handleSelect(mes){
      this.signInForm.identity = mes
    }
  },
}
</script>


<style>
/* @TPDO 样式调整 */
.siginBox{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  padding: 15px 40px 30px;
  margin: 0 auto;
  width: 450px;
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
