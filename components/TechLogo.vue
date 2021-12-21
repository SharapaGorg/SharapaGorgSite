<template>
    <div class = 'logo-container' ref = 'logo'>
      <img :src="resolve_img_url(logoPath)" class = 'small-logo'/>
      <div class = 'tech-title'>{{ logoTitle }}</div>
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
  }
}

</script>

<style scoped>

.tech-title {
  position : relative;
  bottom : 105px;
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

.logo-container:hover .tech-title {
  opacity : 1;
  transition : all .5s linear;

}

</style>
