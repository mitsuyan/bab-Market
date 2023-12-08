// router.js

import { createRouter, createWebHistory } from 'vue-router';
import TopPages from '../Pages/TopPages.vue';
import shohinDetail from '../Pages/shohinDetail.vue';
import myPage from '../Pages/myPage.vue';

const routes = [
    // ルートの定義はここに
    {
        path: '/',
        name: 'top',
        component: TopPages,
    },
    {
        path: '/shohindetail',
        name: 'shohinDetail',
        component: shohinDetail,
    },
    {
        path: '/myPage',
        name: 'my-page',
        component: myPage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
