<template>
  <div id="head-container">
    <header-top></header-top>
    <header-nav v-show="isShowTopNav"></header-nav>
    <headerBack v-show="!isShowTopNav"></headerBack>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import headerTop from './header-top'
  import headerNav from './header-nav'
  import headerBack from './header-back'

  export default {
    name: 'header',
    computed: {
      ...mapState([ 'isShowTopNav'])
    },
    components: { headerTop, headerNav, headerBack }
  }
</script>

<style scoped>
  #head-container {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
  }
</style>
