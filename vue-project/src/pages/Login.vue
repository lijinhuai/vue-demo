<template>
  <div class="login-wrap">
    <div class="ms-title">{{loginTitle}}</div>
    <div class="ms-login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
        <!-- <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p> -->
      </el-form>
    </div>
  </div>
</template>

<script>
import { requestLogin } from '@/api/api'


export default {
  data() {
    return {
      loginTitle: '管理系统',
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      const self = this;
      self.$refs[formName].validate((valid) => {
        if (valid) {
          requestLogin(this.ruleForm).then(res => {
            if (res.code == 200) {
              self.$router.push('/home');
            }
          });
          // localStorage.setItem('ms_username', self.ruleForm.username);

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(56, 157, 170, 0.82);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ms-title {
  height: 80px;
  font-size: 40px;
  color: black;
}

.ms-login {
  z-index: 1;
  padding: 10px;
  width: 300px;
}

.login-btn {
  text-align: center;
}

.login-btn button {
  width: 100%;
  height: 36px;
}
</style>

