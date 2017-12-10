<template>
  <div>
    <img id="avatar" src="../assets/avatar.jpg">
    <h1>{{title}}</h1>
    <ul>
      <li v-for='link in links'><a :href='link.href'>{{ link.name }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      title: 'Entomologist specialised in code',
      links: [
        {
          name: 'Github',
          href: 'http://github.com/harrisong'
        },
        {
          name: 'Linkedin',
          href: 'https://www.linkedin.com/in/harrison-ng-85958542/'
        }
      ]
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
#avatar {
  width: 200px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}
</style>
