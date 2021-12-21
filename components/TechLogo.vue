<template>
    <div class = 'logo-container'>
      <img :src="resolve_img_url(logoPath)" class = 'small-logo'/>
    </div>
</template>

<script>

export default {
  name : 'TechLogo.vue',
  data() {
    return {

    }
  },
  props: ['logoPath'],
  methods : {
    resolve_img_url: function (path) {
      let images = require.context('../static/', false, /\.png$|\.jpg$|\.svg$/)
      return images("./"+path)
    }
  }
}

</script>
