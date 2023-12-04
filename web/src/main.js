import Vue from 'vue';
import App from './Pages/TopPages.vue'; // この部分を適切なファイルパスに変更

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
