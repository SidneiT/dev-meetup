import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        src: "https://img.dgabc.com.br/Imagens/201843082513.jpg?largura=945",
        id: "a09fei09seif0932",
        title: "Meetup in Diadema",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi itaque vero deserunt cum mollitia qui et natus odio maiores placeat repellat repellendus unde, exercitationem, quibusdam dolor quo asperiores nobis incidunt.',
        date: '2017-06-19'
      },
      {
        src:
          "https://s3.amazonaws.com/bucket-gw-cni-static-cms-si/portaldaindustria/noticias/media/imagem_plugin/sopaulo_Ed2fQ4p.jpg",
        id: "a09fei09seif0933",
        title: "Meetup in São Paulo",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi itaque vero deserunt cum mollitia qui et natus odio maiores placeat repellat repellendus unde, exercitationem, quibusdam dolor quo asperiores nobis incidunt.',
        date: '2017-06-01'
      }
    ],
    user: {
      id: 'asdfas123fd',
      registeredMeetups: ['a09fei09seif0933']
    }
  },
  mutations: {
    createMeetup(state, meetup) {
      state.loadedMeetups.push(meetup)
    }
  },
  actions: {
    createMeetup({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        src: payload.imageUrl,
        description: payload.description
      }
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => meetupA.date > meetupB.date)
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup(state) {
      return id => state.loadedMeetups.find(meetup => meetup.id == id)
    }
  }
})
