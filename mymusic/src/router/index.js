import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home.vue'
import Like from '@/components/like.vue'
import Play from '@/components/play.vue'
import Upload from '@/components/upload.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/like',
      name:'Like',
      component:Like
    },
    {
      path:'/play',
      name:'Play',
      component:Play
    },
    {
      path:'/upload',
      name:'Upload',
      component:Upload
    },
  ]
})
