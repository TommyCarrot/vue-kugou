import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    headNav: 'index',
    isShowTopNav: true,
    pageId: -1,
    currentAudioIndex: -1,
    audioList: [],
    pageTopInfo: {
      pageTopTitle: '',
      pageTopImg: '',
      pageTopExtra: ''
    }
  },
  getters: {

  },
  mutations: {
    SET_HEAD_NAV (state,nav) {
      state.headNav = nav
    },
    SET_SHOW_TOP_NAV (state,show) {
      state.isShowTopNav = show
    },
    SET_CURRENT_AUDIO (state, index) {
      state.currentAudioIndex = index
    },
    SET_AUDIO_LIST (state,audioList) {
      state.audioList = audioList
    },
    SET_MAIN_TOP_INFO (state, info) {
      state.pageTopInfo.pageTopTitle = info.pageTopTitle
      state.pageTopInfo.pageTopImg = info.pageTopImg
      state.pageTopInfo.pageTopExtra = info.pageTopExtra
    },
    SET_PAGE_ID (state, id) {
      state.pageId = id;
    }
  },
  actions: {
    loadAudio({ commit }, index) {
      commit('SET_CURRENT_AUDIO', index)
    },
    loadAudioList({ commit }, audioList){
      commit('SET_AUDIO_LIST', audioList)
    },
    loadMainTopInfo({commit},info) {
      commit('SET_MAIN_TOP_INFO',info)
    }
  }
});

export default store
