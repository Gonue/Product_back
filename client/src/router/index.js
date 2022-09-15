import {
   createRouter, createWebHistory 
  } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ProductCreate from '../views/ProductCreate.vue'
import ProductMain from '../views/ProductMain.vue'
import PLogin from '../views/PLogin.vue'
import PRegister from '../views/PRegister.vue'
import ProductLast from '../views/ProductLast.vue'



const routes = [{
    path: '/',
    name: 'ProductMain',
    component: ProductMain
  },
  {
    path: '/detail',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/admin',
    name: 'ProductCreate',
    component: ProductCreate
  },
  {
    path: '/menu_list',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/login',
    name: 'PLogin',
    component: PLogin
  },
  {
    path: '/register',
    name: 'PRegister',
    component: PRegister
  },
  {
    path: '/last',
    name: 'ProductLast',
    component: ProductLast
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
