import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/page/layout'
import Main from '@/page/main'
import User from '@/page/subPage/user'
import Type from '@/page/subPage/type'
import ProductInfo from '@/page/subPage/productInfo'
import UpdateAdminInfo from '@/page/subPage/updateAdminInfo'
import userComment from '@/page/subPage/userComment'
import orderDetail from '@/page/subPage/orderDetail'
import orderInfo from '@/page/subPage/orderInfo'
import Login from '@/page/login'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      // 嵌套路由
      children: [
        {
          // 这里不设置值，是把main作为默认页面
          path: '/',
          name: 'Main',
          component: Main
        },
        {
          path:'/helloVue',
          name:'HelloVue',
          component:HelloWorld
        },
        {
          // 会员管理
          path: '/user',
          name: 'User',
          component: User
        },
        {
          //商品类别页
          path:'/type',
          name:'typeInfo',
          component:Type
        },
        {
          // 商品信息管理
          path: '/product',
          name: 'productInfo',
          component: ProductInfo
        },
        {
        //  修改管理员信息
          path: '/updateAdminInfo',
          name: 'updateAdminInfo',
          component: UpdateAdminInfo
        },
        {
        //  用户留言页
          path: '/userComment',
          name: 'userComment',
          component: userComment
        },
        {
        //  订单明细页
          path: '/orderDetail',
          name: 'orderDetail',
          component: orderDetail
        },
        {
        //  订单明细页
          path: '/orderInfo',
          name: 'orderInfo',
          component: orderInfo
        },

      ]
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    }
  ]
})
