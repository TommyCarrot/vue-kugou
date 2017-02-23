<template>
  <div id="app">
    <k-header></k-header>
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <player></player>
  </div>
</template>

<script>

  import kHeader from './components/header/head';
  import player from './components/player';

  export default {
    name: 'app',
    components: {
      kHeader, player
    }
  }
</script>

<style>
#app {
  width: 100%;
}
</style>
