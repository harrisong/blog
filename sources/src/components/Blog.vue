<template>
  <div>
    <router-link id="back" to="/">Back</router-link>
    <h1>{{title}}</h1>
    <span>{{descriptions}}</span>
    <ul class="container">
      <li class="post" v-for='(post, index) in posts'>
        <div class="postMeta">
          <h3><router-link :to="'/blog/' + index">{{post.meta.title}}</router-link></h3>
          <div class="date">{{post.meta.created_at}}</div>
        </div>
        <div class="body" v-html="post.meta.descriptions"></div>
      </li>
    </ul>
  </div>
</template>

<script>
function requireAll (requireContext) {
  return requireContext.keys().map(requireContext)
}

var Posts = requireAll(require.context('@/posts/', false, /\.md$/))
var parsedPosts = Posts.map(post => JSON.parse(post))

export default {
  name: 'Blog',
  data () {
    return {
      title: 'Blog',
      descriptions: 'I hightly doubt I will post any updates here 🌬️',
      posts: parsedPosts
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/global.scss";
@import "../scss/post.scss";
</style>
