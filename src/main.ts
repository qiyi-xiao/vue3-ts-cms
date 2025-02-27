import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'
import store from '@/store'

import './service/axios_demo'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)

app.mount('#app')

console.log('test start')
