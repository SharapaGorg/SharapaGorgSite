<template>
  <div class = 'model-container'>
      <div class = 'model' ref = 'model'>1</div>
  </div>
</template>

<script>

export default {
  mounted() {
      setTimeout(() => {
        this.$refs.model.style.transform = 'rotate(360deg)'
      }, 100)
  }
}

</script>

<style scoped>

.model {
  height : 100px;
  width : 100px;
  background : blue;
  margin-top : 50px;
  transition : all 0.75s linear;
  border-radius: 100%;
}

.model-container {
  width : 100px;
  height : 100px;
  margin-left : auto;
  margin-right : auto;
  border-radius: 100%;
  background-color: rgb(238, 240, 244);
  box-shadow: 90.91px 90.91px 150px #000000, -90.91px -90.91px 150px #000000;
}

</style>
