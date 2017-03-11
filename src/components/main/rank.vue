
<template>
  <div>
    <mt-cell  v-for="(item,index) in rankList" :title="item.pageTop.pageTopTitle" @click.native="openRank(index)" is-link>
      <img slot="icon" :src="item.pageTop.pageTopImg" class="rank_img" width="60" height="60">
    </mt-cell>
  </div>
</template>

<script>

  import  { rank_json } from 'jsons/index'
  export default {
    name: 'rank',
    data () {
      return {
          age:0,
          rankList:rank_json
      }
    },
    methods: {
      openRank (index) {
        this.$store.commit('SET_PAGE_ID', index)
        this.$router.push('rank/base/'+index);
      }
    }
  }
</script>

