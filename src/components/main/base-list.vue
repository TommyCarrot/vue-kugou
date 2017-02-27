<template>
  <div>
    <div  class="main-top">
      <img :src="pageTopInfo.pageTopImg" alt="">
      <div class="main-top-info" v-if="pageTopInfo.pageTopExtra != ''">
        <span>{{pageTopInfo.pageTopExtra}}</span>
      </div>
    </div>
    <div class="songs-list">
      <mt-cell v-for="(item, index) in audioList" :title="item.singer+' - '+item.title" @click.native="playAudio(index)">
        <img src="http://m.kugou.com/v3/static/images/index/download_icon_2.png" alt="">
      </mt-cell>
    </div>
  </div>
</template>

<script>

  import  { rank_json, song_list_json, singer_json } from 'jsons/index'
  import { mapState } from 'vuex'

  export default {
    name: 'index',
    data () {
      return {
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.$store.commit('SET_SHOW_TOP_NAV',false)
        switch ( vm.$store.state.headNav )
        {
          case 'rank':
            vm.$store.dispatch('loadMainTopInfo',rank_json[vm.$route.params.pageId].pageTop)
            vm.$store.dispatch('loadAudioList',rank_json[vm.$route.params.pageId].audioList)
            break;
          case 'song-list':
            vm.$store.dispatch('loadMainTopInfo',song_list_json[vm.$route.params.pageId].pageTop)
            vm.$store.dispatch('loadAudioList',song_list_json[vm.$route.params.pageId].audioList)
            break;
          case 'singer':
            vm.$store.dispatch('loadMainTopInfo',singer_json[vm.$route.params.pageId].pageTop)
            vm.$store.dispatch('loadAudioList',singer_json[vm.$route.params.pageId].audioList)
            break;
        }
      })
    },
    beforeRouteLeave (to, from, next) {
      this.$store.commit('SET_SHOW_TOP_NAV',true)
      next()
    },
    computed: {
      ...mapState([ 'audioList','pageTopInfo' ])
    },
    methods: {
      playAudio (index) {
        this.$store.dispatch('loadAudio',index)
      },
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
  .main-top {
    width: 100%;
    height: 12.5rem;
    overflow: hidden;
    position: relative;
  }
  .main-top img {
    display: block;
    width: 100%;
    margin-top: -75px;
  }
  .main-top-info {
    height: 2.8rem;
    width: 100%;
    background: -webkit-linear-gradient(bottom,rgba(0,0,0,.6),transparent);
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .main-top-info span {
    position: absolute;
    bottom: 1.25rem;
    left: 1rem;
    color: #ffe;
    font-size: .8rem;
  }
  .mint-cell-wrapper {
    height: 4.0714rem !important;
    font-size: 1rem !important;
    padding-left: 1rem !important;
  }
  .songs-list img {
    width: 1.0rem;
  }


</style>
