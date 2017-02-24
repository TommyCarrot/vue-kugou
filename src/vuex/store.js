import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    headNav: 'head-nav1',
    currentAudioIndex: -1,
    audioList: []
  },
  getters: {

  },
  mutations: {
    SET_CURRENT_AUDIO (state, index) {
      state.currentAudioIndex = index
    },
    SET_AUDIO_LIST (state,audioList) {
      state.audioList = audioList
    }
  },
  actions: {
    loadAudio({ commit }, index) {
      commit('SET_CURRENT_AUDIO', index)
    },
    loadAudioList({ commit }, audioList){
      commit('SET_AUDIO_LIST', audioList)
    }
  }
});

export default store
