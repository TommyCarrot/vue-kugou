<template>
<div class="header-nav-container">
  <mt-navbar v-model="currentNav">
    <mt-tab-item id="index" >新歌</mt-tab-item>
    <mt-tab-item id="rank" >排行</mt-tab-item>
    <mt-tab-item id="song-list" >歌单</mt-tab-item>
    <mt-tab-item id="singer" >歌手</mt-tab-item>
  </mt-navbar>
</div>
</template>

<script>

  export default {
    name: 'head-nav',
    computed: {
      currentNav: {
        // getter
        get: function () {
          return this.$store.state.headNav //set current selected nav from state
        },
        // setter
        set: function (nav) {
          this.$store.commit('SET_HEAD_NAV', nav)//set state nav when click nav items
          this.$router.push({path: nav});//goto specified page when click
        }
      }
    },
    components: {},
  }
</script>

<style>

  .header-nav-container {
    padding: 0 .7143rem;
    background: #fff;
  }

  .mint-tab-item {
    padding: 12px 0 !important;
    margin-bottom: .2143rem !important;
  }

  .mint-tab-item-label {
    font-size: 1.1429rem !important;
  }
</style>
