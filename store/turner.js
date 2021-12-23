export const state = () => ({
  langIsRussian : false,
  themeIsLight : true
})

export const mutations = {
  changeLang(state) {
    state.langIsRussian = !state.langIsRussian;
  },
  changeTheme(state) {
    state.themeIsLight = !state.themeIsLight
  }
}

export const actions = {}

export const getters = {
  getLang : (state) => {
    return state.langIsRussian;
  },
  getTheme : (state) => {
    return state.themeIsLight;
  }
}
