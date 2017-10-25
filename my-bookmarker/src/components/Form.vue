<template>
  <div class="jumbotron">
    <form v-on:submit.prevent="validateBeforeSubmit" method="POST">
      <div class="form-group" :class="{'has-error': errors.has('alpha_num') || errors.has('alpha_spaces') }" >
        <label class="control-label" for="siteName">Site Name</label>
        <input v-model="siteName" v-validate.initial="siteName" data-vv-rules="required|alpha_num|alpha_spaces" type="text" class="form-control" placeholder="Website Name">
        <p class="text-danger" v-if="errors.has('alpha_num')">{{ errors.first('alpha_num') }}</p>
        <p class="text-danger" v-else-if="errors.has('alpha_spaces')">{{ errors.first('alpha_spaces') }}</p>
      </div>
      <div class="form-group" :class="{'has-error': errors.has('url') }" >
        <label class="control-label" for="siteUrl">Site URL</label>
        <input v-model="siteUrl" v-validate.initial="siteUrl" data-vv-rules="required|url" type="text" class="form-control" placeholder="Website URL">
        <p class="text-danger" v-if="errors.has('url')">{{ errors.first('url') }}</p>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
// import { eventBus } from '../main'
import * as firebase from 'firebase'
import * as slugify from 'slugify'

export default {
  name: 'Form',
  data () {
    return {
      siteName: '',
      siteUrl: ''
    }
  },
  methods: {
    validateBeforeSubmit (event) {
      this.$validator.validateAll()
      if (!this.errors.any()) {
        firebase.database().ref('bookmarks/' + slugify(this.siteName)).set({
          siteName: this.siteName,
          siteUrl: this.siteUrl
        })

          // this.submitForm()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
