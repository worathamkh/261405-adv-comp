<template>
  <div class="footer">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: '© 2016 Bookmarker, Inc.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
