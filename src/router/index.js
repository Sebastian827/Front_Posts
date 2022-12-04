import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GetCategory from '../components/category/GetCategory.vue'
import CreateCategory from '../components/category/CreateCategory.vue'
import EditCategory from '../components/category/EditCategory.vue'
import GetPosts from '../components/posts/GetPosts.vue'
import CreatePost from '../components/posts/CreatePost.vue'
import EditPost from '../components/posts/EditPost.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/getCategories',
    name: 'getCategory',
    component:GetCategory

  },
  {
    path:'/createCategory',
    name: 'CreateCategory',
    component:CreateCategory

  },
  {
    path:'/editCategory/:id',
    name: 'EditCategory',
    component:EditCategory

  },
  {
    path:'/getPosts',
    name: 'getPosts',
    component:GetPosts

  },
  {
    path:'/createPost',
    name: 'createPost',
    component:CreatePost

  },
  {
    path:'/editPost/:id',
    name: 'editPost',
    component:EditPost

  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
