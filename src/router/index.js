import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/login',
    name:'login',
    component: () => import('../views/login.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  let loginData = store.state.loginData
  if(!loginData && to.name != 'login'){
    next('/login')
    return
  }
  if(loginData && to.name == 'login'){
    next('/')
    return
  }
  next()
})
export default router
