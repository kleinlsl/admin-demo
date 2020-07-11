<template>
  <el-form :model="userForm" :rules="fieldRules" ref="userForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">

    <h2 class="title" style="padding-left:22px;" >用户中心</h2>
    <el-form-item prop="adminAccount">
      <el-input type="text" v-model="userForm.adminAccount" readonly="true" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="adminPass">
      <el-input type="password" v-model="userForm.adminPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item prop="verify_password">
      <el-input type="password" v-model="userForm.verify_password" auto-complete="off" placeholder="重复密码"></el-input>
    </el-form-item>

    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:48%;" @click.native.prevent="editSubmit" :loading="loading">修 改</el-button>
      <el-button type="primary" style="width:48%;" @click.native.prevent="reset">重 置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  // import Cookies from "js-cookie"
  import {edit,getAdmin} from '../../api/api'
  export default {
    name: 'updateAdminInfo',
    data() {
      return {
        loading: false,
        userForm: {
          adminAccount: sessionStorage.getItem('user'),
          adminPass: '',
          verify_password:'',
          src: ''
        },
        fieldRules: {
          adminAccount: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          adminPass: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          verify_password: [
            { required: true, message: '请再次输入密码', trigger: 'blur' }
          ]
        },
        checked: true
      }
    },
    methods: {
      editSubmit() {
        this.loading = true;
        alert(JSON.stringify(this.userForm));
        if (this.userForm.adminPass===this.userForm.verify_password){
            // let userInfo = {adminAccount:this.userForm.adminAccount, adminPass:this.userForm.adminPass}
            edit(this.userForm).then((res) => {
              if(res.data.code !== 0) {
                this.$message({
                  message: res.data.message,
                  type: 'error'
                })
              } else {
                // Cookies.set('token', res.data.token) // 放置token到Cookie
                sessionStorage.removeItem('user'); // 保存用户到本地会话
                this.$message({
                  message: "successfully change password! ! !",
                  type: 'success'
                });
                this.$router.push('/')  // 登录成功，跳转到主页
              }
              this.loading = false
            }).catch((res) => {
              this.$message({
                message: res.data.message,
                type: 'error'
              })
            });
        }
        else {
          this.loading = false;
          this.$message({
            message: "wrong password!!!",
            type: 'error'
          })
        }
      },

      reset() {
        this.$refs.userForm.resetFields()
      }

    },
    mounted() {

      this.userForm.adminAccount=sessionStorage.getItem('user');

      let parms = {
        adminAccount:this.userForm.adminAccount
      };
      // alert(parms);
      getAdmin(parms).then((res) => {
        if(res.data.code === 0) {
          this.userForm=res.data.data;
          // alert(JSON.stringify(this.userForm));
        }
      });

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

