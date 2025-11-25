import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "@/components/HomeView.vue";
import ErrorDialog from "@/components/ErrorDialog.vue";
import Page1View from "@/components/Page1View.vue";
import Page2View from "@/components/Page2View.vue";
import Page3View from "@/components/Page3View.vue";
import ContexteView from "@/components/ContexteView.vue";
import FormulaireContact from "@/components/FormulaireContact.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            central: HomeView,
            footer: FormulaireContact
        },
    },
    {
        path: '/contexte',
        name: 'contexte',
        components: {
            central: ContexteView,
            footer: FormulaireContact
        },
    },
    {
        path: '/1',
        name: 'page1',
        components: {
            central: Page1View,
            footer: FormulaireContact
        },
    },
    {
        path: '/2',
        name: 'page2',
        components: {
            central: Page2View,
            footer: FormulaireContact
        },
    },
    {
        path: '/3',
        name: 'page3',
        components: {
            central: Page3View,
            footer: FormulaireContact
        },
    },
    // fallback route when no other matches => error
    {
        path: '*',
        name: 'error404',
        components: {
            central: ErrorDialog,
            footer: FormulaireContact
        }
    },
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// check for all routes needing privileges that user is authenticated
router.beforeEach((to, from, next) => {
    if (to.name === 'error404') {
        next('/')
    } else {
        next();
    }
});


export default router