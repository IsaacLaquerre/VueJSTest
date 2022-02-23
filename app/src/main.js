import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { useCookies } from "vue3-cookies";
import Home from "./components/en/HomePage.vue";
import Accueil from "./components/fr/PageAccueil.vue";
import NotFound from "./components/en/NotFound.vue";
import PageIntrouvable from "./components/fr/PageIntrouvable.vue";
import App from './App.vue';

const { cookies } = useCookies();

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "lang", redirect: "/" + selectLang(getCookie("lang")) },
        { path: "/en", name: "Home", component: Home, props: { title: "Isaac Laquerre" } },
        { path: "/fr", name: "Accueil", component: Accueil, props: { title: "Isaac Laquerre" } },
        { path: "/:pathMatch(.*)*", name: "404 Not Found", component: (selectLang(getCookie("lang")) === "en" ? NotFound : PageIntrouvable), props: { title: (selectLang(getCookie("lang")) === "en" ? "404 Not Found" : "404 Page Introuvable") } }
    ]
});

createApp(App).use(router).mount("#body");

router.isReady().then(() => {
    router.push(window.location.pathname + (window.location.hash.length > 0 ? window.location.hash : ""));
    router.resolve({ path: window.location.pathname + (window.location.hash.length > 0 ? window.location.hash : "") });
}).catch(err => console.error(err));


function getCookie(query) {
    return cookies.get(query) || undefined;
}

function selectLang(lang) {
    return (lang != undefined ? lang : "en");
}