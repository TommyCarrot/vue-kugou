<template>
  <div>
    <div class="hot">
      <mt-cell  v-for="(item,index) in hotSingerList" :title="item.pageTop.pageTopTitle" @click.native="openRank(index)" is-link></mt-cell>
    </div>
    <div class="chinese">
      <mt-cell  v-for="(item,index) in chineseSingerList" :title="item.pageTop.pageTopTitle" @click.native="openRank(index)" is-link></mt-cell>
    </div>
    <div class="japan-korea">
      <mt-cell  v-for="(item,index) in japanKoreaSingerList" :title="item.pageTop.pageTopTitle" @click.native="openRank(index)" is-link></mt-cell>
    </div>
    <div class="western">
      <mt-cell  v-for="(item,index) in westernSingerList" :title="item.pageTop.pageTopTitle" @click.native="openRank(index)" is-link></mt-cell>
    </div>
  </div>
</template>

<script>

  import  { singer_json } from 'jsons/index'
  export default {
    name: 'singer',
    data () {
      return {
        hotSingerList: singer_json.slice(0,1),
        chineseSingerList: singer_json.slice(1,4),
        japanKoreaSingerList: singer_json.slice(4,7),
        westernSingerList: singer_json.slice(7,10)
      }
    },
    methods: {
      openRank (index) {
        this.$store.commit('SET_PAGE_ID', index)
        this.$router.push('singer/base/'+index);
      }
    }
  }
</script>

<style scoped>
  .hot, .chinese, .japan-korea, .western {
    margin-bottom: .7rem;
  }
</style>
