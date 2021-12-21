<template>
  <div class='grid grid-cols-3 grid-rows-2 justify-items-center'>
    <tech-logo logo-path="Nuxt_logo.svg" logo-title="Nuxt.js" href = 'https://nuxtjs.org/'/>

    <div style='height : 300px;' ref="SharapaLogo">
      <div class='main-logo'>
      </div>
      <span class='logo-text'>SG</span>
    </div>

    <tech-logo logo-path="Flask_logo.svg" logo-title="Flask"/>
    <tech-logo logo-path="Vue_logo.svg" logo-title="Vue.js"/>
    <tech-logo class = 'col-start-3' logo-path="Python_logo.svg" logo-title="Python"/>
  </div>
</template>

<script>

import techLogo from "@/components/TechLogo";

export default {
  name: 'IndexPage',
  data() {
    return {
      navigatorActivated: false
    }
  },
  components: {
    techLogo
  },
  methods: {
    createElement(tagName, className) {
      let newElement = document.createElement(tagName)
      newElement.className = className
      return newElement
    }
  },
  mounted() {
    let navigatorItem = this.createElement('div', 'navigator-item')
    this.$refs.SharapaLogo.appendChild(navigatorItem)

    this.$refs.SharapaLogo.addEventListener('click', () => {
      this.navigatorActivated = !this.navigatorActivated;

      setTimeout(() => {
          navigatorItem.style.opacity = this.navigatorActivated ? '1' : '0'
      }, 400)
    })
  }
}
</script>
