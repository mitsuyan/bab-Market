/* Storyにコンポーネント追加 */
import ButtonRedSemicircleIconLongShadow from '../components/ButtonRedSemicircleIconLongShadow.vue';
import ButtonRedIconShadow from '../components/ButtonRedIconShadow.vue';
import ButtonRedPicture from '../Components/ButtonRedPicture.vue';
import ButtonRedMiddle from '../Components/ButtonRedMiddle.vue'

/* コンポーネントの設定 */
export default {
    title: 'ButtonVariation',
    component: ButtonRedSemicircleIconLongShadow,
    component: ButtonRedIconShadow,
    component: ButtonRedPicture,
    component: ButtonRedMiddle
};

/* story記述 */
export const LoginButton = () => ({
    components: { ButtonRedSemicircleIconLongShadow },
    template: '<ButtonRedSemicircleIconLongShadow />'
});

export const Buttonrediconshadow = () => ({
    components: { ButtonRedIconShadow },
    template: '<ButtonRedIconShadow />'
});

export const Buttonredpicture = () => ({
    components: { ButtonRedPicture },
    template: '<ButtonRedPicture />'
});

export const Buttonredmiddle = () => ({
    components: { ButtonRedMiddle },
    template: '<ButtonRedMiddle />'
});