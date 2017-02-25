<template>
  <div class="header-back-container">
    <p class="header-back-title">{{pageTopInfo.pageTopTitle}}</p>
    <div class="header-back-btn" @click="goBack()">
      <i></i>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'header',
    computed: {
      ...mapState([ 'pageTopInfo' ])
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .header-back-container {
    width: 100%;
    line-height: 3rem;
    background: -webkit-linear-gradient(top,rgba(0,0,0,.6),transparent);
    padding: 0 2.2rem;
    position: relative;
    text-align: center;
    color: #fff;
    box-sizing: border-box;
  }
  .header-back-btn {
    width: 2.1rem;
    height: 2.8rem;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    cursor: pointer;
  }
  .header-back-btn i {
    width: .9rem;
    height: 1.4rem;
    margin-top: .7rem;
    display: inline-block;
    background: url("http://m.kugou.com/v3/static/images/index/goback_1.png") no-repeat;
    background-size: 100%;
  }
</style>
