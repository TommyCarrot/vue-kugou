import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    headNav: 'head-nav1',
    currentAudio: {
      img: 'http://m.kugou.com/v3/static/images/index/logo_kugou.png',
      title: '',
      singer: '',
      url: ''
    },
    audioList: []
  },
  getters: {

  },
  mutations: {
    SET_CURRENT_AUDIO (state, audio) {
      state.currentAudio = audio
    },
    SET_AUDIO_LIST (state,audioList) {
      state.audioList = audioList
    }
  },
  actions: {
    loadAudioList({ commit },audioList){
      commit('SET_AUDIO_LIST',audioList)
    }
  }
});

export default store
