<template>
  <div>
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
    <div ref = 'root'>
      <nuxt/>
    </div>
  </div>

</template>

<script>



export default {
  data() {
    return {
      nightTheme : this.$store.state.turner.themeIsLight,
      isRussian : this.$store.state.turner.langIsRussian,
      rotateStep : 0
    }
  },
  methods : {
    changeLang() {
      const content = this.$refs.root.querySelector('.content')
      const SharapaLogo = this.$refs.root.querySelector('.main-logo')

      SharapaLogo.style.transform = `rotate(${this.rotateStep + 360}deg)`
      content.style.width = '0px'
      this.rotateStep += 360

      setTimeout(() => {
          content.style.width = '100%'
      }, 800)

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
