<template>
  <div>
    <router-link id="back" to="/">Back</router-link>
    <h1>{{title}}</h1>
    <span>{{descriptions}}</span>
    <ul>
      <li v-for='link in links'></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data () {
    return {
      title: 'Blog',
      descriptions: 'I hightly doubt I will post any updates here 🌬️',
      posts: [
        {
          title: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/global.scss";
</style>
