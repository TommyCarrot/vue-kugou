
<template>
  <div class="container rank">
    <mt-cell  v-for="(item,index) in rankList" :title="item.pageTop.pageTopTitle" @click.native="openRank(index)">
      <img slot="icon" :src="item.pageTop.pageTopImg" class="rank_img" width="60" height="60">
    </mt-cell>
  </div>
</template>

<script>

  import  { rank_json, song_list_json, singer_json } from 'jsons/index'
  import { mapState } from 'vuex'
  console.log(rank_json[0])
  export default {
    name: 'rank',
    data () {
      return {
          rankList:rank_json
      }
    },
    created () {
//      this.$store.dispatch('loadAudioList',songs_json);
    },
    computed: {
      ...mapState({

      })
    },
    methods: {
      openRank (index) {
        this.$store.commit('SET_PAGE_ID', index)
        this.$router.push('rank/test/'+index);
      }
    }
  }
</script>

<style>
  /*.mint-cell-wrapper {*/
  /*position: relative;*/
 /*}*/
  /*.rank_img {*/
    /*display: block;*/
    /*width: 5rem;*/
    /*height: 5rem;*/
  /*}*/
  /*.mint-cell-title img{margin-right: 5px !important;}*/
</style>

