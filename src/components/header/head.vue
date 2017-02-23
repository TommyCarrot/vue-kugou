<template>
  <div>
    <header-top></header-top>
    <header-nav></header-nav>
  </div>
</template>

<script>
  import headerTop from './header-top'
  import headerNav from './header-nav'

  export default {
      name: 'header',
      components: { headerTop, headerNav }
  }
</script>
