/*
商品类别API接口
*/
import axios from "axios";
import {baseUrl} from "../api/api"

//获取商品类别列表ajax请求
export function getTypeList(params) {
  // alert(baseUrl);
  let url=`${baseUrl}/type/searchType`
  // alert(url);
  return axios({
    url: `${baseUrl}/type/searchType`,
    method: "GET",
    params: params
  });
}

//添加商品类别信息
export function addType(params) {
  // alert(JSON.stringify(params));
  return axios({
    url: `${baseUrl}/type/addType`,
    method: "POST",
    params: params
  });
}

//修改类别信息
export function editType(params) {
  alert(JSON.stringify(params));
  params.createTime=null;
  params.operateTime=null;
  return axios({
    url: `${baseUrl}/type/updateType`,
    method: "POST",
    params: params
  });
}

//删除类别信息
export function removeType(params) {
  return axios({
    url: `${baseUrl}/type/delete/${params}`,
    method: "DELETE"
  });
}
