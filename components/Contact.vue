<template>
  <table class='navigator-item' ref="contact">
    <td style = 'vertical-align: middle'>
      <img :src = 'resolve_img_url(logoPath)' class='contact-image' width=50 height=50/>
    </td>
  </table>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  props: ['logoPath', 'href'],
  methods : {
    resolve_img_url: function (path) {
      let images = require.context('../static/', false, /\.png$|\.jpg$|\.svg$/)
      return images("./"+path)
    }
  },
  mounted() {
    this.$refs.contact.addEventListener('click', () => {
        location.href = this.href
    })
  }
}

</script>
