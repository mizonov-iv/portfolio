import {createRouter, createWebHistory} from "vue-router"
import HomeView from "../views/HomeView.vue"
import SkillsView from "../views/SkillsView.vue"
import PortfolioView from "../views/PortfolioView.vue";
import ContactsView from "../views/ContactsView.vue";
import ComponentsView from "../views/ComponentsView.vue"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: HomeView
        },
        {
            path: "/skills",
            component: SkillsView
        },
        {
            path: "/portfolio",
            component: PortfolioView
        },
        {
            path: "/contacts",
            component: ContactsView
        },
        {
            path: "/components",
            component: ComponentsView
        },
    ]
})