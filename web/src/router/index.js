// router.js

import { createRouter, createWebHistory } from 'vue-router';
import LoginHome from '../Pages/LoginHome.vue';
import shohinDetail from '../Pages/shohinDetail.vue';
import myPage from '../Pages/myPage.vue';
import tradingSeller from '../Components/organisms/tradingSeller.vue';

const routes = [
    // ルートの定義はここに
    {
        path: '/dist/',
        name: 'top',
        component: LoginHome,
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
    },
    {
        path: '/tradingSeller',
        name: 'tradingSeller',
        component: tradingSeller,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
