import { createApp } from 'vue'
import { globalRegister } from './global'
import { registerElementIcon } from './global/icon/index'
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(globalRegister)
app.use(registerElementIcon)
app.use(store)
app.use(router)

app.mount('#app')
