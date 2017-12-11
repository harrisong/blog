<template>
  <div>
    <router-link id="back" to="/">Back</router-link>
    <h1>{{title}}</h1>
    <span>{{descriptions}}</span>
    <ul class="container">
      <li class="post" v-for='post in posts'>
        <div class="postMeta">
          <h3><router-link v-bind:to="'/blog/' + post.id">{{post.title}}</router-link></h3>
          <div class="date">{{post.date}}</div>
        </div>
        <div>
          {{post.shortDescriptions}}
        </div>
      </li>
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
          id: 0,
          title: 'First post',
          date: '2017-12-10',
          shortDescriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc elit, egestas ut lacus feugiat, vehicula ultricies ligula. Integer dictum luctus orci, quis euismod nisl maximus quis. In a velit lobortis, laoreet massa rutrum, tempor ex. Proin fermentum elementum dolor nec bibendum. Donec eget sem quam. Integer imperdiet ex eu enim dapibus, vitae commodo tortor dapibus. Cras dapibus ullamcorper bibendum. Suspendisse dapibus libero id nunc congue pretium.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/global.scss";
.post {
  grid-column-start: 2;

  .postMeta {
    display: flex;
    margin: 1.5rem 0;
    h3, .date {
      width: 50%;
      margin: 0;
      line-height: 1rem;
    }
    .date {
      font-style: italic;
      vertical-align: baseline;
      color: $light-blue;
    }
  }

}
</style>
