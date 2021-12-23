<template>
  <div id='root'>
<!--    <img class='theme-turner' src = '../static/moon.svg' v-show = '!nightTheme' @click = 'changeTheme'/>-->
<!--    <img class = 'theme-turner' src ='../static/sun.svg' v-show="nightTheme" @click = 'changeTheme'/>-->
        <div class = 'flag-container' @click = 'changeLang'>
          <div class = 'flag' v-show = 'isRussian'>
            <img src = '../static/russia.svg'/>
          </div>
          <div class ='flag' v-show = '!isRussian'>
            <img src = '../static/UK.svg'/>
          </div>
        </div>
    <div>
      <nuxt/>
    </div>
  </div>

</template>

<script>



export default {
  data() {
    return {
      nightTheme : this.$store.state.turner.themeIsLight,
      isRussian : this.$store.state.turner.langIsRussian
    }
  },
  methods : {
    changeLang() {
      this.$store.commit('turner/changeLang');
      this.isRussian = this.$store.state.turner.langIsRussian
    },
    changeTheme() {
      // this.nightTheme = !this.nightTheme;

      const html = document.querySelector('html')
      if (this.nightTheme) {
          html.style.backgroundColor = '#3A424B'
      }
      else {
        console.log(1)
        html.style.backgroundColor = 'rgb(238, 240, 244)'
      }
    }
  }
}

</script>
