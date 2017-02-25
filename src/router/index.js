import Vue from 'vue'
import Router from 'vue-router'

import Index from 'components/main/index'
import Rank from 'components/main/rank'
import songList from 'components/main/song-list'
import Singer from 'components/main/singer'
import Test from 'components/main/base-list'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    }, {
      path: '/rank',
      name: 'rank',
      component: Rank
    }, {
      path: '/song-list',
      name: 'song-list',
      component: songList
    }, {
      path: '/singer',
      name: 'singer',
      component: Singer
    }, {
      path: '/test/:pageId',
      name: 'test',
      component: Test
    },{
      path:'*',redirect:'/index'
    }
  ]
})
