import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Topics from '../views/Topics.vue'
import Topic from '../views/Topic.vue'
import TopicAdd from '../views/TopicAdd.vue'
import Items from '../views/Items.vue'
import Item from '../views/Item.vue'
import ItemAdd from '../views/ItemAdd.vue'
import Login from '../views/Login.vue'

// import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias:'/index',
    children:[
        {
        path:'views',
        component:{
            default:Home,
            a:Topics,
            b:Items
        },
        },{
            path:'topic_home',
            component:Topic
        }
    ],
    beforeEnter:(to,from,next)=>{
      let is_Home = window.prompt("验证用户权限")
      if(is_Home){
        next()
      }else{
        next({name:'Login'})
      }
    }
  },
  {
    path: '/topics',
    name: 'Topics',
    component: Topics
  },
  {
    path: '/topics/:id',
    name: 'Topic',
    component: Topic,
    props:()=>{let date = new Date();return{id:date}},
    beforeEnter:(to,from,next)=>{
      if(to.id === 2){
        console.log(to.id);
        next(false)
      }else{
        next()
      }
    }
  },
  {
    path: '/topic_add',
    name: 'TopicAdd',
    component: TopicAdd
  },
  {
    path: '/items',
    name: 'Items',
    component: Items,
    children:[
        {
            path:'itemList',
            component:Item
        },
        {
            path:'itemAdd',
            component:ItemAdd
        }
    ]
  },
  {
    path: '/item',
    name: 'Item',
    component: Item
  },
  {
    path: '/item_add',
    name: 'ItemAdd',
    component: ItemAdd
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
//   {
//     path: '/:pathMatch(.*)*',
//     name: 'NotFound',
//     component: NotFound
//   }
{
    path: '/:pathMatch(.*)*',
    redirect:{name:'Home'}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   let is_routerIn = window.confirm("是否确定进入")
//   if (is_routerIn) next()
//   else next()
// })

export default router
