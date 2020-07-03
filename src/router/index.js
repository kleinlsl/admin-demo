import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/page/layout'
import Main from '@/page/main'
import User from '@/page/subPage/user'
import Category from '@/page/subPage/category'
import Type from '@/page/subPage/type'
import ProductInfo from '@/page/subPage/productInfo'



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
          //老师的模板
          path: '/category',
          name: 'categoryinfo',
          component: Category
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

      ]
    }
  ]
})
