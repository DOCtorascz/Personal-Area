import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { createRouter, createWebHistory } from "vue-router";
import UpPage from './pages/UpPage.vue'
import LoginPage from './pages/LoginPage.vue'
import ProfilePage from './pages/UpPage.vue'
import TicketPage from './pages/TicketPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    name: 'Home',
    path: '/',
    component: UpPage,
  },
  {
    name: 'Login',
    path: '/Login',
    component: LoginPage,
  }]
})

createApp(App)
  .use(router)
  .use(PrimeVue)
  .mount('#app')


//   ,
//   {
//     name: 'Ticket',
//     path: '/Ticket',
//     component: TicketPage,
//   },
//   {
//     name: 'Profile',
//     path: '/Profile',
//     component: ProfilePage,
//   },
//   {
//     name: 'Login',
//     path: '/Login',
//     component: LoginPage,
//   }]