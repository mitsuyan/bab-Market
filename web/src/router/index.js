// router.js

import { createRouter, createWebHistory } from 'vue-router';
import TopPages from '../Pages/TopPages.vue';
import shohinDetail from '../Pages/shohinDetail.vue';

const routes = [
    // ルートの定義はここに
    {
        path: '/TopPages.vue',
        component: TopPages,
        children: [
            {
                path: '/shohinDetail.vue',
                component: shohinDetail,
                name: 'shohinDetail',
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
