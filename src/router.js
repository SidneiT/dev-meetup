import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Meetups from './components/Meetup/Meetups'
import Meetup from './components/Meetup/Meetup'
import CreateMeetup from './components/Meetup/CreateMeetup'
import Profile from './components/User/Profile'
import Signup from './components/User/Signup'
import Signin from './components/User/Signin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'meetups',
      component: Meetups
    },
    {
      path: '/meetup/new',
      name: 'createMeetup',
      component: CreateMeetup
    },
    {
      path:'/meetup/:id',
      name:'meetup',
      component: Meetup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
  ]
})
