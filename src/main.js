import {createApp} from 'vue'
import router from './router'
import App from './App.vue'
// import todo from './Todo_app.vue'
import store from './store'
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
// createApp(App).use(router).mount('#app')