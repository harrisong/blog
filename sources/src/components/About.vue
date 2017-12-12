<template>
  <div>
    <router-link id="back" to="/">Back</router-link>
    <img id="avatar" src="../assets/avatar.jpg">
    <h1>{{title}}</h1>
    <span>{{descriptions}}</span>
    <ul>
      <li v-for='link in links'><a :href='link.href' :id="link.name" target="blank">{{ link.name }}</a></li>
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
@import "../scss/global.scss";
a {
  &#Github, &#Linkedin {
    display: inline-block;
    font-size: 0;
    background-size: 16px 16px;
    width: 16px;
    height: 16px;
    filter: blur(3px);
    &:hover {
      filter: blur(0px);
      border-bottom: 0;
    }
  }
  &#Github {
    background-image: url('../assets/github.png');
  }
  &#Linkedin {
    background-image: url('../assets/linkedin.svg');
  }
}
#avatar {
  width: 200px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  filter: blur(3px);
  &:hover {
    filter: blur(0px);
  }
}
</style>
