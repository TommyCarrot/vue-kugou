<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="http://imge.kugou.com/mobilebanner/20170210/20170210205650370656.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://m.kugou.com/v3/static/images/index/banner.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://imge.kugou.com/mobilebanner/20170217/20170217102514497603.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <div class="songs-list">
      <mt-cell v-for="(item, index) in audioList" :title="item.singer+' - '+item.title" @click.native="playAudio(index)">
        <img src="http://m.kugou.com/v3/static/images/index/download_icon_2.png" alt="">
      </mt-cell>
    </div>

  </div>
</template>

<script>

//  import  { index_json } from 'jsons/index'
  import { mapState } from 'vuex'

  export default {
    name: 'index',
    data () {
        return {
        }
    },
    created () {
//        this.$store.dispatch('loadAudioList',index_json);
//localhost:5000
//http://tommyibi.duapp.com
      this.$http.get('http://localhost:5000/api/kugou/indexList').then(
        respone => this.$store.dispatch('loadAudioList',respone.body)
      )
    },
    computed: {
      ...mapState({
        audioList: state => state.audioList
      })
    },
    methods: {
      playAudio (index) {
          this.$store.dispatch('loadAudio',index)
      }
    }
  }
</script>

<style  scoped>
  .mint-swipe {
    height: 39vw !important;
  }
  .mint-swipe img {
    width: 100%;
    height: 100%;
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
