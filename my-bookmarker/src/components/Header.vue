<template>
  <div class="header">
    <h1>{{ brand }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      brand: 'Bookmarker'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
