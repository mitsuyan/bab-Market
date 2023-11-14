// LoginText.stories.js

import LoginText from '../ComponentText/LoginText.vue';
//コンポーネントの設定
export default {
    title: 'InputTextVariation',
    component: LoginText,
};
//ストーリーの追加
export const LoginInputText = () => ({
    components: { LoginText },
    template: '<LoginText />'
});
