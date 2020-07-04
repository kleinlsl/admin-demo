<template>

  <section>
    <!--加入面包屑-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单信息管理</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <div>
        this is orderInfo.
    </div>
  </section>

</template>

<script>
    export default {
        name: "userComment"
    }
</script>

<style scoped>

</style>
