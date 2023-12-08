// LoginText.stories.js
import LoginText from '../Components/atoms/ComponentText/LoginText.vue';
import Rectangle18GrayRadius from '../Components/atoms/ComponentText/Rectangle18GrayRadius.vue';
import Rectangle56Radius from '../Components/atoms/ComponentText/Rectangle56Radius.vue';
import Rectangle33Radius from '../Components/atoms/ComponentText/Rectangle33Radius.vue';
import Rectangle47Radius from '../Components/atoms/ComponentText/Rectangle47Radius.vue';
import RectangleNotIncludedRadius from '../Components/atoms/ComponentText/RectangleNotIncludedRadius.vue';
import InputPrice from '../Components/atoms/ComponentText/InputPrice.vue';

//コンポーネントの設定
export default {
    title: 'InputTextVariation',
    component: LoginText,
};
//ストーリーの追加
export const Logininputtext = () => ({
    components: { LoginText },
    template: '<LoginText />'
});

export const Rectangle18grayradius = () => ({
    components: { Rectangle18GrayRadius },
    template: '<Rectangle18GrayRadius />'
});

export const Rectangle56radius = () => ({
    components: { Rectangle56Radius },
    template: '<Rectangle56Radius />'
});

export const Rectangle33radius = () => ({
    components: { Rectangle33Radius },
    template: '<Rectangle33Radius />'
});

export const Rectangle47radius = () => ({
    components: { Rectangle47Radius },
    template: '<Rectangle47Radius />'
});

export const Rectanglenotincludedradius = () => ({
    components: { RectangleNotIncludedRadius },
    template: '<RectangleNotIncludedRadius />'
});

export const Inputprice = () => ({
    components: { InputPrice },
    template: '<InputPrice />'
});