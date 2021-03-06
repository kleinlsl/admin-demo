/*
商品信息API接口
*/
import axios from "axios";
import {baseUrl} from "../api/api"

//获取商品列表ajax请求
export function getList(params) {
  // alert(baseUrl);
  // let url=`${baseUrl}/product/searchType`
  // alert(url);
  return axios({
    url: `${baseUrl}/product/searchProductInfo`,
    method: "GET",
    params: params
  });
}

//添加商品信息
export function add(params) {
  alert(JSON.stringify(params));
  return axios({
    url: `${baseUrl}/product/add`,
    method: "POST",
    params: params
  });
}

//修改信息
export function edit(params) {
  alert(JSON.stringify(params));
  params.createTime=null;
  params.operateTime=null;
  params.typeInfo=null;
  // params.typeData.
  return axios({
    url: `${baseUrl}/product/update`,
    method: "POST",
    params: params
  });
}

//删除信息
export function remove(params) {
  return axios({
    url: `${baseUrl}/product/delete/${params}`,
    method: "DELETE"
  });
}
