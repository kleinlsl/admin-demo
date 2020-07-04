/*
用户信息API接口
*/
import axios from "axios";
import {baseUrl} from "../api/api"

//获取用户列表ajax请求
export function getList(params) {
  // alert(JSON.stringify(params));
  // let url=`${baseUrl}/user/searchType`
  // alert(url);
  return axios({
    url: `${baseUrl}/user/selectUser`,
    method: "GET",
    params: params
  });
}

//添加用户信息
export function add(params) {
  // alert(JSON.stringify(params));
  return axios({
    url: `${baseUrl}/user/add`,
    method: "POST",
    params: params
  });
}

//修改信息
export function edit(params) {
  alert(JSON.stringify(params));
  params.createTime=null;
  params.operateTime=null;
  // params.typeInfo=null;
  // params.typeData.
  return axios({
    url: `${baseUrl}/user/update`,
    method: "POST",
    params: params
  });
}

//删除信息
export function remove(params) {
  return axios({
    url: `${baseUrl}/user/delete/${params}`,
    method: "DELETE"
  });
}
