<!--
 商品信息管理页
 -->
<template>
  <!-- <div>
    this is productInfo.
  </div> -->
  <section>
    <!--加入面包屑-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>会员信息管理</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <!--加入查询列-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;" >
      <el-form :inline="true" :model="filters">
<!--        <el-form-item>-->
<!--          <el-input placeholder="商品名称" v-model="filters.name"></el-input>-->
<!--        </el-form-item>-->
        <el-form-item>
          <el-button type="primary" @click="handleQuery">刷新</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleAdd">新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!--数据列表-->
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column type="selection" width="55"/>
      <el-table-column prop="id" label="序号" width="60"/>
      <el-table-column prop="userName" label="用户名" width="150"/>
      <el-table-column prop="realName" label="姓名" width="80"/>
      <el-table-column prop="nickName" label="昵称" width="80"/>
      <el-table-column prop="sex" label="性别" width="80"/>
      <el-table-column prop="status" label="用户状态" width="150"/>
      <el-table-column prop="operator" label="操作者" width="80"/>
      <el-table-column prop="deleteFlag" label="删除标识" width="80"/>
      <el-table-column prop="createTime" label="创建时间" :formatter = "dateFormat" width="160"/>
      <el-table-column label="操作" width="170">
        <template  slot-scope="scope">
          <el-button type="danger" size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="telephone" label="电话" width="150"/>
      <el-table-column prop="address" label="地址" width="150"/>
      <el-table-column prop="email" label="邮箱" width="150"/>
    </el-table>
    <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="size" :total="total"></el-pagination>

    <!--新增界面-->
    <el-dialog title="新增"  :visible.sync="addFormVisible" :close-on-click-modal="false">

      <!--  新增界面form表单    -->
      <el-form :model="addForm" label-width="100px" :rules="addFormRules" ref="addForm">
        <el-form-item label="用户名" prop="userName" >
          <el-input v-model="addForm.userName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" >
          <el-input v-model="addForm.password" type="password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证密码" prop="verify_password" >
          <el-input v-model="addForm.verify_password" type="password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="realName" >
          <el-input v-model.number="addForm.realName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称"  prop="nickName" >
          <el-input v-model.number="addForm.nickName" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="性别"  prop="sex" >
          <el-radio-group v-model="addForm.sex">
            <el-radio label="男"/>
            <el-radio label="女"/>
          </el-radio-group>
<!--          <el-input v-model.number="addForm.sex" auto-complete="off"></el-input>-->
        </el-form-item>
        <el-form-item label="地址" prop="address" >
          <el-input v-model="addForm.address" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email" >
          <el-input v-model="addForm.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="创建者" prop="creator" >
          <el-input v-model="addForm.creator" readonly="true" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click.native="addFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
      </div>

    </el-dialog>
    <!--修改编辑界面-->
    <el-dialog title="编辑" :visible.sync="editFormVisible" :close-on-click-modal="false">
      <el-form :model="editForm" label-width="100px" :rules="editFormRules" ref="editForm">

        <el-form-item label="商品编码" prop="code" >
          <el-input v-model="editForm.code" readonly="true" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品名称" prop="name" >
          <el-input v-model="editForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品单价" prop="price" >
          <el-input v-model.number="editForm.price" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品数量"  prop="num" >
          <el-input v-model.number="editForm.num" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品类别id"  prop="TId" >
          <el-input v-model.number="editForm.TId" readonly="true" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品介绍" prop="intro" >
          <el-input v-model="editForm.intro" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="操作员" prop="operator" >
          <el-input v-model="editForm.operator" readonly="true" auto-complete="off"></el-input>
        </el-form-item>

      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click.native="editFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
      </div>
    </el-dialog>
  </section>
</template>

