import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "@/components/HomeView.vue";
import ErrorDialog from "@/components/ErrorDialog.vue";
import AProposView from "@/components/AProposView.vue";
import ProjetsView from "@/components/ProjetsView.vue";
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
            apropos: AProposView,
            footer: FormulaireContact
        },
        meta: { anchor: true }
    },
    {
        path: '/contexte',
        name: 'contexte',
        components: {
            central: ContexteView,
            footer: FormulaireContact
        },
    },
    /*
    {
        path: '/apropos',
        name: 'apropos',
        components: {
            footer: FormulaireContact
        },
    },*/
    {
        path: '/projets',
        name: 'projets',
        components: {
            central: ProjetsView,
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
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
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