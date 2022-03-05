<template>
    <div class = 'logo-container' ref = 'logo' :style="ThemeStyle">
      <img :src="resolve_img_url(logoPath)" class = 'small-logo' alt=""/>
      <div class = 'tech-title_'>{{ logoTitle }}</div>
    </div>
</template>

<script>

export default {
  name : 'TechLogo.vue',
  props: ['logoPath', 'logoTitle', 'href'],
  methods : {
    resolve_img_url: function (path) {
      let images = require.context('../static/', false, /\.png$|\.jpg$|\.svg$/)
      return images("./"+path)
    }
  },
  mounted() {
      this.$refs.logo.addEventListener('click', () => {
        location.href = this.href
      })
  },
  computed: {
    ThemeStyle() {
      if (this.$store.state.turner.themeIsLight) {
        return {
          backgroundColor: this.$store.state.lightBackground,
          boxShadow: this.$store.state.lightInsetShadow
        }
      } else {
        return {
          backgroundColor: this.$store.state.darkBackground,
          boxShadow: this.$store.state.darkInsetShadow
        }
      }
    }
  }
}

</script>

<style scoped>

.tech-title_ {
  text-align : center;
  height : 75px;
  width : 250px;
  background : rgb(58, 66, 75);
  opacity: 0;
  transition : all .5s linear;
  font-family:  'Ubuntu', sans-serif;
  font-size : 25px;
  color :  rgb(238, 240, 244);
}

.logo-container:hover .tech-title_ {
  opacity : 1;
  transition : all .5s linear;

}

</style>
