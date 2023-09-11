import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/test',
    //   name: 'home',
    //   component: () => import('../components/TheWelcome.vue')
    // },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TheRegister.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TheLogin.vue')
    },
    {
      path: '/app',
      name: 'app',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/app/MainApp.vue'),
      children: [
        // {
        //   path: 'inbox',
        //   name: 'app-inbox',
        //   component: () => import('../components/app/TheInbox.vue')
        // },
        {
          path: 'upcoming',
          name: 'app-upcoming',
          component: () => import('../components/app/TheNew.vue')
        },
        {
          path: 'filters-labels',
          name: 'app-filters-labels',
          component: () => import('../components/app/TheFilter.vue')
        },
        {
          path: 'project/:idProject',
          name: 'app-inbox',
          component: () => import('../components/app/The-Project/TheInbox.vue'),
          children: [
            {
              path: 'task/:idTask',
              name: 'project-task-detail',
              component: () => import('../components/UI/Modal/TheTask.vue')
            },
            {
              path: 'comments',
              name: 'project-comments',
              component: () => import('../components/UI/Modal/TheComments.vue')
            }
          ]
        },
        {
          path: 'project',
          name: 'app-project',
          component: () => import('../components/app/The-Project/TheProject.vue')
        },
        {
          path: 'today',
          name: 'app-today',
          component: () => import('../components/app/TheToday.vue'),
          children: [
            {
              path: 'task/:idTask',
              name: 'today-task-detail',
              component: () => import('../components/app/TodayTask.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/app/TheNew.vue')
    },
    {
      path: '/filters-and-labels',
      name: 'filters-and-labels',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/app/TheFilter.vue')
    },
    {
      path: '/project',
      name: 'project',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/app/The-Project/TheProject.vue')
    },
    {
      path: '/test',
      name: 'test',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TheTest.vue')
    }
  ]
})

export default router
