<template>
  <div class="overflow-hidden"  :style="ThemeStyle">
        <img class='theme-turner' src = '../static/moon.svg' v-show = '!nightTheme' @click = 'changeTheme'/>
        <img class = 'theme-turner' src ='../static/sun.svg' v-show="nightTheme" @click = 'changeTheme'/>
    <div class='flag-container' @click='changeLang' :style="ThemeStyle">
      <div class='flag' v-show='isRussian'>
        <img src='../static/russia.svg'/>
      </div>
      <div class='flag' v-show='!isRussian'>
        <img src='../static/UK.svg'/>
      </div>
    </div>
    <div ref='root'>
      <nuxt/>
    </div>

    <footer class="md:hidden">
      <span class="block mx-auto text-xl pt-2 mb-4" style="width : fit-content">Social</span>
      <span class="ml-6">
        <span style="width : 80px" class="inline-block">Telegram</span>:
        <span class="font-bold">@sharapagorg</span>
      </span>
      <br>
      <span class="ml-6">
        <span style="width : 80px" class="inline-block">Discord</span>:
        <span class="font-bold">SharapaGorg#0049</span>
      </span>
      <br>
      <span class="ml-6">
        <span style="width : 80px" class="inline-block">Github</span>:
        <span class="font-bold">SharapaGorg</span>
      </span>
    </footer>
  </div>
</template>

<style>

footer {
  font-family: 'Comfortaa', cursive;
  background: #3A424B;
  color: white;
  margin-top: 20px;
  height: 150px;
  @apply w-full;
}

</style>

<script>

export default {
  data() {
    return {
      nightTheme: this.$store.state.turner.themeIsLight,
      isRussian: this.$store.state.turner.langIsRussian,
      rotateStep: 0
    }
  },
  computed: {
    ThemeStyle() {
      if (this.$store.state.turner.themeIsLight) {
        return {
          backgroundColor: this.$store.state.lightBackground,
          boxShadow: this.$store.state.lightShadow
        }
      } else {
        return {
          backgroundColor: this.$store.state.darkBackground,
          boxShadow: this.$store.state.darkShadow
        }
      }
    }
  },
  methods: {
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
        this.$store.commit('turner/changeTheme')
    }
  }
}

</script>
