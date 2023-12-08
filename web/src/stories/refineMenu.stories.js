import refineMenu from '../Components/moleclese/refineMenu.vue';
import myAcount from '../Components/moleclese/myAcount.vue';
import comentText from '../Components/moleclese/comentText.vue';
/* コンポーネントの設定 */
export default {
    title: 'refine',
    component: refineMenu,
};

/* story記述 */
export const refineMenues = () => ({
    components: { refineMenu },
    template: '<refineMenu :categoryId=1 />'
});

export const refineMenuesNocheckbox = () => ({
    components: { refineMenu },
    template: '<refineMenu :categoryId=5 />'
});

export const myacount = () => ({
    components: { myAcount },
    template: '<myAcount />'
});

export const comenttext = () => ({
    components: { comentText },
    template: '<comentText />'
});

export const majorRefineMenuesNocheckbox = () => ({
    components: { refineMenu },
    template: '<refineMenu :categoryId=0 menu="majorCategoryMenu" />'
});