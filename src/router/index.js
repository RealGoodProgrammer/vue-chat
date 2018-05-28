import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Chat from '@/components/Chat'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'NotFoundComponent',
      component: NotFoundComponent
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.name) {
          next()
        } else {
          next({name: 'Login'})
        }
      }
    }
  ]
})
