<template>
<el-container>
  <el-header>
    <el-row>
      <el-col :span="3" class="logo">
        <a ref="/"><span><br></span></a>
      </el-col>
      <el-col :span="21">
        <!-- Header -->
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
          <el-menu-item index="4" class="fr" @click="logout" >退出</el-menu-item>
          <el-menu-item index="5" class="fr">消息中心</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>

  </el-header>
  <el-container class="main">
    <el-aside width="12.5%">

      <!-- Aside -->
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b" router

      ><!--        mode="horizontal"-->

        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>商品管理模块</span>
          </template>
          <el-menu-item-group>
<!--            <template slot="title">-->
<!--              分组一-->
<!--            </template>-->
            <el-menu-item index="/type">商品类别管理</el-menu-item>
            <el-menu-item index="/product">商品信息管理</el-menu-item>
          </el-menu-item-group>

        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>会员管理模块</span>
          </template>
          <el-menu-item index="/user">会员信息管理</el-menu-item>
          <el-menu-item index="2-2">会员留言管理</el-menu-item>
        </el-submenu>

        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">订单信息管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">系统用户设置</span>
        </el-menu-item>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>其他模块</span>
          </template>
          <el-menu-item index="/category">管理模板页</el-menu-item>
<!--          <el-menu-item index="2-2">会员留言管理</el-menu-item>-->
        </el-submenu>
      </el-menu>


    </el-aside>
    <el-main>
      <!-- Main -->
      <router-view/>
    </el-main>
  </el-container>
  <el-footer>
      Copyright @ 2020 XCUTeam. | repository：<a href="https://gitee.com/kleinlsl/aomaomanage" target="_blank">Gitee</a>
  </el-footer>
</el-container>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$confirm('确认退出吗？', '提示', {}).then(() => {
        sessionStorage.removeItem('user');
        this.$router.push('/login');
      });
    }
  },
}
</script>

<style scoped>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    line-height: 200px;
  }
   .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
  }

  .el-container{
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0 ;
    bottom: 0;
  }
  .el-header{
    line-height: 60px;
    padding: 0;
    top: 0;
    z-index: 1000;
  }
  .el-footer{
    line-height: 60px;
  }
  /*!* *header菜单需要靠右的添加.fr即可(如：<el-menu-item class="fr" index="3">消息中心</el-menu-item>) *!*/
  .el-header .fr{
    float: right;
  }
  .el-header .el-menu{
    border-bottom: none;
  }
  /*.el-aside .el-main{*/
  /*  !*padding-top: 80px;*!*/
  /*  !*height: 90%;*!*/
  /*}*/
  .el-aside{
    background: #545c64;
  }
  .el-aside .el-menu{
    border-right: none;
  }

 .el-row {
   margin-bottom: 20px;
   &:last-child {
      margin-bottom: 0;
   }
 }
 .el-col {
   border-radius: 4px;
   background: #545c64;
 }
  .logo{
    position: relative;
    height: 100%;
    background: url("./../assets/logo.png") round;
  }

</style>
