<template>
  <div class='grid lg:grid-cols-4 lg:grid-rows-4 justify-items-center gap-4 logos'>

    <div class='lg:col-start-1 '>
      <span class='tech-title'>Frontend</span>
    </div>
    <div class='lg:col-start-4 lg:row-start-1'>
      <span class='tech-title'>Backend</span>
    </div>

    <div class='lg:col-start-2 lg:col-end-4 row-start-1' style='height : 300px;' ref="SharapaLogo">
      <div class='main-logo'>
      </div>
      <span class='logo-text'>SG</span>
    </div>
    <div class='lg:col-start-1'>
      <tech-logo logo-path="Nuxt_logo.svg" logo-title="Nuxt.js" href='https://nuxtjs.org/'/>
    </div>
    <div class='lg:col-start-2 lg:row-start-2'>
      <ProjectCard project-title="SharapaGorgSite"
                   :project-lang="['Tailwind_logo.svg', 'Vue_logo.svg', 'Nuxt_logo.svg']" project-img="Vue_logo.svg"
                   project-preview="Video1.gif"/>
    </div>
    <div class='lg:col-start-3 lg:row-start-2'>
      <ProjectCard project-title="UploadTrackToSpotify" :project-lang="['Python_logo.svg']"
                   project-img="Python_logo.svg"
                   project-preview="Video1.gif"/>
    </div>
    <div class='lg:col-start-2 lg:col-end-4 contacts lg:row-start-2' ref='contacts'>
      <contact logo-path="github.svg" href="https://github.com/SharapaGorg"/>
      <contact logo-path="telegram.png" href="https://t.me/sharapagorg" style='margin-top : 25px'/>
    </div>
    <div class='lg:col-start-4 lg:row-start-2'>
      <tech-logo logo-path="Flask_logo.svg" logo-title="Flask" href='https://flask.palletsprojects.com/en/2.0.x/'/>
    </div>
    <tech-logo logo-path="Vue_logo.svg" logo-title="Vue.js" href='https://vuejs.org/'/>
    <tech-logo class='lg:col-start-4' logo-path="Python_logo.svg" logo-title="Python" href='https://www.python.org/'/>

    <tech-logo logo-path="Tailwind_logo.svg" logo-title="TailwindCSS" href="https://tailwindcss.com/"></tech-logo>
  </div>
</template>

<script>

import Contact from "@/components/Contact";
import techLogo from "@/components/TechLogo";
import ProjectCard from "@/components/ProjectCard";

export default {
  name: 'IndexPage',
  data() {
    return {
      navigatorActivated: false
    }
  },
  components: {
    techLogo,
    Contact,
    ProjectCard
  },
  methods: {
    createElement(tagName, className) {
      let newElement = document.createElement(tagName)
      newElement.className = className
      return newElement
    }
  },
  mounted() {
    this.$refs.SharapaLogo.addEventListener('click', () => {
      this.navigatorActivated = !this.navigatorActivated;

      setTimeout(() => {
        this.$refs.contacts.style.opacity = this.navigatorActivated ? '1' : '0'
        console.log(1)
      }, 400)
    })
  }
}
</script>
