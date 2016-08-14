import Vue from 'vue'
import Router from 'vue-router'
import { ellipsis, marked, articleDate, filterItem } from './filters'
import { bindHtml } from './directors'
import App from './components/App.vue'
import Header from './components/header.vue'
import CompContent from './components/content.vue'
import CompAbout from './components/about.vue'
import CompBlog from './components/blog.vue'
import CompBlogSingle from './components/blogSingle.vue'
import CompPortfolioes from './components/portfolioes.vue'
import CompPortfolio from './components/portfolio.vue'
import CompGalleries from './components/galleries.vue'
import CompGallary from './components/gallary.vue'
import Wilddog from './js/wilddog.js';
import WildVue from './js/wildvue.min.js';

Vue.use(WildVue);


// register filters globally
Vue.filter('ellipsis', ellipsis);
Vue.filter('marked', marked);
Vue.filter("articleDate",articleDate);
Vue.filter("filterItem",filterItem);

// install router
Vue.use(Router);
// routing
var router = new Router();

var vm = new Vue({
    el: '#app',
    data: {
        aid: null
    },
    components: {
        app: App
    },
    filters: {
        marked: marked
    }
});

router.map({
    '/home': {
        component: CompContent
    },
    'about': {
        component: CompAbout
    },
    'blog': {
        component: CompBlog
    },
    'blog/:id': {
        component: CompBlogSingle
    },
    "portfolio":{
        component: CompPortfolioes
    },
    "portfolio/:id": {
        component: CompPortfolio
    },
    "gallery": {
        component: CompGalleries
    },
    "gallery/:id": {
        component: CompGallary
    }
});

router.redirect({
    '*': '/home'
});

router.start(App, '#app');

