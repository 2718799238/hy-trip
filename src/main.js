import 'normalize.css'  //对css样式进行重置
import '@/asset/reset.css'
import "@/asset/common.css"
import { createApp } from 'vue'
import router from '@/router'
import pinia from './stores'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
