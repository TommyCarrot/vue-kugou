<template>
  <div>
    <li @click="openRank('酷狗飙升榜')">酷狗飙升榜</li>
    <li @click="openRank('酷狗TOP500')">酷狗TOP500</li>
    <li @click="openRank('网络红歌榜')">网络红歌榜</li>
  </div>
</template>

<script>

  export default {
    name: 'rank',
    methods: {
      openRank(rank) {
        this.$store.commit('SET_PAGE_ID', rank)
        this.$router.push({ name: 'test', params: { pageId: rank }});
      }
    }
  }
</script>
<!-------------------------------------------------------------------->
<!--<template>-->
  <!--<div class="container rank">-->
    <!--&lt;!&ndash;<mt-cell  v-for="(item,index) in songList" :title="item.title"  :to="item.location" is-link>&ndash;&gt;-->
      <!--&lt;!&ndash;<img slot="icon" :src="item.imgUrl" width="60" height="60">&ndash;&gt;-->
    <!--&lt;!&ndash;</mt-cell>&ndash;&gt;-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->

  <!--import  { rank_json, song_list_json, singer_json } from 'jsons/index'-->
  <!--import { mapState } from 'vuex'-->

  <!--for (let prop in rank_json) {-->
    <!--if (!rank_json.hasOwnProperty(prop))-->
      <!--continue;-->
    <!--console.log(prop)-->
  <!--}-->

  <!--export default {-->
    <!--name: 'rank',-->
    <!--data () {-->
      <!--return {-->
          <!--rankList(){-->
            <!--return-->
          <!--}-->
      <!--}-->
    <!--},-->
    <!--created () {-->
<!--//      this.$store.dispatch('loadAudioList',songs_json);-->
    <!--},-->
    <!--computed: {-->
      <!--...mapState({-->

      <!--})-->
    <!--},-->
    <!--methods: {-->
      <!--playAudio (index) {-->
        <!--this.$store.dispatch('loadAudio',index)-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style>-->
  <!--.mint-swipe {-->
    <!--height: 39vw !important;-->
  <!--}-->
  <!--.mint-swipe img {-->
    <!--width: 100%;-->
    <!--height: 100%;-->
  <!--}-->

  <!--.mint-cell-wrapper {-->
    <!--height: 4.0714rem !important;-->
    <!--font-size: 1rem !important;-->
    <!--padding-left: 1rem !important;-->
  <!--}-->


  <!--.songs-list img {-->
    <!--width: 1.0rem;-->
  <!--}-->


<!--</style>-->

