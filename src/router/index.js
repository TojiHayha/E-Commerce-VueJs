import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import Product from '../views/Product/Product.vue'
import Category from '../views/Category/Category.vue'
import AddProduct from '../views/Product/AddProduct.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin/product',
    name: 'AdminProduct',
    component: Product
  },
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProduct
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
