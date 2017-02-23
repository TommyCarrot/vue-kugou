<template>
<div class="header-nav-container">
  <mt-navbar v-model="headNav">
    <mt-tab-item id="head-nav1" @click.native="goNav(1)">新歌</mt-tab-item>
    <mt-tab-item id="head-nav2" @click.native="goNav(2)">排行</mt-tab-item>
    <mt-tab-item id="head-nav3" @click.native="goNav(3)">歌单</mt-tab-item>
    <mt-tab-item id="head-nav4" @click.native="goNav(4)">歌手</mt-tab-item>
  </mt-navbar>
</div>
</template>

<script>

  export default {
    name: 'head-nav',
    data: function () {
      return {
        headNav: 'head-nav1'
      }
    },
    components: {},
    methods: {
      goNav(index){
        switch (index) {
          case 1 :
            this.$router.push({path: 'index'});
            break;
          case 2 :
            this.$router.push({path: 'rank'});
            break;
          case 3 :
            this.$router.push({path: 'song-list'});
            break;
          case 4 :
            this.$router.push({path: 'singer'});
            break;
        }
      }
    }
  }
</script>

<style>

  .header-nav-container {
    padding: 0 .7143rem;
  }

  .mint-tab-item {
    padding: 12px 0 !important;
    margin-bottom: .2143rem !important;
  }

  .mint-tab-item-label {
    font-size: 1.1429rem !important;
  }
</style>
