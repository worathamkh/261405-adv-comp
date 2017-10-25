<template>
  <div class="card-columns">
    <div v-for="(site, slug) in bookmarks" class="card">
      <div class="card-block">
        <h3 class="card-title">{{ site.siteName }}</h3>
        <a class="btn btn-primary" target="_blank" :href="site.siteUrl">Visit</a>
        <button class="btn btn-danger" @click.prevent="removeBookmark(site.siteName)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase'

// Initialize Firebase
let config = {
  apiKey: 'AIzaSyDkTMIus0AJthq_fg_PnjgSu5tCJH7wK2Y',
  authDomain: 'vue-http-0597.firebaseapp.com',
  databaseURL: 'https://vue-http-0597.firebaseio.com',
  projectId: 'vue-http-0597',
  storageBucket: 'vue-http-0597.appspot.com',
  messagingSenderId: '896856295883'
}

const firebaseApp = firebase.initializeApp(config)
let bookmarksRef = firebaseApp.database().ref('bookmarks')

export default {
  name: 'Bookmarks',
  data () {
    return {

    }
  },
  firebase: {
    bookmarks: bookmarksRef
  },
  methods: {
    removeBookmark (slug) {
      firebase.database().ref('bookmarks/' + slug).remove()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  padding: 20px;
  display: inline-block;
}
.btn {
  margin: 10px;
}
</style>
