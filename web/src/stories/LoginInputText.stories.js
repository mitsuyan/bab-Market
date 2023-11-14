// LoginText.stories.js
import LoginText from '../ComponentText/LoginText.vue';
import RectangleGrayRadius18 from '../ComponentText/RectangleGrayRadius18.vue';
//コンポーネントの設定
export default {
    title: 'InputTextVariation',
    component: LoginText,
    component: RectangleGrayRadius18
};
//ストーリーの追加
export const LoginInputText = () => ({
    components: { LoginText },
    template: '<LoginText />'
});

export const rectangleGrayRadius18 = () => ({
    components: { RectangleGrayRadius18 },
    template: '<RectangleGrayRadius18 />'
});