import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // {
  //   path: '/',
  //   name: 'main',
  //   component: () => import('@/pages/MainPage.vue')
  // },
  {
    path: '/',
    name: 'orgs',
    component: () => import('@/pages/OrgsPage.vue')
  },
  {
    path: '/orgs/:id',
    name: 'orgsById',
    component: () => import('@/pages/OrgInfoPage.vue'),
  },
  {
    path: '/orgs/dishes/:id',
    name: 'dishes',
    component: () => import('@/pages/DishesPage.vue')
  },
  {
    path: '/create/org',
    name: 'createOrg',
    component: () => import('@/pages/CreateOrgPage.vue')
  },
  {
    path: '/create/:id/category',
    name: 'createCategory',
    component: () => import('@/pages/CreateCategoryPage.vue')
  },
  {
    path: '/create/:id/dish',
    name: 'createDish',
    component: () => import('@/pages/CreateDishPage.vue')
  },
  {
    path: '/edit/dish/:id',
    name: 'editDish',
    component: () => import('@/pages/EditDishPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
