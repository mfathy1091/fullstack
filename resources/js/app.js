require('./bootstrap');

import Vue from 'vue'
import router from './router'

// import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
// import jsonToHtml from './jsonToHtml'
// Vue.mixin(jsonToHtml)
// import Editor from 'vue-editor-js'
// Vue.use(Editor)

import common from './common'
Vue.mixin(common)

Vue.component('mainapp', require('./components/mainapp.vue').default);

const app = new Vue({
    el: '#app',
    router,
    // store
})