/*
老师写的模板
*/
import axios from "axios";
//后台地址和端口
export let baseUrl = "http://39.99.140.59:8000/aomaomanage";

//登录信息
export function login(params) {
  // alert(JSON.stringify(params));
  return axios({
    url: `${baseUrl}/admin/exists`,
    method: "POST",
    params: params
  });
}

//修改管理员信息
export function edit(params) {
  // alert(JSON.stringify(params));
  params.createTime=null;
  params.operateTime=null;
  return axios({
    url: `${baseUrl}/admin/update`,
    method: "POST",
    params: params
  });
}

//修改管理员信息
export function getAdmin(params) {
  // alert(JSON.stringify(params));
  // params.createTime=null;
  // params.operateTime=null;
  return axios({
    url: `${baseUrl}/admin/getAdmin`,
    method: "POST",
    params: params
  });
}

//
// //获取商品类别列表ajax请求
// export function getCategoryList(params) {
//   //写法1
//   // return axios
//   // .get(`${baseUrl}/category/search`,{params:params})
//   //写法2
//   return axios({
//     url: `${baseUrl}/category/search`,
//     method: "GET",
//     params: params
//   });
// }
//
// //添加商品类别信息
// export function addCategory(params) {
//   //写法1
//   // return axios.post(`${baseUrl}/category/add`,params);
//   //写法2
//   return axios({
//     url: `${baseUrl}/category/add`,
//     method: "POST",
//     params: params
//   });
//   //写法3，要求后台controller接收参数使用实体类，比如CategoryInfo，必须加上@RequestBody
//   // @PostMapping("/add")
//   // public FrameResponse add( @RequestBody CategoryInfo categoryInfo)
//
//   // return axios({
//   //   url: `${baseUrl}/category/add`,
//   //   method: 'POST',
//   //   data: params
//   // })
// }
//
// //修改类别信息
// export function editCategory(params) {
//   return axios({
//     url: `${baseUrl}/category/update`,
//     method: "POST",
//     params: params
//   });
// }
//
// //删除类别信息
// export function removeCategory(params) {
//   return axios({
//     url: `${baseUrl}/category/delete/${params}`,
//     method: "DELETE"
//   });
// }
