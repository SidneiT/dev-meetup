import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import pt from 'vuetify/es5/locale/pt'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  lang: {
    locales: { pt },
    current: 'pt'
  },
  theme: {
    primary: '#009688',
    secondary: '#607d8b',
    accent: '#cddc39',
    error: '#f44336',
    warning: '#ff9800',
    info: '#03a9f4',
    success: '#4caf50'
  }
})
