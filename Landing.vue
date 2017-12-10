<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>{{ descriptions }}</span>
    <ul>
      <li><a href="/about">About</a></li>
      <li><a href="/blog">Blog</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Harrison Ng',
      descriptions: 'I make bugs, then I fix some'
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
  color: #EEAC7A;
}
</style>
