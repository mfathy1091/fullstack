import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import firstPage from './components/pages/myFirstVuePage'
import newRoutePage from './components/pages/newRoutePage'
import hooks from './components/pages/basic/hooks'
import methods from './components/pages/basic/methods'

// project pages
import home from './components/pages/home'
import tags from './components/pages/tags'

const routes = [
    // project routes
    {
        path: '/',
        component: home
    },
    {
        path: '/tags',
        component: tags
    },


    // basic tutorial routes
    {
        path: '/my-new-vue-route',
        component: firstPage
    },
    {
        path: '/new-route',
        component: newRoutePage
    },
    {
        path: '/hooks',
        component: hooks
    },
    {
        path: '/methods',
        component: methods
    }
];

export default new Router({
    mode: 'history',
    routes
})