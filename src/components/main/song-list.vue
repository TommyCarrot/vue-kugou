
<template>
  <div>
    <mt-cell  v-for="(item,index) in songList" :title="item.pageTop.pageTopTitle" @click.native="openRank(index)" is-link>
      <img slot="icon" :src="item.pageTop.pageTopImg" class="rank_img" width="60" height="60">
    </mt-cell>
  </div>
</template>

<script>

  import  { song_list_json } from 'jsons/index'
  export default {
    name: 'song-list',
    data () {
      return {
        songList:song_list_json
      }
    },
    methods: {
      openRank (index) {
        this.$store.commit('SET_PAGE_ID', index)
        this.$router.push('song-list/base/'+index);
      }
    }
  }
</script>


