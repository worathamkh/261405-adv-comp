<template>
  <div class="jumbotron">
    <form id="myForm">
      <div class="form-group">
        <label>Site Name</label>
        <input type="text" class="form-control" id="siteName" placeholder="Website Name">
      </div>
      <div class="form-group">
        <label>Site URL</label>
        <input type="text" class="form-control" id="siteUrl" placeholder="Website URL">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
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
