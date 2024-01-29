import './index.css'
import { createApp } from 'vue'
import { routes } from 'vue-router/auto/routes'

import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { VueQueryPlugin } from '@tanstack/vue-query'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

app.use(VueQueryPlugin)
app.use(router)
app.config.globalProperties.$cx = cx

app.mount('#app')
