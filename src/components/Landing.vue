<template>
  <div class="hello">
    <h1>{{ authorName }}</h1>
    <span>{{ descriptions }}</span>
    <p></p>
    <img src="https://media.giphy.com/media/EbBSfrxBz4MNO/giphy.gif" alt="" />
    <ul>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {
      authorName: 'Harrison Ng',
      descriptions: 'I make bugs, and (maybe) sometimes, I (accidentally) fix some'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
  + span {
    font-style: italic;
  }
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
  color: #8F616E;
}
</style>
