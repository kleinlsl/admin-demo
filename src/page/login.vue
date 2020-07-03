<template>
  <el-form :model="loginForm" :rules="fieldRules" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">

    <h2 class="title" style="padding-left:22px;" >系统登录</h2>
    <el-form-item prop="account">
      <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>

    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:48%;" @click.native.prevent="login" :loading="loading">登 录</el-button>
      <el-button type="primary" style="width:48%;" @click.native.prevent="reset">重 置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  // import Cookies from "js-cookie"
  import {login} from '../api/api'
  export default {
    name: 'Login',
    data() {
      return {
        loading: false,
        loginForm: {
          account: '',
          password: '',
          src: ''
        },
        fieldRules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },
        checked: true
      }
    },
    methods: {
      login() {
        this.loading = true;
        let userInfo = {adminAccount:this.loginForm.account, adminPass:this.loginForm.password}
        login(userInfo).then((res) => {
          if(res.data.code !== 0) {
            this.$message({
              message: res.data.message,
              type: 'error'
            })
          } else {
            // Cookies.set('token', res.data.token) // 放置token到Cookie
            sessionStorage.setItem('user', userInfo.adminAccount); // 保存用户到本地会话
            this.$router.push('/')  // 登录成功，跳转到主页
          }
          this.loading = false
        }).catch((res) => {
          this.$message({
            message: res.data.message,
            type: 'error'
          })
        });
      },

      reset() {
        this.$refs.loginForm.resetFields()
      }

    }


  }
</script>

<style scoped>
  .login-container {
    margin: 100px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
</style>
