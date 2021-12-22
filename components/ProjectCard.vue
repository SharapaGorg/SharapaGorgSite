<template>
  <div class = 'project-card backdrop-blue-xl'>
    <div class = 'project-part-1'>
      <img :src='resolve_img_url(projectImg)'/>
    </div>
    <div class = 'project-part-2'>
      <span class = 'project-title'>{{ projectTitle }}</span>
      <img :src = 'resolve_img_url(projectLang)' class = 'project-lang'/>
    </div>
  </div>
</template>


<script>

export default {
  props : ['projectTitle', 'projectImg', 'projectLang'],
  methods : {
    resolve_img_url: function (path) {
      let images = require.context('../static/', false, /\.png$|\.jpg$|\.svg$/)
      return images("./"+path)
    }
  },
}

</script>
<style scoped>

.project-card {
  width : 300px;
  height : 200px;
  background-color: rgb(238, 240, 244);
  border-radius: 20px;
  /*box-shadow: 9.91px 9.91px 15px #D9DADE, -9.91px -9.91px 15px #FFFFFF;*/
  box-shadow: 9.91px 9.91px 15px #CDCED2, -9.91px -9.91px 15px #FFFFFF;
  border : 10px solid rgb(238, 240, 244);
}

.project-title {
  font-family: "Ubuntu", sans-serif;
  display : block;
  text-align : left;
  font-size: 22px;
  color : #3A424B;
  margin-left : 15px;
}

.project-part-1 {
  height : 120px;
  border-radius: 20px;
  box-shadow: inset 16.82px 16.82px 28px #D9DADE, inset -16.82px -16.82px 28px #FFFFFF;

}

.project-part-2 {
  height : 70px;
}

.project-part-1 img {
  margin-left : auto;
  margin-right : auto;
  position : relative;
  top : 18px;
  height : 80px;
}

.project-lang {
    float : right;
    width : 30px;
    height : 30px;
    margin-right : 10px;
}

</style>
