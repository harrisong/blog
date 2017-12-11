<template>
  <div>
    <router-link id="back" to="/blog">Back</router-link>
    <h1>{{title}}</h1>
    <span>{{descriptions}}</span>
    <div>
      {{body}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data () {
    return {
      title: 'First post',
      descriptions: 'Some text here',
      body: 'Some content here'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/global.scss";
</style>
