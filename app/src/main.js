import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { useCookies } from "vue3-cookies";
import Home from "./components/HomePage.vue";
import Accueil from "./components/PageAccueil.vue";
import NotFound from "./components/NotFound.vue";
import PageIntrouvable from "./components/PageIntrouvable.vue";
import App from './App.vue';

const { cookies } = useCookies();

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "lang", redirect: "/" + selectLang(getCookie("lang")) },
        { path: "/en", name: "Home", component: Home, props: { title: "Isaac Laquerre" } },
        { path: "/fr", name: "Accueil", component: Accueil, props: { title: "Isaac Laquerre" } },
        { path: "/en/404", name: "404 Not Found", component: NotFound, props: { title: "404 Not Found" } },
        { path: "/fr/404", name: "404 Introuvable", component: PageIntrouvable, props: { title: "404 Introuvable" } }
    ]
});

createApp(App).use(router).mount("#app");

router.isReady().then(() => {
    if (window.location.hash.length > 0) {
        router.push(window.location.pathname + window.location.hash);
        router.resolve({ path: window.location.pathname + window.location.hash });
    } else {
        router.push(window.location.pathname);
        router.resolve({ path: window.location.pathname });
    }
}).catch(err => console.error(err));


function getCookie(query) {
    return cookies.get(query) || undefined;
}

function selectLang(lang) {
    return (lang != undefined ? lang : "en");
}