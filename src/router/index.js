import { createRouter, createWebHashHistory } from 'vue-router'
import PanelView from '../views/PanelView.vue'
import question from '../components/question.vue'
import Listaq from '../components/Listaq.vue'
import Detailq from '../components/Detailq.vue'

const routes = [
  {
    path: '/',    name: 'panel',    component: PanelView
  },
  {
    path: '/stars',    name: 'stars',    component: () => import(/* webpackChunkName: "about" */ '../views/StarsView.vue')
  },
  {
    path: '/profile',    name: 'profile',    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/buy',    name: 'buy',    component: () => import('../views/BuyView.vue')
  },
  {
    path:'/questions/:qId', 
    name:'questions', 
    component:()=>import('@/components/questions.vue'),
    children:[
      {
        path:"question",
        component:question
      }
    ]
  },
  {
    path: '/Listaq/:qId',    name: 'Listaq', component:Listaq   
  },
  {
    path: '/Detailq/:qdId',    name: 'Detailq', component:Detailq
  },
  {
    path:"/:catchall(.*)*",name:"notfound", component:() => import('../views/notfoundView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
