<template>
  <div class='grid lg:grid-cols-3 lg:grid-rows-4 justify-items-center gap-4 logos'>

    <span class = 'tech-title lg:col-start-1'>Frontend-technologies</span>
    <span class = 'tech-title lg:col-start-3'>Backend-technologies</span>

    <div class = 'lg:col-start-2 row-start-1' style='height : 300px;' ref="SharapaLogo">
      <div class='main-logo'>
      </div>
      <span class='logo-text'>SG</span>
    </div>
    <div class = 'lg:col-start-1'>
      <tech-logo logo-path="Nuxt_logo.svg" logo-title="Nuxt.js" href='https://nuxtjs.org/'/>
    </div>

    <div class = 'lg:col-start-3'>
      <tech-logo logo-path="Flask_logo.svg" logo-title="Flask" href='https://flask.palletsprojects.com/en/2.0.x/'/>
    </div>
    <tech-logo logo-path="Vue_logo.svg" logo-title="Vue.js" href='https://vuejs.org/'/>
    <tech-logo class='lg:col-start-3' logo-path="Python_logo.svg" logo-title="Python" href='https://www.python.org/'/>

    <tech-logo logo-path="Tailwind_logo.svg" logo-title="TailwindCSS" href="https://tailwindcss.com/"></tech-logo>
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
