<template>
  <div>
    <router-link id="back" to="/">Back</router-link>
    <img id="avatar" src="../assets/avatar.jpg">
    <h1>{{title}}</h1>
    <span>{{descriptions}}</span>
    <ul>
      <li v-for='link in links'><a :href='link.href' target="blank">{{ link.name }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      title: 'Entomologist',
      descriptions: 'Specialised in 🐞',
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
