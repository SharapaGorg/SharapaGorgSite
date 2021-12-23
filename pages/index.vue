<template>
  <div>
    <div class = 'grid grid-cols-4 justify-items-center'>
      <div class='lg:col-start-2 lg:col-end-4 SharapaLogo' ref="SharapaLogo">
        <div class='main-logo'>
          <span class='logo-text'>SG</span>
        </div>
        <div class='grid grid-cols-2 justify-items-center contacts'>
          <div class='contact' ref='githubContainer' style='transform: translateX(-180px)'>
            <div ref="github">
              <contact logo-path="github.svg" href="https://github.com/SharapaGorg"/>
            </div>
          </div>
          <div class='contact' ref='telegramContainer' style='transform: translateX(180px)'>
            <div ref="telegram">
              <contact logo-path="telegram.png" href="https://t.me/sharapagorg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='grid lg:grid-cols-4 lg:grid-flow-col gap-8 justify-items-center content'>
      <div class='lg:col-start-2 lg:col-end-4 lg:row-start-1 bio'>
      <span class='bio-header'>
          {{ BioAndWork }}
      </span>
        <p class='bio-description'>
          {{ BioDescription }}
        </p>
      </div>
      <div class='lg:col-start-2 lg:col-end-4 lg:row-start-2' style='height : 100px;'>
      <span class='tech-title'>
        {{ ProjectsAndIdeas }}
      </span>
        <div class='line'></div>
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
      <span class='tech-title'>
        {{ TechnologiesAndTools }}
      </span>
        <div class='line'></div>
      </div>

      <tech-logo logo-path="Vue_logo.svg" logo-title="Vue.js" href='https://vuejs.org/'
                 class='lg:col-start-2 lg:row-start-6'/>
      <tech-logo logo-path="Nuxt_logo.svg" logo-title="Nuxt.js" href='https://nuxtjs.org/'
                 class='lg:col-start-2 lg:row-start-5'/>

      <tech-logo class='lg:col-start-3 lg:row-start-5' logo-path="Python_logo.svg" logo-title="Python"
                 href='https://www.python.org/'/>
      <tech-logo logo-path="Flask_logo.svg" logo-title="Flask" href='https://flask.palletsprojects.com/en/2.0.x/'
                 class='lg:col-start-3 lg:row-start-6'/>

      <tech-logo logo-path="Tailwind_logo.svg" logo-title="TailwindCSS" href="https://tailwindcss.com/"
                 class='lg:col-start-2 lg:row-start-7'></tech-logo>
    </div>
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
      contacts: ['github', 'telegram'],
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
    },
    changeContext() {
      let root = this.$refs.root;
        root.style.width = '0px'
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
    // let root = this.$refs.root
    //
    // setTimeout(() => {
    //   root.style.width = '0px'
    // }, 25)
    // setTimeout(() => {
    //   root.style.width = '100%'
    // }, 425)
  },
  computed: {
    BioAndWork() {
      const headers = ['Bio and work', 'О работе и жизни']
      return headers[Number(this.$store.state.turner.langIsRussian)]
    },
    BioDescription() {
      const headers = [
        'SharapaGorg is a freelance and a front-end developer based in Moscow. He loves to solve various everyday tasks with the help of code, but his favorite pastime at the moment is the creation of different types of sites with interesting design and functionality.',
        'SharapaGorg - фриланс и фронтенд разработчик из Москвы. Любит решать различные повседневные задачи с помощью кода, но на сегодняшний момент его любимое занятие - создание различных видов сайтов с интересным дизайном и функционалом.']
      return headers[Number(this.$store.state.turner.langIsRussian)]
    },
    ProjectsAndIdeas() {
      const headers = ['Projects and ideas', 'Проекты и идеи']
      return headers[Number(this.$store.state.turner.langIsRussian)]
    },
    TechnologiesAndTools() {
      const headers = ['Technologies and tools', 'Технологии и инструменты']
      return headers[Number(this.$store.state.turner.langIsRussian)]
    }
  }
}
</script>
