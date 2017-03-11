import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'

import Index from 'components/main/index'
import Rank from 'components/main/rank'
import songList from 'components/main/song-list'
import Singer from 'components/main/singer'
import Base from 'components/main/base-list'

Vue.use(Router);

const router = new Router({
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
      path: '/rank/base/:pageId',
      name: 'rank-base',
      component: Base
    },{
      path: '/song-list/base/:pageId',
      name: 'song-list-base',
      component: Base
    },{
      path: '/singer/base/:pageId',
      name: 'singer-base',
      component: Base
    },{
      path:'*',redirect:'/index'
    }
  ]
})

//initial the state when refresh the page
router.beforeEach((to, from, next) => {
  if(to.path.search('rank')!=-1){
    console.log("global router enter")
    store.commit('SET_HEAD_NAV', 'rank')
  } else if(to.path.search('index')!=-1){
    store.commit('SET_HEAD_NAV', 'index')
  } else if(to.path.search('song-list')!=-1){
    store.commit('SET_HEAD_NAV', 'song-list')
  } else if(to.path.search('singer')!=-1){
    store.commit('SET_HEAD_NAV', 'singer')
  }
  store.commit('SET_PAGE_ID', to.params.pageId)
  next()
})

export default router
