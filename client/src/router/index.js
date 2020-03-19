import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board'
import VueChartJS from '@/components/VueChartJS'
Vue.use(Router)

export default new Router({
  routes: [
      {
          path : '/',
          name : 'Board',
          component : Board
      },
      {
        path : '/VueChartJS',
        name : 'VueChartJS',
        component : VueChartJS
    }
  ]
})