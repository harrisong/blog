<template>
  <div>
    <router-link id="back" to="/">Back</router-link>
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
#back {
  position: absolute;
  top: 30px;
  left: 30px;
}
#avatar {
  width: 200px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}
</style>
