<template>
  <div>
    <router-link id="back" to="/blog">Back</router-link>
    <div v-html="content"></div>
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
    }
  },
  computed: {
    content () {
      let id = this.$route.params.id.toString()
      return parsedPosts[id].html
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/global.scss";
</style>
