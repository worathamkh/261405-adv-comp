<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <!-- <app-servers></app-servers>
            <app-server-details></app-server-details> -->
        </div>
        <hr>
        <!-- <app-footer></app-footer> -->
    </div>
</template>

<script>
// import local components here!!!
import Header from './Header.vue'

export default {
  name: 'container',
  data() {

  },
  methods: {
    
  },
  components: {
      'app-header': Header,

  }
}
</script>

<style>

</style>
