import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import 'jquery-ui'
import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/css/ui.common.css'
import '../public/css/swiper.min.css'
import '../public/css/ui.agree.css'
import '../public/css/ui.join.css'
import '../public/css/ui.login.css'
import '../public/css/ui.main.css'
import '../public/css/ui.menu.css'
import '../public/css/ui.store.css'




createApp(App).use(router).mixin(mixins).mount('#app')