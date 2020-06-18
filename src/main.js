import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as Sentry from '@sentry/browser';
import { Vue as VueIntegration } from '@sentry/integrations';
import JwPagination from 'jw-vue-pagination';



Sentry.init({
  dsn: 'https://87d2919f38e04833acbdd85b0b3d4291@o408386.ingest.sentry.io/5279141',
  integrations: [new VueIntegration({Vue, attachProps: true})],
});

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('jw-pagination', JwPagination);


new Vue({
  router,
   render: h => h(App)
}).$mount('#app')

