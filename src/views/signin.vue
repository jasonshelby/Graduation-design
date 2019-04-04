
<template>
  <div class="home">
    <Form 
      ref="ruleForm" 
      :model="ruleForm" 
      :rules="rules" 
      :hide-required-asterisk="true"
    >
      <FormItem label="账户" prop="username">
        <el-input v-model.number="ruleForm.username" placeholder="请输入账户"></el-input>
      </FormItem>
      1、添加验证 字母或者数字
      <FormItem label="密码" prop="password" >
        <el-input v-model="ruleForm.password" :show-password="true" placeholder="请输入密码"></el-input>
      </FormItem>
      <FormItem label="确认密码" prop="checkPassword" >
        <el-input v-model="ruleForm.checkPassword" :show-password="true" placeholder="确认密码"></el-input>
      </FormItem>

      
      <FormItem label="身份证号" prop="idNumber" >
        <el-input v-model="ruleForm.idNumber"></el-input>
      </FormItem>
      <FormItem label="姓名" prop="name" >
        <el-input v-model="ruleForm.name"></el-input>
      </FormItem>
      <FormItem label="性别" prop="sex">
        <RadioGroup v-model="ruleForm.sex">
          <Radio label="男"></Radio>
          <Radio label="女"></Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </FormItem>
      <FormItem label="身高" prop="height" >
        <el-input v-model.number="ruleForm.height"></el-input>cm
      </FormItem>
      <FormItem label="体重" prop="weight" >
        <el-input v-model.number="ruleForm.weight"></el-input>kg
      </FormItem>
      <FormItem label="电话" prop="phoneNumber" >
        <el-input v-model.number="ruleForm.phoneNumber"></el-input>
      </FormItem>

      <FormItem>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </FormItem>
    </Form>
    功能：表单验证（类型验证）

    必填：
    照片
    有无病史（有无必填）
    （支持添加病逝）
    发病时间
    
    2、必填标识
    3、如何支持微信扫码登陆和注册

    <br>
    选填：
    日常喜欢的活动：
    在此活动中您会佩戴我们的设备吗

  </div>
</template>

<script>
import { 
  Input, 
  // Button,
  Form,
  FormItem,
  Radio,
  RadioGroup,
} from 'element-ui'

export default {
  components: {
    "el-input": Input,
    // "el-button": Button,
    Form,
    Radio,
    RadioGroup,
    FormItem,
  },
  data() {
    return {
      ruleForm: {
        username: '',
        password: '',
        checkPassword: '',
        idNumber: '',
        name: '',
        sex: '男',
        age: '',
        weight: '', //kg
        height: '', //cm
        phoneNumber: '',
        QQNumber: 0,
        weChatNumber: 0,
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { type : 'number', message: '数字', trigger: 'blur'},
          // { min: 6, max: 12, message: '长度在 6 到 12 个数字', trigger: 'blur' }
        ],
        password: [
          { validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              if (this.ruleForm.checkPassword !== '') {
                this.$refs.ruleForm.validateField('checkPassword');
              }
              callback();
            }
          }, trigger: 'blur' }
        ],
        checkPassword: [
          { validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.password) {
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
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('提交数据', JSON.stringify(this.ruleForm))
        } else {
          alert('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }

  },
  
}
</script>
