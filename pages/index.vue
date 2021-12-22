<template>
  <div class='grid lg:grid-cols-4 lg:grid-rows-6 justify-items-center logos'>
<!--    <div class="lg:col-start-2 lg:row-start-1 contact" style='left : 200px;'>-->
<!--    </div>-->
<!--    <div class='lg:col-start-3 lg:row-start-1 contact' style='right : 200px;'>-->
<!--    </div>-->

    <div class='lg:col-start-2 lg:col-end-4 lg:row-start-1 SharapaLogo' ref="SharapaLogo">
      <div class='main-logo'>
        <span class='logo-text'>SG</span>
      </div>
      <div class='grid grid-cols-2 justify-items-center contacts'>
        <div class = 'contact' ref = 'githubContainer' style = 'transform: translateX(-180px)'>
          <div ref="github" id='github'>
            <contact logo-path="github.svg" href="https://github.com/SharapaGorg"/>
          </div>
        </div>
        <div class = 'contact' ref = 'telegramContainer' style = 'transform: translateX(180px)'>
          <div ref="telegram" id='telegram'>
            <contact logo-path="telegram.png" href="https://t.me/sharapagorg"/>
          </div>
        </div>
      </div>
    </div>
    <div class='lg:col-start-2 lg:col-end-4 lg:row-start-2 bio'>

    </div>
    <div class='lg:col-start-2 lg:row-start-3'>
      <ProjectCard project-title="SharapaGorgSite"
                   :project-lang="['Tailwind_logo.svg', 'Vue_logo.svg', 'Nuxt_logo.svg']" project-img="Vue_logo.svg"
                   project-preview="Video1.gif"/>
    </div>
    <div class='lg:col-start-3 lg:row-start-3'>
      <ProjectCard project-title="UploadTracksToSpotify" :project-lang="['Python_logo.svg']"
                   project-img="Spotify_logo.svg"
                   project-preview="Video2.gif"/>
    </div>
    <div class='lg:col-start-2 lg:col-end-4 lg:row-start-4' style='height : 100px;'>
      <span class='tech-title'>Technologies and tools</span>
      <div class='line'></div>
    </div>

    <tech-logo logo-path="Vue_logo.svg" logo-title="Vue.js" href='https://vuejs.org/'
               class='lg:col-start-2 lg:row-start-6'/>
    <tech-logo logo-path="Nuxt_logo.svg" logo-title="Nuxt.js" href='https://nuxtjs.org/'
               class='lg:col-start-2 lg:row-start-5'/>
    <tech-logo logo-path="Tailwind_logo.svg" logo-title="TailwindCSS" href="https://tailwindcss.com/"
               class='lg:col-start-2 lg:row-start-7'></tech-logo>

    <tech-logo class='lg:col-start-3 lg:row-start-5' logo-path="Python_logo.svg" logo-title="Python"
               href='https://www.python.org/'/>
    <tech-logo logo-path="Flask_logo.svg" logo-title="Flask" href='https://flask.palletsprojects.com/en/2.0.x/'
               class='lg:col-start-3 lg:row-start-6'/>
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
      navigatorActivated: false,
      contacts: ['github', 'telegram']
    }
  },
  components: {
    techLogo,
    Contact,
    ProjectCard
  },
  methods: {
    activateContacts(activate) {
      setTimeout(() => {
        this.$refs.github.style.transform = !activate ? 'rotate(360deg)' : 'rotate(-360deg)'
        this.$refs.githubContainer.style.transform = !activate ? 'translateX(0px)' : 'translateX(-180px)'
      }, 100)

      setTimeout(() => {
        this.$refs.telegram.style.transform = !activate ? 'rotate(-360deg)' : 'rotate(360deg)'
        this.$refs.telegramContainer.style.transform = !activate ? 'translateX(0px)' : 'translateX(180px)'
      }, 100)
    }
  },
  mounted() {
    setTimeout(() => {
      this.activateContacts(false)
    }, 100)

    this.$refs.SharapaLogo.addEventListener('click', () => {
      this.navigatorActivated = !this.navigatorActivated

      this.activateContacts(this.navigatorActivated);

    })
  }
}
</script>
