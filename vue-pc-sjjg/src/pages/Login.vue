<template>
  <div class="wrapper">
    <header class="navbar">
    </header>
    <main class="main">
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
    </main>
    <footer class="footer">
      <a href=''>Chrome下载</a>
      <span class="pull-right text-muted" v-html="copyRight">
      </span>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginTitle: '苏州市公安局交警警务平台',
      copyRight: '<a href="http://10.35.243.54:88/sjjg">苏州市公安局交警警务平台</a> © 2016 苏州市公安局交通警察支队. 技术支持 <a href="http://www.cybertech.com.cn">苏州广达</a>',
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
          localStorage.setItem('ms_username', self.ruleForm.username);
          self.$router.push('/home');
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

header.navbar {
  height: 70px;
  background: url(~@/assets//img/logo.png) no-repeat;
  background-position: 10px;
}

.login-wrap {
  width: 100%;
  height: 450px;
  background: linear-gradient(45deg, #020031 0, #6d3353 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
   justify-content: center; 
}

.login-wrap:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(~@/assets/img/bs-docs-masthead-pattern.png) repeat center center;
  opacity: .6;
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

.footer{
  padding: 40px 10px;
}


</style>


