<template>
  <div id="app">
    <k-header></k-header>
    <div :class="[isShowTopNav ?  'show' : 'hide' ]">
      <keep-alive>
        <router-view>
        </router-view>
      </keep-alive>
    </div>
    <player></player>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import kHeader from './components/header/head';
  import player from './components/player';

  export default {
    name: 'app',
    components: {
      kHeader, player
    },
    computed: {
      ...mapState([ 'isShowTopNav'])
    }
  }
</script>

<style>
  #app {
    width: 100%;
  }
  .show {
    padding-top: 6rem;
  }
  .hide {
    padding-top: 3rem;
  }
</style>
