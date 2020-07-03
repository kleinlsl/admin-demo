// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 使用
Vue.use(ElementUI);

Vue.config.productionTip = false;


//全局钩子函数，在每个路由切换前工作
router.beforeEach((to, from, next) => {

  // 登录界面登录成功之后，会把用户信息保存在会话
  // 存在时间为会话生命周期，页面关闭即失效。
  //alert(JSON.stringify(to))
  let userName = sessionStorage.getItem('user')

  if (to.path === '/login') {
    // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
    if(userName) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (!userName) {
      // 如果访问非登录界面，且户会话信息不存在，代表未登录，则跳转到登录界面
      next({ path: '/login' })
    } else {
      // 加载动态菜单和路由
      //addDynamicMenuAndRoutes(userName, to, from)
      next()
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
