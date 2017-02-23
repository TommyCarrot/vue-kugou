<template>
<div class="player-container">
  <audio :src="audio.url" autoplay id="audioPlay"></audio>
  <div class="audio-panel">
    <img alt="" class="player-img" :src="audio.img" @click="showDetailPlayer()">
    <div class="player-info" @click="showDetailPlayer()">
      <p class="player-title">{{audio.title}}</p>
      <p class="player-singer">{{audio.singer}}</p>
    </div>
    <div class="player-controls">
      <!--the style of control button is opposite to audio playing status.-->
      <span class="player-Pause" @click="toggleStatus()" :class="{ 'player-Play': !isPlay }"></span>
      <span class="player-nextSong" @click="next()"></span>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'player',
    data () {
      return {
        isPlay: true //auto play.
      }
    },
    computed: {
      audio () {
        this.isPlay = true;//when the current audio is changed, initial the status to default.
        return this.$store.state.currentAudio
      }
    },
    methods: {
      showDetailPlayer () {
      },
      toggleStatus () {
        if(this.audio.title=='')
          return;
        if (this.isPlay) {
          document.getElementById('audioPlay').pause();
          this.isPlay = false;
        } else {
          document.getElementById('audioPlay').play();
          this.isPlay = true;
        }
      },
      next () {
        this.$store.commit('SET_CURRENT_AUDIO',this.audioList[index])
      }
    }
  }
</script>

<style scoped>
  .player-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .audio-panel {
    z-index: 999;
    width: 100%;
    height: 4rem;
    background-color: rgba(0,0,0,0.8);
    padding: 0.4rem;
  }
  .player-img {
    float: left;
    height: 100%;
    max-width: 100%;
  }
  .player-info {
    float: left;
    width: 50%;
    height: 100%;
    margin-left: 3%;
    padding: 5px 0;
    color: #fff;
  }
  .player-title {
    width: 100%;
    font-size: 16px;
    overflow: hidden;
    display: block;
  }
  .player-singer {
    display: block;
    height: 50%;
    width: 100%;
    font-size: .7143rem;
    color: #888;
    padding-top: 2px;
  }
  .player-controls {
    float: left;
    width: 30%;
    height: 100%;
  }
  .player-Pause{
    float: left;
    display: block;
    width: 50%;
    height: 100%;
    background: url("http://m.kugou.com/v3/static/images/index/pause_icon.png") no-repeat center;
    background-size: 70%;
  }
  .player-Play  {
    background: url("http://m.kugou.com/v3/static/images/index/play_icon.png") no-repeat center;
    background-size: 70%;
  }
  .player-nextSong {
    float: left;
    display: block;
    width: 50%;
    height: 100%;
    background: url("http://m.kugou.com/v3/static/images/index/next_icon.png") no-repeat center;
    background-size: 70%;
  }
</style>
