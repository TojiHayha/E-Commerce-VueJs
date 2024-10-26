import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import Product from '../views/Product/Product.vue'
import Category from '../views/Category/Category.vue'
import AddProduct from '../views/Product/AddProduct.vue'
import EditCategory from '../views/Category/EditCategory.vue'
import EditProduct from '../views/Product/EditProduct.vue'
import ShowDetails from '../views/Product/ShowDetails.vue'
import ShowProducts from '../views/Category/ShowProducts.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory

  },
  {
    path: '/admin/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/product/show/:id',
    name: 'ShowDetails',
    component: ShowDetails
  },
  {
    path: '/category/show/:id',
    name: 'ShowProducts',
    component: ShowProducts
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
