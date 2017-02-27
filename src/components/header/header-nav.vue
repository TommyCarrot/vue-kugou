<template>
<div class="header-nav-container">
  <mt-navbar v-model="currentNav">
    <mt-tab-item id="index" >新歌</mt-tab-item>
    <mt-tab-item id="rank" >排行</mt-tab-item>
    <mt-tab-item id="head-nav3" >歌单</mt-tab-item>
    <mt-tab-item id="head-nav4" >歌手</mt-tab-item>
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
          return this.$store.state.headNav
        },
        // setter
        set: function (nav) {
          this.$store.commit('SET_HEAD_NAV', nav)
          this.$router.push({path: nav});
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
