<template>
  <div class="container">
    <app-header></app-header>
    <app-form></app-form>
    <app-bookmarks></app-bookmarks>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Form from './Form.vue'
import Bookmarks from './Bookmarks.vue'
import Footer from './Footer.vue'
// import { eventBus } from '../main'

export default {
  name: 'Bookmarker',
  components: {
    'app-header': Header,
    'app-form': Form,
    'app-bookmarks': Bookmarks,
    'app-footer': Footer
  },
  created () {
    // eventBus.$on('bookmarkCreated', (data) => {
    //   // console.log('bookmarkCreated received with', JSON.stringify(data))
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
