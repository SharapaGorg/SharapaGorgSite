<template>
  <div class='project-card' ref='card'>
    <div class='project-preview' v-show='showPreview' ref='projectPreview'>
    </div>
    <div class='project-part-1' v-show="!showPreview">
      <img :src='resolve_img_url(projectImg)'/>
    </div>
    <div class='project-part-2' v-show="!showPreview">
      <span class='project-title'>{{ projectTitle }}</span>
      <span class='tools-inscription'>Tools:</span>
      <img :src='resolve_img_url(tool)' class='project-lang' v-for="tool in projectLang" :key="tool"/>
    </div>
  </div>
</template>


<script>

export default {
  data() {
    return {
      showPreview: false
    }
  },
  props: {
    projectTitle: String,
    projectImg: String,
    projectLang: Array,
    projectPreview: String
  },
  methods: {
    resolve_img_url: function (path) {
      let images = require.context('../static/', false, /\.png$|\.jpg$|\.svg$|\.gif$/)
      return images("./" + path)
    }
  },
  mounted() {
    this.$refs.projectPreview.style.backgroundImage = 'url(' + this.resolve_img_url(this.projectPreview) + ')'

    this.$refs.card.addEventListener('mouseover', () => {
      this.showPreview = true;
    })

    this.$refs.card.addEventListener('mouseout', () => {
      this.showPreview = false;
    })
  }
}

</script>

<style scoped>

.project-card {
  margin-top : 50px;
  width: 300px;
  height: 230px;
  background-color: rgb(238, 240, 244);
  border-radius: 20px;
  box-shadow: 9.91px 9.91px 15px #CDCED2, -9.91px -9.91px 15px #FFFFFF;
  border: 10px solid rgb(238, 240, 244);
}

.project-preview {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 270px;
  height: 170px;
  border-radius: 20px;
  background-position: center;
}


.project-title {
  font-family: "Ubuntu", sans-serif;
  display: block;
  text-align: left;
  font-size: 22px;
  color: #3A424B;
  margin-left: 15px;
}

.project-part-1 {
  height: 120px;
  border-radius: 20px;
  box-shadow: inset 16.82px 16.82px 28px #D9DADE, inset -16.82px -16.82px 28px #FFFFFF;
}

.project-part-2 {
  height: 70px;
}

.project-part-1 img {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 18px;
  height: 80px;
}

.project-lang {
  float: right;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  margin-top : 20px;
}

.tools-inscription {
  box-shadow: inset 9.91px 9.91px 15px #D9DADE, inset -9.91px -9.91px 15px #FFFFFF;
  font-family: "Ubuntu", sans-serif;
  border-radius : 10px;
  position : relative;
  top : 20px;
  margin-left: 15px;
  color : #3A424B;
  @apply px-3 py-1;
}

</style>