<script>
  // import axios from 'axios'
  import moment from 'moment'
  import {getList,add,edit,remove} from '../../api/userInfoApi'
  // import {selectById} from '../../api/typeApi'
  export default {
    data() {
      return {
        current:1,
        size:5, //每页显示条数
        total:0,
        addFormVisible:false,
        editFormVisible:false,
        // filters: {
        //   name:''
        // },
        //新增界面数据
        addForm: {
          userName: '',
          password: '',
          verify_password:'',
          realName: '',
          nickName: '',
          sex: '',
          telephone: '',
          address: '',
          email: '',
          creator:sessionStorage.getItem('user'),
          // status: '',
        },
//校验信息
        addFormRules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          verify_password: [
            { required: true, message: '请再次输入密码', trigger: 'blur' }
          ],
          realName: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ],
          nickName: [
            { required: true, message: '请输入昵称', trigger: 'blur' }
          ],

        },
        editForm:{}, //编辑修改窗体
        editFormRules: {
          code: [
            { required: true, message: '请输入商品编码', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入商品名称', trigger: 'blur' }
          ],
          TId: [
            { required: true, message: '请输入商品类别ID', trigger: 'blur' },
            { type: 'number', message: '必须为数字值', trigger: 'blur' },
          ],
          // intro: [
          //   { required: true, message: '请输入图书类别', trigger: 'blur' }
          // ],
          num: [
            { required: true, message: '请输入数量', trigger: 'blur' },
            { type: 'number', message: '必须为数字值', trigger: 'blur' },

          ],
          price: [
            { required: true, message: '请输入单价', trigger: 'blur' },
            { type: 'number', message: '必须为数字值', trigger: 'blur' },
          ],
        },
        tableData: [

        ]


      };
    },
    methods: {
      addSubmit: function(){

        this.$refs.addForm.validate((valid) => {
          if (valid) {

            this.$confirm('确认提交吗？', '提示', {}).then(() => {
              this.addLoading = true;
              //NProgress.start();
              let para = Object.assign({}, this.addForm);
              // alert(JSON.stringify(para));
              if (para.password===para.verify_password){
                    add(para).then((res) => {
                      this.addLoading = false;
                        if(res.data.code !== 0) {
                          this.$message({
                            message: res.data.message,
                            type: 'error'
                          })
                        }
                        //NProgress.done();
                        //弹出消息框
                        this.$message({
                          message: '提交成功',
                          type: 'success'
                        });
                        //重置表单元素
                        this.$refs['addForm'].resetFields();
                        //隐藏对话框
                        this.addFormVisible = false;
                        this.getData();
                    });
              }
              else {
                  this.addLoading = false;
                  this.$message({
                    message: "wrong password",
                    type: 'error'
                  })
              }
            });
          }
        });
      },
      editSubmit: function(){
        this.$refs.editForm.validate((valid) => {
          if (valid) {
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
              this.editLoading = true;
              //NProgress.start();
              let para = Object.assign({}, this.editForm);

              edit(para).then((res) => {
                this.editLoading = false;
                //NProgress.done();
                this.$message({
                  message: '提交成功',
                  type: 'success'
                });
                this.$refs['editForm'].resetFields();
                this.editFormVisible = false;
                this.getData();
              });
            });
          }
        });
      },
      handleAdd: function(){
        //alert('进入添加页面');
        this.addFormVisible=true;
        //初始化
        this.addForm = {
          userName: '',
          password: '',
          verify_password:'',
          realName: '',
          nickName: '',
          sex: '',
          telephone: '',
          address: '',
          email: '',
          creator:sessionStorage.getItem('user'),
        };
      },
      handleQuery: function(){
        this.getData();
      },
      handleEdit: function(index, row){

        this.editFormVisible=true;
        let rowData = Object.assign({}, row);
        rowData.operator=sessionStorage.getItem('user');
        this.editForm=rowData;
      },
      //删除
      handleDel: function (index, row) {
        this.$confirm('确认删除该记录吗?', '提示', {
          type: 'warning'
        }).then(() => {
          this.listLoading = true;
          //NProgress.start();
          let para = { id: row.id };
          remove(row.id).then((res) => {
            this.listLoading = false;
            //NProgress.done();
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.getData();
          });
        }).catch(() => {

        });
      },
      handleCurrentChange(val) {
        this.current=val;
        this.getData();
      },
      getData: function(){
        // let params=this.filters.name;
        let para = {
          // page: this.page,
          page:this.current,
          pageSize:this.size,
          // productName: this.filters.name
        };
        // alert(JSON.stringify(para));
        //发起ajax 使用axios模块发起请求
        getList(para)
          // axios
          //   .get('http://localhost:8888/category/search',{params:para})
          .then(response => {
              console.log(response);
              this.total = response.data.data.total;
              this.tableData=response.data.data.list;
            }

          )
          .catch(function (error) { // 请求失败处理
            console.log(error);
          });
      },
      //时间格式化
      dateFormat:function(row, column) {
        // alert(1);
        var date = row[column.property];
        // alert(date);
        if (date === undefined) {
          return "";
        }
        return moment(date).format("YYYY-MM-DD HH:mm:ss");
      }

    },
    mounted(){
      this.getData();
    }
  };
</script>

<style scoped>

</style>
