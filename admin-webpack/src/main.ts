//import { str } from '@/add.ts'
import App from '@/App.vue'
import { createApp } from 'vue'
import router from '@/routes'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import './style.css'

console.log('hello webpack !!!')


createApp(App)
    .use(router)
    .use(createPinia())
    .use(createI18n({
        legacy: false,
        localel: 'en'
    }))
    .mount('#app')
